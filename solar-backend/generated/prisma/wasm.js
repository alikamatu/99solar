
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  role: 'role',
  bids_placed: 'bids_placed',
  active_bids: 'active_bids',
  won_bids: 'won_bids',
  reset_token: 'reset_token',
  reset_token_expiry: 'reset_token_expiry',
  verification_code: 'verification_code',
  code_expires_at: 'code_expires_at',
  is_verified: 'is_verified',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Verizon_filesScalarFieldEnum = {
  id: 'id',
  file_name: 'file_name',
  uploaded_by: 'uploaded_by',
  upload_time: 'upload_time',
  cleaned: 'cleaned'
};

exports.Prisma.Uploaded_filesScalarFieldEnum = {
  id: 'id',
  filename: 'filename',
  processed_name: 'processed_name',
  user_id: 'user_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.LotsScalarFieldEnum = {
  id: 'id',
  verizon_file_id: 'verizon_file_id',
  lot_number: 'lot_number',
  item_description: 'item_description',
  grade: 'grade',
  quantity: 'quantity',
  base_price: 'base_price',
  commission_rate: 'commission_rate',
  oem: 'oem',
  sku: 'sku',
  prop65_warning: 'prop65_warning',
  description: 'description',
  disposition: 'disposition',
  unit_awarded_price: 'unit_awarded_price',
  available_from: 'available_from',
  available_to: 'available_to',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.BidsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  lot_id: 'lot_id',
  bid_amount: 'bid_amount',
  submitted_at: 'submitted_at',
  status: 'status',
  bid_time: 'bid_time'
};

exports.Prisma.Awarded_bidsScalarFieldEnum = {
  id: 'id',
  lot_id: 'lot_id',
  awarded_to: 'awarded_to',
  final_price: 'final_price',
  commission: 'commission'
};

exports.Prisma.InvoiceScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  awarded_bid_ids: 'awarded_bid_ids',
  invoice_number: 'invoice_number',
  generated_at: 'generated_at',
  total_amount: 'total_amount',
  pdf_url: 'pdf_url'
};

exports.Prisma.Email_notificationsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  subject: 'subject',
  message: 'message',
  notification_type: 'notification_type',
  is_sent: 'is_sent',
  sent_at: 'sent_at',
  created_at: 'created_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  users: 'users',
  verizon_files: 'verizon_files',
  uploaded_files: 'uploaded_files',
  lots: 'lots',
  bids: 'bids',
  awarded_bids: 'awarded_bids',
  invoice: 'invoice',
  email_notifications: 'email_notifications'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
