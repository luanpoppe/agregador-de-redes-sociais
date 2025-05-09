
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Channels
 * 
 */
export type Channels = $Result.DefaultSelection<Prisma.$ChannelsPayload>
/**
 * Model ChannelsByUsers
 * 
 */
export type ChannelsByUsers = $Result.DefaultSelection<Prisma.$ChannelsByUsersPayload>
/**
 * Model ContentsByChannel
 * 
 */
export type ContentsByChannel = $Result.DefaultSelection<Prisma.$ContentsByChannelPayload>

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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.channels`: Exposes CRUD operations for the **Channels** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Channels
    * const channels = await prisma.channels.findMany()
    * ```
    */
  get channels(): Prisma.ChannelsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.channelsByUsers`: Exposes CRUD operations for the **ChannelsByUsers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChannelsByUsers
    * const channelsByUsers = await prisma.channelsByUsers.findMany()
    * ```
    */
  get channelsByUsers(): Prisma.ChannelsByUsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contentsByChannel`: Exposes CRUD operations for the **ContentsByChannel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContentsByChannels
    * const contentsByChannels = await prisma.contentsByChannel.findMany()
    * ```
    */
  get contentsByChannel(): Prisma.ContentsByChannelDelegate<ExtArgs, ClientOptions>;
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
    Users: 'Users',
    Channels: 'Channels',
    ChannelsByUsers: 'ChannelsByUsers',
    ContentsByChannel: 'ContentsByChannel'
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
      modelProps: "users" | "channels" | "channelsByUsers" | "contentsByChannel"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Channels: {
        payload: Prisma.$ChannelsPayload<ExtArgs>
        fields: Prisma.ChannelsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChannelsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChannelsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsPayload>
          }
          findFirst: {
            args: Prisma.ChannelsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChannelsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsPayload>
          }
          findMany: {
            args: Prisma.ChannelsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsPayload>[]
          }
          create: {
            args: Prisma.ChannelsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsPayload>
          }
          createMany: {
            args: Prisma.ChannelsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChannelsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsPayload>[]
          }
          delete: {
            args: Prisma.ChannelsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsPayload>
          }
          update: {
            args: Prisma.ChannelsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsPayload>
          }
          deleteMany: {
            args: Prisma.ChannelsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChannelsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChannelsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsPayload>[]
          }
          upsert: {
            args: Prisma.ChannelsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsPayload>
          }
          aggregate: {
            args: Prisma.ChannelsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChannels>
          }
          groupBy: {
            args: Prisma.ChannelsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChannelsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChannelsCountArgs<ExtArgs>
            result: $Utils.Optional<ChannelsCountAggregateOutputType> | number
          }
        }
      }
      ChannelsByUsers: {
        payload: Prisma.$ChannelsByUsersPayload<ExtArgs>
        fields: Prisma.ChannelsByUsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChannelsByUsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsByUsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChannelsByUsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsByUsersPayload>
          }
          findFirst: {
            args: Prisma.ChannelsByUsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsByUsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChannelsByUsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsByUsersPayload>
          }
          findMany: {
            args: Prisma.ChannelsByUsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsByUsersPayload>[]
          }
          create: {
            args: Prisma.ChannelsByUsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsByUsersPayload>
          }
          createMany: {
            args: Prisma.ChannelsByUsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChannelsByUsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsByUsersPayload>[]
          }
          delete: {
            args: Prisma.ChannelsByUsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsByUsersPayload>
          }
          update: {
            args: Prisma.ChannelsByUsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsByUsersPayload>
          }
          deleteMany: {
            args: Prisma.ChannelsByUsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChannelsByUsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChannelsByUsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsByUsersPayload>[]
          }
          upsert: {
            args: Prisma.ChannelsByUsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsByUsersPayload>
          }
          aggregate: {
            args: Prisma.ChannelsByUsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChannelsByUsers>
          }
          groupBy: {
            args: Prisma.ChannelsByUsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChannelsByUsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChannelsByUsersCountArgs<ExtArgs>
            result: $Utils.Optional<ChannelsByUsersCountAggregateOutputType> | number
          }
        }
      }
      ContentsByChannel: {
        payload: Prisma.$ContentsByChannelPayload<ExtArgs>
        fields: Prisma.ContentsByChannelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentsByChannelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentsByChannelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentsByChannelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentsByChannelPayload>
          }
          findFirst: {
            args: Prisma.ContentsByChannelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentsByChannelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentsByChannelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentsByChannelPayload>
          }
          findMany: {
            args: Prisma.ContentsByChannelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentsByChannelPayload>[]
          }
          create: {
            args: Prisma.ContentsByChannelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentsByChannelPayload>
          }
          createMany: {
            args: Prisma.ContentsByChannelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContentsByChannelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentsByChannelPayload>[]
          }
          delete: {
            args: Prisma.ContentsByChannelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentsByChannelPayload>
          }
          update: {
            args: Prisma.ContentsByChannelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentsByChannelPayload>
          }
          deleteMany: {
            args: Prisma.ContentsByChannelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentsByChannelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContentsByChannelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentsByChannelPayload>[]
          }
          upsert: {
            args: Prisma.ContentsByChannelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentsByChannelPayload>
          }
          aggregate: {
            args: Prisma.ContentsByChannelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContentsByChannel>
          }
          groupBy: {
            args: Prisma.ContentsByChannelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentsByChannelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentsByChannelCountArgs<ExtArgs>
            result: $Utils.Optional<ContentsByChannelCountAggregateOutputType> | number
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
    users?: UsersOmit
    channels?: ChannelsOmit
    channelsByUsers?: ChannelsByUsersOmit
    contentsByChannel?: ContentsByChannelOmit
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
    ChannelsByUsers: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChannelsByUsers?: boolean | UsersCountOutputTypeCountChannelsByUsersArgs
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
  export type UsersCountOutputTypeCountChannelsByUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelsByUsersWhereInput
  }


  /**
   * Count Type ChannelsCountOutputType
   */

  export type ChannelsCountOutputType = {
    ChannelsByUsers: number
    ContentsByChannel: number
  }

  export type ChannelsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChannelsByUsers?: boolean | ChannelsCountOutputTypeCountChannelsByUsersArgs
    ContentsByChannel?: boolean | ChannelsCountOutputTypeCountContentsByChannelArgs
  }

  // Custom InputTypes
  /**
   * ChannelsCountOutputType without action
   */
  export type ChannelsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelsCountOutputType
     */
    select?: ChannelsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChannelsCountOutputType without action
   */
  export type ChannelsCountOutputTypeCountChannelsByUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelsByUsersWhereInput
  }

  /**
   * ChannelsCountOutputType without action
   */
  export type ChannelsCountOutputTypeCountContentsByChannelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentsByChannelWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
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


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    ChannelsByUsers?: boolean | Users$ChannelsByUsersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChannelsByUsers?: boolean | Users$ChannelsByUsersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      ChannelsByUsers: Prisma.$ChannelsByUsersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
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
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
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
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
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
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
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
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ChannelsByUsers<T extends Users$ChannelsByUsersArgs<ExtArgs> = {}>(args?: Subset<T, Users$ChannelsByUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelsByUsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.ChannelsByUsers
   */
  export type Users$ChannelsByUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelsByUsers
     */
    select?: ChannelsByUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelsByUsers
     */
    omit?: ChannelsByUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsByUsersInclude<ExtArgs> | null
    where?: ChannelsByUsersWhereInput
    orderBy?: ChannelsByUsersOrderByWithRelationInput | ChannelsByUsersOrderByWithRelationInput[]
    cursor?: ChannelsByUsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChannelsByUsersScalarFieldEnum | ChannelsByUsersScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Channels
   */

  export type AggregateChannels = {
    _count: ChannelsCountAggregateOutputType | null
    _avg: ChannelsAvgAggregateOutputType | null
    _sum: ChannelsSumAggregateOutputType | null
    _min: ChannelsMinAggregateOutputType | null
    _max: ChannelsMaxAggregateOutputType | null
  }

  export type ChannelsAvgAggregateOutputType = {
    id: number | null
  }

  export type ChannelsSumAggregateOutputType = {
    id: number | null
  }

  export type ChannelsMinAggregateOutputType = {
    id: number | null
    name: string | null
    channelId: string | null
    profilePicture: string | null
  }

  export type ChannelsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    channelId: string | null
    profilePicture: string | null
  }

  export type ChannelsCountAggregateOutputType = {
    id: number
    name: number
    channelId: number
    profilePicture: number
    _all: number
  }


  export type ChannelsAvgAggregateInputType = {
    id?: true
  }

  export type ChannelsSumAggregateInputType = {
    id?: true
  }

  export type ChannelsMinAggregateInputType = {
    id?: true
    name?: true
    channelId?: true
    profilePicture?: true
  }

  export type ChannelsMaxAggregateInputType = {
    id?: true
    name?: true
    channelId?: true
    profilePicture?: true
  }

  export type ChannelsCountAggregateInputType = {
    id?: true
    name?: true
    channelId?: true
    profilePicture?: true
    _all?: true
  }

  export type ChannelsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Channels to aggregate.
     */
    where?: ChannelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelsOrderByWithRelationInput | ChannelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChannelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Channels
    **/
    _count?: true | ChannelsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChannelsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChannelsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChannelsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChannelsMaxAggregateInputType
  }

  export type GetChannelsAggregateType<T extends ChannelsAggregateArgs> = {
        [P in keyof T & keyof AggregateChannels]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannels[P]>
      : GetScalarType<T[P], AggregateChannels[P]>
  }




  export type ChannelsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelsWhereInput
    orderBy?: ChannelsOrderByWithAggregationInput | ChannelsOrderByWithAggregationInput[]
    by: ChannelsScalarFieldEnum[] | ChannelsScalarFieldEnum
    having?: ChannelsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChannelsCountAggregateInputType | true
    _avg?: ChannelsAvgAggregateInputType
    _sum?: ChannelsSumAggregateInputType
    _min?: ChannelsMinAggregateInputType
    _max?: ChannelsMaxAggregateInputType
  }

  export type ChannelsGroupByOutputType = {
    id: number
    name: string | null
    channelId: string
    profilePicture: string | null
    _count: ChannelsCountAggregateOutputType | null
    _avg: ChannelsAvgAggregateOutputType | null
    _sum: ChannelsSumAggregateOutputType | null
    _min: ChannelsMinAggregateOutputType | null
    _max: ChannelsMaxAggregateOutputType | null
  }

  type GetChannelsGroupByPayload<T extends ChannelsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChannelsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChannelsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChannelsGroupByOutputType[P]>
            : GetScalarType<T[P], ChannelsGroupByOutputType[P]>
        }
      >
    >


  export type ChannelsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    channelId?: boolean
    profilePicture?: boolean
    ChannelsByUsers?: boolean | Channels$ChannelsByUsersArgs<ExtArgs>
    ContentsByChannel?: boolean | Channels$ContentsByChannelArgs<ExtArgs>
    _count?: boolean | ChannelsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channels"]>

  export type ChannelsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    channelId?: boolean
    profilePicture?: boolean
  }, ExtArgs["result"]["channels"]>

  export type ChannelsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    channelId?: boolean
    profilePicture?: boolean
  }, ExtArgs["result"]["channels"]>

  export type ChannelsSelectScalar = {
    id?: boolean
    name?: boolean
    channelId?: boolean
    profilePicture?: boolean
  }

  export type ChannelsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "channelId" | "profilePicture", ExtArgs["result"]["channels"]>
  export type ChannelsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChannelsByUsers?: boolean | Channels$ChannelsByUsersArgs<ExtArgs>
    ContentsByChannel?: boolean | Channels$ContentsByChannelArgs<ExtArgs>
    _count?: boolean | ChannelsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChannelsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChannelsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChannelsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Channels"
    objects: {
      ChannelsByUsers: Prisma.$ChannelsByUsersPayload<ExtArgs>[]
      ContentsByChannel: Prisma.$ContentsByChannelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      channelId: string
      profilePicture: string | null
    }, ExtArgs["result"]["channels"]>
    composites: {}
  }

  type ChannelsGetPayload<S extends boolean | null | undefined | ChannelsDefaultArgs> = $Result.GetResult<Prisma.$ChannelsPayload, S>

  type ChannelsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChannelsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChannelsCountAggregateInputType | true
    }

  export interface ChannelsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Channels'], meta: { name: 'Channels' } }
    /**
     * Find zero or one Channels that matches the filter.
     * @param {ChannelsFindUniqueArgs} args - Arguments to find a Channels
     * @example
     * // Get one Channels
     * const channels = await prisma.channels.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChannelsFindUniqueArgs>(args: SelectSubset<T, ChannelsFindUniqueArgs<ExtArgs>>): Prisma__ChannelsClient<$Result.GetResult<Prisma.$ChannelsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Channels that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChannelsFindUniqueOrThrowArgs} args - Arguments to find a Channels
     * @example
     * // Get one Channels
     * const channels = await prisma.channels.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChannelsFindUniqueOrThrowArgs>(args: SelectSubset<T, ChannelsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChannelsClient<$Result.GetResult<Prisma.$ChannelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Channels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelsFindFirstArgs} args - Arguments to find a Channels
     * @example
     * // Get one Channels
     * const channels = await prisma.channels.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChannelsFindFirstArgs>(args?: SelectSubset<T, ChannelsFindFirstArgs<ExtArgs>>): Prisma__ChannelsClient<$Result.GetResult<Prisma.$ChannelsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Channels that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelsFindFirstOrThrowArgs} args - Arguments to find a Channels
     * @example
     * // Get one Channels
     * const channels = await prisma.channels.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChannelsFindFirstOrThrowArgs>(args?: SelectSubset<T, ChannelsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChannelsClient<$Result.GetResult<Prisma.$ChannelsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Channels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Channels
     * const channels = await prisma.channels.findMany()
     * 
     * // Get first 10 Channels
     * const channels = await prisma.channels.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const channelsWithIdOnly = await prisma.channels.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChannelsFindManyArgs>(args?: SelectSubset<T, ChannelsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Channels.
     * @param {ChannelsCreateArgs} args - Arguments to create a Channels.
     * @example
     * // Create one Channels
     * const Channels = await prisma.channels.create({
     *   data: {
     *     // ... data to create a Channels
     *   }
     * })
     * 
     */
    create<T extends ChannelsCreateArgs>(args: SelectSubset<T, ChannelsCreateArgs<ExtArgs>>): Prisma__ChannelsClient<$Result.GetResult<Prisma.$ChannelsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Channels.
     * @param {ChannelsCreateManyArgs} args - Arguments to create many Channels.
     * @example
     * // Create many Channels
     * const channels = await prisma.channels.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChannelsCreateManyArgs>(args?: SelectSubset<T, ChannelsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Channels and returns the data saved in the database.
     * @param {ChannelsCreateManyAndReturnArgs} args - Arguments to create many Channels.
     * @example
     * // Create many Channels
     * const channels = await prisma.channels.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Channels and only return the `id`
     * const channelsWithIdOnly = await prisma.channels.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChannelsCreateManyAndReturnArgs>(args?: SelectSubset<T, ChannelsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Channels.
     * @param {ChannelsDeleteArgs} args - Arguments to delete one Channels.
     * @example
     * // Delete one Channels
     * const Channels = await prisma.channels.delete({
     *   where: {
     *     // ... filter to delete one Channels
     *   }
     * })
     * 
     */
    delete<T extends ChannelsDeleteArgs>(args: SelectSubset<T, ChannelsDeleteArgs<ExtArgs>>): Prisma__ChannelsClient<$Result.GetResult<Prisma.$ChannelsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Channels.
     * @param {ChannelsUpdateArgs} args - Arguments to update one Channels.
     * @example
     * // Update one Channels
     * const channels = await prisma.channels.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChannelsUpdateArgs>(args: SelectSubset<T, ChannelsUpdateArgs<ExtArgs>>): Prisma__ChannelsClient<$Result.GetResult<Prisma.$ChannelsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Channels.
     * @param {ChannelsDeleteManyArgs} args - Arguments to filter Channels to delete.
     * @example
     * // Delete a few Channels
     * const { count } = await prisma.channels.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChannelsDeleteManyArgs>(args?: SelectSubset<T, ChannelsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Channels
     * const channels = await prisma.channels.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChannelsUpdateManyArgs>(args: SelectSubset<T, ChannelsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Channels and returns the data updated in the database.
     * @param {ChannelsUpdateManyAndReturnArgs} args - Arguments to update many Channels.
     * @example
     * // Update many Channels
     * const channels = await prisma.channels.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Channels and only return the `id`
     * const channelsWithIdOnly = await prisma.channels.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChannelsUpdateManyAndReturnArgs>(args: SelectSubset<T, ChannelsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Channels.
     * @param {ChannelsUpsertArgs} args - Arguments to update or create a Channels.
     * @example
     * // Update or create a Channels
     * const channels = await prisma.channels.upsert({
     *   create: {
     *     // ... data to create a Channels
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Channels we want to update
     *   }
     * })
     */
    upsert<T extends ChannelsUpsertArgs>(args: SelectSubset<T, ChannelsUpsertArgs<ExtArgs>>): Prisma__ChannelsClient<$Result.GetResult<Prisma.$ChannelsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelsCountArgs} args - Arguments to filter Channels to count.
     * @example
     * // Count the number of Channels
     * const count = await prisma.channels.count({
     *   where: {
     *     // ... the filter for the Channels we want to count
     *   }
     * })
    **/
    count<T extends ChannelsCountArgs>(
      args?: Subset<T, ChannelsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChannelsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChannelsAggregateArgs>(args: Subset<T, ChannelsAggregateArgs>): Prisma.PrismaPromise<GetChannelsAggregateType<T>>

    /**
     * Group by Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelsGroupByArgs} args - Group by arguments.
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
      T extends ChannelsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChannelsGroupByArgs['orderBy'] }
        : { orderBy?: ChannelsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChannelsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChannelsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Channels model
   */
  readonly fields: ChannelsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Channels.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChannelsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ChannelsByUsers<T extends Channels$ChannelsByUsersArgs<ExtArgs> = {}>(args?: Subset<T, Channels$ChannelsByUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelsByUsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ContentsByChannel<T extends Channels$ContentsByChannelArgs<ExtArgs> = {}>(args?: Subset<T, Channels$ContentsByChannelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentsByChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Channels model
   */
  interface ChannelsFieldRefs {
    readonly id: FieldRef<"Channels", 'Int'>
    readonly name: FieldRef<"Channels", 'String'>
    readonly channelId: FieldRef<"Channels", 'String'>
    readonly profilePicture: FieldRef<"Channels", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Channels findUnique
   */
  export type ChannelsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channels
     */
    select?: ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channels
     */
    omit?: ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsInclude<ExtArgs> | null
    /**
     * Filter, which Channels to fetch.
     */
    where: ChannelsWhereUniqueInput
  }

  /**
   * Channels findUniqueOrThrow
   */
  export type ChannelsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channels
     */
    select?: ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channels
     */
    omit?: ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsInclude<ExtArgs> | null
    /**
     * Filter, which Channels to fetch.
     */
    where: ChannelsWhereUniqueInput
  }

  /**
   * Channels findFirst
   */
  export type ChannelsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channels
     */
    select?: ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channels
     */
    omit?: ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsInclude<ExtArgs> | null
    /**
     * Filter, which Channels to fetch.
     */
    where?: ChannelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelsOrderByWithRelationInput | ChannelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Channels.
     */
    cursor?: ChannelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Channels.
     */
    distinct?: ChannelsScalarFieldEnum | ChannelsScalarFieldEnum[]
  }

  /**
   * Channels findFirstOrThrow
   */
  export type ChannelsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channels
     */
    select?: ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channels
     */
    omit?: ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsInclude<ExtArgs> | null
    /**
     * Filter, which Channels to fetch.
     */
    where?: ChannelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelsOrderByWithRelationInput | ChannelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Channels.
     */
    cursor?: ChannelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Channels.
     */
    distinct?: ChannelsScalarFieldEnum | ChannelsScalarFieldEnum[]
  }

  /**
   * Channels findMany
   */
  export type ChannelsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channels
     */
    select?: ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channels
     */
    omit?: ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsInclude<ExtArgs> | null
    /**
     * Filter, which Channels to fetch.
     */
    where?: ChannelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelsOrderByWithRelationInput | ChannelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Channels.
     */
    cursor?: ChannelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    distinct?: ChannelsScalarFieldEnum | ChannelsScalarFieldEnum[]
  }

  /**
   * Channels create
   */
  export type ChannelsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channels
     */
    select?: ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channels
     */
    omit?: ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsInclude<ExtArgs> | null
    /**
     * The data needed to create a Channels.
     */
    data: XOR<ChannelsCreateInput, ChannelsUncheckedCreateInput>
  }

  /**
   * Channels createMany
   */
  export type ChannelsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Channels.
     */
    data: ChannelsCreateManyInput | ChannelsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Channels createManyAndReturn
   */
  export type ChannelsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channels
     */
    select?: ChannelsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Channels
     */
    omit?: ChannelsOmit<ExtArgs> | null
    /**
     * The data used to create many Channels.
     */
    data: ChannelsCreateManyInput | ChannelsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Channels update
   */
  export type ChannelsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channels
     */
    select?: ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channels
     */
    omit?: ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsInclude<ExtArgs> | null
    /**
     * The data needed to update a Channels.
     */
    data: XOR<ChannelsUpdateInput, ChannelsUncheckedUpdateInput>
    /**
     * Choose, which Channels to update.
     */
    where: ChannelsWhereUniqueInput
  }

  /**
   * Channels updateMany
   */
  export type ChannelsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Channels.
     */
    data: XOR<ChannelsUpdateManyMutationInput, ChannelsUncheckedUpdateManyInput>
    /**
     * Filter which Channels to update
     */
    where?: ChannelsWhereInput
    /**
     * Limit how many Channels to update.
     */
    limit?: number
  }

  /**
   * Channels updateManyAndReturn
   */
  export type ChannelsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channels
     */
    select?: ChannelsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Channels
     */
    omit?: ChannelsOmit<ExtArgs> | null
    /**
     * The data used to update Channels.
     */
    data: XOR<ChannelsUpdateManyMutationInput, ChannelsUncheckedUpdateManyInput>
    /**
     * Filter which Channels to update
     */
    where?: ChannelsWhereInput
    /**
     * Limit how many Channels to update.
     */
    limit?: number
  }

  /**
   * Channels upsert
   */
  export type ChannelsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channels
     */
    select?: ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channels
     */
    omit?: ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsInclude<ExtArgs> | null
    /**
     * The filter to search for the Channels to update in case it exists.
     */
    where: ChannelsWhereUniqueInput
    /**
     * In case the Channels found by the `where` argument doesn't exist, create a new Channels with this data.
     */
    create: XOR<ChannelsCreateInput, ChannelsUncheckedCreateInput>
    /**
     * In case the Channels was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChannelsUpdateInput, ChannelsUncheckedUpdateInput>
  }

  /**
   * Channels delete
   */
  export type ChannelsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channels
     */
    select?: ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channels
     */
    omit?: ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsInclude<ExtArgs> | null
    /**
     * Filter which Channels to delete.
     */
    where: ChannelsWhereUniqueInput
  }

  /**
   * Channels deleteMany
   */
  export type ChannelsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Channels to delete
     */
    where?: ChannelsWhereInput
    /**
     * Limit how many Channels to delete.
     */
    limit?: number
  }

  /**
   * Channels.ChannelsByUsers
   */
  export type Channels$ChannelsByUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelsByUsers
     */
    select?: ChannelsByUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelsByUsers
     */
    omit?: ChannelsByUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsByUsersInclude<ExtArgs> | null
    where?: ChannelsByUsersWhereInput
    orderBy?: ChannelsByUsersOrderByWithRelationInput | ChannelsByUsersOrderByWithRelationInput[]
    cursor?: ChannelsByUsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChannelsByUsersScalarFieldEnum | ChannelsByUsersScalarFieldEnum[]
  }

  /**
   * Channels.ContentsByChannel
   */
  export type Channels$ContentsByChannelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentsByChannel
     */
    select?: ContentsByChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentsByChannel
     */
    omit?: ContentsByChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentsByChannelInclude<ExtArgs> | null
    where?: ContentsByChannelWhereInput
    orderBy?: ContentsByChannelOrderByWithRelationInput | ContentsByChannelOrderByWithRelationInput[]
    cursor?: ContentsByChannelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentsByChannelScalarFieldEnum | ContentsByChannelScalarFieldEnum[]
  }

  /**
   * Channels without action
   */
  export type ChannelsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channels
     */
    select?: ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channels
     */
    omit?: ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsInclude<ExtArgs> | null
  }


  /**
   * Model ChannelsByUsers
   */

  export type AggregateChannelsByUsers = {
    _count: ChannelsByUsersCountAggregateOutputType | null
    _avg: ChannelsByUsersAvgAggregateOutputType | null
    _sum: ChannelsByUsersSumAggregateOutputType | null
    _min: ChannelsByUsersMinAggregateOutputType | null
    _max: ChannelsByUsersMaxAggregateOutputType | null
  }

  export type ChannelsByUsersAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    channelId: number | null
  }

  export type ChannelsByUsersSumAggregateOutputType = {
    id: number | null
    userId: number | null
    channelId: number | null
  }

  export type ChannelsByUsersMinAggregateOutputType = {
    id: number | null
    category: string | null
    userId: number | null
    channelId: number | null
  }

  export type ChannelsByUsersMaxAggregateOutputType = {
    id: number | null
    category: string | null
    userId: number | null
    channelId: number | null
  }

  export type ChannelsByUsersCountAggregateOutputType = {
    id: number
    category: number
    userId: number
    channelId: number
    _all: number
  }


  export type ChannelsByUsersAvgAggregateInputType = {
    id?: true
    userId?: true
    channelId?: true
  }

  export type ChannelsByUsersSumAggregateInputType = {
    id?: true
    userId?: true
    channelId?: true
  }

  export type ChannelsByUsersMinAggregateInputType = {
    id?: true
    category?: true
    userId?: true
    channelId?: true
  }

  export type ChannelsByUsersMaxAggregateInputType = {
    id?: true
    category?: true
    userId?: true
    channelId?: true
  }

  export type ChannelsByUsersCountAggregateInputType = {
    id?: true
    category?: true
    userId?: true
    channelId?: true
    _all?: true
  }

  export type ChannelsByUsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChannelsByUsers to aggregate.
     */
    where?: ChannelsByUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelsByUsers to fetch.
     */
    orderBy?: ChannelsByUsersOrderByWithRelationInput | ChannelsByUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChannelsByUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelsByUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelsByUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChannelsByUsers
    **/
    _count?: true | ChannelsByUsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChannelsByUsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChannelsByUsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChannelsByUsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChannelsByUsersMaxAggregateInputType
  }

  export type GetChannelsByUsersAggregateType<T extends ChannelsByUsersAggregateArgs> = {
        [P in keyof T & keyof AggregateChannelsByUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannelsByUsers[P]>
      : GetScalarType<T[P], AggregateChannelsByUsers[P]>
  }




  export type ChannelsByUsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelsByUsersWhereInput
    orderBy?: ChannelsByUsersOrderByWithAggregationInput | ChannelsByUsersOrderByWithAggregationInput[]
    by: ChannelsByUsersScalarFieldEnum[] | ChannelsByUsersScalarFieldEnum
    having?: ChannelsByUsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChannelsByUsersCountAggregateInputType | true
    _avg?: ChannelsByUsersAvgAggregateInputType
    _sum?: ChannelsByUsersSumAggregateInputType
    _min?: ChannelsByUsersMinAggregateInputType
    _max?: ChannelsByUsersMaxAggregateInputType
  }

  export type ChannelsByUsersGroupByOutputType = {
    id: number
    category: string | null
    userId: number
    channelId: number
    _count: ChannelsByUsersCountAggregateOutputType | null
    _avg: ChannelsByUsersAvgAggregateOutputType | null
    _sum: ChannelsByUsersSumAggregateOutputType | null
    _min: ChannelsByUsersMinAggregateOutputType | null
    _max: ChannelsByUsersMaxAggregateOutputType | null
  }

  type GetChannelsByUsersGroupByPayload<T extends ChannelsByUsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChannelsByUsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChannelsByUsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChannelsByUsersGroupByOutputType[P]>
            : GetScalarType<T[P], ChannelsByUsersGroupByOutputType[P]>
        }
      >
    >


  export type ChannelsByUsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    userId?: boolean
    channelId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    channel?: boolean | ChannelsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channelsByUsers"]>

  export type ChannelsByUsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    userId?: boolean
    channelId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    channel?: boolean | ChannelsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channelsByUsers"]>

  export type ChannelsByUsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    userId?: boolean
    channelId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    channel?: boolean | ChannelsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channelsByUsers"]>

  export type ChannelsByUsersSelectScalar = {
    id?: boolean
    category?: boolean
    userId?: boolean
    channelId?: boolean
  }

  export type ChannelsByUsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category" | "userId" | "channelId", ExtArgs["result"]["channelsByUsers"]>
  export type ChannelsByUsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    channel?: boolean | ChannelsDefaultArgs<ExtArgs>
  }
  export type ChannelsByUsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    channel?: boolean | ChannelsDefaultArgs<ExtArgs>
  }
  export type ChannelsByUsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    channel?: boolean | ChannelsDefaultArgs<ExtArgs>
  }

  export type $ChannelsByUsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChannelsByUsers"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      channel: Prisma.$ChannelsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category: string | null
      userId: number
      channelId: number
    }, ExtArgs["result"]["channelsByUsers"]>
    composites: {}
  }

  type ChannelsByUsersGetPayload<S extends boolean | null | undefined | ChannelsByUsersDefaultArgs> = $Result.GetResult<Prisma.$ChannelsByUsersPayload, S>

  type ChannelsByUsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChannelsByUsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChannelsByUsersCountAggregateInputType | true
    }

  export interface ChannelsByUsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChannelsByUsers'], meta: { name: 'ChannelsByUsers' } }
    /**
     * Find zero or one ChannelsByUsers that matches the filter.
     * @param {ChannelsByUsersFindUniqueArgs} args - Arguments to find a ChannelsByUsers
     * @example
     * // Get one ChannelsByUsers
     * const channelsByUsers = await prisma.channelsByUsers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChannelsByUsersFindUniqueArgs>(args: SelectSubset<T, ChannelsByUsersFindUniqueArgs<ExtArgs>>): Prisma__ChannelsByUsersClient<$Result.GetResult<Prisma.$ChannelsByUsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChannelsByUsers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChannelsByUsersFindUniqueOrThrowArgs} args - Arguments to find a ChannelsByUsers
     * @example
     * // Get one ChannelsByUsers
     * const channelsByUsers = await prisma.channelsByUsers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChannelsByUsersFindUniqueOrThrowArgs>(args: SelectSubset<T, ChannelsByUsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChannelsByUsersClient<$Result.GetResult<Prisma.$ChannelsByUsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChannelsByUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelsByUsersFindFirstArgs} args - Arguments to find a ChannelsByUsers
     * @example
     * // Get one ChannelsByUsers
     * const channelsByUsers = await prisma.channelsByUsers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChannelsByUsersFindFirstArgs>(args?: SelectSubset<T, ChannelsByUsersFindFirstArgs<ExtArgs>>): Prisma__ChannelsByUsersClient<$Result.GetResult<Prisma.$ChannelsByUsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChannelsByUsers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelsByUsersFindFirstOrThrowArgs} args - Arguments to find a ChannelsByUsers
     * @example
     * // Get one ChannelsByUsers
     * const channelsByUsers = await prisma.channelsByUsers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChannelsByUsersFindFirstOrThrowArgs>(args?: SelectSubset<T, ChannelsByUsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChannelsByUsersClient<$Result.GetResult<Prisma.$ChannelsByUsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChannelsByUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelsByUsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChannelsByUsers
     * const channelsByUsers = await prisma.channelsByUsers.findMany()
     * 
     * // Get first 10 ChannelsByUsers
     * const channelsByUsers = await prisma.channelsByUsers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const channelsByUsersWithIdOnly = await prisma.channelsByUsers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChannelsByUsersFindManyArgs>(args?: SelectSubset<T, ChannelsByUsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelsByUsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChannelsByUsers.
     * @param {ChannelsByUsersCreateArgs} args - Arguments to create a ChannelsByUsers.
     * @example
     * // Create one ChannelsByUsers
     * const ChannelsByUsers = await prisma.channelsByUsers.create({
     *   data: {
     *     // ... data to create a ChannelsByUsers
     *   }
     * })
     * 
     */
    create<T extends ChannelsByUsersCreateArgs>(args: SelectSubset<T, ChannelsByUsersCreateArgs<ExtArgs>>): Prisma__ChannelsByUsersClient<$Result.GetResult<Prisma.$ChannelsByUsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChannelsByUsers.
     * @param {ChannelsByUsersCreateManyArgs} args - Arguments to create many ChannelsByUsers.
     * @example
     * // Create many ChannelsByUsers
     * const channelsByUsers = await prisma.channelsByUsers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChannelsByUsersCreateManyArgs>(args?: SelectSubset<T, ChannelsByUsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChannelsByUsers and returns the data saved in the database.
     * @param {ChannelsByUsersCreateManyAndReturnArgs} args - Arguments to create many ChannelsByUsers.
     * @example
     * // Create many ChannelsByUsers
     * const channelsByUsers = await prisma.channelsByUsers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChannelsByUsers and only return the `id`
     * const channelsByUsersWithIdOnly = await prisma.channelsByUsers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChannelsByUsersCreateManyAndReturnArgs>(args?: SelectSubset<T, ChannelsByUsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelsByUsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChannelsByUsers.
     * @param {ChannelsByUsersDeleteArgs} args - Arguments to delete one ChannelsByUsers.
     * @example
     * // Delete one ChannelsByUsers
     * const ChannelsByUsers = await prisma.channelsByUsers.delete({
     *   where: {
     *     // ... filter to delete one ChannelsByUsers
     *   }
     * })
     * 
     */
    delete<T extends ChannelsByUsersDeleteArgs>(args: SelectSubset<T, ChannelsByUsersDeleteArgs<ExtArgs>>): Prisma__ChannelsByUsersClient<$Result.GetResult<Prisma.$ChannelsByUsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChannelsByUsers.
     * @param {ChannelsByUsersUpdateArgs} args - Arguments to update one ChannelsByUsers.
     * @example
     * // Update one ChannelsByUsers
     * const channelsByUsers = await prisma.channelsByUsers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChannelsByUsersUpdateArgs>(args: SelectSubset<T, ChannelsByUsersUpdateArgs<ExtArgs>>): Prisma__ChannelsByUsersClient<$Result.GetResult<Prisma.$ChannelsByUsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChannelsByUsers.
     * @param {ChannelsByUsersDeleteManyArgs} args - Arguments to filter ChannelsByUsers to delete.
     * @example
     * // Delete a few ChannelsByUsers
     * const { count } = await prisma.channelsByUsers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChannelsByUsersDeleteManyArgs>(args?: SelectSubset<T, ChannelsByUsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChannelsByUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelsByUsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChannelsByUsers
     * const channelsByUsers = await prisma.channelsByUsers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChannelsByUsersUpdateManyArgs>(args: SelectSubset<T, ChannelsByUsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChannelsByUsers and returns the data updated in the database.
     * @param {ChannelsByUsersUpdateManyAndReturnArgs} args - Arguments to update many ChannelsByUsers.
     * @example
     * // Update many ChannelsByUsers
     * const channelsByUsers = await prisma.channelsByUsers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChannelsByUsers and only return the `id`
     * const channelsByUsersWithIdOnly = await prisma.channelsByUsers.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChannelsByUsersUpdateManyAndReturnArgs>(args: SelectSubset<T, ChannelsByUsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelsByUsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChannelsByUsers.
     * @param {ChannelsByUsersUpsertArgs} args - Arguments to update or create a ChannelsByUsers.
     * @example
     * // Update or create a ChannelsByUsers
     * const channelsByUsers = await prisma.channelsByUsers.upsert({
     *   create: {
     *     // ... data to create a ChannelsByUsers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChannelsByUsers we want to update
     *   }
     * })
     */
    upsert<T extends ChannelsByUsersUpsertArgs>(args: SelectSubset<T, ChannelsByUsersUpsertArgs<ExtArgs>>): Prisma__ChannelsByUsersClient<$Result.GetResult<Prisma.$ChannelsByUsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChannelsByUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelsByUsersCountArgs} args - Arguments to filter ChannelsByUsers to count.
     * @example
     * // Count the number of ChannelsByUsers
     * const count = await prisma.channelsByUsers.count({
     *   where: {
     *     // ... the filter for the ChannelsByUsers we want to count
     *   }
     * })
    **/
    count<T extends ChannelsByUsersCountArgs>(
      args?: Subset<T, ChannelsByUsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChannelsByUsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChannelsByUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelsByUsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChannelsByUsersAggregateArgs>(args: Subset<T, ChannelsByUsersAggregateArgs>): Prisma.PrismaPromise<GetChannelsByUsersAggregateType<T>>

    /**
     * Group by ChannelsByUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelsByUsersGroupByArgs} args - Group by arguments.
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
      T extends ChannelsByUsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChannelsByUsersGroupByArgs['orderBy'] }
        : { orderBy?: ChannelsByUsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChannelsByUsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChannelsByUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChannelsByUsers model
   */
  readonly fields: ChannelsByUsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChannelsByUsers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChannelsByUsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    channel<T extends ChannelsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChannelsDefaultArgs<ExtArgs>>): Prisma__ChannelsClient<$Result.GetResult<Prisma.$ChannelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChannelsByUsers model
   */
  interface ChannelsByUsersFieldRefs {
    readonly id: FieldRef<"ChannelsByUsers", 'Int'>
    readonly category: FieldRef<"ChannelsByUsers", 'String'>
    readonly userId: FieldRef<"ChannelsByUsers", 'Int'>
    readonly channelId: FieldRef<"ChannelsByUsers", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ChannelsByUsers findUnique
   */
  export type ChannelsByUsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelsByUsers
     */
    select?: ChannelsByUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelsByUsers
     */
    omit?: ChannelsByUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsByUsersInclude<ExtArgs> | null
    /**
     * Filter, which ChannelsByUsers to fetch.
     */
    where: ChannelsByUsersWhereUniqueInput
  }

  /**
   * ChannelsByUsers findUniqueOrThrow
   */
  export type ChannelsByUsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelsByUsers
     */
    select?: ChannelsByUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelsByUsers
     */
    omit?: ChannelsByUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsByUsersInclude<ExtArgs> | null
    /**
     * Filter, which ChannelsByUsers to fetch.
     */
    where: ChannelsByUsersWhereUniqueInput
  }

  /**
   * ChannelsByUsers findFirst
   */
  export type ChannelsByUsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelsByUsers
     */
    select?: ChannelsByUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelsByUsers
     */
    omit?: ChannelsByUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsByUsersInclude<ExtArgs> | null
    /**
     * Filter, which ChannelsByUsers to fetch.
     */
    where?: ChannelsByUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelsByUsers to fetch.
     */
    orderBy?: ChannelsByUsersOrderByWithRelationInput | ChannelsByUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChannelsByUsers.
     */
    cursor?: ChannelsByUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelsByUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelsByUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChannelsByUsers.
     */
    distinct?: ChannelsByUsersScalarFieldEnum | ChannelsByUsersScalarFieldEnum[]
  }

  /**
   * ChannelsByUsers findFirstOrThrow
   */
  export type ChannelsByUsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelsByUsers
     */
    select?: ChannelsByUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelsByUsers
     */
    omit?: ChannelsByUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsByUsersInclude<ExtArgs> | null
    /**
     * Filter, which ChannelsByUsers to fetch.
     */
    where?: ChannelsByUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelsByUsers to fetch.
     */
    orderBy?: ChannelsByUsersOrderByWithRelationInput | ChannelsByUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChannelsByUsers.
     */
    cursor?: ChannelsByUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelsByUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelsByUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChannelsByUsers.
     */
    distinct?: ChannelsByUsersScalarFieldEnum | ChannelsByUsersScalarFieldEnum[]
  }

  /**
   * ChannelsByUsers findMany
   */
  export type ChannelsByUsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelsByUsers
     */
    select?: ChannelsByUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelsByUsers
     */
    omit?: ChannelsByUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsByUsersInclude<ExtArgs> | null
    /**
     * Filter, which ChannelsByUsers to fetch.
     */
    where?: ChannelsByUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelsByUsers to fetch.
     */
    orderBy?: ChannelsByUsersOrderByWithRelationInput | ChannelsByUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChannelsByUsers.
     */
    cursor?: ChannelsByUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelsByUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelsByUsers.
     */
    skip?: number
    distinct?: ChannelsByUsersScalarFieldEnum | ChannelsByUsersScalarFieldEnum[]
  }

  /**
   * ChannelsByUsers create
   */
  export type ChannelsByUsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelsByUsers
     */
    select?: ChannelsByUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelsByUsers
     */
    omit?: ChannelsByUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsByUsersInclude<ExtArgs> | null
    /**
     * The data needed to create a ChannelsByUsers.
     */
    data: XOR<ChannelsByUsersCreateInput, ChannelsByUsersUncheckedCreateInput>
  }

  /**
   * ChannelsByUsers createMany
   */
  export type ChannelsByUsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChannelsByUsers.
     */
    data: ChannelsByUsersCreateManyInput | ChannelsByUsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChannelsByUsers createManyAndReturn
   */
  export type ChannelsByUsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelsByUsers
     */
    select?: ChannelsByUsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelsByUsers
     */
    omit?: ChannelsByUsersOmit<ExtArgs> | null
    /**
     * The data used to create many ChannelsByUsers.
     */
    data: ChannelsByUsersCreateManyInput | ChannelsByUsersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsByUsersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChannelsByUsers update
   */
  export type ChannelsByUsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelsByUsers
     */
    select?: ChannelsByUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelsByUsers
     */
    omit?: ChannelsByUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsByUsersInclude<ExtArgs> | null
    /**
     * The data needed to update a ChannelsByUsers.
     */
    data: XOR<ChannelsByUsersUpdateInput, ChannelsByUsersUncheckedUpdateInput>
    /**
     * Choose, which ChannelsByUsers to update.
     */
    where: ChannelsByUsersWhereUniqueInput
  }

  /**
   * ChannelsByUsers updateMany
   */
  export type ChannelsByUsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChannelsByUsers.
     */
    data: XOR<ChannelsByUsersUpdateManyMutationInput, ChannelsByUsersUncheckedUpdateManyInput>
    /**
     * Filter which ChannelsByUsers to update
     */
    where?: ChannelsByUsersWhereInput
    /**
     * Limit how many ChannelsByUsers to update.
     */
    limit?: number
  }

  /**
   * ChannelsByUsers updateManyAndReturn
   */
  export type ChannelsByUsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelsByUsers
     */
    select?: ChannelsByUsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelsByUsers
     */
    omit?: ChannelsByUsersOmit<ExtArgs> | null
    /**
     * The data used to update ChannelsByUsers.
     */
    data: XOR<ChannelsByUsersUpdateManyMutationInput, ChannelsByUsersUncheckedUpdateManyInput>
    /**
     * Filter which ChannelsByUsers to update
     */
    where?: ChannelsByUsersWhereInput
    /**
     * Limit how many ChannelsByUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsByUsersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChannelsByUsers upsert
   */
  export type ChannelsByUsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelsByUsers
     */
    select?: ChannelsByUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelsByUsers
     */
    omit?: ChannelsByUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsByUsersInclude<ExtArgs> | null
    /**
     * The filter to search for the ChannelsByUsers to update in case it exists.
     */
    where: ChannelsByUsersWhereUniqueInput
    /**
     * In case the ChannelsByUsers found by the `where` argument doesn't exist, create a new ChannelsByUsers with this data.
     */
    create: XOR<ChannelsByUsersCreateInput, ChannelsByUsersUncheckedCreateInput>
    /**
     * In case the ChannelsByUsers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChannelsByUsersUpdateInput, ChannelsByUsersUncheckedUpdateInput>
  }

  /**
   * ChannelsByUsers delete
   */
  export type ChannelsByUsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelsByUsers
     */
    select?: ChannelsByUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelsByUsers
     */
    omit?: ChannelsByUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsByUsersInclude<ExtArgs> | null
    /**
     * Filter which ChannelsByUsers to delete.
     */
    where: ChannelsByUsersWhereUniqueInput
  }

  /**
   * ChannelsByUsers deleteMany
   */
  export type ChannelsByUsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChannelsByUsers to delete
     */
    where?: ChannelsByUsersWhereInput
    /**
     * Limit how many ChannelsByUsers to delete.
     */
    limit?: number
  }

  /**
   * ChannelsByUsers without action
   */
  export type ChannelsByUsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelsByUsers
     */
    select?: ChannelsByUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelsByUsers
     */
    omit?: ChannelsByUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsByUsersInclude<ExtArgs> | null
  }


  /**
   * Model ContentsByChannel
   */

  export type AggregateContentsByChannel = {
    _count: ContentsByChannelCountAggregateOutputType | null
    _avg: ContentsByChannelAvgAggregateOutputType | null
    _sum: ContentsByChannelSumAggregateOutputType | null
    _min: ContentsByChannelMinAggregateOutputType | null
    _max: ContentsByChannelMaxAggregateOutputType | null
  }

  export type ContentsByChannelAvgAggregateOutputType = {
    id: number | null
    channelId: number | null
  }

  export type ContentsByChannelSumAggregateOutputType = {
    id: number | null
    channelId: number | null
  }

  export type ContentsByChannelMinAggregateOutputType = {
    id: number | null
    date: Date | null
    content: string | null
    image: string | null
    url: string | null
    channelId: number | null
  }

  export type ContentsByChannelMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    content: string | null
    image: string | null
    url: string | null
    channelId: number | null
  }

  export type ContentsByChannelCountAggregateOutputType = {
    id: number
    date: number
    content: number
    image: number
    url: number
    channelId: number
    _all: number
  }


  export type ContentsByChannelAvgAggregateInputType = {
    id?: true
    channelId?: true
  }

  export type ContentsByChannelSumAggregateInputType = {
    id?: true
    channelId?: true
  }

  export type ContentsByChannelMinAggregateInputType = {
    id?: true
    date?: true
    content?: true
    image?: true
    url?: true
    channelId?: true
  }

  export type ContentsByChannelMaxAggregateInputType = {
    id?: true
    date?: true
    content?: true
    image?: true
    url?: true
    channelId?: true
  }

  export type ContentsByChannelCountAggregateInputType = {
    id?: true
    date?: true
    content?: true
    image?: true
    url?: true
    channelId?: true
    _all?: true
  }

  export type ContentsByChannelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentsByChannel to aggregate.
     */
    where?: ContentsByChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentsByChannels to fetch.
     */
    orderBy?: ContentsByChannelOrderByWithRelationInput | ContentsByChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentsByChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentsByChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentsByChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContentsByChannels
    **/
    _count?: true | ContentsByChannelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContentsByChannelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContentsByChannelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentsByChannelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentsByChannelMaxAggregateInputType
  }

  export type GetContentsByChannelAggregateType<T extends ContentsByChannelAggregateArgs> = {
        [P in keyof T & keyof AggregateContentsByChannel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContentsByChannel[P]>
      : GetScalarType<T[P], AggregateContentsByChannel[P]>
  }




  export type ContentsByChannelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentsByChannelWhereInput
    orderBy?: ContentsByChannelOrderByWithAggregationInput | ContentsByChannelOrderByWithAggregationInput[]
    by: ContentsByChannelScalarFieldEnum[] | ContentsByChannelScalarFieldEnum
    having?: ContentsByChannelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentsByChannelCountAggregateInputType | true
    _avg?: ContentsByChannelAvgAggregateInputType
    _sum?: ContentsByChannelSumAggregateInputType
    _min?: ContentsByChannelMinAggregateInputType
    _max?: ContentsByChannelMaxAggregateInputType
  }

  export type ContentsByChannelGroupByOutputType = {
    id: number
    date: Date
    content: string
    image: string | null
    url: string
    channelId: number
    _count: ContentsByChannelCountAggregateOutputType | null
    _avg: ContentsByChannelAvgAggregateOutputType | null
    _sum: ContentsByChannelSumAggregateOutputType | null
    _min: ContentsByChannelMinAggregateOutputType | null
    _max: ContentsByChannelMaxAggregateOutputType | null
  }

  type GetContentsByChannelGroupByPayload<T extends ContentsByChannelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentsByChannelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentsByChannelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentsByChannelGroupByOutputType[P]>
            : GetScalarType<T[P], ContentsByChannelGroupByOutputType[P]>
        }
      >
    >


  export type ContentsByChannelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    content?: boolean
    image?: boolean
    url?: boolean
    channelId?: boolean
    channel?: boolean | ChannelsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentsByChannel"]>

  export type ContentsByChannelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    content?: boolean
    image?: boolean
    url?: boolean
    channelId?: boolean
    channel?: boolean | ChannelsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentsByChannel"]>

  export type ContentsByChannelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    content?: boolean
    image?: boolean
    url?: boolean
    channelId?: boolean
    channel?: boolean | ChannelsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentsByChannel"]>

  export type ContentsByChannelSelectScalar = {
    id?: boolean
    date?: boolean
    content?: boolean
    image?: boolean
    url?: boolean
    channelId?: boolean
  }

  export type ContentsByChannelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "content" | "image" | "url" | "channelId", ExtArgs["result"]["contentsByChannel"]>
  export type ContentsByChannelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | ChannelsDefaultArgs<ExtArgs>
  }
  export type ContentsByChannelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | ChannelsDefaultArgs<ExtArgs>
  }
  export type ContentsByChannelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | ChannelsDefaultArgs<ExtArgs>
  }

  export type $ContentsByChannelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContentsByChannel"
    objects: {
      channel: Prisma.$ChannelsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      content: string
      image: string | null
      url: string
      channelId: number
    }, ExtArgs["result"]["contentsByChannel"]>
    composites: {}
  }

  type ContentsByChannelGetPayload<S extends boolean | null | undefined | ContentsByChannelDefaultArgs> = $Result.GetResult<Prisma.$ContentsByChannelPayload, S>

  type ContentsByChannelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentsByChannelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentsByChannelCountAggregateInputType | true
    }

  export interface ContentsByChannelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContentsByChannel'], meta: { name: 'ContentsByChannel' } }
    /**
     * Find zero or one ContentsByChannel that matches the filter.
     * @param {ContentsByChannelFindUniqueArgs} args - Arguments to find a ContentsByChannel
     * @example
     * // Get one ContentsByChannel
     * const contentsByChannel = await prisma.contentsByChannel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentsByChannelFindUniqueArgs>(args: SelectSubset<T, ContentsByChannelFindUniqueArgs<ExtArgs>>): Prisma__ContentsByChannelClient<$Result.GetResult<Prisma.$ContentsByChannelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContentsByChannel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentsByChannelFindUniqueOrThrowArgs} args - Arguments to find a ContentsByChannel
     * @example
     * // Get one ContentsByChannel
     * const contentsByChannel = await prisma.contentsByChannel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentsByChannelFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentsByChannelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentsByChannelClient<$Result.GetResult<Prisma.$ContentsByChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentsByChannel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentsByChannelFindFirstArgs} args - Arguments to find a ContentsByChannel
     * @example
     * // Get one ContentsByChannel
     * const contentsByChannel = await prisma.contentsByChannel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentsByChannelFindFirstArgs>(args?: SelectSubset<T, ContentsByChannelFindFirstArgs<ExtArgs>>): Prisma__ContentsByChannelClient<$Result.GetResult<Prisma.$ContentsByChannelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentsByChannel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentsByChannelFindFirstOrThrowArgs} args - Arguments to find a ContentsByChannel
     * @example
     * // Get one ContentsByChannel
     * const contentsByChannel = await prisma.contentsByChannel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentsByChannelFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentsByChannelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentsByChannelClient<$Result.GetResult<Prisma.$ContentsByChannelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContentsByChannels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentsByChannelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContentsByChannels
     * const contentsByChannels = await prisma.contentsByChannel.findMany()
     * 
     * // Get first 10 ContentsByChannels
     * const contentsByChannels = await prisma.contentsByChannel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentsByChannelWithIdOnly = await prisma.contentsByChannel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentsByChannelFindManyArgs>(args?: SelectSubset<T, ContentsByChannelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentsByChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContentsByChannel.
     * @param {ContentsByChannelCreateArgs} args - Arguments to create a ContentsByChannel.
     * @example
     * // Create one ContentsByChannel
     * const ContentsByChannel = await prisma.contentsByChannel.create({
     *   data: {
     *     // ... data to create a ContentsByChannel
     *   }
     * })
     * 
     */
    create<T extends ContentsByChannelCreateArgs>(args: SelectSubset<T, ContentsByChannelCreateArgs<ExtArgs>>): Prisma__ContentsByChannelClient<$Result.GetResult<Prisma.$ContentsByChannelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContentsByChannels.
     * @param {ContentsByChannelCreateManyArgs} args - Arguments to create many ContentsByChannels.
     * @example
     * // Create many ContentsByChannels
     * const contentsByChannel = await prisma.contentsByChannel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentsByChannelCreateManyArgs>(args?: SelectSubset<T, ContentsByChannelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContentsByChannels and returns the data saved in the database.
     * @param {ContentsByChannelCreateManyAndReturnArgs} args - Arguments to create many ContentsByChannels.
     * @example
     * // Create many ContentsByChannels
     * const contentsByChannel = await prisma.contentsByChannel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContentsByChannels and only return the `id`
     * const contentsByChannelWithIdOnly = await prisma.contentsByChannel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContentsByChannelCreateManyAndReturnArgs>(args?: SelectSubset<T, ContentsByChannelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentsByChannelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContentsByChannel.
     * @param {ContentsByChannelDeleteArgs} args - Arguments to delete one ContentsByChannel.
     * @example
     * // Delete one ContentsByChannel
     * const ContentsByChannel = await prisma.contentsByChannel.delete({
     *   where: {
     *     // ... filter to delete one ContentsByChannel
     *   }
     * })
     * 
     */
    delete<T extends ContentsByChannelDeleteArgs>(args: SelectSubset<T, ContentsByChannelDeleteArgs<ExtArgs>>): Prisma__ContentsByChannelClient<$Result.GetResult<Prisma.$ContentsByChannelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContentsByChannel.
     * @param {ContentsByChannelUpdateArgs} args - Arguments to update one ContentsByChannel.
     * @example
     * // Update one ContentsByChannel
     * const contentsByChannel = await prisma.contentsByChannel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentsByChannelUpdateArgs>(args: SelectSubset<T, ContentsByChannelUpdateArgs<ExtArgs>>): Prisma__ContentsByChannelClient<$Result.GetResult<Prisma.$ContentsByChannelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContentsByChannels.
     * @param {ContentsByChannelDeleteManyArgs} args - Arguments to filter ContentsByChannels to delete.
     * @example
     * // Delete a few ContentsByChannels
     * const { count } = await prisma.contentsByChannel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentsByChannelDeleteManyArgs>(args?: SelectSubset<T, ContentsByChannelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentsByChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentsByChannelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContentsByChannels
     * const contentsByChannel = await prisma.contentsByChannel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentsByChannelUpdateManyArgs>(args: SelectSubset<T, ContentsByChannelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentsByChannels and returns the data updated in the database.
     * @param {ContentsByChannelUpdateManyAndReturnArgs} args - Arguments to update many ContentsByChannels.
     * @example
     * // Update many ContentsByChannels
     * const contentsByChannel = await prisma.contentsByChannel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContentsByChannels and only return the `id`
     * const contentsByChannelWithIdOnly = await prisma.contentsByChannel.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContentsByChannelUpdateManyAndReturnArgs>(args: SelectSubset<T, ContentsByChannelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentsByChannelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContentsByChannel.
     * @param {ContentsByChannelUpsertArgs} args - Arguments to update or create a ContentsByChannel.
     * @example
     * // Update or create a ContentsByChannel
     * const contentsByChannel = await prisma.contentsByChannel.upsert({
     *   create: {
     *     // ... data to create a ContentsByChannel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContentsByChannel we want to update
     *   }
     * })
     */
    upsert<T extends ContentsByChannelUpsertArgs>(args: SelectSubset<T, ContentsByChannelUpsertArgs<ExtArgs>>): Prisma__ContentsByChannelClient<$Result.GetResult<Prisma.$ContentsByChannelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContentsByChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentsByChannelCountArgs} args - Arguments to filter ContentsByChannels to count.
     * @example
     * // Count the number of ContentsByChannels
     * const count = await prisma.contentsByChannel.count({
     *   where: {
     *     // ... the filter for the ContentsByChannels we want to count
     *   }
     * })
    **/
    count<T extends ContentsByChannelCountArgs>(
      args?: Subset<T, ContentsByChannelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentsByChannelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContentsByChannel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentsByChannelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContentsByChannelAggregateArgs>(args: Subset<T, ContentsByChannelAggregateArgs>): Prisma.PrismaPromise<GetContentsByChannelAggregateType<T>>

    /**
     * Group by ContentsByChannel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentsByChannelGroupByArgs} args - Group by arguments.
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
      T extends ContentsByChannelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentsByChannelGroupByArgs['orderBy'] }
        : { orderBy?: ContentsByChannelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContentsByChannelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentsByChannelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContentsByChannel model
   */
  readonly fields: ContentsByChannelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContentsByChannel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentsByChannelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    channel<T extends ChannelsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChannelsDefaultArgs<ExtArgs>>): Prisma__ChannelsClient<$Result.GetResult<Prisma.$ChannelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ContentsByChannel model
   */
  interface ContentsByChannelFieldRefs {
    readonly id: FieldRef<"ContentsByChannel", 'Int'>
    readonly date: FieldRef<"ContentsByChannel", 'DateTime'>
    readonly content: FieldRef<"ContentsByChannel", 'String'>
    readonly image: FieldRef<"ContentsByChannel", 'String'>
    readonly url: FieldRef<"ContentsByChannel", 'String'>
    readonly channelId: FieldRef<"ContentsByChannel", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ContentsByChannel findUnique
   */
  export type ContentsByChannelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentsByChannel
     */
    select?: ContentsByChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentsByChannel
     */
    omit?: ContentsByChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentsByChannelInclude<ExtArgs> | null
    /**
     * Filter, which ContentsByChannel to fetch.
     */
    where: ContentsByChannelWhereUniqueInput
  }

  /**
   * ContentsByChannel findUniqueOrThrow
   */
  export type ContentsByChannelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentsByChannel
     */
    select?: ContentsByChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentsByChannel
     */
    omit?: ContentsByChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentsByChannelInclude<ExtArgs> | null
    /**
     * Filter, which ContentsByChannel to fetch.
     */
    where: ContentsByChannelWhereUniqueInput
  }

  /**
   * ContentsByChannel findFirst
   */
  export type ContentsByChannelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentsByChannel
     */
    select?: ContentsByChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentsByChannel
     */
    omit?: ContentsByChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentsByChannelInclude<ExtArgs> | null
    /**
     * Filter, which ContentsByChannel to fetch.
     */
    where?: ContentsByChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentsByChannels to fetch.
     */
    orderBy?: ContentsByChannelOrderByWithRelationInput | ContentsByChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentsByChannels.
     */
    cursor?: ContentsByChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentsByChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentsByChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentsByChannels.
     */
    distinct?: ContentsByChannelScalarFieldEnum | ContentsByChannelScalarFieldEnum[]
  }

  /**
   * ContentsByChannel findFirstOrThrow
   */
  export type ContentsByChannelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentsByChannel
     */
    select?: ContentsByChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentsByChannel
     */
    omit?: ContentsByChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentsByChannelInclude<ExtArgs> | null
    /**
     * Filter, which ContentsByChannel to fetch.
     */
    where?: ContentsByChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentsByChannels to fetch.
     */
    orderBy?: ContentsByChannelOrderByWithRelationInput | ContentsByChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentsByChannels.
     */
    cursor?: ContentsByChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentsByChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentsByChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentsByChannels.
     */
    distinct?: ContentsByChannelScalarFieldEnum | ContentsByChannelScalarFieldEnum[]
  }

  /**
   * ContentsByChannel findMany
   */
  export type ContentsByChannelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentsByChannel
     */
    select?: ContentsByChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentsByChannel
     */
    omit?: ContentsByChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentsByChannelInclude<ExtArgs> | null
    /**
     * Filter, which ContentsByChannels to fetch.
     */
    where?: ContentsByChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentsByChannels to fetch.
     */
    orderBy?: ContentsByChannelOrderByWithRelationInput | ContentsByChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContentsByChannels.
     */
    cursor?: ContentsByChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentsByChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentsByChannels.
     */
    skip?: number
    distinct?: ContentsByChannelScalarFieldEnum | ContentsByChannelScalarFieldEnum[]
  }

  /**
   * ContentsByChannel create
   */
  export type ContentsByChannelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentsByChannel
     */
    select?: ContentsByChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentsByChannel
     */
    omit?: ContentsByChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentsByChannelInclude<ExtArgs> | null
    /**
     * The data needed to create a ContentsByChannel.
     */
    data: XOR<ContentsByChannelCreateInput, ContentsByChannelUncheckedCreateInput>
  }

  /**
   * ContentsByChannel createMany
   */
  export type ContentsByChannelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContentsByChannels.
     */
    data: ContentsByChannelCreateManyInput | ContentsByChannelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContentsByChannel createManyAndReturn
   */
  export type ContentsByChannelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentsByChannel
     */
    select?: ContentsByChannelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentsByChannel
     */
    omit?: ContentsByChannelOmit<ExtArgs> | null
    /**
     * The data used to create many ContentsByChannels.
     */
    data: ContentsByChannelCreateManyInput | ContentsByChannelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentsByChannelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContentsByChannel update
   */
  export type ContentsByChannelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentsByChannel
     */
    select?: ContentsByChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentsByChannel
     */
    omit?: ContentsByChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentsByChannelInclude<ExtArgs> | null
    /**
     * The data needed to update a ContentsByChannel.
     */
    data: XOR<ContentsByChannelUpdateInput, ContentsByChannelUncheckedUpdateInput>
    /**
     * Choose, which ContentsByChannel to update.
     */
    where: ContentsByChannelWhereUniqueInput
  }

  /**
   * ContentsByChannel updateMany
   */
  export type ContentsByChannelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContentsByChannels.
     */
    data: XOR<ContentsByChannelUpdateManyMutationInput, ContentsByChannelUncheckedUpdateManyInput>
    /**
     * Filter which ContentsByChannels to update
     */
    where?: ContentsByChannelWhereInput
    /**
     * Limit how many ContentsByChannels to update.
     */
    limit?: number
  }

  /**
   * ContentsByChannel updateManyAndReturn
   */
  export type ContentsByChannelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentsByChannel
     */
    select?: ContentsByChannelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentsByChannel
     */
    omit?: ContentsByChannelOmit<ExtArgs> | null
    /**
     * The data used to update ContentsByChannels.
     */
    data: XOR<ContentsByChannelUpdateManyMutationInput, ContentsByChannelUncheckedUpdateManyInput>
    /**
     * Filter which ContentsByChannels to update
     */
    where?: ContentsByChannelWhereInput
    /**
     * Limit how many ContentsByChannels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentsByChannelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContentsByChannel upsert
   */
  export type ContentsByChannelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentsByChannel
     */
    select?: ContentsByChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentsByChannel
     */
    omit?: ContentsByChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentsByChannelInclude<ExtArgs> | null
    /**
     * The filter to search for the ContentsByChannel to update in case it exists.
     */
    where: ContentsByChannelWhereUniqueInput
    /**
     * In case the ContentsByChannel found by the `where` argument doesn't exist, create a new ContentsByChannel with this data.
     */
    create: XOR<ContentsByChannelCreateInput, ContentsByChannelUncheckedCreateInput>
    /**
     * In case the ContentsByChannel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentsByChannelUpdateInput, ContentsByChannelUncheckedUpdateInput>
  }

  /**
   * ContentsByChannel delete
   */
  export type ContentsByChannelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentsByChannel
     */
    select?: ContentsByChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentsByChannel
     */
    omit?: ContentsByChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentsByChannelInclude<ExtArgs> | null
    /**
     * Filter which ContentsByChannel to delete.
     */
    where: ContentsByChannelWhereUniqueInput
  }

  /**
   * ContentsByChannel deleteMany
   */
  export type ContentsByChannelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentsByChannels to delete
     */
    where?: ContentsByChannelWhereInput
    /**
     * Limit how many ContentsByChannels to delete.
     */
    limit?: number
  }

  /**
   * ContentsByChannel without action
   */
  export type ContentsByChannelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentsByChannel
     */
    select?: ContentsByChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentsByChannel
     */
    omit?: ContentsByChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentsByChannelInclude<ExtArgs> | null
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
    password: 'password'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ChannelsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    channelId: 'channelId',
    profilePicture: 'profilePicture'
  };

  export type ChannelsScalarFieldEnum = (typeof ChannelsScalarFieldEnum)[keyof typeof ChannelsScalarFieldEnum]


  export const ChannelsByUsersScalarFieldEnum: {
    id: 'id',
    category: 'category',
    userId: 'userId',
    channelId: 'channelId'
  };

  export type ChannelsByUsersScalarFieldEnum = (typeof ChannelsByUsersScalarFieldEnum)[keyof typeof ChannelsByUsersScalarFieldEnum]


  export const ContentsByChannelScalarFieldEnum: {
    id: 'id',
    date: 'date',
    content: 'content',
    image: 'image',
    url: 'url',
    channelId: 'channelId'
  };

  export type ContentsByChannelScalarFieldEnum = (typeof ContentsByChannelScalarFieldEnum)[keyof typeof ContentsByChannelScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    ChannelsByUsers?: ChannelsByUsersListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    ChannelsByUsers?: ChannelsByUsersOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    ChannelsByUsers?: ChannelsByUsersListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
  }

  export type ChannelsWhereInput = {
    AND?: ChannelsWhereInput | ChannelsWhereInput[]
    OR?: ChannelsWhereInput[]
    NOT?: ChannelsWhereInput | ChannelsWhereInput[]
    id?: IntFilter<"Channels"> | number
    name?: StringNullableFilter<"Channels"> | string | null
    channelId?: StringFilter<"Channels"> | string
    profilePicture?: StringNullableFilter<"Channels"> | string | null
    ChannelsByUsers?: ChannelsByUsersListRelationFilter
    ContentsByChannel?: ContentsByChannelListRelationFilter
  }

  export type ChannelsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    channelId?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    ChannelsByUsers?: ChannelsByUsersOrderByRelationAggregateInput
    ContentsByChannel?: ContentsByChannelOrderByRelationAggregateInput
  }

  export type ChannelsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    channelId?: string
    AND?: ChannelsWhereInput | ChannelsWhereInput[]
    OR?: ChannelsWhereInput[]
    NOT?: ChannelsWhereInput | ChannelsWhereInput[]
    name?: StringNullableFilter<"Channels"> | string | null
    profilePicture?: StringNullableFilter<"Channels"> | string | null
    ChannelsByUsers?: ChannelsByUsersListRelationFilter
    ContentsByChannel?: ContentsByChannelListRelationFilter
  }, "id" | "channelId">

  export type ChannelsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    channelId?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    _count?: ChannelsCountOrderByAggregateInput
    _avg?: ChannelsAvgOrderByAggregateInput
    _max?: ChannelsMaxOrderByAggregateInput
    _min?: ChannelsMinOrderByAggregateInput
    _sum?: ChannelsSumOrderByAggregateInput
  }

  export type ChannelsScalarWhereWithAggregatesInput = {
    AND?: ChannelsScalarWhereWithAggregatesInput | ChannelsScalarWhereWithAggregatesInput[]
    OR?: ChannelsScalarWhereWithAggregatesInput[]
    NOT?: ChannelsScalarWhereWithAggregatesInput | ChannelsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Channels"> | number
    name?: StringNullableWithAggregatesFilter<"Channels"> | string | null
    channelId?: StringWithAggregatesFilter<"Channels"> | string
    profilePicture?: StringNullableWithAggregatesFilter<"Channels"> | string | null
  }

  export type ChannelsByUsersWhereInput = {
    AND?: ChannelsByUsersWhereInput | ChannelsByUsersWhereInput[]
    OR?: ChannelsByUsersWhereInput[]
    NOT?: ChannelsByUsersWhereInput | ChannelsByUsersWhereInput[]
    id?: IntFilter<"ChannelsByUsers"> | number
    category?: StringNullableFilter<"ChannelsByUsers"> | string | null
    userId?: IntFilter<"ChannelsByUsers"> | number
    channelId?: IntFilter<"ChannelsByUsers"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    channel?: XOR<ChannelsScalarRelationFilter, ChannelsWhereInput>
  }

  export type ChannelsByUsersOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrderInput | SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    user?: UsersOrderByWithRelationInput
    channel?: ChannelsOrderByWithRelationInput
  }

  export type ChannelsByUsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChannelsByUsersWhereInput | ChannelsByUsersWhereInput[]
    OR?: ChannelsByUsersWhereInput[]
    NOT?: ChannelsByUsersWhereInput | ChannelsByUsersWhereInput[]
    category?: StringNullableFilter<"ChannelsByUsers"> | string | null
    userId?: IntFilter<"ChannelsByUsers"> | number
    channelId?: IntFilter<"ChannelsByUsers"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    channel?: XOR<ChannelsScalarRelationFilter, ChannelsWhereInput>
  }, "id">

  export type ChannelsByUsersOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrderInput | SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    _count?: ChannelsByUsersCountOrderByAggregateInput
    _avg?: ChannelsByUsersAvgOrderByAggregateInput
    _max?: ChannelsByUsersMaxOrderByAggregateInput
    _min?: ChannelsByUsersMinOrderByAggregateInput
    _sum?: ChannelsByUsersSumOrderByAggregateInput
  }

  export type ChannelsByUsersScalarWhereWithAggregatesInput = {
    AND?: ChannelsByUsersScalarWhereWithAggregatesInput | ChannelsByUsersScalarWhereWithAggregatesInput[]
    OR?: ChannelsByUsersScalarWhereWithAggregatesInput[]
    NOT?: ChannelsByUsersScalarWhereWithAggregatesInput | ChannelsByUsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChannelsByUsers"> | number
    category?: StringNullableWithAggregatesFilter<"ChannelsByUsers"> | string | null
    userId?: IntWithAggregatesFilter<"ChannelsByUsers"> | number
    channelId?: IntWithAggregatesFilter<"ChannelsByUsers"> | number
  }

  export type ContentsByChannelWhereInput = {
    AND?: ContentsByChannelWhereInput | ContentsByChannelWhereInput[]
    OR?: ContentsByChannelWhereInput[]
    NOT?: ContentsByChannelWhereInput | ContentsByChannelWhereInput[]
    id?: IntFilter<"ContentsByChannel"> | number
    date?: DateTimeFilter<"ContentsByChannel"> | Date | string
    content?: StringFilter<"ContentsByChannel"> | string
    image?: StringNullableFilter<"ContentsByChannel"> | string | null
    url?: StringFilter<"ContentsByChannel"> | string
    channelId?: IntFilter<"ContentsByChannel"> | number
    channel?: XOR<ChannelsScalarRelationFilter, ChannelsWhereInput>
  }

  export type ContentsByChannelOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    content?: SortOrder
    image?: SortOrderInput | SortOrder
    url?: SortOrder
    channelId?: SortOrder
    channel?: ChannelsOrderByWithRelationInput
  }

  export type ContentsByChannelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContentsByChannelWhereInput | ContentsByChannelWhereInput[]
    OR?: ContentsByChannelWhereInput[]
    NOT?: ContentsByChannelWhereInput | ContentsByChannelWhereInput[]
    date?: DateTimeFilter<"ContentsByChannel"> | Date | string
    content?: StringFilter<"ContentsByChannel"> | string
    image?: StringNullableFilter<"ContentsByChannel"> | string | null
    url?: StringFilter<"ContentsByChannel"> | string
    channelId?: IntFilter<"ContentsByChannel"> | number
    channel?: XOR<ChannelsScalarRelationFilter, ChannelsWhereInput>
  }, "id">

  export type ContentsByChannelOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    content?: SortOrder
    image?: SortOrderInput | SortOrder
    url?: SortOrder
    channelId?: SortOrder
    _count?: ContentsByChannelCountOrderByAggregateInput
    _avg?: ContentsByChannelAvgOrderByAggregateInput
    _max?: ContentsByChannelMaxOrderByAggregateInput
    _min?: ContentsByChannelMinOrderByAggregateInput
    _sum?: ContentsByChannelSumOrderByAggregateInput
  }

  export type ContentsByChannelScalarWhereWithAggregatesInput = {
    AND?: ContentsByChannelScalarWhereWithAggregatesInput | ContentsByChannelScalarWhereWithAggregatesInput[]
    OR?: ContentsByChannelScalarWhereWithAggregatesInput[]
    NOT?: ContentsByChannelScalarWhereWithAggregatesInput | ContentsByChannelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContentsByChannel"> | number
    date?: DateTimeWithAggregatesFilter<"ContentsByChannel"> | Date | string
    content?: StringWithAggregatesFilter<"ContentsByChannel"> | string
    image?: StringNullableWithAggregatesFilter<"ContentsByChannel"> | string | null
    url?: StringWithAggregatesFilter<"ContentsByChannel"> | string
    channelId?: IntWithAggregatesFilter<"ContentsByChannel"> | number
  }

  export type UsersCreateInput = {
    name: string
    email: string
    password: string
    ChannelsByUsers?: ChannelsByUsersCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    ChannelsByUsers?: ChannelsByUsersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ChannelsByUsers?: ChannelsByUsersUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ChannelsByUsers?: ChannelsByUsersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
  }

  export type UsersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ChannelsCreateInput = {
    name?: string | null
    channelId: string
    profilePicture?: string | null
    ChannelsByUsers?: ChannelsByUsersCreateNestedManyWithoutChannelInput
    ContentsByChannel?: ContentsByChannelCreateNestedManyWithoutChannelInput
  }

  export type ChannelsUncheckedCreateInput = {
    id?: number
    name?: string | null
    channelId: string
    profilePicture?: string | null
    ChannelsByUsers?: ChannelsByUsersUncheckedCreateNestedManyWithoutChannelInput
    ContentsByChannel?: ContentsByChannelUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    ChannelsByUsers?: ChannelsByUsersUpdateManyWithoutChannelNestedInput
    ContentsByChannel?: ContentsByChannelUpdateManyWithoutChannelNestedInput
  }

  export type ChannelsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    ChannelsByUsers?: ChannelsByUsersUncheckedUpdateManyWithoutChannelNestedInput
    ContentsByChannel?: ContentsByChannelUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type ChannelsCreateManyInput = {
    id?: number
    name?: string | null
    channelId: string
    profilePicture?: string | null
  }

  export type ChannelsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChannelsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChannelsByUsersCreateInput = {
    category?: string | null
    user: UsersCreateNestedOneWithoutChannelsByUsersInput
    channel: ChannelsCreateNestedOneWithoutChannelsByUsersInput
  }

  export type ChannelsByUsersUncheckedCreateInput = {
    id?: number
    category?: string | null
    userId: number
    channelId: number
  }

  export type ChannelsByUsersUpdateInput = {
    category?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsersUpdateOneRequiredWithoutChannelsByUsersNestedInput
    channel?: ChannelsUpdateOneRequiredWithoutChannelsByUsersNestedInput
  }

  export type ChannelsByUsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    channelId?: IntFieldUpdateOperationsInput | number
  }

  export type ChannelsByUsersCreateManyInput = {
    id?: number
    category?: string | null
    userId: number
    channelId: number
  }

  export type ChannelsByUsersUpdateManyMutationInput = {
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChannelsByUsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    channelId?: IntFieldUpdateOperationsInput | number
  }

  export type ContentsByChannelCreateInput = {
    date: Date | string
    content: string
    image?: string | null
    url: string
    channel: ChannelsCreateNestedOneWithoutContentsByChannelInput
  }

  export type ContentsByChannelUncheckedCreateInput = {
    id?: number
    date: Date | string
    content: string
    image?: string | null
    url: string
    channelId: number
  }

  export type ContentsByChannelUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    channel?: ChannelsUpdateOneRequiredWithoutContentsByChannelNestedInput
  }

  export type ContentsByChannelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    channelId?: IntFieldUpdateOperationsInput | number
  }

  export type ContentsByChannelCreateManyInput = {
    id?: number
    date: Date | string
    content: string
    image?: string | null
    url: string
    channelId: number
  }

  export type ContentsByChannelUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ContentsByChannelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    channelId?: IntFieldUpdateOperationsInput | number
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

  export type ChannelsByUsersListRelationFilter = {
    every?: ChannelsByUsersWhereInput
    some?: ChannelsByUsersWhereInput
    none?: ChannelsByUsersWhereInput
  }

  export type ChannelsByUsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ContentsByChannelListRelationFilter = {
    every?: ContentsByChannelWhereInput
    some?: ContentsByChannelWhereInput
    none?: ContentsByChannelWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ContentsByChannelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChannelsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    channelId?: SortOrder
    profilePicture?: SortOrder
  }

  export type ChannelsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChannelsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    channelId?: SortOrder
    profilePicture?: SortOrder
  }

  export type ChannelsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    channelId?: SortOrder
    profilePicture?: SortOrder
  }

  export type ChannelsSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type ChannelsScalarRelationFilter = {
    is?: ChannelsWhereInput
    isNot?: ChannelsWhereInput
  }

  export type ChannelsByUsersCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
  }

  export type ChannelsByUsersAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
  }

  export type ChannelsByUsersMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
  }

  export type ChannelsByUsersMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
  }

  export type ChannelsByUsersSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
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

  export type ContentsByChannelCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    content?: SortOrder
    image?: SortOrder
    url?: SortOrder
    channelId?: SortOrder
  }

  export type ContentsByChannelAvgOrderByAggregateInput = {
    id?: SortOrder
    channelId?: SortOrder
  }

  export type ContentsByChannelMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    content?: SortOrder
    image?: SortOrder
    url?: SortOrder
    channelId?: SortOrder
  }

  export type ContentsByChannelMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    content?: SortOrder
    image?: SortOrder
    url?: SortOrder
    channelId?: SortOrder
  }

  export type ContentsByChannelSumOrderByAggregateInput = {
    id?: SortOrder
    channelId?: SortOrder
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

  export type ChannelsByUsersCreateNestedManyWithoutUserInput = {
    create?: XOR<ChannelsByUsersCreateWithoutUserInput, ChannelsByUsersUncheckedCreateWithoutUserInput> | ChannelsByUsersCreateWithoutUserInput[] | ChannelsByUsersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChannelsByUsersCreateOrConnectWithoutUserInput | ChannelsByUsersCreateOrConnectWithoutUserInput[]
    createMany?: ChannelsByUsersCreateManyUserInputEnvelope
    connect?: ChannelsByUsersWhereUniqueInput | ChannelsByUsersWhereUniqueInput[]
  }

  export type ChannelsByUsersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChannelsByUsersCreateWithoutUserInput, ChannelsByUsersUncheckedCreateWithoutUserInput> | ChannelsByUsersCreateWithoutUserInput[] | ChannelsByUsersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChannelsByUsersCreateOrConnectWithoutUserInput | ChannelsByUsersCreateOrConnectWithoutUserInput[]
    createMany?: ChannelsByUsersCreateManyUserInputEnvelope
    connect?: ChannelsByUsersWhereUniqueInput | ChannelsByUsersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ChannelsByUsersUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChannelsByUsersCreateWithoutUserInput, ChannelsByUsersUncheckedCreateWithoutUserInput> | ChannelsByUsersCreateWithoutUserInput[] | ChannelsByUsersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChannelsByUsersCreateOrConnectWithoutUserInput | ChannelsByUsersCreateOrConnectWithoutUserInput[]
    upsert?: ChannelsByUsersUpsertWithWhereUniqueWithoutUserInput | ChannelsByUsersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChannelsByUsersCreateManyUserInputEnvelope
    set?: ChannelsByUsersWhereUniqueInput | ChannelsByUsersWhereUniqueInput[]
    disconnect?: ChannelsByUsersWhereUniqueInput | ChannelsByUsersWhereUniqueInput[]
    delete?: ChannelsByUsersWhereUniqueInput | ChannelsByUsersWhereUniqueInput[]
    connect?: ChannelsByUsersWhereUniqueInput | ChannelsByUsersWhereUniqueInput[]
    update?: ChannelsByUsersUpdateWithWhereUniqueWithoutUserInput | ChannelsByUsersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChannelsByUsersUpdateManyWithWhereWithoutUserInput | ChannelsByUsersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChannelsByUsersScalarWhereInput | ChannelsByUsersScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChannelsByUsersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChannelsByUsersCreateWithoutUserInput, ChannelsByUsersUncheckedCreateWithoutUserInput> | ChannelsByUsersCreateWithoutUserInput[] | ChannelsByUsersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChannelsByUsersCreateOrConnectWithoutUserInput | ChannelsByUsersCreateOrConnectWithoutUserInput[]
    upsert?: ChannelsByUsersUpsertWithWhereUniqueWithoutUserInput | ChannelsByUsersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChannelsByUsersCreateManyUserInputEnvelope
    set?: ChannelsByUsersWhereUniqueInput | ChannelsByUsersWhereUniqueInput[]
    disconnect?: ChannelsByUsersWhereUniqueInput | ChannelsByUsersWhereUniqueInput[]
    delete?: ChannelsByUsersWhereUniqueInput | ChannelsByUsersWhereUniqueInput[]
    connect?: ChannelsByUsersWhereUniqueInput | ChannelsByUsersWhereUniqueInput[]
    update?: ChannelsByUsersUpdateWithWhereUniqueWithoutUserInput | ChannelsByUsersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChannelsByUsersUpdateManyWithWhereWithoutUserInput | ChannelsByUsersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChannelsByUsersScalarWhereInput | ChannelsByUsersScalarWhereInput[]
  }

  export type ChannelsByUsersCreateNestedManyWithoutChannelInput = {
    create?: XOR<ChannelsByUsersCreateWithoutChannelInput, ChannelsByUsersUncheckedCreateWithoutChannelInput> | ChannelsByUsersCreateWithoutChannelInput[] | ChannelsByUsersUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ChannelsByUsersCreateOrConnectWithoutChannelInput | ChannelsByUsersCreateOrConnectWithoutChannelInput[]
    createMany?: ChannelsByUsersCreateManyChannelInputEnvelope
    connect?: ChannelsByUsersWhereUniqueInput | ChannelsByUsersWhereUniqueInput[]
  }

  export type ContentsByChannelCreateNestedManyWithoutChannelInput = {
    create?: XOR<ContentsByChannelCreateWithoutChannelInput, ContentsByChannelUncheckedCreateWithoutChannelInput> | ContentsByChannelCreateWithoutChannelInput[] | ContentsByChannelUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ContentsByChannelCreateOrConnectWithoutChannelInput | ContentsByChannelCreateOrConnectWithoutChannelInput[]
    createMany?: ContentsByChannelCreateManyChannelInputEnvelope
    connect?: ContentsByChannelWhereUniqueInput | ContentsByChannelWhereUniqueInput[]
  }

  export type ChannelsByUsersUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<ChannelsByUsersCreateWithoutChannelInput, ChannelsByUsersUncheckedCreateWithoutChannelInput> | ChannelsByUsersCreateWithoutChannelInput[] | ChannelsByUsersUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ChannelsByUsersCreateOrConnectWithoutChannelInput | ChannelsByUsersCreateOrConnectWithoutChannelInput[]
    createMany?: ChannelsByUsersCreateManyChannelInputEnvelope
    connect?: ChannelsByUsersWhereUniqueInput | ChannelsByUsersWhereUniqueInput[]
  }

  export type ContentsByChannelUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<ContentsByChannelCreateWithoutChannelInput, ContentsByChannelUncheckedCreateWithoutChannelInput> | ContentsByChannelCreateWithoutChannelInput[] | ContentsByChannelUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ContentsByChannelCreateOrConnectWithoutChannelInput | ContentsByChannelCreateOrConnectWithoutChannelInput[]
    createMany?: ContentsByChannelCreateManyChannelInputEnvelope
    connect?: ContentsByChannelWhereUniqueInput | ContentsByChannelWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ChannelsByUsersUpdateManyWithoutChannelNestedInput = {
    create?: XOR<ChannelsByUsersCreateWithoutChannelInput, ChannelsByUsersUncheckedCreateWithoutChannelInput> | ChannelsByUsersCreateWithoutChannelInput[] | ChannelsByUsersUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ChannelsByUsersCreateOrConnectWithoutChannelInput | ChannelsByUsersCreateOrConnectWithoutChannelInput[]
    upsert?: ChannelsByUsersUpsertWithWhereUniqueWithoutChannelInput | ChannelsByUsersUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: ChannelsByUsersCreateManyChannelInputEnvelope
    set?: ChannelsByUsersWhereUniqueInput | ChannelsByUsersWhereUniqueInput[]
    disconnect?: ChannelsByUsersWhereUniqueInput | ChannelsByUsersWhereUniqueInput[]
    delete?: ChannelsByUsersWhereUniqueInput | ChannelsByUsersWhereUniqueInput[]
    connect?: ChannelsByUsersWhereUniqueInput | ChannelsByUsersWhereUniqueInput[]
    update?: ChannelsByUsersUpdateWithWhereUniqueWithoutChannelInput | ChannelsByUsersUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: ChannelsByUsersUpdateManyWithWhereWithoutChannelInput | ChannelsByUsersUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: ChannelsByUsersScalarWhereInput | ChannelsByUsersScalarWhereInput[]
  }

  export type ContentsByChannelUpdateManyWithoutChannelNestedInput = {
    create?: XOR<ContentsByChannelCreateWithoutChannelInput, ContentsByChannelUncheckedCreateWithoutChannelInput> | ContentsByChannelCreateWithoutChannelInput[] | ContentsByChannelUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ContentsByChannelCreateOrConnectWithoutChannelInput | ContentsByChannelCreateOrConnectWithoutChannelInput[]
    upsert?: ContentsByChannelUpsertWithWhereUniqueWithoutChannelInput | ContentsByChannelUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: ContentsByChannelCreateManyChannelInputEnvelope
    set?: ContentsByChannelWhereUniqueInput | ContentsByChannelWhereUniqueInput[]
    disconnect?: ContentsByChannelWhereUniqueInput | ContentsByChannelWhereUniqueInput[]
    delete?: ContentsByChannelWhereUniqueInput | ContentsByChannelWhereUniqueInput[]
    connect?: ContentsByChannelWhereUniqueInput | ContentsByChannelWhereUniqueInput[]
    update?: ContentsByChannelUpdateWithWhereUniqueWithoutChannelInput | ContentsByChannelUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: ContentsByChannelUpdateManyWithWhereWithoutChannelInput | ContentsByChannelUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: ContentsByChannelScalarWhereInput | ContentsByChannelScalarWhereInput[]
  }

  export type ChannelsByUsersUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<ChannelsByUsersCreateWithoutChannelInput, ChannelsByUsersUncheckedCreateWithoutChannelInput> | ChannelsByUsersCreateWithoutChannelInput[] | ChannelsByUsersUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ChannelsByUsersCreateOrConnectWithoutChannelInput | ChannelsByUsersCreateOrConnectWithoutChannelInput[]
    upsert?: ChannelsByUsersUpsertWithWhereUniqueWithoutChannelInput | ChannelsByUsersUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: ChannelsByUsersCreateManyChannelInputEnvelope
    set?: ChannelsByUsersWhereUniqueInput | ChannelsByUsersWhereUniqueInput[]
    disconnect?: ChannelsByUsersWhereUniqueInput | ChannelsByUsersWhereUniqueInput[]
    delete?: ChannelsByUsersWhereUniqueInput | ChannelsByUsersWhereUniqueInput[]
    connect?: ChannelsByUsersWhereUniqueInput | ChannelsByUsersWhereUniqueInput[]
    update?: ChannelsByUsersUpdateWithWhereUniqueWithoutChannelInput | ChannelsByUsersUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: ChannelsByUsersUpdateManyWithWhereWithoutChannelInput | ChannelsByUsersUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: ChannelsByUsersScalarWhereInput | ChannelsByUsersScalarWhereInput[]
  }

  export type ContentsByChannelUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<ContentsByChannelCreateWithoutChannelInput, ContentsByChannelUncheckedCreateWithoutChannelInput> | ContentsByChannelCreateWithoutChannelInput[] | ContentsByChannelUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ContentsByChannelCreateOrConnectWithoutChannelInput | ContentsByChannelCreateOrConnectWithoutChannelInput[]
    upsert?: ContentsByChannelUpsertWithWhereUniqueWithoutChannelInput | ContentsByChannelUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: ContentsByChannelCreateManyChannelInputEnvelope
    set?: ContentsByChannelWhereUniqueInput | ContentsByChannelWhereUniqueInput[]
    disconnect?: ContentsByChannelWhereUniqueInput | ContentsByChannelWhereUniqueInput[]
    delete?: ContentsByChannelWhereUniqueInput | ContentsByChannelWhereUniqueInput[]
    connect?: ContentsByChannelWhereUniqueInput | ContentsByChannelWhereUniqueInput[]
    update?: ContentsByChannelUpdateWithWhereUniqueWithoutChannelInput | ContentsByChannelUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: ContentsByChannelUpdateManyWithWhereWithoutChannelInput | ContentsByChannelUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: ContentsByChannelScalarWhereInput | ContentsByChannelScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutChannelsByUsersInput = {
    create?: XOR<UsersCreateWithoutChannelsByUsersInput, UsersUncheckedCreateWithoutChannelsByUsersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutChannelsByUsersInput
    connect?: UsersWhereUniqueInput
  }

  export type ChannelsCreateNestedOneWithoutChannelsByUsersInput = {
    create?: XOR<ChannelsCreateWithoutChannelsByUsersInput, ChannelsUncheckedCreateWithoutChannelsByUsersInput>
    connectOrCreate?: ChannelsCreateOrConnectWithoutChannelsByUsersInput
    connect?: ChannelsWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutChannelsByUsersNestedInput = {
    create?: XOR<UsersCreateWithoutChannelsByUsersInput, UsersUncheckedCreateWithoutChannelsByUsersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutChannelsByUsersInput
    upsert?: UsersUpsertWithoutChannelsByUsersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutChannelsByUsersInput, UsersUpdateWithoutChannelsByUsersInput>, UsersUncheckedUpdateWithoutChannelsByUsersInput>
  }

  export type ChannelsUpdateOneRequiredWithoutChannelsByUsersNestedInput = {
    create?: XOR<ChannelsCreateWithoutChannelsByUsersInput, ChannelsUncheckedCreateWithoutChannelsByUsersInput>
    connectOrCreate?: ChannelsCreateOrConnectWithoutChannelsByUsersInput
    upsert?: ChannelsUpsertWithoutChannelsByUsersInput
    connect?: ChannelsWhereUniqueInput
    update?: XOR<XOR<ChannelsUpdateToOneWithWhereWithoutChannelsByUsersInput, ChannelsUpdateWithoutChannelsByUsersInput>, ChannelsUncheckedUpdateWithoutChannelsByUsersInput>
  }

  export type ChannelsCreateNestedOneWithoutContentsByChannelInput = {
    create?: XOR<ChannelsCreateWithoutContentsByChannelInput, ChannelsUncheckedCreateWithoutContentsByChannelInput>
    connectOrCreate?: ChannelsCreateOrConnectWithoutContentsByChannelInput
    connect?: ChannelsWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ChannelsUpdateOneRequiredWithoutContentsByChannelNestedInput = {
    create?: XOR<ChannelsCreateWithoutContentsByChannelInput, ChannelsUncheckedCreateWithoutContentsByChannelInput>
    connectOrCreate?: ChannelsCreateOrConnectWithoutContentsByChannelInput
    upsert?: ChannelsUpsertWithoutContentsByChannelInput
    connect?: ChannelsWhereUniqueInput
    update?: XOR<XOR<ChannelsUpdateToOneWithWhereWithoutContentsByChannelInput, ChannelsUpdateWithoutContentsByChannelInput>, ChannelsUncheckedUpdateWithoutContentsByChannelInput>
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

  export type ChannelsByUsersCreateWithoutUserInput = {
    category?: string | null
    channel: ChannelsCreateNestedOneWithoutChannelsByUsersInput
  }

  export type ChannelsByUsersUncheckedCreateWithoutUserInput = {
    id?: number
    category?: string | null
    channelId: number
  }

  export type ChannelsByUsersCreateOrConnectWithoutUserInput = {
    where: ChannelsByUsersWhereUniqueInput
    create: XOR<ChannelsByUsersCreateWithoutUserInput, ChannelsByUsersUncheckedCreateWithoutUserInput>
  }

  export type ChannelsByUsersCreateManyUserInputEnvelope = {
    data: ChannelsByUsersCreateManyUserInput | ChannelsByUsersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChannelsByUsersUpsertWithWhereUniqueWithoutUserInput = {
    where: ChannelsByUsersWhereUniqueInput
    update: XOR<ChannelsByUsersUpdateWithoutUserInput, ChannelsByUsersUncheckedUpdateWithoutUserInput>
    create: XOR<ChannelsByUsersCreateWithoutUserInput, ChannelsByUsersUncheckedCreateWithoutUserInput>
  }

  export type ChannelsByUsersUpdateWithWhereUniqueWithoutUserInput = {
    where: ChannelsByUsersWhereUniqueInput
    data: XOR<ChannelsByUsersUpdateWithoutUserInput, ChannelsByUsersUncheckedUpdateWithoutUserInput>
  }

  export type ChannelsByUsersUpdateManyWithWhereWithoutUserInput = {
    where: ChannelsByUsersScalarWhereInput
    data: XOR<ChannelsByUsersUpdateManyMutationInput, ChannelsByUsersUncheckedUpdateManyWithoutUserInput>
  }

  export type ChannelsByUsersScalarWhereInput = {
    AND?: ChannelsByUsersScalarWhereInput | ChannelsByUsersScalarWhereInput[]
    OR?: ChannelsByUsersScalarWhereInput[]
    NOT?: ChannelsByUsersScalarWhereInput | ChannelsByUsersScalarWhereInput[]
    id?: IntFilter<"ChannelsByUsers"> | number
    category?: StringNullableFilter<"ChannelsByUsers"> | string | null
    userId?: IntFilter<"ChannelsByUsers"> | number
    channelId?: IntFilter<"ChannelsByUsers"> | number
  }

  export type ChannelsByUsersCreateWithoutChannelInput = {
    category?: string | null
    user: UsersCreateNestedOneWithoutChannelsByUsersInput
  }

  export type ChannelsByUsersUncheckedCreateWithoutChannelInput = {
    id?: number
    category?: string | null
    userId: number
  }

  export type ChannelsByUsersCreateOrConnectWithoutChannelInput = {
    where: ChannelsByUsersWhereUniqueInput
    create: XOR<ChannelsByUsersCreateWithoutChannelInput, ChannelsByUsersUncheckedCreateWithoutChannelInput>
  }

  export type ChannelsByUsersCreateManyChannelInputEnvelope = {
    data: ChannelsByUsersCreateManyChannelInput | ChannelsByUsersCreateManyChannelInput[]
    skipDuplicates?: boolean
  }

  export type ContentsByChannelCreateWithoutChannelInput = {
    date: Date | string
    content: string
    image?: string | null
    url: string
  }

  export type ContentsByChannelUncheckedCreateWithoutChannelInput = {
    id?: number
    date: Date | string
    content: string
    image?: string | null
    url: string
  }

  export type ContentsByChannelCreateOrConnectWithoutChannelInput = {
    where: ContentsByChannelWhereUniqueInput
    create: XOR<ContentsByChannelCreateWithoutChannelInput, ContentsByChannelUncheckedCreateWithoutChannelInput>
  }

  export type ContentsByChannelCreateManyChannelInputEnvelope = {
    data: ContentsByChannelCreateManyChannelInput | ContentsByChannelCreateManyChannelInput[]
    skipDuplicates?: boolean
  }

  export type ChannelsByUsersUpsertWithWhereUniqueWithoutChannelInput = {
    where: ChannelsByUsersWhereUniqueInput
    update: XOR<ChannelsByUsersUpdateWithoutChannelInput, ChannelsByUsersUncheckedUpdateWithoutChannelInput>
    create: XOR<ChannelsByUsersCreateWithoutChannelInput, ChannelsByUsersUncheckedCreateWithoutChannelInput>
  }

  export type ChannelsByUsersUpdateWithWhereUniqueWithoutChannelInput = {
    where: ChannelsByUsersWhereUniqueInput
    data: XOR<ChannelsByUsersUpdateWithoutChannelInput, ChannelsByUsersUncheckedUpdateWithoutChannelInput>
  }

  export type ChannelsByUsersUpdateManyWithWhereWithoutChannelInput = {
    where: ChannelsByUsersScalarWhereInput
    data: XOR<ChannelsByUsersUpdateManyMutationInput, ChannelsByUsersUncheckedUpdateManyWithoutChannelInput>
  }

  export type ContentsByChannelUpsertWithWhereUniqueWithoutChannelInput = {
    where: ContentsByChannelWhereUniqueInput
    update: XOR<ContentsByChannelUpdateWithoutChannelInput, ContentsByChannelUncheckedUpdateWithoutChannelInput>
    create: XOR<ContentsByChannelCreateWithoutChannelInput, ContentsByChannelUncheckedCreateWithoutChannelInput>
  }

  export type ContentsByChannelUpdateWithWhereUniqueWithoutChannelInput = {
    where: ContentsByChannelWhereUniqueInput
    data: XOR<ContentsByChannelUpdateWithoutChannelInput, ContentsByChannelUncheckedUpdateWithoutChannelInput>
  }

  export type ContentsByChannelUpdateManyWithWhereWithoutChannelInput = {
    where: ContentsByChannelScalarWhereInput
    data: XOR<ContentsByChannelUpdateManyMutationInput, ContentsByChannelUncheckedUpdateManyWithoutChannelInput>
  }

  export type ContentsByChannelScalarWhereInput = {
    AND?: ContentsByChannelScalarWhereInput | ContentsByChannelScalarWhereInput[]
    OR?: ContentsByChannelScalarWhereInput[]
    NOT?: ContentsByChannelScalarWhereInput | ContentsByChannelScalarWhereInput[]
    id?: IntFilter<"ContentsByChannel"> | number
    date?: DateTimeFilter<"ContentsByChannel"> | Date | string
    content?: StringFilter<"ContentsByChannel"> | string
    image?: StringNullableFilter<"ContentsByChannel"> | string | null
    url?: StringFilter<"ContentsByChannel"> | string
    channelId?: IntFilter<"ContentsByChannel"> | number
  }

  export type UsersCreateWithoutChannelsByUsersInput = {
    name: string
    email: string
    password: string
  }

  export type UsersUncheckedCreateWithoutChannelsByUsersInput = {
    id?: number
    name: string
    email: string
    password: string
  }

  export type UsersCreateOrConnectWithoutChannelsByUsersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutChannelsByUsersInput, UsersUncheckedCreateWithoutChannelsByUsersInput>
  }

  export type ChannelsCreateWithoutChannelsByUsersInput = {
    name?: string | null
    channelId: string
    profilePicture?: string | null
    ContentsByChannel?: ContentsByChannelCreateNestedManyWithoutChannelInput
  }

  export type ChannelsUncheckedCreateWithoutChannelsByUsersInput = {
    id?: number
    name?: string | null
    channelId: string
    profilePicture?: string | null
    ContentsByChannel?: ContentsByChannelUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelsCreateOrConnectWithoutChannelsByUsersInput = {
    where: ChannelsWhereUniqueInput
    create: XOR<ChannelsCreateWithoutChannelsByUsersInput, ChannelsUncheckedCreateWithoutChannelsByUsersInput>
  }

  export type UsersUpsertWithoutChannelsByUsersInput = {
    update: XOR<UsersUpdateWithoutChannelsByUsersInput, UsersUncheckedUpdateWithoutChannelsByUsersInput>
    create: XOR<UsersCreateWithoutChannelsByUsersInput, UsersUncheckedCreateWithoutChannelsByUsersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutChannelsByUsersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutChannelsByUsersInput, UsersUncheckedUpdateWithoutChannelsByUsersInput>
  }

  export type UsersUpdateWithoutChannelsByUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateWithoutChannelsByUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ChannelsUpsertWithoutChannelsByUsersInput = {
    update: XOR<ChannelsUpdateWithoutChannelsByUsersInput, ChannelsUncheckedUpdateWithoutChannelsByUsersInput>
    create: XOR<ChannelsCreateWithoutChannelsByUsersInput, ChannelsUncheckedCreateWithoutChannelsByUsersInput>
    where?: ChannelsWhereInput
  }

  export type ChannelsUpdateToOneWithWhereWithoutChannelsByUsersInput = {
    where?: ChannelsWhereInput
    data: XOR<ChannelsUpdateWithoutChannelsByUsersInput, ChannelsUncheckedUpdateWithoutChannelsByUsersInput>
  }

  export type ChannelsUpdateWithoutChannelsByUsersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    ContentsByChannel?: ContentsByChannelUpdateManyWithoutChannelNestedInput
  }

  export type ChannelsUncheckedUpdateWithoutChannelsByUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    ContentsByChannel?: ContentsByChannelUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type ChannelsCreateWithoutContentsByChannelInput = {
    name?: string | null
    channelId: string
    profilePicture?: string | null
    ChannelsByUsers?: ChannelsByUsersCreateNestedManyWithoutChannelInput
  }

  export type ChannelsUncheckedCreateWithoutContentsByChannelInput = {
    id?: number
    name?: string | null
    channelId: string
    profilePicture?: string | null
    ChannelsByUsers?: ChannelsByUsersUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelsCreateOrConnectWithoutContentsByChannelInput = {
    where: ChannelsWhereUniqueInput
    create: XOR<ChannelsCreateWithoutContentsByChannelInput, ChannelsUncheckedCreateWithoutContentsByChannelInput>
  }

  export type ChannelsUpsertWithoutContentsByChannelInput = {
    update: XOR<ChannelsUpdateWithoutContentsByChannelInput, ChannelsUncheckedUpdateWithoutContentsByChannelInput>
    create: XOR<ChannelsCreateWithoutContentsByChannelInput, ChannelsUncheckedCreateWithoutContentsByChannelInput>
    where?: ChannelsWhereInput
  }

  export type ChannelsUpdateToOneWithWhereWithoutContentsByChannelInput = {
    where?: ChannelsWhereInput
    data: XOR<ChannelsUpdateWithoutContentsByChannelInput, ChannelsUncheckedUpdateWithoutContentsByChannelInput>
  }

  export type ChannelsUpdateWithoutContentsByChannelInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    ChannelsByUsers?: ChannelsByUsersUpdateManyWithoutChannelNestedInput
  }

  export type ChannelsUncheckedUpdateWithoutContentsByChannelInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    ChannelsByUsers?: ChannelsByUsersUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type ChannelsByUsersCreateManyUserInput = {
    id?: number
    category?: string | null
    channelId: number
  }

  export type ChannelsByUsersUpdateWithoutUserInput = {
    category?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: ChannelsUpdateOneRequiredWithoutChannelsByUsersNestedInput
  }

  export type ChannelsByUsersUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: IntFieldUpdateOperationsInput | number
  }

  export type ChannelsByUsersUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: IntFieldUpdateOperationsInput | number
  }

  export type ChannelsByUsersCreateManyChannelInput = {
    id?: number
    category?: string | null
    userId: number
  }

  export type ContentsByChannelCreateManyChannelInput = {
    id?: number
    date: Date | string
    content: string
    image?: string | null
    url: string
  }

  export type ChannelsByUsersUpdateWithoutChannelInput = {
    category?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsersUpdateOneRequiredWithoutChannelsByUsersNestedInput
  }

  export type ChannelsByUsersUncheckedUpdateWithoutChannelInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ChannelsByUsersUncheckedUpdateManyWithoutChannelInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ContentsByChannelUpdateWithoutChannelInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ContentsByChannelUncheckedUpdateWithoutChannelInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ContentsByChannelUncheckedUpdateManyWithoutChannelInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
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