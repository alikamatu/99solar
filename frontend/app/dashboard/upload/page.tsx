// /pages/upload.tsx

import FileUploader from '@/app/_components/FileUploader';
import React from 'react';

const UploadPage = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>File Management Dashboard</h1>
      <FileUploader />
    </div>
  );
};

export default UploadPage;
