import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { Button, Tooltip, Pagination, CircularProgress, Alert } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { SnackbarState, Filters, Lot } from "@/app/lots/type";


interface LotsTableProps {
  lots: Lot[];
  loading: boolean;
  filters: Filters;
  totalPages: number;
  setFilters: (filters: Filters) => void;
  setEditingLot: (lot: Lot) => void;
  showNotification: (message: string, severity: SnackbarState["severity"]) => void;
}

export default function LotsTable({
  lots,
  loading,
  filters,
  totalPages,
  setFilters,
  setEditingLot,
  showNotification
}: LotsTableProps) {
  const handleDelete = async (lotId: string | number) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/lots/${lotId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      if (!response.ok) throw new Error("Deletion failed");
      showNotification("Lot deleted successfully", "success");
      return true;
    } catch (error) {
      showNotification("Failed to delete lot", "error");
      return false;
    }
  };

  const columns = [
    { field: "lot_number", headerName: "Lot Number", width: 120 },
    { field: "item_description", headerName: "Description", width: 200 },
    { field: "quantity", headerName: "Quantity", width: 120 },
    { field: "commission_rate", headerName: "Commission (%)", width: 120 },
    { field: "available_from", headerName: "Available From", width: 150 },
    { field: "available_to", headerName: "Available To", width: 150 },
    { field: "base_price", headerName: "Base Price", width: 120 },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params: GridRenderCellParams) => (
        <div className="flex gap-2">
          <Tooltip title="Edit">
            <Button
              variant="contained"
              color="primary"
              size="small"
              startIcon={<EditIcon />}
              onClick={() => setEditingLot(params.row)}
            >
              Edit
            </Button>
          </Tooltip>
          <Tooltip title="Delete">
            <Button
              variant="outlined"
              color="error"
              size="small"
              startIcon={<DeleteIcon />}
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </Button>
          </Tooltip>
        </div>
      ),
    },
  ];

  if (loading) return <CircularProgress className="block mx-auto mt-10" />;
  
  if (!lots.length) {
    return (
      <Alert severity="info" className="my-6">
        No lots available. Try uploading a file.
      </Alert>
    );
  }

  return (
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
          onChange={(_, page) => setFilters({ ...filters, page })}
          color="primary"
        />
      </div>
    </div>
  );
}