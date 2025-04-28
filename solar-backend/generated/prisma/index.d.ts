
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerizonFile
 * 
 */
export type VerizonFile = $Result.DefaultSelection<Prisma.$VerizonFilePayload>
/**
 * Model UploadedFile
 * 
 */
export type UploadedFile = $Result.DefaultSelection<Prisma.$UploadedFilePayload>
/**
 * Model Lot
 * 
 */
export type Lot = $Result.DefaultSelection<Prisma.$LotPayload>
/**
 * Model Bid
 * 
 */
export type Bid = $Result.DefaultSelection<Prisma.$BidPayload>
/**
 * Model AwardedBid
 * 
 */
export type AwardedBid = $Result.DefaultSelection<Prisma.$AwardedBidPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model EmailNotification
 * 
 */
export type EmailNotification = $Result.DefaultSelection<Prisma.$EmailNotificationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verizonFile`: Exposes CRUD operations for the **VerizonFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerizonFiles
    * const verizonFiles = await prisma.verizonFile.findMany()
    * ```
    */
  get verizonFile(): Prisma.VerizonFileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uploadedFile`: Exposes CRUD operations for the **UploadedFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UploadedFiles
    * const uploadedFiles = await prisma.uploadedFile.findMany()
    * ```
    */
  get uploadedFile(): Prisma.UploadedFileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lot`: Exposes CRUD operations for the **Lot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lots
    * const lots = await prisma.lot.findMany()
    * ```
    */
  get lot(): Prisma.LotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bid`: Exposes CRUD operations for the **Bid** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bids
    * const bids = await prisma.bid.findMany()
    * ```
    */
  get bid(): Prisma.BidDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.awardedBid`: Exposes CRUD operations for the **AwardedBid** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AwardedBids
    * const awardedBids = await prisma.awardedBid.findMany()
    * ```
    */
  get awardedBid(): Prisma.AwardedBidDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailNotification`: Exposes CRUD operations for the **EmailNotification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailNotifications
    * const emailNotifications = await prisma.emailNotification.findMany()
    * ```
    */
  get emailNotification(): Prisma.EmailNotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    VerizonFile: 'VerizonFile',
    UploadedFile: 'UploadedFile',
    Lot: 'Lot',
    Bid: 'Bid',
    AwardedBid: 'AwardedBid',
    Invoice: 'Invoice',
    EmailNotification: 'EmailNotification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "verizonFile" | "uploadedFile" | "lot" | "bid" | "awardedBid" | "invoice" | "emailNotification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerizonFile: {
        payload: Prisma.$VerizonFilePayload<ExtArgs>
        fields: Prisma.VerizonFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerizonFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerizonFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerizonFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerizonFilePayload>
          }
          findFirst: {
            args: Prisma.VerizonFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerizonFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerizonFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerizonFilePayload>
          }
          findMany: {
            args: Prisma.VerizonFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerizonFilePayload>[]
          }
          create: {
            args: Prisma.VerizonFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerizonFilePayload>
          }
          createMany: {
            args: Prisma.VerizonFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerizonFileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerizonFilePayload>[]
          }
          delete: {
            args: Prisma.VerizonFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerizonFilePayload>
          }
          update: {
            args: Prisma.VerizonFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerizonFilePayload>
          }
          deleteMany: {
            args: Prisma.VerizonFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerizonFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerizonFileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerizonFilePayload>[]
          }
          upsert: {
            args: Prisma.VerizonFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerizonFilePayload>
          }
          aggregate: {
            args: Prisma.VerizonFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerizonFile>
          }
          groupBy: {
            args: Prisma.VerizonFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerizonFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerizonFileCountArgs<ExtArgs>
            result: $Utils.Optional<VerizonFileCountAggregateOutputType> | number
          }
        }
      }
      UploadedFile: {
        payload: Prisma.$UploadedFilePayload<ExtArgs>
        fields: Prisma.UploadedFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UploadedFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UploadedFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>
          }
          findFirst: {
            args: Prisma.UploadedFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UploadedFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>
          }
          findMany: {
            args: Prisma.UploadedFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>[]
          }
          create: {
            args: Prisma.UploadedFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>
          }
          createMany: {
            args: Prisma.UploadedFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UploadedFileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>[]
          }
          delete: {
            args: Prisma.UploadedFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>
          }
          update: {
            args: Prisma.UploadedFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>
          }
          deleteMany: {
            args: Prisma.UploadedFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UploadedFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UploadedFileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>[]
          }
          upsert: {
            args: Prisma.UploadedFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>
          }
          aggregate: {
            args: Prisma.UploadedFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUploadedFile>
          }
          groupBy: {
            args: Prisma.UploadedFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UploadedFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UploadedFileCountArgs<ExtArgs>
            result: $Utils.Optional<UploadedFileCountAggregateOutputType> | number
          }
        }
      }
      Lot: {
        payload: Prisma.$LotPayload<ExtArgs>
        fields: Prisma.LotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload>
          }
          findFirst: {
            args: Prisma.LotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload>
          }
          findMany: {
            args: Prisma.LotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload>[]
          }
          create: {
            args: Prisma.LotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload>
          }
          createMany: {
            args: Prisma.LotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload>[]
          }
          delete: {
            args: Prisma.LotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload>
          }
          update: {
            args: Prisma.LotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload>
          }
          deleteMany: {
            args: Prisma.LotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload>[]
          }
          upsert: {
            args: Prisma.LotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload>
          }
          aggregate: {
            args: Prisma.LotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLot>
          }
          groupBy: {
            args: Prisma.LotGroupByArgs<ExtArgs>
            result: $Utils.Optional<LotGroupByOutputType>[]
          }
          count: {
            args: Prisma.LotCountArgs<ExtArgs>
            result: $Utils.Optional<LotCountAggregateOutputType> | number
          }
        }
      }
      Bid: {
        payload: Prisma.$BidPayload<ExtArgs>
        fields: Prisma.BidFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BidFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BidFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          findFirst: {
            args: Prisma.BidFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BidFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          findMany: {
            args: Prisma.BidFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>[]
          }
          create: {
            args: Prisma.BidCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          createMany: {
            args: Prisma.BidCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BidCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>[]
          }
          delete: {
            args: Prisma.BidDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          update: {
            args: Prisma.BidUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          deleteMany: {
            args: Prisma.BidDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BidUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BidUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>[]
          }
          upsert: {
            args: Prisma.BidUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          aggregate: {
            args: Prisma.BidAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBid>
          }
          groupBy: {
            args: Prisma.BidGroupByArgs<ExtArgs>
            result: $Utils.Optional<BidGroupByOutputType>[]
          }
          count: {
            args: Prisma.BidCountArgs<ExtArgs>
            result: $Utils.Optional<BidCountAggregateOutputType> | number
          }
        }
      }
      AwardedBid: {
        payload: Prisma.$AwardedBidPayload<ExtArgs>
        fields: Prisma.AwardedBidFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AwardedBidFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardedBidPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AwardedBidFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardedBidPayload>
          }
          findFirst: {
            args: Prisma.AwardedBidFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardedBidPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AwardedBidFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardedBidPayload>
          }
          findMany: {
            args: Prisma.AwardedBidFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardedBidPayload>[]
          }
          create: {
            args: Prisma.AwardedBidCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardedBidPayload>
          }
          createMany: {
            args: Prisma.AwardedBidCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AwardedBidCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardedBidPayload>[]
          }
          delete: {
            args: Prisma.AwardedBidDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardedBidPayload>
          }
          update: {
            args: Prisma.AwardedBidUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardedBidPayload>
          }
          deleteMany: {
            args: Prisma.AwardedBidDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AwardedBidUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AwardedBidUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardedBidPayload>[]
          }
          upsert: {
            args: Prisma.AwardedBidUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardedBidPayload>
          }
          aggregate: {
            args: Prisma.AwardedBidAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAwardedBid>
          }
          groupBy: {
            args: Prisma.AwardedBidGroupByArgs<ExtArgs>
            result: $Utils.Optional<AwardedBidGroupByOutputType>[]
          }
          count: {
            args: Prisma.AwardedBidCountArgs<ExtArgs>
            result: $Utils.Optional<AwardedBidCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      EmailNotification: {
        payload: Prisma.$EmailNotificationPayload<ExtArgs>
        fields: Prisma.EmailNotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailNotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailNotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>
          }
          findFirst: {
            args: Prisma.EmailNotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailNotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>
          }
          findMany: {
            args: Prisma.EmailNotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>[]
          }
          create: {
            args: Prisma.EmailNotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>
          }
          createMany: {
            args: Prisma.EmailNotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailNotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>[]
          }
          delete: {
            args: Prisma.EmailNotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>
          }
          update: {
            args: Prisma.EmailNotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>
          }
          deleteMany: {
            args: Prisma.EmailNotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailNotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailNotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>[]
          }
          upsert: {
            args: Prisma.EmailNotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>
          }
          aggregate: {
            args: Prisma.EmailNotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailNotification>
          }
          groupBy: {
            args: Prisma.EmailNotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailNotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailNotificationCountArgs<ExtArgs>
            result: $Utils.Optional<EmailNotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    verizonFile?: VerizonFileOmit
    uploadedFile?: UploadedFileOmit
    lot?: LotOmit
    bid?: BidOmit
    awardedBid?: AwardedBidOmit
    invoice?: InvoiceOmit
    emailNotification?: EmailNotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    verizon_files: number
    uploaded_files: number
    bids: number
    awarded_bids: number
    invoices: number
    email_notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verizon_files?: boolean | UserCountOutputTypeCountVerizon_filesArgs
    uploaded_files?: boolean | UserCountOutputTypeCountUploaded_filesArgs
    bids?: boolean | UserCountOutputTypeCountBidsArgs
    awarded_bids?: boolean | UserCountOutputTypeCountAwarded_bidsArgs
    invoices?: boolean | UserCountOutputTypeCountInvoicesArgs
    email_notifications?: boolean | UserCountOutputTypeCountEmail_notificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVerizon_filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerizonFileWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUploaded_filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UploadedFileWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAwarded_bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AwardedBidWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmail_notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailNotificationWhereInput
  }


  /**
   * Count Type VerizonFileCountOutputType
   */

  export type VerizonFileCountOutputType = {
    lots: number
  }

  export type VerizonFileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lots?: boolean | VerizonFileCountOutputTypeCountLotsArgs
  }

  // Custom InputTypes
  /**
   * VerizonFileCountOutputType without action
   */
  export type VerizonFileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerizonFileCountOutputType
     */
    select?: VerizonFileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VerizonFileCountOutputType without action
   */
  export type VerizonFileCountOutputTypeCountLotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LotWhereInput
  }


  /**
   * Count Type LotCountOutputType
   */

  export type LotCountOutputType = {
    bids: number
    awarded_bids: number
  }

  export type LotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bids?: boolean | LotCountOutputTypeCountBidsArgs
    awarded_bids?: boolean | LotCountOutputTypeCountAwarded_bidsArgs
  }

  // Custom InputTypes
  /**
   * LotCountOutputType without action
   */
  export type LotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotCountOutputType
     */
    select?: LotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LotCountOutputType without action
   */
  export type LotCountOutputTypeCountBidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
  }

  /**
   * LotCountOutputType without action
   */
  export type LotCountOutputTypeCountAwarded_bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AwardedBidWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    bids_placed: number | null
    active_bids: number | null
    won_bids: number | null
  }

  export type UserSumAggregateOutputType = {
    bids_placed: number | null
    active_bids: number | null
    won_bids: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    bids_placed: number | null
    active_bids: number | null
    won_bids: number | null
    reset_token: string | null
    reset_token_expiry: Date | null
    verification_code: string | null
    code_expires_at: Date | null
    is_verified: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    bids_placed: number | null
    active_bids: number | null
    won_bids: number | null
    reset_token: string | null
    reset_token_expiry: Date | null
    verification_code: string | null
    code_expires_at: Date | null
    is_verified: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    bids_placed: number
    active_bids: number
    won_bids: number
    reset_token: number
    reset_token_expiry: number
    verification_code: number
    code_expires_at: number
    is_verified: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    bids_placed?: true
    active_bids?: true
    won_bids?: true
  }

  export type UserSumAggregateInputType = {
    bids_placed?: true
    active_bids?: true
    won_bids?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    bids_placed?: true
    active_bids?: true
    won_bids?: true
    reset_token?: true
    reset_token_expiry?: true
    verification_code?: true
    code_expires_at?: true
    is_verified?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    bids_placed?: true
    active_bids?: true
    won_bids?: true
    reset_token?: true
    reset_token_expiry?: true
    verification_code?: true
    code_expires_at?: true
    is_verified?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    bids_placed?: true
    active_bids?: true
    won_bids?: true
    reset_token?: true
    reset_token_expiry?: true
    verification_code?: true
    code_expires_at?: true
    is_verified?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: string
    bids_placed: number
    active_bids: number
    won_bids: number
    reset_token: string | null
    reset_token_expiry: Date | null
    verification_code: string | null
    code_expires_at: Date | null
    is_verified: boolean
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    bids_placed?: boolean
    active_bids?: boolean
    won_bids?: boolean
    reset_token?: boolean
    reset_token_expiry?: boolean
    verification_code?: boolean
    code_expires_at?: boolean
    is_verified?: boolean
    created_at?: boolean
    updated_at?: boolean
    verizon_files?: boolean | User$verizon_filesArgs<ExtArgs>
    uploaded_files?: boolean | User$uploaded_filesArgs<ExtArgs>
    bids?: boolean | User$bidsArgs<ExtArgs>
    awarded_bids?: boolean | User$awarded_bidsArgs<ExtArgs>
    invoices?: boolean | User$invoicesArgs<ExtArgs>
    email_notifications?: boolean | User$email_notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    bids_placed?: boolean
    active_bids?: boolean
    won_bids?: boolean
    reset_token?: boolean
    reset_token_expiry?: boolean
    verification_code?: boolean
    code_expires_at?: boolean
    is_verified?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    bids_placed?: boolean
    active_bids?: boolean
    won_bids?: boolean
    reset_token?: boolean
    reset_token_expiry?: boolean
    verification_code?: boolean
    code_expires_at?: boolean
    is_verified?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    bids_placed?: boolean
    active_bids?: boolean
    won_bids?: boolean
    reset_token?: boolean
    reset_token_expiry?: boolean
    verification_code?: boolean
    code_expires_at?: boolean
    is_verified?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "bids_placed" | "active_bids" | "won_bids" | "reset_token" | "reset_token_expiry" | "verification_code" | "code_expires_at" | "is_verified" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verizon_files?: boolean | User$verizon_filesArgs<ExtArgs>
    uploaded_files?: boolean | User$uploaded_filesArgs<ExtArgs>
    bids?: boolean | User$bidsArgs<ExtArgs>
    awarded_bids?: boolean | User$awarded_bidsArgs<ExtArgs>
    invoices?: boolean | User$invoicesArgs<ExtArgs>
    email_notifications?: boolean | User$email_notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      verizon_files: Prisma.$VerizonFilePayload<ExtArgs>[]
      uploaded_files: Prisma.$UploadedFilePayload<ExtArgs>[]
      bids: Prisma.$BidPayload<ExtArgs>[]
      awarded_bids: Prisma.$AwardedBidPayload<ExtArgs>[]
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
      email_notifications: Prisma.$EmailNotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: string
      bids_placed: number
      active_bids: number
      won_bids: number
      reset_token: string | null
      reset_token_expiry: Date | null
      verification_code: string | null
      code_expires_at: Date | null
      is_verified: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    verizon_files<T extends User$verizon_filesArgs<ExtArgs> = {}>(args?: Subset<T, User$verizon_filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerizonFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    uploaded_files<T extends User$uploaded_filesArgs<ExtArgs> = {}>(args?: Subset<T, User$uploaded_filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bids<T extends User$bidsArgs<ExtArgs> = {}>(args?: Subset<T, User$bidsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    awarded_bids<T extends User$awarded_bidsArgs<ExtArgs> = {}>(args?: Subset<T, User$awarded_bidsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardedBidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invoices<T extends User$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, User$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    email_notifications<T extends User$email_notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$email_notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly bids_placed: FieldRef<"User", 'Int'>
    readonly active_bids: FieldRef<"User", 'Int'>
    readonly won_bids: FieldRef<"User", 'Int'>
    readonly reset_token: FieldRef<"User", 'String'>
    readonly reset_token_expiry: FieldRef<"User", 'DateTime'>
    readonly verification_code: FieldRef<"User", 'String'>
    readonly code_expires_at: FieldRef<"User", 'DateTime'>
    readonly is_verified: FieldRef<"User", 'Boolean'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.verizon_files
   */
  export type User$verizon_filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerizonFile
     */
    select?: VerizonFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerizonFile
     */
    omit?: VerizonFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerizonFileInclude<ExtArgs> | null
    where?: VerizonFileWhereInput
    orderBy?: VerizonFileOrderByWithRelationInput | VerizonFileOrderByWithRelationInput[]
    cursor?: VerizonFileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VerizonFileScalarFieldEnum | VerizonFileScalarFieldEnum[]
  }

  /**
   * User.uploaded_files
   */
  export type User$uploaded_filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileInclude<ExtArgs> | null
    where?: UploadedFileWhereInput
    orderBy?: UploadedFileOrderByWithRelationInput | UploadedFileOrderByWithRelationInput[]
    cursor?: UploadedFileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UploadedFileScalarFieldEnum | UploadedFileScalarFieldEnum[]
  }

  /**
   * User.bids
   */
  export type User$bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    where?: BidWhereInput
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    cursor?: BidWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * User.awarded_bids
   */
  export type User$awarded_bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwardedBid
     */
    select?: AwardedBidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwardedBid
     */
    omit?: AwardedBidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardedBidInclude<ExtArgs> | null
    where?: AwardedBidWhereInput
    orderBy?: AwardedBidOrderByWithRelationInput | AwardedBidOrderByWithRelationInput[]
    cursor?: AwardedBidWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AwardedBidScalarFieldEnum | AwardedBidScalarFieldEnum[]
  }

  /**
   * User.invoices
   */
  export type User$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * User.email_notifications
   */
  export type User$email_notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    where?: EmailNotificationWhereInput
    orderBy?: EmailNotificationOrderByWithRelationInput | EmailNotificationOrderByWithRelationInput[]
    cursor?: EmailNotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailNotificationScalarFieldEnum | EmailNotificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VerizonFile
   */

  export type AggregateVerizonFile = {
    _count: VerizonFileCountAggregateOutputType | null
    _min: VerizonFileMinAggregateOutputType | null
    _max: VerizonFileMaxAggregateOutputType | null
  }

  export type VerizonFileMinAggregateOutputType = {
    id: string | null
    file_name: string | null
    uploaded_by: string | null
    upload_time: Date | null
    cleaned: boolean | null
  }

  export type VerizonFileMaxAggregateOutputType = {
    id: string | null
    file_name: string | null
    uploaded_by: string | null
    upload_time: Date | null
    cleaned: boolean | null
  }

  export type VerizonFileCountAggregateOutputType = {
    id: number
    file_name: number
    uploaded_by: number
    upload_time: number
    cleaned: number
    _all: number
  }


  export type VerizonFileMinAggregateInputType = {
    id?: true
    file_name?: true
    uploaded_by?: true
    upload_time?: true
    cleaned?: true
  }

  export type VerizonFileMaxAggregateInputType = {
    id?: true
    file_name?: true
    uploaded_by?: true
    upload_time?: true
    cleaned?: true
  }

  export type VerizonFileCountAggregateInputType = {
    id?: true
    file_name?: true
    uploaded_by?: true
    upload_time?: true
    cleaned?: true
    _all?: true
  }

  export type VerizonFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerizonFile to aggregate.
     */
    where?: VerizonFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerizonFiles to fetch.
     */
    orderBy?: VerizonFileOrderByWithRelationInput | VerizonFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerizonFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerizonFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerizonFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerizonFiles
    **/
    _count?: true | VerizonFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerizonFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerizonFileMaxAggregateInputType
  }

  export type GetVerizonFileAggregateType<T extends VerizonFileAggregateArgs> = {
        [P in keyof T & keyof AggregateVerizonFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerizonFile[P]>
      : GetScalarType<T[P], AggregateVerizonFile[P]>
  }




  export type VerizonFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerizonFileWhereInput
    orderBy?: VerizonFileOrderByWithAggregationInput | VerizonFileOrderByWithAggregationInput[]
    by: VerizonFileScalarFieldEnum[] | VerizonFileScalarFieldEnum
    having?: VerizonFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerizonFileCountAggregateInputType | true
    _min?: VerizonFileMinAggregateInputType
    _max?: VerizonFileMaxAggregateInputType
  }

  export type VerizonFileGroupByOutputType = {
    id: string
    file_name: string
    uploaded_by: string
    upload_time: Date
    cleaned: boolean
    _count: VerizonFileCountAggregateOutputType | null
    _min: VerizonFileMinAggregateOutputType | null
    _max: VerizonFileMaxAggregateOutputType | null
  }

  type GetVerizonFileGroupByPayload<T extends VerizonFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerizonFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerizonFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerizonFileGroupByOutputType[P]>
            : GetScalarType<T[P], VerizonFileGroupByOutputType[P]>
        }
      >
    >


  export type VerizonFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    file_name?: boolean
    uploaded_by?: boolean
    upload_time?: boolean
    cleaned?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lots?: boolean | VerizonFile$lotsArgs<ExtArgs>
    _count?: boolean | VerizonFileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verizonFile"]>

  export type VerizonFileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    file_name?: boolean
    uploaded_by?: boolean
    upload_time?: boolean
    cleaned?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verizonFile"]>

  export type VerizonFileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    file_name?: boolean
    uploaded_by?: boolean
    upload_time?: boolean
    cleaned?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verizonFile"]>

  export type VerizonFileSelectScalar = {
    id?: boolean
    file_name?: boolean
    uploaded_by?: boolean
    upload_time?: boolean
    cleaned?: boolean
  }

  export type VerizonFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "file_name" | "uploaded_by" | "upload_time" | "cleaned", ExtArgs["result"]["verizonFile"]>
  export type VerizonFileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lots?: boolean | VerizonFile$lotsArgs<ExtArgs>
    _count?: boolean | VerizonFileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VerizonFileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VerizonFileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VerizonFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerizonFile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      lots: Prisma.$LotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      file_name: string
      uploaded_by: string
      upload_time: Date
      cleaned: boolean
    }, ExtArgs["result"]["verizonFile"]>
    composites: {}
  }

  type VerizonFileGetPayload<S extends boolean | null | undefined | VerizonFileDefaultArgs> = $Result.GetResult<Prisma.$VerizonFilePayload, S>

  type VerizonFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerizonFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerizonFileCountAggregateInputType | true
    }

  export interface VerizonFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerizonFile'], meta: { name: 'VerizonFile' } }
    /**
     * Find zero or one VerizonFile that matches the filter.
     * @param {VerizonFileFindUniqueArgs} args - Arguments to find a VerizonFile
     * @example
     * // Get one VerizonFile
     * const verizonFile = await prisma.verizonFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerizonFileFindUniqueArgs>(args: SelectSubset<T, VerizonFileFindUniqueArgs<ExtArgs>>): Prisma__VerizonFileClient<$Result.GetResult<Prisma.$VerizonFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerizonFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerizonFileFindUniqueOrThrowArgs} args - Arguments to find a VerizonFile
     * @example
     * // Get one VerizonFile
     * const verizonFile = await prisma.verizonFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerizonFileFindUniqueOrThrowArgs>(args: SelectSubset<T, VerizonFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerizonFileClient<$Result.GetResult<Prisma.$VerizonFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerizonFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerizonFileFindFirstArgs} args - Arguments to find a VerizonFile
     * @example
     * // Get one VerizonFile
     * const verizonFile = await prisma.verizonFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerizonFileFindFirstArgs>(args?: SelectSubset<T, VerizonFileFindFirstArgs<ExtArgs>>): Prisma__VerizonFileClient<$Result.GetResult<Prisma.$VerizonFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerizonFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerizonFileFindFirstOrThrowArgs} args - Arguments to find a VerizonFile
     * @example
     * // Get one VerizonFile
     * const verizonFile = await prisma.verizonFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerizonFileFindFirstOrThrowArgs>(args?: SelectSubset<T, VerizonFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerizonFileClient<$Result.GetResult<Prisma.$VerizonFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerizonFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerizonFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerizonFiles
     * const verizonFiles = await prisma.verizonFile.findMany()
     * 
     * // Get first 10 VerizonFiles
     * const verizonFiles = await prisma.verizonFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verizonFileWithIdOnly = await prisma.verizonFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerizonFileFindManyArgs>(args?: SelectSubset<T, VerizonFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerizonFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerizonFile.
     * @param {VerizonFileCreateArgs} args - Arguments to create a VerizonFile.
     * @example
     * // Create one VerizonFile
     * const VerizonFile = await prisma.verizonFile.create({
     *   data: {
     *     // ... data to create a VerizonFile
     *   }
     * })
     * 
     */
    create<T extends VerizonFileCreateArgs>(args: SelectSubset<T, VerizonFileCreateArgs<ExtArgs>>): Prisma__VerizonFileClient<$Result.GetResult<Prisma.$VerizonFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerizonFiles.
     * @param {VerizonFileCreateManyArgs} args - Arguments to create many VerizonFiles.
     * @example
     * // Create many VerizonFiles
     * const verizonFile = await prisma.verizonFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerizonFileCreateManyArgs>(args?: SelectSubset<T, VerizonFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerizonFiles and returns the data saved in the database.
     * @param {VerizonFileCreateManyAndReturnArgs} args - Arguments to create many VerizonFiles.
     * @example
     * // Create many VerizonFiles
     * const verizonFile = await prisma.verizonFile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerizonFiles and only return the `id`
     * const verizonFileWithIdOnly = await prisma.verizonFile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerizonFileCreateManyAndReturnArgs>(args?: SelectSubset<T, VerizonFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerizonFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerizonFile.
     * @param {VerizonFileDeleteArgs} args - Arguments to delete one VerizonFile.
     * @example
     * // Delete one VerizonFile
     * const VerizonFile = await prisma.verizonFile.delete({
     *   where: {
     *     // ... filter to delete one VerizonFile
     *   }
     * })
     * 
     */
    delete<T extends VerizonFileDeleteArgs>(args: SelectSubset<T, VerizonFileDeleteArgs<ExtArgs>>): Prisma__VerizonFileClient<$Result.GetResult<Prisma.$VerizonFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerizonFile.
     * @param {VerizonFileUpdateArgs} args - Arguments to update one VerizonFile.
     * @example
     * // Update one VerizonFile
     * const verizonFile = await prisma.verizonFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerizonFileUpdateArgs>(args: SelectSubset<T, VerizonFileUpdateArgs<ExtArgs>>): Prisma__VerizonFileClient<$Result.GetResult<Prisma.$VerizonFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerizonFiles.
     * @param {VerizonFileDeleteManyArgs} args - Arguments to filter VerizonFiles to delete.
     * @example
     * // Delete a few VerizonFiles
     * const { count } = await prisma.verizonFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerizonFileDeleteManyArgs>(args?: SelectSubset<T, VerizonFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerizonFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerizonFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerizonFiles
     * const verizonFile = await prisma.verizonFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerizonFileUpdateManyArgs>(args: SelectSubset<T, VerizonFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerizonFiles and returns the data updated in the database.
     * @param {VerizonFileUpdateManyAndReturnArgs} args - Arguments to update many VerizonFiles.
     * @example
     * // Update many VerizonFiles
     * const verizonFile = await prisma.verizonFile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerizonFiles and only return the `id`
     * const verizonFileWithIdOnly = await prisma.verizonFile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerizonFileUpdateManyAndReturnArgs>(args: SelectSubset<T, VerizonFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerizonFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerizonFile.
     * @param {VerizonFileUpsertArgs} args - Arguments to update or create a VerizonFile.
     * @example
     * // Update or create a VerizonFile
     * const verizonFile = await prisma.verizonFile.upsert({
     *   create: {
     *     // ... data to create a VerizonFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerizonFile we want to update
     *   }
     * })
     */
    upsert<T extends VerizonFileUpsertArgs>(args: SelectSubset<T, VerizonFileUpsertArgs<ExtArgs>>): Prisma__VerizonFileClient<$Result.GetResult<Prisma.$VerizonFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerizonFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerizonFileCountArgs} args - Arguments to filter VerizonFiles to count.
     * @example
     * // Count the number of VerizonFiles
     * const count = await prisma.verizonFile.count({
     *   where: {
     *     // ... the filter for the VerizonFiles we want to count
     *   }
     * })
    **/
    count<T extends VerizonFileCountArgs>(
      args?: Subset<T, VerizonFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerizonFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerizonFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerizonFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerizonFileAggregateArgs>(args: Subset<T, VerizonFileAggregateArgs>): Prisma.PrismaPromise<GetVerizonFileAggregateType<T>>

    /**
     * Group by VerizonFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerizonFileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerizonFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerizonFileGroupByArgs['orderBy'] }
        : { orderBy?: VerizonFileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerizonFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerizonFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerizonFile model
   */
  readonly fields: VerizonFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerizonFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerizonFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lots<T extends VerizonFile$lotsArgs<ExtArgs> = {}>(args?: Subset<T, VerizonFile$lotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerizonFile model
   */
  interface VerizonFileFieldRefs {
    readonly id: FieldRef<"VerizonFile", 'String'>
    readonly file_name: FieldRef<"VerizonFile", 'String'>
    readonly uploaded_by: FieldRef<"VerizonFile", 'String'>
    readonly upload_time: FieldRef<"VerizonFile", 'DateTime'>
    readonly cleaned: FieldRef<"VerizonFile", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * VerizonFile findUnique
   */
  export type VerizonFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerizonFile
     */
    select?: VerizonFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerizonFile
     */
    omit?: VerizonFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerizonFileInclude<ExtArgs> | null
    /**
     * Filter, which VerizonFile to fetch.
     */
    where: VerizonFileWhereUniqueInput
  }

  /**
   * VerizonFile findUniqueOrThrow
   */
  export type VerizonFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerizonFile
     */
    select?: VerizonFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerizonFile
     */
    omit?: VerizonFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerizonFileInclude<ExtArgs> | null
    /**
     * Filter, which VerizonFile to fetch.
     */
    where: VerizonFileWhereUniqueInput
  }

  /**
   * VerizonFile findFirst
   */
  export type VerizonFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerizonFile
     */
    select?: VerizonFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerizonFile
     */
    omit?: VerizonFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerizonFileInclude<ExtArgs> | null
    /**
     * Filter, which VerizonFile to fetch.
     */
    where?: VerizonFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerizonFiles to fetch.
     */
    orderBy?: VerizonFileOrderByWithRelationInput | VerizonFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerizonFiles.
     */
    cursor?: VerizonFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerizonFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerizonFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerizonFiles.
     */
    distinct?: VerizonFileScalarFieldEnum | VerizonFileScalarFieldEnum[]
  }

  /**
   * VerizonFile findFirstOrThrow
   */
  export type VerizonFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerizonFile
     */
    select?: VerizonFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerizonFile
     */
    omit?: VerizonFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerizonFileInclude<ExtArgs> | null
    /**
     * Filter, which VerizonFile to fetch.
     */
    where?: VerizonFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerizonFiles to fetch.
     */
    orderBy?: VerizonFileOrderByWithRelationInput | VerizonFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerizonFiles.
     */
    cursor?: VerizonFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerizonFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerizonFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerizonFiles.
     */
    distinct?: VerizonFileScalarFieldEnum | VerizonFileScalarFieldEnum[]
  }

  /**
   * VerizonFile findMany
   */
  export type VerizonFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerizonFile
     */
    select?: VerizonFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerizonFile
     */
    omit?: VerizonFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerizonFileInclude<ExtArgs> | null
    /**
     * Filter, which VerizonFiles to fetch.
     */
    where?: VerizonFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerizonFiles to fetch.
     */
    orderBy?: VerizonFileOrderByWithRelationInput | VerizonFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerizonFiles.
     */
    cursor?: VerizonFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerizonFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerizonFiles.
     */
    skip?: number
    distinct?: VerizonFileScalarFieldEnum | VerizonFileScalarFieldEnum[]
  }

  /**
   * VerizonFile create
   */
  export type VerizonFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerizonFile
     */
    select?: VerizonFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerizonFile
     */
    omit?: VerizonFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerizonFileInclude<ExtArgs> | null
    /**
     * The data needed to create a VerizonFile.
     */
    data: XOR<VerizonFileCreateInput, VerizonFileUncheckedCreateInput>
  }

  /**
   * VerizonFile createMany
   */
  export type VerizonFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerizonFiles.
     */
    data: VerizonFileCreateManyInput | VerizonFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerizonFile createManyAndReturn
   */
  export type VerizonFileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerizonFile
     */
    select?: VerizonFileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerizonFile
     */
    omit?: VerizonFileOmit<ExtArgs> | null
    /**
     * The data used to create many VerizonFiles.
     */
    data: VerizonFileCreateManyInput | VerizonFileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerizonFileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerizonFile update
   */
  export type VerizonFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerizonFile
     */
    select?: VerizonFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerizonFile
     */
    omit?: VerizonFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerizonFileInclude<ExtArgs> | null
    /**
     * The data needed to update a VerizonFile.
     */
    data: XOR<VerizonFileUpdateInput, VerizonFileUncheckedUpdateInput>
    /**
     * Choose, which VerizonFile to update.
     */
    where: VerizonFileWhereUniqueInput
  }

  /**
   * VerizonFile updateMany
   */
  export type VerizonFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerizonFiles.
     */
    data: XOR<VerizonFileUpdateManyMutationInput, VerizonFileUncheckedUpdateManyInput>
    /**
     * Filter which VerizonFiles to update
     */
    where?: VerizonFileWhereInput
    /**
     * Limit how many VerizonFiles to update.
     */
    limit?: number
  }

  /**
   * VerizonFile updateManyAndReturn
   */
  export type VerizonFileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerizonFile
     */
    select?: VerizonFileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerizonFile
     */
    omit?: VerizonFileOmit<ExtArgs> | null
    /**
     * The data used to update VerizonFiles.
     */
    data: XOR<VerizonFileUpdateManyMutationInput, VerizonFileUncheckedUpdateManyInput>
    /**
     * Filter which VerizonFiles to update
     */
    where?: VerizonFileWhereInput
    /**
     * Limit how many VerizonFiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerizonFileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerizonFile upsert
   */
  export type VerizonFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerizonFile
     */
    select?: VerizonFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerizonFile
     */
    omit?: VerizonFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerizonFileInclude<ExtArgs> | null
    /**
     * The filter to search for the VerizonFile to update in case it exists.
     */
    where: VerizonFileWhereUniqueInput
    /**
     * In case the VerizonFile found by the `where` argument doesn't exist, create a new VerizonFile with this data.
     */
    create: XOR<VerizonFileCreateInput, VerizonFileUncheckedCreateInput>
    /**
     * In case the VerizonFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerizonFileUpdateInput, VerizonFileUncheckedUpdateInput>
  }

  /**
   * VerizonFile delete
   */
  export type VerizonFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerizonFile
     */
    select?: VerizonFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerizonFile
     */
    omit?: VerizonFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerizonFileInclude<ExtArgs> | null
    /**
     * Filter which VerizonFile to delete.
     */
    where: VerizonFileWhereUniqueInput
  }

  /**
   * VerizonFile deleteMany
   */
  export type VerizonFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerizonFiles to delete
     */
    where?: VerizonFileWhereInput
    /**
     * Limit how many VerizonFiles to delete.
     */
    limit?: number
  }

  /**
   * VerizonFile.lots
   */
  export type VerizonFile$lotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
    where?: LotWhereInput
    orderBy?: LotOrderByWithRelationInput | LotOrderByWithRelationInput[]
    cursor?: LotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LotScalarFieldEnum | LotScalarFieldEnum[]
  }

  /**
   * VerizonFile without action
   */
  export type VerizonFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerizonFile
     */
    select?: VerizonFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerizonFile
     */
    omit?: VerizonFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerizonFileInclude<ExtArgs> | null
  }


  /**
   * Model UploadedFile
   */

  export type AggregateUploadedFile = {
    _count: UploadedFileCountAggregateOutputType | null
    _min: UploadedFileMinAggregateOutputType | null
    _max: UploadedFileMaxAggregateOutputType | null
  }

  export type UploadedFileMinAggregateOutputType = {
    id: string | null
    filename: string | null
    processed_name: string | null
    user_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UploadedFileMaxAggregateOutputType = {
    id: string | null
    filename: string | null
    processed_name: string | null
    user_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UploadedFileCountAggregateOutputType = {
    id: number
    filename: number
    processed_name: number
    user_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UploadedFileMinAggregateInputType = {
    id?: true
    filename?: true
    processed_name?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type UploadedFileMaxAggregateInputType = {
    id?: true
    filename?: true
    processed_name?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type UploadedFileCountAggregateInputType = {
    id?: true
    filename?: true
    processed_name?: true
    user_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UploadedFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UploadedFile to aggregate.
     */
    where?: UploadedFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadedFiles to fetch.
     */
    orderBy?: UploadedFileOrderByWithRelationInput | UploadedFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UploadedFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadedFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadedFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UploadedFiles
    **/
    _count?: true | UploadedFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UploadedFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UploadedFileMaxAggregateInputType
  }

  export type GetUploadedFileAggregateType<T extends UploadedFileAggregateArgs> = {
        [P in keyof T & keyof AggregateUploadedFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUploadedFile[P]>
      : GetScalarType<T[P], AggregateUploadedFile[P]>
  }




  export type UploadedFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UploadedFileWhereInput
    orderBy?: UploadedFileOrderByWithAggregationInput | UploadedFileOrderByWithAggregationInput[]
    by: UploadedFileScalarFieldEnum[] | UploadedFileScalarFieldEnum
    having?: UploadedFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UploadedFileCountAggregateInputType | true
    _min?: UploadedFileMinAggregateInputType
    _max?: UploadedFileMaxAggregateInputType
  }

  export type UploadedFileGroupByOutputType = {
    id: string
    filename: string
    processed_name: string | null
    user_id: string
    created_at: Date
    updated_at: Date
    _count: UploadedFileCountAggregateOutputType | null
    _min: UploadedFileMinAggregateOutputType | null
    _max: UploadedFileMaxAggregateOutputType | null
  }

  type GetUploadedFileGroupByPayload<T extends UploadedFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UploadedFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UploadedFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UploadedFileGroupByOutputType[P]>
            : GetScalarType<T[P], UploadedFileGroupByOutputType[P]>
        }
      >
    >


  export type UploadedFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    processed_name?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uploadedFile"]>

  export type UploadedFileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    processed_name?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uploadedFile"]>

  export type UploadedFileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    processed_name?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uploadedFile"]>

  export type UploadedFileSelectScalar = {
    id?: boolean
    filename?: boolean
    processed_name?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UploadedFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "filename" | "processed_name" | "user_id" | "created_at" | "updated_at", ExtArgs["result"]["uploadedFile"]>
  export type UploadedFileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UploadedFileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UploadedFileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UploadedFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UploadedFile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      filename: string
      processed_name: string | null
      user_id: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["uploadedFile"]>
    composites: {}
  }

  type UploadedFileGetPayload<S extends boolean | null | undefined | UploadedFileDefaultArgs> = $Result.GetResult<Prisma.$UploadedFilePayload, S>

  type UploadedFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UploadedFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UploadedFileCountAggregateInputType | true
    }

  export interface UploadedFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UploadedFile'], meta: { name: 'UploadedFile' } }
    /**
     * Find zero or one UploadedFile that matches the filter.
     * @param {UploadedFileFindUniqueArgs} args - Arguments to find a UploadedFile
     * @example
     * // Get one UploadedFile
     * const uploadedFile = await prisma.uploadedFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UploadedFileFindUniqueArgs>(args: SelectSubset<T, UploadedFileFindUniqueArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UploadedFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UploadedFileFindUniqueOrThrowArgs} args - Arguments to find a UploadedFile
     * @example
     * // Get one UploadedFile
     * const uploadedFile = await prisma.uploadedFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UploadedFileFindUniqueOrThrowArgs>(args: SelectSubset<T, UploadedFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UploadedFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedFileFindFirstArgs} args - Arguments to find a UploadedFile
     * @example
     * // Get one UploadedFile
     * const uploadedFile = await prisma.uploadedFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UploadedFileFindFirstArgs>(args?: SelectSubset<T, UploadedFileFindFirstArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UploadedFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedFileFindFirstOrThrowArgs} args - Arguments to find a UploadedFile
     * @example
     * // Get one UploadedFile
     * const uploadedFile = await prisma.uploadedFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UploadedFileFindFirstOrThrowArgs>(args?: SelectSubset<T, UploadedFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UploadedFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UploadedFiles
     * const uploadedFiles = await prisma.uploadedFile.findMany()
     * 
     * // Get first 10 UploadedFiles
     * const uploadedFiles = await prisma.uploadedFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uploadedFileWithIdOnly = await prisma.uploadedFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UploadedFileFindManyArgs>(args?: SelectSubset<T, UploadedFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UploadedFile.
     * @param {UploadedFileCreateArgs} args - Arguments to create a UploadedFile.
     * @example
     * // Create one UploadedFile
     * const UploadedFile = await prisma.uploadedFile.create({
     *   data: {
     *     // ... data to create a UploadedFile
     *   }
     * })
     * 
     */
    create<T extends UploadedFileCreateArgs>(args: SelectSubset<T, UploadedFileCreateArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UploadedFiles.
     * @param {UploadedFileCreateManyArgs} args - Arguments to create many UploadedFiles.
     * @example
     * // Create many UploadedFiles
     * const uploadedFile = await prisma.uploadedFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UploadedFileCreateManyArgs>(args?: SelectSubset<T, UploadedFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UploadedFiles and returns the data saved in the database.
     * @param {UploadedFileCreateManyAndReturnArgs} args - Arguments to create many UploadedFiles.
     * @example
     * // Create many UploadedFiles
     * const uploadedFile = await prisma.uploadedFile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UploadedFiles and only return the `id`
     * const uploadedFileWithIdOnly = await prisma.uploadedFile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UploadedFileCreateManyAndReturnArgs>(args?: SelectSubset<T, UploadedFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UploadedFile.
     * @param {UploadedFileDeleteArgs} args - Arguments to delete one UploadedFile.
     * @example
     * // Delete one UploadedFile
     * const UploadedFile = await prisma.uploadedFile.delete({
     *   where: {
     *     // ... filter to delete one UploadedFile
     *   }
     * })
     * 
     */
    delete<T extends UploadedFileDeleteArgs>(args: SelectSubset<T, UploadedFileDeleteArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UploadedFile.
     * @param {UploadedFileUpdateArgs} args - Arguments to update one UploadedFile.
     * @example
     * // Update one UploadedFile
     * const uploadedFile = await prisma.uploadedFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UploadedFileUpdateArgs>(args: SelectSubset<T, UploadedFileUpdateArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UploadedFiles.
     * @param {UploadedFileDeleteManyArgs} args - Arguments to filter UploadedFiles to delete.
     * @example
     * // Delete a few UploadedFiles
     * const { count } = await prisma.uploadedFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UploadedFileDeleteManyArgs>(args?: SelectSubset<T, UploadedFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UploadedFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UploadedFiles
     * const uploadedFile = await prisma.uploadedFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UploadedFileUpdateManyArgs>(args: SelectSubset<T, UploadedFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UploadedFiles and returns the data updated in the database.
     * @param {UploadedFileUpdateManyAndReturnArgs} args - Arguments to update many UploadedFiles.
     * @example
     * // Update many UploadedFiles
     * const uploadedFile = await prisma.uploadedFile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UploadedFiles and only return the `id`
     * const uploadedFileWithIdOnly = await prisma.uploadedFile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UploadedFileUpdateManyAndReturnArgs>(args: SelectSubset<T, UploadedFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UploadedFile.
     * @param {UploadedFileUpsertArgs} args - Arguments to update or create a UploadedFile.
     * @example
     * // Update or create a UploadedFile
     * const uploadedFile = await prisma.uploadedFile.upsert({
     *   create: {
     *     // ... data to create a UploadedFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UploadedFile we want to update
     *   }
     * })
     */
    upsert<T extends UploadedFileUpsertArgs>(args: SelectSubset<T, UploadedFileUpsertArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UploadedFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedFileCountArgs} args - Arguments to filter UploadedFiles to count.
     * @example
     * // Count the number of UploadedFiles
     * const count = await prisma.uploadedFile.count({
     *   where: {
     *     // ... the filter for the UploadedFiles we want to count
     *   }
     * })
    **/
    count<T extends UploadedFileCountArgs>(
      args?: Subset<T, UploadedFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UploadedFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UploadedFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UploadedFileAggregateArgs>(args: Subset<T, UploadedFileAggregateArgs>): Prisma.PrismaPromise<GetUploadedFileAggregateType<T>>

    /**
     * Group by UploadedFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedFileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UploadedFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UploadedFileGroupByArgs['orderBy'] }
        : { orderBy?: UploadedFileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UploadedFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUploadedFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UploadedFile model
   */
  readonly fields: UploadedFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UploadedFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UploadedFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UploadedFile model
   */
  interface UploadedFileFieldRefs {
    readonly id: FieldRef<"UploadedFile", 'String'>
    readonly filename: FieldRef<"UploadedFile", 'String'>
    readonly processed_name: FieldRef<"UploadedFile", 'String'>
    readonly user_id: FieldRef<"UploadedFile", 'String'>
    readonly created_at: FieldRef<"UploadedFile", 'DateTime'>
    readonly updated_at: FieldRef<"UploadedFile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UploadedFile findUnique
   */
  export type UploadedFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileInclude<ExtArgs> | null
    /**
     * Filter, which UploadedFile to fetch.
     */
    where: UploadedFileWhereUniqueInput
  }

  /**
   * UploadedFile findUniqueOrThrow
   */
  export type UploadedFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileInclude<ExtArgs> | null
    /**
     * Filter, which UploadedFile to fetch.
     */
    where: UploadedFileWhereUniqueInput
  }

  /**
   * UploadedFile findFirst
   */
  export type UploadedFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileInclude<ExtArgs> | null
    /**
     * Filter, which UploadedFile to fetch.
     */
    where?: UploadedFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadedFiles to fetch.
     */
    orderBy?: UploadedFileOrderByWithRelationInput | UploadedFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UploadedFiles.
     */
    cursor?: UploadedFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadedFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadedFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadedFiles.
     */
    distinct?: UploadedFileScalarFieldEnum | UploadedFileScalarFieldEnum[]
  }

  /**
   * UploadedFile findFirstOrThrow
   */
  export type UploadedFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileInclude<ExtArgs> | null
    /**
     * Filter, which UploadedFile to fetch.
     */
    where?: UploadedFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadedFiles to fetch.
     */
    orderBy?: UploadedFileOrderByWithRelationInput | UploadedFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UploadedFiles.
     */
    cursor?: UploadedFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadedFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadedFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadedFiles.
     */
    distinct?: UploadedFileScalarFieldEnum | UploadedFileScalarFieldEnum[]
  }

  /**
   * UploadedFile findMany
   */
  export type UploadedFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileInclude<ExtArgs> | null
    /**
     * Filter, which UploadedFiles to fetch.
     */
    where?: UploadedFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadedFiles to fetch.
     */
    orderBy?: UploadedFileOrderByWithRelationInput | UploadedFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UploadedFiles.
     */
    cursor?: UploadedFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadedFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadedFiles.
     */
    skip?: number
    distinct?: UploadedFileScalarFieldEnum | UploadedFileScalarFieldEnum[]
  }

  /**
   * UploadedFile create
   */
  export type UploadedFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileInclude<ExtArgs> | null
    /**
     * The data needed to create a UploadedFile.
     */
    data: XOR<UploadedFileCreateInput, UploadedFileUncheckedCreateInput>
  }

  /**
   * UploadedFile createMany
   */
  export type UploadedFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UploadedFiles.
     */
    data: UploadedFileCreateManyInput | UploadedFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UploadedFile createManyAndReturn
   */
  export type UploadedFileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * The data used to create many UploadedFiles.
     */
    data: UploadedFileCreateManyInput | UploadedFileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UploadedFile update
   */
  export type UploadedFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileInclude<ExtArgs> | null
    /**
     * The data needed to update a UploadedFile.
     */
    data: XOR<UploadedFileUpdateInput, UploadedFileUncheckedUpdateInput>
    /**
     * Choose, which UploadedFile to update.
     */
    where: UploadedFileWhereUniqueInput
  }

  /**
   * UploadedFile updateMany
   */
  export type UploadedFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UploadedFiles.
     */
    data: XOR<UploadedFileUpdateManyMutationInput, UploadedFileUncheckedUpdateManyInput>
    /**
     * Filter which UploadedFiles to update
     */
    where?: UploadedFileWhereInput
    /**
     * Limit how many UploadedFiles to update.
     */
    limit?: number
  }

  /**
   * UploadedFile updateManyAndReturn
   */
  export type UploadedFileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * The data used to update UploadedFiles.
     */
    data: XOR<UploadedFileUpdateManyMutationInput, UploadedFileUncheckedUpdateManyInput>
    /**
     * Filter which UploadedFiles to update
     */
    where?: UploadedFileWhereInput
    /**
     * Limit how many UploadedFiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UploadedFile upsert
   */
  export type UploadedFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileInclude<ExtArgs> | null
    /**
     * The filter to search for the UploadedFile to update in case it exists.
     */
    where: UploadedFileWhereUniqueInput
    /**
     * In case the UploadedFile found by the `where` argument doesn't exist, create a new UploadedFile with this data.
     */
    create: XOR<UploadedFileCreateInput, UploadedFileUncheckedCreateInput>
    /**
     * In case the UploadedFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UploadedFileUpdateInput, UploadedFileUncheckedUpdateInput>
  }

  /**
   * UploadedFile delete
   */
  export type UploadedFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileInclude<ExtArgs> | null
    /**
     * Filter which UploadedFile to delete.
     */
    where: UploadedFileWhereUniqueInput
  }

  /**
   * UploadedFile deleteMany
   */
  export type UploadedFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UploadedFiles to delete
     */
    where?: UploadedFileWhereInput
    /**
     * Limit how many UploadedFiles to delete.
     */
    limit?: number
  }

  /**
   * UploadedFile without action
   */
  export type UploadedFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileInclude<ExtArgs> | null
  }


  /**
   * Model Lot
   */

  export type AggregateLot = {
    _count: LotCountAggregateOutputType | null
    _avg: LotAvgAggregateOutputType | null
    _sum: LotSumAggregateOutputType | null
    _min: LotMinAggregateOutputType | null
    _max: LotMaxAggregateOutputType | null
  }

  export type LotAvgAggregateOutputType = {
    quantity: number | null
    base_price: number | null
    commission_rate: number | null
    unit_awarded_price: number | null
  }

  export type LotSumAggregateOutputType = {
    quantity: number | null
    base_price: number | null
    commission_rate: number | null
    unit_awarded_price: number | null
  }

  export type LotMinAggregateOutputType = {
    id: string | null
    verizon_file_id: string | null
    lot_number: string | null
    item_description: string | null
    grade: string | null
    quantity: number | null
    base_price: number | null
    commission_rate: number | null
    oem: string | null
    sku: string | null
    prop65_warning: string | null
    description: string | null
    disposition: string | null
    unit_awarded_price: number | null
    available_from: Date | null
    available_to: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LotMaxAggregateOutputType = {
    id: string | null
    verizon_file_id: string | null
    lot_number: string | null
    item_description: string | null
    grade: string | null
    quantity: number | null
    base_price: number | null
    commission_rate: number | null
    oem: string | null
    sku: string | null
    prop65_warning: string | null
    description: string | null
    disposition: string | null
    unit_awarded_price: number | null
    available_from: Date | null
    available_to: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LotCountAggregateOutputType = {
    id: number
    verizon_file_id: number
    lot_number: number
    item_description: number
    grade: number
    quantity: number
    base_price: number
    commission_rate: number
    oem: number
    sku: number
    prop65_warning: number
    description: number
    disposition: number
    unit_awarded_price: number
    available_from: number
    available_to: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type LotAvgAggregateInputType = {
    quantity?: true
    base_price?: true
    commission_rate?: true
    unit_awarded_price?: true
  }

  export type LotSumAggregateInputType = {
    quantity?: true
    base_price?: true
    commission_rate?: true
    unit_awarded_price?: true
  }

  export type LotMinAggregateInputType = {
    id?: true
    verizon_file_id?: true
    lot_number?: true
    item_description?: true
    grade?: true
    quantity?: true
    base_price?: true
    commission_rate?: true
    oem?: true
    sku?: true
    prop65_warning?: true
    description?: true
    disposition?: true
    unit_awarded_price?: true
    available_from?: true
    available_to?: true
    created_at?: true
    updated_at?: true
  }

  export type LotMaxAggregateInputType = {
    id?: true
    verizon_file_id?: true
    lot_number?: true
    item_description?: true
    grade?: true
    quantity?: true
    base_price?: true
    commission_rate?: true
    oem?: true
    sku?: true
    prop65_warning?: true
    description?: true
    disposition?: true
    unit_awarded_price?: true
    available_from?: true
    available_to?: true
    created_at?: true
    updated_at?: true
  }

  export type LotCountAggregateInputType = {
    id?: true
    verizon_file_id?: true
    lot_number?: true
    item_description?: true
    grade?: true
    quantity?: true
    base_price?: true
    commission_rate?: true
    oem?: true
    sku?: true
    prop65_warning?: true
    description?: true
    disposition?: true
    unit_awarded_price?: true
    available_from?: true
    available_to?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type LotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lot to aggregate.
     */
    where?: LotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lots to fetch.
     */
    orderBy?: LotOrderByWithRelationInput | LotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lots
    **/
    _count?: true | LotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LotMaxAggregateInputType
  }

  export type GetLotAggregateType<T extends LotAggregateArgs> = {
        [P in keyof T & keyof AggregateLot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLot[P]>
      : GetScalarType<T[P], AggregateLot[P]>
  }




  export type LotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LotWhereInput
    orderBy?: LotOrderByWithAggregationInput | LotOrderByWithAggregationInput[]
    by: LotScalarFieldEnum[] | LotScalarFieldEnum
    having?: LotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LotCountAggregateInputType | true
    _avg?: LotAvgAggregateInputType
    _sum?: LotSumAggregateInputType
    _min?: LotMinAggregateInputType
    _max?: LotMaxAggregateInputType
  }

  export type LotGroupByOutputType = {
    id: string
    verizon_file_id: string | null
    lot_number: string
    item_description: string | null
    grade: string | null
    quantity: number | null
    base_price: number | null
    commission_rate: number
    oem: string | null
    sku: string | null
    prop65_warning: string | null
    description: string | null
    disposition: string | null
    unit_awarded_price: number | null
    available_from: Date | null
    available_to: Date | null
    created_at: Date
    updated_at: Date
    _count: LotCountAggregateOutputType | null
    _avg: LotAvgAggregateOutputType | null
    _sum: LotSumAggregateOutputType | null
    _min: LotMinAggregateOutputType | null
    _max: LotMaxAggregateOutputType | null
  }

  type GetLotGroupByPayload<T extends LotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LotGroupByOutputType[P]>
            : GetScalarType<T[P], LotGroupByOutputType[P]>
        }
      >
    >


  export type LotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verizon_file_id?: boolean
    lot_number?: boolean
    item_description?: boolean
    grade?: boolean
    quantity?: boolean
    base_price?: boolean
    commission_rate?: boolean
    oem?: boolean
    sku?: boolean
    prop65_warning?: boolean
    description?: boolean
    disposition?: boolean
    unit_awarded_price?: boolean
    available_from?: boolean
    available_to?: boolean
    created_at?: boolean
    updated_at?: boolean
    verizon_file?: boolean | Lot$verizon_fileArgs<ExtArgs>
    bids?: boolean | Lot$bidsArgs<ExtArgs>
    awarded_bids?: boolean | Lot$awarded_bidsArgs<ExtArgs>
    _count?: boolean | LotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lot"]>

  export type LotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verizon_file_id?: boolean
    lot_number?: boolean
    item_description?: boolean
    grade?: boolean
    quantity?: boolean
    base_price?: boolean
    commission_rate?: boolean
    oem?: boolean
    sku?: boolean
    prop65_warning?: boolean
    description?: boolean
    disposition?: boolean
    unit_awarded_price?: boolean
    available_from?: boolean
    available_to?: boolean
    created_at?: boolean
    updated_at?: boolean
    verizon_file?: boolean | Lot$verizon_fileArgs<ExtArgs>
  }, ExtArgs["result"]["lot"]>

  export type LotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verizon_file_id?: boolean
    lot_number?: boolean
    item_description?: boolean
    grade?: boolean
    quantity?: boolean
    base_price?: boolean
    commission_rate?: boolean
    oem?: boolean
    sku?: boolean
    prop65_warning?: boolean
    description?: boolean
    disposition?: boolean
    unit_awarded_price?: boolean
    available_from?: boolean
    available_to?: boolean
    created_at?: boolean
    updated_at?: boolean
    verizon_file?: boolean | Lot$verizon_fileArgs<ExtArgs>
  }, ExtArgs["result"]["lot"]>

  export type LotSelectScalar = {
    id?: boolean
    verizon_file_id?: boolean
    lot_number?: boolean
    item_description?: boolean
    grade?: boolean
    quantity?: boolean
    base_price?: boolean
    commission_rate?: boolean
    oem?: boolean
    sku?: boolean
    prop65_warning?: boolean
    description?: boolean
    disposition?: boolean
    unit_awarded_price?: boolean
    available_from?: boolean
    available_to?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type LotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "verizon_file_id" | "lot_number" | "item_description" | "grade" | "quantity" | "base_price" | "commission_rate" | "oem" | "sku" | "prop65_warning" | "description" | "disposition" | "unit_awarded_price" | "available_from" | "available_to" | "created_at" | "updated_at", ExtArgs["result"]["lot"]>
  export type LotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verizon_file?: boolean | Lot$verizon_fileArgs<ExtArgs>
    bids?: boolean | Lot$bidsArgs<ExtArgs>
    awarded_bids?: boolean | Lot$awarded_bidsArgs<ExtArgs>
    _count?: boolean | LotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verizon_file?: boolean | Lot$verizon_fileArgs<ExtArgs>
  }
  export type LotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verizon_file?: boolean | Lot$verizon_fileArgs<ExtArgs>
  }

  export type $LotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lot"
    objects: {
      verizon_file: Prisma.$VerizonFilePayload<ExtArgs> | null
      bids: Prisma.$BidPayload<ExtArgs>[]
      awarded_bids: Prisma.$AwardedBidPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      verizon_file_id: string | null
      lot_number: string
      item_description: string | null
      grade: string | null
      quantity: number | null
      base_price: number | null
      commission_rate: number
      oem: string | null
      sku: string | null
      prop65_warning: string | null
      description: string | null
      disposition: string | null
      unit_awarded_price: number | null
      available_from: Date | null
      available_to: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["lot"]>
    composites: {}
  }

  type LotGetPayload<S extends boolean | null | undefined | LotDefaultArgs> = $Result.GetResult<Prisma.$LotPayload, S>

  type LotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LotCountAggregateInputType | true
    }

  export interface LotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lot'], meta: { name: 'Lot' } }
    /**
     * Find zero or one Lot that matches the filter.
     * @param {LotFindUniqueArgs} args - Arguments to find a Lot
     * @example
     * // Get one Lot
     * const lot = await prisma.lot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LotFindUniqueArgs>(args: SelectSubset<T, LotFindUniqueArgs<ExtArgs>>): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LotFindUniqueOrThrowArgs} args - Arguments to find a Lot
     * @example
     * // Get one Lot
     * const lot = await prisma.lot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LotFindUniqueOrThrowArgs>(args: SelectSubset<T, LotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotFindFirstArgs} args - Arguments to find a Lot
     * @example
     * // Get one Lot
     * const lot = await prisma.lot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LotFindFirstArgs>(args?: SelectSubset<T, LotFindFirstArgs<ExtArgs>>): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotFindFirstOrThrowArgs} args - Arguments to find a Lot
     * @example
     * // Get one Lot
     * const lot = await prisma.lot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LotFindFirstOrThrowArgs>(args?: SelectSubset<T, LotFindFirstOrThrowArgs<ExtArgs>>): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lots
     * const lots = await prisma.lot.findMany()
     * 
     * // Get first 10 Lots
     * const lots = await prisma.lot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lotWithIdOnly = await prisma.lot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LotFindManyArgs>(args?: SelectSubset<T, LotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lot.
     * @param {LotCreateArgs} args - Arguments to create a Lot.
     * @example
     * // Create one Lot
     * const Lot = await prisma.lot.create({
     *   data: {
     *     // ... data to create a Lot
     *   }
     * })
     * 
     */
    create<T extends LotCreateArgs>(args: SelectSubset<T, LotCreateArgs<ExtArgs>>): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lots.
     * @param {LotCreateManyArgs} args - Arguments to create many Lots.
     * @example
     * // Create many Lots
     * const lot = await prisma.lot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LotCreateManyArgs>(args?: SelectSubset<T, LotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lots and returns the data saved in the database.
     * @param {LotCreateManyAndReturnArgs} args - Arguments to create many Lots.
     * @example
     * // Create many Lots
     * const lot = await prisma.lot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lots and only return the `id`
     * const lotWithIdOnly = await prisma.lot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LotCreateManyAndReturnArgs>(args?: SelectSubset<T, LotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lot.
     * @param {LotDeleteArgs} args - Arguments to delete one Lot.
     * @example
     * // Delete one Lot
     * const Lot = await prisma.lot.delete({
     *   where: {
     *     // ... filter to delete one Lot
     *   }
     * })
     * 
     */
    delete<T extends LotDeleteArgs>(args: SelectSubset<T, LotDeleteArgs<ExtArgs>>): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lot.
     * @param {LotUpdateArgs} args - Arguments to update one Lot.
     * @example
     * // Update one Lot
     * const lot = await prisma.lot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LotUpdateArgs>(args: SelectSubset<T, LotUpdateArgs<ExtArgs>>): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lots.
     * @param {LotDeleteManyArgs} args - Arguments to filter Lots to delete.
     * @example
     * // Delete a few Lots
     * const { count } = await prisma.lot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LotDeleteManyArgs>(args?: SelectSubset<T, LotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lots
     * const lot = await prisma.lot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LotUpdateManyArgs>(args: SelectSubset<T, LotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lots and returns the data updated in the database.
     * @param {LotUpdateManyAndReturnArgs} args - Arguments to update many Lots.
     * @example
     * // Update many Lots
     * const lot = await prisma.lot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lots and only return the `id`
     * const lotWithIdOnly = await prisma.lot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LotUpdateManyAndReturnArgs>(args: SelectSubset<T, LotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lot.
     * @param {LotUpsertArgs} args - Arguments to update or create a Lot.
     * @example
     * // Update or create a Lot
     * const lot = await prisma.lot.upsert({
     *   create: {
     *     // ... data to create a Lot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lot we want to update
     *   }
     * })
     */
    upsert<T extends LotUpsertArgs>(args: SelectSubset<T, LotUpsertArgs<ExtArgs>>): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotCountArgs} args - Arguments to filter Lots to count.
     * @example
     * // Count the number of Lots
     * const count = await prisma.lot.count({
     *   where: {
     *     // ... the filter for the Lots we want to count
     *   }
     * })
    **/
    count<T extends LotCountArgs>(
      args?: Subset<T, LotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LotAggregateArgs>(args: Subset<T, LotAggregateArgs>): Prisma.PrismaPromise<GetLotAggregateType<T>>

    /**
     * Group by Lot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LotGroupByArgs['orderBy'] }
        : { orderBy?: LotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lot model
   */
  readonly fields: LotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    verizon_file<T extends Lot$verizon_fileArgs<ExtArgs> = {}>(args?: Subset<T, Lot$verizon_fileArgs<ExtArgs>>): Prisma__VerizonFileClient<$Result.GetResult<Prisma.$VerizonFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bids<T extends Lot$bidsArgs<ExtArgs> = {}>(args?: Subset<T, Lot$bidsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    awarded_bids<T extends Lot$awarded_bidsArgs<ExtArgs> = {}>(args?: Subset<T, Lot$awarded_bidsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardedBidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lot model
   */
  interface LotFieldRefs {
    readonly id: FieldRef<"Lot", 'String'>
    readonly verizon_file_id: FieldRef<"Lot", 'String'>
    readonly lot_number: FieldRef<"Lot", 'String'>
    readonly item_description: FieldRef<"Lot", 'String'>
    readonly grade: FieldRef<"Lot", 'String'>
    readonly quantity: FieldRef<"Lot", 'Int'>
    readonly base_price: FieldRef<"Lot", 'Float'>
    readonly commission_rate: FieldRef<"Lot", 'Float'>
    readonly oem: FieldRef<"Lot", 'String'>
    readonly sku: FieldRef<"Lot", 'String'>
    readonly prop65_warning: FieldRef<"Lot", 'String'>
    readonly description: FieldRef<"Lot", 'String'>
    readonly disposition: FieldRef<"Lot", 'String'>
    readonly unit_awarded_price: FieldRef<"Lot", 'Float'>
    readonly available_from: FieldRef<"Lot", 'DateTime'>
    readonly available_to: FieldRef<"Lot", 'DateTime'>
    readonly created_at: FieldRef<"Lot", 'DateTime'>
    readonly updated_at: FieldRef<"Lot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lot findUnique
   */
  export type LotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * Filter, which Lot to fetch.
     */
    where: LotWhereUniqueInput
  }

  /**
   * Lot findUniqueOrThrow
   */
  export type LotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * Filter, which Lot to fetch.
     */
    where: LotWhereUniqueInput
  }

  /**
   * Lot findFirst
   */
  export type LotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * Filter, which Lot to fetch.
     */
    where?: LotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lots to fetch.
     */
    orderBy?: LotOrderByWithRelationInput | LotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lots.
     */
    cursor?: LotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lots.
     */
    distinct?: LotScalarFieldEnum | LotScalarFieldEnum[]
  }

  /**
   * Lot findFirstOrThrow
   */
  export type LotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * Filter, which Lot to fetch.
     */
    where?: LotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lots to fetch.
     */
    orderBy?: LotOrderByWithRelationInput | LotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lots.
     */
    cursor?: LotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lots.
     */
    distinct?: LotScalarFieldEnum | LotScalarFieldEnum[]
  }

  /**
   * Lot findMany
   */
  export type LotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * Filter, which Lots to fetch.
     */
    where?: LotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lots to fetch.
     */
    orderBy?: LotOrderByWithRelationInput | LotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lots.
     */
    cursor?: LotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lots.
     */
    skip?: number
    distinct?: LotScalarFieldEnum | LotScalarFieldEnum[]
  }

  /**
   * Lot create
   */
  export type LotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * The data needed to create a Lot.
     */
    data: XOR<LotCreateInput, LotUncheckedCreateInput>
  }

  /**
   * Lot createMany
   */
  export type LotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lots.
     */
    data: LotCreateManyInput | LotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lot createManyAndReturn
   */
  export type LotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * The data used to create many Lots.
     */
    data: LotCreateManyInput | LotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lot update
   */
  export type LotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * The data needed to update a Lot.
     */
    data: XOR<LotUpdateInput, LotUncheckedUpdateInput>
    /**
     * Choose, which Lot to update.
     */
    where: LotWhereUniqueInput
  }

  /**
   * Lot updateMany
   */
  export type LotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lots.
     */
    data: XOR<LotUpdateManyMutationInput, LotUncheckedUpdateManyInput>
    /**
     * Filter which Lots to update
     */
    where?: LotWhereInput
    /**
     * Limit how many Lots to update.
     */
    limit?: number
  }

  /**
   * Lot updateManyAndReturn
   */
  export type LotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * The data used to update Lots.
     */
    data: XOR<LotUpdateManyMutationInput, LotUncheckedUpdateManyInput>
    /**
     * Filter which Lots to update
     */
    where?: LotWhereInput
    /**
     * Limit how many Lots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lot upsert
   */
  export type LotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * The filter to search for the Lot to update in case it exists.
     */
    where: LotWhereUniqueInput
    /**
     * In case the Lot found by the `where` argument doesn't exist, create a new Lot with this data.
     */
    create: XOR<LotCreateInput, LotUncheckedCreateInput>
    /**
     * In case the Lot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LotUpdateInput, LotUncheckedUpdateInput>
  }

  /**
   * Lot delete
   */
  export type LotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * Filter which Lot to delete.
     */
    where: LotWhereUniqueInput
  }

  /**
   * Lot deleteMany
   */
  export type LotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lots to delete
     */
    where?: LotWhereInput
    /**
     * Limit how many Lots to delete.
     */
    limit?: number
  }

  /**
   * Lot.verizon_file
   */
  export type Lot$verizon_fileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerizonFile
     */
    select?: VerizonFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerizonFile
     */
    omit?: VerizonFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerizonFileInclude<ExtArgs> | null
    where?: VerizonFileWhereInput
  }

  /**
   * Lot.bids
   */
  export type Lot$bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    where?: BidWhereInput
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    cursor?: BidWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Lot.awarded_bids
   */
  export type Lot$awarded_bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwardedBid
     */
    select?: AwardedBidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwardedBid
     */
    omit?: AwardedBidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardedBidInclude<ExtArgs> | null
    where?: AwardedBidWhereInput
    orderBy?: AwardedBidOrderByWithRelationInput | AwardedBidOrderByWithRelationInput[]
    cursor?: AwardedBidWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AwardedBidScalarFieldEnum | AwardedBidScalarFieldEnum[]
  }

  /**
   * Lot without action
   */
  export type LotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
  }


  /**
   * Model Bid
   */

  export type AggregateBid = {
    _count: BidCountAggregateOutputType | null
    _avg: BidAvgAggregateOutputType | null
    _sum: BidSumAggregateOutputType | null
    _min: BidMinAggregateOutputType | null
    _max: BidMaxAggregateOutputType | null
  }

  export type BidAvgAggregateOutputType = {
    bid_amount: number | null
  }

  export type BidSumAggregateOutputType = {
    bid_amount: number | null
  }

  export type BidMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    lot_id: string | null
    bid_amount: number | null
    submitted_at: Date | null
    status: string | null
    bid_time: Date | null
  }

  export type BidMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    lot_id: string | null
    bid_amount: number | null
    submitted_at: Date | null
    status: string | null
    bid_time: Date | null
  }

  export type BidCountAggregateOutputType = {
    id: number
    user_id: number
    lot_id: number
    bid_amount: number
    submitted_at: number
    status: number
    bid_time: number
    _all: number
  }


  export type BidAvgAggregateInputType = {
    bid_amount?: true
  }

  export type BidSumAggregateInputType = {
    bid_amount?: true
  }

  export type BidMinAggregateInputType = {
    id?: true
    user_id?: true
    lot_id?: true
    bid_amount?: true
    submitted_at?: true
    status?: true
    bid_time?: true
  }

  export type BidMaxAggregateInputType = {
    id?: true
    user_id?: true
    lot_id?: true
    bid_amount?: true
    submitted_at?: true
    status?: true
    bid_time?: true
  }

  export type BidCountAggregateInputType = {
    id?: true
    user_id?: true
    lot_id?: true
    bid_amount?: true
    submitted_at?: true
    status?: true
    bid_time?: true
    _all?: true
  }

  export type BidAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bid to aggregate.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bids
    **/
    _count?: true | BidCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BidAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BidSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BidMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BidMaxAggregateInputType
  }

  export type GetBidAggregateType<T extends BidAggregateArgs> = {
        [P in keyof T & keyof AggregateBid]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBid[P]>
      : GetScalarType<T[P], AggregateBid[P]>
  }




  export type BidGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
    orderBy?: BidOrderByWithAggregationInput | BidOrderByWithAggregationInput[]
    by: BidScalarFieldEnum[] | BidScalarFieldEnum
    having?: BidScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BidCountAggregateInputType | true
    _avg?: BidAvgAggregateInputType
    _sum?: BidSumAggregateInputType
    _min?: BidMinAggregateInputType
    _max?: BidMaxAggregateInputType
  }

  export type BidGroupByOutputType = {
    id: string
    user_id: string
    lot_id: string
    bid_amount: number
    submitted_at: Date
    status: string
    bid_time: Date | null
    _count: BidCountAggregateOutputType | null
    _avg: BidAvgAggregateOutputType | null
    _sum: BidSumAggregateOutputType | null
    _min: BidMinAggregateOutputType | null
    _max: BidMaxAggregateOutputType | null
  }

  type GetBidGroupByPayload<T extends BidGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BidGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BidGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BidGroupByOutputType[P]>
            : GetScalarType<T[P], BidGroupByOutputType[P]>
        }
      >
    >


  export type BidSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    lot_id?: boolean
    bid_amount?: boolean
    submitted_at?: boolean
    status?: boolean
    bid_time?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lot?: boolean | LotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bid"]>

  export type BidSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    lot_id?: boolean
    bid_amount?: boolean
    submitted_at?: boolean
    status?: boolean
    bid_time?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lot?: boolean | LotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bid"]>

  export type BidSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    lot_id?: boolean
    bid_amount?: boolean
    submitted_at?: boolean
    status?: boolean
    bid_time?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lot?: boolean | LotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bid"]>

  export type BidSelectScalar = {
    id?: boolean
    user_id?: boolean
    lot_id?: boolean
    bid_amount?: boolean
    submitted_at?: boolean
    status?: boolean
    bid_time?: boolean
  }

  export type BidOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "lot_id" | "bid_amount" | "submitted_at" | "status" | "bid_time", ExtArgs["result"]["bid"]>
  export type BidInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lot?: boolean | LotDefaultArgs<ExtArgs>
  }
  export type BidIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lot?: boolean | LotDefaultArgs<ExtArgs>
  }
  export type BidIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lot?: boolean | LotDefaultArgs<ExtArgs>
  }

  export type $BidPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bid"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      lot: Prisma.$LotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      lot_id: string
      bid_amount: number
      submitted_at: Date
      status: string
      bid_time: Date | null
    }, ExtArgs["result"]["bid"]>
    composites: {}
  }

  type BidGetPayload<S extends boolean | null | undefined | BidDefaultArgs> = $Result.GetResult<Prisma.$BidPayload, S>

  type BidCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BidFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BidCountAggregateInputType | true
    }

  export interface BidDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bid'], meta: { name: 'Bid' } }
    /**
     * Find zero or one Bid that matches the filter.
     * @param {BidFindUniqueArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BidFindUniqueArgs>(args: SelectSubset<T, BidFindUniqueArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bid that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BidFindUniqueOrThrowArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BidFindUniqueOrThrowArgs>(args: SelectSubset<T, BidFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bid that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindFirstArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BidFindFirstArgs>(args?: SelectSubset<T, BidFindFirstArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bid that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindFirstOrThrowArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BidFindFirstOrThrowArgs>(args?: SelectSubset<T, BidFindFirstOrThrowArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bids
     * const bids = await prisma.bid.findMany()
     * 
     * // Get first 10 Bids
     * const bids = await prisma.bid.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bidWithIdOnly = await prisma.bid.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BidFindManyArgs>(args?: SelectSubset<T, BidFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bid.
     * @param {BidCreateArgs} args - Arguments to create a Bid.
     * @example
     * // Create one Bid
     * const Bid = await prisma.bid.create({
     *   data: {
     *     // ... data to create a Bid
     *   }
     * })
     * 
     */
    create<T extends BidCreateArgs>(args: SelectSubset<T, BidCreateArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bids.
     * @param {BidCreateManyArgs} args - Arguments to create many Bids.
     * @example
     * // Create many Bids
     * const bid = await prisma.bid.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BidCreateManyArgs>(args?: SelectSubset<T, BidCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bids and returns the data saved in the database.
     * @param {BidCreateManyAndReturnArgs} args - Arguments to create many Bids.
     * @example
     * // Create many Bids
     * const bid = await prisma.bid.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bids and only return the `id`
     * const bidWithIdOnly = await prisma.bid.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BidCreateManyAndReturnArgs>(args?: SelectSubset<T, BidCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bid.
     * @param {BidDeleteArgs} args - Arguments to delete one Bid.
     * @example
     * // Delete one Bid
     * const Bid = await prisma.bid.delete({
     *   where: {
     *     // ... filter to delete one Bid
     *   }
     * })
     * 
     */
    delete<T extends BidDeleteArgs>(args: SelectSubset<T, BidDeleteArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bid.
     * @param {BidUpdateArgs} args - Arguments to update one Bid.
     * @example
     * // Update one Bid
     * const bid = await prisma.bid.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BidUpdateArgs>(args: SelectSubset<T, BidUpdateArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bids.
     * @param {BidDeleteManyArgs} args - Arguments to filter Bids to delete.
     * @example
     * // Delete a few Bids
     * const { count } = await prisma.bid.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BidDeleteManyArgs>(args?: SelectSubset<T, BidDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bids
     * const bid = await prisma.bid.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BidUpdateManyArgs>(args: SelectSubset<T, BidUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bids and returns the data updated in the database.
     * @param {BidUpdateManyAndReturnArgs} args - Arguments to update many Bids.
     * @example
     * // Update many Bids
     * const bid = await prisma.bid.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bids and only return the `id`
     * const bidWithIdOnly = await prisma.bid.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BidUpdateManyAndReturnArgs>(args: SelectSubset<T, BidUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bid.
     * @param {BidUpsertArgs} args - Arguments to update or create a Bid.
     * @example
     * // Update or create a Bid
     * const bid = await prisma.bid.upsert({
     *   create: {
     *     // ... data to create a Bid
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bid we want to update
     *   }
     * })
     */
    upsert<T extends BidUpsertArgs>(args: SelectSubset<T, BidUpsertArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidCountArgs} args - Arguments to filter Bids to count.
     * @example
     * // Count the number of Bids
     * const count = await prisma.bid.count({
     *   where: {
     *     // ... the filter for the Bids we want to count
     *   }
     * })
    **/
    count<T extends BidCountArgs>(
      args?: Subset<T, BidCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BidCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BidAggregateArgs>(args: Subset<T, BidAggregateArgs>): Prisma.PrismaPromise<GetBidAggregateType<T>>

    /**
     * Group by Bid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BidGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BidGroupByArgs['orderBy'] }
        : { orderBy?: BidGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BidGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBidGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bid model
   */
  readonly fields: BidFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bid.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BidClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lot<T extends LotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LotDefaultArgs<ExtArgs>>): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bid model
   */
  interface BidFieldRefs {
    readonly id: FieldRef<"Bid", 'String'>
    readonly user_id: FieldRef<"Bid", 'String'>
    readonly lot_id: FieldRef<"Bid", 'String'>
    readonly bid_amount: FieldRef<"Bid", 'Float'>
    readonly submitted_at: FieldRef<"Bid", 'DateTime'>
    readonly status: FieldRef<"Bid", 'String'>
    readonly bid_time: FieldRef<"Bid", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bid findUnique
   */
  export type BidFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid findUniqueOrThrow
   */
  export type BidFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid findFirst
   */
  export type BidFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bids.
     */
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Bid findFirstOrThrow
   */
  export type BidFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bids.
     */
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Bid findMany
   */
  export type BidFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bids to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Bid create
   */
  export type BidCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The data needed to create a Bid.
     */
    data: XOR<BidCreateInput, BidUncheckedCreateInput>
  }

  /**
   * Bid createMany
   */
  export type BidCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bids.
     */
    data: BidCreateManyInput | BidCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bid createManyAndReturn
   */
  export type BidCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * The data used to create many Bids.
     */
    data: BidCreateManyInput | BidCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bid update
   */
  export type BidUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The data needed to update a Bid.
     */
    data: XOR<BidUpdateInput, BidUncheckedUpdateInput>
    /**
     * Choose, which Bid to update.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid updateMany
   */
  export type BidUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bids.
     */
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyInput>
    /**
     * Filter which Bids to update
     */
    where?: BidWhereInput
    /**
     * Limit how many Bids to update.
     */
    limit?: number
  }

  /**
   * Bid updateManyAndReturn
   */
  export type BidUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * The data used to update Bids.
     */
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyInput>
    /**
     * Filter which Bids to update
     */
    where?: BidWhereInput
    /**
     * Limit how many Bids to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bid upsert
   */
  export type BidUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The filter to search for the Bid to update in case it exists.
     */
    where: BidWhereUniqueInput
    /**
     * In case the Bid found by the `where` argument doesn't exist, create a new Bid with this data.
     */
    create: XOR<BidCreateInput, BidUncheckedCreateInput>
    /**
     * In case the Bid was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BidUpdateInput, BidUncheckedUpdateInput>
  }

  /**
   * Bid delete
   */
  export type BidDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter which Bid to delete.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid deleteMany
   */
  export type BidDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bids to delete
     */
    where?: BidWhereInput
    /**
     * Limit how many Bids to delete.
     */
    limit?: number
  }

  /**
   * Bid without action
   */
  export type BidDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
  }


  /**
   * Model AwardedBid
   */

  export type AggregateAwardedBid = {
    _count: AwardedBidCountAggregateOutputType | null
    _avg: AwardedBidAvgAggregateOutputType | null
    _sum: AwardedBidSumAggregateOutputType | null
    _min: AwardedBidMinAggregateOutputType | null
    _max: AwardedBidMaxAggregateOutputType | null
  }

  export type AwardedBidAvgAggregateOutputType = {
    final_price: number | null
    commission: number | null
  }

  export type AwardedBidSumAggregateOutputType = {
    final_price: number | null
    commission: number | null
  }

  export type AwardedBidMinAggregateOutputType = {
    id: string | null
    lot_id: string | null
    awarded_to: string | null
    final_price: number | null
    commission: number | null
  }

  export type AwardedBidMaxAggregateOutputType = {
    id: string | null
    lot_id: string | null
    awarded_to: string | null
    final_price: number | null
    commission: number | null
  }

  export type AwardedBidCountAggregateOutputType = {
    id: number
    lot_id: number
    awarded_to: number
    final_price: number
    commission: number
    _all: number
  }


  export type AwardedBidAvgAggregateInputType = {
    final_price?: true
    commission?: true
  }

  export type AwardedBidSumAggregateInputType = {
    final_price?: true
    commission?: true
  }

  export type AwardedBidMinAggregateInputType = {
    id?: true
    lot_id?: true
    awarded_to?: true
    final_price?: true
    commission?: true
  }

  export type AwardedBidMaxAggregateInputType = {
    id?: true
    lot_id?: true
    awarded_to?: true
    final_price?: true
    commission?: true
  }

  export type AwardedBidCountAggregateInputType = {
    id?: true
    lot_id?: true
    awarded_to?: true
    final_price?: true
    commission?: true
    _all?: true
  }

  export type AwardedBidAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AwardedBid to aggregate.
     */
    where?: AwardedBidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AwardedBids to fetch.
     */
    orderBy?: AwardedBidOrderByWithRelationInput | AwardedBidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AwardedBidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AwardedBids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AwardedBids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AwardedBids
    **/
    _count?: true | AwardedBidCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AwardedBidAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AwardedBidSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AwardedBidMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AwardedBidMaxAggregateInputType
  }

  export type GetAwardedBidAggregateType<T extends AwardedBidAggregateArgs> = {
        [P in keyof T & keyof AggregateAwardedBid]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAwardedBid[P]>
      : GetScalarType<T[P], AggregateAwardedBid[P]>
  }




  export type AwardedBidGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AwardedBidWhereInput
    orderBy?: AwardedBidOrderByWithAggregationInput | AwardedBidOrderByWithAggregationInput[]
    by: AwardedBidScalarFieldEnum[] | AwardedBidScalarFieldEnum
    having?: AwardedBidScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AwardedBidCountAggregateInputType | true
    _avg?: AwardedBidAvgAggregateInputType
    _sum?: AwardedBidSumAggregateInputType
    _min?: AwardedBidMinAggregateInputType
    _max?: AwardedBidMaxAggregateInputType
  }

  export type AwardedBidGroupByOutputType = {
    id: string
    lot_id: string
    awarded_to: string
    final_price: number
    commission: number
    _count: AwardedBidCountAggregateOutputType | null
    _avg: AwardedBidAvgAggregateOutputType | null
    _sum: AwardedBidSumAggregateOutputType | null
    _min: AwardedBidMinAggregateOutputType | null
    _max: AwardedBidMaxAggregateOutputType | null
  }

  type GetAwardedBidGroupByPayload<T extends AwardedBidGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AwardedBidGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AwardedBidGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AwardedBidGroupByOutputType[P]>
            : GetScalarType<T[P], AwardedBidGroupByOutputType[P]>
        }
      >
    >


  export type AwardedBidSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lot_id?: boolean
    awarded_to?: boolean
    final_price?: boolean
    commission?: boolean
    lot?: boolean | LotDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["awardedBid"]>

  export type AwardedBidSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lot_id?: boolean
    awarded_to?: boolean
    final_price?: boolean
    commission?: boolean
    lot?: boolean | LotDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["awardedBid"]>

  export type AwardedBidSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lot_id?: boolean
    awarded_to?: boolean
    final_price?: boolean
    commission?: boolean
    lot?: boolean | LotDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["awardedBid"]>

  export type AwardedBidSelectScalar = {
    id?: boolean
    lot_id?: boolean
    awarded_to?: boolean
    final_price?: boolean
    commission?: boolean
  }

  export type AwardedBidOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lot_id" | "awarded_to" | "final_price" | "commission", ExtArgs["result"]["awardedBid"]>
  export type AwardedBidInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lot?: boolean | LotDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AwardedBidIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lot?: boolean | LotDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AwardedBidIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lot?: boolean | LotDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AwardedBidPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AwardedBid"
    objects: {
      lot: Prisma.$LotPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lot_id: string
      awarded_to: string
      final_price: number
      commission: number
    }, ExtArgs["result"]["awardedBid"]>
    composites: {}
  }

  type AwardedBidGetPayload<S extends boolean | null | undefined | AwardedBidDefaultArgs> = $Result.GetResult<Prisma.$AwardedBidPayload, S>

  type AwardedBidCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AwardedBidFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AwardedBidCountAggregateInputType | true
    }

  export interface AwardedBidDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AwardedBid'], meta: { name: 'AwardedBid' } }
    /**
     * Find zero or one AwardedBid that matches the filter.
     * @param {AwardedBidFindUniqueArgs} args - Arguments to find a AwardedBid
     * @example
     * // Get one AwardedBid
     * const awardedBid = await prisma.awardedBid.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AwardedBidFindUniqueArgs>(args: SelectSubset<T, AwardedBidFindUniqueArgs<ExtArgs>>): Prisma__AwardedBidClient<$Result.GetResult<Prisma.$AwardedBidPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AwardedBid that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AwardedBidFindUniqueOrThrowArgs} args - Arguments to find a AwardedBid
     * @example
     * // Get one AwardedBid
     * const awardedBid = await prisma.awardedBid.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AwardedBidFindUniqueOrThrowArgs>(args: SelectSubset<T, AwardedBidFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AwardedBidClient<$Result.GetResult<Prisma.$AwardedBidPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AwardedBid that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardedBidFindFirstArgs} args - Arguments to find a AwardedBid
     * @example
     * // Get one AwardedBid
     * const awardedBid = await prisma.awardedBid.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AwardedBidFindFirstArgs>(args?: SelectSubset<T, AwardedBidFindFirstArgs<ExtArgs>>): Prisma__AwardedBidClient<$Result.GetResult<Prisma.$AwardedBidPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AwardedBid that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardedBidFindFirstOrThrowArgs} args - Arguments to find a AwardedBid
     * @example
     * // Get one AwardedBid
     * const awardedBid = await prisma.awardedBid.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AwardedBidFindFirstOrThrowArgs>(args?: SelectSubset<T, AwardedBidFindFirstOrThrowArgs<ExtArgs>>): Prisma__AwardedBidClient<$Result.GetResult<Prisma.$AwardedBidPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AwardedBids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardedBidFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AwardedBids
     * const awardedBids = await prisma.awardedBid.findMany()
     * 
     * // Get first 10 AwardedBids
     * const awardedBids = await prisma.awardedBid.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const awardedBidWithIdOnly = await prisma.awardedBid.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AwardedBidFindManyArgs>(args?: SelectSubset<T, AwardedBidFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardedBidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AwardedBid.
     * @param {AwardedBidCreateArgs} args - Arguments to create a AwardedBid.
     * @example
     * // Create one AwardedBid
     * const AwardedBid = await prisma.awardedBid.create({
     *   data: {
     *     // ... data to create a AwardedBid
     *   }
     * })
     * 
     */
    create<T extends AwardedBidCreateArgs>(args: SelectSubset<T, AwardedBidCreateArgs<ExtArgs>>): Prisma__AwardedBidClient<$Result.GetResult<Prisma.$AwardedBidPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AwardedBids.
     * @param {AwardedBidCreateManyArgs} args - Arguments to create many AwardedBids.
     * @example
     * // Create many AwardedBids
     * const awardedBid = await prisma.awardedBid.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AwardedBidCreateManyArgs>(args?: SelectSubset<T, AwardedBidCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AwardedBids and returns the data saved in the database.
     * @param {AwardedBidCreateManyAndReturnArgs} args - Arguments to create many AwardedBids.
     * @example
     * // Create many AwardedBids
     * const awardedBid = await prisma.awardedBid.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AwardedBids and only return the `id`
     * const awardedBidWithIdOnly = await prisma.awardedBid.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AwardedBidCreateManyAndReturnArgs>(args?: SelectSubset<T, AwardedBidCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardedBidPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AwardedBid.
     * @param {AwardedBidDeleteArgs} args - Arguments to delete one AwardedBid.
     * @example
     * // Delete one AwardedBid
     * const AwardedBid = await prisma.awardedBid.delete({
     *   where: {
     *     // ... filter to delete one AwardedBid
     *   }
     * })
     * 
     */
    delete<T extends AwardedBidDeleteArgs>(args: SelectSubset<T, AwardedBidDeleteArgs<ExtArgs>>): Prisma__AwardedBidClient<$Result.GetResult<Prisma.$AwardedBidPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AwardedBid.
     * @param {AwardedBidUpdateArgs} args - Arguments to update one AwardedBid.
     * @example
     * // Update one AwardedBid
     * const awardedBid = await prisma.awardedBid.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AwardedBidUpdateArgs>(args: SelectSubset<T, AwardedBidUpdateArgs<ExtArgs>>): Prisma__AwardedBidClient<$Result.GetResult<Prisma.$AwardedBidPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AwardedBids.
     * @param {AwardedBidDeleteManyArgs} args - Arguments to filter AwardedBids to delete.
     * @example
     * // Delete a few AwardedBids
     * const { count } = await prisma.awardedBid.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AwardedBidDeleteManyArgs>(args?: SelectSubset<T, AwardedBidDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AwardedBids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardedBidUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AwardedBids
     * const awardedBid = await prisma.awardedBid.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AwardedBidUpdateManyArgs>(args: SelectSubset<T, AwardedBidUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AwardedBids and returns the data updated in the database.
     * @param {AwardedBidUpdateManyAndReturnArgs} args - Arguments to update many AwardedBids.
     * @example
     * // Update many AwardedBids
     * const awardedBid = await prisma.awardedBid.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AwardedBids and only return the `id`
     * const awardedBidWithIdOnly = await prisma.awardedBid.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AwardedBidUpdateManyAndReturnArgs>(args: SelectSubset<T, AwardedBidUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardedBidPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AwardedBid.
     * @param {AwardedBidUpsertArgs} args - Arguments to update or create a AwardedBid.
     * @example
     * // Update or create a AwardedBid
     * const awardedBid = await prisma.awardedBid.upsert({
     *   create: {
     *     // ... data to create a AwardedBid
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AwardedBid we want to update
     *   }
     * })
     */
    upsert<T extends AwardedBidUpsertArgs>(args: SelectSubset<T, AwardedBidUpsertArgs<ExtArgs>>): Prisma__AwardedBidClient<$Result.GetResult<Prisma.$AwardedBidPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AwardedBids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardedBidCountArgs} args - Arguments to filter AwardedBids to count.
     * @example
     * // Count the number of AwardedBids
     * const count = await prisma.awardedBid.count({
     *   where: {
     *     // ... the filter for the AwardedBids we want to count
     *   }
     * })
    **/
    count<T extends AwardedBidCountArgs>(
      args?: Subset<T, AwardedBidCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AwardedBidCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AwardedBid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardedBidAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AwardedBidAggregateArgs>(args: Subset<T, AwardedBidAggregateArgs>): Prisma.PrismaPromise<GetAwardedBidAggregateType<T>>

    /**
     * Group by AwardedBid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardedBidGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AwardedBidGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AwardedBidGroupByArgs['orderBy'] }
        : { orderBy?: AwardedBidGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AwardedBidGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAwardedBidGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AwardedBid model
   */
  readonly fields: AwardedBidFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AwardedBid.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AwardedBidClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lot<T extends LotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LotDefaultArgs<ExtArgs>>): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AwardedBid model
   */
  interface AwardedBidFieldRefs {
    readonly id: FieldRef<"AwardedBid", 'String'>
    readonly lot_id: FieldRef<"AwardedBid", 'String'>
    readonly awarded_to: FieldRef<"AwardedBid", 'String'>
    readonly final_price: FieldRef<"AwardedBid", 'Float'>
    readonly commission: FieldRef<"AwardedBid", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * AwardedBid findUnique
   */
  export type AwardedBidFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwardedBid
     */
    select?: AwardedBidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwardedBid
     */
    omit?: AwardedBidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardedBidInclude<ExtArgs> | null
    /**
     * Filter, which AwardedBid to fetch.
     */
    where: AwardedBidWhereUniqueInput
  }

  /**
   * AwardedBid findUniqueOrThrow
   */
  export type AwardedBidFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwardedBid
     */
    select?: AwardedBidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwardedBid
     */
    omit?: AwardedBidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardedBidInclude<ExtArgs> | null
    /**
     * Filter, which AwardedBid to fetch.
     */
    where: AwardedBidWhereUniqueInput
  }

  /**
   * AwardedBid findFirst
   */
  export type AwardedBidFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwardedBid
     */
    select?: AwardedBidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwardedBid
     */
    omit?: AwardedBidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardedBidInclude<ExtArgs> | null
    /**
     * Filter, which AwardedBid to fetch.
     */
    where?: AwardedBidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AwardedBids to fetch.
     */
    orderBy?: AwardedBidOrderByWithRelationInput | AwardedBidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AwardedBids.
     */
    cursor?: AwardedBidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AwardedBids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AwardedBids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AwardedBids.
     */
    distinct?: AwardedBidScalarFieldEnum | AwardedBidScalarFieldEnum[]
  }

  /**
   * AwardedBid findFirstOrThrow
   */
  export type AwardedBidFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwardedBid
     */
    select?: AwardedBidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwardedBid
     */
    omit?: AwardedBidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardedBidInclude<ExtArgs> | null
    /**
     * Filter, which AwardedBid to fetch.
     */
    where?: AwardedBidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AwardedBids to fetch.
     */
    orderBy?: AwardedBidOrderByWithRelationInput | AwardedBidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AwardedBids.
     */
    cursor?: AwardedBidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AwardedBids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AwardedBids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AwardedBids.
     */
    distinct?: AwardedBidScalarFieldEnum | AwardedBidScalarFieldEnum[]
  }

  /**
   * AwardedBid findMany
   */
  export type AwardedBidFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwardedBid
     */
    select?: AwardedBidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwardedBid
     */
    omit?: AwardedBidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardedBidInclude<ExtArgs> | null
    /**
     * Filter, which AwardedBids to fetch.
     */
    where?: AwardedBidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AwardedBids to fetch.
     */
    orderBy?: AwardedBidOrderByWithRelationInput | AwardedBidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AwardedBids.
     */
    cursor?: AwardedBidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AwardedBids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AwardedBids.
     */
    skip?: number
    distinct?: AwardedBidScalarFieldEnum | AwardedBidScalarFieldEnum[]
  }

  /**
   * AwardedBid create
   */
  export type AwardedBidCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwardedBid
     */
    select?: AwardedBidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwardedBid
     */
    omit?: AwardedBidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardedBidInclude<ExtArgs> | null
    /**
     * The data needed to create a AwardedBid.
     */
    data: XOR<AwardedBidCreateInput, AwardedBidUncheckedCreateInput>
  }

  /**
   * AwardedBid createMany
   */
  export type AwardedBidCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AwardedBids.
     */
    data: AwardedBidCreateManyInput | AwardedBidCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AwardedBid createManyAndReturn
   */
  export type AwardedBidCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwardedBid
     */
    select?: AwardedBidSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AwardedBid
     */
    omit?: AwardedBidOmit<ExtArgs> | null
    /**
     * The data used to create many AwardedBids.
     */
    data: AwardedBidCreateManyInput | AwardedBidCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardedBidIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AwardedBid update
   */
  export type AwardedBidUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwardedBid
     */
    select?: AwardedBidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwardedBid
     */
    omit?: AwardedBidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardedBidInclude<ExtArgs> | null
    /**
     * The data needed to update a AwardedBid.
     */
    data: XOR<AwardedBidUpdateInput, AwardedBidUncheckedUpdateInput>
    /**
     * Choose, which AwardedBid to update.
     */
    where: AwardedBidWhereUniqueInput
  }

  /**
   * AwardedBid updateMany
   */
  export type AwardedBidUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AwardedBids.
     */
    data: XOR<AwardedBidUpdateManyMutationInput, AwardedBidUncheckedUpdateManyInput>
    /**
     * Filter which AwardedBids to update
     */
    where?: AwardedBidWhereInput
    /**
     * Limit how many AwardedBids to update.
     */
    limit?: number
  }

  /**
   * AwardedBid updateManyAndReturn
   */
  export type AwardedBidUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwardedBid
     */
    select?: AwardedBidSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AwardedBid
     */
    omit?: AwardedBidOmit<ExtArgs> | null
    /**
     * The data used to update AwardedBids.
     */
    data: XOR<AwardedBidUpdateManyMutationInput, AwardedBidUncheckedUpdateManyInput>
    /**
     * Filter which AwardedBids to update
     */
    where?: AwardedBidWhereInput
    /**
     * Limit how many AwardedBids to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardedBidIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AwardedBid upsert
   */
  export type AwardedBidUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwardedBid
     */
    select?: AwardedBidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwardedBid
     */
    omit?: AwardedBidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardedBidInclude<ExtArgs> | null
    /**
     * The filter to search for the AwardedBid to update in case it exists.
     */
    where: AwardedBidWhereUniqueInput
    /**
     * In case the AwardedBid found by the `where` argument doesn't exist, create a new AwardedBid with this data.
     */
    create: XOR<AwardedBidCreateInput, AwardedBidUncheckedCreateInput>
    /**
     * In case the AwardedBid was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AwardedBidUpdateInput, AwardedBidUncheckedUpdateInput>
  }

  /**
   * AwardedBid delete
   */
  export type AwardedBidDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwardedBid
     */
    select?: AwardedBidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwardedBid
     */
    omit?: AwardedBidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardedBidInclude<ExtArgs> | null
    /**
     * Filter which AwardedBid to delete.
     */
    where: AwardedBidWhereUniqueInput
  }

  /**
   * AwardedBid deleteMany
   */
  export type AwardedBidDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AwardedBids to delete
     */
    where?: AwardedBidWhereInput
    /**
     * Limit how many AwardedBids to delete.
     */
    limit?: number
  }

  /**
   * AwardedBid without action
   */
  export type AwardedBidDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwardedBid
     */
    select?: AwardedBidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwardedBid
     */
    omit?: AwardedBidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardedBidInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    total_amount: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    total_amount: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    invoice_number: string | null
    generated_at: Date | null
    total_amount: number | null
    pdf_url: string | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    invoice_number: string | null
    generated_at: Date | null
    total_amount: number | null
    pdf_url: string | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    user_id: number
    awarded_bid_ids: number
    invoice_number: number
    generated_at: number
    total_amount: number
    pdf_url: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    total_amount?: true
  }

  export type InvoiceSumAggregateInputType = {
    total_amount?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    user_id?: true
    invoice_number?: true
    generated_at?: true
    total_amount?: true
    pdf_url?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    user_id?: true
    invoice_number?: true
    generated_at?: true
    total_amount?: true
    pdf_url?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    user_id?: true
    awarded_bid_ids?: true
    invoice_number?: true
    generated_at?: true
    total_amount?: true
    pdf_url?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: string
    user_id: string
    awarded_bid_ids: string[]
    invoice_number: string
    generated_at: Date
    total_amount: number
    pdf_url: string | null
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    awarded_bid_ids?: boolean
    invoice_number?: boolean
    generated_at?: boolean
    total_amount?: boolean
    pdf_url?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    awarded_bid_ids?: boolean
    invoice_number?: boolean
    generated_at?: boolean
    total_amount?: boolean
    pdf_url?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    awarded_bid_ids?: boolean
    invoice_number?: boolean
    generated_at?: boolean
    total_amount?: boolean
    pdf_url?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    user_id?: boolean
    awarded_bid_ids?: boolean
    invoice_number?: boolean
    generated_at?: boolean
    total_amount?: boolean
    pdf_url?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "awarded_bid_ids" | "invoice_number" | "generated_at" | "total_amount" | "pdf_url", ExtArgs["result"]["invoice"]>
  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      awarded_bid_ids: string[]
      invoice_number: string
      generated_at: Date
      total_amount: number
      pdf_url: string | null
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {InvoiceUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invoice model
   */
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'String'>
    readonly user_id: FieldRef<"Invoice", 'String'>
    readonly awarded_bid_ids: FieldRef<"Invoice", 'String[]'>
    readonly invoice_number: FieldRef<"Invoice", 'String'>
    readonly generated_at: FieldRef<"Invoice", 'DateTime'>
    readonly total_amount: FieldRef<"Invoice", 'Float'>
    readonly pdf_url: FieldRef<"Invoice", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice updateManyAndReturn
   */
  export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model EmailNotification
   */

  export type AggregateEmailNotification = {
    _count: EmailNotificationCountAggregateOutputType | null
    _avg: EmailNotificationAvgAggregateOutputType | null
    _sum: EmailNotificationSumAggregateOutputType | null
    _min: EmailNotificationMinAggregateOutputType | null
    _max: EmailNotificationMaxAggregateOutputType | null
  }

  export type EmailNotificationAvgAggregateOutputType = {
    id: number | null
  }

  export type EmailNotificationSumAggregateOutputType = {
    id: number | null
  }

  export type EmailNotificationMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    subject: string | null
    message: string | null
    notification_type: string | null
    is_sent: boolean | null
    sent_at: Date | null
    created_at: Date | null
  }

  export type EmailNotificationMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    subject: string | null
    message: string | null
    notification_type: string | null
    is_sent: boolean | null
    sent_at: Date | null
    created_at: Date | null
  }

  export type EmailNotificationCountAggregateOutputType = {
    id: number
    user_id: number
    subject: number
    message: number
    notification_type: number
    is_sent: number
    sent_at: number
    created_at: number
    _all: number
  }


  export type EmailNotificationAvgAggregateInputType = {
    id?: true
  }

  export type EmailNotificationSumAggregateInputType = {
    id?: true
  }

  export type EmailNotificationMinAggregateInputType = {
    id?: true
    user_id?: true
    subject?: true
    message?: true
    notification_type?: true
    is_sent?: true
    sent_at?: true
    created_at?: true
  }

  export type EmailNotificationMaxAggregateInputType = {
    id?: true
    user_id?: true
    subject?: true
    message?: true
    notification_type?: true
    is_sent?: true
    sent_at?: true
    created_at?: true
  }

  export type EmailNotificationCountAggregateInputType = {
    id?: true
    user_id?: true
    subject?: true
    message?: true
    notification_type?: true
    is_sent?: true
    sent_at?: true
    created_at?: true
    _all?: true
  }

  export type EmailNotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailNotification to aggregate.
     */
    where?: EmailNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailNotifications to fetch.
     */
    orderBy?: EmailNotificationOrderByWithRelationInput | EmailNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailNotifications
    **/
    _count?: true | EmailNotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailNotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailNotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailNotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailNotificationMaxAggregateInputType
  }

  export type GetEmailNotificationAggregateType<T extends EmailNotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailNotification[P]>
      : GetScalarType<T[P], AggregateEmailNotification[P]>
  }




  export type EmailNotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailNotificationWhereInput
    orderBy?: EmailNotificationOrderByWithAggregationInput | EmailNotificationOrderByWithAggregationInput[]
    by: EmailNotificationScalarFieldEnum[] | EmailNotificationScalarFieldEnum
    having?: EmailNotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailNotificationCountAggregateInputType | true
    _avg?: EmailNotificationAvgAggregateInputType
    _sum?: EmailNotificationSumAggregateInputType
    _min?: EmailNotificationMinAggregateInputType
    _max?: EmailNotificationMaxAggregateInputType
  }

  export type EmailNotificationGroupByOutputType = {
    id: number
    user_id: string | null
    subject: string
    message: string
    notification_type: string | null
    is_sent: boolean
    sent_at: Date | null
    created_at: Date
    _count: EmailNotificationCountAggregateOutputType | null
    _avg: EmailNotificationAvgAggregateOutputType | null
    _sum: EmailNotificationSumAggregateOutputType | null
    _min: EmailNotificationMinAggregateOutputType | null
    _max: EmailNotificationMaxAggregateOutputType | null
  }

  type GetEmailNotificationGroupByPayload<T extends EmailNotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailNotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailNotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailNotificationGroupByOutputType[P]>
            : GetScalarType<T[P], EmailNotificationGroupByOutputType[P]>
        }
      >
    >


  export type EmailNotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    subject?: boolean
    message?: boolean
    notification_type?: boolean
    is_sent?: boolean
    sent_at?: boolean
    created_at?: boolean
    user?: boolean | EmailNotification$userArgs<ExtArgs>
  }, ExtArgs["result"]["emailNotification"]>

  export type EmailNotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    subject?: boolean
    message?: boolean
    notification_type?: boolean
    is_sent?: boolean
    sent_at?: boolean
    created_at?: boolean
    user?: boolean | EmailNotification$userArgs<ExtArgs>
  }, ExtArgs["result"]["emailNotification"]>

  export type EmailNotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    subject?: boolean
    message?: boolean
    notification_type?: boolean
    is_sent?: boolean
    sent_at?: boolean
    created_at?: boolean
    user?: boolean | EmailNotification$userArgs<ExtArgs>
  }, ExtArgs["result"]["emailNotification"]>

  export type EmailNotificationSelectScalar = {
    id?: boolean
    user_id?: boolean
    subject?: boolean
    message?: boolean
    notification_type?: boolean
    is_sent?: boolean
    sent_at?: boolean
    created_at?: boolean
  }

  export type EmailNotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "subject" | "message" | "notification_type" | "is_sent" | "sent_at" | "created_at", ExtArgs["result"]["emailNotification"]>
  export type EmailNotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | EmailNotification$userArgs<ExtArgs>
  }
  export type EmailNotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | EmailNotification$userArgs<ExtArgs>
  }
  export type EmailNotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | EmailNotification$userArgs<ExtArgs>
  }

  export type $EmailNotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailNotification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string | null
      subject: string
      message: string
      notification_type: string | null
      is_sent: boolean
      sent_at: Date | null
      created_at: Date
    }, ExtArgs["result"]["emailNotification"]>
    composites: {}
  }

  type EmailNotificationGetPayload<S extends boolean | null | undefined | EmailNotificationDefaultArgs> = $Result.GetResult<Prisma.$EmailNotificationPayload, S>

  type EmailNotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailNotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailNotificationCountAggregateInputType | true
    }

  export interface EmailNotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailNotification'], meta: { name: 'EmailNotification' } }
    /**
     * Find zero or one EmailNotification that matches the filter.
     * @param {EmailNotificationFindUniqueArgs} args - Arguments to find a EmailNotification
     * @example
     * // Get one EmailNotification
     * const emailNotification = await prisma.emailNotification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailNotificationFindUniqueArgs>(args: SelectSubset<T, EmailNotificationFindUniqueArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailNotification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailNotificationFindUniqueOrThrowArgs} args - Arguments to find a EmailNotification
     * @example
     * // Get one EmailNotification
     * const emailNotification = await prisma.emailNotification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailNotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailNotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailNotification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationFindFirstArgs} args - Arguments to find a EmailNotification
     * @example
     * // Get one EmailNotification
     * const emailNotification = await prisma.emailNotification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailNotificationFindFirstArgs>(args?: SelectSubset<T, EmailNotificationFindFirstArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailNotification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationFindFirstOrThrowArgs} args - Arguments to find a EmailNotification
     * @example
     * // Get one EmailNotification
     * const emailNotification = await prisma.emailNotification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailNotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailNotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailNotifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailNotifications
     * const emailNotifications = await prisma.emailNotification.findMany()
     * 
     * // Get first 10 EmailNotifications
     * const emailNotifications = await prisma.emailNotification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailNotificationWithIdOnly = await prisma.emailNotification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailNotificationFindManyArgs>(args?: SelectSubset<T, EmailNotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailNotification.
     * @param {EmailNotificationCreateArgs} args - Arguments to create a EmailNotification.
     * @example
     * // Create one EmailNotification
     * const EmailNotification = await prisma.emailNotification.create({
     *   data: {
     *     // ... data to create a EmailNotification
     *   }
     * })
     * 
     */
    create<T extends EmailNotificationCreateArgs>(args: SelectSubset<T, EmailNotificationCreateArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailNotifications.
     * @param {EmailNotificationCreateManyArgs} args - Arguments to create many EmailNotifications.
     * @example
     * // Create many EmailNotifications
     * const emailNotification = await prisma.emailNotification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailNotificationCreateManyArgs>(args?: SelectSubset<T, EmailNotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailNotifications and returns the data saved in the database.
     * @param {EmailNotificationCreateManyAndReturnArgs} args - Arguments to create many EmailNotifications.
     * @example
     * // Create many EmailNotifications
     * const emailNotification = await prisma.emailNotification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailNotifications and only return the `id`
     * const emailNotificationWithIdOnly = await prisma.emailNotification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailNotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailNotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailNotification.
     * @param {EmailNotificationDeleteArgs} args - Arguments to delete one EmailNotification.
     * @example
     * // Delete one EmailNotification
     * const EmailNotification = await prisma.emailNotification.delete({
     *   where: {
     *     // ... filter to delete one EmailNotification
     *   }
     * })
     * 
     */
    delete<T extends EmailNotificationDeleteArgs>(args: SelectSubset<T, EmailNotificationDeleteArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailNotification.
     * @param {EmailNotificationUpdateArgs} args - Arguments to update one EmailNotification.
     * @example
     * // Update one EmailNotification
     * const emailNotification = await prisma.emailNotification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailNotificationUpdateArgs>(args: SelectSubset<T, EmailNotificationUpdateArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailNotifications.
     * @param {EmailNotificationDeleteManyArgs} args - Arguments to filter EmailNotifications to delete.
     * @example
     * // Delete a few EmailNotifications
     * const { count } = await prisma.emailNotification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailNotificationDeleteManyArgs>(args?: SelectSubset<T, EmailNotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailNotifications
     * const emailNotification = await prisma.emailNotification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailNotificationUpdateManyArgs>(args: SelectSubset<T, EmailNotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailNotifications and returns the data updated in the database.
     * @param {EmailNotificationUpdateManyAndReturnArgs} args - Arguments to update many EmailNotifications.
     * @example
     * // Update many EmailNotifications
     * const emailNotification = await prisma.emailNotification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailNotifications and only return the `id`
     * const emailNotificationWithIdOnly = await prisma.emailNotification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailNotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailNotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailNotification.
     * @param {EmailNotificationUpsertArgs} args - Arguments to update or create a EmailNotification.
     * @example
     * // Update or create a EmailNotification
     * const emailNotification = await prisma.emailNotification.upsert({
     *   create: {
     *     // ... data to create a EmailNotification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailNotification we want to update
     *   }
     * })
     */
    upsert<T extends EmailNotificationUpsertArgs>(args: SelectSubset<T, EmailNotificationUpsertArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationCountArgs} args - Arguments to filter EmailNotifications to count.
     * @example
     * // Count the number of EmailNotifications
     * const count = await prisma.emailNotification.count({
     *   where: {
     *     // ... the filter for the EmailNotifications we want to count
     *   }
     * })
    **/
    count<T extends EmailNotificationCountArgs>(
      args?: Subset<T, EmailNotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailNotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmailNotificationAggregateArgs>(args: Subset<T, EmailNotificationAggregateArgs>): Prisma.PrismaPromise<GetEmailNotificationAggregateType<T>>

    /**
     * Group by EmailNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmailNotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailNotificationGroupByArgs['orderBy'] }
        : { orderBy?: EmailNotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmailNotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailNotification model
   */
  readonly fields: EmailNotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailNotification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailNotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends EmailNotification$userArgs<ExtArgs> = {}>(args?: Subset<T, EmailNotification$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmailNotification model
   */
  interface EmailNotificationFieldRefs {
    readonly id: FieldRef<"EmailNotification", 'Int'>
    readonly user_id: FieldRef<"EmailNotification", 'String'>
    readonly subject: FieldRef<"EmailNotification", 'String'>
    readonly message: FieldRef<"EmailNotification", 'String'>
    readonly notification_type: FieldRef<"EmailNotification", 'String'>
    readonly is_sent: FieldRef<"EmailNotification", 'Boolean'>
    readonly sent_at: FieldRef<"EmailNotification", 'DateTime'>
    readonly created_at: FieldRef<"EmailNotification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailNotification findUnique
   */
  export type EmailNotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    /**
     * Filter, which EmailNotification to fetch.
     */
    where: EmailNotificationWhereUniqueInput
  }

  /**
   * EmailNotification findUniqueOrThrow
   */
  export type EmailNotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    /**
     * Filter, which EmailNotification to fetch.
     */
    where: EmailNotificationWhereUniqueInput
  }

  /**
   * EmailNotification findFirst
   */
  export type EmailNotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    /**
     * Filter, which EmailNotification to fetch.
     */
    where?: EmailNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailNotifications to fetch.
     */
    orderBy?: EmailNotificationOrderByWithRelationInput | EmailNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailNotifications.
     */
    cursor?: EmailNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailNotifications.
     */
    distinct?: EmailNotificationScalarFieldEnum | EmailNotificationScalarFieldEnum[]
  }

  /**
   * EmailNotification findFirstOrThrow
   */
  export type EmailNotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    /**
     * Filter, which EmailNotification to fetch.
     */
    where?: EmailNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailNotifications to fetch.
     */
    orderBy?: EmailNotificationOrderByWithRelationInput | EmailNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailNotifications.
     */
    cursor?: EmailNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailNotifications.
     */
    distinct?: EmailNotificationScalarFieldEnum | EmailNotificationScalarFieldEnum[]
  }

  /**
   * EmailNotification findMany
   */
  export type EmailNotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    /**
     * Filter, which EmailNotifications to fetch.
     */
    where?: EmailNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailNotifications to fetch.
     */
    orderBy?: EmailNotificationOrderByWithRelationInput | EmailNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailNotifications.
     */
    cursor?: EmailNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailNotifications.
     */
    skip?: number
    distinct?: EmailNotificationScalarFieldEnum | EmailNotificationScalarFieldEnum[]
  }

  /**
   * EmailNotification create
   */
  export type EmailNotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailNotification.
     */
    data: XOR<EmailNotificationCreateInput, EmailNotificationUncheckedCreateInput>
  }

  /**
   * EmailNotification createMany
   */
  export type EmailNotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailNotifications.
     */
    data: EmailNotificationCreateManyInput | EmailNotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailNotification createManyAndReturn
   */
  export type EmailNotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * The data used to create many EmailNotifications.
     */
    data: EmailNotificationCreateManyInput | EmailNotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailNotification update
   */
  export type EmailNotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailNotification.
     */
    data: XOR<EmailNotificationUpdateInput, EmailNotificationUncheckedUpdateInput>
    /**
     * Choose, which EmailNotification to update.
     */
    where: EmailNotificationWhereUniqueInput
  }

  /**
   * EmailNotification updateMany
   */
  export type EmailNotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailNotifications.
     */
    data: XOR<EmailNotificationUpdateManyMutationInput, EmailNotificationUncheckedUpdateManyInput>
    /**
     * Filter which EmailNotifications to update
     */
    where?: EmailNotificationWhereInput
    /**
     * Limit how many EmailNotifications to update.
     */
    limit?: number
  }

  /**
   * EmailNotification updateManyAndReturn
   */
  export type EmailNotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * The data used to update EmailNotifications.
     */
    data: XOR<EmailNotificationUpdateManyMutationInput, EmailNotificationUncheckedUpdateManyInput>
    /**
     * Filter which EmailNotifications to update
     */
    where?: EmailNotificationWhereInput
    /**
     * Limit how many EmailNotifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailNotification upsert
   */
  export type EmailNotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailNotification to update in case it exists.
     */
    where: EmailNotificationWhereUniqueInput
    /**
     * In case the EmailNotification found by the `where` argument doesn't exist, create a new EmailNotification with this data.
     */
    create: XOR<EmailNotificationCreateInput, EmailNotificationUncheckedCreateInput>
    /**
     * In case the EmailNotification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailNotificationUpdateInput, EmailNotificationUncheckedUpdateInput>
  }

  /**
   * EmailNotification delete
   */
  export type EmailNotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    /**
     * Filter which EmailNotification to delete.
     */
    where: EmailNotificationWhereUniqueInput
  }

  /**
   * EmailNotification deleteMany
   */
  export type EmailNotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailNotifications to delete
     */
    where?: EmailNotificationWhereInput
    /**
     * Limit how many EmailNotifications to delete.
     */
    limit?: number
  }

  /**
   * EmailNotification.user
   */
  export type EmailNotification$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * EmailNotification without action
   */
  export type EmailNotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerizonFileScalarFieldEnum: {
    id: 'id',
    file_name: 'file_name',
    uploaded_by: 'uploaded_by',
    upload_time: 'upload_time',
    cleaned: 'cleaned'
  };

  export type VerizonFileScalarFieldEnum = (typeof VerizonFileScalarFieldEnum)[keyof typeof VerizonFileScalarFieldEnum]


  export const UploadedFileScalarFieldEnum: {
    id: 'id',
    filename: 'filename',
    processed_name: 'processed_name',
    user_id: 'user_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UploadedFileScalarFieldEnum = (typeof UploadedFileScalarFieldEnum)[keyof typeof UploadedFileScalarFieldEnum]


  export const LotScalarFieldEnum: {
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

  export type LotScalarFieldEnum = (typeof LotScalarFieldEnum)[keyof typeof LotScalarFieldEnum]


  export const BidScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    lot_id: 'lot_id',
    bid_amount: 'bid_amount',
    submitted_at: 'submitted_at',
    status: 'status',
    bid_time: 'bid_time'
  };

  export type BidScalarFieldEnum = (typeof BidScalarFieldEnum)[keyof typeof BidScalarFieldEnum]


  export const AwardedBidScalarFieldEnum: {
    id: 'id',
    lot_id: 'lot_id',
    awarded_to: 'awarded_to',
    final_price: 'final_price',
    commission: 'commission'
  };

  export type AwardedBidScalarFieldEnum = (typeof AwardedBidScalarFieldEnum)[keyof typeof AwardedBidScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    awarded_bid_ids: 'awarded_bid_ids',
    invoice_number: 'invoice_number',
    generated_at: 'generated_at',
    total_amount: 'total_amount',
    pdf_url: 'pdf_url'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const EmailNotificationScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    subject: 'subject',
    message: 'message',
    notification_type: 'notification_type',
    is_sent: 'is_sent',
    sent_at: 'sent_at',
    created_at: 'created_at'
  };

  export type EmailNotificationScalarFieldEnum = (typeof EmailNotificationScalarFieldEnum)[keyof typeof EmailNotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    bids_placed?: IntFilter<"User"> | number
    active_bids?: IntFilter<"User"> | number
    won_bids?: IntFilter<"User"> | number
    reset_token?: StringNullableFilter<"User"> | string | null
    reset_token_expiry?: DateTimeNullableFilter<"User"> | Date | string | null
    verification_code?: StringNullableFilter<"User"> | string | null
    code_expires_at?: DateTimeNullableFilter<"User"> | Date | string | null
    is_verified?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    verizon_files?: VerizonFileListRelationFilter
    uploaded_files?: UploadedFileListRelationFilter
    bids?: BidListRelationFilter
    awarded_bids?: AwardedBidListRelationFilter
    invoices?: InvoiceListRelationFilter
    email_notifications?: EmailNotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    bids_placed?: SortOrder
    active_bids?: SortOrder
    won_bids?: SortOrder
    reset_token?: SortOrderInput | SortOrder
    reset_token_expiry?: SortOrderInput | SortOrder
    verification_code?: SortOrderInput | SortOrder
    code_expires_at?: SortOrderInput | SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    verizon_files?: VerizonFileOrderByRelationAggregateInput
    uploaded_files?: UploadedFileOrderByRelationAggregateInput
    bids?: BidOrderByRelationAggregateInput
    awarded_bids?: AwardedBidOrderByRelationAggregateInput
    invoices?: InvoiceOrderByRelationAggregateInput
    email_notifications?: EmailNotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    bids_placed?: IntFilter<"User"> | number
    active_bids?: IntFilter<"User"> | number
    won_bids?: IntFilter<"User"> | number
    reset_token?: StringNullableFilter<"User"> | string | null
    reset_token_expiry?: DateTimeNullableFilter<"User"> | Date | string | null
    verification_code?: StringNullableFilter<"User"> | string | null
    code_expires_at?: DateTimeNullableFilter<"User"> | Date | string | null
    is_verified?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    verizon_files?: VerizonFileListRelationFilter
    uploaded_files?: UploadedFileListRelationFilter
    bids?: BidListRelationFilter
    awarded_bids?: AwardedBidListRelationFilter
    invoices?: InvoiceListRelationFilter
    email_notifications?: EmailNotificationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    bids_placed?: SortOrder
    active_bids?: SortOrder
    won_bids?: SortOrder
    reset_token?: SortOrderInput | SortOrder
    reset_token_expiry?: SortOrderInput | SortOrder
    verification_code?: SortOrderInput | SortOrder
    code_expires_at?: SortOrderInput | SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    bids_placed?: IntWithAggregatesFilter<"User"> | number
    active_bids?: IntWithAggregatesFilter<"User"> | number
    won_bids?: IntWithAggregatesFilter<"User"> | number
    reset_token?: StringNullableWithAggregatesFilter<"User"> | string | null
    reset_token_expiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    verification_code?: StringNullableWithAggregatesFilter<"User"> | string | null
    code_expires_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    is_verified?: BoolWithAggregatesFilter<"User"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VerizonFileWhereInput = {
    AND?: VerizonFileWhereInput | VerizonFileWhereInput[]
    OR?: VerizonFileWhereInput[]
    NOT?: VerizonFileWhereInput | VerizonFileWhereInput[]
    id?: UuidFilter<"VerizonFile"> | string
    file_name?: StringFilter<"VerizonFile"> | string
    uploaded_by?: UuidFilter<"VerizonFile"> | string
    upload_time?: DateTimeFilter<"VerizonFile"> | Date | string
    cleaned?: BoolFilter<"VerizonFile"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lots?: LotListRelationFilter
  }

  export type VerizonFileOrderByWithRelationInput = {
    id?: SortOrder
    file_name?: SortOrder
    uploaded_by?: SortOrder
    upload_time?: SortOrder
    cleaned?: SortOrder
    user?: UserOrderByWithRelationInput
    lots?: LotOrderByRelationAggregateInput
  }

  export type VerizonFileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerizonFileWhereInput | VerizonFileWhereInput[]
    OR?: VerizonFileWhereInput[]
    NOT?: VerizonFileWhereInput | VerizonFileWhereInput[]
    file_name?: StringFilter<"VerizonFile"> | string
    uploaded_by?: UuidFilter<"VerizonFile"> | string
    upload_time?: DateTimeFilter<"VerizonFile"> | Date | string
    cleaned?: BoolFilter<"VerizonFile"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lots?: LotListRelationFilter
  }, "id">

  export type VerizonFileOrderByWithAggregationInput = {
    id?: SortOrder
    file_name?: SortOrder
    uploaded_by?: SortOrder
    upload_time?: SortOrder
    cleaned?: SortOrder
    _count?: VerizonFileCountOrderByAggregateInput
    _max?: VerizonFileMaxOrderByAggregateInput
    _min?: VerizonFileMinOrderByAggregateInput
  }

  export type VerizonFileScalarWhereWithAggregatesInput = {
    AND?: VerizonFileScalarWhereWithAggregatesInput | VerizonFileScalarWhereWithAggregatesInput[]
    OR?: VerizonFileScalarWhereWithAggregatesInput[]
    NOT?: VerizonFileScalarWhereWithAggregatesInput | VerizonFileScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"VerizonFile"> | string
    file_name?: StringWithAggregatesFilter<"VerizonFile"> | string
    uploaded_by?: UuidWithAggregatesFilter<"VerizonFile"> | string
    upload_time?: DateTimeWithAggregatesFilter<"VerizonFile"> | Date | string
    cleaned?: BoolWithAggregatesFilter<"VerizonFile"> | boolean
  }

  export type UploadedFileWhereInput = {
    AND?: UploadedFileWhereInput | UploadedFileWhereInput[]
    OR?: UploadedFileWhereInput[]
    NOT?: UploadedFileWhereInput | UploadedFileWhereInput[]
    id?: StringFilter<"UploadedFile"> | string
    filename?: StringFilter<"UploadedFile"> | string
    processed_name?: StringNullableFilter<"UploadedFile"> | string | null
    user_id?: UuidFilter<"UploadedFile"> | string
    created_at?: DateTimeFilter<"UploadedFile"> | Date | string
    updated_at?: DateTimeFilter<"UploadedFile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UploadedFileOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrder
    processed_name?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UploadedFileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UploadedFileWhereInput | UploadedFileWhereInput[]
    OR?: UploadedFileWhereInput[]
    NOT?: UploadedFileWhereInput | UploadedFileWhereInput[]
    filename?: StringFilter<"UploadedFile"> | string
    processed_name?: StringNullableFilter<"UploadedFile"> | string | null
    user_id?: UuidFilter<"UploadedFile"> | string
    created_at?: DateTimeFilter<"UploadedFile"> | Date | string
    updated_at?: DateTimeFilter<"UploadedFile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UploadedFileOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrder
    processed_name?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UploadedFileCountOrderByAggregateInput
    _max?: UploadedFileMaxOrderByAggregateInput
    _min?: UploadedFileMinOrderByAggregateInput
  }

  export type UploadedFileScalarWhereWithAggregatesInput = {
    AND?: UploadedFileScalarWhereWithAggregatesInput | UploadedFileScalarWhereWithAggregatesInput[]
    OR?: UploadedFileScalarWhereWithAggregatesInput[]
    NOT?: UploadedFileScalarWhereWithAggregatesInput | UploadedFileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UploadedFile"> | string
    filename?: StringWithAggregatesFilter<"UploadedFile"> | string
    processed_name?: StringNullableWithAggregatesFilter<"UploadedFile"> | string | null
    user_id?: UuidWithAggregatesFilter<"UploadedFile"> | string
    created_at?: DateTimeWithAggregatesFilter<"UploadedFile"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"UploadedFile"> | Date | string
  }

  export type LotWhereInput = {
    AND?: LotWhereInput | LotWhereInput[]
    OR?: LotWhereInput[]
    NOT?: LotWhereInput | LotWhereInput[]
    id?: UuidFilter<"Lot"> | string
    verizon_file_id?: UuidNullableFilter<"Lot"> | string | null
    lot_number?: StringFilter<"Lot"> | string
    item_description?: StringNullableFilter<"Lot"> | string | null
    grade?: StringNullableFilter<"Lot"> | string | null
    quantity?: IntNullableFilter<"Lot"> | number | null
    base_price?: FloatNullableFilter<"Lot"> | number | null
    commission_rate?: FloatFilter<"Lot"> | number
    oem?: StringNullableFilter<"Lot"> | string | null
    sku?: StringNullableFilter<"Lot"> | string | null
    prop65_warning?: StringNullableFilter<"Lot"> | string | null
    description?: StringNullableFilter<"Lot"> | string | null
    disposition?: StringNullableFilter<"Lot"> | string | null
    unit_awarded_price?: FloatNullableFilter<"Lot"> | number | null
    available_from?: DateTimeNullableFilter<"Lot"> | Date | string | null
    available_to?: DateTimeNullableFilter<"Lot"> | Date | string | null
    created_at?: DateTimeFilter<"Lot"> | Date | string
    updated_at?: DateTimeFilter<"Lot"> | Date | string
    verizon_file?: XOR<VerizonFileNullableScalarRelationFilter, VerizonFileWhereInput> | null
    bids?: BidListRelationFilter
    awarded_bids?: AwardedBidListRelationFilter
  }

  export type LotOrderByWithRelationInput = {
    id?: SortOrder
    verizon_file_id?: SortOrderInput | SortOrder
    lot_number?: SortOrder
    item_description?: SortOrderInput | SortOrder
    grade?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    base_price?: SortOrderInput | SortOrder
    commission_rate?: SortOrder
    oem?: SortOrderInput | SortOrder
    sku?: SortOrderInput | SortOrder
    prop65_warning?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    disposition?: SortOrderInput | SortOrder
    unit_awarded_price?: SortOrderInput | SortOrder
    available_from?: SortOrderInput | SortOrder
    available_to?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    verizon_file?: VerizonFileOrderByWithRelationInput
    bids?: BidOrderByRelationAggregateInput
    awarded_bids?: AwardedBidOrderByRelationAggregateInput
  }

  export type LotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LotWhereInput | LotWhereInput[]
    OR?: LotWhereInput[]
    NOT?: LotWhereInput | LotWhereInput[]
    verizon_file_id?: UuidNullableFilter<"Lot"> | string | null
    lot_number?: StringFilter<"Lot"> | string
    item_description?: StringNullableFilter<"Lot"> | string | null
    grade?: StringNullableFilter<"Lot"> | string | null
    quantity?: IntNullableFilter<"Lot"> | number | null
    base_price?: FloatNullableFilter<"Lot"> | number | null
    commission_rate?: FloatFilter<"Lot"> | number
    oem?: StringNullableFilter<"Lot"> | string | null
    sku?: StringNullableFilter<"Lot"> | string | null
    prop65_warning?: StringNullableFilter<"Lot"> | string | null
    description?: StringNullableFilter<"Lot"> | string | null
    disposition?: StringNullableFilter<"Lot"> | string | null
    unit_awarded_price?: FloatNullableFilter<"Lot"> | number | null
    available_from?: DateTimeNullableFilter<"Lot"> | Date | string | null
    available_to?: DateTimeNullableFilter<"Lot"> | Date | string | null
    created_at?: DateTimeFilter<"Lot"> | Date | string
    updated_at?: DateTimeFilter<"Lot"> | Date | string
    verizon_file?: XOR<VerizonFileNullableScalarRelationFilter, VerizonFileWhereInput> | null
    bids?: BidListRelationFilter
    awarded_bids?: AwardedBidListRelationFilter
  }, "id">

  export type LotOrderByWithAggregationInput = {
    id?: SortOrder
    verizon_file_id?: SortOrderInput | SortOrder
    lot_number?: SortOrder
    item_description?: SortOrderInput | SortOrder
    grade?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    base_price?: SortOrderInput | SortOrder
    commission_rate?: SortOrder
    oem?: SortOrderInput | SortOrder
    sku?: SortOrderInput | SortOrder
    prop65_warning?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    disposition?: SortOrderInput | SortOrder
    unit_awarded_price?: SortOrderInput | SortOrder
    available_from?: SortOrderInput | SortOrder
    available_to?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: LotCountOrderByAggregateInput
    _avg?: LotAvgOrderByAggregateInput
    _max?: LotMaxOrderByAggregateInput
    _min?: LotMinOrderByAggregateInput
    _sum?: LotSumOrderByAggregateInput
  }

  export type LotScalarWhereWithAggregatesInput = {
    AND?: LotScalarWhereWithAggregatesInput | LotScalarWhereWithAggregatesInput[]
    OR?: LotScalarWhereWithAggregatesInput[]
    NOT?: LotScalarWhereWithAggregatesInput | LotScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Lot"> | string
    verizon_file_id?: UuidNullableWithAggregatesFilter<"Lot"> | string | null
    lot_number?: StringWithAggregatesFilter<"Lot"> | string
    item_description?: StringNullableWithAggregatesFilter<"Lot"> | string | null
    grade?: StringNullableWithAggregatesFilter<"Lot"> | string | null
    quantity?: IntNullableWithAggregatesFilter<"Lot"> | number | null
    base_price?: FloatNullableWithAggregatesFilter<"Lot"> | number | null
    commission_rate?: FloatWithAggregatesFilter<"Lot"> | number
    oem?: StringNullableWithAggregatesFilter<"Lot"> | string | null
    sku?: StringNullableWithAggregatesFilter<"Lot"> | string | null
    prop65_warning?: StringNullableWithAggregatesFilter<"Lot"> | string | null
    description?: StringNullableWithAggregatesFilter<"Lot"> | string | null
    disposition?: StringNullableWithAggregatesFilter<"Lot"> | string | null
    unit_awarded_price?: FloatNullableWithAggregatesFilter<"Lot"> | number | null
    available_from?: DateTimeNullableWithAggregatesFilter<"Lot"> | Date | string | null
    available_to?: DateTimeNullableWithAggregatesFilter<"Lot"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"Lot"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Lot"> | Date | string
  }

  export type BidWhereInput = {
    AND?: BidWhereInput | BidWhereInput[]
    OR?: BidWhereInput[]
    NOT?: BidWhereInput | BidWhereInput[]
    id?: UuidFilter<"Bid"> | string
    user_id?: UuidFilter<"Bid"> | string
    lot_id?: UuidFilter<"Bid"> | string
    bid_amount?: FloatFilter<"Bid"> | number
    submitted_at?: DateTimeFilter<"Bid"> | Date | string
    status?: StringFilter<"Bid"> | string
    bid_time?: DateTimeNullableFilter<"Bid"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lot?: XOR<LotScalarRelationFilter, LotWhereInput>
  }

  export type BidOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    lot_id?: SortOrder
    bid_amount?: SortOrder
    submitted_at?: SortOrder
    status?: SortOrder
    bid_time?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    lot?: LotOrderByWithRelationInput
  }

  export type BidWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BidWhereInput | BidWhereInput[]
    OR?: BidWhereInput[]
    NOT?: BidWhereInput | BidWhereInput[]
    user_id?: UuidFilter<"Bid"> | string
    lot_id?: UuidFilter<"Bid"> | string
    bid_amount?: FloatFilter<"Bid"> | number
    submitted_at?: DateTimeFilter<"Bid"> | Date | string
    status?: StringFilter<"Bid"> | string
    bid_time?: DateTimeNullableFilter<"Bid"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lot?: XOR<LotScalarRelationFilter, LotWhereInput>
  }, "id">

  export type BidOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    lot_id?: SortOrder
    bid_amount?: SortOrder
    submitted_at?: SortOrder
    status?: SortOrder
    bid_time?: SortOrderInput | SortOrder
    _count?: BidCountOrderByAggregateInput
    _avg?: BidAvgOrderByAggregateInput
    _max?: BidMaxOrderByAggregateInput
    _min?: BidMinOrderByAggregateInput
    _sum?: BidSumOrderByAggregateInput
  }

  export type BidScalarWhereWithAggregatesInput = {
    AND?: BidScalarWhereWithAggregatesInput | BidScalarWhereWithAggregatesInput[]
    OR?: BidScalarWhereWithAggregatesInput[]
    NOT?: BidScalarWhereWithAggregatesInput | BidScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Bid"> | string
    user_id?: UuidWithAggregatesFilter<"Bid"> | string
    lot_id?: UuidWithAggregatesFilter<"Bid"> | string
    bid_amount?: FloatWithAggregatesFilter<"Bid"> | number
    submitted_at?: DateTimeWithAggregatesFilter<"Bid"> | Date | string
    status?: StringWithAggregatesFilter<"Bid"> | string
    bid_time?: DateTimeNullableWithAggregatesFilter<"Bid"> | Date | string | null
  }

  export type AwardedBidWhereInput = {
    AND?: AwardedBidWhereInput | AwardedBidWhereInput[]
    OR?: AwardedBidWhereInput[]
    NOT?: AwardedBidWhereInput | AwardedBidWhereInput[]
    id?: StringFilter<"AwardedBid"> | string
    lot_id?: UuidFilter<"AwardedBid"> | string
    awarded_to?: UuidFilter<"AwardedBid"> | string
    final_price?: FloatFilter<"AwardedBid"> | number
    commission?: FloatFilter<"AwardedBid"> | number
    lot?: XOR<LotScalarRelationFilter, LotWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AwardedBidOrderByWithRelationInput = {
    id?: SortOrder
    lot_id?: SortOrder
    awarded_to?: SortOrder
    final_price?: SortOrder
    commission?: SortOrder
    lot?: LotOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AwardedBidWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AwardedBidWhereInput | AwardedBidWhereInput[]
    OR?: AwardedBidWhereInput[]
    NOT?: AwardedBidWhereInput | AwardedBidWhereInput[]
    lot_id?: UuidFilter<"AwardedBid"> | string
    awarded_to?: UuidFilter<"AwardedBid"> | string
    final_price?: FloatFilter<"AwardedBid"> | number
    commission?: FloatFilter<"AwardedBid"> | number
    lot?: XOR<LotScalarRelationFilter, LotWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AwardedBidOrderByWithAggregationInput = {
    id?: SortOrder
    lot_id?: SortOrder
    awarded_to?: SortOrder
    final_price?: SortOrder
    commission?: SortOrder
    _count?: AwardedBidCountOrderByAggregateInput
    _avg?: AwardedBidAvgOrderByAggregateInput
    _max?: AwardedBidMaxOrderByAggregateInput
    _min?: AwardedBidMinOrderByAggregateInput
    _sum?: AwardedBidSumOrderByAggregateInput
  }

  export type AwardedBidScalarWhereWithAggregatesInput = {
    AND?: AwardedBidScalarWhereWithAggregatesInput | AwardedBidScalarWhereWithAggregatesInput[]
    OR?: AwardedBidScalarWhereWithAggregatesInput[]
    NOT?: AwardedBidScalarWhereWithAggregatesInput | AwardedBidScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AwardedBid"> | string
    lot_id?: UuidWithAggregatesFilter<"AwardedBid"> | string
    awarded_to?: UuidWithAggregatesFilter<"AwardedBid"> | string
    final_price?: FloatWithAggregatesFilter<"AwardedBid"> | number
    commission?: FloatWithAggregatesFilter<"AwardedBid"> | number
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: StringFilter<"Invoice"> | string
    user_id?: UuidFilter<"Invoice"> | string
    awarded_bid_ids?: StringNullableListFilter<"Invoice">
    invoice_number?: StringFilter<"Invoice"> | string
    generated_at?: DateTimeFilter<"Invoice"> | Date | string
    total_amount?: FloatFilter<"Invoice"> | number
    pdf_url?: StringNullableFilter<"Invoice"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    awarded_bid_ids?: SortOrder
    invoice_number?: SortOrder
    generated_at?: SortOrder
    total_amount?: SortOrder
    pdf_url?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    invoice_number?: string
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    user_id?: UuidFilter<"Invoice"> | string
    awarded_bid_ids?: StringNullableListFilter<"Invoice">
    generated_at?: DateTimeFilter<"Invoice"> | Date | string
    total_amount?: FloatFilter<"Invoice"> | number
    pdf_url?: StringNullableFilter<"Invoice"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "invoice_number">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    awarded_bid_ids?: SortOrder
    invoice_number?: SortOrder
    generated_at?: SortOrder
    total_amount?: SortOrder
    pdf_url?: SortOrderInput | SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invoice"> | string
    user_id?: UuidWithAggregatesFilter<"Invoice"> | string
    awarded_bid_ids?: StringNullableListFilter<"Invoice">
    invoice_number?: StringWithAggregatesFilter<"Invoice"> | string
    generated_at?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    total_amount?: FloatWithAggregatesFilter<"Invoice"> | number
    pdf_url?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
  }

  export type EmailNotificationWhereInput = {
    AND?: EmailNotificationWhereInput | EmailNotificationWhereInput[]
    OR?: EmailNotificationWhereInput[]
    NOT?: EmailNotificationWhereInput | EmailNotificationWhereInput[]
    id?: IntFilter<"EmailNotification"> | number
    user_id?: UuidNullableFilter<"EmailNotification"> | string | null
    subject?: StringFilter<"EmailNotification"> | string
    message?: StringFilter<"EmailNotification"> | string
    notification_type?: StringNullableFilter<"EmailNotification"> | string | null
    is_sent?: BoolFilter<"EmailNotification"> | boolean
    sent_at?: DateTimeNullableFilter<"EmailNotification"> | Date | string | null
    created_at?: DateTimeFilter<"EmailNotification"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type EmailNotificationOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    subject?: SortOrder
    message?: SortOrder
    notification_type?: SortOrderInput | SortOrder
    is_sent?: SortOrder
    sent_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EmailNotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmailNotificationWhereInput | EmailNotificationWhereInput[]
    OR?: EmailNotificationWhereInput[]
    NOT?: EmailNotificationWhereInput | EmailNotificationWhereInput[]
    user_id?: UuidNullableFilter<"EmailNotification"> | string | null
    subject?: StringFilter<"EmailNotification"> | string
    message?: StringFilter<"EmailNotification"> | string
    notification_type?: StringNullableFilter<"EmailNotification"> | string | null
    is_sent?: BoolFilter<"EmailNotification"> | boolean
    sent_at?: DateTimeNullableFilter<"EmailNotification"> | Date | string | null
    created_at?: DateTimeFilter<"EmailNotification"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type EmailNotificationOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    subject?: SortOrder
    message?: SortOrder
    notification_type?: SortOrderInput | SortOrder
    is_sent?: SortOrder
    sent_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: EmailNotificationCountOrderByAggregateInput
    _avg?: EmailNotificationAvgOrderByAggregateInput
    _max?: EmailNotificationMaxOrderByAggregateInput
    _min?: EmailNotificationMinOrderByAggregateInput
    _sum?: EmailNotificationSumOrderByAggregateInput
  }

  export type EmailNotificationScalarWhereWithAggregatesInput = {
    AND?: EmailNotificationScalarWhereWithAggregatesInput | EmailNotificationScalarWhereWithAggregatesInput[]
    OR?: EmailNotificationScalarWhereWithAggregatesInput[]
    NOT?: EmailNotificationScalarWhereWithAggregatesInput | EmailNotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EmailNotification"> | number
    user_id?: UuidNullableWithAggregatesFilter<"EmailNotification"> | string | null
    subject?: StringWithAggregatesFilter<"EmailNotification"> | string
    message?: StringWithAggregatesFilter<"EmailNotification"> | string
    notification_type?: StringNullableWithAggregatesFilter<"EmailNotification"> | string | null
    is_sent?: BoolWithAggregatesFilter<"EmailNotification"> | boolean
    sent_at?: DateTimeNullableWithAggregatesFilter<"EmailNotification"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"EmailNotification"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    bids_placed?: number
    active_bids?: number
    won_bids?: number
    reset_token?: string | null
    reset_token_expiry?: Date | string | null
    verification_code?: string | null
    code_expires_at?: Date | string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    verizon_files?: VerizonFileCreateNestedManyWithoutUserInput
    uploaded_files?: UploadedFileCreateNestedManyWithoutUserInput
    bids?: BidCreateNestedManyWithoutUserInput
    awarded_bids?: AwardedBidCreateNestedManyWithoutUserInput
    invoices?: InvoiceCreateNestedManyWithoutUserInput
    email_notifications?: EmailNotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    bids_placed?: number
    active_bids?: number
    won_bids?: number
    reset_token?: string | null
    reset_token_expiry?: Date | string | null
    verification_code?: string | null
    code_expires_at?: Date | string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    verizon_files?: VerizonFileUncheckedCreateNestedManyWithoutUserInput
    uploaded_files?: UploadedFileUncheckedCreateNestedManyWithoutUserInput
    bids?: BidUncheckedCreateNestedManyWithoutUserInput
    awarded_bids?: AwardedBidUncheckedCreateNestedManyWithoutUserInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutUserInput
    email_notifications?: EmailNotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    bids_placed?: IntFieldUpdateOperationsInput | number
    active_bids?: IntFieldUpdateOperationsInput | number
    won_bids?: IntFieldUpdateOperationsInput | number
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verizon_files?: VerizonFileUpdateManyWithoutUserNestedInput
    uploaded_files?: UploadedFileUpdateManyWithoutUserNestedInput
    bids?: BidUpdateManyWithoutUserNestedInput
    awarded_bids?: AwardedBidUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUpdateManyWithoutUserNestedInput
    email_notifications?: EmailNotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    bids_placed?: IntFieldUpdateOperationsInput | number
    active_bids?: IntFieldUpdateOperationsInput | number
    won_bids?: IntFieldUpdateOperationsInput | number
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verizon_files?: VerizonFileUncheckedUpdateManyWithoutUserNestedInput
    uploaded_files?: UploadedFileUncheckedUpdateManyWithoutUserNestedInput
    bids?: BidUncheckedUpdateManyWithoutUserNestedInput
    awarded_bids?: AwardedBidUncheckedUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutUserNestedInput
    email_notifications?: EmailNotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    bids_placed?: number
    active_bids?: number
    won_bids?: number
    reset_token?: string | null
    reset_token_expiry?: Date | string | null
    verification_code?: string | null
    code_expires_at?: Date | string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    bids_placed?: IntFieldUpdateOperationsInput | number
    active_bids?: IntFieldUpdateOperationsInput | number
    won_bids?: IntFieldUpdateOperationsInput | number
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    bids_placed?: IntFieldUpdateOperationsInput | number
    active_bids?: IntFieldUpdateOperationsInput | number
    won_bids?: IntFieldUpdateOperationsInput | number
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerizonFileCreateInput = {
    id?: string
    file_name: string
    upload_time?: Date | string
    cleaned?: boolean
    user: UserCreateNestedOneWithoutVerizon_filesInput
    lots?: LotCreateNestedManyWithoutVerizon_fileInput
  }

  export type VerizonFileUncheckedCreateInput = {
    id?: string
    file_name: string
    uploaded_by: string
    upload_time?: Date | string
    cleaned?: boolean
    lots?: LotUncheckedCreateNestedManyWithoutVerizon_fileInput
  }

  export type VerizonFileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    upload_time?: DateTimeFieldUpdateOperationsInput | Date | string
    cleaned?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutVerizon_filesNestedInput
    lots?: LotUpdateManyWithoutVerizon_fileNestedInput
  }

  export type VerizonFileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    uploaded_by?: StringFieldUpdateOperationsInput | string
    upload_time?: DateTimeFieldUpdateOperationsInput | Date | string
    cleaned?: BoolFieldUpdateOperationsInput | boolean
    lots?: LotUncheckedUpdateManyWithoutVerizon_fileNestedInput
  }

  export type VerizonFileCreateManyInput = {
    id?: string
    file_name: string
    uploaded_by: string
    upload_time?: Date | string
    cleaned?: boolean
  }

  export type VerizonFileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    upload_time?: DateTimeFieldUpdateOperationsInput | Date | string
    cleaned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VerizonFileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    uploaded_by?: StringFieldUpdateOperationsInput | string
    upload_time?: DateTimeFieldUpdateOperationsInput | Date | string
    cleaned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UploadedFileCreateInput = {
    id?: string
    filename: string
    processed_name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutUploaded_filesInput
  }

  export type UploadedFileUncheckedCreateInput = {
    id?: string
    filename: string
    processed_name?: string | null
    user_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UploadedFileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    processed_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUploaded_filesNestedInput
  }

  export type UploadedFileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    processed_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadedFileCreateManyInput = {
    id?: string
    filename: string
    processed_name?: string | null
    user_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UploadedFileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    processed_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadedFileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    processed_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LotCreateInput = {
    id?: string
    lot_number: string
    item_description?: string | null
    grade?: string | null
    quantity?: number | null
    base_price?: number | null
    commission_rate?: number
    oem?: string | null
    sku?: string | null
    prop65_warning?: string | null
    description?: string | null
    disposition?: string | null
    unit_awarded_price?: number | null
    available_from?: Date | string | null
    available_to?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    verizon_file?: VerizonFileCreateNestedOneWithoutLotsInput
    bids?: BidCreateNestedManyWithoutLotInput
    awarded_bids?: AwardedBidCreateNestedManyWithoutLotInput
  }

  export type LotUncheckedCreateInput = {
    id?: string
    verizon_file_id?: string | null
    lot_number: string
    item_description?: string | null
    grade?: string | null
    quantity?: number | null
    base_price?: number | null
    commission_rate?: number
    oem?: string | null
    sku?: string | null
    prop65_warning?: string | null
    description?: string | null
    disposition?: string | null
    unit_awarded_price?: number | null
    available_from?: Date | string | null
    available_to?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    bids?: BidUncheckedCreateNestedManyWithoutLotInput
    awarded_bids?: AwardedBidUncheckedCreateNestedManyWithoutLotInput
  }

  export type LotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lot_number?: StringFieldUpdateOperationsInput | string
    item_description?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    base_price?: NullableFloatFieldUpdateOperationsInput | number | null
    commission_rate?: FloatFieldUpdateOperationsInput | number
    oem?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    prop65_warning?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    disposition?: NullableStringFieldUpdateOperationsInput | string | null
    unit_awarded_price?: NullableFloatFieldUpdateOperationsInput | number | null
    available_from?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    available_to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verizon_file?: VerizonFileUpdateOneWithoutLotsNestedInput
    bids?: BidUpdateManyWithoutLotNestedInput
    awarded_bids?: AwardedBidUpdateManyWithoutLotNestedInput
  }

  export type LotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    verizon_file_id?: NullableStringFieldUpdateOperationsInput | string | null
    lot_number?: StringFieldUpdateOperationsInput | string
    item_description?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    base_price?: NullableFloatFieldUpdateOperationsInput | number | null
    commission_rate?: FloatFieldUpdateOperationsInput | number
    oem?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    prop65_warning?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    disposition?: NullableStringFieldUpdateOperationsInput | string | null
    unit_awarded_price?: NullableFloatFieldUpdateOperationsInput | number | null
    available_from?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    available_to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUncheckedUpdateManyWithoutLotNestedInput
    awarded_bids?: AwardedBidUncheckedUpdateManyWithoutLotNestedInput
  }

  export type LotCreateManyInput = {
    id?: string
    verizon_file_id?: string | null
    lot_number: string
    item_description?: string | null
    grade?: string | null
    quantity?: number | null
    base_price?: number | null
    commission_rate?: number
    oem?: string | null
    sku?: string | null
    prop65_warning?: string | null
    description?: string | null
    disposition?: string | null
    unit_awarded_price?: number | null
    available_from?: Date | string | null
    available_to?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lot_number?: StringFieldUpdateOperationsInput | string
    item_description?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    base_price?: NullableFloatFieldUpdateOperationsInput | number | null
    commission_rate?: FloatFieldUpdateOperationsInput | number
    oem?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    prop65_warning?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    disposition?: NullableStringFieldUpdateOperationsInput | string | null
    unit_awarded_price?: NullableFloatFieldUpdateOperationsInput | number | null
    available_from?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    available_to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    verizon_file_id?: NullableStringFieldUpdateOperationsInput | string | null
    lot_number?: StringFieldUpdateOperationsInput | string
    item_description?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    base_price?: NullableFloatFieldUpdateOperationsInput | number | null
    commission_rate?: FloatFieldUpdateOperationsInput | number
    oem?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    prop65_warning?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    disposition?: NullableStringFieldUpdateOperationsInput | string | null
    unit_awarded_price?: NullableFloatFieldUpdateOperationsInput | number | null
    available_from?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    available_to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidCreateInput = {
    id?: string
    bid_amount: number
    submitted_at?: Date | string
    status?: string
    bid_time?: Date | string | null
    user: UserCreateNestedOneWithoutBidsInput
    lot: LotCreateNestedOneWithoutBidsInput
  }

  export type BidUncheckedCreateInput = {
    id?: string
    user_id: string
    lot_id: string
    bid_amount: number
    submitted_at?: Date | string
    status?: string
    bid_time?: Date | string | null
  }

  export type BidUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bid_amount?: FloatFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    bid_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutBidsNestedInput
    lot?: LotUpdateOneRequiredWithoutBidsNestedInput
  }

  export type BidUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    lot_id?: StringFieldUpdateOperationsInput | string
    bid_amount?: FloatFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    bid_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BidCreateManyInput = {
    id?: string
    user_id: string
    lot_id: string
    bid_amount: number
    submitted_at?: Date | string
    status?: string
    bid_time?: Date | string | null
  }

  export type BidUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bid_amount?: FloatFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    bid_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BidUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    lot_id?: StringFieldUpdateOperationsInput | string
    bid_amount?: FloatFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    bid_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AwardedBidCreateInput = {
    id?: string
    final_price: number
    commission: number
    lot: LotCreateNestedOneWithoutAwarded_bidsInput
    user: UserCreateNestedOneWithoutAwarded_bidsInput
  }

  export type AwardedBidUncheckedCreateInput = {
    id?: string
    lot_id: string
    awarded_to: string
    final_price: number
    commission: number
  }

  export type AwardedBidUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    final_price?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    lot?: LotUpdateOneRequiredWithoutAwarded_bidsNestedInput
    user?: UserUpdateOneRequiredWithoutAwarded_bidsNestedInput
  }

  export type AwardedBidUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lot_id?: StringFieldUpdateOperationsInput | string
    awarded_to?: StringFieldUpdateOperationsInput | string
    final_price?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
  }

  export type AwardedBidCreateManyInput = {
    id?: string
    lot_id: string
    awarded_to: string
    final_price: number
    commission: number
  }

  export type AwardedBidUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    final_price?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
  }

  export type AwardedBidUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lot_id?: StringFieldUpdateOperationsInput | string
    awarded_to?: StringFieldUpdateOperationsInput | string
    final_price?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
  }

  export type InvoiceCreateInput = {
    id?: string
    awarded_bid_ids?: InvoiceCreateawarded_bid_idsInput | string[]
    invoice_number: string
    generated_at?: Date | string
    total_amount: number
    pdf_url?: string | null
    user: UserCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    user_id: string
    awarded_bid_ids?: InvoiceCreateawarded_bid_idsInput | string[]
    invoice_number: string
    generated_at?: Date | string
    total_amount: number
    pdf_url?: string | null
  }

  export type InvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    awarded_bid_ids?: InvoiceUpdateawarded_bid_idsInput | string[]
    invoice_number?: StringFieldUpdateOperationsInput | string
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: FloatFieldUpdateOperationsInput | number
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    awarded_bid_ids?: InvoiceUpdateawarded_bid_idsInput | string[]
    invoice_number?: StringFieldUpdateOperationsInput | string
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: FloatFieldUpdateOperationsInput | number
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoiceCreateManyInput = {
    id?: string
    user_id: string
    awarded_bid_ids?: InvoiceCreateawarded_bid_idsInput | string[]
    invoice_number: string
    generated_at?: Date | string
    total_amount: number
    pdf_url?: string | null
  }

  export type InvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    awarded_bid_ids?: InvoiceUpdateawarded_bid_idsInput | string[]
    invoice_number?: StringFieldUpdateOperationsInput | string
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: FloatFieldUpdateOperationsInput | number
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    awarded_bid_ids?: InvoiceUpdateawarded_bid_idsInput | string[]
    invoice_number?: StringFieldUpdateOperationsInput | string
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: FloatFieldUpdateOperationsInput | number
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailNotificationCreateInput = {
    subject: string
    message: string
    notification_type?: string | null
    is_sent?: boolean
    sent_at?: Date | string | null
    created_at?: Date | string
    user?: UserCreateNestedOneWithoutEmail_notificationsInput
  }

  export type EmailNotificationUncheckedCreateInput = {
    id?: number
    user_id?: string | null
    subject: string
    message: string
    notification_type?: string | null
    is_sent?: boolean
    sent_at?: Date | string | null
    created_at?: Date | string
  }

  export type EmailNotificationUpdateInput = {
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_sent?: BoolFieldUpdateOperationsInput | boolean
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutEmail_notificationsNestedInput
  }

  export type EmailNotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_sent?: BoolFieldUpdateOperationsInput | boolean
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailNotificationCreateManyInput = {
    id?: number
    user_id?: string | null
    subject: string
    message: string
    notification_type?: string | null
    is_sent?: boolean
    sent_at?: Date | string | null
    created_at?: Date | string
  }

  export type EmailNotificationUpdateManyMutationInput = {
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_sent?: BoolFieldUpdateOperationsInput | boolean
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailNotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_sent?: BoolFieldUpdateOperationsInput | boolean
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VerizonFileListRelationFilter = {
    every?: VerizonFileWhereInput
    some?: VerizonFileWhereInput
    none?: VerizonFileWhereInput
  }

  export type UploadedFileListRelationFilter = {
    every?: UploadedFileWhereInput
    some?: UploadedFileWhereInput
    none?: UploadedFileWhereInput
  }

  export type BidListRelationFilter = {
    every?: BidWhereInput
    some?: BidWhereInput
    none?: BidWhereInput
  }

  export type AwardedBidListRelationFilter = {
    every?: AwardedBidWhereInput
    some?: AwardedBidWhereInput
    none?: AwardedBidWhereInput
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type EmailNotificationListRelationFilter = {
    every?: EmailNotificationWhereInput
    some?: EmailNotificationWhereInput
    none?: EmailNotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VerizonFileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UploadedFileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BidOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AwardedBidOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmailNotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    bids_placed?: SortOrder
    active_bids?: SortOrder
    won_bids?: SortOrder
    reset_token?: SortOrder
    reset_token_expiry?: SortOrder
    verification_code?: SortOrder
    code_expires_at?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    bids_placed?: SortOrder
    active_bids?: SortOrder
    won_bids?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    bids_placed?: SortOrder
    active_bids?: SortOrder
    won_bids?: SortOrder
    reset_token?: SortOrder
    reset_token_expiry?: SortOrder
    verification_code?: SortOrder
    code_expires_at?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    bids_placed?: SortOrder
    active_bids?: SortOrder
    won_bids?: SortOrder
    reset_token?: SortOrder
    reset_token_expiry?: SortOrder
    verification_code?: SortOrder
    code_expires_at?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    bids_placed?: SortOrder
    active_bids?: SortOrder
    won_bids?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LotListRelationFilter = {
    every?: LotWhereInput
    some?: LotWhereInput
    none?: LotWhereInput
  }

  export type LotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VerizonFileCountOrderByAggregateInput = {
    id?: SortOrder
    file_name?: SortOrder
    uploaded_by?: SortOrder
    upload_time?: SortOrder
    cleaned?: SortOrder
  }

  export type VerizonFileMaxOrderByAggregateInput = {
    id?: SortOrder
    file_name?: SortOrder
    uploaded_by?: SortOrder
    upload_time?: SortOrder
    cleaned?: SortOrder
  }

  export type VerizonFileMinOrderByAggregateInput = {
    id?: SortOrder
    file_name?: SortOrder
    uploaded_by?: SortOrder
    upload_time?: SortOrder
    cleaned?: SortOrder
  }

  export type UploadedFileCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    processed_name?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UploadedFileMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    processed_name?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UploadedFileMinOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    processed_name?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type VerizonFileNullableScalarRelationFilter = {
    is?: VerizonFileWhereInput | null
    isNot?: VerizonFileWhereInput | null
  }

  export type LotCountOrderByAggregateInput = {
    id?: SortOrder
    verizon_file_id?: SortOrder
    lot_number?: SortOrder
    item_description?: SortOrder
    grade?: SortOrder
    quantity?: SortOrder
    base_price?: SortOrder
    commission_rate?: SortOrder
    oem?: SortOrder
    sku?: SortOrder
    prop65_warning?: SortOrder
    description?: SortOrder
    disposition?: SortOrder
    unit_awarded_price?: SortOrder
    available_from?: SortOrder
    available_to?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LotAvgOrderByAggregateInput = {
    quantity?: SortOrder
    base_price?: SortOrder
    commission_rate?: SortOrder
    unit_awarded_price?: SortOrder
  }

  export type LotMaxOrderByAggregateInput = {
    id?: SortOrder
    verizon_file_id?: SortOrder
    lot_number?: SortOrder
    item_description?: SortOrder
    grade?: SortOrder
    quantity?: SortOrder
    base_price?: SortOrder
    commission_rate?: SortOrder
    oem?: SortOrder
    sku?: SortOrder
    prop65_warning?: SortOrder
    description?: SortOrder
    disposition?: SortOrder
    unit_awarded_price?: SortOrder
    available_from?: SortOrder
    available_to?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LotMinOrderByAggregateInput = {
    id?: SortOrder
    verizon_file_id?: SortOrder
    lot_number?: SortOrder
    item_description?: SortOrder
    grade?: SortOrder
    quantity?: SortOrder
    base_price?: SortOrder
    commission_rate?: SortOrder
    oem?: SortOrder
    sku?: SortOrder
    prop65_warning?: SortOrder
    description?: SortOrder
    disposition?: SortOrder
    unit_awarded_price?: SortOrder
    available_from?: SortOrder
    available_to?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LotSumOrderByAggregateInput = {
    quantity?: SortOrder
    base_price?: SortOrder
    commission_rate?: SortOrder
    unit_awarded_price?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type LotScalarRelationFilter = {
    is?: LotWhereInput
    isNot?: LotWhereInput
  }

  export type BidCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    lot_id?: SortOrder
    bid_amount?: SortOrder
    submitted_at?: SortOrder
    status?: SortOrder
    bid_time?: SortOrder
  }

  export type BidAvgOrderByAggregateInput = {
    bid_amount?: SortOrder
  }

  export type BidMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    lot_id?: SortOrder
    bid_amount?: SortOrder
    submitted_at?: SortOrder
    status?: SortOrder
    bid_time?: SortOrder
  }

  export type BidMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    lot_id?: SortOrder
    bid_amount?: SortOrder
    submitted_at?: SortOrder
    status?: SortOrder
    bid_time?: SortOrder
  }

  export type BidSumOrderByAggregateInput = {
    bid_amount?: SortOrder
  }

  export type AwardedBidCountOrderByAggregateInput = {
    id?: SortOrder
    lot_id?: SortOrder
    awarded_to?: SortOrder
    final_price?: SortOrder
    commission?: SortOrder
  }

  export type AwardedBidAvgOrderByAggregateInput = {
    final_price?: SortOrder
    commission?: SortOrder
  }

  export type AwardedBidMaxOrderByAggregateInput = {
    id?: SortOrder
    lot_id?: SortOrder
    awarded_to?: SortOrder
    final_price?: SortOrder
    commission?: SortOrder
  }

  export type AwardedBidMinOrderByAggregateInput = {
    id?: SortOrder
    lot_id?: SortOrder
    awarded_to?: SortOrder
    final_price?: SortOrder
    commission?: SortOrder
  }

  export type AwardedBidSumOrderByAggregateInput = {
    final_price?: SortOrder
    commission?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    awarded_bid_ids?: SortOrder
    invoice_number?: SortOrder
    generated_at?: SortOrder
    total_amount?: SortOrder
    pdf_url?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    total_amount?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    invoice_number?: SortOrder
    generated_at?: SortOrder
    total_amount?: SortOrder
    pdf_url?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    invoice_number?: SortOrder
    generated_at?: SortOrder
    total_amount?: SortOrder
    pdf_url?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    total_amount?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type EmailNotificationCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    notification_type?: SortOrder
    is_sent?: SortOrder
    sent_at?: SortOrder
    created_at?: SortOrder
  }

  export type EmailNotificationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmailNotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    notification_type?: SortOrder
    is_sent?: SortOrder
    sent_at?: SortOrder
    created_at?: SortOrder
  }

  export type EmailNotificationMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    notification_type?: SortOrder
    is_sent?: SortOrder
    sent_at?: SortOrder
    created_at?: SortOrder
  }

  export type EmailNotificationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VerizonFileCreateNestedManyWithoutUserInput = {
    create?: XOR<VerizonFileCreateWithoutUserInput, VerizonFileUncheckedCreateWithoutUserInput> | VerizonFileCreateWithoutUserInput[] | VerizonFileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerizonFileCreateOrConnectWithoutUserInput | VerizonFileCreateOrConnectWithoutUserInput[]
    createMany?: VerizonFileCreateManyUserInputEnvelope
    connect?: VerizonFileWhereUniqueInput | VerizonFileWhereUniqueInput[]
  }

  export type UploadedFileCreateNestedManyWithoutUserInput = {
    create?: XOR<UploadedFileCreateWithoutUserInput, UploadedFileUncheckedCreateWithoutUserInput> | UploadedFileCreateWithoutUserInput[] | UploadedFileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UploadedFileCreateOrConnectWithoutUserInput | UploadedFileCreateOrConnectWithoutUserInput[]
    createMany?: UploadedFileCreateManyUserInputEnvelope
    connect?: UploadedFileWhereUniqueInput | UploadedFileWhereUniqueInput[]
  }

  export type BidCreateNestedManyWithoutUserInput = {
    create?: XOR<BidCreateWithoutUserInput, BidUncheckedCreateWithoutUserInput> | BidCreateWithoutUserInput[] | BidUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BidCreateOrConnectWithoutUserInput | BidCreateOrConnectWithoutUserInput[]
    createMany?: BidCreateManyUserInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type AwardedBidCreateNestedManyWithoutUserInput = {
    create?: XOR<AwardedBidCreateWithoutUserInput, AwardedBidUncheckedCreateWithoutUserInput> | AwardedBidCreateWithoutUserInput[] | AwardedBidUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AwardedBidCreateOrConnectWithoutUserInput | AwardedBidCreateOrConnectWithoutUserInput[]
    createMany?: AwardedBidCreateManyUserInputEnvelope
    connect?: AwardedBidWhereUniqueInput | AwardedBidWhereUniqueInput[]
  }

  export type InvoiceCreateNestedManyWithoutUserInput = {
    create?: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput> | InvoiceCreateWithoutUserInput[] | InvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutUserInput | InvoiceCreateOrConnectWithoutUserInput[]
    createMany?: InvoiceCreateManyUserInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type EmailNotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailNotificationCreateWithoutUserInput, EmailNotificationUncheckedCreateWithoutUserInput> | EmailNotificationCreateWithoutUserInput[] | EmailNotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailNotificationCreateOrConnectWithoutUserInput | EmailNotificationCreateOrConnectWithoutUserInput[]
    createMany?: EmailNotificationCreateManyUserInputEnvelope
    connect?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
  }

  export type VerizonFileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VerizonFileCreateWithoutUserInput, VerizonFileUncheckedCreateWithoutUserInput> | VerizonFileCreateWithoutUserInput[] | VerizonFileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerizonFileCreateOrConnectWithoutUserInput | VerizonFileCreateOrConnectWithoutUserInput[]
    createMany?: VerizonFileCreateManyUserInputEnvelope
    connect?: VerizonFileWhereUniqueInput | VerizonFileWhereUniqueInput[]
  }

  export type UploadedFileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UploadedFileCreateWithoutUserInput, UploadedFileUncheckedCreateWithoutUserInput> | UploadedFileCreateWithoutUserInput[] | UploadedFileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UploadedFileCreateOrConnectWithoutUserInput | UploadedFileCreateOrConnectWithoutUserInput[]
    createMany?: UploadedFileCreateManyUserInputEnvelope
    connect?: UploadedFileWhereUniqueInput | UploadedFileWhereUniqueInput[]
  }

  export type BidUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BidCreateWithoutUserInput, BidUncheckedCreateWithoutUserInput> | BidCreateWithoutUserInput[] | BidUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BidCreateOrConnectWithoutUserInput | BidCreateOrConnectWithoutUserInput[]
    createMany?: BidCreateManyUserInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type AwardedBidUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AwardedBidCreateWithoutUserInput, AwardedBidUncheckedCreateWithoutUserInput> | AwardedBidCreateWithoutUserInput[] | AwardedBidUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AwardedBidCreateOrConnectWithoutUserInput | AwardedBidCreateOrConnectWithoutUserInput[]
    createMany?: AwardedBidCreateManyUserInputEnvelope
    connect?: AwardedBidWhereUniqueInput | AwardedBidWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput> | InvoiceCreateWithoutUserInput[] | InvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutUserInput | InvoiceCreateOrConnectWithoutUserInput[]
    createMany?: InvoiceCreateManyUserInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type EmailNotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailNotificationCreateWithoutUserInput, EmailNotificationUncheckedCreateWithoutUserInput> | EmailNotificationCreateWithoutUserInput[] | EmailNotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailNotificationCreateOrConnectWithoutUserInput | EmailNotificationCreateOrConnectWithoutUserInput[]
    createMany?: EmailNotificationCreateManyUserInputEnvelope
    connect?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VerizonFileUpdateManyWithoutUserNestedInput = {
    create?: XOR<VerizonFileCreateWithoutUserInput, VerizonFileUncheckedCreateWithoutUserInput> | VerizonFileCreateWithoutUserInput[] | VerizonFileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerizonFileCreateOrConnectWithoutUserInput | VerizonFileCreateOrConnectWithoutUserInput[]
    upsert?: VerizonFileUpsertWithWhereUniqueWithoutUserInput | VerizonFileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VerizonFileCreateManyUserInputEnvelope
    set?: VerizonFileWhereUniqueInput | VerizonFileWhereUniqueInput[]
    disconnect?: VerizonFileWhereUniqueInput | VerizonFileWhereUniqueInput[]
    delete?: VerizonFileWhereUniqueInput | VerizonFileWhereUniqueInput[]
    connect?: VerizonFileWhereUniqueInput | VerizonFileWhereUniqueInput[]
    update?: VerizonFileUpdateWithWhereUniqueWithoutUserInput | VerizonFileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VerizonFileUpdateManyWithWhereWithoutUserInput | VerizonFileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VerizonFileScalarWhereInput | VerizonFileScalarWhereInput[]
  }

  export type UploadedFileUpdateManyWithoutUserNestedInput = {
    create?: XOR<UploadedFileCreateWithoutUserInput, UploadedFileUncheckedCreateWithoutUserInput> | UploadedFileCreateWithoutUserInput[] | UploadedFileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UploadedFileCreateOrConnectWithoutUserInput | UploadedFileCreateOrConnectWithoutUserInput[]
    upsert?: UploadedFileUpsertWithWhereUniqueWithoutUserInput | UploadedFileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UploadedFileCreateManyUserInputEnvelope
    set?: UploadedFileWhereUniqueInput | UploadedFileWhereUniqueInput[]
    disconnect?: UploadedFileWhereUniqueInput | UploadedFileWhereUniqueInput[]
    delete?: UploadedFileWhereUniqueInput | UploadedFileWhereUniqueInput[]
    connect?: UploadedFileWhereUniqueInput | UploadedFileWhereUniqueInput[]
    update?: UploadedFileUpdateWithWhereUniqueWithoutUserInput | UploadedFileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UploadedFileUpdateManyWithWhereWithoutUserInput | UploadedFileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UploadedFileScalarWhereInput | UploadedFileScalarWhereInput[]
  }

  export type BidUpdateManyWithoutUserNestedInput = {
    create?: XOR<BidCreateWithoutUserInput, BidUncheckedCreateWithoutUserInput> | BidCreateWithoutUserInput[] | BidUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BidCreateOrConnectWithoutUserInput | BidCreateOrConnectWithoutUserInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutUserInput | BidUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BidCreateManyUserInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutUserInput | BidUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BidUpdateManyWithWhereWithoutUserInput | BidUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type AwardedBidUpdateManyWithoutUserNestedInput = {
    create?: XOR<AwardedBidCreateWithoutUserInput, AwardedBidUncheckedCreateWithoutUserInput> | AwardedBidCreateWithoutUserInput[] | AwardedBidUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AwardedBidCreateOrConnectWithoutUserInput | AwardedBidCreateOrConnectWithoutUserInput[]
    upsert?: AwardedBidUpsertWithWhereUniqueWithoutUserInput | AwardedBidUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AwardedBidCreateManyUserInputEnvelope
    set?: AwardedBidWhereUniqueInput | AwardedBidWhereUniqueInput[]
    disconnect?: AwardedBidWhereUniqueInput | AwardedBidWhereUniqueInput[]
    delete?: AwardedBidWhereUniqueInput | AwardedBidWhereUniqueInput[]
    connect?: AwardedBidWhereUniqueInput | AwardedBidWhereUniqueInput[]
    update?: AwardedBidUpdateWithWhereUniqueWithoutUserInput | AwardedBidUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AwardedBidUpdateManyWithWhereWithoutUserInput | AwardedBidUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AwardedBidScalarWhereInput | AwardedBidScalarWhereInput[]
  }

  export type InvoiceUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput> | InvoiceCreateWithoutUserInput[] | InvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutUserInput | InvoiceCreateOrConnectWithoutUserInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutUserInput | InvoiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvoiceCreateManyUserInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutUserInput | InvoiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutUserInput | InvoiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type EmailNotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailNotificationCreateWithoutUserInput, EmailNotificationUncheckedCreateWithoutUserInput> | EmailNotificationCreateWithoutUserInput[] | EmailNotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailNotificationCreateOrConnectWithoutUserInput | EmailNotificationCreateOrConnectWithoutUserInput[]
    upsert?: EmailNotificationUpsertWithWhereUniqueWithoutUserInput | EmailNotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailNotificationCreateManyUserInputEnvelope
    set?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    disconnect?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    delete?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    connect?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    update?: EmailNotificationUpdateWithWhereUniqueWithoutUserInput | EmailNotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailNotificationUpdateManyWithWhereWithoutUserInput | EmailNotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailNotificationScalarWhereInput | EmailNotificationScalarWhereInput[]
  }

  export type VerizonFileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VerizonFileCreateWithoutUserInput, VerizonFileUncheckedCreateWithoutUserInput> | VerizonFileCreateWithoutUserInput[] | VerizonFileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerizonFileCreateOrConnectWithoutUserInput | VerizonFileCreateOrConnectWithoutUserInput[]
    upsert?: VerizonFileUpsertWithWhereUniqueWithoutUserInput | VerizonFileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VerizonFileCreateManyUserInputEnvelope
    set?: VerizonFileWhereUniqueInput | VerizonFileWhereUniqueInput[]
    disconnect?: VerizonFileWhereUniqueInput | VerizonFileWhereUniqueInput[]
    delete?: VerizonFileWhereUniqueInput | VerizonFileWhereUniqueInput[]
    connect?: VerizonFileWhereUniqueInput | VerizonFileWhereUniqueInput[]
    update?: VerizonFileUpdateWithWhereUniqueWithoutUserInput | VerizonFileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VerizonFileUpdateManyWithWhereWithoutUserInput | VerizonFileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VerizonFileScalarWhereInput | VerizonFileScalarWhereInput[]
  }

  export type UploadedFileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UploadedFileCreateWithoutUserInput, UploadedFileUncheckedCreateWithoutUserInput> | UploadedFileCreateWithoutUserInput[] | UploadedFileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UploadedFileCreateOrConnectWithoutUserInput | UploadedFileCreateOrConnectWithoutUserInput[]
    upsert?: UploadedFileUpsertWithWhereUniqueWithoutUserInput | UploadedFileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UploadedFileCreateManyUserInputEnvelope
    set?: UploadedFileWhereUniqueInput | UploadedFileWhereUniqueInput[]
    disconnect?: UploadedFileWhereUniqueInput | UploadedFileWhereUniqueInput[]
    delete?: UploadedFileWhereUniqueInput | UploadedFileWhereUniqueInput[]
    connect?: UploadedFileWhereUniqueInput | UploadedFileWhereUniqueInput[]
    update?: UploadedFileUpdateWithWhereUniqueWithoutUserInput | UploadedFileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UploadedFileUpdateManyWithWhereWithoutUserInput | UploadedFileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UploadedFileScalarWhereInput | UploadedFileScalarWhereInput[]
  }

  export type BidUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BidCreateWithoutUserInput, BidUncheckedCreateWithoutUserInput> | BidCreateWithoutUserInput[] | BidUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BidCreateOrConnectWithoutUserInput | BidCreateOrConnectWithoutUserInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutUserInput | BidUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BidCreateManyUserInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutUserInput | BidUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BidUpdateManyWithWhereWithoutUserInput | BidUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type AwardedBidUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AwardedBidCreateWithoutUserInput, AwardedBidUncheckedCreateWithoutUserInput> | AwardedBidCreateWithoutUserInput[] | AwardedBidUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AwardedBidCreateOrConnectWithoutUserInput | AwardedBidCreateOrConnectWithoutUserInput[]
    upsert?: AwardedBidUpsertWithWhereUniqueWithoutUserInput | AwardedBidUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AwardedBidCreateManyUserInputEnvelope
    set?: AwardedBidWhereUniqueInput | AwardedBidWhereUniqueInput[]
    disconnect?: AwardedBidWhereUniqueInput | AwardedBidWhereUniqueInput[]
    delete?: AwardedBidWhereUniqueInput | AwardedBidWhereUniqueInput[]
    connect?: AwardedBidWhereUniqueInput | AwardedBidWhereUniqueInput[]
    update?: AwardedBidUpdateWithWhereUniqueWithoutUserInput | AwardedBidUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AwardedBidUpdateManyWithWhereWithoutUserInput | AwardedBidUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AwardedBidScalarWhereInput | AwardedBidScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput> | InvoiceCreateWithoutUserInput[] | InvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutUserInput | InvoiceCreateOrConnectWithoutUserInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutUserInput | InvoiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvoiceCreateManyUserInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutUserInput | InvoiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutUserInput | InvoiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type EmailNotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailNotificationCreateWithoutUserInput, EmailNotificationUncheckedCreateWithoutUserInput> | EmailNotificationCreateWithoutUserInput[] | EmailNotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailNotificationCreateOrConnectWithoutUserInput | EmailNotificationCreateOrConnectWithoutUserInput[]
    upsert?: EmailNotificationUpsertWithWhereUniqueWithoutUserInput | EmailNotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailNotificationCreateManyUserInputEnvelope
    set?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    disconnect?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    delete?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    connect?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    update?: EmailNotificationUpdateWithWhereUniqueWithoutUserInput | EmailNotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailNotificationUpdateManyWithWhereWithoutUserInput | EmailNotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailNotificationScalarWhereInput | EmailNotificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVerizon_filesInput = {
    create?: XOR<UserCreateWithoutVerizon_filesInput, UserUncheckedCreateWithoutVerizon_filesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerizon_filesInput
    connect?: UserWhereUniqueInput
  }

  export type LotCreateNestedManyWithoutVerizon_fileInput = {
    create?: XOR<LotCreateWithoutVerizon_fileInput, LotUncheckedCreateWithoutVerizon_fileInput> | LotCreateWithoutVerizon_fileInput[] | LotUncheckedCreateWithoutVerizon_fileInput[]
    connectOrCreate?: LotCreateOrConnectWithoutVerizon_fileInput | LotCreateOrConnectWithoutVerizon_fileInput[]
    createMany?: LotCreateManyVerizon_fileInputEnvelope
    connect?: LotWhereUniqueInput | LotWhereUniqueInput[]
  }

  export type LotUncheckedCreateNestedManyWithoutVerizon_fileInput = {
    create?: XOR<LotCreateWithoutVerizon_fileInput, LotUncheckedCreateWithoutVerizon_fileInput> | LotCreateWithoutVerizon_fileInput[] | LotUncheckedCreateWithoutVerizon_fileInput[]
    connectOrCreate?: LotCreateOrConnectWithoutVerizon_fileInput | LotCreateOrConnectWithoutVerizon_fileInput[]
    createMany?: LotCreateManyVerizon_fileInputEnvelope
    connect?: LotWhereUniqueInput | LotWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutVerizon_filesNestedInput = {
    create?: XOR<UserCreateWithoutVerizon_filesInput, UserUncheckedCreateWithoutVerizon_filesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerizon_filesInput
    upsert?: UserUpsertWithoutVerizon_filesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVerizon_filesInput, UserUpdateWithoutVerizon_filesInput>, UserUncheckedUpdateWithoutVerizon_filesInput>
  }

  export type LotUpdateManyWithoutVerizon_fileNestedInput = {
    create?: XOR<LotCreateWithoutVerizon_fileInput, LotUncheckedCreateWithoutVerizon_fileInput> | LotCreateWithoutVerizon_fileInput[] | LotUncheckedCreateWithoutVerizon_fileInput[]
    connectOrCreate?: LotCreateOrConnectWithoutVerizon_fileInput | LotCreateOrConnectWithoutVerizon_fileInput[]
    upsert?: LotUpsertWithWhereUniqueWithoutVerizon_fileInput | LotUpsertWithWhereUniqueWithoutVerizon_fileInput[]
    createMany?: LotCreateManyVerizon_fileInputEnvelope
    set?: LotWhereUniqueInput | LotWhereUniqueInput[]
    disconnect?: LotWhereUniqueInput | LotWhereUniqueInput[]
    delete?: LotWhereUniqueInput | LotWhereUniqueInput[]
    connect?: LotWhereUniqueInput | LotWhereUniqueInput[]
    update?: LotUpdateWithWhereUniqueWithoutVerizon_fileInput | LotUpdateWithWhereUniqueWithoutVerizon_fileInput[]
    updateMany?: LotUpdateManyWithWhereWithoutVerizon_fileInput | LotUpdateManyWithWhereWithoutVerizon_fileInput[]
    deleteMany?: LotScalarWhereInput | LotScalarWhereInput[]
  }

  export type LotUncheckedUpdateManyWithoutVerizon_fileNestedInput = {
    create?: XOR<LotCreateWithoutVerizon_fileInput, LotUncheckedCreateWithoutVerizon_fileInput> | LotCreateWithoutVerizon_fileInput[] | LotUncheckedCreateWithoutVerizon_fileInput[]
    connectOrCreate?: LotCreateOrConnectWithoutVerizon_fileInput | LotCreateOrConnectWithoutVerizon_fileInput[]
    upsert?: LotUpsertWithWhereUniqueWithoutVerizon_fileInput | LotUpsertWithWhereUniqueWithoutVerizon_fileInput[]
    createMany?: LotCreateManyVerizon_fileInputEnvelope
    set?: LotWhereUniqueInput | LotWhereUniqueInput[]
    disconnect?: LotWhereUniqueInput | LotWhereUniqueInput[]
    delete?: LotWhereUniqueInput | LotWhereUniqueInput[]
    connect?: LotWhereUniqueInput | LotWhereUniqueInput[]
    update?: LotUpdateWithWhereUniqueWithoutVerizon_fileInput | LotUpdateWithWhereUniqueWithoutVerizon_fileInput[]
    updateMany?: LotUpdateManyWithWhereWithoutVerizon_fileInput | LotUpdateManyWithWhereWithoutVerizon_fileInput[]
    deleteMany?: LotScalarWhereInput | LotScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUploaded_filesInput = {
    create?: XOR<UserCreateWithoutUploaded_filesInput, UserUncheckedCreateWithoutUploaded_filesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUploaded_filesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUploaded_filesNestedInput = {
    create?: XOR<UserCreateWithoutUploaded_filesInput, UserUncheckedCreateWithoutUploaded_filesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUploaded_filesInput
    upsert?: UserUpsertWithoutUploaded_filesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUploaded_filesInput, UserUpdateWithoutUploaded_filesInput>, UserUncheckedUpdateWithoutUploaded_filesInput>
  }

  export type VerizonFileCreateNestedOneWithoutLotsInput = {
    create?: XOR<VerizonFileCreateWithoutLotsInput, VerizonFileUncheckedCreateWithoutLotsInput>
    connectOrCreate?: VerizonFileCreateOrConnectWithoutLotsInput
    connect?: VerizonFileWhereUniqueInput
  }

  export type BidCreateNestedManyWithoutLotInput = {
    create?: XOR<BidCreateWithoutLotInput, BidUncheckedCreateWithoutLotInput> | BidCreateWithoutLotInput[] | BidUncheckedCreateWithoutLotInput[]
    connectOrCreate?: BidCreateOrConnectWithoutLotInput | BidCreateOrConnectWithoutLotInput[]
    createMany?: BidCreateManyLotInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type AwardedBidCreateNestedManyWithoutLotInput = {
    create?: XOR<AwardedBidCreateWithoutLotInput, AwardedBidUncheckedCreateWithoutLotInput> | AwardedBidCreateWithoutLotInput[] | AwardedBidUncheckedCreateWithoutLotInput[]
    connectOrCreate?: AwardedBidCreateOrConnectWithoutLotInput | AwardedBidCreateOrConnectWithoutLotInput[]
    createMany?: AwardedBidCreateManyLotInputEnvelope
    connect?: AwardedBidWhereUniqueInput | AwardedBidWhereUniqueInput[]
  }

  export type BidUncheckedCreateNestedManyWithoutLotInput = {
    create?: XOR<BidCreateWithoutLotInput, BidUncheckedCreateWithoutLotInput> | BidCreateWithoutLotInput[] | BidUncheckedCreateWithoutLotInput[]
    connectOrCreate?: BidCreateOrConnectWithoutLotInput | BidCreateOrConnectWithoutLotInput[]
    createMany?: BidCreateManyLotInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type AwardedBidUncheckedCreateNestedManyWithoutLotInput = {
    create?: XOR<AwardedBidCreateWithoutLotInput, AwardedBidUncheckedCreateWithoutLotInput> | AwardedBidCreateWithoutLotInput[] | AwardedBidUncheckedCreateWithoutLotInput[]
    connectOrCreate?: AwardedBidCreateOrConnectWithoutLotInput | AwardedBidCreateOrConnectWithoutLotInput[]
    createMany?: AwardedBidCreateManyLotInputEnvelope
    connect?: AwardedBidWhereUniqueInput | AwardedBidWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VerizonFileUpdateOneWithoutLotsNestedInput = {
    create?: XOR<VerizonFileCreateWithoutLotsInput, VerizonFileUncheckedCreateWithoutLotsInput>
    connectOrCreate?: VerizonFileCreateOrConnectWithoutLotsInput
    upsert?: VerizonFileUpsertWithoutLotsInput
    disconnect?: VerizonFileWhereInput | boolean
    delete?: VerizonFileWhereInput | boolean
    connect?: VerizonFileWhereUniqueInput
    update?: XOR<XOR<VerizonFileUpdateToOneWithWhereWithoutLotsInput, VerizonFileUpdateWithoutLotsInput>, VerizonFileUncheckedUpdateWithoutLotsInput>
  }

  export type BidUpdateManyWithoutLotNestedInput = {
    create?: XOR<BidCreateWithoutLotInput, BidUncheckedCreateWithoutLotInput> | BidCreateWithoutLotInput[] | BidUncheckedCreateWithoutLotInput[]
    connectOrCreate?: BidCreateOrConnectWithoutLotInput | BidCreateOrConnectWithoutLotInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutLotInput | BidUpsertWithWhereUniqueWithoutLotInput[]
    createMany?: BidCreateManyLotInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutLotInput | BidUpdateWithWhereUniqueWithoutLotInput[]
    updateMany?: BidUpdateManyWithWhereWithoutLotInput | BidUpdateManyWithWhereWithoutLotInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type AwardedBidUpdateManyWithoutLotNestedInput = {
    create?: XOR<AwardedBidCreateWithoutLotInput, AwardedBidUncheckedCreateWithoutLotInput> | AwardedBidCreateWithoutLotInput[] | AwardedBidUncheckedCreateWithoutLotInput[]
    connectOrCreate?: AwardedBidCreateOrConnectWithoutLotInput | AwardedBidCreateOrConnectWithoutLotInput[]
    upsert?: AwardedBidUpsertWithWhereUniqueWithoutLotInput | AwardedBidUpsertWithWhereUniqueWithoutLotInput[]
    createMany?: AwardedBidCreateManyLotInputEnvelope
    set?: AwardedBidWhereUniqueInput | AwardedBidWhereUniqueInput[]
    disconnect?: AwardedBidWhereUniqueInput | AwardedBidWhereUniqueInput[]
    delete?: AwardedBidWhereUniqueInput | AwardedBidWhereUniqueInput[]
    connect?: AwardedBidWhereUniqueInput | AwardedBidWhereUniqueInput[]
    update?: AwardedBidUpdateWithWhereUniqueWithoutLotInput | AwardedBidUpdateWithWhereUniqueWithoutLotInput[]
    updateMany?: AwardedBidUpdateManyWithWhereWithoutLotInput | AwardedBidUpdateManyWithWhereWithoutLotInput[]
    deleteMany?: AwardedBidScalarWhereInput | AwardedBidScalarWhereInput[]
  }

  export type BidUncheckedUpdateManyWithoutLotNestedInput = {
    create?: XOR<BidCreateWithoutLotInput, BidUncheckedCreateWithoutLotInput> | BidCreateWithoutLotInput[] | BidUncheckedCreateWithoutLotInput[]
    connectOrCreate?: BidCreateOrConnectWithoutLotInput | BidCreateOrConnectWithoutLotInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutLotInput | BidUpsertWithWhereUniqueWithoutLotInput[]
    createMany?: BidCreateManyLotInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutLotInput | BidUpdateWithWhereUniqueWithoutLotInput[]
    updateMany?: BidUpdateManyWithWhereWithoutLotInput | BidUpdateManyWithWhereWithoutLotInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type AwardedBidUncheckedUpdateManyWithoutLotNestedInput = {
    create?: XOR<AwardedBidCreateWithoutLotInput, AwardedBidUncheckedCreateWithoutLotInput> | AwardedBidCreateWithoutLotInput[] | AwardedBidUncheckedCreateWithoutLotInput[]
    connectOrCreate?: AwardedBidCreateOrConnectWithoutLotInput | AwardedBidCreateOrConnectWithoutLotInput[]
    upsert?: AwardedBidUpsertWithWhereUniqueWithoutLotInput | AwardedBidUpsertWithWhereUniqueWithoutLotInput[]
    createMany?: AwardedBidCreateManyLotInputEnvelope
    set?: AwardedBidWhereUniqueInput | AwardedBidWhereUniqueInput[]
    disconnect?: AwardedBidWhereUniqueInput | AwardedBidWhereUniqueInput[]
    delete?: AwardedBidWhereUniqueInput | AwardedBidWhereUniqueInput[]
    connect?: AwardedBidWhereUniqueInput | AwardedBidWhereUniqueInput[]
    update?: AwardedBidUpdateWithWhereUniqueWithoutLotInput | AwardedBidUpdateWithWhereUniqueWithoutLotInput[]
    updateMany?: AwardedBidUpdateManyWithWhereWithoutLotInput | AwardedBidUpdateManyWithWhereWithoutLotInput[]
    deleteMany?: AwardedBidScalarWhereInput | AwardedBidScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBidsInput = {
    create?: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBidsInput
    connect?: UserWhereUniqueInput
  }

  export type LotCreateNestedOneWithoutBidsInput = {
    create?: XOR<LotCreateWithoutBidsInput, LotUncheckedCreateWithoutBidsInput>
    connectOrCreate?: LotCreateOrConnectWithoutBidsInput
    connect?: LotWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBidsNestedInput = {
    create?: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBidsInput
    upsert?: UserUpsertWithoutBidsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBidsInput, UserUpdateWithoutBidsInput>, UserUncheckedUpdateWithoutBidsInput>
  }

  export type LotUpdateOneRequiredWithoutBidsNestedInput = {
    create?: XOR<LotCreateWithoutBidsInput, LotUncheckedCreateWithoutBidsInput>
    connectOrCreate?: LotCreateOrConnectWithoutBidsInput
    upsert?: LotUpsertWithoutBidsInput
    connect?: LotWhereUniqueInput
    update?: XOR<XOR<LotUpdateToOneWithWhereWithoutBidsInput, LotUpdateWithoutBidsInput>, LotUncheckedUpdateWithoutBidsInput>
  }

  export type LotCreateNestedOneWithoutAwarded_bidsInput = {
    create?: XOR<LotCreateWithoutAwarded_bidsInput, LotUncheckedCreateWithoutAwarded_bidsInput>
    connectOrCreate?: LotCreateOrConnectWithoutAwarded_bidsInput
    connect?: LotWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAwarded_bidsInput = {
    create?: XOR<UserCreateWithoutAwarded_bidsInput, UserUncheckedCreateWithoutAwarded_bidsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAwarded_bidsInput
    connect?: UserWhereUniqueInput
  }

  export type LotUpdateOneRequiredWithoutAwarded_bidsNestedInput = {
    create?: XOR<LotCreateWithoutAwarded_bidsInput, LotUncheckedCreateWithoutAwarded_bidsInput>
    connectOrCreate?: LotCreateOrConnectWithoutAwarded_bidsInput
    upsert?: LotUpsertWithoutAwarded_bidsInput
    connect?: LotWhereUniqueInput
    update?: XOR<XOR<LotUpdateToOneWithWhereWithoutAwarded_bidsInput, LotUpdateWithoutAwarded_bidsInput>, LotUncheckedUpdateWithoutAwarded_bidsInput>
  }

  export type UserUpdateOneRequiredWithoutAwarded_bidsNestedInput = {
    create?: XOR<UserCreateWithoutAwarded_bidsInput, UserUncheckedCreateWithoutAwarded_bidsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAwarded_bidsInput
    upsert?: UserUpsertWithoutAwarded_bidsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAwarded_bidsInput, UserUpdateWithoutAwarded_bidsInput>, UserUncheckedUpdateWithoutAwarded_bidsInput>
  }

  export type InvoiceCreateawarded_bid_idsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvoicesInput
    connect?: UserWhereUniqueInput
  }

  export type InvoiceUpdateawarded_bid_idsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvoicesInput
    upsert?: UserUpsertWithoutInvoicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvoicesInput, UserUpdateWithoutInvoicesInput>, UserUncheckedUpdateWithoutInvoicesInput>
  }

  export type UserCreateNestedOneWithoutEmail_notificationsInput = {
    create?: XOR<UserCreateWithoutEmail_notificationsInput, UserUncheckedCreateWithoutEmail_notificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmail_notificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutEmail_notificationsNestedInput = {
    create?: XOR<UserCreateWithoutEmail_notificationsInput, UserUncheckedCreateWithoutEmail_notificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmail_notificationsInput
    upsert?: UserUpsertWithoutEmail_notificationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmail_notificationsInput, UserUpdateWithoutEmail_notificationsInput>, UserUncheckedUpdateWithoutEmail_notificationsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type VerizonFileCreateWithoutUserInput = {
    id?: string
    file_name: string
    upload_time?: Date | string
    cleaned?: boolean
    lots?: LotCreateNestedManyWithoutVerizon_fileInput
  }

  export type VerizonFileUncheckedCreateWithoutUserInput = {
    id?: string
    file_name: string
    upload_time?: Date | string
    cleaned?: boolean
    lots?: LotUncheckedCreateNestedManyWithoutVerizon_fileInput
  }

  export type VerizonFileCreateOrConnectWithoutUserInput = {
    where: VerizonFileWhereUniqueInput
    create: XOR<VerizonFileCreateWithoutUserInput, VerizonFileUncheckedCreateWithoutUserInput>
  }

  export type VerizonFileCreateManyUserInputEnvelope = {
    data: VerizonFileCreateManyUserInput | VerizonFileCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UploadedFileCreateWithoutUserInput = {
    id?: string
    filename: string
    processed_name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UploadedFileUncheckedCreateWithoutUserInput = {
    id?: string
    filename: string
    processed_name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UploadedFileCreateOrConnectWithoutUserInput = {
    where: UploadedFileWhereUniqueInput
    create: XOR<UploadedFileCreateWithoutUserInput, UploadedFileUncheckedCreateWithoutUserInput>
  }

  export type UploadedFileCreateManyUserInputEnvelope = {
    data: UploadedFileCreateManyUserInput | UploadedFileCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BidCreateWithoutUserInput = {
    id?: string
    bid_amount: number
    submitted_at?: Date | string
    status?: string
    bid_time?: Date | string | null
    lot: LotCreateNestedOneWithoutBidsInput
  }

  export type BidUncheckedCreateWithoutUserInput = {
    id?: string
    lot_id: string
    bid_amount: number
    submitted_at?: Date | string
    status?: string
    bid_time?: Date | string | null
  }

  export type BidCreateOrConnectWithoutUserInput = {
    where: BidWhereUniqueInput
    create: XOR<BidCreateWithoutUserInput, BidUncheckedCreateWithoutUserInput>
  }

  export type BidCreateManyUserInputEnvelope = {
    data: BidCreateManyUserInput | BidCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AwardedBidCreateWithoutUserInput = {
    id?: string
    final_price: number
    commission: number
    lot: LotCreateNestedOneWithoutAwarded_bidsInput
  }

  export type AwardedBidUncheckedCreateWithoutUserInput = {
    id?: string
    lot_id: string
    final_price: number
    commission: number
  }

  export type AwardedBidCreateOrConnectWithoutUserInput = {
    where: AwardedBidWhereUniqueInput
    create: XOR<AwardedBidCreateWithoutUserInput, AwardedBidUncheckedCreateWithoutUserInput>
  }

  export type AwardedBidCreateManyUserInputEnvelope = {
    data: AwardedBidCreateManyUserInput | AwardedBidCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceCreateWithoutUserInput = {
    id?: string
    awarded_bid_ids?: InvoiceCreateawarded_bid_idsInput | string[]
    invoice_number: string
    generated_at?: Date | string
    total_amount: number
    pdf_url?: string | null
  }

  export type InvoiceUncheckedCreateWithoutUserInput = {
    id?: string
    awarded_bid_ids?: InvoiceCreateawarded_bid_idsInput | string[]
    invoice_number: string
    generated_at?: Date | string
    total_amount: number
    pdf_url?: string | null
  }

  export type InvoiceCreateOrConnectWithoutUserInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput>
  }

  export type InvoiceCreateManyUserInputEnvelope = {
    data: InvoiceCreateManyUserInput | InvoiceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmailNotificationCreateWithoutUserInput = {
    subject: string
    message: string
    notification_type?: string | null
    is_sent?: boolean
    sent_at?: Date | string | null
    created_at?: Date | string
  }

  export type EmailNotificationUncheckedCreateWithoutUserInput = {
    id?: number
    subject: string
    message: string
    notification_type?: string | null
    is_sent?: boolean
    sent_at?: Date | string | null
    created_at?: Date | string
  }

  export type EmailNotificationCreateOrConnectWithoutUserInput = {
    where: EmailNotificationWhereUniqueInput
    create: XOR<EmailNotificationCreateWithoutUserInput, EmailNotificationUncheckedCreateWithoutUserInput>
  }

  export type EmailNotificationCreateManyUserInputEnvelope = {
    data: EmailNotificationCreateManyUserInput | EmailNotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VerizonFileUpsertWithWhereUniqueWithoutUserInput = {
    where: VerizonFileWhereUniqueInput
    update: XOR<VerizonFileUpdateWithoutUserInput, VerizonFileUncheckedUpdateWithoutUserInput>
    create: XOR<VerizonFileCreateWithoutUserInput, VerizonFileUncheckedCreateWithoutUserInput>
  }

  export type VerizonFileUpdateWithWhereUniqueWithoutUserInput = {
    where: VerizonFileWhereUniqueInput
    data: XOR<VerizonFileUpdateWithoutUserInput, VerizonFileUncheckedUpdateWithoutUserInput>
  }

  export type VerizonFileUpdateManyWithWhereWithoutUserInput = {
    where: VerizonFileScalarWhereInput
    data: XOR<VerizonFileUpdateManyMutationInput, VerizonFileUncheckedUpdateManyWithoutUserInput>
  }

  export type VerizonFileScalarWhereInput = {
    AND?: VerizonFileScalarWhereInput | VerizonFileScalarWhereInput[]
    OR?: VerizonFileScalarWhereInput[]
    NOT?: VerizonFileScalarWhereInput | VerizonFileScalarWhereInput[]
    id?: UuidFilter<"VerizonFile"> | string
    file_name?: StringFilter<"VerizonFile"> | string
    uploaded_by?: UuidFilter<"VerizonFile"> | string
    upload_time?: DateTimeFilter<"VerizonFile"> | Date | string
    cleaned?: BoolFilter<"VerizonFile"> | boolean
  }

  export type UploadedFileUpsertWithWhereUniqueWithoutUserInput = {
    where: UploadedFileWhereUniqueInput
    update: XOR<UploadedFileUpdateWithoutUserInput, UploadedFileUncheckedUpdateWithoutUserInput>
    create: XOR<UploadedFileCreateWithoutUserInput, UploadedFileUncheckedCreateWithoutUserInput>
  }

  export type UploadedFileUpdateWithWhereUniqueWithoutUserInput = {
    where: UploadedFileWhereUniqueInput
    data: XOR<UploadedFileUpdateWithoutUserInput, UploadedFileUncheckedUpdateWithoutUserInput>
  }

  export type UploadedFileUpdateManyWithWhereWithoutUserInput = {
    where: UploadedFileScalarWhereInput
    data: XOR<UploadedFileUpdateManyMutationInput, UploadedFileUncheckedUpdateManyWithoutUserInput>
  }

  export type UploadedFileScalarWhereInput = {
    AND?: UploadedFileScalarWhereInput | UploadedFileScalarWhereInput[]
    OR?: UploadedFileScalarWhereInput[]
    NOT?: UploadedFileScalarWhereInput | UploadedFileScalarWhereInput[]
    id?: StringFilter<"UploadedFile"> | string
    filename?: StringFilter<"UploadedFile"> | string
    processed_name?: StringNullableFilter<"UploadedFile"> | string | null
    user_id?: UuidFilter<"UploadedFile"> | string
    created_at?: DateTimeFilter<"UploadedFile"> | Date | string
    updated_at?: DateTimeFilter<"UploadedFile"> | Date | string
  }

  export type BidUpsertWithWhereUniqueWithoutUserInput = {
    where: BidWhereUniqueInput
    update: XOR<BidUpdateWithoutUserInput, BidUncheckedUpdateWithoutUserInput>
    create: XOR<BidCreateWithoutUserInput, BidUncheckedCreateWithoutUserInput>
  }

  export type BidUpdateWithWhereUniqueWithoutUserInput = {
    where: BidWhereUniqueInput
    data: XOR<BidUpdateWithoutUserInput, BidUncheckedUpdateWithoutUserInput>
  }

  export type BidUpdateManyWithWhereWithoutUserInput = {
    where: BidScalarWhereInput
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyWithoutUserInput>
  }

  export type BidScalarWhereInput = {
    AND?: BidScalarWhereInput | BidScalarWhereInput[]
    OR?: BidScalarWhereInput[]
    NOT?: BidScalarWhereInput | BidScalarWhereInput[]
    id?: UuidFilter<"Bid"> | string
    user_id?: UuidFilter<"Bid"> | string
    lot_id?: UuidFilter<"Bid"> | string
    bid_amount?: FloatFilter<"Bid"> | number
    submitted_at?: DateTimeFilter<"Bid"> | Date | string
    status?: StringFilter<"Bid"> | string
    bid_time?: DateTimeNullableFilter<"Bid"> | Date | string | null
  }

  export type AwardedBidUpsertWithWhereUniqueWithoutUserInput = {
    where: AwardedBidWhereUniqueInput
    update: XOR<AwardedBidUpdateWithoutUserInput, AwardedBidUncheckedUpdateWithoutUserInput>
    create: XOR<AwardedBidCreateWithoutUserInput, AwardedBidUncheckedCreateWithoutUserInput>
  }

  export type AwardedBidUpdateWithWhereUniqueWithoutUserInput = {
    where: AwardedBidWhereUniqueInput
    data: XOR<AwardedBidUpdateWithoutUserInput, AwardedBidUncheckedUpdateWithoutUserInput>
  }

  export type AwardedBidUpdateManyWithWhereWithoutUserInput = {
    where: AwardedBidScalarWhereInput
    data: XOR<AwardedBidUpdateManyMutationInput, AwardedBidUncheckedUpdateManyWithoutUserInput>
  }

  export type AwardedBidScalarWhereInput = {
    AND?: AwardedBidScalarWhereInput | AwardedBidScalarWhereInput[]
    OR?: AwardedBidScalarWhereInput[]
    NOT?: AwardedBidScalarWhereInput | AwardedBidScalarWhereInput[]
    id?: StringFilter<"AwardedBid"> | string
    lot_id?: UuidFilter<"AwardedBid"> | string
    awarded_to?: UuidFilter<"AwardedBid"> | string
    final_price?: FloatFilter<"AwardedBid"> | number
    commission?: FloatFilter<"AwardedBid"> | number
  }

  export type InvoiceUpsertWithWhereUniqueWithoutUserInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutUserInput, InvoiceUncheckedUpdateWithoutUserInput>
    create: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutUserInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutUserInput, InvoiceUncheckedUpdateWithoutUserInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutUserInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutUserInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    id?: StringFilter<"Invoice"> | string
    user_id?: UuidFilter<"Invoice"> | string
    awarded_bid_ids?: StringNullableListFilter<"Invoice">
    invoice_number?: StringFilter<"Invoice"> | string
    generated_at?: DateTimeFilter<"Invoice"> | Date | string
    total_amount?: FloatFilter<"Invoice"> | number
    pdf_url?: StringNullableFilter<"Invoice"> | string | null
  }

  export type EmailNotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: EmailNotificationWhereUniqueInput
    update: XOR<EmailNotificationUpdateWithoutUserInput, EmailNotificationUncheckedUpdateWithoutUserInput>
    create: XOR<EmailNotificationCreateWithoutUserInput, EmailNotificationUncheckedCreateWithoutUserInput>
  }

  export type EmailNotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: EmailNotificationWhereUniqueInput
    data: XOR<EmailNotificationUpdateWithoutUserInput, EmailNotificationUncheckedUpdateWithoutUserInput>
  }

  export type EmailNotificationUpdateManyWithWhereWithoutUserInput = {
    where: EmailNotificationScalarWhereInput
    data: XOR<EmailNotificationUpdateManyMutationInput, EmailNotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type EmailNotificationScalarWhereInput = {
    AND?: EmailNotificationScalarWhereInput | EmailNotificationScalarWhereInput[]
    OR?: EmailNotificationScalarWhereInput[]
    NOT?: EmailNotificationScalarWhereInput | EmailNotificationScalarWhereInput[]
    id?: IntFilter<"EmailNotification"> | number
    user_id?: UuidNullableFilter<"EmailNotification"> | string | null
    subject?: StringFilter<"EmailNotification"> | string
    message?: StringFilter<"EmailNotification"> | string
    notification_type?: StringNullableFilter<"EmailNotification"> | string | null
    is_sent?: BoolFilter<"EmailNotification"> | boolean
    sent_at?: DateTimeNullableFilter<"EmailNotification"> | Date | string | null
    created_at?: DateTimeFilter<"EmailNotification"> | Date | string
  }

  export type UserCreateWithoutVerizon_filesInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    bids_placed?: number
    active_bids?: number
    won_bids?: number
    reset_token?: string | null
    reset_token_expiry?: Date | string | null
    verification_code?: string | null
    code_expires_at?: Date | string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    uploaded_files?: UploadedFileCreateNestedManyWithoutUserInput
    bids?: BidCreateNestedManyWithoutUserInput
    awarded_bids?: AwardedBidCreateNestedManyWithoutUserInput
    invoices?: InvoiceCreateNestedManyWithoutUserInput
    email_notifications?: EmailNotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVerizon_filesInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    bids_placed?: number
    active_bids?: number
    won_bids?: number
    reset_token?: string | null
    reset_token_expiry?: Date | string | null
    verification_code?: string | null
    code_expires_at?: Date | string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    uploaded_files?: UploadedFileUncheckedCreateNestedManyWithoutUserInput
    bids?: BidUncheckedCreateNestedManyWithoutUserInput
    awarded_bids?: AwardedBidUncheckedCreateNestedManyWithoutUserInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutUserInput
    email_notifications?: EmailNotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVerizon_filesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVerizon_filesInput, UserUncheckedCreateWithoutVerizon_filesInput>
  }

  export type LotCreateWithoutVerizon_fileInput = {
    id?: string
    lot_number: string
    item_description?: string | null
    grade?: string | null
    quantity?: number | null
    base_price?: number | null
    commission_rate?: number
    oem?: string | null
    sku?: string | null
    prop65_warning?: string | null
    description?: string | null
    disposition?: string | null
    unit_awarded_price?: number | null
    available_from?: Date | string | null
    available_to?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    bids?: BidCreateNestedManyWithoutLotInput
    awarded_bids?: AwardedBidCreateNestedManyWithoutLotInput
  }

  export type LotUncheckedCreateWithoutVerizon_fileInput = {
    id?: string
    lot_number: string
    item_description?: string | null
    grade?: string | null
    quantity?: number | null
    base_price?: number | null
    commission_rate?: number
    oem?: string | null
    sku?: string | null
    prop65_warning?: string | null
    description?: string | null
    disposition?: string | null
    unit_awarded_price?: number | null
    available_from?: Date | string | null
    available_to?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    bids?: BidUncheckedCreateNestedManyWithoutLotInput
    awarded_bids?: AwardedBidUncheckedCreateNestedManyWithoutLotInput
  }

  export type LotCreateOrConnectWithoutVerizon_fileInput = {
    where: LotWhereUniqueInput
    create: XOR<LotCreateWithoutVerizon_fileInput, LotUncheckedCreateWithoutVerizon_fileInput>
  }

  export type LotCreateManyVerizon_fileInputEnvelope = {
    data: LotCreateManyVerizon_fileInput | LotCreateManyVerizon_fileInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVerizon_filesInput = {
    update: XOR<UserUpdateWithoutVerizon_filesInput, UserUncheckedUpdateWithoutVerizon_filesInput>
    create: XOR<UserCreateWithoutVerizon_filesInput, UserUncheckedCreateWithoutVerizon_filesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVerizon_filesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVerizon_filesInput, UserUncheckedUpdateWithoutVerizon_filesInput>
  }

  export type UserUpdateWithoutVerizon_filesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    bids_placed?: IntFieldUpdateOperationsInput | number
    active_bids?: IntFieldUpdateOperationsInput | number
    won_bids?: IntFieldUpdateOperationsInput | number
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    uploaded_files?: UploadedFileUpdateManyWithoutUserNestedInput
    bids?: BidUpdateManyWithoutUserNestedInput
    awarded_bids?: AwardedBidUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUpdateManyWithoutUserNestedInput
    email_notifications?: EmailNotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVerizon_filesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    bids_placed?: IntFieldUpdateOperationsInput | number
    active_bids?: IntFieldUpdateOperationsInput | number
    won_bids?: IntFieldUpdateOperationsInput | number
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    uploaded_files?: UploadedFileUncheckedUpdateManyWithoutUserNestedInput
    bids?: BidUncheckedUpdateManyWithoutUserNestedInput
    awarded_bids?: AwardedBidUncheckedUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutUserNestedInput
    email_notifications?: EmailNotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LotUpsertWithWhereUniqueWithoutVerizon_fileInput = {
    where: LotWhereUniqueInput
    update: XOR<LotUpdateWithoutVerizon_fileInput, LotUncheckedUpdateWithoutVerizon_fileInput>
    create: XOR<LotCreateWithoutVerizon_fileInput, LotUncheckedCreateWithoutVerizon_fileInput>
  }

  export type LotUpdateWithWhereUniqueWithoutVerizon_fileInput = {
    where: LotWhereUniqueInput
    data: XOR<LotUpdateWithoutVerizon_fileInput, LotUncheckedUpdateWithoutVerizon_fileInput>
  }

  export type LotUpdateManyWithWhereWithoutVerizon_fileInput = {
    where: LotScalarWhereInput
    data: XOR<LotUpdateManyMutationInput, LotUncheckedUpdateManyWithoutVerizon_fileInput>
  }

  export type LotScalarWhereInput = {
    AND?: LotScalarWhereInput | LotScalarWhereInput[]
    OR?: LotScalarWhereInput[]
    NOT?: LotScalarWhereInput | LotScalarWhereInput[]
    id?: UuidFilter<"Lot"> | string
    verizon_file_id?: UuidNullableFilter<"Lot"> | string | null
    lot_number?: StringFilter<"Lot"> | string
    item_description?: StringNullableFilter<"Lot"> | string | null
    grade?: StringNullableFilter<"Lot"> | string | null
    quantity?: IntNullableFilter<"Lot"> | number | null
    base_price?: FloatNullableFilter<"Lot"> | number | null
    commission_rate?: FloatFilter<"Lot"> | number
    oem?: StringNullableFilter<"Lot"> | string | null
    sku?: StringNullableFilter<"Lot"> | string | null
    prop65_warning?: StringNullableFilter<"Lot"> | string | null
    description?: StringNullableFilter<"Lot"> | string | null
    disposition?: StringNullableFilter<"Lot"> | string | null
    unit_awarded_price?: FloatNullableFilter<"Lot"> | number | null
    available_from?: DateTimeNullableFilter<"Lot"> | Date | string | null
    available_to?: DateTimeNullableFilter<"Lot"> | Date | string | null
    created_at?: DateTimeFilter<"Lot"> | Date | string
    updated_at?: DateTimeFilter<"Lot"> | Date | string
  }

  export type UserCreateWithoutUploaded_filesInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    bids_placed?: number
    active_bids?: number
    won_bids?: number
    reset_token?: string | null
    reset_token_expiry?: Date | string | null
    verification_code?: string | null
    code_expires_at?: Date | string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    verizon_files?: VerizonFileCreateNestedManyWithoutUserInput
    bids?: BidCreateNestedManyWithoutUserInput
    awarded_bids?: AwardedBidCreateNestedManyWithoutUserInput
    invoices?: InvoiceCreateNestedManyWithoutUserInput
    email_notifications?: EmailNotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUploaded_filesInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    bids_placed?: number
    active_bids?: number
    won_bids?: number
    reset_token?: string | null
    reset_token_expiry?: Date | string | null
    verification_code?: string | null
    code_expires_at?: Date | string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    verizon_files?: VerizonFileUncheckedCreateNestedManyWithoutUserInput
    bids?: BidUncheckedCreateNestedManyWithoutUserInput
    awarded_bids?: AwardedBidUncheckedCreateNestedManyWithoutUserInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutUserInput
    email_notifications?: EmailNotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUploaded_filesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUploaded_filesInput, UserUncheckedCreateWithoutUploaded_filesInput>
  }

  export type UserUpsertWithoutUploaded_filesInput = {
    update: XOR<UserUpdateWithoutUploaded_filesInput, UserUncheckedUpdateWithoutUploaded_filesInput>
    create: XOR<UserCreateWithoutUploaded_filesInput, UserUncheckedCreateWithoutUploaded_filesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUploaded_filesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUploaded_filesInput, UserUncheckedUpdateWithoutUploaded_filesInput>
  }

  export type UserUpdateWithoutUploaded_filesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    bids_placed?: IntFieldUpdateOperationsInput | number
    active_bids?: IntFieldUpdateOperationsInput | number
    won_bids?: IntFieldUpdateOperationsInput | number
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verizon_files?: VerizonFileUpdateManyWithoutUserNestedInput
    bids?: BidUpdateManyWithoutUserNestedInput
    awarded_bids?: AwardedBidUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUpdateManyWithoutUserNestedInput
    email_notifications?: EmailNotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUploaded_filesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    bids_placed?: IntFieldUpdateOperationsInput | number
    active_bids?: IntFieldUpdateOperationsInput | number
    won_bids?: IntFieldUpdateOperationsInput | number
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verizon_files?: VerizonFileUncheckedUpdateManyWithoutUserNestedInput
    bids?: BidUncheckedUpdateManyWithoutUserNestedInput
    awarded_bids?: AwardedBidUncheckedUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutUserNestedInput
    email_notifications?: EmailNotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VerizonFileCreateWithoutLotsInput = {
    id?: string
    file_name: string
    upload_time?: Date | string
    cleaned?: boolean
    user: UserCreateNestedOneWithoutVerizon_filesInput
  }

  export type VerizonFileUncheckedCreateWithoutLotsInput = {
    id?: string
    file_name: string
    uploaded_by: string
    upload_time?: Date | string
    cleaned?: boolean
  }

  export type VerizonFileCreateOrConnectWithoutLotsInput = {
    where: VerizonFileWhereUniqueInput
    create: XOR<VerizonFileCreateWithoutLotsInput, VerizonFileUncheckedCreateWithoutLotsInput>
  }

  export type BidCreateWithoutLotInput = {
    id?: string
    bid_amount: number
    submitted_at?: Date | string
    status?: string
    bid_time?: Date | string | null
    user: UserCreateNestedOneWithoutBidsInput
  }

  export type BidUncheckedCreateWithoutLotInput = {
    id?: string
    user_id: string
    bid_amount: number
    submitted_at?: Date | string
    status?: string
    bid_time?: Date | string | null
  }

  export type BidCreateOrConnectWithoutLotInput = {
    where: BidWhereUniqueInput
    create: XOR<BidCreateWithoutLotInput, BidUncheckedCreateWithoutLotInput>
  }

  export type BidCreateManyLotInputEnvelope = {
    data: BidCreateManyLotInput | BidCreateManyLotInput[]
    skipDuplicates?: boolean
  }

  export type AwardedBidCreateWithoutLotInput = {
    id?: string
    final_price: number
    commission: number
    user: UserCreateNestedOneWithoutAwarded_bidsInput
  }

  export type AwardedBidUncheckedCreateWithoutLotInput = {
    id?: string
    awarded_to: string
    final_price: number
    commission: number
  }

  export type AwardedBidCreateOrConnectWithoutLotInput = {
    where: AwardedBidWhereUniqueInput
    create: XOR<AwardedBidCreateWithoutLotInput, AwardedBidUncheckedCreateWithoutLotInput>
  }

  export type AwardedBidCreateManyLotInputEnvelope = {
    data: AwardedBidCreateManyLotInput | AwardedBidCreateManyLotInput[]
    skipDuplicates?: boolean
  }

  export type VerizonFileUpsertWithoutLotsInput = {
    update: XOR<VerizonFileUpdateWithoutLotsInput, VerizonFileUncheckedUpdateWithoutLotsInput>
    create: XOR<VerizonFileCreateWithoutLotsInput, VerizonFileUncheckedCreateWithoutLotsInput>
    where?: VerizonFileWhereInput
  }

  export type VerizonFileUpdateToOneWithWhereWithoutLotsInput = {
    where?: VerizonFileWhereInput
    data: XOR<VerizonFileUpdateWithoutLotsInput, VerizonFileUncheckedUpdateWithoutLotsInput>
  }

  export type VerizonFileUpdateWithoutLotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    upload_time?: DateTimeFieldUpdateOperationsInput | Date | string
    cleaned?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutVerizon_filesNestedInput
  }

  export type VerizonFileUncheckedUpdateWithoutLotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    uploaded_by?: StringFieldUpdateOperationsInput | string
    upload_time?: DateTimeFieldUpdateOperationsInput | Date | string
    cleaned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BidUpsertWithWhereUniqueWithoutLotInput = {
    where: BidWhereUniqueInput
    update: XOR<BidUpdateWithoutLotInput, BidUncheckedUpdateWithoutLotInput>
    create: XOR<BidCreateWithoutLotInput, BidUncheckedCreateWithoutLotInput>
  }

  export type BidUpdateWithWhereUniqueWithoutLotInput = {
    where: BidWhereUniqueInput
    data: XOR<BidUpdateWithoutLotInput, BidUncheckedUpdateWithoutLotInput>
  }

  export type BidUpdateManyWithWhereWithoutLotInput = {
    where: BidScalarWhereInput
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyWithoutLotInput>
  }

  export type AwardedBidUpsertWithWhereUniqueWithoutLotInput = {
    where: AwardedBidWhereUniqueInput
    update: XOR<AwardedBidUpdateWithoutLotInput, AwardedBidUncheckedUpdateWithoutLotInput>
    create: XOR<AwardedBidCreateWithoutLotInput, AwardedBidUncheckedCreateWithoutLotInput>
  }

  export type AwardedBidUpdateWithWhereUniqueWithoutLotInput = {
    where: AwardedBidWhereUniqueInput
    data: XOR<AwardedBidUpdateWithoutLotInput, AwardedBidUncheckedUpdateWithoutLotInput>
  }

  export type AwardedBidUpdateManyWithWhereWithoutLotInput = {
    where: AwardedBidScalarWhereInput
    data: XOR<AwardedBidUpdateManyMutationInput, AwardedBidUncheckedUpdateManyWithoutLotInput>
  }

  export type UserCreateWithoutBidsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    bids_placed?: number
    active_bids?: number
    won_bids?: number
    reset_token?: string | null
    reset_token_expiry?: Date | string | null
    verification_code?: string | null
    code_expires_at?: Date | string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    verizon_files?: VerizonFileCreateNestedManyWithoutUserInput
    uploaded_files?: UploadedFileCreateNestedManyWithoutUserInput
    awarded_bids?: AwardedBidCreateNestedManyWithoutUserInput
    invoices?: InvoiceCreateNestedManyWithoutUserInput
    email_notifications?: EmailNotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBidsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    bids_placed?: number
    active_bids?: number
    won_bids?: number
    reset_token?: string | null
    reset_token_expiry?: Date | string | null
    verification_code?: string | null
    code_expires_at?: Date | string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    verizon_files?: VerizonFileUncheckedCreateNestedManyWithoutUserInput
    uploaded_files?: UploadedFileUncheckedCreateNestedManyWithoutUserInput
    awarded_bids?: AwardedBidUncheckedCreateNestedManyWithoutUserInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutUserInput
    email_notifications?: EmailNotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBidsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>
  }

  export type LotCreateWithoutBidsInput = {
    id?: string
    lot_number: string
    item_description?: string | null
    grade?: string | null
    quantity?: number | null
    base_price?: number | null
    commission_rate?: number
    oem?: string | null
    sku?: string | null
    prop65_warning?: string | null
    description?: string | null
    disposition?: string | null
    unit_awarded_price?: number | null
    available_from?: Date | string | null
    available_to?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    verizon_file?: VerizonFileCreateNestedOneWithoutLotsInput
    awarded_bids?: AwardedBidCreateNestedManyWithoutLotInput
  }

  export type LotUncheckedCreateWithoutBidsInput = {
    id?: string
    verizon_file_id?: string | null
    lot_number: string
    item_description?: string | null
    grade?: string | null
    quantity?: number | null
    base_price?: number | null
    commission_rate?: number
    oem?: string | null
    sku?: string | null
    prop65_warning?: string | null
    description?: string | null
    disposition?: string | null
    unit_awarded_price?: number | null
    available_from?: Date | string | null
    available_to?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    awarded_bids?: AwardedBidUncheckedCreateNestedManyWithoutLotInput
  }

  export type LotCreateOrConnectWithoutBidsInput = {
    where: LotWhereUniqueInput
    create: XOR<LotCreateWithoutBidsInput, LotUncheckedCreateWithoutBidsInput>
  }

  export type UserUpsertWithoutBidsInput = {
    update: XOR<UserUpdateWithoutBidsInput, UserUncheckedUpdateWithoutBidsInput>
    create: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBidsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBidsInput, UserUncheckedUpdateWithoutBidsInput>
  }

  export type UserUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    bids_placed?: IntFieldUpdateOperationsInput | number
    active_bids?: IntFieldUpdateOperationsInput | number
    won_bids?: IntFieldUpdateOperationsInput | number
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verizon_files?: VerizonFileUpdateManyWithoutUserNestedInput
    uploaded_files?: UploadedFileUpdateManyWithoutUserNestedInput
    awarded_bids?: AwardedBidUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUpdateManyWithoutUserNestedInput
    email_notifications?: EmailNotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    bids_placed?: IntFieldUpdateOperationsInput | number
    active_bids?: IntFieldUpdateOperationsInput | number
    won_bids?: IntFieldUpdateOperationsInput | number
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verizon_files?: VerizonFileUncheckedUpdateManyWithoutUserNestedInput
    uploaded_files?: UploadedFileUncheckedUpdateManyWithoutUserNestedInput
    awarded_bids?: AwardedBidUncheckedUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutUserNestedInput
    email_notifications?: EmailNotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LotUpsertWithoutBidsInput = {
    update: XOR<LotUpdateWithoutBidsInput, LotUncheckedUpdateWithoutBidsInput>
    create: XOR<LotCreateWithoutBidsInput, LotUncheckedCreateWithoutBidsInput>
    where?: LotWhereInput
  }

  export type LotUpdateToOneWithWhereWithoutBidsInput = {
    where?: LotWhereInput
    data: XOR<LotUpdateWithoutBidsInput, LotUncheckedUpdateWithoutBidsInput>
  }

  export type LotUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lot_number?: StringFieldUpdateOperationsInput | string
    item_description?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    base_price?: NullableFloatFieldUpdateOperationsInput | number | null
    commission_rate?: FloatFieldUpdateOperationsInput | number
    oem?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    prop65_warning?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    disposition?: NullableStringFieldUpdateOperationsInput | string | null
    unit_awarded_price?: NullableFloatFieldUpdateOperationsInput | number | null
    available_from?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    available_to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verizon_file?: VerizonFileUpdateOneWithoutLotsNestedInput
    awarded_bids?: AwardedBidUpdateManyWithoutLotNestedInput
  }

  export type LotUncheckedUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    verizon_file_id?: NullableStringFieldUpdateOperationsInput | string | null
    lot_number?: StringFieldUpdateOperationsInput | string
    item_description?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    base_price?: NullableFloatFieldUpdateOperationsInput | number | null
    commission_rate?: FloatFieldUpdateOperationsInput | number
    oem?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    prop65_warning?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    disposition?: NullableStringFieldUpdateOperationsInput | string | null
    unit_awarded_price?: NullableFloatFieldUpdateOperationsInput | number | null
    available_from?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    available_to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    awarded_bids?: AwardedBidUncheckedUpdateManyWithoutLotNestedInput
  }

  export type LotCreateWithoutAwarded_bidsInput = {
    id?: string
    lot_number: string
    item_description?: string | null
    grade?: string | null
    quantity?: number | null
    base_price?: number | null
    commission_rate?: number
    oem?: string | null
    sku?: string | null
    prop65_warning?: string | null
    description?: string | null
    disposition?: string | null
    unit_awarded_price?: number | null
    available_from?: Date | string | null
    available_to?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    verizon_file?: VerizonFileCreateNestedOneWithoutLotsInput
    bids?: BidCreateNestedManyWithoutLotInput
  }

  export type LotUncheckedCreateWithoutAwarded_bidsInput = {
    id?: string
    verizon_file_id?: string | null
    lot_number: string
    item_description?: string | null
    grade?: string | null
    quantity?: number | null
    base_price?: number | null
    commission_rate?: number
    oem?: string | null
    sku?: string | null
    prop65_warning?: string | null
    description?: string | null
    disposition?: string | null
    unit_awarded_price?: number | null
    available_from?: Date | string | null
    available_to?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    bids?: BidUncheckedCreateNestedManyWithoutLotInput
  }

  export type LotCreateOrConnectWithoutAwarded_bidsInput = {
    where: LotWhereUniqueInput
    create: XOR<LotCreateWithoutAwarded_bidsInput, LotUncheckedCreateWithoutAwarded_bidsInput>
  }

  export type UserCreateWithoutAwarded_bidsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    bids_placed?: number
    active_bids?: number
    won_bids?: number
    reset_token?: string | null
    reset_token_expiry?: Date | string | null
    verification_code?: string | null
    code_expires_at?: Date | string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    verizon_files?: VerizonFileCreateNestedManyWithoutUserInput
    uploaded_files?: UploadedFileCreateNestedManyWithoutUserInput
    bids?: BidCreateNestedManyWithoutUserInput
    invoices?: InvoiceCreateNestedManyWithoutUserInput
    email_notifications?: EmailNotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAwarded_bidsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    bids_placed?: number
    active_bids?: number
    won_bids?: number
    reset_token?: string | null
    reset_token_expiry?: Date | string | null
    verification_code?: string | null
    code_expires_at?: Date | string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    verizon_files?: VerizonFileUncheckedCreateNestedManyWithoutUserInput
    uploaded_files?: UploadedFileUncheckedCreateNestedManyWithoutUserInput
    bids?: BidUncheckedCreateNestedManyWithoutUserInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutUserInput
    email_notifications?: EmailNotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAwarded_bidsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAwarded_bidsInput, UserUncheckedCreateWithoutAwarded_bidsInput>
  }

  export type LotUpsertWithoutAwarded_bidsInput = {
    update: XOR<LotUpdateWithoutAwarded_bidsInput, LotUncheckedUpdateWithoutAwarded_bidsInput>
    create: XOR<LotCreateWithoutAwarded_bidsInput, LotUncheckedCreateWithoutAwarded_bidsInput>
    where?: LotWhereInput
  }

  export type LotUpdateToOneWithWhereWithoutAwarded_bidsInput = {
    where?: LotWhereInput
    data: XOR<LotUpdateWithoutAwarded_bidsInput, LotUncheckedUpdateWithoutAwarded_bidsInput>
  }

  export type LotUpdateWithoutAwarded_bidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lot_number?: StringFieldUpdateOperationsInput | string
    item_description?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    base_price?: NullableFloatFieldUpdateOperationsInput | number | null
    commission_rate?: FloatFieldUpdateOperationsInput | number
    oem?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    prop65_warning?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    disposition?: NullableStringFieldUpdateOperationsInput | string | null
    unit_awarded_price?: NullableFloatFieldUpdateOperationsInput | number | null
    available_from?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    available_to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verizon_file?: VerizonFileUpdateOneWithoutLotsNestedInput
    bids?: BidUpdateManyWithoutLotNestedInput
  }

  export type LotUncheckedUpdateWithoutAwarded_bidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    verizon_file_id?: NullableStringFieldUpdateOperationsInput | string | null
    lot_number?: StringFieldUpdateOperationsInput | string
    item_description?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    base_price?: NullableFloatFieldUpdateOperationsInput | number | null
    commission_rate?: FloatFieldUpdateOperationsInput | number
    oem?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    prop65_warning?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    disposition?: NullableStringFieldUpdateOperationsInput | string | null
    unit_awarded_price?: NullableFloatFieldUpdateOperationsInput | number | null
    available_from?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    available_to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUncheckedUpdateManyWithoutLotNestedInput
  }

  export type UserUpsertWithoutAwarded_bidsInput = {
    update: XOR<UserUpdateWithoutAwarded_bidsInput, UserUncheckedUpdateWithoutAwarded_bidsInput>
    create: XOR<UserCreateWithoutAwarded_bidsInput, UserUncheckedCreateWithoutAwarded_bidsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAwarded_bidsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAwarded_bidsInput, UserUncheckedUpdateWithoutAwarded_bidsInput>
  }

  export type UserUpdateWithoutAwarded_bidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    bids_placed?: IntFieldUpdateOperationsInput | number
    active_bids?: IntFieldUpdateOperationsInput | number
    won_bids?: IntFieldUpdateOperationsInput | number
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verizon_files?: VerizonFileUpdateManyWithoutUserNestedInput
    uploaded_files?: UploadedFileUpdateManyWithoutUserNestedInput
    bids?: BidUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUpdateManyWithoutUserNestedInput
    email_notifications?: EmailNotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAwarded_bidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    bids_placed?: IntFieldUpdateOperationsInput | number
    active_bids?: IntFieldUpdateOperationsInput | number
    won_bids?: IntFieldUpdateOperationsInput | number
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verizon_files?: VerizonFileUncheckedUpdateManyWithoutUserNestedInput
    uploaded_files?: UploadedFileUncheckedUpdateManyWithoutUserNestedInput
    bids?: BidUncheckedUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutUserNestedInput
    email_notifications?: EmailNotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutInvoicesInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    bids_placed?: number
    active_bids?: number
    won_bids?: number
    reset_token?: string | null
    reset_token_expiry?: Date | string | null
    verification_code?: string | null
    code_expires_at?: Date | string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    verizon_files?: VerizonFileCreateNestedManyWithoutUserInput
    uploaded_files?: UploadedFileCreateNestedManyWithoutUserInput
    bids?: BidCreateNestedManyWithoutUserInput
    awarded_bids?: AwardedBidCreateNestedManyWithoutUserInput
    email_notifications?: EmailNotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvoicesInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    bids_placed?: number
    active_bids?: number
    won_bids?: number
    reset_token?: string | null
    reset_token_expiry?: Date | string | null
    verification_code?: string | null
    code_expires_at?: Date | string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    verizon_files?: VerizonFileUncheckedCreateNestedManyWithoutUserInput
    uploaded_files?: UploadedFileUncheckedCreateNestedManyWithoutUserInput
    bids?: BidUncheckedCreateNestedManyWithoutUserInput
    awarded_bids?: AwardedBidUncheckedCreateNestedManyWithoutUserInput
    email_notifications?: EmailNotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvoicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
  }

  export type UserUpsertWithoutInvoicesInput = {
    update: XOR<UserUpdateWithoutInvoicesInput, UserUncheckedUpdateWithoutInvoicesInput>
    create: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvoicesInput, UserUncheckedUpdateWithoutInvoicesInput>
  }

  export type UserUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    bids_placed?: IntFieldUpdateOperationsInput | number
    active_bids?: IntFieldUpdateOperationsInput | number
    won_bids?: IntFieldUpdateOperationsInput | number
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verizon_files?: VerizonFileUpdateManyWithoutUserNestedInput
    uploaded_files?: UploadedFileUpdateManyWithoutUserNestedInput
    bids?: BidUpdateManyWithoutUserNestedInput
    awarded_bids?: AwardedBidUpdateManyWithoutUserNestedInput
    email_notifications?: EmailNotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    bids_placed?: IntFieldUpdateOperationsInput | number
    active_bids?: IntFieldUpdateOperationsInput | number
    won_bids?: IntFieldUpdateOperationsInput | number
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verizon_files?: VerizonFileUncheckedUpdateManyWithoutUserNestedInput
    uploaded_files?: UploadedFileUncheckedUpdateManyWithoutUserNestedInput
    bids?: BidUncheckedUpdateManyWithoutUserNestedInput
    awarded_bids?: AwardedBidUncheckedUpdateManyWithoutUserNestedInput
    email_notifications?: EmailNotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutEmail_notificationsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    bids_placed?: number
    active_bids?: number
    won_bids?: number
    reset_token?: string | null
    reset_token_expiry?: Date | string | null
    verification_code?: string | null
    code_expires_at?: Date | string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    verizon_files?: VerizonFileCreateNestedManyWithoutUserInput
    uploaded_files?: UploadedFileCreateNestedManyWithoutUserInput
    bids?: BidCreateNestedManyWithoutUserInput
    awarded_bids?: AwardedBidCreateNestedManyWithoutUserInput
    invoices?: InvoiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmail_notificationsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    bids_placed?: number
    active_bids?: number
    won_bids?: number
    reset_token?: string | null
    reset_token_expiry?: Date | string | null
    verification_code?: string | null
    code_expires_at?: Date | string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    verizon_files?: VerizonFileUncheckedCreateNestedManyWithoutUserInput
    uploaded_files?: UploadedFileUncheckedCreateNestedManyWithoutUserInput
    bids?: BidUncheckedCreateNestedManyWithoutUserInput
    awarded_bids?: AwardedBidUncheckedCreateNestedManyWithoutUserInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmail_notificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmail_notificationsInput, UserUncheckedCreateWithoutEmail_notificationsInput>
  }

  export type UserUpsertWithoutEmail_notificationsInput = {
    update: XOR<UserUpdateWithoutEmail_notificationsInput, UserUncheckedUpdateWithoutEmail_notificationsInput>
    create: XOR<UserCreateWithoutEmail_notificationsInput, UserUncheckedCreateWithoutEmail_notificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmail_notificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmail_notificationsInput, UserUncheckedUpdateWithoutEmail_notificationsInput>
  }

  export type UserUpdateWithoutEmail_notificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    bids_placed?: IntFieldUpdateOperationsInput | number
    active_bids?: IntFieldUpdateOperationsInput | number
    won_bids?: IntFieldUpdateOperationsInput | number
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verizon_files?: VerizonFileUpdateManyWithoutUserNestedInput
    uploaded_files?: UploadedFileUpdateManyWithoutUserNestedInput
    bids?: BidUpdateManyWithoutUserNestedInput
    awarded_bids?: AwardedBidUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmail_notificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    bids_placed?: IntFieldUpdateOperationsInput | number
    active_bids?: IntFieldUpdateOperationsInput | number
    won_bids?: IntFieldUpdateOperationsInput | number
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verizon_files?: VerizonFileUncheckedUpdateManyWithoutUserNestedInput
    uploaded_files?: UploadedFileUncheckedUpdateManyWithoutUserNestedInput
    bids?: BidUncheckedUpdateManyWithoutUserNestedInput
    awarded_bids?: AwardedBidUncheckedUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VerizonFileCreateManyUserInput = {
    id?: string
    file_name: string
    upload_time?: Date | string
    cleaned?: boolean
  }

  export type UploadedFileCreateManyUserInput = {
    id?: string
    filename: string
    processed_name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BidCreateManyUserInput = {
    id?: string
    lot_id: string
    bid_amount: number
    submitted_at?: Date | string
    status?: string
    bid_time?: Date | string | null
  }

  export type AwardedBidCreateManyUserInput = {
    id?: string
    lot_id: string
    final_price: number
    commission: number
  }

  export type InvoiceCreateManyUserInput = {
    id?: string
    awarded_bid_ids?: InvoiceCreateawarded_bid_idsInput | string[]
    invoice_number: string
    generated_at?: Date | string
    total_amount: number
    pdf_url?: string | null
  }

  export type EmailNotificationCreateManyUserInput = {
    id?: number
    subject: string
    message: string
    notification_type?: string | null
    is_sent?: boolean
    sent_at?: Date | string | null
    created_at?: Date | string
  }

  export type VerizonFileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    upload_time?: DateTimeFieldUpdateOperationsInput | Date | string
    cleaned?: BoolFieldUpdateOperationsInput | boolean
    lots?: LotUpdateManyWithoutVerizon_fileNestedInput
  }

  export type VerizonFileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    upload_time?: DateTimeFieldUpdateOperationsInput | Date | string
    cleaned?: BoolFieldUpdateOperationsInput | boolean
    lots?: LotUncheckedUpdateManyWithoutVerizon_fileNestedInput
  }

  export type VerizonFileUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    upload_time?: DateTimeFieldUpdateOperationsInput | Date | string
    cleaned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UploadedFileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    processed_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadedFileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    processed_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadedFileUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    processed_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bid_amount?: FloatFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    bid_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lot?: LotUpdateOneRequiredWithoutBidsNestedInput
  }

  export type BidUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lot_id?: StringFieldUpdateOperationsInput | string
    bid_amount?: FloatFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    bid_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BidUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lot_id?: StringFieldUpdateOperationsInput | string
    bid_amount?: FloatFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    bid_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AwardedBidUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    final_price?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    lot?: LotUpdateOneRequiredWithoutAwarded_bidsNestedInput
  }

  export type AwardedBidUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lot_id?: StringFieldUpdateOperationsInput | string
    final_price?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
  }

  export type AwardedBidUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lot_id?: StringFieldUpdateOperationsInput | string
    final_price?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
  }

  export type InvoiceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    awarded_bid_ids?: InvoiceUpdateawarded_bid_idsInput | string[]
    invoice_number?: StringFieldUpdateOperationsInput | string
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: FloatFieldUpdateOperationsInput | number
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoiceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    awarded_bid_ids?: InvoiceUpdateawarded_bid_idsInput | string[]
    invoice_number?: StringFieldUpdateOperationsInput | string
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: FloatFieldUpdateOperationsInput | number
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoiceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    awarded_bid_ids?: InvoiceUpdateawarded_bid_idsInput | string[]
    invoice_number?: StringFieldUpdateOperationsInput | string
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: FloatFieldUpdateOperationsInput | number
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailNotificationUpdateWithoutUserInput = {
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_sent?: BoolFieldUpdateOperationsInput | boolean
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailNotificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_sent?: BoolFieldUpdateOperationsInput | boolean
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailNotificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_sent?: BoolFieldUpdateOperationsInput | boolean
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LotCreateManyVerizon_fileInput = {
    id?: string
    lot_number: string
    item_description?: string | null
    grade?: string | null
    quantity?: number | null
    base_price?: number | null
    commission_rate?: number
    oem?: string | null
    sku?: string | null
    prop65_warning?: string | null
    description?: string | null
    disposition?: string | null
    unit_awarded_price?: number | null
    available_from?: Date | string | null
    available_to?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LotUpdateWithoutVerizon_fileInput = {
    id?: StringFieldUpdateOperationsInput | string
    lot_number?: StringFieldUpdateOperationsInput | string
    item_description?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    base_price?: NullableFloatFieldUpdateOperationsInput | number | null
    commission_rate?: FloatFieldUpdateOperationsInput | number
    oem?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    prop65_warning?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    disposition?: NullableStringFieldUpdateOperationsInput | string | null
    unit_awarded_price?: NullableFloatFieldUpdateOperationsInput | number | null
    available_from?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    available_to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUpdateManyWithoutLotNestedInput
    awarded_bids?: AwardedBidUpdateManyWithoutLotNestedInput
  }

  export type LotUncheckedUpdateWithoutVerizon_fileInput = {
    id?: StringFieldUpdateOperationsInput | string
    lot_number?: StringFieldUpdateOperationsInput | string
    item_description?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    base_price?: NullableFloatFieldUpdateOperationsInput | number | null
    commission_rate?: FloatFieldUpdateOperationsInput | number
    oem?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    prop65_warning?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    disposition?: NullableStringFieldUpdateOperationsInput | string | null
    unit_awarded_price?: NullableFloatFieldUpdateOperationsInput | number | null
    available_from?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    available_to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUncheckedUpdateManyWithoutLotNestedInput
    awarded_bids?: AwardedBidUncheckedUpdateManyWithoutLotNestedInput
  }

  export type LotUncheckedUpdateManyWithoutVerizon_fileInput = {
    id?: StringFieldUpdateOperationsInput | string
    lot_number?: StringFieldUpdateOperationsInput | string
    item_description?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    base_price?: NullableFloatFieldUpdateOperationsInput | number | null
    commission_rate?: FloatFieldUpdateOperationsInput | number
    oem?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    prop65_warning?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    disposition?: NullableStringFieldUpdateOperationsInput | string | null
    unit_awarded_price?: NullableFloatFieldUpdateOperationsInput | number | null
    available_from?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    available_to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidCreateManyLotInput = {
    id?: string
    user_id: string
    bid_amount: number
    submitted_at?: Date | string
    status?: string
    bid_time?: Date | string | null
  }

  export type AwardedBidCreateManyLotInput = {
    id?: string
    awarded_to: string
    final_price: number
    commission: number
  }

  export type BidUpdateWithoutLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    bid_amount?: FloatFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    bid_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutBidsNestedInput
  }

  export type BidUncheckedUpdateWithoutLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    bid_amount?: FloatFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    bid_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BidUncheckedUpdateManyWithoutLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    bid_amount?: FloatFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    bid_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AwardedBidUpdateWithoutLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    final_price?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutAwarded_bidsNestedInput
  }

  export type AwardedBidUncheckedUpdateWithoutLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    awarded_to?: StringFieldUpdateOperationsInput | string
    final_price?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
  }

  export type AwardedBidUncheckedUpdateManyWithoutLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    awarded_to?: StringFieldUpdateOperationsInput | string
    final_price?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}