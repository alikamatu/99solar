"use client";

import { useState, useEffect, useCallback } from "react";
import {
  DataGrid,
  GridColDef,
} from "@mui/x-data-grid";
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  Snackbar,
  Alert,
  Tooltip,
  Pagination,
  InputAdornment,
} from "@mui/material";
import { Gavel, Cancel, CheckCircle } from "@mui/icons-material";

export default function LotsAndBidsPage() {
  const [lots, setLots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [placingBid, setPlacingBid] = useState(null);
  const [bidAmount, setBidAmount] = useState("");
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const [filters, setFilters] = useState({ page: 1, limit: 20 });
  const [totalPages, setTotalPages] = useState(1);

  const fetchLots = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const queryParams = new URLSearchParams(filters).toString();
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/lots?${queryParams}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch lots.");
      }
  
      const data = await response.json();
      console.log("API Response:", data); // Debug the API response
      setLots(data || []); // Assume API returns { lots: [], totalPages }
      // setTotalPages(data.totalPages || 1);
    } catch (error) {
      console.error("Error fetching lots:", error);
      setError("Failed to load lots. Please try again.");
      setSnackbar({ open: true, message: "Failed to load lots.", severity: "error" });
    } finally {
      setLoading(false);
    }
  }, [filters]);

  const handleBidSubmit = async (e) => {
    e.preventDefault();
    const bidValue = parseFloat(bidAmount);

    // Basic validation
    if (bidValue <= placingBid.base_price) {
      setSnackbar({
        open: true,
        message: `Bid must be higher than the base price ($${placingBid.base_price}).`,
        severity: "error",
      });
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bids/addbid`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          userId: localStorage.getItem("userId"),
          lot_id: placingBid.id,
          bid_amount: bidValue,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to place bid.");
      }

      setPlacingBid(null);
      setBidAmount("");
      fetchLots();
      setSnackbar({ open: true, message: "Bid placed successfully!", severity: "success" });
    } catch (error) {
      console.error("Error placing bid:", error);
      setSnackbar({ open: true, message: "Failed to place bid.", severity: "error" });
    }
  };

  useEffect(() => {
    fetchLots();
  }, [fetchLots]);

  const columns = [
    { field: "id", headerName: "Lot ID", width: 100 },
    { field: "item_description", headerName: "Description", width: 200 },
    { field: "quantity", headerName: "Quantity", width: 120 },
    {
      field: "base_price",
      headerName: "Base Price",
      width: 120,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <Tooltip title="Place a bid on this lot">
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<Gavel />}
            onClick={() => setPlacingBid(params.row)}
          >
            Place Bid
          </Button>
        </Tooltip>
      ),
    },
  ];

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Lots and Bids</h1>

      {/* Lots Table */}
      {loading ? (
        <div className="flex justify-center py-10">
          <CircularProgress />
        </div>
      ) : error ? (
        <Alert severity="error">{error}</Alert>

      ) : (
        <div className="bg-white rounded-lg shadow">
          <DataGrid
            rows={lots}
            columns={columns}
            pageSize={filters.limit}
            rowsPerPageOptions={[20]}
            disableSelectionOnClick
            autoHeight
            getRowId={(row) => row.id}
            className="border-0"
          />
          <div className="flex justify-center py-4">
            <Pagination
              count={totalPages}
              page={filters.page}
              onChange={(e, page) => setFilters({ ...filters, page })}
              color="primary"
            />
          </div>
        </div>
      )}

      {/* Bid Dialog */}
      <Dialog open={!!placingBid} onClose={() => setPlacingBid(null)}>
        <DialogTitle>Place Bid for Lot #{placingBid?.id}</DialogTitle>
        <DialogContent>
          <div className="space-y-2 mb-4">
            <p><strong>Description:</strong> {placingBid?.item_description}</p>
            <p><strong>Quantity:</strong> {placingBid?.quantity}</p>
            <p><strong>Base Price:</strong> ${placingBid?.base_price?.toFixed(2)}</p>
          </div>
          <form onSubmit={handleBidSubmit}>
            <TextField
              label="Bid Amount"
              type="number"
              step="0.01"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              fullWidth
              required
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
              helperText={`Must be higher than $${placingBid?.base_price?.toFixed(2)}`}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setPlacingBid(null)}
            color="secondary"
            startIcon={<Cancel />}
          >
            Cancel
          </Button>
          <Button
            onClick={handleBidSubmit}
            color="primary"
            variant="contained"
            startIcon={<CheckCircle />}
            disabled={!bidAmount || parseFloat(bidAmount) <= placingBid?.base_price}
          >
            Submit Bid
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for Feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}