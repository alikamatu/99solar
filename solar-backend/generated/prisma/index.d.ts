
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
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model verizon_files
 * 
 */
export type verizon_files = $Result.DefaultSelection<Prisma.$verizon_filesPayload>
/**
 * Model uploaded_files
 * 
 */
export type uploaded_files = $Result.DefaultSelection<Prisma.$uploaded_filesPayload>
/**
 * Model lots
 * 
 */
export type lots = $Result.DefaultSelection<Prisma.$lotsPayload>
/**
 * Model bids
 * 
 */
export type bids = $Result.DefaultSelection<Prisma.$bidsPayload>
/**
 * Model awarded_bids
 * 
 */
export type awarded_bids = $Result.DefaultSelection<Prisma.$awarded_bidsPayload>
/**
 * Model invoice
 * 
 */
export type invoice = $Result.DefaultSelection<Prisma.$invoicePayload>
/**
 * Model email_notifications
 * 
 */
export type email_notifications = $Result.DefaultSelection<Prisma.$email_notificationsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verizon_files`: Exposes CRUD operations for the **verizon_files** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verizon_files
    * const verizon_files = await prisma.verizon_files.findMany()
    * ```
    */
  get verizon_files(): Prisma.verizon_filesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uploaded_files`: Exposes CRUD operations for the **uploaded_files** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Uploaded_files
    * const uploaded_files = await prisma.uploaded_files.findMany()
    * ```
    */
  get uploaded_files(): Prisma.uploaded_filesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lots`: Exposes CRUD operations for the **lots** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lots
    * const lots = await prisma.lots.findMany()
    * ```
    */
  get lots(): Prisma.lotsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bids`: Exposes CRUD operations for the **bids** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bids
    * const bids = await prisma.bids.findMany()
    * ```
    */
  get bids(): Prisma.bidsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.awarded_bids`: Exposes CRUD operations for the **awarded_bids** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Awarded_bids
    * const awarded_bids = await prisma.awarded_bids.findMany()
    * ```
    */
  get awarded_bids(): Prisma.awarded_bidsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.invoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.email_notifications`: Exposes CRUD operations for the **email_notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Email_notifications
    * const email_notifications = await prisma.email_notifications.findMany()
    * ```
    */
  get email_notifications(): Prisma.email_notificationsDelegate<ExtArgs, ClientOptions>;
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
    users: 'users',
    verizon_files: 'verizon_files',
    uploaded_files: 'uploaded_files',
    lots: 'lots',
    bids: 'bids',
    awarded_bids: 'awarded_bids',
    invoice: 'invoice',
    email_notifications: 'email_notifications'
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
      modelProps: "users" | "verizon_files" | "uploaded_files" | "lots" | "bids" | "awarded_bids" | "invoice" | "email_notifications"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      verizon_files: {
        payload: Prisma.$verizon_filesPayload<ExtArgs>
        fields: Prisma.verizon_filesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.verizon_filesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verizon_filesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.verizon_filesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verizon_filesPayload>
          }
          findFirst: {
            args: Prisma.verizon_filesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verizon_filesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.verizon_filesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verizon_filesPayload>
          }
          findMany: {
            args: Prisma.verizon_filesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verizon_filesPayload>[]
          }
          create: {
            args: Prisma.verizon_filesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verizon_filesPayload>
          }
          createMany: {
            args: Prisma.verizon_filesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.verizon_filesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verizon_filesPayload>[]
          }
          delete: {
            args: Prisma.verizon_filesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verizon_filesPayload>
          }
          update: {
            args: Prisma.verizon_filesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verizon_filesPayload>
          }
          deleteMany: {
            args: Prisma.verizon_filesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.verizon_filesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.verizon_filesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verizon_filesPayload>[]
          }
          upsert: {
            args: Prisma.verizon_filesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verizon_filesPayload>
          }
          aggregate: {
            args: Prisma.Verizon_filesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerizon_files>
          }
          groupBy: {
            args: Prisma.verizon_filesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Verizon_filesGroupByOutputType>[]
          }
          count: {
            args: Prisma.verizon_filesCountArgs<ExtArgs>
            result: $Utils.Optional<Verizon_filesCountAggregateOutputType> | number
          }
        }
      }
      uploaded_files: {
        payload: Prisma.$uploaded_filesPayload<ExtArgs>
        fields: Prisma.uploaded_filesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.uploaded_filesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uploaded_filesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.uploaded_filesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uploaded_filesPayload>
          }
          findFirst: {
            args: Prisma.uploaded_filesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uploaded_filesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.uploaded_filesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uploaded_filesPayload>
          }
          findMany: {
            args: Prisma.uploaded_filesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uploaded_filesPayload>[]
          }
          create: {
            args: Prisma.uploaded_filesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uploaded_filesPayload>
          }
          createMany: {
            args: Prisma.uploaded_filesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.uploaded_filesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uploaded_filesPayload>[]
          }
          delete: {
            args: Prisma.uploaded_filesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uploaded_filesPayload>
          }
          update: {
            args: Prisma.uploaded_filesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uploaded_filesPayload>
          }
          deleteMany: {
            args: Prisma.uploaded_filesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.uploaded_filesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.uploaded_filesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uploaded_filesPayload>[]
          }
          upsert: {
            args: Prisma.uploaded_filesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uploaded_filesPayload>
          }
          aggregate: {
            args: Prisma.Uploaded_filesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUploaded_files>
          }
          groupBy: {
            args: Prisma.uploaded_filesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Uploaded_filesGroupByOutputType>[]
          }
          count: {
            args: Prisma.uploaded_filesCountArgs<ExtArgs>
            result: $Utils.Optional<Uploaded_filesCountAggregateOutputType> | number
          }
        }
      }
      lots: {
        payload: Prisma.$lotsPayload<ExtArgs>
        fields: Prisma.lotsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lotsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lotsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lotsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lotsPayload>
          }
          findFirst: {
            args: Prisma.lotsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lotsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lotsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lotsPayload>
          }
          findMany: {
            args: Prisma.lotsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lotsPayload>[]
          }
          create: {
            args: Prisma.lotsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lotsPayload>
          }
          createMany: {
            args: Prisma.lotsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.lotsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lotsPayload>[]
          }
          delete: {
            args: Prisma.lotsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lotsPayload>
          }
          update: {
            args: Prisma.lotsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lotsPayload>
          }
          deleteMany: {
            args: Prisma.lotsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.lotsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.lotsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lotsPayload>[]
          }
          upsert: {
            args: Prisma.lotsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lotsPayload>
          }
          aggregate: {
            args: Prisma.LotsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLots>
          }
          groupBy: {
            args: Prisma.lotsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LotsGroupByOutputType>[]
          }
          count: {
            args: Prisma.lotsCountArgs<ExtArgs>
            result: $Utils.Optional<LotsCountAggregateOutputType> | number
          }
        }
      }
      bids: {
        payload: Prisma.$bidsPayload<ExtArgs>
        fields: Prisma.bidsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bidsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bidsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bidsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bidsPayload>
          }
          findFirst: {
            args: Prisma.bidsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bidsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bidsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bidsPayload>
          }
          findMany: {
            args: Prisma.bidsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bidsPayload>[]
          }
          create: {
            args: Prisma.bidsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bidsPayload>
          }
          createMany: {
            args: Prisma.bidsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bidsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bidsPayload>[]
          }
          delete: {
            args: Prisma.bidsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bidsPayload>
          }
          update: {
            args: Prisma.bidsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bidsPayload>
          }
          deleteMany: {
            args: Prisma.bidsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bidsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bidsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bidsPayload>[]
          }
          upsert: {
            args: Prisma.bidsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bidsPayload>
          }
          aggregate: {
            args: Prisma.BidsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBids>
          }
          groupBy: {
            args: Prisma.bidsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BidsGroupByOutputType>[]
          }
          count: {
            args: Prisma.bidsCountArgs<ExtArgs>
            result: $Utils.Optional<BidsCountAggregateOutputType> | number
          }
        }
      }
      awarded_bids: {
        payload: Prisma.$awarded_bidsPayload<ExtArgs>
        fields: Prisma.awarded_bidsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.awarded_bidsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$awarded_bidsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.awarded_bidsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$awarded_bidsPayload>
          }
          findFirst: {
            args: Prisma.awarded_bidsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$awarded_bidsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.awarded_bidsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$awarded_bidsPayload>
          }
          findMany: {
            args: Prisma.awarded_bidsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$awarded_bidsPayload>[]
          }
          create: {
            args: Prisma.awarded_bidsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$awarded_bidsPayload>
          }
          createMany: {
            args: Prisma.awarded_bidsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.awarded_bidsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$awarded_bidsPayload>[]
          }
          delete: {
            args: Prisma.awarded_bidsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$awarded_bidsPayload>
          }
          update: {
            args: Prisma.awarded_bidsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$awarded_bidsPayload>
          }
          deleteMany: {
            args: Prisma.awarded_bidsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.awarded_bidsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.awarded_bidsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$awarded_bidsPayload>[]
          }
          upsert: {
            args: Prisma.awarded_bidsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$awarded_bidsPayload>
          }
          aggregate: {
            args: Prisma.Awarded_bidsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAwarded_bids>
          }
          groupBy: {
            args: Prisma.awarded_bidsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Awarded_bidsGroupByOutputType>[]
          }
          count: {
            args: Prisma.awarded_bidsCountArgs<ExtArgs>
            result: $Utils.Optional<Awarded_bidsCountAggregateOutputType> | number
          }
        }
      }
      invoice: {
        payload: Prisma.$invoicePayload<ExtArgs>
        fields: Prisma.invoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.invoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.invoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>
          }
          findFirst: {
            args: Prisma.invoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.invoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>
          }
          findMany: {
            args: Prisma.invoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>[]
          }
          create: {
            args: Prisma.invoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>
          }
          createMany: {
            args: Prisma.invoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.invoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>[]
          }
          delete: {
            args: Prisma.invoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>
          }
          update: {
            args: Prisma.invoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>
          }
          deleteMany: {
            args: Prisma.invoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.invoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.invoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>[]
          }
          upsert: {
            args: Prisma.invoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.invoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.invoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      email_notifications: {
        payload: Prisma.$email_notificationsPayload<ExtArgs>
        fields: Prisma.email_notificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.email_notificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_notificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.email_notificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_notificationsPayload>
          }
          findFirst: {
            args: Prisma.email_notificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_notificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.email_notificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_notificationsPayload>
          }
          findMany: {
            args: Prisma.email_notificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_notificationsPayload>[]
          }
          create: {
            args: Prisma.email_notificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_notificationsPayload>
          }
          createMany: {
            args: Prisma.email_notificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.email_notificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_notificationsPayload>[]
          }
          delete: {
            args: Prisma.email_notificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_notificationsPayload>
          }
          update: {
            args: Prisma.email_notificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_notificationsPayload>
          }
          deleteMany: {
            args: Prisma.email_notificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.email_notificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.email_notificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_notificationsPayload>[]
          }
          upsert: {
            args: Prisma.email_notificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_notificationsPayload>
          }
          aggregate: {
            args: Prisma.Email_notificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmail_notifications>
          }
          groupBy: {
            args: Prisma.email_notificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Email_notificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.email_notificationsCountArgs<ExtArgs>
            result: $Utils.Optional<Email_notificationsCountAggregateOutputType> | number
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
    users?: usersOmit
    verizon_files?: verizon_filesOmit
    uploaded_files?: uploaded_filesOmit
    lots?: lotsOmit
    bids?: bidsOmit
    awarded_bids?: awarded_bidsOmit
    invoice?: invoiceOmit
    email_notifications?: email_notificationsOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    verizon_files: number
    uploaded_files: number
    bids: number
    awarded_bids: number
    invoices: number
    email_notifications: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verizon_files?: boolean | UsersCountOutputTypeCountVerizon_filesArgs
    uploaded_files?: boolean | UsersCountOutputTypeCountUploaded_filesArgs
    bids?: boolean | UsersCountOutputTypeCountBidsArgs
    awarded_bids?: boolean | UsersCountOutputTypeCountAwarded_bidsArgs
    invoices?: boolean | UsersCountOutputTypeCountInvoicesArgs
    email_notifications?: boolean | UsersCountOutputTypeCountEmail_notificationsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountVerizon_filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: verizon_filesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUploaded_filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: uploaded_filesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bidsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAwarded_bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: awarded_bidsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoiceWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountEmail_notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: email_notificationsWhereInput
  }


  /**
   * Count Type Verizon_filesCountOutputType
   */

  export type Verizon_filesCountOutputType = {
    lots: number
  }

  export type Verizon_filesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lots?: boolean | Verizon_filesCountOutputTypeCountLotsArgs
  }

  // Custom InputTypes
  /**
   * Verizon_filesCountOutputType without action
   */
  export type Verizon_filesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verizon_filesCountOutputType
     */
    select?: Verizon_filesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Verizon_filesCountOutputType without action
   */
  export type Verizon_filesCountOutputTypeCountLotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lotsWhereInput
  }


  /**
   * Count Type LotsCountOutputType
   */

  export type LotsCountOutputType = {
    bids: number
    awarded_bids: number
  }

  export type LotsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bids?: boolean | LotsCountOutputTypeCountBidsArgs
    awarded_bids?: boolean | LotsCountOutputTypeCountAwarded_bidsArgs
  }

  // Custom InputTypes
  /**
   * LotsCountOutputType without action
   */
  export type LotsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotsCountOutputType
     */
    select?: LotsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LotsCountOutputType without action
   */
  export type LotsCountOutputTypeCountBidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bidsWhereInput
  }

  /**
   * LotsCountOutputType without action
   */
  export type LotsCountOutputTypeCountAwarded_bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: awarded_bidsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    bids_placed: number | null
    active_bids: number | null
    won_bids: number | null
  }

  export type UsersSumAggregateOutputType = {
    bids_placed: number | null
    active_bids: number | null
    won_bids: number | null
  }

  export type UsersMinAggregateOutputType = {
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

  export type UsersMaxAggregateOutputType = {
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

  export type UsersCountAggregateOutputType = {
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


  export type UsersAvgAggregateInputType = {
    bids_placed?: true
    active_bids?: true
    won_bids?: true
  }

  export type UsersSumAggregateInputType = {
    bids_placed?: true
    active_bids?: true
    won_bids?: true
  }

  export type UsersMinAggregateInputType = {
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

  export type UsersMaxAggregateInputType = {
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

  export type UsersCountAggregateInputType = {
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

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
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
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    verizon_files?: boolean | users$verizon_filesArgs<ExtArgs>
    uploaded_files?: boolean | users$uploaded_filesArgs<ExtArgs>
    bids?: boolean | users$bidsArgs<ExtArgs>
    awarded_bids?: boolean | users$awarded_bidsArgs<ExtArgs>
    invoices?: boolean | users$invoicesArgs<ExtArgs>
    email_notifications?: boolean | users$email_notificationsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
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

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "bids_placed" | "active_bids" | "won_bids" | "reset_token" | "reset_token_expiry" | "verification_code" | "code_expires_at" | "is_verified" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verizon_files?: boolean | users$verizon_filesArgs<ExtArgs>
    uploaded_files?: boolean | users$uploaded_filesArgs<ExtArgs>
    bids?: boolean | users$bidsArgs<ExtArgs>
    awarded_bids?: boolean | users$awarded_bidsArgs<ExtArgs>
    invoices?: boolean | users$invoicesArgs<ExtArgs>
    email_notifications?: boolean | users$email_notificationsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      verizon_files: Prisma.$verizon_filesPayload<ExtArgs>[]
      uploaded_files: Prisma.$uploaded_filesPayload<ExtArgs>[]
      bids: Prisma.$bidsPayload<ExtArgs>[]
      awarded_bids: Prisma.$awarded_bidsPayload<ExtArgs>[]
      invoices: Prisma.$invoicePayload<ExtArgs>[]
      email_notifications: Prisma.$email_notificationsPayload<ExtArgs>[]
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
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    verizon_files<T extends users$verizon_filesArgs<ExtArgs> = {}>(args?: Subset<T, users$verizon_filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verizon_filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    uploaded_files<T extends users$uploaded_filesArgs<ExtArgs> = {}>(args?: Subset<T, users$uploaded_filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$uploaded_filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bids<T extends users$bidsArgs<ExtArgs> = {}>(args?: Subset<T, users$bidsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bidsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    awarded_bids<T extends users$awarded_bidsArgs<ExtArgs> = {}>(args?: Subset<T, users$awarded_bidsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$awarded_bidsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invoices<T extends users$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, users$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    email_notifications<T extends users$email_notificationsArgs<ExtArgs> = {}>(args?: Subset<T, users$email_notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly bids_placed: FieldRef<"users", 'Int'>
    readonly active_bids: FieldRef<"users", 'Int'>
    readonly won_bids: FieldRef<"users", 'Int'>
    readonly reset_token: FieldRef<"users", 'String'>
    readonly reset_token_expiry: FieldRef<"users", 'DateTime'>
    readonly verification_code: FieldRef<"users", 'String'>
    readonly code_expires_at: FieldRef<"users", 'DateTime'>
    readonly is_verified: FieldRef<"users", 'Boolean'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.verizon_files
   */
  export type users$verizon_filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verizon_files
     */
    select?: verizon_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verizon_files
     */
    omit?: verizon_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verizon_filesInclude<ExtArgs> | null
    where?: verizon_filesWhereInput
    orderBy?: verizon_filesOrderByWithRelationInput | verizon_filesOrderByWithRelationInput[]
    cursor?: verizon_filesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Verizon_filesScalarFieldEnum | Verizon_filesScalarFieldEnum[]
  }

  /**
   * users.uploaded_files
   */
  export type users$uploaded_filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploaded_files
     */
    select?: uploaded_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploaded_files
     */
    omit?: uploaded_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploaded_filesInclude<ExtArgs> | null
    where?: uploaded_filesWhereInput
    orderBy?: uploaded_filesOrderByWithRelationInput | uploaded_filesOrderByWithRelationInput[]
    cursor?: uploaded_filesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Uploaded_filesScalarFieldEnum | Uploaded_filesScalarFieldEnum[]
  }

  /**
   * users.bids
   */
  export type users$bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bids
     */
    select?: bidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bids
     */
    omit?: bidsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bidsInclude<ExtArgs> | null
    where?: bidsWhereInput
    orderBy?: bidsOrderByWithRelationInput | bidsOrderByWithRelationInput[]
    cursor?: bidsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BidsScalarFieldEnum | BidsScalarFieldEnum[]
  }

  /**
   * users.awarded_bids
   */
  export type users$awarded_bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the awarded_bids
     */
    select?: awarded_bidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the awarded_bids
     */
    omit?: awarded_bidsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: awarded_bidsInclude<ExtArgs> | null
    where?: awarded_bidsWhereInput
    orderBy?: awarded_bidsOrderByWithRelationInput | awarded_bidsOrderByWithRelationInput[]
    cursor?: awarded_bidsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Awarded_bidsScalarFieldEnum | Awarded_bidsScalarFieldEnum[]
  }

  /**
   * users.invoices
   */
  export type users$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice
     */
    omit?: invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    where?: invoiceWhereInput
    orderBy?: invoiceOrderByWithRelationInput | invoiceOrderByWithRelationInput[]
    cursor?: invoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * users.email_notifications
   */
  export type users$email_notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_notifications
     */
    select?: email_notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_notifications
     */
    omit?: email_notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_notificationsInclude<ExtArgs> | null
    where?: email_notificationsWhereInput
    orderBy?: email_notificationsOrderByWithRelationInput | email_notificationsOrderByWithRelationInput[]
    cursor?: email_notificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Email_notificationsScalarFieldEnum | Email_notificationsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model verizon_files
   */

  export type AggregateVerizon_files = {
    _count: Verizon_filesCountAggregateOutputType | null
    _min: Verizon_filesMinAggregateOutputType | null
    _max: Verizon_filesMaxAggregateOutputType | null
  }

  export type Verizon_filesMinAggregateOutputType = {
    id: string | null
    file_name: string | null
    uploaded_by: string | null
    upload_time: Date | null
    cleaned: boolean | null
  }

  export type Verizon_filesMaxAggregateOutputType = {
    id: string | null
    file_name: string | null
    uploaded_by: string | null
    upload_time: Date | null
    cleaned: boolean | null
  }

  export type Verizon_filesCountAggregateOutputType = {
    id: number
    file_name: number
    uploaded_by: number
    upload_time: number
    cleaned: number
    _all: number
  }


  export type Verizon_filesMinAggregateInputType = {
    id?: true
    file_name?: true
    uploaded_by?: true
    upload_time?: true
    cleaned?: true
  }

  export type Verizon_filesMaxAggregateInputType = {
    id?: true
    file_name?: true
    uploaded_by?: true
    upload_time?: true
    cleaned?: true
  }

  export type Verizon_filesCountAggregateInputType = {
    id?: true
    file_name?: true
    uploaded_by?: true
    upload_time?: true
    cleaned?: true
    _all?: true
  }

  export type Verizon_filesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which verizon_files to aggregate.
     */
    where?: verizon_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verizon_files to fetch.
     */
    orderBy?: verizon_filesOrderByWithRelationInput | verizon_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: verizon_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verizon_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verizon_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned verizon_files
    **/
    _count?: true | Verizon_filesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Verizon_filesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Verizon_filesMaxAggregateInputType
  }

  export type GetVerizon_filesAggregateType<T extends Verizon_filesAggregateArgs> = {
        [P in keyof T & keyof AggregateVerizon_files]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerizon_files[P]>
      : GetScalarType<T[P], AggregateVerizon_files[P]>
  }




  export type verizon_filesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: verizon_filesWhereInput
    orderBy?: verizon_filesOrderByWithAggregationInput | verizon_filesOrderByWithAggregationInput[]
    by: Verizon_filesScalarFieldEnum[] | Verizon_filesScalarFieldEnum
    having?: verizon_filesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Verizon_filesCountAggregateInputType | true
    _min?: Verizon_filesMinAggregateInputType
    _max?: Verizon_filesMaxAggregateInputType
  }

  export type Verizon_filesGroupByOutputType = {
    id: string
    file_name: string
    uploaded_by: string
    upload_time: Date
    cleaned: boolean
    _count: Verizon_filesCountAggregateOutputType | null
    _min: Verizon_filesMinAggregateOutputType | null
    _max: Verizon_filesMaxAggregateOutputType | null
  }

  type GetVerizon_filesGroupByPayload<T extends verizon_filesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Verizon_filesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Verizon_filesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Verizon_filesGroupByOutputType[P]>
            : GetScalarType<T[P], Verizon_filesGroupByOutputType[P]>
        }
      >
    >


  export type verizon_filesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    file_name?: boolean
    uploaded_by?: boolean
    upload_time?: boolean
    cleaned?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    lots?: boolean | verizon_files$lotsArgs<ExtArgs>
    _count?: boolean | Verizon_filesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verizon_files"]>

  export type verizon_filesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    file_name?: boolean
    uploaded_by?: boolean
    upload_time?: boolean
    cleaned?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verizon_files"]>

  export type verizon_filesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    file_name?: boolean
    uploaded_by?: boolean
    upload_time?: boolean
    cleaned?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verizon_files"]>

  export type verizon_filesSelectScalar = {
    id?: boolean
    file_name?: boolean
    uploaded_by?: boolean
    upload_time?: boolean
    cleaned?: boolean
  }

  export type verizon_filesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "file_name" | "uploaded_by" | "upload_time" | "cleaned", ExtArgs["result"]["verizon_files"]>
  export type verizon_filesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    lots?: boolean | verizon_files$lotsArgs<ExtArgs>
    _count?: boolean | Verizon_filesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type verizon_filesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type verizon_filesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $verizon_filesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "verizon_files"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      lots: Prisma.$lotsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      file_name: string
      uploaded_by: string
      upload_time: Date
      cleaned: boolean
    }, ExtArgs["result"]["verizon_files"]>
    composites: {}
  }

  type verizon_filesGetPayload<S extends boolean | null | undefined | verizon_filesDefaultArgs> = $Result.GetResult<Prisma.$verizon_filesPayload, S>

  type verizon_filesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<verizon_filesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Verizon_filesCountAggregateInputType | true
    }

  export interface verizon_filesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['verizon_files'], meta: { name: 'verizon_files' } }
    /**
     * Find zero or one Verizon_files that matches the filter.
     * @param {verizon_filesFindUniqueArgs} args - Arguments to find a Verizon_files
     * @example
     * // Get one Verizon_files
     * const verizon_files = await prisma.verizon_files.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends verizon_filesFindUniqueArgs>(args: SelectSubset<T, verizon_filesFindUniqueArgs<ExtArgs>>): Prisma__verizon_filesClient<$Result.GetResult<Prisma.$verizon_filesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verizon_files that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {verizon_filesFindUniqueOrThrowArgs} args - Arguments to find a Verizon_files
     * @example
     * // Get one Verizon_files
     * const verizon_files = await prisma.verizon_files.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends verizon_filesFindUniqueOrThrowArgs>(args: SelectSubset<T, verizon_filesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__verizon_filesClient<$Result.GetResult<Prisma.$verizon_filesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verizon_files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verizon_filesFindFirstArgs} args - Arguments to find a Verizon_files
     * @example
     * // Get one Verizon_files
     * const verizon_files = await prisma.verizon_files.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends verizon_filesFindFirstArgs>(args?: SelectSubset<T, verizon_filesFindFirstArgs<ExtArgs>>): Prisma__verizon_filesClient<$Result.GetResult<Prisma.$verizon_filesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verizon_files that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verizon_filesFindFirstOrThrowArgs} args - Arguments to find a Verizon_files
     * @example
     * // Get one Verizon_files
     * const verizon_files = await prisma.verizon_files.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends verizon_filesFindFirstOrThrowArgs>(args?: SelectSubset<T, verizon_filesFindFirstOrThrowArgs<ExtArgs>>): Prisma__verizon_filesClient<$Result.GetResult<Prisma.$verizon_filesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verizon_files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verizon_filesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verizon_files
     * const verizon_files = await prisma.verizon_files.findMany()
     * 
     * // Get first 10 Verizon_files
     * const verizon_files = await prisma.verizon_files.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verizon_filesWithIdOnly = await prisma.verizon_files.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends verizon_filesFindManyArgs>(args?: SelectSubset<T, verizon_filesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verizon_filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verizon_files.
     * @param {verizon_filesCreateArgs} args - Arguments to create a Verizon_files.
     * @example
     * // Create one Verizon_files
     * const Verizon_files = await prisma.verizon_files.create({
     *   data: {
     *     // ... data to create a Verizon_files
     *   }
     * })
     * 
     */
    create<T extends verizon_filesCreateArgs>(args: SelectSubset<T, verizon_filesCreateArgs<ExtArgs>>): Prisma__verizon_filesClient<$Result.GetResult<Prisma.$verizon_filesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verizon_files.
     * @param {verizon_filesCreateManyArgs} args - Arguments to create many Verizon_files.
     * @example
     * // Create many Verizon_files
     * const verizon_files = await prisma.verizon_files.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends verizon_filesCreateManyArgs>(args?: SelectSubset<T, verizon_filesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verizon_files and returns the data saved in the database.
     * @param {verizon_filesCreateManyAndReturnArgs} args - Arguments to create many Verizon_files.
     * @example
     * // Create many Verizon_files
     * const verizon_files = await prisma.verizon_files.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verizon_files and only return the `id`
     * const verizon_filesWithIdOnly = await prisma.verizon_files.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends verizon_filesCreateManyAndReturnArgs>(args?: SelectSubset<T, verizon_filesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verizon_filesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verizon_files.
     * @param {verizon_filesDeleteArgs} args - Arguments to delete one Verizon_files.
     * @example
     * // Delete one Verizon_files
     * const Verizon_files = await prisma.verizon_files.delete({
     *   where: {
     *     // ... filter to delete one Verizon_files
     *   }
     * })
     * 
     */
    delete<T extends verizon_filesDeleteArgs>(args: SelectSubset<T, verizon_filesDeleteArgs<ExtArgs>>): Prisma__verizon_filesClient<$Result.GetResult<Prisma.$verizon_filesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verizon_files.
     * @param {verizon_filesUpdateArgs} args - Arguments to update one Verizon_files.
     * @example
     * // Update one Verizon_files
     * const verizon_files = await prisma.verizon_files.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends verizon_filesUpdateArgs>(args: SelectSubset<T, verizon_filesUpdateArgs<ExtArgs>>): Prisma__verizon_filesClient<$Result.GetResult<Prisma.$verizon_filesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verizon_files.
     * @param {verizon_filesDeleteManyArgs} args - Arguments to filter Verizon_files to delete.
     * @example
     * // Delete a few Verizon_files
     * const { count } = await prisma.verizon_files.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends verizon_filesDeleteManyArgs>(args?: SelectSubset<T, verizon_filesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verizon_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verizon_filesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verizon_files
     * const verizon_files = await prisma.verizon_files.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends verizon_filesUpdateManyArgs>(args: SelectSubset<T, verizon_filesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verizon_files and returns the data updated in the database.
     * @param {verizon_filesUpdateManyAndReturnArgs} args - Arguments to update many Verizon_files.
     * @example
     * // Update many Verizon_files
     * const verizon_files = await prisma.verizon_files.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verizon_files and only return the `id`
     * const verizon_filesWithIdOnly = await prisma.verizon_files.updateManyAndReturn({
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
    updateManyAndReturn<T extends verizon_filesUpdateManyAndReturnArgs>(args: SelectSubset<T, verizon_filesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verizon_filesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verizon_files.
     * @param {verizon_filesUpsertArgs} args - Arguments to update or create a Verizon_files.
     * @example
     * // Update or create a Verizon_files
     * const verizon_files = await prisma.verizon_files.upsert({
     *   create: {
     *     // ... data to create a Verizon_files
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verizon_files we want to update
     *   }
     * })
     */
    upsert<T extends verizon_filesUpsertArgs>(args: SelectSubset<T, verizon_filesUpsertArgs<ExtArgs>>): Prisma__verizon_filesClient<$Result.GetResult<Prisma.$verizon_filesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verizon_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verizon_filesCountArgs} args - Arguments to filter Verizon_files to count.
     * @example
     * // Count the number of Verizon_files
     * const count = await prisma.verizon_files.count({
     *   where: {
     *     // ... the filter for the Verizon_files we want to count
     *   }
     * })
    **/
    count<T extends verizon_filesCountArgs>(
      args?: Subset<T, verizon_filesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Verizon_filesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verizon_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Verizon_filesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Verizon_filesAggregateArgs>(args: Subset<T, Verizon_filesAggregateArgs>): Prisma.PrismaPromise<GetVerizon_filesAggregateType<T>>

    /**
     * Group by Verizon_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verizon_filesGroupByArgs} args - Group by arguments.
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
      T extends verizon_filesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: verizon_filesGroupByArgs['orderBy'] }
        : { orderBy?: verizon_filesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, verizon_filesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerizon_filesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the verizon_files model
   */
  readonly fields: verizon_filesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for verizon_files.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__verizon_filesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lots<T extends verizon_files$lotsArgs<ExtArgs> = {}>(args?: Subset<T, verizon_files$lotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lotsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the verizon_files model
   */
  interface verizon_filesFieldRefs {
    readonly id: FieldRef<"verizon_files", 'String'>
    readonly file_name: FieldRef<"verizon_files", 'String'>
    readonly uploaded_by: FieldRef<"verizon_files", 'String'>
    readonly upload_time: FieldRef<"verizon_files", 'DateTime'>
    readonly cleaned: FieldRef<"verizon_files", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * verizon_files findUnique
   */
  export type verizon_filesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verizon_files
     */
    select?: verizon_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verizon_files
     */
    omit?: verizon_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verizon_filesInclude<ExtArgs> | null
    /**
     * Filter, which verizon_files to fetch.
     */
    where: verizon_filesWhereUniqueInput
  }

  /**
   * verizon_files findUniqueOrThrow
   */
  export type verizon_filesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verizon_files
     */
    select?: verizon_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verizon_files
     */
    omit?: verizon_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verizon_filesInclude<ExtArgs> | null
    /**
     * Filter, which verizon_files to fetch.
     */
    where: verizon_filesWhereUniqueInput
  }

  /**
   * verizon_files findFirst
   */
  export type verizon_filesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verizon_files
     */
    select?: verizon_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verizon_files
     */
    omit?: verizon_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verizon_filesInclude<ExtArgs> | null
    /**
     * Filter, which verizon_files to fetch.
     */
    where?: verizon_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verizon_files to fetch.
     */
    orderBy?: verizon_filesOrderByWithRelationInput | verizon_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verizon_files.
     */
    cursor?: verizon_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verizon_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verizon_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verizon_files.
     */
    distinct?: Verizon_filesScalarFieldEnum | Verizon_filesScalarFieldEnum[]
  }

  /**
   * verizon_files findFirstOrThrow
   */
  export type verizon_filesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verizon_files
     */
    select?: verizon_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verizon_files
     */
    omit?: verizon_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verizon_filesInclude<ExtArgs> | null
    /**
     * Filter, which verizon_files to fetch.
     */
    where?: verizon_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verizon_files to fetch.
     */
    orderBy?: verizon_filesOrderByWithRelationInput | verizon_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verizon_files.
     */
    cursor?: verizon_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verizon_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verizon_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verizon_files.
     */
    distinct?: Verizon_filesScalarFieldEnum | Verizon_filesScalarFieldEnum[]
  }

  /**
   * verizon_files findMany
   */
  export type verizon_filesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verizon_files
     */
    select?: verizon_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verizon_files
     */
    omit?: verizon_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verizon_filesInclude<ExtArgs> | null
    /**
     * Filter, which verizon_files to fetch.
     */
    where?: verizon_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verizon_files to fetch.
     */
    orderBy?: verizon_filesOrderByWithRelationInput | verizon_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing verizon_files.
     */
    cursor?: verizon_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verizon_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verizon_files.
     */
    skip?: number
    distinct?: Verizon_filesScalarFieldEnum | Verizon_filesScalarFieldEnum[]
  }

  /**
   * verizon_files create
   */
  export type verizon_filesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verizon_files
     */
    select?: verizon_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verizon_files
     */
    omit?: verizon_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verizon_filesInclude<ExtArgs> | null
    /**
     * The data needed to create a verizon_files.
     */
    data: XOR<verizon_filesCreateInput, verizon_filesUncheckedCreateInput>
  }

  /**
   * verizon_files createMany
   */
  export type verizon_filesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many verizon_files.
     */
    data: verizon_filesCreateManyInput | verizon_filesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * verizon_files createManyAndReturn
   */
  export type verizon_filesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verizon_files
     */
    select?: verizon_filesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the verizon_files
     */
    omit?: verizon_filesOmit<ExtArgs> | null
    /**
     * The data used to create many verizon_files.
     */
    data: verizon_filesCreateManyInput | verizon_filesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verizon_filesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * verizon_files update
   */
  export type verizon_filesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verizon_files
     */
    select?: verizon_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verizon_files
     */
    omit?: verizon_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verizon_filesInclude<ExtArgs> | null
    /**
     * The data needed to update a verizon_files.
     */
    data: XOR<verizon_filesUpdateInput, verizon_filesUncheckedUpdateInput>
    /**
     * Choose, which verizon_files to update.
     */
    where: verizon_filesWhereUniqueInput
  }

  /**
   * verizon_files updateMany
   */
  export type verizon_filesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update verizon_files.
     */
    data: XOR<verizon_filesUpdateManyMutationInput, verizon_filesUncheckedUpdateManyInput>
    /**
     * Filter which verizon_files to update
     */
    where?: verizon_filesWhereInput
    /**
     * Limit how many verizon_files to update.
     */
    limit?: number
  }

  /**
   * verizon_files updateManyAndReturn
   */
  export type verizon_filesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verizon_files
     */
    select?: verizon_filesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the verizon_files
     */
    omit?: verizon_filesOmit<ExtArgs> | null
    /**
     * The data used to update verizon_files.
     */
    data: XOR<verizon_filesUpdateManyMutationInput, verizon_filesUncheckedUpdateManyInput>
    /**
     * Filter which verizon_files to update
     */
    where?: verizon_filesWhereInput
    /**
     * Limit how many verizon_files to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verizon_filesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * verizon_files upsert
   */
  export type verizon_filesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verizon_files
     */
    select?: verizon_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verizon_files
     */
    omit?: verizon_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verizon_filesInclude<ExtArgs> | null
    /**
     * The filter to search for the verizon_files to update in case it exists.
     */
    where: verizon_filesWhereUniqueInput
    /**
     * In case the verizon_files found by the `where` argument doesn't exist, create a new verizon_files with this data.
     */
    create: XOR<verizon_filesCreateInput, verizon_filesUncheckedCreateInput>
    /**
     * In case the verizon_files was found with the provided `where` argument, update it with this data.
     */
    update: XOR<verizon_filesUpdateInput, verizon_filesUncheckedUpdateInput>
  }

  /**
   * verizon_files delete
   */
  export type verizon_filesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verizon_files
     */
    select?: verizon_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verizon_files
     */
    omit?: verizon_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verizon_filesInclude<ExtArgs> | null
    /**
     * Filter which verizon_files to delete.
     */
    where: verizon_filesWhereUniqueInput
  }

  /**
   * verizon_files deleteMany
   */
  export type verizon_filesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which verizon_files to delete
     */
    where?: verizon_filesWhereInput
    /**
     * Limit how many verizon_files to delete.
     */
    limit?: number
  }

  /**
   * verizon_files.lots
   */
  export type verizon_files$lotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lots
     */
    select?: lotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lots
     */
    omit?: lotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lotsInclude<ExtArgs> | null
    where?: lotsWhereInput
    orderBy?: lotsOrderByWithRelationInput | lotsOrderByWithRelationInput[]
    cursor?: lotsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LotsScalarFieldEnum | LotsScalarFieldEnum[]
  }

  /**
   * verizon_files without action
   */
  export type verizon_filesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verizon_files
     */
    select?: verizon_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verizon_files
     */
    omit?: verizon_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verizon_filesInclude<ExtArgs> | null
  }


  /**
   * Model uploaded_files
   */

  export type AggregateUploaded_files = {
    _count: Uploaded_filesCountAggregateOutputType | null
    _min: Uploaded_filesMinAggregateOutputType | null
    _max: Uploaded_filesMaxAggregateOutputType | null
  }

  export type Uploaded_filesMinAggregateOutputType = {
    id: string | null
    filename: string | null
    processed_name: string | null
    user_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Uploaded_filesMaxAggregateOutputType = {
    id: string | null
    filename: string | null
    processed_name: string | null
    user_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Uploaded_filesCountAggregateOutputType = {
    id: number
    filename: number
    processed_name: number
    user_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Uploaded_filesMinAggregateInputType = {
    id?: true
    filename?: true
    processed_name?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Uploaded_filesMaxAggregateInputType = {
    id?: true
    filename?: true
    processed_name?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Uploaded_filesCountAggregateInputType = {
    id?: true
    filename?: true
    processed_name?: true
    user_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Uploaded_filesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which uploaded_files to aggregate.
     */
    where?: uploaded_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uploaded_files to fetch.
     */
    orderBy?: uploaded_filesOrderByWithRelationInput | uploaded_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: uploaded_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uploaded_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uploaded_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned uploaded_files
    **/
    _count?: true | Uploaded_filesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Uploaded_filesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Uploaded_filesMaxAggregateInputType
  }

  export type GetUploaded_filesAggregateType<T extends Uploaded_filesAggregateArgs> = {
        [P in keyof T & keyof AggregateUploaded_files]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUploaded_files[P]>
      : GetScalarType<T[P], AggregateUploaded_files[P]>
  }




  export type uploaded_filesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: uploaded_filesWhereInput
    orderBy?: uploaded_filesOrderByWithAggregationInput | uploaded_filesOrderByWithAggregationInput[]
    by: Uploaded_filesScalarFieldEnum[] | Uploaded_filesScalarFieldEnum
    having?: uploaded_filesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Uploaded_filesCountAggregateInputType | true
    _min?: Uploaded_filesMinAggregateInputType
    _max?: Uploaded_filesMaxAggregateInputType
  }

  export type Uploaded_filesGroupByOutputType = {
    id: string
    filename: string
    processed_name: string | null
    user_id: string
    created_at: Date
    updated_at: Date
    _count: Uploaded_filesCountAggregateOutputType | null
    _min: Uploaded_filesMinAggregateOutputType | null
    _max: Uploaded_filesMaxAggregateOutputType | null
  }

  type GetUploaded_filesGroupByPayload<T extends uploaded_filesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Uploaded_filesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Uploaded_filesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Uploaded_filesGroupByOutputType[P]>
            : GetScalarType<T[P], Uploaded_filesGroupByOutputType[P]>
        }
      >
    >


  export type uploaded_filesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    processed_name?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uploaded_files"]>

  export type uploaded_filesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    processed_name?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uploaded_files"]>

  export type uploaded_filesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    processed_name?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uploaded_files"]>

  export type uploaded_filesSelectScalar = {
    id?: boolean
    filename?: boolean
    processed_name?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type uploaded_filesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "filename" | "processed_name" | "user_id" | "created_at" | "updated_at", ExtArgs["result"]["uploaded_files"]>
  export type uploaded_filesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type uploaded_filesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type uploaded_filesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $uploaded_filesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "uploaded_files"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      filename: string
      processed_name: string | null
      user_id: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["uploaded_files"]>
    composites: {}
  }

  type uploaded_filesGetPayload<S extends boolean | null | undefined | uploaded_filesDefaultArgs> = $Result.GetResult<Prisma.$uploaded_filesPayload, S>

  type uploaded_filesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<uploaded_filesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Uploaded_filesCountAggregateInputType | true
    }

  export interface uploaded_filesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['uploaded_files'], meta: { name: 'uploaded_files' } }
    /**
     * Find zero or one Uploaded_files that matches the filter.
     * @param {uploaded_filesFindUniqueArgs} args - Arguments to find a Uploaded_files
     * @example
     * // Get one Uploaded_files
     * const uploaded_files = await prisma.uploaded_files.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends uploaded_filesFindUniqueArgs>(args: SelectSubset<T, uploaded_filesFindUniqueArgs<ExtArgs>>): Prisma__uploaded_filesClient<$Result.GetResult<Prisma.$uploaded_filesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Uploaded_files that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {uploaded_filesFindUniqueOrThrowArgs} args - Arguments to find a Uploaded_files
     * @example
     * // Get one Uploaded_files
     * const uploaded_files = await prisma.uploaded_files.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends uploaded_filesFindUniqueOrThrowArgs>(args: SelectSubset<T, uploaded_filesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__uploaded_filesClient<$Result.GetResult<Prisma.$uploaded_filesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Uploaded_files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uploaded_filesFindFirstArgs} args - Arguments to find a Uploaded_files
     * @example
     * // Get one Uploaded_files
     * const uploaded_files = await prisma.uploaded_files.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends uploaded_filesFindFirstArgs>(args?: SelectSubset<T, uploaded_filesFindFirstArgs<ExtArgs>>): Prisma__uploaded_filesClient<$Result.GetResult<Prisma.$uploaded_filesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Uploaded_files that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uploaded_filesFindFirstOrThrowArgs} args - Arguments to find a Uploaded_files
     * @example
     * // Get one Uploaded_files
     * const uploaded_files = await prisma.uploaded_files.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends uploaded_filesFindFirstOrThrowArgs>(args?: SelectSubset<T, uploaded_filesFindFirstOrThrowArgs<ExtArgs>>): Prisma__uploaded_filesClient<$Result.GetResult<Prisma.$uploaded_filesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Uploaded_files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uploaded_filesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Uploaded_files
     * const uploaded_files = await prisma.uploaded_files.findMany()
     * 
     * // Get first 10 Uploaded_files
     * const uploaded_files = await prisma.uploaded_files.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uploaded_filesWithIdOnly = await prisma.uploaded_files.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends uploaded_filesFindManyArgs>(args?: SelectSubset<T, uploaded_filesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$uploaded_filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Uploaded_files.
     * @param {uploaded_filesCreateArgs} args - Arguments to create a Uploaded_files.
     * @example
     * // Create one Uploaded_files
     * const Uploaded_files = await prisma.uploaded_files.create({
     *   data: {
     *     // ... data to create a Uploaded_files
     *   }
     * })
     * 
     */
    create<T extends uploaded_filesCreateArgs>(args: SelectSubset<T, uploaded_filesCreateArgs<ExtArgs>>): Prisma__uploaded_filesClient<$Result.GetResult<Prisma.$uploaded_filesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Uploaded_files.
     * @param {uploaded_filesCreateManyArgs} args - Arguments to create many Uploaded_files.
     * @example
     * // Create many Uploaded_files
     * const uploaded_files = await prisma.uploaded_files.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends uploaded_filesCreateManyArgs>(args?: SelectSubset<T, uploaded_filesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Uploaded_files and returns the data saved in the database.
     * @param {uploaded_filesCreateManyAndReturnArgs} args - Arguments to create many Uploaded_files.
     * @example
     * // Create many Uploaded_files
     * const uploaded_files = await prisma.uploaded_files.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Uploaded_files and only return the `id`
     * const uploaded_filesWithIdOnly = await prisma.uploaded_files.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends uploaded_filesCreateManyAndReturnArgs>(args?: SelectSubset<T, uploaded_filesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$uploaded_filesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Uploaded_files.
     * @param {uploaded_filesDeleteArgs} args - Arguments to delete one Uploaded_files.
     * @example
     * // Delete one Uploaded_files
     * const Uploaded_files = await prisma.uploaded_files.delete({
     *   where: {
     *     // ... filter to delete one Uploaded_files
     *   }
     * })
     * 
     */
    delete<T extends uploaded_filesDeleteArgs>(args: SelectSubset<T, uploaded_filesDeleteArgs<ExtArgs>>): Prisma__uploaded_filesClient<$Result.GetResult<Prisma.$uploaded_filesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Uploaded_files.
     * @param {uploaded_filesUpdateArgs} args - Arguments to update one Uploaded_files.
     * @example
     * // Update one Uploaded_files
     * const uploaded_files = await prisma.uploaded_files.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends uploaded_filesUpdateArgs>(args: SelectSubset<T, uploaded_filesUpdateArgs<ExtArgs>>): Prisma__uploaded_filesClient<$Result.GetResult<Prisma.$uploaded_filesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Uploaded_files.
     * @param {uploaded_filesDeleteManyArgs} args - Arguments to filter Uploaded_files to delete.
     * @example
     * // Delete a few Uploaded_files
     * const { count } = await prisma.uploaded_files.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends uploaded_filesDeleteManyArgs>(args?: SelectSubset<T, uploaded_filesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Uploaded_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uploaded_filesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Uploaded_files
     * const uploaded_files = await prisma.uploaded_files.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends uploaded_filesUpdateManyArgs>(args: SelectSubset<T, uploaded_filesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Uploaded_files and returns the data updated in the database.
     * @param {uploaded_filesUpdateManyAndReturnArgs} args - Arguments to update many Uploaded_files.
     * @example
     * // Update many Uploaded_files
     * const uploaded_files = await prisma.uploaded_files.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Uploaded_files and only return the `id`
     * const uploaded_filesWithIdOnly = await prisma.uploaded_files.updateManyAndReturn({
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
    updateManyAndReturn<T extends uploaded_filesUpdateManyAndReturnArgs>(args: SelectSubset<T, uploaded_filesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$uploaded_filesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Uploaded_files.
     * @param {uploaded_filesUpsertArgs} args - Arguments to update or create a Uploaded_files.
     * @example
     * // Update or create a Uploaded_files
     * const uploaded_files = await prisma.uploaded_files.upsert({
     *   create: {
     *     // ... data to create a Uploaded_files
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Uploaded_files we want to update
     *   }
     * })
     */
    upsert<T extends uploaded_filesUpsertArgs>(args: SelectSubset<T, uploaded_filesUpsertArgs<ExtArgs>>): Prisma__uploaded_filesClient<$Result.GetResult<Prisma.$uploaded_filesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Uploaded_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uploaded_filesCountArgs} args - Arguments to filter Uploaded_files to count.
     * @example
     * // Count the number of Uploaded_files
     * const count = await prisma.uploaded_files.count({
     *   where: {
     *     // ... the filter for the Uploaded_files we want to count
     *   }
     * })
    **/
    count<T extends uploaded_filesCountArgs>(
      args?: Subset<T, uploaded_filesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Uploaded_filesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Uploaded_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Uploaded_filesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Uploaded_filesAggregateArgs>(args: Subset<T, Uploaded_filesAggregateArgs>): Prisma.PrismaPromise<GetUploaded_filesAggregateType<T>>

    /**
     * Group by Uploaded_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uploaded_filesGroupByArgs} args - Group by arguments.
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
      T extends uploaded_filesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: uploaded_filesGroupByArgs['orderBy'] }
        : { orderBy?: uploaded_filesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, uploaded_filesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUploaded_filesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the uploaded_files model
   */
  readonly fields: uploaded_filesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for uploaded_files.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__uploaded_filesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the uploaded_files model
   */
  interface uploaded_filesFieldRefs {
    readonly id: FieldRef<"uploaded_files", 'String'>
    readonly filename: FieldRef<"uploaded_files", 'String'>
    readonly processed_name: FieldRef<"uploaded_files", 'String'>
    readonly user_id: FieldRef<"uploaded_files", 'String'>
    readonly created_at: FieldRef<"uploaded_files", 'DateTime'>
    readonly updated_at: FieldRef<"uploaded_files", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * uploaded_files findUnique
   */
  export type uploaded_filesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploaded_files
     */
    select?: uploaded_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploaded_files
     */
    omit?: uploaded_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploaded_filesInclude<ExtArgs> | null
    /**
     * Filter, which uploaded_files to fetch.
     */
    where: uploaded_filesWhereUniqueInput
  }

  /**
   * uploaded_files findUniqueOrThrow
   */
  export type uploaded_filesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploaded_files
     */
    select?: uploaded_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploaded_files
     */
    omit?: uploaded_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploaded_filesInclude<ExtArgs> | null
    /**
     * Filter, which uploaded_files to fetch.
     */
    where: uploaded_filesWhereUniqueInput
  }

  /**
   * uploaded_files findFirst
   */
  export type uploaded_filesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploaded_files
     */
    select?: uploaded_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploaded_files
     */
    omit?: uploaded_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploaded_filesInclude<ExtArgs> | null
    /**
     * Filter, which uploaded_files to fetch.
     */
    where?: uploaded_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uploaded_files to fetch.
     */
    orderBy?: uploaded_filesOrderByWithRelationInput | uploaded_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for uploaded_files.
     */
    cursor?: uploaded_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uploaded_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uploaded_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of uploaded_files.
     */
    distinct?: Uploaded_filesScalarFieldEnum | Uploaded_filesScalarFieldEnum[]
  }

  /**
   * uploaded_files findFirstOrThrow
   */
  export type uploaded_filesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploaded_files
     */
    select?: uploaded_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploaded_files
     */
    omit?: uploaded_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploaded_filesInclude<ExtArgs> | null
    /**
     * Filter, which uploaded_files to fetch.
     */
    where?: uploaded_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uploaded_files to fetch.
     */
    orderBy?: uploaded_filesOrderByWithRelationInput | uploaded_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for uploaded_files.
     */
    cursor?: uploaded_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uploaded_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uploaded_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of uploaded_files.
     */
    distinct?: Uploaded_filesScalarFieldEnum | Uploaded_filesScalarFieldEnum[]
  }

  /**
   * uploaded_files findMany
   */
  export type uploaded_filesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploaded_files
     */
    select?: uploaded_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploaded_files
     */
    omit?: uploaded_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploaded_filesInclude<ExtArgs> | null
    /**
     * Filter, which uploaded_files to fetch.
     */
    where?: uploaded_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uploaded_files to fetch.
     */
    orderBy?: uploaded_filesOrderByWithRelationInput | uploaded_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing uploaded_files.
     */
    cursor?: uploaded_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uploaded_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uploaded_files.
     */
    skip?: number
    distinct?: Uploaded_filesScalarFieldEnum | Uploaded_filesScalarFieldEnum[]
  }

  /**
   * uploaded_files create
   */
  export type uploaded_filesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploaded_files
     */
    select?: uploaded_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploaded_files
     */
    omit?: uploaded_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploaded_filesInclude<ExtArgs> | null
    /**
     * The data needed to create a uploaded_files.
     */
    data: XOR<uploaded_filesCreateInput, uploaded_filesUncheckedCreateInput>
  }

  /**
   * uploaded_files createMany
   */
  export type uploaded_filesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many uploaded_files.
     */
    data: uploaded_filesCreateManyInput | uploaded_filesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * uploaded_files createManyAndReturn
   */
  export type uploaded_filesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploaded_files
     */
    select?: uploaded_filesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the uploaded_files
     */
    omit?: uploaded_filesOmit<ExtArgs> | null
    /**
     * The data used to create many uploaded_files.
     */
    data: uploaded_filesCreateManyInput | uploaded_filesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploaded_filesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * uploaded_files update
   */
  export type uploaded_filesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploaded_files
     */
    select?: uploaded_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploaded_files
     */
    omit?: uploaded_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploaded_filesInclude<ExtArgs> | null
    /**
     * The data needed to update a uploaded_files.
     */
    data: XOR<uploaded_filesUpdateInput, uploaded_filesUncheckedUpdateInput>
    /**
     * Choose, which uploaded_files to update.
     */
    where: uploaded_filesWhereUniqueInput
  }

  /**
   * uploaded_files updateMany
   */
  export type uploaded_filesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update uploaded_files.
     */
    data: XOR<uploaded_filesUpdateManyMutationInput, uploaded_filesUncheckedUpdateManyInput>
    /**
     * Filter which uploaded_files to update
     */
    where?: uploaded_filesWhereInput
    /**
     * Limit how many uploaded_files to update.
     */
    limit?: number
  }

  /**
   * uploaded_files updateManyAndReturn
   */
  export type uploaded_filesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploaded_files
     */
    select?: uploaded_filesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the uploaded_files
     */
    omit?: uploaded_filesOmit<ExtArgs> | null
    /**
     * The data used to update uploaded_files.
     */
    data: XOR<uploaded_filesUpdateManyMutationInput, uploaded_filesUncheckedUpdateManyInput>
    /**
     * Filter which uploaded_files to update
     */
    where?: uploaded_filesWhereInput
    /**
     * Limit how many uploaded_files to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploaded_filesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * uploaded_files upsert
   */
  export type uploaded_filesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploaded_files
     */
    select?: uploaded_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploaded_files
     */
    omit?: uploaded_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploaded_filesInclude<ExtArgs> | null
    /**
     * The filter to search for the uploaded_files to update in case it exists.
     */
    where: uploaded_filesWhereUniqueInput
    /**
     * In case the uploaded_files found by the `where` argument doesn't exist, create a new uploaded_files with this data.
     */
    create: XOR<uploaded_filesCreateInput, uploaded_filesUncheckedCreateInput>
    /**
     * In case the uploaded_files was found with the provided `where` argument, update it with this data.
     */
    update: XOR<uploaded_filesUpdateInput, uploaded_filesUncheckedUpdateInput>
  }

  /**
   * uploaded_files delete
   */
  export type uploaded_filesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploaded_files
     */
    select?: uploaded_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploaded_files
     */
    omit?: uploaded_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploaded_filesInclude<ExtArgs> | null
    /**
     * Filter which uploaded_files to delete.
     */
    where: uploaded_filesWhereUniqueInput
  }

  /**
   * uploaded_files deleteMany
   */
  export type uploaded_filesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which uploaded_files to delete
     */
    where?: uploaded_filesWhereInput
    /**
     * Limit how many uploaded_files to delete.
     */
    limit?: number
  }

  /**
   * uploaded_files without action
   */
  export type uploaded_filesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploaded_files
     */
    select?: uploaded_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploaded_files
     */
    omit?: uploaded_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploaded_filesInclude<ExtArgs> | null
  }


  /**
   * Model lots
   */

  export type AggregateLots = {
    _count: LotsCountAggregateOutputType | null
    _avg: LotsAvgAggregateOutputType | null
    _sum: LotsSumAggregateOutputType | null
    _min: LotsMinAggregateOutputType | null
    _max: LotsMaxAggregateOutputType | null
  }

  export type LotsAvgAggregateOutputType = {
    quantity: number | null
    base_price: number | null
    commission_rate: number | null
    unit_awarded_price: number | null
  }

  export type LotsSumAggregateOutputType = {
    quantity: number | null
    base_price: number | null
    commission_rate: number | null
    unit_awarded_price: number | null
  }

  export type LotsMinAggregateOutputType = {
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

  export type LotsMaxAggregateOutputType = {
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

  export type LotsCountAggregateOutputType = {
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


  export type LotsAvgAggregateInputType = {
    quantity?: true
    base_price?: true
    commission_rate?: true
    unit_awarded_price?: true
  }

  export type LotsSumAggregateInputType = {
    quantity?: true
    base_price?: true
    commission_rate?: true
    unit_awarded_price?: true
  }

  export type LotsMinAggregateInputType = {
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

  export type LotsMaxAggregateInputType = {
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

  export type LotsCountAggregateInputType = {
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

  export type LotsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lots to aggregate.
     */
    where?: lotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lots to fetch.
     */
    orderBy?: lotsOrderByWithRelationInput | lotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lots
    **/
    _count?: true | LotsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LotsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LotsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LotsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LotsMaxAggregateInputType
  }

  export type GetLotsAggregateType<T extends LotsAggregateArgs> = {
        [P in keyof T & keyof AggregateLots]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLots[P]>
      : GetScalarType<T[P], AggregateLots[P]>
  }




  export type lotsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lotsWhereInput
    orderBy?: lotsOrderByWithAggregationInput | lotsOrderByWithAggregationInput[]
    by: LotsScalarFieldEnum[] | LotsScalarFieldEnum
    having?: lotsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LotsCountAggregateInputType | true
    _avg?: LotsAvgAggregateInputType
    _sum?: LotsSumAggregateInputType
    _min?: LotsMinAggregateInputType
    _max?: LotsMaxAggregateInputType
  }

  export type LotsGroupByOutputType = {
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
    _count: LotsCountAggregateOutputType | null
    _avg: LotsAvgAggregateOutputType | null
    _sum: LotsSumAggregateOutputType | null
    _min: LotsMinAggregateOutputType | null
    _max: LotsMaxAggregateOutputType | null
  }

  type GetLotsGroupByPayload<T extends lotsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LotsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LotsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LotsGroupByOutputType[P]>
            : GetScalarType<T[P], LotsGroupByOutputType[P]>
        }
      >
    >


  export type lotsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    verizon_file?: boolean | lots$verizon_fileArgs<ExtArgs>
    bids?: boolean | lots$bidsArgs<ExtArgs>
    awarded_bids?: boolean | lots$awarded_bidsArgs<ExtArgs>
    _count?: boolean | LotsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lots"]>

  export type lotsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    verizon_file?: boolean | lots$verizon_fileArgs<ExtArgs>
  }, ExtArgs["result"]["lots"]>

  export type lotsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    verizon_file?: boolean | lots$verizon_fileArgs<ExtArgs>
  }, ExtArgs["result"]["lots"]>

  export type lotsSelectScalar = {
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

  export type lotsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "verizon_file_id" | "lot_number" | "item_description" | "grade" | "quantity" | "base_price" | "commission_rate" | "oem" | "sku" | "prop65_warning" | "description" | "disposition" | "unit_awarded_price" | "available_from" | "available_to" | "created_at" | "updated_at", ExtArgs["result"]["lots"]>
  export type lotsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verizon_file?: boolean | lots$verizon_fileArgs<ExtArgs>
    bids?: boolean | lots$bidsArgs<ExtArgs>
    awarded_bids?: boolean | lots$awarded_bidsArgs<ExtArgs>
    _count?: boolean | LotsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type lotsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verizon_file?: boolean | lots$verizon_fileArgs<ExtArgs>
  }
  export type lotsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verizon_file?: boolean | lots$verizon_fileArgs<ExtArgs>
  }

  export type $lotsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lots"
    objects: {
      verizon_file: Prisma.$verizon_filesPayload<ExtArgs> | null
      bids: Prisma.$bidsPayload<ExtArgs>[]
      awarded_bids: Prisma.$awarded_bidsPayload<ExtArgs>[]
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
    }, ExtArgs["result"]["lots"]>
    composites: {}
  }

  type lotsGetPayload<S extends boolean | null | undefined | lotsDefaultArgs> = $Result.GetResult<Prisma.$lotsPayload, S>

  type lotsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<lotsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LotsCountAggregateInputType | true
    }

  export interface lotsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lots'], meta: { name: 'lots' } }
    /**
     * Find zero or one Lots that matches the filter.
     * @param {lotsFindUniqueArgs} args - Arguments to find a Lots
     * @example
     * // Get one Lots
     * const lots = await prisma.lots.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lotsFindUniqueArgs>(args: SelectSubset<T, lotsFindUniqueArgs<ExtArgs>>): Prisma__lotsClient<$Result.GetResult<Prisma.$lotsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lots that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {lotsFindUniqueOrThrowArgs} args - Arguments to find a Lots
     * @example
     * // Get one Lots
     * const lots = await prisma.lots.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lotsFindUniqueOrThrowArgs>(args: SelectSubset<T, lotsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__lotsClient<$Result.GetResult<Prisma.$lotsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lotsFindFirstArgs} args - Arguments to find a Lots
     * @example
     * // Get one Lots
     * const lots = await prisma.lots.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lotsFindFirstArgs>(args?: SelectSubset<T, lotsFindFirstArgs<ExtArgs>>): Prisma__lotsClient<$Result.GetResult<Prisma.$lotsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lots that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lotsFindFirstOrThrowArgs} args - Arguments to find a Lots
     * @example
     * // Get one Lots
     * const lots = await prisma.lots.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lotsFindFirstOrThrowArgs>(args?: SelectSubset<T, lotsFindFirstOrThrowArgs<ExtArgs>>): Prisma__lotsClient<$Result.GetResult<Prisma.$lotsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lotsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lots
     * const lots = await prisma.lots.findMany()
     * 
     * // Get first 10 Lots
     * const lots = await prisma.lots.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lotsWithIdOnly = await prisma.lots.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends lotsFindManyArgs>(args?: SelectSubset<T, lotsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lotsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lots.
     * @param {lotsCreateArgs} args - Arguments to create a Lots.
     * @example
     * // Create one Lots
     * const Lots = await prisma.lots.create({
     *   data: {
     *     // ... data to create a Lots
     *   }
     * })
     * 
     */
    create<T extends lotsCreateArgs>(args: SelectSubset<T, lotsCreateArgs<ExtArgs>>): Prisma__lotsClient<$Result.GetResult<Prisma.$lotsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lots.
     * @param {lotsCreateManyArgs} args - Arguments to create many Lots.
     * @example
     * // Create many Lots
     * const lots = await prisma.lots.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends lotsCreateManyArgs>(args?: SelectSubset<T, lotsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lots and returns the data saved in the database.
     * @param {lotsCreateManyAndReturnArgs} args - Arguments to create many Lots.
     * @example
     * // Create many Lots
     * const lots = await prisma.lots.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lots and only return the `id`
     * const lotsWithIdOnly = await prisma.lots.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends lotsCreateManyAndReturnArgs>(args?: SelectSubset<T, lotsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lotsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lots.
     * @param {lotsDeleteArgs} args - Arguments to delete one Lots.
     * @example
     * // Delete one Lots
     * const Lots = await prisma.lots.delete({
     *   where: {
     *     // ... filter to delete one Lots
     *   }
     * })
     * 
     */
    delete<T extends lotsDeleteArgs>(args: SelectSubset<T, lotsDeleteArgs<ExtArgs>>): Prisma__lotsClient<$Result.GetResult<Prisma.$lotsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lots.
     * @param {lotsUpdateArgs} args - Arguments to update one Lots.
     * @example
     * // Update one Lots
     * const lots = await prisma.lots.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends lotsUpdateArgs>(args: SelectSubset<T, lotsUpdateArgs<ExtArgs>>): Prisma__lotsClient<$Result.GetResult<Prisma.$lotsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lots.
     * @param {lotsDeleteManyArgs} args - Arguments to filter Lots to delete.
     * @example
     * // Delete a few Lots
     * const { count } = await prisma.lots.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends lotsDeleteManyArgs>(args?: SelectSubset<T, lotsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lotsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lots
     * const lots = await prisma.lots.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends lotsUpdateManyArgs>(args: SelectSubset<T, lotsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lots and returns the data updated in the database.
     * @param {lotsUpdateManyAndReturnArgs} args - Arguments to update many Lots.
     * @example
     * // Update many Lots
     * const lots = await prisma.lots.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lots and only return the `id`
     * const lotsWithIdOnly = await prisma.lots.updateManyAndReturn({
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
    updateManyAndReturn<T extends lotsUpdateManyAndReturnArgs>(args: SelectSubset<T, lotsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lotsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lots.
     * @param {lotsUpsertArgs} args - Arguments to update or create a Lots.
     * @example
     * // Update or create a Lots
     * const lots = await prisma.lots.upsert({
     *   create: {
     *     // ... data to create a Lots
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lots we want to update
     *   }
     * })
     */
    upsert<T extends lotsUpsertArgs>(args: SelectSubset<T, lotsUpsertArgs<ExtArgs>>): Prisma__lotsClient<$Result.GetResult<Prisma.$lotsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lotsCountArgs} args - Arguments to filter Lots to count.
     * @example
     * // Count the number of Lots
     * const count = await prisma.lots.count({
     *   where: {
     *     // ... the filter for the Lots we want to count
     *   }
     * })
    **/
    count<T extends lotsCountArgs>(
      args?: Subset<T, lotsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LotsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LotsAggregateArgs>(args: Subset<T, LotsAggregateArgs>): Prisma.PrismaPromise<GetLotsAggregateType<T>>

    /**
     * Group by Lots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lotsGroupByArgs} args - Group by arguments.
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
      T extends lotsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lotsGroupByArgs['orderBy'] }
        : { orderBy?: lotsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, lotsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLotsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lots model
   */
  readonly fields: lotsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lots.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lotsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    verizon_file<T extends lots$verizon_fileArgs<ExtArgs> = {}>(args?: Subset<T, lots$verizon_fileArgs<ExtArgs>>): Prisma__verizon_filesClient<$Result.GetResult<Prisma.$verizon_filesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bids<T extends lots$bidsArgs<ExtArgs> = {}>(args?: Subset<T, lots$bidsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bidsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    awarded_bids<T extends lots$awarded_bidsArgs<ExtArgs> = {}>(args?: Subset<T, lots$awarded_bidsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$awarded_bidsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the lots model
   */
  interface lotsFieldRefs {
    readonly id: FieldRef<"lots", 'String'>
    readonly verizon_file_id: FieldRef<"lots", 'String'>
    readonly lot_number: FieldRef<"lots", 'String'>
    readonly item_description: FieldRef<"lots", 'String'>
    readonly grade: FieldRef<"lots", 'String'>
    readonly quantity: FieldRef<"lots", 'Int'>
    readonly base_price: FieldRef<"lots", 'Float'>
    readonly commission_rate: FieldRef<"lots", 'Float'>
    readonly oem: FieldRef<"lots", 'String'>
    readonly sku: FieldRef<"lots", 'String'>
    readonly prop65_warning: FieldRef<"lots", 'String'>
    readonly description: FieldRef<"lots", 'String'>
    readonly disposition: FieldRef<"lots", 'String'>
    readonly unit_awarded_price: FieldRef<"lots", 'Float'>
    readonly available_from: FieldRef<"lots", 'DateTime'>
    readonly available_to: FieldRef<"lots", 'DateTime'>
    readonly created_at: FieldRef<"lots", 'DateTime'>
    readonly updated_at: FieldRef<"lots", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * lots findUnique
   */
  export type lotsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lots
     */
    select?: lotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lots
     */
    omit?: lotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lotsInclude<ExtArgs> | null
    /**
     * Filter, which lots to fetch.
     */
    where: lotsWhereUniqueInput
  }

  /**
   * lots findUniqueOrThrow
   */
  export type lotsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lots
     */
    select?: lotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lots
     */
    omit?: lotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lotsInclude<ExtArgs> | null
    /**
     * Filter, which lots to fetch.
     */
    where: lotsWhereUniqueInput
  }

  /**
   * lots findFirst
   */
  export type lotsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lots
     */
    select?: lotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lots
     */
    omit?: lotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lotsInclude<ExtArgs> | null
    /**
     * Filter, which lots to fetch.
     */
    where?: lotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lots to fetch.
     */
    orderBy?: lotsOrderByWithRelationInput | lotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lots.
     */
    cursor?: lotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lots.
     */
    distinct?: LotsScalarFieldEnum | LotsScalarFieldEnum[]
  }

  /**
   * lots findFirstOrThrow
   */
  export type lotsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lots
     */
    select?: lotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lots
     */
    omit?: lotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lotsInclude<ExtArgs> | null
    /**
     * Filter, which lots to fetch.
     */
    where?: lotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lots to fetch.
     */
    orderBy?: lotsOrderByWithRelationInput | lotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lots.
     */
    cursor?: lotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lots.
     */
    distinct?: LotsScalarFieldEnum | LotsScalarFieldEnum[]
  }

  /**
   * lots findMany
   */
  export type lotsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lots
     */
    select?: lotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lots
     */
    omit?: lotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lotsInclude<ExtArgs> | null
    /**
     * Filter, which lots to fetch.
     */
    where?: lotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lots to fetch.
     */
    orderBy?: lotsOrderByWithRelationInput | lotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lots.
     */
    cursor?: lotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lots.
     */
    skip?: number
    distinct?: LotsScalarFieldEnum | LotsScalarFieldEnum[]
  }

  /**
   * lots create
   */
  export type lotsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lots
     */
    select?: lotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lots
     */
    omit?: lotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lotsInclude<ExtArgs> | null
    /**
     * The data needed to create a lots.
     */
    data: XOR<lotsCreateInput, lotsUncheckedCreateInput>
  }

  /**
   * lots createMany
   */
  export type lotsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lots.
     */
    data: lotsCreateManyInput | lotsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lots createManyAndReturn
   */
  export type lotsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lots
     */
    select?: lotsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lots
     */
    omit?: lotsOmit<ExtArgs> | null
    /**
     * The data used to create many lots.
     */
    data: lotsCreateManyInput | lotsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lotsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * lots update
   */
  export type lotsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lots
     */
    select?: lotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lots
     */
    omit?: lotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lotsInclude<ExtArgs> | null
    /**
     * The data needed to update a lots.
     */
    data: XOR<lotsUpdateInput, lotsUncheckedUpdateInput>
    /**
     * Choose, which lots to update.
     */
    where: lotsWhereUniqueInput
  }

  /**
   * lots updateMany
   */
  export type lotsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lots.
     */
    data: XOR<lotsUpdateManyMutationInput, lotsUncheckedUpdateManyInput>
    /**
     * Filter which lots to update
     */
    where?: lotsWhereInput
    /**
     * Limit how many lots to update.
     */
    limit?: number
  }

  /**
   * lots updateManyAndReturn
   */
  export type lotsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lots
     */
    select?: lotsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lots
     */
    omit?: lotsOmit<ExtArgs> | null
    /**
     * The data used to update lots.
     */
    data: XOR<lotsUpdateManyMutationInput, lotsUncheckedUpdateManyInput>
    /**
     * Filter which lots to update
     */
    where?: lotsWhereInput
    /**
     * Limit how many lots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lotsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * lots upsert
   */
  export type lotsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lots
     */
    select?: lotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lots
     */
    omit?: lotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lotsInclude<ExtArgs> | null
    /**
     * The filter to search for the lots to update in case it exists.
     */
    where: lotsWhereUniqueInput
    /**
     * In case the lots found by the `where` argument doesn't exist, create a new lots with this data.
     */
    create: XOR<lotsCreateInput, lotsUncheckedCreateInput>
    /**
     * In case the lots was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lotsUpdateInput, lotsUncheckedUpdateInput>
  }

  /**
   * lots delete
   */
  export type lotsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lots
     */
    select?: lotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lots
     */
    omit?: lotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lotsInclude<ExtArgs> | null
    /**
     * Filter which lots to delete.
     */
    where: lotsWhereUniqueInput
  }

  /**
   * lots deleteMany
   */
  export type lotsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lots to delete
     */
    where?: lotsWhereInput
    /**
     * Limit how many lots to delete.
     */
    limit?: number
  }

  /**
   * lots.verizon_file
   */
  export type lots$verizon_fileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verizon_files
     */
    select?: verizon_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verizon_files
     */
    omit?: verizon_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verizon_filesInclude<ExtArgs> | null
    where?: verizon_filesWhereInput
  }

  /**
   * lots.bids
   */
  export type lots$bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bids
     */
    select?: bidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bids
     */
    omit?: bidsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bidsInclude<ExtArgs> | null
    where?: bidsWhereInput
    orderBy?: bidsOrderByWithRelationInput | bidsOrderByWithRelationInput[]
    cursor?: bidsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BidsScalarFieldEnum | BidsScalarFieldEnum[]
  }

  /**
   * lots.awarded_bids
   */
  export type lots$awarded_bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the awarded_bids
     */
    select?: awarded_bidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the awarded_bids
     */
    omit?: awarded_bidsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: awarded_bidsInclude<ExtArgs> | null
    where?: awarded_bidsWhereInput
    orderBy?: awarded_bidsOrderByWithRelationInput | awarded_bidsOrderByWithRelationInput[]
    cursor?: awarded_bidsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Awarded_bidsScalarFieldEnum | Awarded_bidsScalarFieldEnum[]
  }

  /**
   * lots without action
   */
  export type lotsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lots
     */
    select?: lotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lots
     */
    omit?: lotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lotsInclude<ExtArgs> | null
  }


  /**
   * Model bids
   */

  export type AggregateBids = {
    _count: BidsCountAggregateOutputType | null
    _avg: BidsAvgAggregateOutputType | null
    _sum: BidsSumAggregateOutputType | null
    _min: BidsMinAggregateOutputType | null
    _max: BidsMaxAggregateOutputType | null
  }

  export type BidsAvgAggregateOutputType = {
    bid_amount: number | null
  }

  export type BidsSumAggregateOutputType = {
    bid_amount: number | null
  }

  export type BidsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    lot_id: string | null
    bid_amount: number | null
    submitted_at: Date | null
    status: string | null
    bid_time: Date | null
  }

  export type BidsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    lot_id: string | null
    bid_amount: number | null
    submitted_at: Date | null
    status: string | null
    bid_time: Date | null
  }

  export type BidsCountAggregateOutputType = {
    id: number
    user_id: number
    lot_id: number
    bid_amount: number
    submitted_at: number
    status: number
    bid_time: number
    _all: number
  }


  export type BidsAvgAggregateInputType = {
    bid_amount?: true
  }

  export type BidsSumAggregateInputType = {
    bid_amount?: true
  }

  export type BidsMinAggregateInputType = {
    id?: true
    user_id?: true
    lot_id?: true
    bid_amount?: true
    submitted_at?: true
    status?: true
    bid_time?: true
  }

  export type BidsMaxAggregateInputType = {
    id?: true
    user_id?: true
    lot_id?: true
    bid_amount?: true
    submitted_at?: true
    status?: true
    bid_time?: true
  }

  export type BidsCountAggregateInputType = {
    id?: true
    user_id?: true
    lot_id?: true
    bid_amount?: true
    submitted_at?: true
    status?: true
    bid_time?: true
    _all?: true
  }

  export type BidsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bids to aggregate.
     */
    where?: bidsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bids to fetch.
     */
    orderBy?: bidsOrderByWithRelationInput | bidsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bidsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bids
    **/
    _count?: true | BidsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BidsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BidsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BidsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BidsMaxAggregateInputType
  }

  export type GetBidsAggregateType<T extends BidsAggregateArgs> = {
        [P in keyof T & keyof AggregateBids]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBids[P]>
      : GetScalarType<T[P], AggregateBids[P]>
  }




  export type bidsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bidsWhereInput
    orderBy?: bidsOrderByWithAggregationInput | bidsOrderByWithAggregationInput[]
    by: BidsScalarFieldEnum[] | BidsScalarFieldEnum
    having?: bidsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BidsCountAggregateInputType | true
    _avg?: BidsAvgAggregateInputType
    _sum?: BidsSumAggregateInputType
    _min?: BidsMinAggregateInputType
    _max?: BidsMaxAggregateInputType
  }

  export type BidsGroupByOutputType = {
    id: string
    user_id: string
    lot_id: string
    bid_amount: number
    submitted_at: Date
    status: string
    bid_time: Date | null
    _count: BidsCountAggregateOutputType | null
    _avg: BidsAvgAggregateOutputType | null
    _sum: BidsSumAggregateOutputType | null
    _min: BidsMinAggregateOutputType | null
    _max: BidsMaxAggregateOutputType | null
  }

  type GetBidsGroupByPayload<T extends bidsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BidsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BidsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BidsGroupByOutputType[P]>
            : GetScalarType<T[P], BidsGroupByOutputType[P]>
        }
      >
    >


  export type bidsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    lot_id?: boolean
    bid_amount?: boolean
    submitted_at?: boolean
    status?: boolean
    bid_time?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    lot?: boolean | lotsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bids"]>

  export type bidsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    lot_id?: boolean
    bid_amount?: boolean
    submitted_at?: boolean
    status?: boolean
    bid_time?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    lot?: boolean | lotsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bids"]>

  export type bidsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    lot_id?: boolean
    bid_amount?: boolean
    submitted_at?: boolean
    status?: boolean
    bid_time?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    lot?: boolean | lotsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bids"]>

  export type bidsSelectScalar = {
    id?: boolean
    user_id?: boolean
    lot_id?: boolean
    bid_amount?: boolean
    submitted_at?: boolean
    status?: boolean
    bid_time?: boolean
  }

  export type bidsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "lot_id" | "bid_amount" | "submitted_at" | "status" | "bid_time", ExtArgs["result"]["bids"]>
  export type bidsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    lot?: boolean | lotsDefaultArgs<ExtArgs>
  }
  export type bidsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    lot?: boolean | lotsDefaultArgs<ExtArgs>
  }
  export type bidsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    lot?: boolean | lotsDefaultArgs<ExtArgs>
  }

  export type $bidsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bids"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      lot: Prisma.$lotsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      lot_id: string
      bid_amount: number
      submitted_at: Date
      status: string
      bid_time: Date | null
    }, ExtArgs["result"]["bids"]>
    composites: {}
  }

  type bidsGetPayload<S extends boolean | null | undefined | bidsDefaultArgs> = $Result.GetResult<Prisma.$bidsPayload, S>

  type bidsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bidsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BidsCountAggregateInputType | true
    }

  export interface bidsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bids'], meta: { name: 'bids' } }
    /**
     * Find zero or one Bids that matches the filter.
     * @param {bidsFindUniqueArgs} args - Arguments to find a Bids
     * @example
     * // Get one Bids
     * const bids = await prisma.bids.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bidsFindUniqueArgs>(args: SelectSubset<T, bidsFindUniqueArgs<ExtArgs>>): Prisma__bidsClient<$Result.GetResult<Prisma.$bidsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bids that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bidsFindUniqueOrThrowArgs} args - Arguments to find a Bids
     * @example
     * // Get one Bids
     * const bids = await prisma.bids.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bidsFindUniqueOrThrowArgs>(args: SelectSubset<T, bidsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bidsClient<$Result.GetResult<Prisma.$bidsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bidsFindFirstArgs} args - Arguments to find a Bids
     * @example
     * // Get one Bids
     * const bids = await prisma.bids.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bidsFindFirstArgs>(args?: SelectSubset<T, bidsFindFirstArgs<ExtArgs>>): Prisma__bidsClient<$Result.GetResult<Prisma.$bidsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bids that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bidsFindFirstOrThrowArgs} args - Arguments to find a Bids
     * @example
     * // Get one Bids
     * const bids = await prisma.bids.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bidsFindFirstOrThrowArgs>(args?: SelectSubset<T, bidsFindFirstOrThrowArgs<ExtArgs>>): Prisma__bidsClient<$Result.GetResult<Prisma.$bidsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bidsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bids
     * const bids = await prisma.bids.findMany()
     * 
     * // Get first 10 Bids
     * const bids = await prisma.bids.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bidsWithIdOnly = await prisma.bids.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bidsFindManyArgs>(args?: SelectSubset<T, bidsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bidsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bids.
     * @param {bidsCreateArgs} args - Arguments to create a Bids.
     * @example
     * // Create one Bids
     * const Bids = await prisma.bids.create({
     *   data: {
     *     // ... data to create a Bids
     *   }
     * })
     * 
     */
    create<T extends bidsCreateArgs>(args: SelectSubset<T, bidsCreateArgs<ExtArgs>>): Prisma__bidsClient<$Result.GetResult<Prisma.$bidsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bids.
     * @param {bidsCreateManyArgs} args - Arguments to create many Bids.
     * @example
     * // Create many Bids
     * const bids = await prisma.bids.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bidsCreateManyArgs>(args?: SelectSubset<T, bidsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bids and returns the data saved in the database.
     * @param {bidsCreateManyAndReturnArgs} args - Arguments to create many Bids.
     * @example
     * // Create many Bids
     * const bids = await prisma.bids.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bids and only return the `id`
     * const bidsWithIdOnly = await prisma.bids.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bidsCreateManyAndReturnArgs>(args?: SelectSubset<T, bidsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bidsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bids.
     * @param {bidsDeleteArgs} args - Arguments to delete one Bids.
     * @example
     * // Delete one Bids
     * const Bids = await prisma.bids.delete({
     *   where: {
     *     // ... filter to delete one Bids
     *   }
     * })
     * 
     */
    delete<T extends bidsDeleteArgs>(args: SelectSubset<T, bidsDeleteArgs<ExtArgs>>): Prisma__bidsClient<$Result.GetResult<Prisma.$bidsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bids.
     * @param {bidsUpdateArgs} args - Arguments to update one Bids.
     * @example
     * // Update one Bids
     * const bids = await prisma.bids.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bidsUpdateArgs>(args: SelectSubset<T, bidsUpdateArgs<ExtArgs>>): Prisma__bidsClient<$Result.GetResult<Prisma.$bidsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bids.
     * @param {bidsDeleteManyArgs} args - Arguments to filter Bids to delete.
     * @example
     * // Delete a few Bids
     * const { count } = await prisma.bids.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bidsDeleteManyArgs>(args?: SelectSubset<T, bidsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bidsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bids
     * const bids = await prisma.bids.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bidsUpdateManyArgs>(args: SelectSubset<T, bidsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bids and returns the data updated in the database.
     * @param {bidsUpdateManyAndReturnArgs} args - Arguments to update many Bids.
     * @example
     * // Update many Bids
     * const bids = await prisma.bids.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bids and only return the `id`
     * const bidsWithIdOnly = await prisma.bids.updateManyAndReturn({
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
    updateManyAndReturn<T extends bidsUpdateManyAndReturnArgs>(args: SelectSubset<T, bidsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bidsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bids.
     * @param {bidsUpsertArgs} args - Arguments to update or create a Bids.
     * @example
     * // Update or create a Bids
     * const bids = await prisma.bids.upsert({
     *   create: {
     *     // ... data to create a Bids
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bids we want to update
     *   }
     * })
     */
    upsert<T extends bidsUpsertArgs>(args: SelectSubset<T, bidsUpsertArgs<ExtArgs>>): Prisma__bidsClient<$Result.GetResult<Prisma.$bidsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bidsCountArgs} args - Arguments to filter Bids to count.
     * @example
     * // Count the number of Bids
     * const count = await prisma.bids.count({
     *   where: {
     *     // ... the filter for the Bids we want to count
     *   }
     * })
    **/
    count<T extends bidsCountArgs>(
      args?: Subset<T, bidsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BidsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BidsAggregateArgs>(args: Subset<T, BidsAggregateArgs>): Prisma.PrismaPromise<GetBidsAggregateType<T>>

    /**
     * Group by Bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bidsGroupByArgs} args - Group by arguments.
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
      T extends bidsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bidsGroupByArgs['orderBy'] }
        : { orderBy?: bidsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, bidsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBidsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bids model
   */
  readonly fields: bidsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bids.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bidsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lot<T extends lotsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, lotsDefaultArgs<ExtArgs>>): Prisma__lotsClient<$Result.GetResult<Prisma.$lotsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the bids model
   */
  interface bidsFieldRefs {
    readonly id: FieldRef<"bids", 'String'>
    readonly user_id: FieldRef<"bids", 'String'>
    readonly lot_id: FieldRef<"bids", 'String'>
    readonly bid_amount: FieldRef<"bids", 'Float'>
    readonly submitted_at: FieldRef<"bids", 'DateTime'>
    readonly status: FieldRef<"bids", 'String'>
    readonly bid_time: FieldRef<"bids", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * bids findUnique
   */
  export type bidsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bids
     */
    select?: bidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bids
     */
    omit?: bidsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bidsInclude<ExtArgs> | null
    /**
     * Filter, which bids to fetch.
     */
    where: bidsWhereUniqueInput
  }

  /**
   * bids findUniqueOrThrow
   */
  export type bidsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bids
     */
    select?: bidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bids
     */
    omit?: bidsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bidsInclude<ExtArgs> | null
    /**
     * Filter, which bids to fetch.
     */
    where: bidsWhereUniqueInput
  }

  /**
   * bids findFirst
   */
  export type bidsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bids
     */
    select?: bidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bids
     */
    omit?: bidsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bidsInclude<ExtArgs> | null
    /**
     * Filter, which bids to fetch.
     */
    where?: bidsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bids to fetch.
     */
    orderBy?: bidsOrderByWithRelationInput | bidsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bids.
     */
    cursor?: bidsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bids.
     */
    distinct?: BidsScalarFieldEnum | BidsScalarFieldEnum[]
  }

  /**
   * bids findFirstOrThrow
   */
  export type bidsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bids
     */
    select?: bidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bids
     */
    omit?: bidsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bidsInclude<ExtArgs> | null
    /**
     * Filter, which bids to fetch.
     */
    where?: bidsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bids to fetch.
     */
    orderBy?: bidsOrderByWithRelationInput | bidsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bids.
     */
    cursor?: bidsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bids.
     */
    distinct?: BidsScalarFieldEnum | BidsScalarFieldEnum[]
  }

  /**
   * bids findMany
   */
  export type bidsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bids
     */
    select?: bidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bids
     */
    omit?: bidsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bidsInclude<ExtArgs> | null
    /**
     * Filter, which bids to fetch.
     */
    where?: bidsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bids to fetch.
     */
    orderBy?: bidsOrderByWithRelationInput | bidsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bids.
     */
    cursor?: bidsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bids.
     */
    skip?: number
    distinct?: BidsScalarFieldEnum | BidsScalarFieldEnum[]
  }

  /**
   * bids create
   */
  export type bidsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bids
     */
    select?: bidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bids
     */
    omit?: bidsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bidsInclude<ExtArgs> | null
    /**
     * The data needed to create a bids.
     */
    data: XOR<bidsCreateInput, bidsUncheckedCreateInput>
  }

  /**
   * bids createMany
   */
  export type bidsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bids.
     */
    data: bidsCreateManyInput | bidsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bids createManyAndReturn
   */
  export type bidsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bids
     */
    select?: bidsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bids
     */
    omit?: bidsOmit<ExtArgs> | null
    /**
     * The data used to create many bids.
     */
    data: bidsCreateManyInput | bidsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bidsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * bids update
   */
  export type bidsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bids
     */
    select?: bidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bids
     */
    omit?: bidsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bidsInclude<ExtArgs> | null
    /**
     * The data needed to update a bids.
     */
    data: XOR<bidsUpdateInput, bidsUncheckedUpdateInput>
    /**
     * Choose, which bids to update.
     */
    where: bidsWhereUniqueInput
  }

  /**
   * bids updateMany
   */
  export type bidsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bids.
     */
    data: XOR<bidsUpdateManyMutationInput, bidsUncheckedUpdateManyInput>
    /**
     * Filter which bids to update
     */
    where?: bidsWhereInput
    /**
     * Limit how many bids to update.
     */
    limit?: number
  }

  /**
   * bids updateManyAndReturn
   */
  export type bidsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bids
     */
    select?: bidsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bids
     */
    omit?: bidsOmit<ExtArgs> | null
    /**
     * The data used to update bids.
     */
    data: XOR<bidsUpdateManyMutationInput, bidsUncheckedUpdateManyInput>
    /**
     * Filter which bids to update
     */
    where?: bidsWhereInput
    /**
     * Limit how many bids to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bidsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * bids upsert
   */
  export type bidsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bids
     */
    select?: bidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bids
     */
    omit?: bidsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bidsInclude<ExtArgs> | null
    /**
     * The filter to search for the bids to update in case it exists.
     */
    where: bidsWhereUniqueInput
    /**
     * In case the bids found by the `where` argument doesn't exist, create a new bids with this data.
     */
    create: XOR<bidsCreateInput, bidsUncheckedCreateInput>
    /**
     * In case the bids was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bidsUpdateInput, bidsUncheckedUpdateInput>
  }

  /**
   * bids delete
   */
  export type bidsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bids
     */
    select?: bidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bids
     */
    omit?: bidsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bidsInclude<ExtArgs> | null
    /**
     * Filter which bids to delete.
     */
    where: bidsWhereUniqueInput
  }

  /**
   * bids deleteMany
   */
  export type bidsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bids to delete
     */
    where?: bidsWhereInput
    /**
     * Limit how many bids to delete.
     */
    limit?: number
  }

  /**
   * bids without action
   */
  export type bidsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bids
     */
    select?: bidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bids
     */
    omit?: bidsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bidsInclude<ExtArgs> | null
  }


  /**
   * Model awarded_bids
   */

  export type AggregateAwarded_bids = {
    _count: Awarded_bidsCountAggregateOutputType | null
    _avg: Awarded_bidsAvgAggregateOutputType | null
    _sum: Awarded_bidsSumAggregateOutputType | null
    _min: Awarded_bidsMinAggregateOutputType | null
    _max: Awarded_bidsMaxAggregateOutputType | null
  }

  export type Awarded_bidsAvgAggregateOutputType = {
    final_price: number | null
    commission: number | null
  }

  export type Awarded_bidsSumAggregateOutputType = {
    final_price: number | null
    commission: number | null
  }

  export type Awarded_bidsMinAggregateOutputType = {
    id: string | null
    lot_id: string | null
    awarded_to: string | null
    final_price: number | null
    commission: number | null
  }

  export type Awarded_bidsMaxAggregateOutputType = {
    id: string | null
    lot_id: string | null
    awarded_to: string | null
    final_price: number | null
    commission: number | null
  }

  export type Awarded_bidsCountAggregateOutputType = {
    id: number
    lot_id: number
    awarded_to: number
    final_price: number
    commission: number
    _all: number
  }


  export type Awarded_bidsAvgAggregateInputType = {
    final_price?: true
    commission?: true
  }

  export type Awarded_bidsSumAggregateInputType = {
    final_price?: true
    commission?: true
  }

  export type Awarded_bidsMinAggregateInputType = {
    id?: true
    lot_id?: true
    awarded_to?: true
    final_price?: true
    commission?: true
  }

  export type Awarded_bidsMaxAggregateInputType = {
    id?: true
    lot_id?: true
    awarded_to?: true
    final_price?: true
    commission?: true
  }

  export type Awarded_bidsCountAggregateInputType = {
    id?: true
    lot_id?: true
    awarded_to?: true
    final_price?: true
    commission?: true
    _all?: true
  }

  export type Awarded_bidsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which awarded_bids to aggregate.
     */
    where?: awarded_bidsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of awarded_bids to fetch.
     */
    orderBy?: awarded_bidsOrderByWithRelationInput | awarded_bidsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: awarded_bidsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` awarded_bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` awarded_bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned awarded_bids
    **/
    _count?: true | Awarded_bidsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Awarded_bidsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Awarded_bidsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Awarded_bidsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Awarded_bidsMaxAggregateInputType
  }

  export type GetAwarded_bidsAggregateType<T extends Awarded_bidsAggregateArgs> = {
        [P in keyof T & keyof AggregateAwarded_bids]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAwarded_bids[P]>
      : GetScalarType<T[P], AggregateAwarded_bids[P]>
  }




  export type awarded_bidsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: awarded_bidsWhereInput
    orderBy?: awarded_bidsOrderByWithAggregationInput | awarded_bidsOrderByWithAggregationInput[]
    by: Awarded_bidsScalarFieldEnum[] | Awarded_bidsScalarFieldEnum
    having?: awarded_bidsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Awarded_bidsCountAggregateInputType | true
    _avg?: Awarded_bidsAvgAggregateInputType
    _sum?: Awarded_bidsSumAggregateInputType
    _min?: Awarded_bidsMinAggregateInputType
    _max?: Awarded_bidsMaxAggregateInputType
  }

  export type Awarded_bidsGroupByOutputType = {
    id: string
    lot_id: string
    awarded_to: string
    final_price: number
    commission: number
    _count: Awarded_bidsCountAggregateOutputType | null
    _avg: Awarded_bidsAvgAggregateOutputType | null
    _sum: Awarded_bidsSumAggregateOutputType | null
    _min: Awarded_bidsMinAggregateOutputType | null
    _max: Awarded_bidsMaxAggregateOutputType | null
  }

  type GetAwarded_bidsGroupByPayload<T extends awarded_bidsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Awarded_bidsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Awarded_bidsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Awarded_bidsGroupByOutputType[P]>
            : GetScalarType<T[P], Awarded_bidsGroupByOutputType[P]>
        }
      >
    >


  export type awarded_bidsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lot_id?: boolean
    awarded_to?: boolean
    final_price?: boolean
    commission?: boolean
    lot?: boolean | lotsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["awarded_bids"]>

  export type awarded_bidsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lot_id?: boolean
    awarded_to?: boolean
    final_price?: boolean
    commission?: boolean
    lot?: boolean | lotsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["awarded_bids"]>

  export type awarded_bidsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lot_id?: boolean
    awarded_to?: boolean
    final_price?: boolean
    commission?: boolean
    lot?: boolean | lotsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["awarded_bids"]>

  export type awarded_bidsSelectScalar = {
    id?: boolean
    lot_id?: boolean
    awarded_to?: boolean
    final_price?: boolean
    commission?: boolean
  }

  export type awarded_bidsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lot_id" | "awarded_to" | "final_price" | "commission", ExtArgs["result"]["awarded_bids"]>
  export type awarded_bidsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lot?: boolean | lotsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type awarded_bidsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lot?: boolean | lotsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type awarded_bidsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lot?: boolean | lotsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $awarded_bidsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "awarded_bids"
    objects: {
      lot: Prisma.$lotsPayload<ExtArgs>
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lot_id: string
      awarded_to: string
      final_price: number
      commission: number
    }, ExtArgs["result"]["awarded_bids"]>
    composites: {}
  }

  type awarded_bidsGetPayload<S extends boolean | null | undefined | awarded_bidsDefaultArgs> = $Result.GetResult<Prisma.$awarded_bidsPayload, S>

  type awarded_bidsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<awarded_bidsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Awarded_bidsCountAggregateInputType | true
    }

  export interface awarded_bidsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['awarded_bids'], meta: { name: 'awarded_bids' } }
    /**
     * Find zero or one Awarded_bids that matches the filter.
     * @param {awarded_bidsFindUniqueArgs} args - Arguments to find a Awarded_bids
     * @example
     * // Get one Awarded_bids
     * const awarded_bids = await prisma.awarded_bids.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends awarded_bidsFindUniqueArgs>(args: SelectSubset<T, awarded_bidsFindUniqueArgs<ExtArgs>>): Prisma__awarded_bidsClient<$Result.GetResult<Prisma.$awarded_bidsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Awarded_bids that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {awarded_bidsFindUniqueOrThrowArgs} args - Arguments to find a Awarded_bids
     * @example
     * // Get one Awarded_bids
     * const awarded_bids = await prisma.awarded_bids.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends awarded_bidsFindUniqueOrThrowArgs>(args: SelectSubset<T, awarded_bidsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__awarded_bidsClient<$Result.GetResult<Prisma.$awarded_bidsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Awarded_bids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {awarded_bidsFindFirstArgs} args - Arguments to find a Awarded_bids
     * @example
     * // Get one Awarded_bids
     * const awarded_bids = await prisma.awarded_bids.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends awarded_bidsFindFirstArgs>(args?: SelectSubset<T, awarded_bidsFindFirstArgs<ExtArgs>>): Prisma__awarded_bidsClient<$Result.GetResult<Prisma.$awarded_bidsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Awarded_bids that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {awarded_bidsFindFirstOrThrowArgs} args - Arguments to find a Awarded_bids
     * @example
     * // Get one Awarded_bids
     * const awarded_bids = await prisma.awarded_bids.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends awarded_bidsFindFirstOrThrowArgs>(args?: SelectSubset<T, awarded_bidsFindFirstOrThrowArgs<ExtArgs>>): Prisma__awarded_bidsClient<$Result.GetResult<Prisma.$awarded_bidsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Awarded_bids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {awarded_bidsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Awarded_bids
     * const awarded_bids = await prisma.awarded_bids.findMany()
     * 
     * // Get first 10 Awarded_bids
     * const awarded_bids = await prisma.awarded_bids.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const awarded_bidsWithIdOnly = await prisma.awarded_bids.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends awarded_bidsFindManyArgs>(args?: SelectSubset<T, awarded_bidsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$awarded_bidsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Awarded_bids.
     * @param {awarded_bidsCreateArgs} args - Arguments to create a Awarded_bids.
     * @example
     * // Create one Awarded_bids
     * const Awarded_bids = await prisma.awarded_bids.create({
     *   data: {
     *     // ... data to create a Awarded_bids
     *   }
     * })
     * 
     */
    create<T extends awarded_bidsCreateArgs>(args: SelectSubset<T, awarded_bidsCreateArgs<ExtArgs>>): Prisma__awarded_bidsClient<$Result.GetResult<Prisma.$awarded_bidsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Awarded_bids.
     * @param {awarded_bidsCreateManyArgs} args - Arguments to create many Awarded_bids.
     * @example
     * // Create many Awarded_bids
     * const awarded_bids = await prisma.awarded_bids.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends awarded_bidsCreateManyArgs>(args?: SelectSubset<T, awarded_bidsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Awarded_bids and returns the data saved in the database.
     * @param {awarded_bidsCreateManyAndReturnArgs} args - Arguments to create many Awarded_bids.
     * @example
     * // Create many Awarded_bids
     * const awarded_bids = await prisma.awarded_bids.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Awarded_bids and only return the `id`
     * const awarded_bidsWithIdOnly = await prisma.awarded_bids.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends awarded_bidsCreateManyAndReturnArgs>(args?: SelectSubset<T, awarded_bidsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$awarded_bidsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Awarded_bids.
     * @param {awarded_bidsDeleteArgs} args - Arguments to delete one Awarded_bids.
     * @example
     * // Delete one Awarded_bids
     * const Awarded_bids = await prisma.awarded_bids.delete({
     *   where: {
     *     // ... filter to delete one Awarded_bids
     *   }
     * })
     * 
     */
    delete<T extends awarded_bidsDeleteArgs>(args: SelectSubset<T, awarded_bidsDeleteArgs<ExtArgs>>): Prisma__awarded_bidsClient<$Result.GetResult<Prisma.$awarded_bidsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Awarded_bids.
     * @param {awarded_bidsUpdateArgs} args - Arguments to update one Awarded_bids.
     * @example
     * // Update one Awarded_bids
     * const awarded_bids = await prisma.awarded_bids.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends awarded_bidsUpdateArgs>(args: SelectSubset<T, awarded_bidsUpdateArgs<ExtArgs>>): Prisma__awarded_bidsClient<$Result.GetResult<Prisma.$awarded_bidsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Awarded_bids.
     * @param {awarded_bidsDeleteManyArgs} args - Arguments to filter Awarded_bids to delete.
     * @example
     * // Delete a few Awarded_bids
     * const { count } = await prisma.awarded_bids.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends awarded_bidsDeleteManyArgs>(args?: SelectSubset<T, awarded_bidsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Awarded_bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {awarded_bidsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Awarded_bids
     * const awarded_bids = await prisma.awarded_bids.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends awarded_bidsUpdateManyArgs>(args: SelectSubset<T, awarded_bidsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Awarded_bids and returns the data updated in the database.
     * @param {awarded_bidsUpdateManyAndReturnArgs} args - Arguments to update many Awarded_bids.
     * @example
     * // Update many Awarded_bids
     * const awarded_bids = await prisma.awarded_bids.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Awarded_bids and only return the `id`
     * const awarded_bidsWithIdOnly = await prisma.awarded_bids.updateManyAndReturn({
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
    updateManyAndReturn<T extends awarded_bidsUpdateManyAndReturnArgs>(args: SelectSubset<T, awarded_bidsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$awarded_bidsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Awarded_bids.
     * @param {awarded_bidsUpsertArgs} args - Arguments to update or create a Awarded_bids.
     * @example
     * // Update or create a Awarded_bids
     * const awarded_bids = await prisma.awarded_bids.upsert({
     *   create: {
     *     // ... data to create a Awarded_bids
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Awarded_bids we want to update
     *   }
     * })
     */
    upsert<T extends awarded_bidsUpsertArgs>(args: SelectSubset<T, awarded_bidsUpsertArgs<ExtArgs>>): Prisma__awarded_bidsClient<$Result.GetResult<Prisma.$awarded_bidsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Awarded_bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {awarded_bidsCountArgs} args - Arguments to filter Awarded_bids to count.
     * @example
     * // Count the number of Awarded_bids
     * const count = await prisma.awarded_bids.count({
     *   where: {
     *     // ... the filter for the Awarded_bids we want to count
     *   }
     * })
    **/
    count<T extends awarded_bidsCountArgs>(
      args?: Subset<T, awarded_bidsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Awarded_bidsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Awarded_bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Awarded_bidsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Awarded_bidsAggregateArgs>(args: Subset<T, Awarded_bidsAggregateArgs>): Prisma.PrismaPromise<GetAwarded_bidsAggregateType<T>>

    /**
     * Group by Awarded_bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {awarded_bidsGroupByArgs} args - Group by arguments.
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
      T extends awarded_bidsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: awarded_bidsGroupByArgs['orderBy'] }
        : { orderBy?: awarded_bidsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, awarded_bidsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAwarded_bidsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the awarded_bids model
   */
  readonly fields: awarded_bidsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for awarded_bids.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__awarded_bidsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lot<T extends lotsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, lotsDefaultArgs<ExtArgs>>): Prisma__lotsClient<$Result.GetResult<Prisma.$lotsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the awarded_bids model
   */
  interface awarded_bidsFieldRefs {
    readonly id: FieldRef<"awarded_bids", 'String'>
    readonly lot_id: FieldRef<"awarded_bids", 'String'>
    readonly awarded_to: FieldRef<"awarded_bids", 'String'>
    readonly final_price: FieldRef<"awarded_bids", 'Float'>
    readonly commission: FieldRef<"awarded_bids", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * awarded_bids findUnique
   */
  export type awarded_bidsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the awarded_bids
     */
    select?: awarded_bidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the awarded_bids
     */
    omit?: awarded_bidsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: awarded_bidsInclude<ExtArgs> | null
    /**
     * Filter, which awarded_bids to fetch.
     */
    where: awarded_bidsWhereUniqueInput
  }

  /**
   * awarded_bids findUniqueOrThrow
   */
  export type awarded_bidsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the awarded_bids
     */
    select?: awarded_bidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the awarded_bids
     */
    omit?: awarded_bidsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: awarded_bidsInclude<ExtArgs> | null
    /**
     * Filter, which awarded_bids to fetch.
     */
    where: awarded_bidsWhereUniqueInput
  }

  /**
   * awarded_bids findFirst
   */
  export type awarded_bidsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the awarded_bids
     */
    select?: awarded_bidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the awarded_bids
     */
    omit?: awarded_bidsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: awarded_bidsInclude<ExtArgs> | null
    /**
     * Filter, which awarded_bids to fetch.
     */
    where?: awarded_bidsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of awarded_bids to fetch.
     */
    orderBy?: awarded_bidsOrderByWithRelationInput | awarded_bidsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for awarded_bids.
     */
    cursor?: awarded_bidsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` awarded_bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` awarded_bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of awarded_bids.
     */
    distinct?: Awarded_bidsScalarFieldEnum | Awarded_bidsScalarFieldEnum[]
  }

  /**
   * awarded_bids findFirstOrThrow
   */
  export type awarded_bidsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the awarded_bids
     */
    select?: awarded_bidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the awarded_bids
     */
    omit?: awarded_bidsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: awarded_bidsInclude<ExtArgs> | null
    /**
     * Filter, which awarded_bids to fetch.
     */
    where?: awarded_bidsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of awarded_bids to fetch.
     */
    orderBy?: awarded_bidsOrderByWithRelationInput | awarded_bidsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for awarded_bids.
     */
    cursor?: awarded_bidsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` awarded_bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` awarded_bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of awarded_bids.
     */
    distinct?: Awarded_bidsScalarFieldEnum | Awarded_bidsScalarFieldEnum[]
  }

  /**
   * awarded_bids findMany
   */
  export type awarded_bidsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the awarded_bids
     */
    select?: awarded_bidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the awarded_bids
     */
    omit?: awarded_bidsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: awarded_bidsInclude<ExtArgs> | null
    /**
     * Filter, which awarded_bids to fetch.
     */
    where?: awarded_bidsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of awarded_bids to fetch.
     */
    orderBy?: awarded_bidsOrderByWithRelationInput | awarded_bidsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing awarded_bids.
     */
    cursor?: awarded_bidsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` awarded_bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` awarded_bids.
     */
    skip?: number
    distinct?: Awarded_bidsScalarFieldEnum | Awarded_bidsScalarFieldEnum[]
  }

  /**
   * awarded_bids create
   */
  export type awarded_bidsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the awarded_bids
     */
    select?: awarded_bidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the awarded_bids
     */
    omit?: awarded_bidsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: awarded_bidsInclude<ExtArgs> | null
    /**
     * The data needed to create a awarded_bids.
     */
    data: XOR<awarded_bidsCreateInput, awarded_bidsUncheckedCreateInput>
  }

  /**
   * awarded_bids createMany
   */
  export type awarded_bidsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many awarded_bids.
     */
    data: awarded_bidsCreateManyInput | awarded_bidsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * awarded_bids createManyAndReturn
   */
  export type awarded_bidsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the awarded_bids
     */
    select?: awarded_bidsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the awarded_bids
     */
    omit?: awarded_bidsOmit<ExtArgs> | null
    /**
     * The data used to create many awarded_bids.
     */
    data: awarded_bidsCreateManyInput | awarded_bidsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: awarded_bidsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * awarded_bids update
   */
  export type awarded_bidsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the awarded_bids
     */
    select?: awarded_bidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the awarded_bids
     */
    omit?: awarded_bidsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: awarded_bidsInclude<ExtArgs> | null
    /**
     * The data needed to update a awarded_bids.
     */
    data: XOR<awarded_bidsUpdateInput, awarded_bidsUncheckedUpdateInput>
    /**
     * Choose, which awarded_bids to update.
     */
    where: awarded_bidsWhereUniqueInput
  }

  /**
   * awarded_bids updateMany
   */
  export type awarded_bidsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update awarded_bids.
     */
    data: XOR<awarded_bidsUpdateManyMutationInput, awarded_bidsUncheckedUpdateManyInput>
    /**
     * Filter which awarded_bids to update
     */
    where?: awarded_bidsWhereInput
    /**
     * Limit how many awarded_bids to update.
     */
    limit?: number
  }

  /**
   * awarded_bids updateManyAndReturn
   */
  export type awarded_bidsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the awarded_bids
     */
    select?: awarded_bidsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the awarded_bids
     */
    omit?: awarded_bidsOmit<ExtArgs> | null
    /**
     * The data used to update awarded_bids.
     */
    data: XOR<awarded_bidsUpdateManyMutationInput, awarded_bidsUncheckedUpdateManyInput>
    /**
     * Filter which awarded_bids to update
     */
    where?: awarded_bidsWhereInput
    /**
     * Limit how many awarded_bids to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: awarded_bidsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * awarded_bids upsert
   */
  export type awarded_bidsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the awarded_bids
     */
    select?: awarded_bidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the awarded_bids
     */
    omit?: awarded_bidsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: awarded_bidsInclude<ExtArgs> | null
    /**
     * The filter to search for the awarded_bids to update in case it exists.
     */
    where: awarded_bidsWhereUniqueInput
    /**
     * In case the awarded_bids found by the `where` argument doesn't exist, create a new awarded_bids with this data.
     */
    create: XOR<awarded_bidsCreateInput, awarded_bidsUncheckedCreateInput>
    /**
     * In case the awarded_bids was found with the provided `where` argument, update it with this data.
     */
    update: XOR<awarded_bidsUpdateInput, awarded_bidsUncheckedUpdateInput>
  }

  /**
   * awarded_bids delete
   */
  export type awarded_bidsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the awarded_bids
     */
    select?: awarded_bidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the awarded_bids
     */
    omit?: awarded_bidsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: awarded_bidsInclude<ExtArgs> | null
    /**
     * Filter which awarded_bids to delete.
     */
    where: awarded_bidsWhereUniqueInput
  }

  /**
   * awarded_bids deleteMany
   */
  export type awarded_bidsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which awarded_bids to delete
     */
    where?: awarded_bidsWhereInput
    /**
     * Limit how many awarded_bids to delete.
     */
    limit?: number
  }

  /**
   * awarded_bids without action
   */
  export type awarded_bidsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the awarded_bids
     */
    select?: awarded_bidsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the awarded_bids
     */
    omit?: awarded_bidsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: awarded_bidsInclude<ExtArgs> | null
  }


  /**
   * Model invoice
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
     * Filter which invoice to aggregate.
     */
    where?: invoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoiceOrderByWithRelationInput | invoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: invoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned invoices
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




  export type invoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoiceWhereInput
    orderBy?: invoiceOrderByWithAggregationInput | invoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: invoiceScalarWhereWithAggregatesInput
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

  type GetInvoiceGroupByPayload<T extends invoiceGroupByArgs> = Prisma.PrismaPromise<
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


  export type invoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    awarded_bid_ids?: boolean
    invoice_number?: boolean
    generated_at?: boolean
    total_amount?: boolean
    pdf_url?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type invoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    awarded_bid_ids?: boolean
    invoice_number?: boolean
    generated_at?: boolean
    total_amount?: boolean
    pdf_url?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type invoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    awarded_bid_ids?: boolean
    invoice_number?: boolean
    generated_at?: boolean
    total_amount?: boolean
    pdf_url?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type invoiceSelectScalar = {
    id?: boolean
    user_id?: boolean
    awarded_bid_ids?: boolean
    invoice_number?: boolean
    generated_at?: boolean
    total_amount?: boolean
    pdf_url?: boolean
  }

  export type invoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "awarded_bid_ids" | "invoice_number" | "generated_at" | "total_amount" | "pdf_url", ExtArgs["result"]["invoice"]>
  export type invoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type invoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type invoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $invoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "invoice"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
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

  type invoiceGetPayload<S extends boolean | null | undefined | invoiceDefaultArgs> = $Result.GetResult<Prisma.$invoicePayload, S>

  type invoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<invoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface invoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['invoice'], meta: { name: 'invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {invoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends invoiceFindUniqueArgs>(args: SelectSubset<T, invoiceFindUniqueArgs<ExtArgs>>): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {invoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends invoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, invoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends invoiceFindFirstArgs>(args?: SelectSubset<T, invoiceFindFirstArgs<ExtArgs>>): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends invoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, invoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends invoiceFindManyArgs>(args?: SelectSubset<T, invoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {invoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends invoiceCreateArgs>(args: SelectSubset<T, invoiceCreateArgs<ExtArgs>>): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {invoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends invoiceCreateManyArgs>(args?: SelectSubset<T, invoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {invoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
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
    createManyAndReturn<T extends invoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, invoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice.
     * @param {invoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends invoiceDeleteArgs>(args: SelectSubset<T, invoiceDeleteArgs<ExtArgs>>): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {invoiceUpdateArgs} args - Arguments to update one Invoice.
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
    update<T extends invoiceUpdateArgs>(args: SelectSubset<T, invoiceUpdateArgs<ExtArgs>>): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {invoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends invoiceDeleteManyArgs>(args?: SelectSubset<T, invoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends invoiceUpdateManyArgs>(args: SelectSubset<T, invoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {invoiceUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
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
    updateManyAndReturn<T extends invoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, invoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice.
     * @param {invoiceUpsertArgs} args - Arguments to update or create a Invoice.
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
    upsert<T extends invoiceUpsertArgs>(args: SelectSubset<T, invoiceUpsertArgs<ExtArgs>>): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends invoiceCountArgs>(
      args?: Subset<T, invoiceCountArgs>,
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
     * @param {invoiceGroupByArgs} args - Group by arguments.
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
      T extends invoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: invoiceGroupByArgs['orderBy'] }
        : { orderBy?: invoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, invoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the invoice model
   */
  readonly fields: invoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__invoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the invoice model
   */
  interface invoiceFieldRefs {
    readonly id: FieldRef<"invoice", 'String'>
    readonly user_id: FieldRef<"invoice", 'String'>
    readonly awarded_bid_ids: FieldRef<"invoice", 'String[]'>
    readonly invoice_number: FieldRef<"invoice", 'String'>
    readonly generated_at: FieldRef<"invoice", 'DateTime'>
    readonly total_amount: FieldRef<"invoice", 'Float'>
    readonly pdf_url: FieldRef<"invoice", 'String'>
  }
    

  // Custom InputTypes
  /**
   * invoice findUnique
   */
  export type invoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice
     */
    omit?: invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    /**
     * Filter, which invoice to fetch.
     */
    where: invoiceWhereUniqueInput
  }

  /**
   * invoice findUniqueOrThrow
   */
  export type invoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice
     */
    omit?: invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    /**
     * Filter, which invoice to fetch.
     */
    where: invoiceWhereUniqueInput
  }

  /**
   * invoice findFirst
   */
  export type invoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice
     */
    omit?: invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    /**
     * Filter, which invoice to fetch.
     */
    where?: invoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoiceOrderByWithRelationInput | invoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoices.
     */
    cursor?: invoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * invoice findFirstOrThrow
   */
  export type invoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice
     */
    omit?: invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    /**
     * Filter, which invoice to fetch.
     */
    where?: invoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoiceOrderByWithRelationInput | invoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoices.
     */
    cursor?: invoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * invoice findMany
   */
  export type invoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice
     */
    omit?: invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoiceOrderByWithRelationInput | invoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing invoices.
     */
    cursor?: invoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * invoice create
   */
  export type invoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice
     */
    omit?: invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a invoice.
     */
    data: XOR<invoiceCreateInput, invoiceUncheckedCreateInput>
  }

  /**
   * invoice createMany
   */
  export type invoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many invoices.
     */
    data: invoiceCreateManyInput | invoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invoice createManyAndReturn
   */
  export type invoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invoice
     */
    omit?: invoiceOmit<ExtArgs> | null
    /**
     * The data used to create many invoices.
     */
    data: invoiceCreateManyInput | invoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * invoice update
   */
  export type invoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice
     */
    omit?: invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a invoice.
     */
    data: XOR<invoiceUpdateInput, invoiceUncheckedUpdateInput>
    /**
     * Choose, which invoice to update.
     */
    where: invoiceWhereUniqueInput
  }

  /**
   * invoice updateMany
   */
  export type invoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update invoices.
     */
    data: XOR<invoiceUpdateManyMutationInput, invoiceUncheckedUpdateManyInput>
    /**
     * Filter which invoices to update
     */
    where?: invoiceWhereInput
    /**
     * Limit how many invoices to update.
     */
    limit?: number
  }

  /**
   * invoice updateManyAndReturn
   */
  export type invoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invoice
     */
    omit?: invoiceOmit<ExtArgs> | null
    /**
     * The data used to update invoices.
     */
    data: XOR<invoiceUpdateManyMutationInput, invoiceUncheckedUpdateManyInput>
    /**
     * Filter which invoices to update
     */
    where?: invoiceWhereInput
    /**
     * Limit how many invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * invoice upsert
   */
  export type invoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice
     */
    omit?: invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the invoice to update in case it exists.
     */
    where: invoiceWhereUniqueInput
    /**
     * In case the invoice found by the `where` argument doesn't exist, create a new invoice with this data.
     */
    create: XOR<invoiceCreateInput, invoiceUncheckedCreateInput>
    /**
     * In case the invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<invoiceUpdateInput, invoiceUncheckedUpdateInput>
  }

  /**
   * invoice delete
   */
  export type invoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice
     */
    omit?: invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    /**
     * Filter which invoice to delete.
     */
    where: invoiceWhereUniqueInput
  }

  /**
   * invoice deleteMany
   */
  export type invoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoices to delete
     */
    where?: invoiceWhereInput
    /**
     * Limit how many invoices to delete.
     */
    limit?: number
  }

  /**
   * invoice without action
   */
  export type invoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice
     */
    omit?: invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
  }


  /**
   * Model email_notifications
   */

  export type AggregateEmail_notifications = {
    _count: Email_notificationsCountAggregateOutputType | null
    _avg: Email_notificationsAvgAggregateOutputType | null
    _sum: Email_notificationsSumAggregateOutputType | null
    _min: Email_notificationsMinAggregateOutputType | null
    _max: Email_notificationsMaxAggregateOutputType | null
  }

  export type Email_notificationsAvgAggregateOutputType = {
    id: number | null
  }

  export type Email_notificationsSumAggregateOutputType = {
    id: number | null
  }

  export type Email_notificationsMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    subject: string | null
    message: string | null
    notification_type: string | null
    is_sent: boolean | null
    sent_at: Date | null
    created_at: Date | null
  }

  export type Email_notificationsMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    subject: string | null
    message: string | null
    notification_type: string | null
    is_sent: boolean | null
    sent_at: Date | null
    created_at: Date | null
  }

  export type Email_notificationsCountAggregateOutputType = {
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


  export type Email_notificationsAvgAggregateInputType = {
    id?: true
  }

  export type Email_notificationsSumAggregateInputType = {
    id?: true
  }

  export type Email_notificationsMinAggregateInputType = {
    id?: true
    user_id?: true
    subject?: true
    message?: true
    notification_type?: true
    is_sent?: true
    sent_at?: true
    created_at?: true
  }

  export type Email_notificationsMaxAggregateInputType = {
    id?: true
    user_id?: true
    subject?: true
    message?: true
    notification_type?: true
    is_sent?: true
    sent_at?: true
    created_at?: true
  }

  export type Email_notificationsCountAggregateInputType = {
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

  export type Email_notificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which email_notifications to aggregate.
     */
    where?: email_notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_notifications to fetch.
     */
    orderBy?: email_notificationsOrderByWithRelationInput | email_notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: email_notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned email_notifications
    **/
    _count?: true | Email_notificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Email_notificationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Email_notificationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Email_notificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Email_notificationsMaxAggregateInputType
  }

  export type GetEmail_notificationsAggregateType<T extends Email_notificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateEmail_notifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmail_notifications[P]>
      : GetScalarType<T[P], AggregateEmail_notifications[P]>
  }




  export type email_notificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: email_notificationsWhereInput
    orderBy?: email_notificationsOrderByWithAggregationInput | email_notificationsOrderByWithAggregationInput[]
    by: Email_notificationsScalarFieldEnum[] | Email_notificationsScalarFieldEnum
    having?: email_notificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Email_notificationsCountAggregateInputType | true
    _avg?: Email_notificationsAvgAggregateInputType
    _sum?: Email_notificationsSumAggregateInputType
    _min?: Email_notificationsMinAggregateInputType
    _max?: Email_notificationsMaxAggregateInputType
  }

  export type Email_notificationsGroupByOutputType = {
    id: number
    user_id: string | null
    subject: string
    message: string
    notification_type: string | null
    is_sent: boolean
    sent_at: Date | null
    created_at: Date
    _count: Email_notificationsCountAggregateOutputType | null
    _avg: Email_notificationsAvgAggregateOutputType | null
    _sum: Email_notificationsSumAggregateOutputType | null
    _min: Email_notificationsMinAggregateOutputType | null
    _max: Email_notificationsMaxAggregateOutputType | null
  }

  type GetEmail_notificationsGroupByPayload<T extends email_notificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Email_notificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Email_notificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Email_notificationsGroupByOutputType[P]>
            : GetScalarType<T[P], Email_notificationsGroupByOutputType[P]>
        }
      >
    >


  export type email_notificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    subject?: boolean
    message?: boolean
    notification_type?: boolean
    is_sent?: boolean
    sent_at?: boolean
    created_at?: boolean
    user?: boolean | email_notifications$userArgs<ExtArgs>
  }, ExtArgs["result"]["email_notifications"]>

  export type email_notificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    subject?: boolean
    message?: boolean
    notification_type?: boolean
    is_sent?: boolean
    sent_at?: boolean
    created_at?: boolean
    user?: boolean | email_notifications$userArgs<ExtArgs>
  }, ExtArgs["result"]["email_notifications"]>

  export type email_notificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    subject?: boolean
    message?: boolean
    notification_type?: boolean
    is_sent?: boolean
    sent_at?: boolean
    created_at?: boolean
    user?: boolean | email_notifications$userArgs<ExtArgs>
  }, ExtArgs["result"]["email_notifications"]>

  export type email_notificationsSelectScalar = {
    id?: boolean
    user_id?: boolean
    subject?: boolean
    message?: boolean
    notification_type?: boolean
    is_sent?: boolean
    sent_at?: boolean
    created_at?: boolean
  }

  export type email_notificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "subject" | "message" | "notification_type" | "is_sent" | "sent_at" | "created_at", ExtArgs["result"]["email_notifications"]>
  export type email_notificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | email_notifications$userArgs<ExtArgs>
  }
  export type email_notificationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | email_notifications$userArgs<ExtArgs>
  }
  export type email_notificationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | email_notifications$userArgs<ExtArgs>
  }

  export type $email_notificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "email_notifications"
    objects: {
      user: Prisma.$usersPayload<ExtArgs> | null
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
    }, ExtArgs["result"]["email_notifications"]>
    composites: {}
  }

  type email_notificationsGetPayload<S extends boolean | null | undefined | email_notificationsDefaultArgs> = $Result.GetResult<Prisma.$email_notificationsPayload, S>

  type email_notificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<email_notificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Email_notificationsCountAggregateInputType | true
    }

  export interface email_notificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['email_notifications'], meta: { name: 'email_notifications' } }
    /**
     * Find zero or one Email_notifications that matches the filter.
     * @param {email_notificationsFindUniqueArgs} args - Arguments to find a Email_notifications
     * @example
     * // Get one Email_notifications
     * const email_notifications = await prisma.email_notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends email_notificationsFindUniqueArgs>(args: SelectSubset<T, email_notificationsFindUniqueArgs<ExtArgs>>): Prisma__email_notificationsClient<$Result.GetResult<Prisma.$email_notificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Email_notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {email_notificationsFindUniqueOrThrowArgs} args - Arguments to find a Email_notifications
     * @example
     * // Get one Email_notifications
     * const email_notifications = await prisma.email_notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends email_notificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, email_notificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__email_notificationsClient<$Result.GetResult<Prisma.$email_notificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email_notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_notificationsFindFirstArgs} args - Arguments to find a Email_notifications
     * @example
     * // Get one Email_notifications
     * const email_notifications = await prisma.email_notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends email_notificationsFindFirstArgs>(args?: SelectSubset<T, email_notificationsFindFirstArgs<ExtArgs>>): Prisma__email_notificationsClient<$Result.GetResult<Prisma.$email_notificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email_notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_notificationsFindFirstOrThrowArgs} args - Arguments to find a Email_notifications
     * @example
     * // Get one Email_notifications
     * const email_notifications = await prisma.email_notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends email_notificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, email_notificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__email_notificationsClient<$Result.GetResult<Prisma.$email_notificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Email_notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_notificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Email_notifications
     * const email_notifications = await prisma.email_notifications.findMany()
     * 
     * // Get first 10 Email_notifications
     * const email_notifications = await prisma.email_notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const email_notificationsWithIdOnly = await prisma.email_notifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends email_notificationsFindManyArgs>(args?: SelectSubset<T, email_notificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Email_notifications.
     * @param {email_notificationsCreateArgs} args - Arguments to create a Email_notifications.
     * @example
     * // Create one Email_notifications
     * const Email_notifications = await prisma.email_notifications.create({
     *   data: {
     *     // ... data to create a Email_notifications
     *   }
     * })
     * 
     */
    create<T extends email_notificationsCreateArgs>(args: SelectSubset<T, email_notificationsCreateArgs<ExtArgs>>): Prisma__email_notificationsClient<$Result.GetResult<Prisma.$email_notificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Email_notifications.
     * @param {email_notificationsCreateManyArgs} args - Arguments to create many Email_notifications.
     * @example
     * // Create many Email_notifications
     * const email_notifications = await prisma.email_notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends email_notificationsCreateManyArgs>(args?: SelectSubset<T, email_notificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Email_notifications and returns the data saved in the database.
     * @param {email_notificationsCreateManyAndReturnArgs} args - Arguments to create many Email_notifications.
     * @example
     * // Create many Email_notifications
     * const email_notifications = await prisma.email_notifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Email_notifications and only return the `id`
     * const email_notificationsWithIdOnly = await prisma.email_notifications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends email_notificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, email_notificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_notificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Email_notifications.
     * @param {email_notificationsDeleteArgs} args - Arguments to delete one Email_notifications.
     * @example
     * // Delete one Email_notifications
     * const Email_notifications = await prisma.email_notifications.delete({
     *   where: {
     *     // ... filter to delete one Email_notifications
     *   }
     * })
     * 
     */
    delete<T extends email_notificationsDeleteArgs>(args: SelectSubset<T, email_notificationsDeleteArgs<ExtArgs>>): Prisma__email_notificationsClient<$Result.GetResult<Prisma.$email_notificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Email_notifications.
     * @param {email_notificationsUpdateArgs} args - Arguments to update one Email_notifications.
     * @example
     * // Update one Email_notifications
     * const email_notifications = await prisma.email_notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends email_notificationsUpdateArgs>(args: SelectSubset<T, email_notificationsUpdateArgs<ExtArgs>>): Prisma__email_notificationsClient<$Result.GetResult<Prisma.$email_notificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Email_notifications.
     * @param {email_notificationsDeleteManyArgs} args - Arguments to filter Email_notifications to delete.
     * @example
     * // Delete a few Email_notifications
     * const { count } = await prisma.email_notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends email_notificationsDeleteManyArgs>(args?: SelectSubset<T, email_notificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Email_notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_notificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Email_notifications
     * const email_notifications = await prisma.email_notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends email_notificationsUpdateManyArgs>(args: SelectSubset<T, email_notificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Email_notifications and returns the data updated in the database.
     * @param {email_notificationsUpdateManyAndReturnArgs} args - Arguments to update many Email_notifications.
     * @example
     * // Update many Email_notifications
     * const email_notifications = await prisma.email_notifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Email_notifications and only return the `id`
     * const email_notificationsWithIdOnly = await prisma.email_notifications.updateManyAndReturn({
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
    updateManyAndReturn<T extends email_notificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, email_notificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_notificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Email_notifications.
     * @param {email_notificationsUpsertArgs} args - Arguments to update or create a Email_notifications.
     * @example
     * // Update or create a Email_notifications
     * const email_notifications = await prisma.email_notifications.upsert({
     *   create: {
     *     // ... data to create a Email_notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Email_notifications we want to update
     *   }
     * })
     */
    upsert<T extends email_notificationsUpsertArgs>(args: SelectSubset<T, email_notificationsUpsertArgs<ExtArgs>>): Prisma__email_notificationsClient<$Result.GetResult<Prisma.$email_notificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Email_notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_notificationsCountArgs} args - Arguments to filter Email_notifications to count.
     * @example
     * // Count the number of Email_notifications
     * const count = await prisma.email_notifications.count({
     *   where: {
     *     // ... the filter for the Email_notifications we want to count
     *   }
     * })
    **/
    count<T extends email_notificationsCountArgs>(
      args?: Subset<T, email_notificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Email_notificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Email_notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Email_notificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Email_notificationsAggregateArgs>(args: Subset<T, Email_notificationsAggregateArgs>): Prisma.PrismaPromise<GetEmail_notificationsAggregateType<T>>

    /**
     * Group by Email_notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_notificationsGroupByArgs} args - Group by arguments.
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
      T extends email_notificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: email_notificationsGroupByArgs['orderBy'] }
        : { orderBy?: email_notificationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, email_notificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmail_notificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the email_notifications model
   */
  readonly fields: email_notificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for email_notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__email_notificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends email_notifications$userArgs<ExtArgs> = {}>(args?: Subset<T, email_notifications$userArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the email_notifications model
   */
  interface email_notificationsFieldRefs {
    readonly id: FieldRef<"email_notifications", 'Int'>
    readonly user_id: FieldRef<"email_notifications", 'String'>
    readonly subject: FieldRef<"email_notifications", 'String'>
    readonly message: FieldRef<"email_notifications", 'String'>
    readonly notification_type: FieldRef<"email_notifications", 'String'>
    readonly is_sent: FieldRef<"email_notifications", 'Boolean'>
    readonly sent_at: FieldRef<"email_notifications", 'DateTime'>
    readonly created_at: FieldRef<"email_notifications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * email_notifications findUnique
   */
  export type email_notificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_notifications
     */
    select?: email_notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_notifications
     */
    omit?: email_notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_notificationsInclude<ExtArgs> | null
    /**
     * Filter, which email_notifications to fetch.
     */
    where: email_notificationsWhereUniqueInput
  }

  /**
   * email_notifications findUniqueOrThrow
   */
  export type email_notificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_notifications
     */
    select?: email_notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_notifications
     */
    omit?: email_notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_notificationsInclude<ExtArgs> | null
    /**
     * Filter, which email_notifications to fetch.
     */
    where: email_notificationsWhereUniqueInput
  }

  /**
   * email_notifications findFirst
   */
  export type email_notificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_notifications
     */
    select?: email_notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_notifications
     */
    omit?: email_notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_notificationsInclude<ExtArgs> | null
    /**
     * Filter, which email_notifications to fetch.
     */
    where?: email_notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_notifications to fetch.
     */
    orderBy?: email_notificationsOrderByWithRelationInput | email_notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for email_notifications.
     */
    cursor?: email_notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of email_notifications.
     */
    distinct?: Email_notificationsScalarFieldEnum | Email_notificationsScalarFieldEnum[]
  }

  /**
   * email_notifications findFirstOrThrow
   */
  export type email_notificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_notifications
     */
    select?: email_notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_notifications
     */
    omit?: email_notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_notificationsInclude<ExtArgs> | null
    /**
     * Filter, which email_notifications to fetch.
     */
    where?: email_notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_notifications to fetch.
     */
    orderBy?: email_notificationsOrderByWithRelationInput | email_notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for email_notifications.
     */
    cursor?: email_notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of email_notifications.
     */
    distinct?: Email_notificationsScalarFieldEnum | Email_notificationsScalarFieldEnum[]
  }

  /**
   * email_notifications findMany
   */
  export type email_notificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_notifications
     */
    select?: email_notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_notifications
     */
    omit?: email_notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_notificationsInclude<ExtArgs> | null
    /**
     * Filter, which email_notifications to fetch.
     */
    where?: email_notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_notifications to fetch.
     */
    orderBy?: email_notificationsOrderByWithRelationInput | email_notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing email_notifications.
     */
    cursor?: email_notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_notifications.
     */
    skip?: number
    distinct?: Email_notificationsScalarFieldEnum | Email_notificationsScalarFieldEnum[]
  }

  /**
   * email_notifications create
   */
  export type email_notificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_notifications
     */
    select?: email_notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_notifications
     */
    omit?: email_notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_notificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a email_notifications.
     */
    data: XOR<email_notificationsCreateInput, email_notificationsUncheckedCreateInput>
  }

  /**
   * email_notifications createMany
   */
  export type email_notificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many email_notifications.
     */
    data: email_notificationsCreateManyInput | email_notificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * email_notifications createManyAndReturn
   */
  export type email_notificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_notifications
     */
    select?: email_notificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the email_notifications
     */
    omit?: email_notificationsOmit<ExtArgs> | null
    /**
     * The data used to create many email_notifications.
     */
    data: email_notificationsCreateManyInput | email_notificationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_notificationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * email_notifications update
   */
  export type email_notificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_notifications
     */
    select?: email_notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_notifications
     */
    omit?: email_notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_notificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a email_notifications.
     */
    data: XOR<email_notificationsUpdateInput, email_notificationsUncheckedUpdateInput>
    /**
     * Choose, which email_notifications to update.
     */
    where: email_notificationsWhereUniqueInput
  }

  /**
   * email_notifications updateMany
   */
  export type email_notificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update email_notifications.
     */
    data: XOR<email_notificationsUpdateManyMutationInput, email_notificationsUncheckedUpdateManyInput>
    /**
     * Filter which email_notifications to update
     */
    where?: email_notificationsWhereInput
    /**
     * Limit how many email_notifications to update.
     */
    limit?: number
  }

  /**
   * email_notifications updateManyAndReturn
   */
  export type email_notificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_notifications
     */
    select?: email_notificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the email_notifications
     */
    omit?: email_notificationsOmit<ExtArgs> | null
    /**
     * The data used to update email_notifications.
     */
    data: XOR<email_notificationsUpdateManyMutationInput, email_notificationsUncheckedUpdateManyInput>
    /**
     * Filter which email_notifications to update
     */
    where?: email_notificationsWhereInput
    /**
     * Limit how many email_notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_notificationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * email_notifications upsert
   */
  export type email_notificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_notifications
     */
    select?: email_notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_notifications
     */
    omit?: email_notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_notificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the email_notifications to update in case it exists.
     */
    where: email_notificationsWhereUniqueInput
    /**
     * In case the email_notifications found by the `where` argument doesn't exist, create a new email_notifications with this data.
     */
    create: XOR<email_notificationsCreateInput, email_notificationsUncheckedCreateInput>
    /**
     * In case the email_notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<email_notificationsUpdateInput, email_notificationsUncheckedUpdateInput>
  }

  /**
   * email_notifications delete
   */
  export type email_notificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_notifications
     */
    select?: email_notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_notifications
     */
    omit?: email_notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_notificationsInclude<ExtArgs> | null
    /**
     * Filter which email_notifications to delete.
     */
    where: email_notificationsWhereUniqueInput
  }

  /**
   * email_notifications deleteMany
   */
  export type email_notificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which email_notifications to delete
     */
    where?: email_notificationsWhereInput
    /**
     * Limit how many email_notifications to delete.
     */
    limit?: number
  }

  /**
   * email_notifications.user
   */
  export type email_notifications$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * email_notifications without action
   */
  export type email_notificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_notifications
     */
    select?: email_notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_notifications
     */
    omit?: email_notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_notificationsInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
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

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Verizon_filesScalarFieldEnum: {
    id: 'id',
    file_name: 'file_name',
    uploaded_by: 'uploaded_by',
    upload_time: 'upload_time',
    cleaned: 'cleaned'
  };

  export type Verizon_filesScalarFieldEnum = (typeof Verizon_filesScalarFieldEnum)[keyof typeof Verizon_filesScalarFieldEnum]


  export const Uploaded_filesScalarFieldEnum: {
    id: 'id',
    filename: 'filename',
    processed_name: 'processed_name',
    user_id: 'user_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Uploaded_filesScalarFieldEnum = (typeof Uploaded_filesScalarFieldEnum)[keyof typeof Uploaded_filesScalarFieldEnum]


  export const LotsScalarFieldEnum: {
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

  export type LotsScalarFieldEnum = (typeof LotsScalarFieldEnum)[keyof typeof LotsScalarFieldEnum]


  export const BidsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    lot_id: 'lot_id',
    bid_amount: 'bid_amount',
    submitted_at: 'submitted_at',
    status: 'status',
    bid_time: 'bid_time'
  };

  export type BidsScalarFieldEnum = (typeof BidsScalarFieldEnum)[keyof typeof BidsScalarFieldEnum]


  export const Awarded_bidsScalarFieldEnum: {
    id: 'id',
    lot_id: 'lot_id',
    awarded_to: 'awarded_to',
    final_price: 'final_price',
    commission: 'commission'
  };

  export type Awarded_bidsScalarFieldEnum = (typeof Awarded_bidsScalarFieldEnum)[keyof typeof Awarded_bidsScalarFieldEnum]


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


  export const Email_notificationsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    subject: 'subject',
    message: 'message',
    notification_type: 'notification_type',
    is_sent: 'is_sent',
    sent_at: 'sent_at',
    created_at: 'created_at'
  };

  export type Email_notificationsScalarFieldEnum = (typeof Email_notificationsScalarFieldEnum)[keyof typeof Email_notificationsScalarFieldEnum]


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


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    bids_placed?: IntFilter<"users"> | number
    active_bids?: IntFilter<"users"> | number
    won_bids?: IntFilter<"users"> | number
    reset_token?: StringNullableFilter<"users"> | string | null
    reset_token_expiry?: DateTimeNullableFilter<"users"> | Date | string | null
    verification_code?: StringNullableFilter<"users"> | string | null
    code_expires_at?: DateTimeNullableFilter<"users"> | Date | string | null
    is_verified?: BoolFilter<"users"> | boolean
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    verizon_files?: Verizon_filesListRelationFilter
    uploaded_files?: Uploaded_filesListRelationFilter
    bids?: BidsListRelationFilter
    awarded_bids?: Awarded_bidsListRelationFilter
    invoices?: InvoiceListRelationFilter
    email_notifications?: Email_notificationsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
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
    verizon_files?: verizon_filesOrderByRelationAggregateInput
    uploaded_files?: uploaded_filesOrderByRelationAggregateInput
    bids?: bidsOrderByRelationAggregateInput
    awarded_bids?: awarded_bidsOrderByRelationAggregateInput
    invoices?: invoiceOrderByRelationAggregateInput
    email_notifications?: email_notificationsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    bids_placed?: IntFilter<"users"> | number
    active_bids?: IntFilter<"users"> | number
    won_bids?: IntFilter<"users"> | number
    reset_token?: StringNullableFilter<"users"> | string | null
    reset_token_expiry?: DateTimeNullableFilter<"users"> | Date | string | null
    verification_code?: StringNullableFilter<"users"> | string | null
    code_expires_at?: DateTimeNullableFilter<"users"> | Date | string | null
    is_verified?: BoolFilter<"users"> | boolean
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    verizon_files?: Verizon_filesListRelationFilter
    uploaded_files?: Uploaded_filesListRelationFilter
    bids?: BidsListRelationFilter
    awarded_bids?: Awarded_bidsListRelationFilter
    invoices?: InvoiceListRelationFilter
    email_notifications?: Email_notificationsListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
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
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    role?: StringWithAggregatesFilter<"users"> | string
    bids_placed?: IntWithAggregatesFilter<"users"> | number
    active_bids?: IntWithAggregatesFilter<"users"> | number
    won_bids?: IntWithAggregatesFilter<"users"> | number
    reset_token?: StringNullableWithAggregatesFilter<"users"> | string | null
    reset_token_expiry?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    verification_code?: StringNullableWithAggregatesFilter<"users"> | string | null
    code_expires_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    is_verified?: BoolWithAggregatesFilter<"users"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type verizon_filesWhereInput = {
    AND?: verizon_filesWhereInput | verizon_filesWhereInput[]
    OR?: verizon_filesWhereInput[]
    NOT?: verizon_filesWhereInput | verizon_filesWhereInput[]
    id?: UuidFilter<"verizon_files"> | string
    file_name?: StringFilter<"verizon_files"> | string
    uploaded_by?: UuidFilter<"verizon_files"> | string
    upload_time?: DateTimeFilter<"verizon_files"> | Date | string
    cleaned?: BoolFilter<"verizon_files"> | boolean
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    lots?: LotsListRelationFilter
  }

  export type verizon_filesOrderByWithRelationInput = {
    id?: SortOrder
    file_name?: SortOrder
    uploaded_by?: SortOrder
    upload_time?: SortOrder
    cleaned?: SortOrder
    user?: usersOrderByWithRelationInput
    lots?: lotsOrderByRelationAggregateInput
  }

  export type verizon_filesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: verizon_filesWhereInput | verizon_filesWhereInput[]
    OR?: verizon_filesWhereInput[]
    NOT?: verizon_filesWhereInput | verizon_filesWhereInput[]
    file_name?: StringFilter<"verizon_files"> | string
    uploaded_by?: UuidFilter<"verizon_files"> | string
    upload_time?: DateTimeFilter<"verizon_files"> | Date | string
    cleaned?: BoolFilter<"verizon_files"> | boolean
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    lots?: LotsListRelationFilter
  }, "id">

  export type verizon_filesOrderByWithAggregationInput = {
    id?: SortOrder
    file_name?: SortOrder
    uploaded_by?: SortOrder
    upload_time?: SortOrder
    cleaned?: SortOrder
    _count?: verizon_filesCountOrderByAggregateInput
    _max?: verizon_filesMaxOrderByAggregateInput
    _min?: verizon_filesMinOrderByAggregateInput
  }

  export type verizon_filesScalarWhereWithAggregatesInput = {
    AND?: verizon_filesScalarWhereWithAggregatesInput | verizon_filesScalarWhereWithAggregatesInput[]
    OR?: verizon_filesScalarWhereWithAggregatesInput[]
    NOT?: verizon_filesScalarWhereWithAggregatesInput | verizon_filesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"verizon_files"> | string
    file_name?: StringWithAggregatesFilter<"verizon_files"> | string
    uploaded_by?: UuidWithAggregatesFilter<"verizon_files"> | string
    upload_time?: DateTimeWithAggregatesFilter<"verizon_files"> | Date | string
    cleaned?: BoolWithAggregatesFilter<"verizon_files"> | boolean
  }

  export type uploaded_filesWhereInput = {
    AND?: uploaded_filesWhereInput | uploaded_filesWhereInput[]
    OR?: uploaded_filesWhereInput[]
    NOT?: uploaded_filesWhereInput | uploaded_filesWhereInput[]
    id?: StringFilter<"uploaded_files"> | string
    filename?: StringFilter<"uploaded_files"> | string
    processed_name?: StringNullableFilter<"uploaded_files"> | string | null
    user_id?: UuidFilter<"uploaded_files"> | string
    created_at?: DateTimeFilter<"uploaded_files"> | Date | string
    updated_at?: DateTimeFilter<"uploaded_files"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type uploaded_filesOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrder
    processed_name?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type uploaded_filesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: uploaded_filesWhereInput | uploaded_filesWhereInput[]
    OR?: uploaded_filesWhereInput[]
    NOT?: uploaded_filesWhereInput | uploaded_filesWhereInput[]
    filename?: StringFilter<"uploaded_files"> | string
    processed_name?: StringNullableFilter<"uploaded_files"> | string | null
    user_id?: UuidFilter<"uploaded_files"> | string
    created_at?: DateTimeFilter<"uploaded_files"> | Date | string
    updated_at?: DateTimeFilter<"uploaded_files"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type uploaded_filesOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrder
    processed_name?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: uploaded_filesCountOrderByAggregateInput
    _max?: uploaded_filesMaxOrderByAggregateInput
    _min?: uploaded_filesMinOrderByAggregateInput
  }

  export type uploaded_filesScalarWhereWithAggregatesInput = {
    AND?: uploaded_filesScalarWhereWithAggregatesInput | uploaded_filesScalarWhereWithAggregatesInput[]
    OR?: uploaded_filesScalarWhereWithAggregatesInput[]
    NOT?: uploaded_filesScalarWhereWithAggregatesInput | uploaded_filesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"uploaded_files"> | string
    filename?: StringWithAggregatesFilter<"uploaded_files"> | string
    processed_name?: StringNullableWithAggregatesFilter<"uploaded_files"> | string | null
    user_id?: UuidWithAggregatesFilter<"uploaded_files"> | string
    created_at?: DateTimeWithAggregatesFilter<"uploaded_files"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"uploaded_files"> | Date | string
  }

  export type lotsWhereInput = {
    AND?: lotsWhereInput | lotsWhereInput[]
    OR?: lotsWhereInput[]
    NOT?: lotsWhereInput | lotsWhereInput[]
    id?: UuidFilter<"lots"> | string
    verizon_file_id?: UuidNullableFilter<"lots"> | string | null
    lot_number?: StringFilter<"lots"> | string
    item_description?: StringNullableFilter<"lots"> | string | null
    grade?: StringNullableFilter<"lots"> | string | null
    quantity?: IntNullableFilter<"lots"> | number | null
    base_price?: FloatNullableFilter<"lots"> | number | null
    commission_rate?: FloatFilter<"lots"> | number
    oem?: StringNullableFilter<"lots"> | string | null
    sku?: StringNullableFilter<"lots"> | string | null
    prop65_warning?: StringNullableFilter<"lots"> | string | null
    description?: StringNullableFilter<"lots"> | string | null
    disposition?: StringNullableFilter<"lots"> | string | null
    unit_awarded_price?: FloatNullableFilter<"lots"> | number | null
    available_from?: DateTimeNullableFilter<"lots"> | Date | string | null
    available_to?: DateTimeNullableFilter<"lots"> | Date | string | null
    created_at?: DateTimeFilter<"lots"> | Date | string
    updated_at?: DateTimeFilter<"lots"> | Date | string
    verizon_file?: XOR<Verizon_filesNullableScalarRelationFilter, verizon_filesWhereInput> | null
    bids?: BidsListRelationFilter
    awarded_bids?: Awarded_bidsListRelationFilter
  }

  export type lotsOrderByWithRelationInput = {
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
    verizon_file?: verizon_filesOrderByWithRelationInput
    bids?: bidsOrderByRelationAggregateInput
    awarded_bids?: awarded_bidsOrderByRelationAggregateInput
  }

  export type lotsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: lotsWhereInput | lotsWhereInput[]
    OR?: lotsWhereInput[]
    NOT?: lotsWhereInput | lotsWhereInput[]
    verizon_file_id?: UuidNullableFilter<"lots"> | string | null
    lot_number?: StringFilter<"lots"> | string
    item_description?: StringNullableFilter<"lots"> | string | null
    grade?: StringNullableFilter<"lots"> | string | null
    quantity?: IntNullableFilter<"lots"> | number | null
    base_price?: FloatNullableFilter<"lots"> | number | null
    commission_rate?: FloatFilter<"lots"> | number
    oem?: StringNullableFilter<"lots"> | string | null
    sku?: StringNullableFilter<"lots"> | string | null
    prop65_warning?: StringNullableFilter<"lots"> | string | null
    description?: StringNullableFilter<"lots"> | string | null
    disposition?: StringNullableFilter<"lots"> | string | null
    unit_awarded_price?: FloatNullableFilter<"lots"> | number | null
    available_from?: DateTimeNullableFilter<"lots"> | Date | string | null
    available_to?: DateTimeNullableFilter<"lots"> | Date | string | null
    created_at?: DateTimeFilter<"lots"> | Date | string
    updated_at?: DateTimeFilter<"lots"> | Date | string
    verizon_file?: XOR<Verizon_filesNullableScalarRelationFilter, verizon_filesWhereInput> | null
    bids?: BidsListRelationFilter
    awarded_bids?: Awarded_bidsListRelationFilter
  }, "id">

  export type lotsOrderByWithAggregationInput = {
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
    _count?: lotsCountOrderByAggregateInput
    _avg?: lotsAvgOrderByAggregateInput
    _max?: lotsMaxOrderByAggregateInput
    _min?: lotsMinOrderByAggregateInput
    _sum?: lotsSumOrderByAggregateInput
  }

  export type lotsScalarWhereWithAggregatesInput = {
    AND?: lotsScalarWhereWithAggregatesInput | lotsScalarWhereWithAggregatesInput[]
    OR?: lotsScalarWhereWithAggregatesInput[]
    NOT?: lotsScalarWhereWithAggregatesInput | lotsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"lots"> | string
    verizon_file_id?: UuidNullableWithAggregatesFilter<"lots"> | string | null
    lot_number?: StringWithAggregatesFilter<"lots"> | string
    item_description?: StringNullableWithAggregatesFilter<"lots"> | string | null
    grade?: StringNullableWithAggregatesFilter<"lots"> | string | null
    quantity?: IntNullableWithAggregatesFilter<"lots"> | number | null
    base_price?: FloatNullableWithAggregatesFilter<"lots"> | number | null
    commission_rate?: FloatWithAggregatesFilter<"lots"> | number
    oem?: StringNullableWithAggregatesFilter<"lots"> | string | null
    sku?: StringNullableWithAggregatesFilter<"lots"> | string | null
    prop65_warning?: StringNullableWithAggregatesFilter<"lots"> | string | null
    description?: StringNullableWithAggregatesFilter<"lots"> | string | null
    disposition?: StringNullableWithAggregatesFilter<"lots"> | string | null
    unit_awarded_price?: FloatNullableWithAggregatesFilter<"lots"> | number | null
    available_from?: DateTimeNullableWithAggregatesFilter<"lots"> | Date | string | null
    available_to?: DateTimeNullableWithAggregatesFilter<"lots"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"lots"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"lots"> | Date | string
  }

  export type bidsWhereInput = {
    AND?: bidsWhereInput | bidsWhereInput[]
    OR?: bidsWhereInput[]
    NOT?: bidsWhereInput | bidsWhereInput[]
    id?: UuidFilter<"bids"> | string
    user_id?: UuidFilter<"bids"> | string
    lot_id?: UuidFilter<"bids"> | string
    bid_amount?: FloatFilter<"bids"> | number
    submitted_at?: DateTimeFilter<"bids"> | Date | string
    status?: StringFilter<"bids"> | string
    bid_time?: DateTimeNullableFilter<"bids"> | Date | string | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    lot?: XOR<LotsScalarRelationFilter, lotsWhereInput>
  }

  export type bidsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    lot_id?: SortOrder
    bid_amount?: SortOrder
    submitted_at?: SortOrder
    status?: SortOrder
    bid_time?: SortOrderInput | SortOrder
    user?: usersOrderByWithRelationInput
    lot?: lotsOrderByWithRelationInput
  }

  export type bidsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: bidsWhereInput | bidsWhereInput[]
    OR?: bidsWhereInput[]
    NOT?: bidsWhereInput | bidsWhereInput[]
    user_id?: UuidFilter<"bids"> | string
    lot_id?: UuidFilter<"bids"> | string
    bid_amount?: FloatFilter<"bids"> | number
    submitted_at?: DateTimeFilter<"bids"> | Date | string
    status?: StringFilter<"bids"> | string
    bid_time?: DateTimeNullableFilter<"bids"> | Date | string | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    lot?: XOR<LotsScalarRelationFilter, lotsWhereInput>
  }, "id">

  export type bidsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    lot_id?: SortOrder
    bid_amount?: SortOrder
    submitted_at?: SortOrder
    status?: SortOrder
    bid_time?: SortOrderInput | SortOrder
    _count?: bidsCountOrderByAggregateInput
    _avg?: bidsAvgOrderByAggregateInput
    _max?: bidsMaxOrderByAggregateInput
    _min?: bidsMinOrderByAggregateInput
    _sum?: bidsSumOrderByAggregateInput
  }

  export type bidsScalarWhereWithAggregatesInput = {
    AND?: bidsScalarWhereWithAggregatesInput | bidsScalarWhereWithAggregatesInput[]
    OR?: bidsScalarWhereWithAggregatesInput[]
    NOT?: bidsScalarWhereWithAggregatesInput | bidsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"bids"> | string
    user_id?: UuidWithAggregatesFilter<"bids"> | string
    lot_id?: UuidWithAggregatesFilter<"bids"> | string
    bid_amount?: FloatWithAggregatesFilter<"bids"> | number
    submitted_at?: DateTimeWithAggregatesFilter<"bids"> | Date | string
    status?: StringWithAggregatesFilter<"bids"> | string
    bid_time?: DateTimeNullableWithAggregatesFilter<"bids"> | Date | string | null
  }

  export type awarded_bidsWhereInput = {
    AND?: awarded_bidsWhereInput | awarded_bidsWhereInput[]
    OR?: awarded_bidsWhereInput[]
    NOT?: awarded_bidsWhereInput | awarded_bidsWhereInput[]
    id?: StringFilter<"awarded_bids"> | string
    lot_id?: UuidFilter<"awarded_bids"> | string
    awarded_to?: UuidFilter<"awarded_bids"> | string
    final_price?: FloatFilter<"awarded_bids"> | number
    commission?: FloatFilter<"awarded_bids"> | number
    lot?: XOR<LotsScalarRelationFilter, lotsWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type awarded_bidsOrderByWithRelationInput = {
    id?: SortOrder
    lot_id?: SortOrder
    awarded_to?: SortOrder
    final_price?: SortOrder
    commission?: SortOrder
    lot?: lotsOrderByWithRelationInput
    user?: usersOrderByWithRelationInput
  }

  export type awarded_bidsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: awarded_bidsWhereInput | awarded_bidsWhereInput[]
    OR?: awarded_bidsWhereInput[]
    NOT?: awarded_bidsWhereInput | awarded_bidsWhereInput[]
    lot_id?: UuidFilter<"awarded_bids"> | string
    awarded_to?: UuidFilter<"awarded_bids"> | string
    final_price?: FloatFilter<"awarded_bids"> | number
    commission?: FloatFilter<"awarded_bids"> | number
    lot?: XOR<LotsScalarRelationFilter, lotsWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type awarded_bidsOrderByWithAggregationInput = {
    id?: SortOrder
    lot_id?: SortOrder
    awarded_to?: SortOrder
    final_price?: SortOrder
    commission?: SortOrder
    _count?: awarded_bidsCountOrderByAggregateInput
    _avg?: awarded_bidsAvgOrderByAggregateInput
    _max?: awarded_bidsMaxOrderByAggregateInput
    _min?: awarded_bidsMinOrderByAggregateInput
    _sum?: awarded_bidsSumOrderByAggregateInput
  }

  export type awarded_bidsScalarWhereWithAggregatesInput = {
    AND?: awarded_bidsScalarWhereWithAggregatesInput | awarded_bidsScalarWhereWithAggregatesInput[]
    OR?: awarded_bidsScalarWhereWithAggregatesInput[]
    NOT?: awarded_bidsScalarWhereWithAggregatesInput | awarded_bidsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"awarded_bids"> | string
    lot_id?: UuidWithAggregatesFilter<"awarded_bids"> | string
    awarded_to?: UuidWithAggregatesFilter<"awarded_bids"> | string
    final_price?: FloatWithAggregatesFilter<"awarded_bids"> | number
    commission?: FloatWithAggregatesFilter<"awarded_bids"> | number
  }

  export type invoiceWhereInput = {
    AND?: invoiceWhereInput | invoiceWhereInput[]
    OR?: invoiceWhereInput[]
    NOT?: invoiceWhereInput | invoiceWhereInput[]
    id?: StringFilter<"invoice"> | string
    user_id?: UuidFilter<"invoice"> | string
    awarded_bid_ids?: StringNullableListFilter<"invoice">
    invoice_number?: StringFilter<"invoice"> | string
    generated_at?: DateTimeFilter<"invoice"> | Date | string
    total_amount?: FloatFilter<"invoice"> | number
    pdf_url?: StringNullableFilter<"invoice"> | string | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type invoiceOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    awarded_bid_ids?: SortOrder
    invoice_number?: SortOrder
    generated_at?: SortOrder
    total_amount?: SortOrder
    pdf_url?: SortOrderInput | SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type invoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    invoice_number?: string
    AND?: invoiceWhereInput | invoiceWhereInput[]
    OR?: invoiceWhereInput[]
    NOT?: invoiceWhereInput | invoiceWhereInput[]
    user_id?: UuidFilter<"invoice"> | string
    awarded_bid_ids?: StringNullableListFilter<"invoice">
    generated_at?: DateTimeFilter<"invoice"> | Date | string
    total_amount?: FloatFilter<"invoice"> | number
    pdf_url?: StringNullableFilter<"invoice"> | string | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "invoice_number">

  export type invoiceOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    awarded_bid_ids?: SortOrder
    invoice_number?: SortOrder
    generated_at?: SortOrder
    total_amount?: SortOrder
    pdf_url?: SortOrderInput | SortOrder
    _count?: invoiceCountOrderByAggregateInput
    _avg?: invoiceAvgOrderByAggregateInput
    _max?: invoiceMaxOrderByAggregateInput
    _min?: invoiceMinOrderByAggregateInput
    _sum?: invoiceSumOrderByAggregateInput
  }

  export type invoiceScalarWhereWithAggregatesInput = {
    AND?: invoiceScalarWhereWithAggregatesInput | invoiceScalarWhereWithAggregatesInput[]
    OR?: invoiceScalarWhereWithAggregatesInput[]
    NOT?: invoiceScalarWhereWithAggregatesInput | invoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"invoice"> | string
    user_id?: UuidWithAggregatesFilter<"invoice"> | string
    awarded_bid_ids?: StringNullableListFilter<"invoice">
    invoice_number?: StringWithAggregatesFilter<"invoice"> | string
    generated_at?: DateTimeWithAggregatesFilter<"invoice"> | Date | string
    total_amount?: FloatWithAggregatesFilter<"invoice"> | number
    pdf_url?: StringNullableWithAggregatesFilter<"invoice"> | string | null
  }

  export type email_notificationsWhereInput = {
    AND?: email_notificationsWhereInput | email_notificationsWhereInput[]
    OR?: email_notificationsWhereInput[]
    NOT?: email_notificationsWhereInput | email_notificationsWhereInput[]
    id?: IntFilter<"email_notifications"> | number
    user_id?: UuidNullableFilter<"email_notifications"> | string | null
    subject?: StringFilter<"email_notifications"> | string
    message?: StringFilter<"email_notifications"> | string
    notification_type?: StringNullableFilter<"email_notifications"> | string | null
    is_sent?: BoolFilter<"email_notifications"> | boolean
    sent_at?: DateTimeNullableFilter<"email_notifications"> | Date | string | null
    created_at?: DateTimeFilter<"email_notifications"> | Date | string
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type email_notificationsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    subject?: SortOrder
    message?: SortOrder
    notification_type?: SortOrderInput | SortOrder
    is_sent?: SortOrder
    sent_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type email_notificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: email_notificationsWhereInput | email_notificationsWhereInput[]
    OR?: email_notificationsWhereInput[]
    NOT?: email_notificationsWhereInput | email_notificationsWhereInput[]
    user_id?: UuidNullableFilter<"email_notifications"> | string | null
    subject?: StringFilter<"email_notifications"> | string
    message?: StringFilter<"email_notifications"> | string
    notification_type?: StringNullableFilter<"email_notifications"> | string | null
    is_sent?: BoolFilter<"email_notifications"> | boolean
    sent_at?: DateTimeNullableFilter<"email_notifications"> | Date | string | null
    created_at?: DateTimeFilter<"email_notifications"> | Date | string
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type email_notificationsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    subject?: SortOrder
    message?: SortOrder
    notification_type?: SortOrderInput | SortOrder
    is_sent?: SortOrder
    sent_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: email_notificationsCountOrderByAggregateInput
    _avg?: email_notificationsAvgOrderByAggregateInput
    _max?: email_notificationsMaxOrderByAggregateInput
    _min?: email_notificationsMinOrderByAggregateInput
    _sum?: email_notificationsSumOrderByAggregateInput
  }

  export type email_notificationsScalarWhereWithAggregatesInput = {
    AND?: email_notificationsScalarWhereWithAggregatesInput | email_notificationsScalarWhereWithAggregatesInput[]
    OR?: email_notificationsScalarWhereWithAggregatesInput[]
    NOT?: email_notificationsScalarWhereWithAggregatesInput | email_notificationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"email_notifications"> | number
    user_id?: UuidNullableWithAggregatesFilter<"email_notifications"> | string | null
    subject?: StringWithAggregatesFilter<"email_notifications"> | string
    message?: StringWithAggregatesFilter<"email_notifications"> | string
    notification_type?: StringNullableWithAggregatesFilter<"email_notifications"> | string | null
    is_sent?: BoolWithAggregatesFilter<"email_notifications"> | boolean
    sent_at?: DateTimeNullableWithAggregatesFilter<"email_notifications"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"email_notifications"> | Date | string
  }

  export type usersCreateInput = {
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
    verizon_files?: verizon_filesCreateNestedManyWithoutUserInput
    uploaded_files?: uploaded_filesCreateNestedManyWithoutUserInput
    bids?: bidsCreateNestedManyWithoutUserInput
    awarded_bids?: awarded_bidsCreateNestedManyWithoutUserInput
    invoices?: invoiceCreateNestedManyWithoutUserInput
    email_notifications?: email_notificationsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
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
    verizon_files?: verizon_filesUncheckedCreateNestedManyWithoutUserInput
    uploaded_files?: uploaded_filesUncheckedCreateNestedManyWithoutUserInput
    bids?: bidsUncheckedCreateNestedManyWithoutUserInput
    awarded_bids?: awarded_bidsUncheckedCreateNestedManyWithoutUserInput
    invoices?: invoiceUncheckedCreateNestedManyWithoutUserInput
    email_notifications?: email_notificationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
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
    verizon_files?: verizon_filesUpdateManyWithoutUserNestedInput
    uploaded_files?: uploaded_filesUpdateManyWithoutUserNestedInput
    bids?: bidsUpdateManyWithoutUserNestedInput
    awarded_bids?: awarded_bidsUpdateManyWithoutUserNestedInput
    invoices?: invoiceUpdateManyWithoutUserNestedInput
    email_notifications?: email_notificationsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
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
    verizon_files?: verizon_filesUncheckedUpdateManyWithoutUserNestedInput
    uploaded_files?: uploaded_filesUncheckedUpdateManyWithoutUserNestedInput
    bids?: bidsUncheckedUpdateManyWithoutUserNestedInput
    awarded_bids?: awarded_bidsUncheckedUpdateManyWithoutUserNestedInput
    invoices?: invoiceUncheckedUpdateManyWithoutUserNestedInput
    email_notifications?: email_notificationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
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

  export type usersUpdateManyMutationInput = {
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

  export type usersUncheckedUpdateManyInput = {
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

  export type verizon_filesCreateInput = {
    id?: string
    file_name: string
    upload_time?: Date | string
    cleaned?: boolean
    user: usersCreateNestedOneWithoutVerizon_filesInput
    lots?: lotsCreateNestedManyWithoutVerizon_fileInput
  }

  export type verizon_filesUncheckedCreateInput = {
    id?: string
    file_name: string
    uploaded_by: string
    upload_time?: Date | string
    cleaned?: boolean
    lots?: lotsUncheckedCreateNestedManyWithoutVerizon_fileInput
  }

  export type verizon_filesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    upload_time?: DateTimeFieldUpdateOperationsInput | Date | string
    cleaned?: BoolFieldUpdateOperationsInput | boolean
    user?: usersUpdateOneRequiredWithoutVerizon_filesNestedInput
    lots?: lotsUpdateManyWithoutVerizon_fileNestedInput
  }

  export type verizon_filesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    uploaded_by?: StringFieldUpdateOperationsInput | string
    upload_time?: DateTimeFieldUpdateOperationsInput | Date | string
    cleaned?: BoolFieldUpdateOperationsInput | boolean
    lots?: lotsUncheckedUpdateManyWithoutVerizon_fileNestedInput
  }

  export type verizon_filesCreateManyInput = {
    id?: string
    file_name: string
    uploaded_by: string
    upload_time?: Date | string
    cleaned?: boolean
  }

  export type verizon_filesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    upload_time?: DateTimeFieldUpdateOperationsInput | Date | string
    cleaned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type verizon_filesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    uploaded_by?: StringFieldUpdateOperationsInput | string
    upload_time?: DateTimeFieldUpdateOperationsInput | Date | string
    cleaned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type uploaded_filesCreateInput = {
    id?: string
    filename: string
    processed_name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: usersCreateNestedOneWithoutUploaded_filesInput
  }

  export type uploaded_filesUncheckedCreateInput = {
    id?: string
    filename: string
    processed_name?: string | null
    user_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type uploaded_filesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    processed_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutUploaded_filesNestedInput
  }

  export type uploaded_filesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    processed_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type uploaded_filesCreateManyInput = {
    id?: string
    filename: string
    processed_name?: string | null
    user_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type uploaded_filesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    processed_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type uploaded_filesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    processed_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lotsCreateInput = {
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
    verizon_file?: verizon_filesCreateNestedOneWithoutLotsInput
    bids?: bidsCreateNestedManyWithoutLotInput
    awarded_bids?: awarded_bidsCreateNestedManyWithoutLotInput
  }

  export type lotsUncheckedCreateInput = {
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
    bids?: bidsUncheckedCreateNestedManyWithoutLotInput
    awarded_bids?: awarded_bidsUncheckedCreateNestedManyWithoutLotInput
  }

  export type lotsUpdateInput = {
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
    verizon_file?: verizon_filesUpdateOneWithoutLotsNestedInput
    bids?: bidsUpdateManyWithoutLotNestedInput
    awarded_bids?: awarded_bidsUpdateManyWithoutLotNestedInput
  }

  export type lotsUncheckedUpdateInput = {
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
    bids?: bidsUncheckedUpdateManyWithoutLotNestedInput
    awarded_bids?: awarded_bidsUncheckedUpdateManyWithoutLotNestedInput
  }

  export type lotsCreateManyInput = {
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

  export type lotsUpdateManyMutationInput = {
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

  export type lotsUncheckedUpdateManyInput = {
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

  export type bidsCreateInput = {
    id?: string
    bid_amount: number
    submitted_at?: Date | string
    status?: string
    bid_time?: Date | string | null
    user: usersCreateNestedOneWithoutBidsInput
    lot: lotsCreateNestedOneWithoutBidsInput
  }

  export type bidsUncheckedCreateInput = {
    id?: string
    user_id: string
    lot_id: string
    bid_amount: number
    submitted_at?: Date | string
    status?: string
    bid_time?: Date | string | null
  }

  export type bidsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bid_amount?: FloatFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    bid_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: usersUpdateOneRequiredWithoutBidsNestedInput
    lot?: lotsUpdateOneRequiredWithoutBidsNestedInput
  }

  export type bidsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    lot_id?: StringFieldUpdateOperationsInput | string
    bid_amount?: FloatFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    bid_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bidsCreateManyInput = {
    id?: string
    user_id: string
    lot_id: string
    bid_amount: number
    submitted_at?: Date | string
    status?: string
    bid_time?: Date | string | null
  }

  export type bidsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bid_amount?: FloatFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    bid_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bidsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    lot_id?: StringFieldUpdateOperationsInput | string
    bid_amount?: FloatFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    bid_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type awarded_bidsCreateInput = {
    id?: string
    final_price: number
    commission: number
    lot: lotsCreateNestedOneWithoutAwarded_bidsInput
    user: usersCreateNestedOneWithoutAwarded_bidsInput
  }

  export type awarded_bidsUncheckedCreateInput = {
    id?: string
    lot_id: string
    awarded_to: string
    final_price: number
    commission: number
  }

  export type awarded_bidsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    final_price?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    lot?: lotsUpdateOneRequiredWithoutAwarded_bidsNestedInput
    user?: usersUpdateOneRequiredWithoutAwarded_bidsNestedInput
  }

  export type awarded_bidsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lot_id?: StringFieldUpdateOperationsInput | string
    awarded_to?: StringFieldUpdateOperationsInput | string
    final_price?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
  }

  export type awarded_bidsCreateManyInput = {
    id?: string
    lot_id: string
    awarded_to: string
    final_price: number
    commission: number
  }

  export type awarded_bidsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    final_price?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
  }

  export type awarded_bidsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lot_id?: StringFieldUpdateOperationsInput | string
    awarded_to?: StringFieldUpdateOperationsInput | string
    final_price?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
  }

  export type invoiceCreateInput = {
    id?: string
    awarded_bid_ids?: invoiceCreateawarded_bid_idsInput | string[]
    invoice_number: string
    generated_at?: Date | string
    total_amount: number
    pdf_url?: string | null
    user: usersCreateNestedOneWithoutInvoicesInput
  }

  export type invoiceUncheckedCreateInput = {
    id?: string
    user_id: string
    awarded_bid_ids?: invoiceCreateawarded_bid_idsInput | string[]
    invoice_number: string
    generated_at?: Date | string
    total_amount: number
    pdf_url?: string | null
  }

  export type invoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    awarded_bid_ids?: invoiceUpdateawarded_bid_idsInput | string[]
    invoice_number?: StringFieldUpdateOperationsInput | string
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: FloatFieldUpdateOperationsInput | number
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type invoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    awarded_bid_ids?: invoiceUpdateawarded_bid_idsInput | string[]
    invoice_number?: StringFieldUpdateOperationsInput | string
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: FloatFieldUpdateOperationsInput | number
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type invoiceCreateManyInput = {
    id?: string
    user_id: string
    awarded_bid_ids?: invoiceCreateawarded_bid_idsInput | string[]
    invoice_number: string
    generated_at?: Date | string
    total_amount: number
    pdf_url?: string | null
  }

  export type invoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    awarded_bid_ids?: invoiceUpdateawarded_bid_idsInput | string[]
    invoice_number?: StringFieldUpdateOperationsInput | string
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: FloatFieldUpdateOperationsInput | number
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type invoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    awarded_bid_ids?: invoiceUpdateawarded_bid_idsInput | string[]
    invoice_number?: StringFieldUpdateOperationsInput | string
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: FloatFieldUpdateOperationsInput | number
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type email_notificationsCreateInput = {
    subject: string
    message: string
    notification_type?: string | null
    is_sent?: boolean
    sent_at?: Date | string | null
    created_at?: Date | string
    user?: usersCreateNestedOneWithoutEmail_notificationsInput
  }

  export type email_notificationsUncheckedCreateInput = {
    id?: number
    user_id?: string | null
    subject: string
    message: string
    notification_type?: string | null
    is_sent?: boolean
    sent_at?: Date | string | null
    created_at?: Date | string
  }

  export type email_notificationsUpdateInput = {
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_sent?: BoolFieldUpdateOperationsInput | boolean
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneWithoutEmail_notificationsNestedInput
  }

  export type email_notificationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_sent?: BoolFieldUpdateOperationsInput | boolean
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type email_notificationsCreateManyInput = {
    id?: number
    user_id?: string | null
    subject: string
    message: string
    notification_type?: string | null
    is_sent?: boolean
    sent_at?: Date | string | null
    created_at?: Date | string
  }

  export type email_notificationsUpdateManyMutationInput = {
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_sent?: BoolFieldUpdateOperationsInput | boolean
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type email_notificationsUncheckedUpdateManyInput = {
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

  export type Verizon_filesListRelationFilter = {
    every?: verizon_filesWhereInput
    some?: verizon_filesWhereInput
    none?: verizon_filesWhereInput
  }

  export type Uploaded_filesListRelationFilter = {
    every?: uploaded_filesWhereInput
    some?: uploaded_filesWhereInput
    none?: uploaded_filesWhereInput
  }

  export type BidsListRelationFilter = {
    every?: bidsWhereInput
    some?: bidsWhereInput
    none?: bidsWhereInput
  }

  export type Awarded_bidsListRelationFilter = {
    every?: awarded_bidsWhereInput
    some?: awarded_bidsWhereInput
    none?: awarded_bidsWhereInput
  }

  export type InvoiceListRelationFilter = {
    every?: invoiceWhereInput
    some?: invoiceWhereInput
    none?: invoiceWhereInput
  }

  export type Email_notificationsListRelationFilter = {
    every?: email_notificationsWhereInput
    some?: email_notificationsWhereInput
    none?: email_notificationsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type verizon_filesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type uploaded_filesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type bidsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type awarded_bidsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type invoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type email_notificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
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

  export type usersAvgOrderByAggregateInput = {
    bids_placed?: SortOrder
    active_bids?: SortOrder
    won_bids?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
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

  export type usersMinOrderByAggregateInput = {
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

  export type usersSumOrderByAggregateInput = {
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

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type LotsListRelationFilter = {
    every?: lotsWhereInput
    some?: lotsWhereInput
    none?: lotsWhereInput
  }

  export type lotsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type verizon_filesCountOrderByAggregateInput = {
    id?: SortOrder
    file_name?: SortOrder
    uploaded_by?: SortOrder
    upload_time?: SortOrder
    cleaned?: SortOrder
  }

  export type verizon_filesMaxOrderByAggregateInput = {
    id?: SortOrder
    file_name?: SortOrder
    uploaded_by?: SortOrder
    upload_time?: SortOrder
    cleaned?: SortOrder
  }

  export type verizon_filesMinOrderByAggregateInput = {
    id?: SortOrder
    file_name?: SortOrder
    uploaded_by?: SortOrder
    upload_time?: SortOrder
    cleaned?: SortOrder
  }

  export type uploaded_filesCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    processed_name?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type uploaded_filesMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    processed_name?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type uploaded_filesMinOrderByAggregateInput = {
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

  export type Verizon_filesNullableScalarRelationFilter = {
    is?: verizon_filesWhereInput | null
    isNot?: verizon_filesWhereInput | null
  }

  export type lotsCountOrderByAggregateInput = {
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

  export type lotsAvgOrderByAggregateInput = {
    quantity?: SortOrder
    base_price?: SortOrder
    commission_rate?: SortOrder
    unit_awarded_price?: SortOrder
  }

  export type lotsMaxOrderByAggregateInput = {
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

  export type lotsMinOrderByAggregateInput = {
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

  export type lotsSumOrderByAggregateInput = {
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

  export type LotsScalarRelationFilter = {
    is?: lotsWhereInput
    isNot?: lotsWhereInput
  }

  export type bidsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    lot_id?: SortOrder
    bid_amount?: SortOrder
    submitted_at?: SortOrder
    status?: SortOrder
    bid_time?: SortOrder
  }

  export type bidsAvgOrderByAggregateInput = {
    bid_amount?: SortOrder
  }

  export type bidsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    lot_id?: SortOrder
    bid_amount?: SortOrder
    submitted_at?: SortOrder
    status?: SortOrder
    bid_time?: SortOrder
  }

  export type bidsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    lot_id?: SortOrder
    bid_amount?: SortOrder
    submitted_at?: SortOrder
    status?: SortOrder
    bid_time?: SortOrder
  }

  export type bidsSumOrderByAggregateInput = {
    bid_amount?: SortOrder
  }

  export type awarded_bidsCountOrderByAggregateInput = {
    id?: SortOrder
    lot_id?: SortOrder
    awarded_to?: SortOrder
    final_price?: SortOrder
    commission?: SortOrder
  }

  export type awarded_bidsAvgOrderByAggregateInput = {
    final_price?: SortOrder
    commission?: SortOrder
  }

  export type awarded_bidsMaxOrderByAggregateInput = {
    id?: SortOrder
    lot_id?: SortOrder
    awarded_to?: SortOrder
    final_price?: SortOrder
    commission?: SortOrder
  }

  export type awarded_bidsMinOrderByAggregateInput = {
    id?: SortOrder
    lot_id?: SortOrder
    awarded_to?: SortOrder
    final_price?: SortOrder
    commission?: SortOrder
  }

  export type awarded_bidsSumOrderByAggregateInput = {
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

  export type invoiceCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    awarded_bid_ids?: SortOrder
    invoice_number?: SortOrder
    generated_at?: SortOrder
    total_amount?: SortOrder
    pdf_url?: SortOrder
  }

  export type invoiceAvgOrderByAggregateInput = {
    total_amount?: SortOrder
  }

  export type invoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    invoice_number?: SortOrder
    generated_at?: SortOrder
    total_amount?: SortOrder
    pdf_url?: SortOrder
  }

  export type invoiceMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    invoice_number?: SortOrder
    generated_at?: SortOrder
    total_amount?: SortOrder
    pdf_url?: SortOrder
  }

  export type invoiceSumOrderByAggregateInput = {
    total_amount?: SortOrder
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type email_notificationsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    notification_type?: SortOrder
    is_sent?: SortOrder
    sent_at?: SortOrder
    created_at?: SortOrder
  }

  export type email_notificationsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type email_notificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    notification_type?: SortOrder
    is_sent?: SortOrder
    sent_at?: SortOrder
    created_at?: SortOrder
  }

  export type email_notificationsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    notification_type?: SortOrder
    is_sent?: SortOrder
    sent_at?: SortOrder
    created_at?: SortOrder
  }

  export type email_notificationsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type verizon_filesCreateNestedManyWithoutUserInput = {
    create?: XOR<verizon_filesCreateWithoutUserInput, verizon_filesUncheckedCreateWithoutUserInput> | verizon_filesCreateWithoutUserInput[] | verizon_filesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: verizon_filesCreateOrConnectWithoutUserInput | verizon_filesCreateOrConnectWithoutUserInput[]
    createMany?: verizon_filesCreateManyUserInputEnvelope
    connect?: verizon_filesWhereUniqueInput | verizon_filesWhereUniqueInput[]
  }

  export type uploaded_filesCreateNestedManyWithoutUserInput = {
    create?: XOR<uploaded_filesCreateWithoutUserInput, uploaded_filesUncheckedCreateWithoutUserInput> | uploaded_filesCreateWithoutUserInput[] | uploaded_filesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: uploaded_filesCreateOrConnectWithoutUserInput | uploaded_filesCreateOrConnectWithoutUserInput[]
    createMany?: uploaded_filesCreateManyUserInputEnvelope
    connect?: uploaded_filesWhereUniqueInput | uploaded_filesWhereUniqueInput[]
  }

  export type bidsCreateNestedManyWithoutUserInput = {
    create?: XOR<bidsCreateWithoutUserInput, bidsUncheckedCreateWithoutUserInput> | bidsCreateWithoutUserInput[] | bidsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bidsCreateOrConnectWithoutUserInput | bidsCreateOrConnectWithoutUserInput[]
    createMany?: bidsCreateManyUserInputEnvelope
    connect?: bidsWhereUniqueInput | bidsWhereUniqueInput[]
  }

  export type awarded_bidsCreateNestedManyWithoutUserInput = {
    create?: XOR<awarded_bidsCreateWithoutUserInput, awarded_bidsUncheckedCreateWithoutUserInput> | awarded_bidsCreateWithoutUserInput[] | awarded_bidsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: awarded_bidsCreateOrConnectWithoutUserInput | awarded_bidsCreateOrConnectWithoutUserInput[]
    createMany?: awarded_bidsCreateManyUserInputEnvelope
    connect?: awarded_bidsWhereUniqueInput | awarded_bidsWhereUniqueInput[]
  }

  export type invoiceCreateNestedManyWithoutUserInput = {
    create?: XOR<invoiceCreateWithoutUserInput, invoiceUncheckedCreateWithoutUserInput> | invoiceCreateWithoutUserInput[] | invoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: invoiceCreateOrConnectWithoutUserInput | invoiceCreateOrConnectWithoutUserInput[]
    createMany?: invoiceCreateManyUserInputEnvelope
    connect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
  }

  export type email_notificationsCreateNestedManyWithoutUserInput = {
    create?: XOR<email_notificationsCreateWithoutUserInput, email_notificationsUncheckedCreateWithoutUserInput> | email_notificationsCreateWithoutUserInput[] | email_notificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: email_notificationsCreateOrConnectWithoutUserInput | email_notificationsCreateOrConnectWithoutUserInput[]
    createMany?: email_notificationsCreateManyUserInputEnvelope
    connect?: email_notificationsWhereUniqueInput | email_notificationsWhereUniqueInput[]
  }

  export type verizon_filesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<verizon_filesCreateWithoutUserInput, verizon_filesUncheckedCreateWithoutUserInput> | verizon_filesCreateWithoutUserInput[] | verizon_filesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: verizon_filesCreateOrConnectWithoutUserInput | verizon_filesCreateOrConnectWithoutUserInput[]
    createMany?: verizon_filesCreateManyUserInputEnvelope
    connect?: verizon_filesWhereUniqueInput | verizon_filesWhereUniqueInput[]
  }

  export type uploaded_filesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<uploaded_filesCreateWithoutUserInput, uploaded_filesUncheckedCreateWithoutUserInput> | uploaded_filesCreateWithoutUserInput[] | uploaded_filesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: uploaded_filesCreateOrConnectWithoutUserInput | uploaded_filesCreateOrConnectWithoutUserInput[]
    createMany?: uploaded_filesCreateManyUserInputEnvelope
    connect?: uploaded_filesWhereUniqueInput | uploaded_filesWhereUniqueInput[]
  }

  export type bidsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<bidsCreateWithoutUserInput, bidsUncheckedCreateWithoutUserInput> | bidsCreateWithoutUserInput[] | bidsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bidsCreateOrConnectWithoutUserInput | bidsCreateOrConnectWithoutUserInput[]
    createMany?: bidsCreateManyUserInputEnvelope
    connect?: bidsWhereUniqueInput | bidsWhereUniqueInput[]
  }

  export type awarded_bidsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<awarded_bidsCreateWithoutUserInput, awarded_bidsUncheckedCreateWithoutUserInput> | awarded_bidsCreateWithoutUserInput[] | awarded_bidsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: awarded_bidsCreateOrConnectWithoutUserInput | awarded_bidsCreateOrConnectWithoutUserInput[]
    createMany?: awarded_bidsCreateManyUserInputEnvelope
    connect?: awarded_bidsWhereUniqueInput | awarded_bidsWhereUniqueInput[]
  }

  export type invoiceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<invoiceCreateWithoutUserInput, invoiceUncheckedCreateWithoutUserInput> | invoiceCreateWithoutUserInput[] | invoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: invoiceCreateOrConnectWithoutUserInput | invoiceCreateOrConnectWithoutUserInput[]
    createMany?: invoiceCreateManyUserInputEnvelope
    connect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
  }

  export type email_notificationsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<email_notificationsCreateWithoutUserInput, email_notificationsUncheckedCreateWithoutUserInput> | email_notificationsCreateWithoutUserInput[] | email_notificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: email_notificationsCreateOrConnectWithoutUserInput | email_notificationsCreateOrConnectWithoutUserInput[]
    createMany?: email_notificationsCreateManyUserInputEnvelope
    connect?: email_notificationsWhereUniqueInput | email_notificationsWhereUniqueInput[]
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

  export type verizon_filesUpdateManyWithoutUserNestedInput = {
    create?: XOR<verizon_filesCreateWithoutUserInput, verizon_filesUncheckedCreateWithoutUserInput> | verizon_filesCreateWithoutUserInput[] | verizon_filesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: verizon_filesCreateOrConnectWithoutUserInput | verizon_filesCreateOrConnectWithoutUserInput[]
    upsert?: verizon_filesUpsertWithWhereUniqueWithoutUserInput | verizon_filesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: verizon_filesCreateManyUserInputEnvelope
    set?: verizon_filesWhereUniqueInput | verizon_filesWhereUniqueInput[]
    disconnect?: verizon_filesWhereUniqueInput | verizon_filesWhereUniqueInput[]
    delete?: verizon_filesWhereUniqueInput | verizon_filesWhereUniqueInput[]
    connect?: verizon_filesWhereUniqueInput | verizon_filesWhereUniqueInput[]
    update?: verizon_filesUpdateWithWhereUniqueWithoutUserInput | verizon_filesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: verizon_filesUpdateManyWithWhereWithoutUserInput | verizon_filesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: verizon_filesScalarWhereInput | verizon_filesScalarWhereInput[]
  }

  export type uploaded_filesUpdateManyWithoutUserNestedInput = {
    create?: XOR<uploaded_filesCreateWithoutUserInput, uploaded_filesUncheckedCreateWithoutUserInput> | uploaded_filesCreateWithoutUserInput[] | uploaded_filesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: uploaded_filesCreateOrConnectWithoutUserInput | uploaded_filesCreateOrConnectWithoutUserInput[]
    upsert?: uploaded_filesUpsertWithWhereUniqueWithoutUserInput | uploaded_filesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: uploaded_filesCreateManyUserInputEnvelope
    set?: uploaded_filesWhereUniqueInput | uploaded_filesWhereUniqueInput[]
    disconnect?: uploaded_filesWhereUniqueInput | uploaded_filesWhereUniqueInput[]
    delete?: uploaded_filesWhereUniqueInput | uploaded_filesWhereUniqueInput[]
    connect?: uploaded_filesWhereUniqueInput | uploaded_filesWhereUniqueInput[]
    update?: uploaded_filesUpdateWithWhereUniqueWithoutUserInput | uploaded_filesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: uploaded_filesUpdateManyWithWhereWithoutUserInput | uploaded_filesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: uploaded_filesScalarWhereInput | uploaded_filesScalarWhereInput[]
  }

  export type bidsUpdateManyWithoutUserNestedInput = {
    create?: XOR<bidsCreateWithoutUserInput, bidsUncheckedCreateWithoutUserInput> | bidsCreateWithoutUserInput[] | bidsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bidsCreateOrConnectWithoutUserInput | bidsCreateOrConnectWithoutUserInput[]
    upsert?: bidsUpsertWithWhereUniqueWithoutUserInput | bidsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: bidsCreateManyUserInputEnvelope
    set?: bidsWhereUniqueInput | bidsWhereUniqueInput[]
    disconnect?: bidsWhereUniqueInput | bidsWhereUniqueInput[]
    delete?: bidsWhereUniqueInput | bidsWhereUniqueInput[]
    connect?: bidsWhereUniqueInput | bidsWhereUniqueInput[]
    update?: bidsUpdateWithWhereUniqueWithoutUserInput | bidsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: bidsUpdateManyWithWhereWithoutUserInput | bidsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: bidsScalarWhereInput | bidsScalarWhereInput[]
  }

  export type awarded_bidsUpdateManyWithoutUserNestedInput = {
    create?: XOR<awarded_bidsCreateWithoutUserInput, awarded_bidsUncheckedCreateWithoutUserInput> | awarded_bidsCreateWithoutUserInput[] | awarded_bidsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: awarded_bidsCreateOrConnectWithoutUserInput | awarded_bidsCreateOrConnectWithoutUserInput[]
    upsert?: awarded_bidsUpsertWithWhereUniqueWithoutUserInput | awarded_bidsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: awarded_bidsCreateManyUserInputEnvelope
    set?: awarded_bidsWhereUniqueInput | awarded_bidsWhereUniqueInput[]
    disconnect?: awarded_bidsWhereUniqueInput | awarded_bidsWhereUniqueInput[]
    delete?: awarded_bidsWhereUniqueInput | awarded_bidsWhereUniqueInput[]
    connect?: awarded_bidsWhereUniqueInput | awarded_bidsWhereUniqueInput[]
    update?: awarded_bidsUpdateWithWhereUniqueWithoutUserInput | awarded_bidsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: awarded_bidsUpdateManyWithWhereWithoutUserInput | awarded_bidsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: awarded_bidsScalarWhereInput | awarded_bidsScalarWhereInput[]
  }

  export type invoiceUpdateManyWithoutUserNestedInput = {
    create?: XOR<invoiceCreateWithoutUserInput, invoiceUncheckedCreateWithoutUserInput> | invoiceCreateWithoutUserInput[] | invoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: invoiceCreateOrConnectWithoutUserInput | invoiceCreateOrConnectWithoutUserInput[]
    upsert?: invoiceUpsertWithWhereUniqueWithoutUserInput | invoiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: invoiceCreateManyUserInputEnvelope
    set?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    disconnect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    delete?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    connect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    update?: invoiceUpdateWithWhereUniqueWithoutUserInput | invoiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: invoiceUpdateManyWithWhereWithoutUserInput | invoiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: invoiceScalarWhereInput | invoiceScalarWhereInput[]
  }

  export type email_notificationsUpdateManyWithoutUserNestedInput = {
    create?: XOR<email_notificationsCreateWithoutUserInput, email_notificationsUncheckedCreateWithoutUserInput> | email_notificationsCreateWithoutUserInput[] | email_notificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: email_notificationsCreateOrConnectWithoutUserInput | email_notificationsCreateOrConnectWithoutUserInput[]
    upsert?: email_notificationsUpsertWithWhereUniqueWithoutUserInput | email_notificationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: email_notificationsCreateManyUserInputEnvelope
    set?: email_notificationsWhereUniqueInput | email_notificationsWhereUniqueInput[]
    disconnect?: email_notificationsWhereUniqueInput | email_notificationsWhereUniqueInput[]
    delete?: email_notificationsWhereUniqueInput | email_notificationsWhereUniqueInput[]
    connect?: email_notificationsWhereUniqueInput | email_notificationsWhereUniqueInput[]
    update?: email_notificationsUpdateWithWhereUniqueWithoutUserInput | email_notificationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: email_notificationsUpdateManyWithWhereWithoutUserInput | email_notificationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: email_notificationsScalarWhereInput | email_notificationsScalarWhereInput[]
  }

  export type verizon_filesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<verizon_filesCreateWithoutUserInput, verizon_filesUncheckedCreateWithoutUserInput> | verizon_filesCreateWithoutUserInput[] | verizon_filesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: verizon_filesCreateOrConnectWithoutUserInput | verizon_filesCreateOrConnectWithoutUserInput[]
    upsert?: verizon_filesUpsertWithWhereUniqueWithoutUserInput | verizon_filesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: verizon_filesCreateManyUserInputEnvelope
    set?: verizon_filesWhereUniqueInput | verizon_filesWhereUniqueInput[]
    disconnect?: verizon_filesWhereUniqueInput | verizon_filesWhereUniqueInput[]
    delete?: verizon_filesWhereUniqueInput | verizon_filesWhereUniqueInput[]
    connect?: verizon_filesWhereUniqueInput | verizon_filesWhereUniqueInput[]
    update?: verizon_filesUpdateWithWhereUniqueWithoutUserInput | verizon_filesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: verizon_filesUpdateManyWithWhereWithoutUserInput | verizon_filesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: verizon_filesScalarWhereInput | verizon_filesScalarWhereInput[]
  }

  export type uploaded_filesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<uploaded_filesCreateWithoutUserInput, uploaded_filesUncheckedCreateWithoutUserInput> | uploaded_filesCreateWithoutUserInput[] | uploaded_filesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: uploaded_filesCreateOrConnectWithoutUserInput | uploaded_filesCreateOrConnectWithoutUserInput[]
    upsert?: uploaded_filesUpsertWithWhereUniqueWithoutUserInput | uploaded_filesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: uploaded_filesCreateManyUserInputEnvelope
    set?: uploaded_filesWhereUniqueInput | uploaded_filesWhereUniqueInput[]
    disconnect?: uploaded_filesWhereUniqueInput | uploaded_filesWhereUniqueInput[]
    delete?: uploaded_filesWhereUniqueInput | uploaded_filesWhereUniqueInput[]
    connect?: uploaded_filesWhereUniqueInput | uploaded_filesWhereUniqueInput[]
    update?: uploaded_filesUpdateWithWhereUniqueWithoutUserInput | uploaded_filesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: uploaded_filesUpdateManyWithWhereWithoutUserInput | uploaded_filesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: uploaded_filesScalarWhereInput | uploaded_filesScalarWhereInput[]
  }

  export type bidsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<bidsCreateWithoutUserInput, bidsUncheckedCreateWithoutUserInput> | bidsCreateWithoutUserInput[] | bidsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bidsCreateOrConnectWithoutUserInput | bidsCreateOrConnectWithoutUserInput[]
    upsert?: bidsUpsertWithWhereUniqueWithoutUserInput | bidsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: bidsCreateManyUserInputEnvelope
    set?: bidsWhereUniqueInput | bidsWhereUniqueInput[]
    disconnect?: bidsWhereUniqueInput | bidsWhereUniqueInput[]
    delete?: bidsWhereUniqueInput | bidsWhereUniqueInput[]
    connect?: bidsWhereUniqueInput | bidsWhereUniqueInput[]
    update?: bidsUpdateWithWhereUniqueWithoutUserInput | bidsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: bidsUpdateManyWithWhereWithoutUserInput | bidsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: bidsScalarWhereInput | bidsScalarWhereInput[]
  }

  export type awarded_bidsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<awarded_bidsCreateWithoutUserInput, awarded_bidsUncheckedCreateWithoutUserInput> | awarded_bidsCreateWithoutUserInput[] | awarded_bidsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: awarded_bidsCreateOrConnectWithoutUserInput | awarded_bidsCreateOrConnectWithoutUserInput[]
    upsert?: awarded_bidsUpsertWithWhereUniqueWithoutUserInput | awarded_bidsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: awarded_bidsCreateManyUserInputEnvelope
    set?: awarded_bidsWhereUniqueInput | awarded_bidsWhereUniqueInput[]
    disconnect?: awarded_bidsWhereUniqueInput | awarded_bidsWhereUniqueInput[]
    delete?: awarded_bidsWhereUniqueInput | awarded_bidsWhereUniqueInput[]
    connect?: awarded_bidsWhereUniqueInput | awarded_bidsWhereUniqueInput[]
    update?: awarded_bidsUpdateWithWhereUniqueWithoutUserInput | awarded_bidsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: awarded_bidsUpdateManyWithWhereWithoutUserInput | awarded_bidsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: awarded_bidsScalarWhereInput | awarded_bidsScalarWhereInput[]
  }

  export type invoiceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<invoiceCreateWithoutUserInput, invoiceUncheckedCreateWithoutUserInput> | invoiceCreateWithoutUserInput[] | invoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: invoiceCreateOrConnectWithoutUserInput | invoiceCreateOrConnectWithoutUserInput[]
    upsert?: invoiceUpsertWithWhereUniqueWithoutUserInput | invoiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: invoiceCreateManyUserInputEnvelope
    set?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    disconnect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    delete?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    connect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    update?: invoiceUpdateWithWhereUniqueWithoutUserInput | invoiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: invoiceUpdateManyWithWhereWithoutUserInput | invoiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: invoiceScalarWhereInput | invoiceScalarWhereInput[]
  }

  export type email_notificationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<email_notificationsCreateWithoutUserInput, email_notificationsUncheckedCreateWithoutUserInput> | email_notificationsCreateWithoutUserInput[] | email_notificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: email_notificationsCreateOrConnectWithoutUserInput | email_notificationsCreateOrConnectWithoutUserInput[]
    upsert?: email_notificationsUpsertWithWhereUniqueWithoutUserInput | email_notificationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: email_notificationsCreateManyUserInputEnvelope
    set?: email_notificationsWhereUniqueInput | email_notificationsWhereUniqueInput[]
    disconnect?: email_notificationsWhereUniqueInput | email_notificationsWhereUniqueInput[]
    delete?: email_notificationsWhereUniqueInput | email_notificationsWhereUniqueInput[]
    connect?: email_notificationsWhereUniqueInput | email_notificationsWhereUniqueInput[]
    update?: email_notificationsUpdateWithWhereUniqueWithoutUserInput | email_notificationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: email_notificationsUpdateManyWithWhereWithoutUserInput | email_notificationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: email_notificationsScalarWhereInput | email_notificationsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutVerizon_filesInput = {
    create?: XOR<usersCreateWithoutVerizon_filesInput, usersUncheckedCreateWithoutVerizon_filesInput>
    connectOrCreate?: usersCreateOrConnectWithoutVerizon_filesInput
    connect?: usersWhereUniqueInput
  }

  export type lotsCreateNestedManyWithoutVerizon_fileInput = {
    create?: XOR<lotsCreateWithoutVerizon_fileInput, lotsUncheckedCreateWithoutVerizon_fileInput> | lotsCreateWithoutVerizon_fileInput[] | lotsUncheckedCreateWithoutVerizon_fileInput[]
    connectOrCreate?: lotsCreateOrConnectWithoutVerizon_fileInput | lotsCreateOrConnectWithoutVerizon_fileInput[]
    createMany?: lotsCreateManyVerizon_fileInputEnvelope
    connect?: lotsWhereUniqueInput | lotsWhereUniqueInput[]
  }

  export type lotsUncheckedCreateNestedManyWithoutVerizon_fileInput = {
    create?: XOR<lotsCreateWithoutVerizon_fileInput, lotsUncheckedCreateWithoutVerizon_fileInput> | lotsCreateWithoutVerizon_fileInput[] | lotsUncheckedCreateWithoutVerizon_fileInput[]
    connectOrCreate?: lotsCreateOrConnectWithoutVerizon_fileInput | lotsCreateOrConnectWithoutVerizon_fileInput[]
    createMany?: lotsCreateManyVerizon_fileInputEnvelope
    connect?: lotsWhereUniqueInput | lotsWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutVerizon_filesNestedInput = {
    create?: XOR<usersCreateWithoutVerizon_filesInput, usersUncheckedCreateWithoutVerizon_filesInput>
    connectOrCreate?: usersCreateOrConnectWithoutVerizon_filesInput
    upsert?: usersUpsertWithoutVerizon_filesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutVerizon_filesInput, usersUpdateWithoutVerizon_filesInput>, usersUncheckedUpdateWithoutVerizon_filesInput>
  }

  export type lotsUpdateManyWithoutVerizon_fileNestedInput = {
    create?: XOR<lotsCreateWithoutVerizon_fileInput, lotsUncheckedCreateWithoutVerizon_fileInput> | lotsCreateWithoutVerizon_fileInput[] | lotsUncheckedCreateWithoutVerizon_fileInput[]
    connectOrCreate?: lotsCreateOrConnectWithoutVerizon_fileInput | lotsCreateOrConnectWithoutVerizon_fileInput[]
    upsert?: lotsUpsertWithWhereUniqueWithoutVerizon_fileInput | lotsUpsertWithWhereUniqueWithoutVerizon_fileInput[]
    createMany?: lotsCreateManyVerizon_fileInputEnvelope
    set?: lotsWhereUniqueInput | lotsWhereUniqueInput[]
    disconnect?: lotsWhereUniqueInput | lotsWhereUniqueInput[]
    delete?: lotsWhereUniqueInput | lotsWhereUniqueInput[]
    connect?: lotsWhereUniqueInput | lotsWhereUniqueInput[]
    update?: lotsUpdateWithWhereUniqueWithoutVerizon_fileInput | lotsUpdateWithWhereUniqueWithoutVerizon_fileInput[]
    updateMany?: lotsUpdateManyWithWhereWithoutVerizon_fileInput | lotsUpdateManyWithWhereWithoutVerizon_fileInput[]
    deleteMany?: lotsScalarWhereInput | lotsScalarWhereInput[]
  }

  export type lotsUncheckedUpdateManyWithoutVerizon_fileNestedInput = {
    create?: XOR<lotsCreateWithoutVerizon_fileInput, lotsUncheckedCreateWithoutVerizon_fileInput> | lotsCreateWithoutVerizon_fileInput[] | lotsUncheckedCreateWithoutVerizon_fileInput[]
    connectOrCreate?: lotsCreateOrConnectWithoutVerizon_fileInput | lotsCreateOrConnectWithoutVerizon_fileInput[]
    upsert?: lotsUpsertWithWhereUniqueWithoutVerizon_fileInput | lotsUpsertWithWhereUniqueWithoutVerizon_fileInput[]
    createMany?: lotsCreateManyVerizon_fileInputEnvelope
    set?: lotsWhereUniqueInput | lotsWhereUniqueInput[]
    disconnect?: lotsWhereUniqueInput | lotsWhereUniqueInput[]
    delete?: lotsWhereUniqueInput | lotsWhereUniqueInput[]
    connect?: lotsWhereUniqueInput | lotsWhereUniqueInput[]
    update?: lotsUpdateWithWhereUniqueWithoutVerizon_fileInput | lotsUpdateWithWhereUniqueWithoutVerizon_fileInput[]
    updateMany?: lotsUpdateManyWithWhereWithoutVerizon_fileInput | lotsUpdateManyWithWhereWithoutVerizon_fileInput[]
    deleteMany?: lotsScalarWhereInput | lotsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutUploaded_filesInput = {
    create?: XOR<usersCreateWithoutUploaded_filesInput, usersUncheckedCreateWithoutUploaded_filesInput>
    connectOrCreate?: usersCreateOrConnectWithoutUploaded_filesInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutUploaded_filesNestedInput = {
    create?: XOR<usersCreateWithoutUploaded_filesInput, usersUncheckedCreateWithoutUploaded_filesInput>
    connectOrCreate?: usersCreateOrConnectWithoutUploaded_filesInput
    upsert?: usersUpsertWithoutUploaded_filesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUploaded_filesInput, usersUpdateWithoutUploaded_filesInput>, usersUncheckedUpdateWithoutUploaded_filesInput>
  }

  export type verizon_filesCreateNestedOneWithoutLotsInput = {
    create?: XOR<verizon_filesCreateWithoutLotsInput, verizon_filesUncheckedCreateWithoutLotsInput>
    connectOrCreate?: verizon_filesCreateOrConnectWithoutLotsInput
    connect?: verizon_filesWhereUniqueInput
  }

  export type bidsCreateNestedManyWithoutLotInput = {
    create?: XOR<bidsCreateWithoutLotInput, bidsUncheckedCreateWithoutLotInput> | bidsCreateWithoutLotInput[] | bidsUncheckedCreateWithoutLotInput[]
    connectOrCreate?: bidsCreateOrConnectWithoutLotInput | bidsCreateOrConnectWithoutLotInput[]
    createMany?: bidsCreateManyLotInputEnvelope
    connect?: bidsWhereUniqueInput | bidsWhereUniqueInput[]
  }

  export type awarded_bidsCreateNestedManyWithoutLotInput = {
    create?: XOR<awarded_bidsCreateWithoutLotInput, awarded_bidsUncheckedCreateWithoutLotInput> | awarded_bidsCreateWithoutLotInput[] | awarded_bidsUncheckedCreateWithoutLotInput[]
    connectOrCreate?: awarded_bidsCreateOrConnectWithoutLotInput | awarded_bidsCreateOrConnectWithoutLotInput[]
    createMany?: awarded_bidsCreateManyLotInputEnvelope
    connect?: awarded_bidsWhereUniqueInput | awarded_bidsWhereUniqueInput[]
  }

  export type bidsUncheckedCreateNestedManyWithoutLotInput = {
    create?: XOR<bidsCreateWithoutLotInput, bidsUncheckedCreateWithoutLotInput> | bidsCreateWithoutLotInput[] | bidsUncheckedCreateWithoutLotInput[]
    connectOrCreate?: bidsCreateOrConnectWithoutLotInput | bidsCreateOrConnectWithoutLotInput[]
    createMany?: bidsCreateManyLotInputEnvelope
    connect?: bidsWhereUniqueInput | bidsWhereUniqueInput[]
  }

  export type awarded_bidsUncheckedCreateNestedManyWithoutLotInput = {
    create?: XOR<awarded_bidsCreateWithoutLotInput, awarded_bidsUncheckedCreateWithoutLotInput> | awarded_bidsCreateWithoutLotInput[] | awarded_bidsUncheckedCreateWithoutLotInput[]
    connectOrCreate?: awarded_bidsCreateOrConnectWithoutLotInput | awarded_bidsCreateOrConnectWithoutLotInput[]
    createMany?: awarded_bidsCreateManyLotInputEnvelope
    connect?: awarded_bidsWhereUniqueInput | awarded_bidsWhereUniqueInput[]
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

  export type verizon_filesUpdateOneWithoutLotsNestedInput = {
    create?: XOR<verizon_filesCreateWithoutLotsInput, verizon_filesUncheckedCreateWithoutLotsInput>
    connectOrCreate?: verizon_filesCreateOrConnectWithoutLotsInput
    upsert?: verizon_filesUpsertWithoutLotsInput
    disconnect?: verizon_filesWhereInput | boolean
    delete?: verizon_filesWhereInput | boolean
    connect?: verizon_filesWhereUniqueInput
    update?: XOR<XOR<verizon_filesUpdateToOneWithWhereWithoutLotsInput, verizon_filesUpdateWithoutLotsInput>, verizon_filesUncheckedUpdateWithoutLotsInput>
  }

  export type bidsUpdateManyWithoutLotNestedInput = {
    create?: XOR<bidsCreateWithoutLotInput, bidsUncheckedCreateWithoutLotInput> | bidsCreateWithoutLotInput[] | bidsUncheckedCreateWithoutLotInput[]
    connectOrCreate?: bidsCreateOrConnectWithoutLotInput | bidsCreateOrConnectWithoutLotInput[]
    upsert?: bidsUpsertWithWhereUniqueWithoutLotInput | bidsUpsertWithWhereUniqueWithoutLotInput[]
    createMany?: bidsCreateManyLotInputEnvelope
    set?: bidsWhereUniqueInput | bidsWhereUniqueInput[]
    disconnect?: bidsWhereUniqueInput | bidsWhereUniqueInput[]
    delete?: bidsWhereUniqueInput | bidsWhereUniqueInput[]
    connect?: bidsWhereUniqueInput | bidsWhereUniqueInput[]
    update?: bidsUpdateWithWhereUniqueWithoutLotInput | bidsUpdateWithWhereUniqueWithoutLotInput[]
    updateMany?: bidsUpdateManyWithWhereWithoutLotInput | bidsUpdateManyWithWhereWithoutLotInput[]
    deleteMany?: bidsScalarWhereInput | bidsScalarWhereInput[]
  }

  export type awarded_bidsUpdateManyWithoutLotNestedInput = {
    create?: XOR<awarded_bidsCreateWithoutLotInput, awarded_bidsUncheckedCreateWithoutLotInput> | awarded_bidsCreateWithoutLotInput[] | awarded_bidsUncheckedCreateWithoutLotInput[]
    connectOrCreate?: awarded_bidsCreateOrConnectWithoutLotInput | awarded_bidsCreateOrConnectWithoutLotInput[]
    upsert?: awarded_bidsUpsertWithWhereUniqueWithoutLotInput | awarded_bidsUpsertWithWhereUniqueWithoutLotInput[]
    createMany?: awarded_bidsCreateManyLotInputEnvelope
    set?: awarded_bidsWhereUniqueInput | awarded_bidsWhereUniqueInput[]
    disconnect?: awarded_bidsWhereUniqueInput | awarded_bidsWhereUniqueInput[]
    delete?: awarded_bidsWhereUniqueInput | awarded_bidsWhereUniqueInput[]
    connect?: awarded_bidsWhereUniqueInput | awarded_bidsWhereUniqueInput[]
    update?: awarded_bidsUpdateWithWhereUniqueWithoutLotInput | awarded_bidsUpdateWithWhereUniqueWithoutLotInput[]
    updateMany?: awarded_bidsUpdateManyWithWhereWithoutLotInput | awarded_bidsUpdateManyWithWhereWithoutLotInput[]
    deleteMany?: awarded_bidsScalarWhereInput | awarded_bidsScalarWhereInput[]
  }

  export type bidsUncheckedUpdateManyWithoutLotNestedInput = {
    create?: XOR<bidsCreateWithoutLotInput, bidsUncheckedCreateWithoutLotInput> | bidsCreateWithoutLotInput[] | bidsUncheckedCreateWithoutLotInput[]
    connectOrCreate?: bidsCreateOrConnectWithoutLotInput | bidsCreateOrConnectWithoutLotInput[]
    upsert?: bidsUpsertWithWhereUniqueWithoutLotInput | bidsUpsertWithWhereUniqueWithoutLotInput[]
    createMany?: bidsCreateManyLotInputEnvelope
    set?: bidsWhereUniqueInput | bidsWhereUniqueInput[]
    disconnect?: bidsWhereUniqueInput | bidsWhereUniqueInput[]
    delete?: bidsWhereUniqueInput | bidsWhereUniqueInput[]
    connect?: bidsWhereUniqueInput | bidsWhereUniqueInput[]
    update?: bidsUpdateWithWhereUniqueWithoutLotInput | bidsUpdateWithWhereUniqueWithoutLotInput[]
    updateMany?: bidsUpdateManyWithWhereWithoutLotInput | bidsUpdateManyWithWhereWithoutLotInput[]
    deleteMany?: bidsScalarWhereInput | bidsScalarWhereInput[]
  }

  export type awarded_bidsUncheckedUpdateManyWithoutLotNestedInput = {
    create?: XOR<awarded_bidsCreateWithoutLotInput, awarded_bidsUncheckedCreateWithoutLotInput> | awarded_bidsCreateWithoutLotInput[] | awarded_bidsUncheckedCreateWithoutLotInput[]
    connectOrCreate?: awarded_bidsCreateOrConnectWithoutLotInput | awarded_bidsCreateOrConnectWithoutLotInput[]
    upsert?: awarded_bidsUpsertWithWhereUniqueWithoutLotInput | awarded_bidsUpsertWithWhereUniqueWithoutLotInput[]
    createMany?: awarded_bidsCreateManyLotInputEnvelope
    set?: awarded_bidsWhereUniqueInput | awarded_bidsWhereUniqueInput[]
    disconnect?: awarded_bidsWhereUniqueInput | awarded_bidsWhereUniqueInput[]
    delete?: awarded_bidsWhereUniqueInput | awarded_bidsWhereUniqueInput[]
    connect?: awarded_bidsWhereUniqueInput | awarded_bidsWhereUniqueInput[]
    update?: awarded_bidsUpdateWithWhereUniqueWithoutLotInput | awarded_bidsUpdateWithWhereUniqueWithoutLotInput[]
    updateMany?: awarded_bidsUpdateManyWithWhereWithoutLotInput | awarded_bidsUpdateManyWithWhereWithoutLotInput[]
    deleteMany?: awarded_bidsScalarWhereInput | awarded_bidsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutBidsInput = {
    create?: XOR<usersCreateWithoutBidsInput, usersUncheckedCreateWithoutBidsInput>
    connectOrCreate?: usersCreateOrConnectWithoutBidsInput
    connect?: usersWhereUniqueInput
  }

  export type lotsCreateNestedOneWithoutBidsInput = {
    create?: XOR<lotsCreateWithoutBidsInput, lotsUncheckedCreateWithoutBidsInput>
    connectOrCreate?: lotsCreateOrConnectWithoutBidsInput
    connect?: lotsWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutBidsNestedInput = {
    create?: XOR<usersCreateWithoutBidsInput, usersUncheckedCreateWithoutBidsInput>
    connectOrCreate?: usersCreateOrConnectWithoutBidsInput
    upsert?: usersUpsertWithoutBidsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutBidsInput, usersUpdateWithoutBidsInput>, usersUncheckedUpdateWithoutBidsInput>
  }

  export type lotsUpdateOneRequiredWithoutBidsNestedInput = {
    create?: XOR<lotsCreateWithoutBidsInput, lotsUncheckedCreateWithoutBidsInput>
    connectOrCreate?: lotsCreateOrConnectWithoutBidsInput
    upsert?: lotsUpsertWithoutBidsInput
    connect?: lotsWhereUniqueInput
    update?: XOR<XOR<lotsUpdateToOneWithWhereWithoutBidsInput, lotsUpdateWithoutBidsInput>, lotsUncheckedUpdateWithoutBidsInput>
  }

  export type lotsCreateNestedOneWithoutAwarded_bidsInput = {
    create?: XOR<lotsCreateWithoutAwarded_bidsInput, lotsUncheckedCreateWithoutAwarded_bidsInput>
    connectOrCreate?: lotsCreateOrConnectWithoutAwarded_bidsInput
    connect?: lotsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutAwarded_bidsInput = {
    create?: XOR<usersCreateWithoutAwarded_bidsInput, usersUncheckedCreateWithoutAwarded_bidsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAwarded_bidsInput
    connect?: usersWhereUniqueInput
  }

  export type lotsUpdateOneRequiredWithoutAwarded_bidsNestedInput = {
    create?: XOR<lotsCreateWithoutAwarded_bidsInput, lotsUncheckedCreateWithoutAwarded_bidsInput>
    connectOrCreate?: lotsCreateOrConnectWithoutAwarded_bidsInput
    upsert?: lotsUpsertWithoutAwarded_bidsInput
    connect?: lotsWhereUniqueInput
    update?: XOR<XOR<lotsUpdateToOneWithWhereWithoutAwarded_bidsInput, lotsUpdateWithoutAwarded_bidsInput>, lotsUncheckedUpdateWithoutAwarded_bidsInput>
  }

  export type usersUpdateOneRequiredWithoutAwarded_bidsNestedInput = {
    create?: XOR<usersCreateWithoutAwarded_bidsInput, usersUncheckedCreateWithoutAwarded_bidsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAwarded_bidsInput
    upsert?: usersUpsertWithoutAwarded_bidsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAwarded_bidsInput, usersUpdateWithoutAwarded_bidsInput>, usersUncheckedUpdateWithoutAwarded_bidsInput>
  }

  export type invoiceCreateawarded_bid_idsInput = {
    set: string[]
  }

  export type usersCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<usersCreateWithoutInvoicesInput, usersUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: usersCreateOrConnectWithoutInvoicesInput
    connect?: usersWhereUniqueInput
  }

  export type invoiceUpdateawarded_bid_idsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type usersUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<usersCreateWithoutInvoicesInput, usersUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: usersCreateOrConnectWithoutInvoicesInput
    upsert?: usersUpsertWithoutInvoicesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutInvoicesInput, usersUpdateWithoutInvoicesInput>, usersUncheckedUpdateWithoutInvoicesInput>
  }

  export type usersCreateNestedOneWithoutEmail_notificationsInput = {
    create?: XOR<usersCreateWithoutEmail_notificationsInput, usersUncheckedCreateWithoutEmail_notificationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutEmail_notificationsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneWithoutEmail_notificationsNestedInput = {
    create?: XOR<usersCreateWithoutEmail_notificationsInput, usersUncheckedCreateWithoutEmail_notificationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutEmail_notificationsInput
    upsert?: usersUpsertWithoutEmail_notificationsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutEmail_notificationsInput, usersUpdateWithoutEmail_notificationsInput>, usersUncheckedUpdateWithoutEmail_notificationsInput>
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

  export type verizon_filesCreateWithoutUserInput = {
    id?: string
    file_name: string
    upload_time?: Date | string
    cleaned?: boolean
    lots?: lotsCreateNestedManyWithoutVerizon_fileInput
  }

  export type verizon_filesUncheckedCreateWithoutUserInput = {
    id?: string
    file_name: string
    upload_time?: Date | string
    cleaned?: boolean
    lots?: lotsUncheckedCreateNestedManyWithoutVerizon_fileInput
  }

  export type verizon_filesCreateOrConnectWithoutUserInput = {
    where: verizon_filesWhereUniqueInput
    create: XOR<verizon_filesCreateWithoutUserInput, verizon_filesUncheckedCreateWithoutUserInput>
  }

  export type verizon_filesCreateManyUserInputEnvelope = {
    data: verizon_filesCreateManyUserInput | verizon_filesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type uploaded_filesCreateWithoutUserInput = {
    id?: string
    filename: string
    processed_name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type uploaded_filesUncheckedCreateWithoutUserInput = {
    id?: string
    filename: string
    processed_name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type uploaded_filesCreateOrConnectWithoutUserInput = {
    where: uploaded_filesWhereUniqueInput
    create: XOR<uploaded_filesCreateWithoutUserInput, uploaded_filesUncheckedCreateWithoutUserInput>
  }

  export type uploaded_filesCreateManyUserInputEnvelope = {
    data: uploaded_filesCreateManyUserInput | uploaded_filesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type bidsCreateWithoutUserInput = {
    id?: string
    bid_amount: number
    submitted_at?: Date | string
    status?: string
    bid_time?: Date | string | null
    lot: lotsCreateNestedOneWithoutBidsInput
  }

  export type bidsUncheckedCreateWithoutUserInput = {
    id?: string
    lot_id: string
    bid_amount: number
    submitted_at?: Date | string
    status?: string
    bid_time?: Date | string | null
  }

  export type bidsCreateOrConnectWithoutUserInput = {
    where: bidsWhereUniqueInput
    create: XOR<bidsCreateWithoutUserInput, bidsUncheckedCreateWithoutUserInput>
  }

  export type bidsCreateManyUserInputEnvelope = {
    data: bidsCreateManyUserInput | bidsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type awarded_bidsCreateWithoutUserInput = {
    id?: string
    final_price: number
    commission: number
    lot: lotsCreateNestedOneWithoutAwarded_bidsInput
  }

  export type awarded_bidsUncheckedCreateWithoutUserInput = {
    id?: string
    lot_id: string
    final_price: number
    commission: number
  }

  export type awarded_bidsCreateOrConnectWithoutUserInput = {
    where: awarded_bidsWhereUniqueInput
    create: XOR<awarded_bidsCreateWithoutUserInput, awarded_bidsUncheckedCreateWithoutUserInput>
  }

  export type awarded_bidsCreateManyUserInputEnvelope = {
    data: awarded_bidsCreateManyUserInput | awarded_bidsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type invoiceCreateWithoutUserInput = {
    id?: string
    awarded_bid_ids?: invoiceCreateawarded_bid_idsInput | string[]
    invoice_number: string
    generated_at?: Date | string
    total_amount: number
    pdf_url?: string | null
  }

  export type invoiceUncheckedCreateWithoutUserInput = {
    id?: string
    awarded_bid_ids?: invoiceCreateawarded_bid_idsInput | string[]
    invoice_number: string
    generated_at?: Date | string
    total_amount: number
    pdf_url?: string | null
  }

  export type invoiceCreateOrConnectWithoutUserInput = {
    where: invoiceWhereUniqueInput
    create: XOR<invoiceCreateWithoutUserInput, invoiceUncheckedCreateWithoutUserInput>
  }

  export type invoiceCreateManyUserInputEnvelope = {
    data: invoiceCreateManyUserInput | invoiceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type email_notificationsCreateWithoutUserInput = {
    subject: string
    message: string
    notification_type?: string | null
    is_sent?: boolean
    sent_at?: Date | string | null
    created_at?: Date | string
  }

  export type email_notificationsUncheckedCreateWithoutUserInput = {
    id?: number
    subject: string
    message: string
    notification_type?: string | null
    is_sent?: boolean
    sent_at?: Date | string | null
    created_at?: Date | string
  }

  export type email_notificationsCreateOrConnectWithoutUserInput = {
    where: email_notificationsWhereUniqueInput
    create: XOR<email_notificationsCreateWithoutUserInput, email_notificationsUncheckedCreateWithoutUserInput>
  }

  export type email_notificationsCreateManyUserInputEnvelope = {
    data: email_notificationsCreateManyUserInput | email_notificationsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type verizon_filesUpsertWithWhereUniqueWithoutUserInput = {
    where: verizon_filesWhereUniqueInput
    update: XOR<verizon_filesUpdateWithoutUserInput, verizon_filesUncheckedUpdateWithoutUserInput>
    create: XOR<verizon_filesCreateWithoutUserInput, verizon_filesUncheckedCreateWithoutUserInput>
  }

  export type verizon_filesUpdateWithWhereUniqueWithoutUserInput = {
    where: verizon_filesWhereUniqueInput
    data: XOR<verizon_filesUpdateWithoutUserInput, verizon_filesUncheckedUpdateWithoutUserInput>
  }

  export type verizon_filesUpdateManyWithWhereWithoutUserInput = {
    where: verizon_filesScalarWhereInput
    data: XOR<verizon_filesUpdateManyMutationInput, verizon_filesUncheckedUpdateManyWithoutUserInput>
  }

  export type verizon_filesScalarWhereInput = {
    AND?: verizon_filesScalarWhereInput | verizon_filesScalarWhereInput[]
    OR?: verizon_filesScalarWhereInput[]
    NOT?: verizon_filesScalarWhereInput | verizon_filesScalarWhereInput[]
    id?: UuidFilter<"verizon_files"> | string
    file_name?: StringFilter<"verizon_files"> | string
    uploaded_by?: UuidFilter<"verizon_files"> | string
    upload_time?: DateTimeFilter<"verizon_files"> | Date | string
    cleaned?: BoolFilter<"verizon_files"> | boolean
  }

  export type uploaded_filesUpsertWithWhereUniqueWithoutUserInput = {
    where: uploaded_filesWhereUniqueInput
    update: XOR<uploaded_filesUpdateWithoutUserInput, uploaded_filesUncheckedUpdateWithoutUserInput>
    create: XOR<uploaded_filesCreateWithoutUserInput, uploaded_filesUncheckedCreateWithoutUserInput>
  }

  export type uploaded_filesUpdateWithWhereUniqueWithoutUserInput = {
    where: uploaded_filesWhereUniqueInput
    data: XOR<uploaded_filesUpdateWithoutUserInput, uploaded_filesUncheckedUpdateWithoutUserInput>
  }

  export type uploaded_filesUpdateManyWithWhereWithoutUserInput = {
    where: uploaded_filesScalarWhereInput
    data: XOR<uploaded_filesUpdateManyMutationInput, uploaded_filesUncheckedUpdateManyWithoutUserInput>
  }

  export type uploaded_filesScalarWhereInput = {
    AND?: uploaded_filesScalarWhereInput | uploaded_filesScalarWhereInput[]
    OR?: uploaded_filesScalarWhereInput[]
    NOT?: uploaded_filesScalarWhereInput | uploaded_filesScalarWhereInput[]
    id?: StringFilter<"uploaded_files"> | string
    filename?: StringFilter<"uploaded_files"> | string
    processed_name?: StringNullableFilter<"uploaded_files"> | string | null
    user_id?: UuidFilter<"uploaded_files"> | string
    created_at?: DateTimeFilter<"uploaded_files"> | Date | string
    updated_at?: DateTimeFilter<"uploaded_files"> | Date | string
  }

  export type bidsUpsertWithWhereUniqueWithoutUserInput = {
    where: bidsWhereUniqueInput
    update: XOR<bidsUpdateWithoutUserInput, bidsUncheckedUpdateWithoutUserInput>
    create: XOR<bidsCreateWithoutUserInput, bidsUncheckedCreateWithoutUserInput>
  }

  export type bidsUpdateWithWhereUniqueWithoutUserInput = {
    where: bidsWhereUniqueInput
    data: XOR<bidsUpdateWithoutUserInput, bidsUncheckedUpdateWithoutUserInput>
  }

  export type bidsUpdateManyWithWhereWithoutUserInput = {
    where: bidsScalarWhereInput
    data: XOR<bidsUpdateManyMutationInput, bidsUncheckedUpdateManyWithoutUserInput>
  }

  export type bidsScalarWhereInput = {
    AND?: bidsScalarWhereInput | bidsScalarWhereInput[]
    OR?: bidsScalarWhereInput[]
    NOT?: bidsScalarWhereInput | bidsScalarWhereInput[]
    id?: UuidFilter<"bids"> | string
    user_id?: UuidFilter<"bids"> | string
    lot_id?: UuidFilter<"bids"> | string
    bid_amount?: FloatFilter<"bids"> | number
    submitted_at?: DateTimeFilter<"bids"> | Date | string
    status?: StringFilter<"bids"> | string
    bid_time?: DateTimeNullableFilter<"bids"> | Date | string | null
  }

  export type awarded_bidsUpsertWithWhereUniqueWithoutUserInput = {
    where: awarded_bidsWhereUniqueInput
    update: XOR<awarded_bidsUpdateWithoutUserInput, awarded_bidsUncheckedUpdateWithoutUserInput>
    create: XOR<awarded_bidsCreateWithoutUserInput, awarded_bidsUncheckedCreateWithoutUserInput>
  }

  export type awarded_bidsUpdateWithWhereUniqueWithoutUserInput = {
    where: awarded_bidsWhereUniqueInput
    data: XOR<awarded_bidsUpdateWithoutUserInput, awarded_bidsUncheckedUpdateWithoutUserInput>
  }

  export type awarded_bidsUpdateManyWithWhereWithoutUserInput = {
    where: awarded_bidsScalarWhereInput
    data: XOR<awarded_bidsUpdateManyMutationInput, awarded_bidsUncheckedUpdateManyWithoutUserInput>
  }

  export type awarded_bidsScalarWhereInput = {
    AND?: awarded_bidsScalarWhereInput | awarded_bidsScalarWhereInput[]
    OR?: awarded_bidsScalarWhereInput[]
    NOT?: awarded_bidsScalarWhereInput | awarded_bidsScalarWhereInput[]
    id?: StringFilter<"awarded_bids"> | string
    lot_id?: UuidFilter<"awarded_bids"> | string
    awarded_to?: UuidFilter<"awarded_bids"> | string
    final_price?: FloatFilter<"awarded_bids"> | number
    commission?: FloatFilter<"awarded_bids"> | number
  }

  export type invoiceUpsertWithWhereUniqueWithoutUserInput = {
    where: invoiceWhereUniqueInput
    update: XOR<invoiceUpdateWithoutUserInput, invoiceUncheckedUpdateWithoutUserInput>
    create: XOR<invoiceCreateWithoutUserInput, invoiceUncheckedCreateWithoutUserInput>
  }

  export type invoiceUpdateWithWhereUniqueWithoutUserInput = {
    where: invoiceWhereUniqueInput
    data: XOR<invoiceUpdateWithoutUserInput, invoiceUncheckedUpdateWithoutUserInput>
  }

  export type invoiceUpdateManyWithWhereWithoutUserInput = {
    where: invoiceScalarWhereInput
    data: XOR<invoiceUpdateManyMutationInput, invoiceUncheckedUpdateManyWithoutUserInput>
  }

  export type invoiceScalarWhereInput = {
    AND?: invoiceScalarWhereInput | invoiceScalarWhereInput[]
    OR?: invoiceScalarWhereInput[]
    NOT?: invoiceScalarWhereInput | invoiceScalarWhereInput[]
    id?: StringFilter<"invoice"> | string
    user_id?: UuidFilter<"invoice"> | string
    awarded_bid_ids?: StringNullableListFilter<"invoice">
    invoice_number?: StringFilter<"invoice"> | string
    generated_at?: DateTimeFilter<"invoice"> | Date | string
    total_amount?: FloatFilter<"invoice"> | number
    pdf_url?: StringNullableFilter<"invoice"> | string | null
  }

  export type email_notificationsUpsertWithWhereUniqueWithoutUserInput = {
    where: email_notificationsWhereUniqueInput
    update: XOR<email_notificationsUpdateWithoutUserInput, email_notificationsUncheckedUpdateWithoutUserInput>
    create: XOR<email_notificationsCreateWithoutUserInput, email_notificationsUncheckedCreateWithoutUserInput>
  }

  export type email_notificationsUpdateWithWhereUniqueWithoutUserInput = {
    where: email_notificationsWhereUniqueInput
    data: XOR<email_notificationsUpdateWithoutUserInput, email_notificationsUncheckedUpdateWithoutUserInput>
  }

  export type email_notificationsUpdateManyWithWhereWithoutUserInput = {
    where: email_notificationsScalarWhereInput
    data: XOR<email_notificationsUpdateManyMutationInput, email_notificationsUncheckedUpdateManyWithoutUserInput>
  }

  export type email_notificationsScalarWhereInput = {
    AND?: email_notificationsScalarWhereInput | email_notificationsScalarWhereInput[]
    OR?: email_notificationsScalarWhereInput[]
    NOT?: email_notificationsScalarWhereInput | email_notificationsScalarWhereInput[]
    id?: IntFilter<"email_notifications"> | number
    user_id?: UuidNullableFilter<"email_notifications"> | string | null
    subject?: StringFilter<"email_notifications"> | string
    message?: StringFilter<"email_notifications"> | string
    notification_type?: StringNullableFilter<"email_notifications"> | string | null
    is_sent?: BoolFilter<"email_notifications"> | boolean
    sent_at?: DateTimeNullableFilter<"email_notifications"> | Date | string | null
    created_at?: DateTimeFilter<"email_notifications"> | Date | string
  }

  export type usersCreateWithoutVerizon_filesInput = {
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
    uploaded_files?: uploaded_filesCreateNestedManyWithoutUserInput
    bids?: bidsCreateNestedManyWithoutUserInput
    awarded_bids?: awarded_bidsCreateNestedManyWithoutUserInput
    invoices?: invoiceCreateNestedManyWithoutUserInput
    email_notifications?: email_notificationsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutVerizon_filesInput = {
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
    uploaded_files?: uploaded_filesUncheckedCreateNestedManyWithoutUserInput
    bids?: bidsUncheckedCreateNestedManyWithoutUserInput
    awarded_bids?: awarded_bidsUncheckedCreateNestedManyWithoutUserInput
    invoices?: invoiceUncheckedCreateNestedManyWithoutUserInput
    email_notifications?: email_notificationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutVerizon_filesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutVerizon_filesInput, usersUncheckedCreateWithoutVerizon_filesInput>
  }

  export type lotsCreateWithoutVerizon_fileInput = {
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
    bids?: bidsCreateNestedManyWithoutLotInput
    awarded_bids?: awarded_bidsCreateNestedManyWithoutLotInput
  }

  export type lotsUncheckedCreateWithoutVerizon_fileInput = {
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
    bids?: bidsUncheckedCreateNestedManyWithoutLotInput
    awarded_bids?: awarded_bidsUncheckedCreateNestedManyWithoutLotInput
  }

  export type lotsCreateOrConnectWithoutVerizon_fileInput = {
    where: lotsWhereUniqueInput
    create: XOR<lotsCreateWithoutVerizon_fileInput, lotsUncheckedCreateWithoutVerizon_fileInput>
  }

  export type lotsCreateManyVerizon_fileInputEnvelope = {
    data: lotsCreateManyVerizon_fileInput | lotsCreateManyVerizon_fileInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutVerizon_filesInput = {
    update: XOR<usersUpdateWithoutVerizon_filesInput, usersUncheckedUpdateWithoutVerizon_filesInput>
    create: XOR<usersCreateWithoutVerizon_filesInput, usersUncheckedCreateWithoutVerizon_filesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutVerizon_filesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutVerizon_filesInput, usersUncheckedUpdateWithoutVerizon_filesInput>
  }

  export type usersUpdateWithoutVerizon_filesInput = {
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
    uploaded_files?: uploaded_filesUpdateManyWithoutUserNestedInput
    bids?: bidsUpdateManyWithoutUserNestedInput
    awarded_bids?: awarded_bidsUpdateManyWithoutUserNestedInput
    invoices?: invoiceUpdateManyWithoutUserNestedInput
    email_notifications?: email_notificationsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutVerizon_filesInput = {
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
    uploaded_files?: uploaded_filesUncheckedUpdateManyWithoutUserNestedInput
    bids?: bidsUncheckedUpdateManyWithoutUserNestedInput
    awarded_bids?: awarded_bidsUncheckedUpdateManyWithoutUserNestedInput
    invoices?: invoiceUncheckedUpdateManyWithoutUserNestedInput
    email_notifications?: email_notificationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type lotsUpsertWithWhereUniqueWithoutVerizon_fileInput = {
    where: lotsWhereUniqueInput
    update: XOR<lotsUpdateWithoutVerizon_fileInput, lotsUncheckedUpdateWithoutVerizon_fileInput>
    create: XOR<lotsCreateWithoutVerizon_fileInput, lotsUncheckedCreateWithoutVerizon_fileInput>
  }

  export type lotsUpdateWithWhereUniqueWithoutVerizon_fileInput = {
    where: lotsWhereUniqueInput
    data: XOR<lotsUpdateWithoutVerizon_fileInput, lotsUncheckedUpdateWithoutVerizon_fileInput>
  }

  export type lotsUpdateManyWithWhereWithoutVerizon_fileInput = {
    where: lotsScalarWhereInput
    data: XOR<lotsUpdateManyMutationInput, lotsUncheckedUpdateManyWithoutVerizon_fileInput>
  }

  export type lotsScalarWhereInput = {
    AND?: lotsScalarWhereInput | lotsScalarWhereInput[]
    OR?: lotsScalarWhereInput[]
    NOT?: lotsScalarWhereInput | lotsScalarWhereInput[]
    id?: UuidFilter<"lots"> | string
    verizon_file_id?: UuidNullableFilter<"lots"> | string | null
    lot_number?: StringFilter<"lots"> | string
    item_description?: StringNullableFilter<"lots"> | string | null
    grade?: StringNullableFilter<"lots"> | string | null
    quantity?: IntNullableFilter<"lots"> | number | null
    base_price?: FloatNullableFilter<"lots"> | number | null
    commission_rate?: FloatFilter<"lots"> | number
    oem?: StringNullableFilter<"lots"> | string | null
    sku?: StringNullableFilter<"lots"> | string | null
    prop65_warning?: StringNullableFilter<"lots"> | string | null
    description?: StringNullableFilter<"lots"> | string | null
    disposition?: StringNullableFilter<"lots"> | string | null
    unit_awarded_price?: FloatNullableFilter<"lots"> | number | null
    available_from?: DateTimeNullableFilter<"lots"> | Date | string | null
    available_to?: DateTimeNullableFilter<"lots"> | Date | string | null
    created_at?: DateTimeFilter<"lots"> | Date | string
    updated_at?: DateTimeFilter<"lots"> | Date | string
  }

  export type usersCreateWithoutUploaded_filesInput = {
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
    verizon_files?: verizon_filesCreateNestedManyWithoutUserInput
    bids?: bidsCreateNestedManyWithoutUserInput
    awarded_bids?: awarded_bidsCreateNestedManyWithoutUserInput
    invoices?: invoiceCreateNestedManyWithoutUserInput
    email_notifications?: email_notificationsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutUploaded_filesInput = {
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
    verizon_files?: verizon_filesUncheckedCreateNestedManyWithoutUserInput
    bids?: bidsUncheckedCreateNestedManyWithoutUserInput
    awarded_bids?: awarded_bidsUncheckedCreateNestedManyWithoutUserInput
    invoices?: invoiceUncheckedCreateNestedManyWithoutUserInput
    email_notifications?: email_notificationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutUploaded_filesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUploaded_filesInput, usersUncheckedCreateWithoutUploaded_filesInput>
  }

  export type usersUpsertWithoutUploaded_filesInput = {
    update: XOR<usersUpdateWithoutUploaded_filesInput, usersUncheckedUpdateWithoutUploaded_filesInput>
    create: XOR<usersCreateWithoutUploaded_filesInput, usersUncheckedCreateWithoutUploaded_filesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUploaded_filesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUploaded_filesInput, usersUncheckedUpdateWithoutUploaded_filesInput>
  }

  export type usersUpdateWithoutUploaded_filesInput = {
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
    verizon_files?: verizon_filesUpdateManyWithoutUserNestedInput
    bids?: bidsUpdateManyWithoutUserNestedInput
    awarded_bids?: awarded_bidsUpdateManyWithoutUserNestedInput
    invoices?: invoiceUpdateManyWithoutUserNestedInput
    email_notifications?: email_notificationsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutUploaded_filesInput = {
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
    verizon_files?: verizon_filesUncheckedUpdateManyWithoutUserNestedInput
    bids?: bidsUncheckedUpdateManyWithoutUserNestedInput
    awarded_bids?: awarded_bidsUncheckedUpdateManyWithoutUserNestedInput
    invoices?: invoiceUncheckedUpdateManyWithoutUserNestedInput
    email_notifications?: email_notificationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type verizon_filesCreateWithoutLotsInput = {
    id?: string
    file_name: string
    upload_time?: Date | string
    cleaned?: boolean
    user: usersCreateNestedOneWithoutVerizon_filesInput
  }

  export type verizon_filesUncheckedCreateWithoutLotsInput = {
    id?: string
    file_name: string
    uploaded_by: string
    upload_time?: Date | string
    cleaned?: boolean
  }

  export type verizon_filesCreateOrConnectWithoutLotsInput = {
    where: verizon_filesWhereUniqueInput
    create: XOR<verizon_filesCreateWithoutLotsInput, verizon_filesUncheckedCreateWithoutLotsInput>
  }

  export type bidsCreateWithoutLotInput = {
    id?: string
    bid_amount: number
    submitted_at?: Date | string
    status?: string
    bid_time?: Date | string | null
    user: usersCreateNestedOneWithoutBidsInput
  }

  export type bidsUncheckedCreateWithoutLotInput = {
    id?: string
    user_id: string
    bid_amount: number
    submitted_at?: Date | string
    status?: string
    bid_time?: Date | string | null
  }

  export type bidsCreateOrConnectWithoutLotInput = {
    where: bidsWhereUniqueInput
    create: XOR<bidsCreateWithoutLotInput, bidsUncheckedCreateWithoutLotInput>
  }

  export type bidsCreateManyLotInputEnvelope = {
    data: bidsCreateManyLotInput | bidsCreateManyLotInput[]
    skipDuplicates?: boolean
  }

  export type awarded_bidsCreateWithoutLotInput = {
    id?: string
    final_price: number
    commission: number
    user: usersCreateNestedOneWithoutAwarded_bidsInput
  }

  export type awarded_bidsUncheckedCreateWithoutLotInput = {
    id?: string
    awarded_to: string
    final_price: number
    commission: number
  }

  export type awarded_bidsCreateOrConnectWithoutLotInput = {
    where: awarded_bidsWhereUniqueInput
    create: XOR<awarded_bidsCreateWithoutLotInput, awarded_bidsUncheckedCreateWithoutLotInput>
  }

  export type awarded_bidsCreateManyLotInputEnvelope = {
    data: awarded_bidsCreateManyLotInput | awarded_bidsCreateManyLotInput[]
    skipDuplicates?: boolean
  }

  export type verizon_filesUpsertWithoutLotsInput = {
    update: XOR<verizon_filesUpdateWithoutLotsInput, verizon_filesUncheckedUpdateWithoutLotsInput>
    create: XOR<verizon_filesCreateWithoutLotsInput, verizon_filesUncheckedCreateWithoutLotsInput>
    where?: verizon_filesWhereInput
  }

  export type verizon_filesUpdateToOneWithWhereWithoutLotsInput = {
    where?: verizon_filesWhereInput
    data: XOR<verizon_filesUpdateWithoutLotsInput, verizon_filesUncheckedUpdateWithoutLotsInput>
  }

  export type verizon_filesUpdateWithoutLotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    upload_time?: DateTimeFieldUpdateOperationsInput | Date | string
    cleaned?: BoolFieldUpdateOperationsInput | boolean
    user?: usersUpdateOneRequiredWithoutVerizon_filesNestedInput
  }

  export type verizon_filesUncheckedUpdateWithoutLotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    uploaded_by?: StringFieldUpdateOperationsInput | string
    upload_time?: DateTimeFieldUpdateOperationsInput | Date | string
    cleaned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type bidsUpsertWithWhereUniqueWithoutLotInput = {
    where: bidsWhereUniqueInput
    update: XOR<bidsUpdateWithoutLotInput, bidsUncheckedUpdateWithoutLotInput>
    create: XOR<bidsCreateWithoutLotInput, bidsUncheckedCreateWithoutLotInput>
  }

  export type bidsUpdateWithWhereUniqueWithoutLotInput = {
    where: bidsWhereUniqueInput
    data: XOR<bidsUpdateWithoutLotInput, bidsUncheckedUpdateWithoutLotInput>
  }

  export type bidsUpdateManyWithWhereWithoutLotInput = {
    where: bidsScalarWhereInput
    data: XOR<bidsUpdateManyMutationInput, bidsUncheckedUpdateManyWithoutLotInput>
  }

  export type awarded_bidsUpsertWithWhereUniqueWithoutLotInput = {
    where: awarded_bidsWhereUniqueInput
    update: XOR<awarded_bidsUpdateWithoutLotInput, awarded_bidsUncheckedUpdateWithoutLotInput>
    create: XOR<awarded_bidsCreateWithoutLotInput, awarded_bidsUncheckedCreateWithoutLotInput>
  }

  export type awarded_bidsUpdateWithWhereUniqueWithoutLotInput = {
    where: awarded_bidsWhereUniqueInput
    data: XOR<awarded_bidsUpdateWithoutLotInput, awarded_bidsUncheckedUpdateWithoutLotInput>
  }

  export type awarded_bidsUpdateManyWithWhereWithoutLotInput = {
    where: awarded_bidsScalarWhereInput
    data: XOR<awarded_bidsUpdateManyMutationInput, awarded_bidsUncheckedUpdateManyWithoutLotInput>
  }

  export type usersCreateWithoutBidsInput = {
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
    verizon_files?: verizon_filesCreateNestedManyWithoutUserInput
    uploaded_files?: uploaded_filesCreateNestedManyWithoutUserInput
    awarded_bids?: awarded_bidsCreateNestedManyWithoutUserInput
    invoices?: invoiceCreateNestedManyWithoutUserInput
    email_notifications?: email_notificationsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutBidsInput = {
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
    verizon_files?: verizon_filesUncheckedCreateNestedManyWithoutUserInput
    uploaded_files?: uploaded_filesUncheckedCreateNestedManyWithoutUserInput
    awarded_bids?: awarded_bidsUncheckedCreateNestedManyWithoutUserInput
    invoices?: invoiceUncheckedCreateNestedManyWithoutUserInput
    email_notifications?: email_notificationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutBidsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutBidsInput, usersUncheckedCreateWithoutBidsInput>
  }

  export type lotsCreateWithoutBidsInput = {
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
    verizon_file?: verizon_filesCreateNestedOneWithoutLotsInput
    awarded_bids?: awarded_bidsCreateNestedManyWithoutLotInput
  }

  export type lotsUncheckedCreateWithoutBidsInput = {
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
    awarded_bids?: awarded_bidsUncheckedCreateNestedManyWithoutLotInput
  }

  export type lotsCreateOrConnectWithoutBidsInput = {
    where: lotsWhereUniqueInput
    create: XOR<lotsCreateWithoutBidsInput, lotsUncheckedCreateWithoutBidsInput>
  }

  export type usersUpsertWithoutBidsInput = {
    update: XOR<usersUpdateWithoutBidsInput, usersUncheckedUpdateWithoutBidsInput>
    create: XOR<usersCreateWithoutBidsInput, usersUncheckedCreateWithoutBidsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutBidsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutBidsInput, usersUncheckedUpdateWithoutBidsInput>
  }

  export type usersUpdateWithoutBidsInput = {
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
    verizon_files?: verizon_filesUpdateManyWithoutUserNestedInput
    uploaded_files?: uploaded_filesUpdateManyWithoutUserNestedInput
    awarded_bids?: awarded_bidsUpdateManyWithoutUserNestedInput
    invoices?: invoiceUpdateManyWithoutUserNestedInput
    email_notifications?: email_notificationsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutBidsInput = {
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
    verizon_files?: verizon_filesUncheckedUpdateManyWithoutUserNestedInput
    uploaded_files?: uploaded_filesUncheckedUpdateManyWithoutUserNestedInput
    awarded_bids?: awarded_bidsUncheckedUpdateManyWithoutUserNestedInput
    invoices?: invoiceUncheckedUpdateManyWithoutUserNestedInput
    email_notifications?: email_notificationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type lotsUpsertWithoutBidsInput = {
    update: XOR<lotsUpdateWithoutBidsInput, lotsUncheckedUpdateWithoutBidsInput>
    create: XOR<lotsCreateWithoutBidsInput, lotsUncheckedCreateWithoutBidsInput>
    where?: lotsWhereInput
  }

  export type lotsUpdateToOneWithWhereWithoutBidsInput = {
    where?: lotsWhereInput
    data: XOR<lotsUpdateWithoutBidsInput, lotsUncheckedUpdateWithoutBidsInput>
  }

  export type lotsUpdateWithoutBidsInput = {
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
    verizon_file?: verizon_filesUpdateOneWithoutLotsNestedInput
    awarded_bids?: awarded_bidsUpdateManyWithoutLotNestedInput
  }

  export type lotsUncheckedUpdateWithoutBidsInput = {
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
    awarded_bids?: awarded_bidsUncheckedUpdateManyWithoutLotNestedInput
  }

  export type lotsCreateWithoutAwarded_bidsInput = {
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
    verizon_file?: verizon_filesCreateNestedOneWithoutLotsInput
    bids?: bidsCreateNestedManyWithoutLotInput
  }

  export type lotsUncheckedCreateWithoutAwarded_bidsInput = {
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
    bids?: bidsUncheckedCreateNestedManyWithoutLotInput
  }

  export type lotsCreateOrConnectWithoutAwarded_bidsInput = {
    where: lotsWhereUniqueInput
    create: XOR<lotsCreateWithoutAwarded_bidsInput, lotsUncheckedCreateWithoutAwarded_bidsInput>
  }

  export type usersCreateWithoutAwarded_bidsInput = {
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
    verizon_files?: verizon_filesCreateNestedManyWithoutUserInput
    uploaded_files?: uploaded_filesCreateNestedManyWithoutUserInput
    bids?: bidsCreateNestedManyWithoutUserInput
    invoices?: invoiceCreateNestedManyWithoutUserInput
    email_notifications?: email_notificationsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutAwarded_bidsInput = {
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
    verizon_files?: verizon_filesUncheckedCreateNestedManyWithoutUserInput
    uploaded_files?: uploaded_filesUncheckedCreateNestedManyWithoutUserInput
    bids?: bidsUncheckedCreateNestedManyWithoutUserInput
    invoices?: invoiceUncheckedCreateNestedManyWithoutUserInput
    email_notifications?: email_notificationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutAwarded_bidsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAwarded_bidsInput, usersUncheckedCreateWithoutAwarded_bidsInput>
  }

  export type lotsUpsertWithoutAwarded_bidsInput = {
    update: XOR<lotsUpdateWithoutAwarded_bidsInput, lotsUncheckedUpdateWithoutAwarded_bidsInput>
    create: XOR<lotsCreateWithoutAwarded_bidsInput, lotsUncheckedCreateWithoutAwarded_bidsInput>
    where?: lotsWhereInput
  }

  export type lotsUpdateToOneWithWhereWithoutAwarded_bidsInput = {
    where?: lotsWhereInput
    data: XOR<lotsUpdateWithoutAwarded_bidsInput, lotsUncheckedUpdateWithoutAwarded_bidsInput>
  }

  export type lotsUpdateWithoutAwarded_bidsInput = {
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
    verizon_file?: verizon_filesUpdateOneWithoutLotsNestedInput
    bids?: bidsUpdateManyWithoutLotNestedInput
  }

  export type lotsUncheckedUpdateWithoutAwarded_bidsInput = {
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
    bids?: bidsUncheckedUpdateManyWithoutLotNestedInput
  }

  export type usersUpsertWithoutAwarded_bidsInput = {
    update: XOR<usersUpdateWithoutAwarded_bidsInput, usersUncheckedUpdateWithoutAwarded_bidsInput>
    create: XOR<usersCreateWithoutAwarded_bidsInput, usersUncheckedCreateWithoutAwarded_bidsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAwarded_bidsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAwarded_bidsInput, usersUncheckedUpdateWithoutAwarded_bidsInput>
  }

  export type usersUpdateWithoutAwarded_bidsInput = {
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
    verizon_files?: verizon_filesUpdateManyWithoutUserNestedInput
    uploaded_files?: uploaded_filesUpdateManyWithoutUserNestedInput
    bids?: bidsUpdateManyWithoutUserNestedInput
    invoices?: invoiceUpdateManyWithoutUserNestedInput
    email_notifications?: email_notificationsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutAwarded_bidsInput = {
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
    verizon_files?: verizon_filesUncheckedUpdateManyWithoutUserNestedInput
    uploaded_files?: uploaded_filesUncheckedUpdateManyWithoutUserNestedInput
    bids?: bidsUncheckedUpdateManyWithoutUserNestedInput
    invoices?: invoiceUncheckedUpdateManyWithoutUserNestedInput
    email_notifications?: email_notificationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutInvoicesInput = {
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
    verizon_files?: verizon_filesCreateNestedManyWithoutUserInput
    uploaded_files?: uploaded_filesCreateNestedManyWithoutUserInput
    bids?: bidsCreateNestedManyWithoutUserInput
    awarded_bids?: awarded_bidsCreateNestedManyWithoutUserInput
    email_notifications?: email_notificationsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutInvoicesInput = {
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
    verizon_files?: verizon_filesUncheckedCreateNestedManyWithoutUserInput
    uploaded_files?: uploaded_filesUncheckedCreateNestedManyWithoutUserInput
    bids?: bidsUncheckedCreateNestedManyWithoutUserInput
    awarded_bids?: awarded_bidsUncheckedCreateNestedManyWithoutUserInput
    email_notifications?: email_notificationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutInvoicesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutInvoicesInput, usersUncheckedCreateWithoutInvoicesInput>
  }

  export type usersUpsertWithoutInvoicesInput = {
    update: XOR<usersUpdateWithoutInvoicesInput, usersUncheckedUpdateWithoutInvoicesInput>
    create: XOR<usersCreateWithoutInvoicesInput, usersUncheckedCreateWithoutInvoicesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutInvoicesInput, usersUncheckedUpdateWithoutInvoicesInput>
  }

  export type usersUpdateWithoutInvoicesInput = {
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
    verizon_files?: verizon_filesUpdateManyWithoutUserNestedInput
    uploaded_files?: uploaded_filesUpdateManyWithoutUserNestedInput
    bids?: bidsUpdateManyWithoutUserNestedInput
    awarded_bids?: awarded_bidsUpdateManyWithoutUserNestedInput
    email_notifications?: email_notificationsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutInvoicesInput = {
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
    verizon_files?: verizon_filesUncheckedUpdateManyWithoutUserNestedInput
    uploaded_files?: uploaded_filesUncheckedUpdateManyWithoutUserNestedInput
    bids?: bidsUncheckedUpdateManyWithoutUserNestedInput
    awarded_bids?: awarded_bidsUncheckedUpdateManyWithoutUserNestedInput
    email_notifications?: email_notificationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutEmail_notificationsInput = {
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
    verizon_files?: verizon_filesCreateNestedManyWithoutUserInput
    uploaded_files?: uploaded_filesCreateNestedManyWithoutUserInput
    bids?: bidsCreateNestedManyWithoutUserInput
    awarded_bids?: awarded_bidsCreateNestedManyWithoutUserInput
    invoices?: invoiceCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutEmail_notificationsInput = {
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
    verizon_files?: verizon_filesUncheckedCreateNestedManyWithoutUserInput
    uploaded_files?: uploaded_filesUncheckedCreateNestedManyWithoutUserInput
    bids?: bidsUncheckedCreateNestedManyWithoutUserInput
    awarded_bids?: awarded_bidsUncheckedCreateNestedManyWithoutUserInput
    invoices?: invoiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutEmail_notificationsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutEmail_notificationsInput, usersUncheckedCreateWithoutEmail_notificationsInput>
  }

  export type usersUpsertWithoutEmail_notificationsInput = {
    update: XOR<usersUpdateWithoutEmail_notificationsInput, usersUncheckedUpdateWithoutEmail_notificationsInput>
    create: XOR<usersCreateWithoutEmail_notificationsInput, usersUncheckedCreateWithoutEmail_notificationsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutEmail_notificationsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutEmail_notificationsInput, usersUncheckedUpdateWithoutEmail_notificationsInput>
  }

  export type usersUpdateWithoutEmail_notificationsInput = {
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
    verizon_files?: verizon_filesUpdateManyWithoutUserNestedInput
    uploaded_files?: uploaded_filesUpdateManyWithoutUserNestedInput
    bids?: bidsUpdateManyWithoutUserNestedInput
    awarded_bids?: awarded_bidsUpdateManyWithoutUserNestedInput
    invoices?: invoiceUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutEmail_notificationsInput = {
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
    verizon_files?: verizon_filesUncheckedUpdateManyWithoutUserNestedInput
    uploaded_files?: uploaded_filesUncheckedUpdateManyWithoutUserNestedInput
    bids?: bidsUncheckedUpdateManyWithoutUserNestedInput
    awarded_bids?: awarded_bidsUncheckedUpdateManyWithoutUserNestedInput
    invoices?: invoiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type verizon_filesCreateManyUserInput = {
    id?: string
    file_name: string
    upload_time?: Date | string
    cleaned?: boolean
  }

  export type uploaded_filesCreateManyUserInput = {
    id?: string
    filename: string
    processed_name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type bidsCreateManyUserInput = {
    id?: string
    lot_id: string
    bid_amount: number
    submitted_at?: Date | string
    status?: string
    bid_time?: Date | string | null
  }

  export type awarded_bidsCreateManyUserInput = {
    id?: string
    lot_id: string
    final_price: number
    commission: number
  }

  export type invoiceCreateManyUserInput = {
    id?: string
    awarded_bid_ids?: invoiceCreateawarded_bid_idsInput | string[]
    invoice_number: string
    generated_at?: Date | string
    total_amount: number
    pdf_url?: string | null
  }

  export type email_notificationsCreateManyUserInput = {
    id?: number
    subject: string
    message: string
    notification_type?: string | null
    is_sent?: boolean
    sent_at?: Date | string | null
    created_at?: Date | string
  }

  export type verizon_filesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    upload_time?: DateTimeFieldUpdateOperationsInput | Date | string
    cleaned?: BoolFieldUpdateOperationsInput | boolean
    lots?: lotsUpdateManyWithoutVerizon_fileNestedInput
  }

  export type verizon_filesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    upload_time?: DateTimeFieldUpdateOperationsInput | Date | string
    cleaned?: BoolFieldUpdateOperationsInput | boolean
    lots?: lotsUncheckedUpdateManyWithoutVerizon_fileNestedInput
  }

  export type verizon_filesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    upload_time?: DateTimeFieldUpdateOperationsInput | Date | string
    cleaned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type uploaded_filesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    processed_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type uploaded_filesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    processed_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type uploaded_filesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    processed_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bidsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bid_amount?: FloatFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    bid_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lot?: lotsUpdateOneRequiredWithoutBidsNestedInput
  }

  export type bidsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lot_id?: StringFieldUpdateOperationsInput | string
    bid_amount?: FloatFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    bid_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bidsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lot_id?: StringFieldUpdateOperationsInput | string
    bid_amount?: FloatFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    bid_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type awarded_bidsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    final_price?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    lot?: lotsUpdateOneRequiredWithoutAwarded_bidsNestedInput
  }

  export type awarded_bidsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lot_id?: StringFieldUpdateOperationsInput | string
    final_price?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
  }

  export type awarded_bidsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lot_id?: StringFieldUpdateOperationsInput | string
    final_price?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
  }

  export type invoiceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    awarded_bid_ids?: invoiceUpdateawarded_bid_idsInput | string[]
    invoice_number?: StringFieldUpdateOperationsInput | string
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: FloatFieldUpdateOperationsInput | number
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type invoiceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    awarded_bid_ids?: invoiceUpdateawarded_bid_idsInput | string[]
    invoice_number?: StringFieldUpdateOperationsInput | string
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: FloatFieldUpdateOperationsInput | number
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type invoiceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    awarded_bid_ids?: invoiceUpdateawarded_bid_idsInput | string[]
    invoice_number?: StringFieldUpdateOperationsInput | string
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: FloatFieldUpdateOperationsInput | number
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type email_notificationsUpdateWithoutUserInput = {
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_sent?: BoolFieldUpdateOperationsInput | boolean
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type email_notificationsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_sent?: BoolFieldUpdateOperationsInput | boolean
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type email_notificationsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_sent?: BoolFieldUpdateOperationsInput | boolean
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lotsCreateManyVerizon_fileInput = {
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

  export type lotsUpdateWithoutVerizon_fileInput = {
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
    bids?: bidsUpdateManyWithoutLotNestedInput
    awarded_bids?: awarded_bidsUpdateManyWithoutLotNestedInput
  }

  export type lotsUncheckedUpdateWithoutVerizon_fileInput = {
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
    bids?: bidsUncheckedUpdateManyWithoutLotNestedInput
    awarded_bids?: awarded_bidsUncheckedUpdateManyWithoutLotNestedInput
  }

  export type lotsUncheckedUpdateManyWithoutVerizon_fileInput = {
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

  export type bidsCreateManyLotInput = {
    id?: string
    user_id: string
    bid_amount: number
    submitted_at?: Date | string
    status?: string
    bid_time?: Date | string | null
  }

  export type awarded_bidsCreateManyLotInput = {
    id?: string
    awarded_to: string
    final_price: number
    commission: number
  }

  export type bidsUpdateWithoutLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    bid_amount?: FloatFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    bid_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: usersUpdateOneRequiredWithoutBidsNestedInput
  }

  export type bidsUncheckedUpdateWithoutLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    bid_amount?: FloatFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    bid_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bidsUncheckedUpdateManyWithoutLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    bid_amount?: FloatFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    bid_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type awarded_bidsUpdateWithoutLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    final_price?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    user?: usersUpdateOneRequiredWithoutAwarded_bidsNestedInput
  }

  export type awarded_bidsUncheckedUpdateWithoutLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    awarded_to?: StringFieldUpdateOperationsInput | string
    final_price?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
  }

  export type awarded_bidsUncheckedUpdateManyWithoutLotInput = {
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