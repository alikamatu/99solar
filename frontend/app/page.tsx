"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import React, { useState } from "react";

const mockData = [
  { id: 7023289, model: "iPhone 11 Pro", storage: "256GB", disposition: "DNB", quantity_available: 25, unit_price: 171.77 },
  { id: 7023373, model: "iPhone 12 Pro Max", storage: "256GB", disposition: "DNA", quantity_available: 48, unit_price: 328.36 },
  { id: 7023393, model: "iPhone 13 Mini", storage: "128GB", disposition: "DNB", quantity_available: 24, unit_price: 153.56 },
];

export default function Dashboard() {
const router = useRouter();

useEffect(() => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  if (!isAuthenticated) {
    router.push('/login');
  }
}, [router]);

const [selectedBid, setSelectedBid] = useState(null);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Available Bidding Lots</h2>
      <div className="grid grid-cols-3 gap-4">
        {mockData.map((lot) => (
          <div
            key={lot.id}
            className="border rounded-lg p-4 shadow cursor-pointer hover:bg-gray-100"
          >
            <h3 className="text-xl font-semibold">{lot.model} ({lot.storage})</h3>
            <p>Dispo: {lot.disposition}</p>
            <p>Qty: {lot.quantity_available}</p>
            <p className="font-bold">${lot.unit_price} per unit</p>
          </div>
        ))}
      </div>

      {selectedBid && (
        <div className="mt-6 p-6 border rounded-lg shadow-lg">
          <input type="number" placeholder="Enter bid quantity" className="border p-2 rounded-md w-full mt-2" />
          <button className="bg-blue-600 text-white p-3 rounded mt-4">Submit Bid</button>
        </div>
      )}
    </div>
  );
}