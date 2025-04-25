"use client";

import { useState, useEffect, useCallback } from "react";
import {
  DataGrid,
} from "@mui/x-data-grid";
import {
  TextField,
  Select,
  MenuItem,
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
import { Search, Clear, CheckCircle, Cancel } from "@mui/icons-material";
import { debounce } from "lodash";

type Bid = {
  id: string;
  lot_id: string;
  user_id: string;
  status: string;
};

export default function BidManagementPage() {
  const [bids, setBids] = useState<Bid[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState({
    status: "",
    lot_id: "",
    user_id: "",
    page: 1,
    limit: 20,
  });
  const [awardingBid, setAwardingBid] = useState<Bid | null>(null);
  const [awardForm, setAwardForm] = useState({
    final_price: "",
    commission: "",
  });
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const [totalPages, setTotalPages] = useState(1);

  const fetchBids = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      // Convert filters to a string-compatible object
      const queryParams = new URLSearchParams(
        Object.entries({
          ...filters,
          page: filters.page.toString(),
          limit: filters.limit.toString(),
        })
      ).toString();

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bids?${queryParams}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch bids.");
      }

      const data = await response.json();
      setBids(data.bids || []);
      setTotalPages(data.totalPages || 1); // Assume API returns totalPages
    } catch (error) {
      console.error("Error fetching bids:", error);
      setError("Failed to load bids. Please try again.");
      setSnackbar({ open: true, message: "Failed to load bids.", severity: "error" });
    } finally {
      setLoading(false);
    }
  }, [filters]);

  const debouncedFetchBids = useCallback(debounce(fetchBids, 300), [fetchBids]);

  const handleAwardSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!awardingBid) {
      setSnackbar({ open: true, message: "No bid selected for awarding.", severity: "error" });
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bids/${awardingBid.id}/award`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(awardForm),
      });

      if (!response.ok) {
        throw new Error("Failed to award bid.");
      }

      const updatedBid = await response.json();
      setBids((prevBids: Bid[]) =>
        prevBids.map((bid) => (bid.id === updatedBid.id ? updatedBid : bid))
      );
      setAwardingBid(null);
      setSnackbar({ open: true, message: "Bid awarded successfully!", severity: "success" });
    } catch (error) {
      console.error("Error awarding bid:", error);
      setSnackbar({ open: true, message: "Failed to award bid.", severity: "error" });
    }
  };

  const handleClearFilters = () => {
    setFilters({ status: "", lot_id: "", user_id: "", page: 1, limit: 20 });
    debouncedFetchBids();
  };

  useEffect(() => {
    debouncedFetchBids();
  }, [filters, debouncedFetchBids]);

  const columns = [
    { field: "id", headerName: "Bid ID", width: 100 },
    { field: "lot_id", headerName: "Lot ID", width: 150 },
    { field: "user_id", headerName: "User ID", width: 150 },
    { field: "status", headerName: "Status", width: 120 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) =>
        params.row.status === "pending" ? (
          <Tooltip title="Award this bid">
            <Button
              variant="contained"
              color="success"
              size="small"
              startIcon={<CheckCircle />}
              onClick={() => setAwardingBid(params.row)}
            >
              Award
            </Button>
          </Tooltip>
        ) : null,
    },
  ];

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Bid Management</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-lg shadow">
        <Select
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          displayEmpty
          className="w-full md:w-1/4"
          startAdornment={<InputAdornment position="start"><Search /></InputAdornment>}
        >
          <MenuItem value="">All Statuses</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="awarded">Awarded</MenuItem>
          <MenuItem value="rejected">Rejected</MenuItem>
        </Select>
        <TextField
          label="Lot ID"
          value={filters.lot_id}
          onChange={(e) => setFilters({ ...filters, lot_id: e.target.value })}
          className="w-full md:w-1/4"
          InputProps={{
            startAdornment: <InputAdornment position="start"><Search /></InputAdornment>,
          }}
        />
        <TextField
          label="User ID"
          value={filters.user_id}
          onChange={(e) => setFilters({ ...filters, user_id: e.target.value })}
          className="w-full md:w-1/4"
          InputProps={{
            startAdornment: <InputAdornment position="start"><Search /></InputAdornment>,
          }}
        />
        <div className="flex gap-2">
          <Button
            variant="contained"
            color="primary"
            onClick={debouncedFetchBids}
            className="w-full md:w-auto"
          >
            Apply Filters
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<Clear />}
            onClick={handleClearFilters}
            className="w-full md:w-auto"
          >
            Clear
          </Button>
        </div>
      </div>

      {/* Bids Table */}
      {loading ? (
        <div className="flex justify-center py-10">
          <CircularProgress />
        </div>
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : bids.length === 0 ? (
        <Alert severity="info">
          No bids available. Try adjusting the filters or adding new bids.
        </Alert>
      ) : (
        <div className="bg-white rounded-lg shadow">
          <DataGrid
            rows={bids}
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

      {/* Award Dialog */}
      <Dialog open={!!awardingBid} onClose={() => setAwardingBid(null)}>
        <DialogTitle>Award Bid #{awardingBid?.id}</DialogTitle>
        <DialogContent>
          <form onSubmit={handleAwardSubmit} className="space-y-4">
            <TextField
              label="Final Price"
              type="number"
              step="0.01"
              value={awardForm.final_price}
              onChange={(e) => setAwardForm({ ...awardForm, final_price: e.target.value })}
              fullWidth
              required
            />
            <TextField
              label="Commission"
              type="number"
              step="0.01"
              value={awardForm.commission}
              onChange={(e) => setAwardForm({ ...awardForm, commission: e.target.value })}
              fullWidth
              required
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setAwardingBid(null)}
            color="secondary"
            startIcon={<Cancel />}
          >
            Cancel
          </Button>
          <Button
            onClick={handleAwardSubmit}
            color="primary"
            variant="contained"
            startIcon={<CheckCircle />}
          >
            Submit
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
};