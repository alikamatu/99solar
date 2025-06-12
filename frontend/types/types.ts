export interface BidData {
  listingId: string;
  oem: string;
  sku: string;
  description: string;
  disposition: string;
  quantity: number;
  unitPrice: number;
  fileName: string;
}

export interface SavedReport {
  id: number;
  report_date: string;
  report_data: BidData[];
  created_at: string;
}