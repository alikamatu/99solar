CREATE TABLE public._prisma_migrations (
  id character varying(36) NOT NULL,
  checksum character varying(64) NOT NULL,
  finished_at timestamp with time zone NULL,
  migration_name character varying(255) NOT NULL,
  logs text NULL,
  rolled_back_at timestamp with time zone NULL,
  started_at timestamp with time zone NOT NULL DEFAULT now(),
  applied_steps_count integer NOT NULL DEFAULT 0,
  CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id)
) WITH (OIDS=FALSE);
ALTER TABLE public._prisma_migrations OWNER TO postgres;

CREATE TABLE public.awarded_bids (
  id text NOT NULL DEFAULT gen_random_uuid(),
  lot_id uuid NOT NULL,
  awarded_to uuid NOT NULL,
  final_price double precision NOT NULL,
  commission double precision NOT NULL,
  CONSTRAINT awarded_bids_pkey PRIMARY KEY (id),
  CONSTRAINT awarded_bids_awarded_to_fkey FOREIGN KEY (awarded_to) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT,
  CONSTRAINT awarded_bids_lot_id_fkey FOREIGN KEY (lot_id) REFERENCES public.lots(id) ON UPDATE CASCADE ON DELETE RESTRICT
) WITH (OIDS=FALSE);
ALTER TABLE public.awarded_bids OWNER TO postgres;

CREATE TABLE public.bids (
  id uuid NOT NULL,
  user_id uuid NOT NULL,
  lot_id uuid NOT NULL,
  bid_amount double precision NOT NULL,
  submitted_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  status character varying NOT NULL DEFAULT 'pending',
  bid_time timestamp without time zone NULL,
  CONSTRAINT bids_pkey PRIMARY KEY (id),
  CONSTRAINT bids_lot_id_fkey FOREIGN KEY (lot_id) REFERENCES public.lots(id) ON UPDATE CASCADE ON DELETE RESTRICT,
  CONSTRAINT bids_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT
) WITH (OIDS=FALSE);
ALTER TABLE public.bids OWNER TO postgres;

CREATE TABLE public.email_notifications (
  id serial NOT NULL,
  user_id uuid NULL,
  subject text NOT NULL,
  message text NOT NULL,
  notification_type text NULL,
  is_sent boolean NOT NULL DEFAULT false,
  sent_at timestamp without time zone NULL,
  created_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT email_notifications_pkey PRIMARY KEY (id),
  CONSTRAINT email_notifications_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL
) WITH (OIDS=FALSE);
ALTER TABLE public.email_notifications OWNER TO postgres;

CREATE TABLE public.invoice (
  id text NOT NULL,
  user_id uuid NOT NULL,
  awarded_bid_ids text[] NULL,
  invoice_number text NOT NULL,
  generated_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  total_amount double precision NOT NULL,
  pdf_url text NULL,
  CONSTRAINT invoice_pkey PRIMARY KEY (id),
  CONSTRAINT invoice_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT
) WITH (OIDS=FALSE);
ALTER TABLE public.invoice OWNER TO postgres;
CREATE UNIQUE INDEX IF NOT EXISTS invoice_invoice_number_key ON public.invoice USING btree (invoice_number);

CREATE TABLE public.lots (
  id uuid NOT NULL,
  verizon_file_id uuid NULL,
  lot_number text NOT NULL,
  item_description text NULL,
  grade text NULL,
  quantity integer NULL,
  base_price double precision NULL,
  commission_rate double precision NOT NULL DEFAULT 0.10,
  oem text NULL,
  sku text NULL,
  prop65_warning text NULL,
  description text NULL,
  disposition character varying NULL,
  unit_awarded_price double precision NULL,
  available_from timestamp without time zone NULL,
  available_to timestamp without time zone NULL,
  created_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp without time zone NOT NULL,
  CONSTRAINT lots_pkey PRIMARY KEY (id),
  CONSTRAINT lots_verizon_file_id_fkey FOREIGN KEY (verizon_file_id) REFERENCES public.verizon_files(id) ON UPDATE CASCADE ON DELETE SET NULL
) WITH (OIDS=FALSE);
ALTER TABLE public.lots OWNER TO postgres;

CREATE TABLE public.reports (
  id serial NOT NULL,
  created_at timestamp without time zone NULL DEFAULT CURRENT_TIMESTAMP,
  report_date date NOT NULL,
  report_data jsonb NOT NULL,
  customer_name character varying(255) NULL,
  CONSTRAINT reports_pkey PRIMARY KEY (id)
) WITH (OIDS=FALSE);
ALTER TABLE public.reports OWNER TO postgres;

CREATE TABLE public.uploaded_files (
  id text NOT NULL DEFAULT gen_random_uuid(),
  filename text NOT NULL,
  processed_name text NULL,
  created_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp without time zone NOT NULL,
  CONSTRAINT uploaded_files_pkey PRIMARY KEY (id)
) WITH (OIDS=FALSE);
ALTER TABLE public.uploaded_files OWNER TO postgres;

CREATE TABLE public.users (
  id uuid NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  password text NOT NULL,
  role character varying NOT NULL DEFAULT 'customer',
  bids_placed integer NOT NULL DEFAULT 0,
  active_bids integer NOT NULL DEFAULT 0,
  won_bids integer NOT NULL DEFAULT 0,
  reset_token text NULL,
  reset_token_expiry timestamp without time zone NULL,
  verification_code text NULL,
  code_expires_at timestamp without time zone NULL,
  is_verified boolean NOT NULL DEFAULT false,
  created_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT users_pkey PRIMARY KEY (id)
) WITH (OIDS=FALSE);
ALTER TABLE public.users OWNER TO postgres;
CREATE UNIQUE INDEX IF NOT EXISTS users_email_key ON public.users USING btree (email);

CREATE TABLE public.verizon_files (
  id uuid NOT NULL,
  file_name text NOT NULL,
  uploaded_by uuid NOT NULL,
  upload_time timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  cleaned boolean NOT NULL DEFAULT false,
  CONSTRAINT verizon_files_pkey PRIMARY KEY (id),
  CONSTRAINT verizon_files_uploaded_by_fkey FOREIGN KEY (uploaded_by) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT
) WITH (OIDS=FALSE);
ALTER TABLE public.verizon_files OWNER TO postgres;