"use client";

import { useState, useEffect } from "react";
export default function LotsPage() {
  const [lots, setLots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [editingLot, setEditingLot] = useState<any>(null); // State for the lot being edited
  const [editForm, setEditForm] = useState({
    available_from: "",
    available_to: "",
    commission_rate: "",
  });

  // Fetch lots from the backend
  const fetchLots = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/lots`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Include the token
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch lots.");
      }

      const data = await response.json();
      setLots(data);
    } catch (error) {
      console.error("Error fetching lots:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle file upload
  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/lots/upload`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Include the token
        },
      });

      if (!response.ok) {
        throw new Error("Failed to upload file.");
      }

      const data = await response.json();
      fetchLots(); // Refresh the list of lots
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  // Handle edit button click
  const handleEditClick = (lot: any) => {
    setEditingLot(lot);
    setEditForm({
      available_from: lot.available_from || "",
      available_to: lot.available_to || "",
      commission_rate: lot.commission_rate || "",
    });
  };

  // Handle edit form submission
  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/lots/${editingLot.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Include the token
        },
        body: JSON.stringify(editForm),
      });

      if (!response.ok) {
        throw new Error("Failed to update lot.");
      }

      const updatedLot = await response.json();
      setLots((prevLots) =>
        prevLots.map((lot) => (lot.id === updatedLot.id ? updatedLot : lot))
      );
      setEditingLot(null); // Close the edit form
    } catch (error) {
      console.error("Error updating lot:", error);
    }
  };

  useEffect(() => {
    fetchLots();
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Lots Management</h1>

      {/* File Upload Form */}
      <form onSubmit={handleUpload} className="flex items-center space-x-4">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="border p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Upload Lots
        </button>
      </form>

      {/* Lots Table */}
      {loading ? (
        <p>Loading lots...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Lot Number</th>
              <th className="border border-gray-300 px-4 py-2">Description</th>
              <th className="border border-gray-300 px-4 py-2">Quantity</th>
              <th className="border border-gray-300 px-4 py-2">Base Price</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {lots.map((lot: any) => (
              <tr key={lot.id}>
                <td className="border border-gray-300 px-4 py-2">{lot.lot_number}</td>
                <td className="border border-gray-300 px-4 py-2">{lot.item_description}</td>
                <td className="border border-gray-300 px-4 py-2">{lot.quantity}</td>
                <td className="border border-gray-300 px-4 py-2">${lot.base_price}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                    onClick={() => handleEditClick(lot)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Edit Form */}
      {editingLot && (
        <form onSubmit={handleEditSubmit} className="space-y-4 mt-4">
          <h2 className="text-xl font-bold">Edit Lot</h2>
          <div>
            <label className="block">Available From:</label>
            <input
              type="date"
              value={editForm.available_from}
              onChange={(e) => setEditForm({ ...editForm, available_from: e.target.value })}
              className="border p-2 w-full"
            />
          </div>
          <div>
            <label className="block">Available To:</label>
            <input
              type="date"
              value={editForm.available_to}
              onChange={(e) => setEditForm({ ...editForm, available_to: e.target.value })}
              className="border p-2 w-full"
            />
          </div>
          <div>
            <label className="block">Commission Rate:</label>
            <input
              type="number"
              step="0.01"
              value={editForm.commission_rate}
              onChange={(e) => setEditForm({ ...editForm, commission_rate: e.target.value })}
              className="border p-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save Changes
          </button>
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 ml-2"
            onClick={() => setEditingLot(null)} // Cancel editing
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
}