CREATE TABLE users (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  role TEXT CHECK (role IN ('admin', 'customer')) NOT NULL,
  reset_token TEXT,
  reset_token_expiry TIMESTAMP,
  verification_code TEXT,
  code_expires_at TIMESTAMP,
  is_verified BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

CREATE TABLE verizon_files (
  id UUID PRIMARY KEY,
  file_name TEXT NOT NULL,
  uploaded_by UUID REFERENCES users(id),
  upload_time TIMESTAMP DEFAULT now(),
  cleaned BOOLEAN DEFAULT FALSE
);

CREATE TABLE lots (
  id UUID PRIMARY KEY,
  verizon_file_id UUID REFERENCES verizon_files(id),
  lot_number TEXT NOT NULL,
  item_description TEXT,
  grade TEXT,
  quantity INTEGER,
  base_price NUMERIC(10,2),
  commission_rate NUMERIC(5,2) DEFAULT 0.10
  oem VARCHAR(50),
  sku VARCHAR(50),
  prop65_warning VARCHAR(255),
  description TEXT,
  disposition VARCHAR(10) CHECK (disposition IN ('DNB', 'DNC', 'DNA')),
  unit_awarded_price NUMERIC(10, 2),
  available_from TIMESTAMP WITH TIME ZONE,
  available_to TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE bids (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  lot_id UUID REFERENCES lots(id),
  bid_amount NUMERIC(10,2),
  submitted_at TIMESTAMP DEFAULT now(),
  status TEXT CHECK (status IN ('pending', 'awarded', 'rejected')) DEFAULT 'pending'
  bid_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT unique_bid UNIQUE(user_id, lot_id) -- Ensure one active bid per user per lot if required
);

CREATE TABLE awarded_bids (
  id UUID PRIMARY KEY,
  lot_id UUID REFERENCES lots(id),
  awarded_to UUID REFERENCES users(id),
  final_price NUMERIC(10,2),
  commission NUMERIC(10,2)
);

CREATE TABLE invoices (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  awarded_bid_ids UUID[],
  invoice_number TEXT UNIQUE,
  generated_at TIMESTAMP DEFAULT now(),
  total_amount NUMERIC(10,2),
  pdf_url TEXT
);

CREATE TABLE email_notifications (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    notification_type VARCHAR(50), -- E.g., 'invitation', 'bid_update', 'reminder'
    is_sent BOOLEAN DEFAULT FALSE,
    sent_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);