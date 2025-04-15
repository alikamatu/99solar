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
);

CREATE TABLE bids (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  lot_id UUID REFERENCES lots(id),
  bid_amount NUMERIC(10,2),
  submitted_at TIMESTAMP DEFAULT now(),
  status TEXT CHECK (status IN ('pending', 'awarded', 'rejected')) DEFAULT 'pending'
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