'use client';

import { useState } from 'react';
import { FileUp, FileText, FileX2, Loader2, CheckCircle2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

export default function FileManagementPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [processedFiles, setProcessedFiles] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async () => {
    if (files.length === 0) return;
    
    setIsProcessing(true);
    setProgress(0);
    setProcessedFiles([]);

    const formData = new FormData();
    files.forEach(file => formData.append('files', file));

    try {
      const response = await fetch('http://localhost:1000/api/files/uploads', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Processing failed');

      const result = await response.json();
      setProcessedFiles(result.processedFiles);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsProcessing(false);
      setProgress(100);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-6 h-6" />
            Verizon CSV Processor
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="border-2 border-dashed rounded-lg p-6 text-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <FileUp className="w-10 h-10 text-gray-400" />
              <p className="text-sm text-gray-500">
                Drag & drop Verizon CSV files here, or click to browse
              </p>
              <input
                type="file"
                id="file-upload"
                multiple
                accept=".csv"
                onChange={handleFileChange}
                className="hidden"
              />
              <Button asChild variant="outline">
                <label htmlFor="file-upload" className="cursor-pointer">
                  Select Files
                </label>
              </Button>
            </div>
          </div>

          {files.length > 0 && (
            <div className="space-y-2">
              <h3 className="font-medium">Selected Files ({files.length})</h3>
              <div className="border rounded-md divide-y">
                {files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-blue-500" />
                      <span className="text-sm">{file.name}</span>
                      <span className="text-xs text-gray-500">
                        {(file.size / 1024).toFixed(2)} KB
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveFile(index)}
                    >
                      <FileX2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {isProcessing && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Processing files...</span>
                <span>{progress}%</span>
              </div>
            </div>
          )}

          {processedFiles.length > 0 && (
            <div className="space-y-2">
              <h3 className="font-medium">Processed Files</h3>
              <div className="border rounded-md divide-y">
                {processedFiles.map((file, index) => (
                  <div key={index} className="flex items-center gap-2 p-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-sm">{file}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="ml-auto"
                      onClick={() => window.open(`/downloads/${file}`, '_blank')}
                    >
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => setFiles([])}
              disabled={files.length === 0 || isProcessing}
            >
              Clear All
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={files.length === 0 || isProcessing}
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                'Process Files'
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}