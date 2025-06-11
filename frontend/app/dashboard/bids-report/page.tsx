'use client';

import { useState, useCallback } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { Button, Card, CircularProgress, Snackbar, Alert } from '@mui/material';
import PublishIcon from '@mui/icons-material/Publish';
import DescriptionIcon from '@mui/icons-material/Description';

interface BidData {
  listingId: string;
  oem: string;
  sku: string;
  description: string;
  disposition: string;
  quantity: number;
  unitPrice: number;
  fileName: string;
}

export default function BidReportGenerator() {
  const [files, setFiles] = useState<File[]>([]);
  const [processing, setProcessing] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error' | 'warning' | 'info',
  });
  const [results, setResults] = useState<any[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const parseExcel = useCallback((file: File): Promise<BidData[]> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        try {
          const data = e.target?.result as ArrayBuffer;
          const workbook = XLSX.read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          
          // Skip header row (row 1) and start from row 2
          const jsonData: any[] = XLSX.utils.sheet_to_json(worksheet, { header: 1, range: 1 });
          
          const parsedData: BidData[] = jsonData
            .filter(row => row.length >= 7)
            .map(row => ({
              listingId: String(row[0]),
              oem: String(row[1] || ''),
              sku: String(row[2] || ''),
              description: String(row[3] || ''),
              disposition: String(row[4] || ''),
              quantity: Number(row[5]) || 0,
              unitPrice: Number(row[6]) || 0,
              fileName: file.name
            }))
            .filter(item => item.unitPrice > 0); // Only include items with valid bids
          
          resolve(parsedData);
        } catch (error) {
          reject(error);
        }
      };
      
      reader.onerror = () => reject(new Error('File reading failed'));
      reader.readAsArrayBuffer(file);
    });
  }, []);

  const processFiles = async () => {
    if (files.length === 0) {
      setSnackbar({
        open: true,
        message: 'Please select at least one file',
        severity: 'warning'
      });
      return;
    }

    setProcessing(true);
    
    try {
      // Process all files in parallel
      const allData = await Promise.all(files.map(parseExcel));
      const combinedData = allData.flat();
      
      // Aggregate by SKU to find highest bidder
      const aggregated = combinedData.reduce((acc: Record<string, BidData>, item) => {
        const existing = acc[item.listingId];
        
        if (!existing || item.unitPrice > existing.unitPrice) {
          acc[item.listingId] = item;
        }
        
        return acc;
      }, {});
      
      const highestBids = Object.values(aggregated);
      setResults(highestBids);
      
      setSnackbar({
        open: true,
        message: `Processed ${files.length} files. Found ${highestBids.length} highest bids.`,
        severity: 'success'
      });
    } catch (error) {
      console.error('Processing error:', error);
      setSnackbar({
        open: true,
        message: 'Failed to process files. Please check file formats.',
        severity: 'error'
      });
    } finally {
      setProcessing(false);
    }
  };

  const generateReport = () => {
    if (results.length === 0) {
      setSnackbar({
        open: true,
        message: 'No data to generate report',
        severity: 'warning'
      });
      return;
    }

    try {
        // Format data for Excel
        const reportData = results.map(item => ({
        'Listing ID': item.listingId,
        'SKU': item.sku,
        'OEM': item.oem,
        'Description': item.description,
        'Highest Bid ($)': item.unitPrice,
        'Quantity': item.quantity,
        'Disposition': item.disposition,
        'Source File': item.fileName
      }));

      // Create worksheet
      const worksheet = XLSX.utils.json_to_sheet(reportData);
      
      // Create workbook
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Highest Bids');
      
      // Generate Excel file
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      
      // Save file
      saveAs(blob, `Highest_Bids_Report_${new Date().toISOString().slice(0, 10)}.xlsx`);
      
    } catch (error) {
      console.error('Report generation error:', error);
      setSnackbar({
        open: true,
        message: 'Failed to generate report',
        severity: 'error'
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Bid Report Generator</h1>
      
      <Card className="p-6 mb-6 shadow-lg">
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-3">
            Upload Excel Files
          </label>
          
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <PublishIcon className="w-12 h-12 text-gray-400 mb-3" />
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">
                  XLSX files only (multiple allowed)
                </p>
              </div>
              <input 
                type="file" 
                className="hidden"
                accept=".xlsx,.xls"
                multiple
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>

        {files.length > 0 && (
          <div className="mt-4">
            <h3 className="font-medium text-gray-700 mb-2">Selected Files:</h3>
            <div className="max-h-40 overflow-y-auto border rounded-lg p-2 bg-gray-50">
              {files.map((file, index) => (
                <div key={index} className="flex items-center py-2 border-b last:border-b-0">
                  <DescriptionIcon className="text-gray-500 mr-2" />
                  <span className="text-sm truncate">{file.name}</span>
                  <span className="text-xs text-gray-500 ml-auto">
                    {(file.size / 1024).toFixed(1)} KB
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-3 mt-6">
          <Button
            variant="contained"
            color="primary"
            onClick={processFiles}
            disabled={processing || files.length === 0}
            className="min-w-[150px]"
          >
            {processing ? <CircularProgress size={24} /> : 'Process Files'}
          </Button>
          
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setFiles([])}
            disabled={processing}
          >
            Clear Files
          </Button>
          
          <Button
            variant="contained"
            color="success"
            onClick={generateReport}
            disabled={processing || results.length === 0}
            className="min-w-[150px] ml-auto"
          >
            Download Report
          </Button>
        </div>
      </Card>

      {results.length > 0 && (
        <Card className="p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Results Preview ({results.length} Highest Bids)
          </h2>
          
          <div className="max-h-96 overflow-y-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Listing ID</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">OEM</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bid ($)</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qty</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {results.slice(0, 20).map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 text-sm text-gray-900 max-w-xs truncate">{item.listingId}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{item.oem}</td>
                    <td className="px-4 py-3 text-sm font-medium text-green-600">${item.unitPrice.toFixed(2)}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{item.quantity}</td>
                  </tr>
                ))}
                {results.length > 20 && (
                  <tr>
                    <td colSpan={4} className="px-4 py-3 text-center text-sm text-gray-500">
                      Showing first 20 of {results.length} records
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}