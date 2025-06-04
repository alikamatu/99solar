// app/lots/LotsPage.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { CircularProgress, Snackbar, Alert, Button } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Lot, SnackbarState } from "@/app/lots/type";
import { fetchAllLots } from "./api/lotsService";
import FileUploadForm from "../components/FileUploadForm";
import ClearAllButton from "../components/ClearAllButton";
import LotsTable from "../components/LotsTable";
import EditLotDialog from "../components/EditLotDialog";

export default function LotsPage() {
  const [lots, setLots] = useState<Lot[]>([]);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: "",
    severity: "success",
  });
  const [filters, setFilters] = useState({ page: 1, limit: 20 });
  const [totalPages, setTotalPages] = useState(1);
  const [editingLot, setEditingLot] = useState<Lot | null>(null);

  const showNotification = (
    message: string,
    severity: SnackbarState["severity"]
  ) => {
    setSnackbar({ open: true, message, severity });
  };

  const fetchLots = useCallback(async () => {
    setLoading(true);
    try {
      const { data, totalPages } = await fetchAllLots(filters);
      setLots(data);
      setTotalPages(totalPages);
    } catch (error) {
      showNotification("Failed to load lots", "error");
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchLots();
  }, [fetchLots]);

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="container mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Lots Management</h1>

        <FileUploadForm 
          onUploadSuccess={fetchLots} 
          showNotification={showNotification}
        />

        <ClearAllButton 
          onClearSuccess={() => setLots([])} 
          showNotification={showNotification}
        />

        <LotsTable
          lots={lots}
          loading={loading}
          filters={filters}
          totalPages={totalPages}
          setFilters={setFilters}
          setEditingLot={setEditingLot}
          showNotification={showNotification}
        />

        {editingLot && (
          <EditLotDialog
            lot={editingLot}
            onClose={() => setEditingLot(null)}
            onSaveSuccess={(updatedLot) => {
              setLots(lots.map(l => l.id === updatedLot.id ? updatedLot : l));
              showNotification("Lot updated successfully", "success");
            }}
            showNotification={showNotification}
          />
        )}

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </div>
    </LocalizationProvider>
  );
}