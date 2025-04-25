"use client";

import { useState, useEffect, useCallback } from "react";
import {
  DataGrid,
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
import { GridRenderCellParams } from "@mui/x-data-grid";
import { Gavel, Cancel, CheckCircle } from "@mui/icons-material";

export default function LotsAndBidsPage() {
  const [lots, setLots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  interface Lot {
    id: number;
    lot_number: string;
    item_description: string;
    quantity: number;
    base_price: number;
  }

  const [placingBid, setPlacingBid] = useState<Lot | null>(null);
  const [bidAmount, setBidAmount] = useState("");
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: "success" | "error" | "warning" | "info" }>({
    open: false,
    message: "",
    severity: "success",
  });
  const [filters, setFilters] = useState({ page: 1, limit: 20 });
  const [totalPages, setTotalPages] = useState(1);

  const fetchLots = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      // Convert filters to strings
      const queryParams = new URLSearchParams(
        Object.fromEntries(
          Object.entries(filters).map(([key, value]) => [key, String(value)])
        )
      ).toString();
  
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
      setTotalPages(data.totalPages || 1);
    } catch (error) {
      console.error("Error fetching lots:", error);
      setError("Failed to load lots. Please try again.");
      setSnackbar({ open: true, message: "Failed to load lots.", severity: "error" });
    } finally {
      setLoading(false);
    }
  }, [filters]);

  const handleBidSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const bidValue = parseFloat(bidAmount);
  
    // Ensure placingBid is not null
    if (!placingBid) {
      setSnackbar({
        open: true,
        message: "No lot selected for bidding.",
        severity: "error",
      });
      return;
    }
  
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
    { field: "lot_number", headerName: "Lot ID", width: 100 },
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
      renderCell: (params: GridRenderCellParams) => (
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
            paginationModel={{ pageSize: filters.limit, page: filters.page - 1 }}
            pageSizeOptions={[20]}
            disableRowSelectionOnClick
            autoHeight
            getRowId={(row) => row.id}
            className="border-0"
          />
          <div className="flex justify-center py-4">
            <Pagination
              count={totalPages}
              page={filters.page}
              onChange={(e, page) => setFilters({ ...filters, page: page })}
              color="primary"
            />
          </div>
        </div>
      )}

      {/* Bid Dialog */}
      <Dialog open={!!placingBid} onClose={() => setPlacingBid(null)}>
        <DialogTitle>Place Bid for Lot #{placingBid?.lot_number}</DialogTitle>
        <DialogContent>
          <div className="space-y-2 mb-4">
            <p><strong>Description:</strong> {placingBid?.item_description}</p>
            <p><strong>Quantity:</strong> {placingBid?.quantity}</p>
            <p><strong>Base Price:</strong> ${Number(placingBid?.base_price || 0).toFixed(2)}</p>
          </div>
          <form onSubmit={handleBidSubmit}>
            <TextField
              label="Bid Amount"
              type="number"
              inputProps={{ step: "0.01" }}
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              fullWidth
              required
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
              helperText={`Must be higher than $${Number(placingBid?.base_price || 0).toFixed(2)}`}
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
            onClick={(e) => {
              e.preventDefault();
              handleBidSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
            }}
            color="primary"
            variant="contained"
            startIcon={<CheckCircle />}
            disabled={!bidAmount || parseFloat(bidAmount) <= (placingBid?.base_price ?? 0)}
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