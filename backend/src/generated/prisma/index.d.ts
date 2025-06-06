
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
 * Model Social
 * 
 */
export type Social = $Result.DefaultSelection<Prisma.$SocialPayload>
/**
 * Model BasicInfo
 * 
 */
export type BasicInfo = $Result.DefaultSelection<Prisma.$BasicInfoPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Problem
 * 
 */
export type Problem = $Result.DefaultSelection<Prisma.$ProblemPayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>
/**
 * Model Testcase
 * 
 */
export type Testcase = $Result.DefaultSelection<Prisma.$TestcasePayload>
/**
 * Model SolvedProblem
 * 
 */
export type SolvedProblem = $Result.DefaultSelection<Prisma.$SolvedProblemPayload>
/**
 * Model Playlist
 * 
 */
export type Playlist = $Result.DefaultSelection<Prisma.$PlaylistPayload>
/**
 * Model ProblemInPlaylist
 * 
 */
export type ProblemInPlaylist = $Result.DefaultSelection<Prisma.$ProblemInPlaylistPayload>
/**
 * Model Sheet
 * 
 */
export type Sheet = $Result.DefaultSelection<Prisma.$SheetPayload>
/**
 * Model SheetProblem
 * 
 */
export type SheetProblem = $Result.DefaultSelection<Prisma.$SheetProblemPayload>
/**
 * Model Purchase
 * 
 */
export type Purchase = $Result.DefaultSelection<Prisma.$PurchasePayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const Difficulty: {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type Difficulty = $Enums.Difficulty

export const Difficulty: typeof $Enums.Difficulty

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Socials
 * const socials = await prisma.social.findMany()
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
   * // Fetch zero or more Socials
   * const socials = await prisma.social.findMany()
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
   * `prisma.social`: Exposes CRUD operations for the **Social** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Socials
    * const socials = await prisma.social.findMany()
    * ```
    */
  get social(): Prisma.SocialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.basicInfo`: Exposes CRUD operations for the **BasicInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BasicInfos
    * const basicInfos = await prisma.basicInfo.findMany()
    * ```
    */
  get basicInfo(): Prisma.BasicInfoDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.problem`: Exposes CRUD operations for the **Problem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Problems
    * const problems = await prisma.problem.findMany()
    * ```
    */
  get problem(): Prisma.ProblemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testcase`: Exposes CRUD operations for the **Testcase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Testcases
    * const testcases = await prisma.testcase.findMany()
    * ```
    */
  get testcase(): Prisma.TestcaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.solvedProblem`: Exposes CRUD operations for the **SolvedProblem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SolvedProblems
    * const solvedProblems = await prisma.solvedProblem.findMany()
    * ```
    */
  get solvedProblem(): Prisma.SolvedProblemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playlist`: Exposes CRUD operations for the **Playlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlists
    * const playlists = await prisma.playlist.findMany()
    * ```
    */
  get playlist(): Prisma.PlaylistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problemInPlaylist`: Exposes CRUD operations for the **ProblemInPlaylist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProblemInPlaylists
    * const problemInPlaylists = await prisma.problemInPlaylist.findMany()
    * ```
    */
  get problemInPlaylist(): Prisma.ProblemInPlaylistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sheet`: Exposes CRUD operations for the **Sheet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sheets
    * const sheets = await prisma.sheet.findMany()
    * ```
    */
  get sheet(): Prisma.SheetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sheetProblem`: Exposes CRUD operations for the **SheetProblem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SheetProblems
    * const sheetProblems = await prisma.sheetProblem.findMany()
    * ```
    */
  get sheetProblem(): Prisma.SheetProblemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchase`: Exposes CRUD operations for the **Purchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchases
    * const purchases = await prisma.purchase.findMany()
    * ```
    */
  get purchase(): Prisma.PurchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;
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
    Social: 'Social',
    BasicInfo: 'BasicInfo',
    User: 'User',
    Problem: 'Problem',
    Submission: 'Submission',
    Testcase: 'Testcase',
    SolvedProblem: 'SolvedProblem',
    Playlist: 'Playlist',
    ProblemInPlaylist: 'ProblemInPlaylist',
    Sheet: 'Sheet',
    SheetProblem: 'SheetProblem',
    Purchase: 'Purchase',
    Payment: 'Payment'
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
      modelProps: "social" | "basicInfo" | "user" | "problem" | "submission" | "testcase" | "solvedProblem" | "playlist" | "problemInPlaylist" | "sheet" | "sheetProblem" | "purchase" | "payment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Social: {
        payload: Prisma.$SocialPayload<ExtArgs>
        fields: Prisma.SocialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>
          }
          findFirst: {
            args: Prisma.SocialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>
          }
          findMany: {
            args: Prisma.SocialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>[]
          }
          create: {
            args: Prisma.SocialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>
          }
          createMany: {
            args: Prisma.SocialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>[]
          }
          delete: {
            args: Prisma.SocialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>
          }
          update: {
            args: Prisma.SocialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>
          }
          deleteMany: {
            args: Prisma.SocialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>[]
          }
          upsert: {
            args: Prisma.SocialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>
          }
          aggregate: {
            args: Prisma.SocialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocial>
          }
          groupBy: {
            args: Prisma.SocialGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialCountArgs<ExtArgs>
            result: $Utils.Optional<SocialCountAggregateOutputType> | number
          }
        }
      }
      BasicInfo: {
        payload: Prisma.$BasicInfoPayload<ExtArgs>
        fields: Prisma.BasicInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BasicInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasicInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BasicInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasicInfoPayload>
          }
          findFirst: {
            args: Prisma.BasicInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasicInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BasicInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasicInfoPayload>
          }
          findMany: {
            args: Prisma.BasicInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasicInfoPayload>[]
          }
          create: {
            args: Prisma.BasicInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasicInfoPayload>
          }
          createMany: {
            args: Prisma.BasicInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BasicInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasicInfoPayload>[]
          }
          delete: {
            args: Prisma.BasicInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasicInfoPayload>
          }
          update: {
            args: Prisma.BasicInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasicInfoPayload>
          }
          deleteMany: {
            args: Prisma.BasicInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BasicInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BasicInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasicInfoPayload>[]
          }
          upsert: {
            args: Prisma.BasicInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasicInfoPayload>
          }
          aggregate: {
            args: Prisma.BasicInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBasicInfo>
          }
          groupBy: {
            args: Prisma.BasicInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<BasicInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.BasicInfoCountArgs<ExtArgs>
            result: $Utils.Optional<BasicInfoCountAggregateOutputType> | number
          }
        }
      }
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
      Problem: {
        payload: Prisma.$ProblemPayload<ExtArgs>
        fields: Prisma.ProblemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProblemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProblemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          findFirst: {
            args: Prisma.ProblemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProblemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          findMany: {
            args: Prisma.ProblemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          create: {
            args: Prisma.ProblemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          createMany: {
            args: Prisma.ProblemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProblemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          delete: {
            args: Prisma.ProblemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          update: {
            args: Prisma.ProblemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          deleteMany: {
            args: Prisma.ProblemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProblemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProblemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          upsert: {
            args: Prisma.ProblemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          aggregate: {
            args: Prisma.ProblemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblem>
          }
          groupBy: {
            args: Prisma.ProblemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProblemCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      Testcase: {
        payload: Prisma.$TestcasePayload<ExtArgs>
        fields: Prisma.TestcaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestcaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestcasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestcaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestcasePayload>
          }
          findFirst: {
            args: Prisma.TestcaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestcasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestcaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestcasePayload>
          }
          findMany: {
            args: Prisma.TestcaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestcasePayload>[]
          }
          create: {
            args: Prisma.TestcaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestcasePayload>
          }
          createMany: {
            args: Prisma.TestcaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestcaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestcasePayload>[]
          }
          delete: {
            args: Prisma.TestcaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestcasePayload>
          }
          update: {
            args: Prisma.TestcaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestcasePayload>
          }
          deleteMany: {
            args: Prisma.TestcaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestcaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestcaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestcasePayload>[]
          }
          upsert: {
            args: Prisma.TestcaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestcasePayload>
          }
          aggregate: {
            args: Prisma.TestcaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestcase>
          }
          groupBy: {
            args: Prisma.TestcaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestcaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestcaseCountArgs<ExtArgs>
            result: $Utils.Optional<TestcaseCountAggregateOutputType> | number
          }
        }
      }
      SolvedProblem: {
        payload: Prisma.$SolvedProblemPayload<ExtArgs>
        fields: Prisma.SolvedProblemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SolvedProblemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedProblemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SolvedProblemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedProblemPayload>
          }
          findFirst: {
            args: Prisma.SolvedProblemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedProblemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SolvedProblemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedProblemPayload>
          }
          findMany: {
            args: Prisma.SolvedProblemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedProblemPayload>[]
          }
          create: {
            args: Prisma.SolvedProblemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedProblemPayload>
          }
          createMany: {
            args: Prisma.SolvedProblemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SolvedProblemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedProblemPayload>[]
          }
          delete: {
            args: Prisma.SolvedProblemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedProblemPayload>
          }
          update: {
            args: Prisma.SolvedProblemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedProblemPayload>
          }
          deleteMany: {
            args: Prisma.SolvedProblemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SolvedProblemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SolvedProblemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedProblemPayload>[]
          }
          upsert: {
            args: Prisma.SolvedProblemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedProblemPayload>
          }
          aggregate: {
            args: Prisma.SolvedProblemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSolvedProblem>
          }
          groupBy: {
            args: Prisma.SolvedProblemGroupByArgs<ExtArgs>
            result: $Utils.Optional<SolvedProblemGroupByOutputType>[]
          }
          count: {
            args: Prisma.SolvedProblemCountArgs<ExtArgs>
            result: $Utils.Optional<SolvedProblemCountAggregateOutputType> | number
          }
        }
      }
      Playlist: {
        payload: Prisma.$PlaylistPayload<ExtArgs>
        fields: Prisma.PlaylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findFirst: {
            args: Prisma.PlaylistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findMany: {
            args: Prisma.PlaylistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          create: {
            args: Prisma.PlaylistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          createMany: {
            args: Prisma.PlaylistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaylistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          delete: {
            args: Prisma.PlaylistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          update: {
            args: Prisma.PlaylistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaylistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          upsert: {
            args: Prisma.PlaylistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          aggregate: {
            args: Prisma.PlaylistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylist>
          }
          groupBy: {
            args: Prisma.PlaylistGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaylistCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistCountAggregateOutputType> | number
          }
        }
      }
      ProblemInPlaylist: {
        payload: Prisma.$ProblemInPlaylistPayload<ExtArgs>
        fields: Prisma.ProblemInPlaylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProblemInPlaylistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProblemInPlaylistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload>
          }
          findFirst: {
            args: Prisma.ProblemInPlaylistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProblemInPlaylistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload>
          }
          findMany: {
            args: Prisma.ProblemInPlaylistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload>[]
          }
          create: {
            args: Prisma.ProblemInPlaylistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload>
          }
          createMany: {
            args: Prisma.ProblemInPlaylistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProblemInPlaylistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload>[]
          }
          delete: {
            args: Prisma.ProblemInPlaylistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload>
          }
          update: {
            args: Prisma.ProblemInPlaylistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload>
          }
          deleteMany: {
            args: Prisma.ProblemInPlaylistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProblemInPlaylistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProblemInPlaylistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload>[]
          }
          upsert: {
            args: Prisma.ProblemInPlaylistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload>
          }
          aggregate: {
            args: Prisma.ProblemInPlaylistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblemInPlaylist>
          }
          groupBy: {
            args: Prisma.ProblemInPlaylistGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemInPlaylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProblemInPlaylistCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemInPlaylistCountAggregateOutputType> | number
          }
        }
      }
      Sheet: {
        payload: Prisma.$SheetPayload<ExtArgs>
        fields: Prisma.SheetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SheetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SheetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>
          }
          findFirst: {
            args: Prisma.SheetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SheetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>
          }
          findMany: {
            args: Prisma.SheetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>[]
          }
          create: {
            args: Prisma.SheetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>
          }
          createMany: {
            args: Prisma.SheetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SheetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>[]
          }
          delete: {
            args: Prisma.SheetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>
          }
          update: {
            args: Prisma.SheetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>
          }
          deleteMany: {
            args: Prisma.SheetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SheetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SheetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>[]
          }
          upsert: {
            args: Prisma.SheetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>
          }
          aggregate: {
            args: Prisma.SheetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSheet>
          }
          groupBy: {
            args: Prisma.SheetGroupByArgs<ExtArgs>
            result: $Utils.Optional<SheetGroupByOutputType>[]
          }
          count: {
            args: Prisma.SheetCountArgs<ExtArgs>
            result: $Utils.Optional<SheetCountAggregateOutputType> | number
          }
        }
      }
      SheetProblem: {
        payload: Prisma.$SheetProblemPayload<ExtArgs>
        fields: Prisma.SheetProblemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SheetProblemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetProblemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SheetProblemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetProblemPayload>
          }
          findFirst: {
            args: Prisma.SheetProblemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetProblemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SheetProblemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetProblemPayload>
          }
          findMany: {
            args: Prisma.SheetProblemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetProblemPayload>[]
          }
          create: {
            args: Prisma.SheetProblemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetProblemPayload>
          }
          createMany: {
            args: Prisma.SheetProblemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SheetProblemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetProblemPayload>[]
          }
          delete: {
            args: Prisma.SheetProblemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetProblemPayload>
          }
          update: {
            args: Prisma.SheetProblemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetProblemPayload>
          }
          deleteMany: {
            args: Prisma.SheetProblemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SheetProblemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SheetProblemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetProblemPayload>[]
          }
          upsert: {
            args: Prisma.SheetProblemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetProblemPayload>
          }
          aggregate: {
            args: Prisma.SheetProblemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSheetProblem>
          }
          groupBy: {
            args: Prisma.SheetProblemGroupByArgs<ExtArgs>
            result: $Utils.Optional<SheetProblemGroupByOutputType>[]
          }
          count: {
            args: Prisma.SheetProblemCountArgs<ExtArgs>
            result: $Utils.Optional<SheetProblemCountAggregateOutputType> | number
          }
        }
      }
      Purchase: {
        payload: Prisma.$PurchasePayload<ExtArgs>
        fields: Prisma.PurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findFirst: {
            args: Prisma.PurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findMany: {
            args: Prisma.PurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          create: {
            args: Prisma.PurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          createMany: {
            args: Prisma.PurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          delete: {
            args: Prisma.PurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          update: {
            args: Prisma.PurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          deleteMany: {
            args: Prisma.PurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          upsert: {
            args: Prisma.PurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          aggregate: {
            args: Prisma.PurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchase>
          }
          groupBy: {
            args: Prisma.PurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
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
    social?: SocialOmit
    basicInfo?: BasicInfoOmit
    user?: UserOmit
    problem?: ProblemOmit
    submission?: SubmissionOmit
    testcase?: TestcaseOmit
    solvedProblem?: SolvedProblemOmit
    playlist?: PlaylistOmit
    problemInPlaylist?: ProblemInPlaylistOmit
    sheet?: SheetOmit
    sheetProblem?: SheetProblemOmit
    purchase?: PurchaseOmit
    payment?: PaymentOmit
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
    problems: number
    submissions: number
    solvedProblems: number
    playlists: number
    purchases: number
    sheetAssignments: number
    payment: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | UserCountOutputTypeCountProblemsArgs
    submissions?: boolean | UserCountOutputTypeCountSubmissionsArgs
    solvedProblems?: boolean | UserCountOutputTypeCountSolvedProblemsArgs
    playlists?: boolean | UserCountOutputTypeCountPlaylistsArgs
    purchases?: boolean | UserCountOutputTypeCountPurchasesArgs
    sheetAssignments?: boolean | UserCountOutputTypeCountSheetAssignmentsArgs
    payment?: boolean | UserCountOutputTypeCountPaymentArgs
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
  export type UserCountOutputTypeCountProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSolvedProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolvedProblemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSheetAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SheetProblemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type ProblemCountOutputType
   */

  export type ProblemCountOutputType = {
    submissions: number
    sheetAssignments: number
    solvedBy: number
    problemInPlaylist: number
  }

  export type ProblemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | ProblemCountOutputTypeCountSubmissionsArgs
    sheetAssignments?: boolean | ProblemCountOutputTypeCountSheetAssignmentsArgs
    solvedBy?: boolean | ProblemCountOutputTypeCountSolvedByArgs
    problemInPlaylist?: boolean | ProblemCountOutputTypeCountProblemInPlaylistArgs
  }

  // Custom InputTypes
  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemCountOutputType
     */
    select?: ProblemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountSheetAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SheetProblemWhereInput
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountSolvedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolvedProblemWhereInput
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountProblemInPlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemInPlaylistWhereInput
  }


  /**
   * Count Type SubmissionCountOutputType
   */

  export type SubmissionCountOutputType = {
    testCases: number
  }

  export type SubmissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testCases?: boolean | SubmissionCountOutputTypeCountTestCasesArgs
  }

  // Custom InputTypes
  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionCountOutputType
     */
    select?: SubmissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeCountTestCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestcaseWhereInput
  }


  /**
   * Count Type PlaylistCountOutputType
   */

  export type PlaylistCountOutputType = {
    problems: number
  }

  export type PlaylistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | PlaylistCountOutputTypeCountProblemsArgs
  }

  // Custom InputTypes
  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistCountOutputType
     */
    select?: PlaylistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemInPlaylistWhereInput
  }


  /**
   * Count Type SheetCountOutputType
   */

  export type SheetCountOutputType = {
    purchases: number
    sheetAssignments: number
  }

  export type SheetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchases?: boolean | SheetCountOutputTypeCountPurchasesArgs
    sheetAssignments?: boolean | SheetCountOutputTypeCountSheetAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * SheetCountOutputType without action
   */
  export type SheetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetCountOutputType
     */
    select?: SheetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SheetCountOutputType without action
   */
  export type SheetCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }

  /**
   * SheetCountOutputType without action
   */
  export type SheetCountOutputTypeCountSheetAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SheetProblemWhereInput
  }


  /**
   * Count Type PurchaseCountOutputType
   */

  export type PurchaseCountOutputType = {
    payment: number
  }

  export type PurchaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PurchaseCountOutputTypeCountPaymentArgs
  }

  // Custom InputTypes
  /**
   * PurchaseCountOutputType without action
   */
  export type PurchaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseCountOutputType
     */
    select?: PurchaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PurchaseCountOutputType without action
   */
  export type PurchaseCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Social
   */

  export type AggregateSocial = {
    _count: SocialCountAggregateOutputType | null
    _min: SocialMinAggregateOutputType | null
    _max: SocialMaxAggregateOutputType | null
  }

  export type SocialMinAggregateOutputType = {
    id: string | null
    website: string | null
    twitter: string | null
    github: string | null
    linkedIn: string | null
  }

  export type SocialMaxAggregateOutputType = {
    id: string | null
    website: string | null
    twitter: string | null
    github: string | null
    linkedIn: string | null
  }

  export type SocialCountAggregateOutputType = {
    id: number
    website: number
    twitter: number
    github: number
    linkedIn: number
    _all: number
  }


  export type SocialMinAggregateInputType = {
    id?: true
    website?: true
    twitter?: true
    github?: true
    linkedIn?: true
  }

  export type SocialMaxAggregateInputType = {
    id?: true
    website?: true
    twitter?: true
    github?: true
    linkedIn?: true
  }

  export type SocialCountAggregateInputType = {
    id?: true
    website?: true
    twitter?: true
    github?: true
    linkedIn?: true
    _all?: true
  }

  export type SocialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Social to aggregate.
     */
    where?: SocialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socials to fetch.
     */
    orderBy?: SocialOrderByWithRelationInput | SocialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Socials
    **/
    _count?: true | SocialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialMaxAggregateInputType
  }

  export type GetSocialAggregateType<T extends SocialAggregateArgs> = {
        [P in keyof T & keyof AggregateSocial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocial[P]>
      : GetScalarType<T[P], AggregateSocial[P]>
  }




  export type SocialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialWhereInput
    orderBy?: SocialOrderByWithAggregationInput | SocialOrderByWithAggregationInput[]
    by: SocialScalarFieldEnum[] | SocialScalarFieldEnum
    having?: SocialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialCountAggregateInputType | true
    _min?: SocialMinAggregateInputType
    _max?: SocialMaxAggregateInputType
  }

  export type SocialGroupByOutputType = {
    id: string
    website: string | null
    twitter: string | null
    github: string | null
    linkedIn: string | null
    _count: SocialCountAggregateOutputType | null
    _min: SocialMinAggregateOutputType | null
    _max: SocialMaxAggregateOutputType | null
  }

  type GetSocialGroupByPayload<T extends SocialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialGroupByOutputType[P]>
            : GetScalarType<T[P], SocialGroupByOutputType[P]>
        }
      >
    >


  export type SocialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    website?: boolean
    twitter?: boolean
    github?: boolean
    linkedIn?: boolean
    BasicInfo?: boolean | Social$BasicInfoArgs<ExtArgs>
  }, ExtArgs["result"]["social"]>

  export type SocialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    website?: boolean
    twitter?: boolean
    github?: boolean
    linkedIn?: boolean
  }, ExtArgs["result"]["social"]>

  export type SocialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    website?: boolean
    twitter?: boolean
    github?: boolean
    linkedIn?: boolean
  }, ExtArgs["result"]["social"]>

  export type SocialSelectScalar = {
    id?: boolean
    website?: boolean
    twitter?: boolean
    github?: boolean
    linkedIn?: boolean
  }

  export type SocialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "website" | "twitter" | "github" | "linkedIn", ExtArgs["result"]["social"]>
  export type SocialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BasicInfo?: boolean | Social$BasicInfoArgs<ExtArgs>
  }
  export type SocialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SocialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SocialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Social"
    objects: {
      BasicInfo: Prisma.$BasicInfoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      website: string | null
      twitter: string | null
      github: string | null
      linkedIn: string | null
    }, ExtArgs["result"]["social"]>
    composites: {}
  }

  type SocialGetPayload<S extends boolean | null | undefined | SocialDefaultArgs> = $Result.GetResult<Prisma.$SocialPayload, S>

  type SocialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialCountAggregateInputType | true
    }

  export interface SocialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Social'], meta: { name: 'Social' } }
    /**
     * Find zero or one Social that matches the filter.
     * @param {SocialFindUniqueArgs} args - Arguments to find a Social
     * @example
     * // Get one Social
     * const social = await prisma.social.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialFindUniqueArgs>(args: SelectSubset<T, SocialFindUniqueArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Social that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialFindUniqueOrThrowArgs} args - Arguments to find a Social
     * @example
     * // Get one Social
     * const social = await prisma.social.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Social that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialFindFirstArgs} args - Arguments to find a Social
     * @example
     * // Get one Social
     * const social = await prisma.social.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialFindFirstArgs>(args?: SelectSubset<T, SocialFindFirstArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Social that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialFindFirstOrThrowArgs} args - Arguments to find a Social
     * @example
     * // Get one Social
     * const social = await prisma.social.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Socials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Socials
     * const socials = await prisma.social.findMany()
     * 
     * // Get first 10 Socials
     * const socials = await prisma.social.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialWithIdOnly = await prisma.social.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialFindManyArgs>(args?: SelectSubset<T, SocialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Social.
     * @param {SocialCreateArgs} args - Arguments to create a Social.
     * @example
     * // Create one Social
     * const Social = await prisma.social.create({
     *   data: {
     *     // ... data to create a Social
     *   }
     * })
     * 
     */
    create<T extends SocialCreateArgs>(args: SelectSubset<T, SocialCreateArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Socials.
     * @param {SocialCreateManyArgs} args - Arguments to create many Socials.
     * @example
     * // Create many Socials
     * const social = await prisma.social.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialCreateManyArgs>(args?: SelectSubset<T, SocialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Socials and returns the data saved in the database.
     * @param {SocialCreateManyAndReturnArgs} args - Arguments to create many Socials.
     * @example
     * // Create many Socials
     * const social = await prisma.social.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Socials and only return the `id`
     * const socialWithIdOnly = await prisma.social.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Social.
     * @param {SocialDeleteArgs} args - Arguments to delete one Social.
     * @example
     * // Delete one Social
     * const Social = await prisma.social.delete({
     *   where: {
     *     // ... filter to delete one Social
     *   }
     * })
     * 
     */
    delete<T extends SocialDeleteArgs>(args: SelectSubset<T, SocialDeleteArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Social.
     * @param {SocialUpdateArgs} args - Arguments to update one Social.
     * @example
     * // Update one Social
     * const social = await prisma.social.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialUpdateArgs>(args: SelectSubset<T, SocialUpdateArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Socials.
     * @param {SocialDeleteManyArgs} args - Arguments to filter Socials to delete.
     * @example
     * // Delete a few Socials
     * const { count } = await prisma.social.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialDeleteManyArgs>(args?: SelectSubset<T, SocialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Socials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Socials
     * const social = await prisma.social.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialUpdateManyArgs>(args: SelectSubset<T, SocialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Socials and returns the data updated in the database.
     * @param {SocialUpdateManyAndReturnArgs} args - Arguments to update many Socials.
     * @example
     * // Update many Socials
     * const social = await prisma.social.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Socials and only return the `id`
     * const socialWithIdOnly = await prisma.social.updateManyAndReturn({
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
    updateManyAndReturn<T extends SocialUpdateManyAndReturnArgs>(args: SelectSubset<T, SocialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Social.
     * @param {SocialUpsertArgs} args - Arguments to update or create a Social.
     * @example
     * // Update or create a Social
     * const social = await prisma.social.upsert({
     *   create: {
     *     // ... data to create a Social
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Social we want to update
     *   }
     * })
     */
    upsert<T extends SocialUpsertArgs>(args: SelectSubset<T, SocialUpsertArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Socials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialCountArgs} args - Arguments to filter Socials to count.
     * @example
     * // Count the number of Socials
     * const count = await prisma.social.count({
     *   where: {
     *     // ... the filter for the Socials we want to count
     *   }
     * })
    **/
    count<T extends SocialCountArgs>(
      args?: Subset<T, SocialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Social.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialAggregateArgs>(args: Subset<T, SocialAggregateArgs>): Prisma.PrismaPromise<GetSocialAggregateType<T>>

    /**
     * Group by Social.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialGroupByArgs} args - Group by arguments.
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
      T extends SocialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialGroupByArgs['orderBy'] }
        : { orderBy?: SocialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SocialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Social model
   */
  readonly fields: SocialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Social.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    BasicInfo<T extends Social$BasicInfoArgs<ExtArgs> = {}>(args?: Subset<T, Social$BasicInfoArgs<ExtArgs>>): Prisma__BasicInfoClient<$Result.GetResult<Prisma.$BasicInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Social model
   */
  interface SocialFieldRefs {
    readonly id: FieldRef<"Social", 'String'>
    readonly website: FieldRef<"Social", 'String'>
    readonly twitter: FieldRef<"Social", 'String'>
    readonly github: FieldRef<"Social", 'String'>
    readonly linkedIn: FieldRef<"Social", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Social findUnique
   */
  export type SocialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
    /**
     * Filter, which Social to fetch.
     */
    where: SocialWhereUniqueInput
  }

  /**
   * Social findUniqueOrThrow
   */
  export type SocialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
    /**
     * Filter, which Social to fetch.
     */
    where: SocialWhereUniqueInput
  }

  /**
   * Social findFirst
   */
  export type SocialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
    /**
     * Filter, which Social to fetch.
     */
    where?: SocialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socials to fetch.
     */
    orderBy?: SocialOrderByWithRelationInput | SocialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Socials.
     */
    cursor?: SocialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Socials.
     */
    distinct?: SocialScalarFieldEnum | SocialScalarFieldEnum[]
  }

  /**
   * Social findFirstOrThrow
   */
  export type SocialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
    /**
     * Filter, which Social to fetch.
     */
    where?: SocialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socials to fetch.
     */
    orderBy?: SocialOrderByWithRelationInput | SocialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Socials.
     */
    cursor?: SocialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Socials.
     */
    distinct?: SocialScalarFieldEnum | SocialScalarFieldEnum[]
  }

  /**
   * Social findMany
   */
  export type SocialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
    /**
     * Filter, which Socials to fetch.
     */
    where?: SocialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socials to fetch.
     */
    orderBy?: SocialOrderByWithRelationInput | SocialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Socials.
     */
    cursor?: SocialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socials.
     */
    skip?: number
    distinct?: SocialScalarFieldEnum | SocialScalarFieldEnum[]
  }

  /**
   * Social create
   */
  export type SocialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
    /**
     * The data needed to create a Social.
     */
    data?: XOR<SocialCreateInput, SocialUncheckedCreateInput>
  }

  /**
   * Social createMany
   */
  export type SocialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Socials.
     */
    data: SocialCreateManyInput | SocialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Social createManyAndReturn
   */
  export type SocialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * The data used to create many Socials.
     */
    data: SocialCreateManyInput | SocialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Social update
   */
  export type SocialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
    /**
     * The data needed to update a Social.
     */
    data: XOR<SocialUpdateInput, SocialUncheckedUpdateInput>
    /**
     * Choose, which Social to update.
     */
    where: SocialWhereUniqueInput
  }

  /**
   * Social updateMany
   */
  export type SocialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Socials.
     */
    data: XOR<SocialUpdateManyMutationInput, SocialUncheckedUpdateManyInput>
    /**
     * Filter which Socials to update
     */
    where?: SocialWhereInput
    /**
     * Limit how many Socials to update.
     */
    limit?: number
  }

  /**
   * Social updateManyAndReturn
   */
  export type SocialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * The data used to update Socials.
     */
    data: XOR<SocialUpdateManyMutationInput, SocialUncheckedUpdateManyInput>
    /**
     * Filter which Socials to update
     */
    where?: SocialWhereInput
    /**
     * Limit how many Socials to update.
     */
    limit?: number
  }

  /**
   * Social upsert
   */
  export type SocialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
    /**
     * The filter to search for the Social to update in case it exists.
     */
    where: SocialWhereUniqueInput
    /**
     * In case the Social found by the `where` argument doesn't exist, create a new Social with this data.
     */
    create: XOR<SocialCreateInput, SocialUncheckedCreateInput>
    /**
     * In case the Social was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialUpdateInput, SocialUncheckedUpdateInput>
  }

  /**
   * Social delete
   */
  export type SocialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
    /**
     * Filter which Social to delete.
     */
    where: SocialWhereUniqueInput
  }

  /**
   * Social deleteMany
   */
  export type SocialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Socials to delete
     */
    where?: SocialWhereInput
    /**
     * Limit how many Socials to delete.
     */
    limit?: number
  }

  /**
   * Social.BasicInfo
   */
  export type Social$BasicInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasicInfo
     */
    select?: BasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasicInfo
     */
    omit?: BasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasicInfoInclude<ExtArgs> | null
    where?: BasicInfoWhereInput
  }

  /**
   * Social without action
   */
  export type SocialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
  }


  /**
   * Model BasicInfo
   */

  export type AggregateBasicInfo = {
    _count: BasicInfoCountAggregateOutputType | null
    _min: BasicInfoMinAggregateOutputType | null
    _max: BasicInfoMaxAggregateOutputType | null
  }

  export type BasicInfoMinAggregateOutputType = {
    id: string | null
    gender: $Enums.Gender | null
    bio: string | null
    birth: Date | null
    socialId: string | null
  }

  export type BasicInfoMaxAggregateOutputType = {
    id: string | null
    gender: $Enums.Gender | null
    bio: string | null
    birth: Date | null
    socialId: string | null
  }

  export type BasicInfoCountAggregateOutputType = {
    id: number
    gender: number
    bio: number
    birth: number
    socialId: number
    _all: number
  }


  export type BasicInfoMinAggregateInputType = {
    id?: true
    gender?: true
    bio?: true
    birth?: true
    socialId?: true
  }

  export type BasicInfoMaxAggregateInputType = {
    id?: true
    gender?: true
    bio?: true
    birth?: true
    socialId?: true
  }

  export type BasicInfoCountAggregateInputType = {
    id?: true
    gender?: true
    bio?: true
    birth?: true
    socialId?: true
    _all?: true
  }

  export type BasicInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BasicInfo to aggregate.
     */
    where?: BasicInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BasicInfos to fetch.
     */
    orderBy?: BasicInfoOrderByWithRelationInput | BasicInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BasicInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BasicInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BasicInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BasicInfos
    **/
    _count?: true | BasicInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BasicInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BasicInfoMaxAggregateInputType
  }

  export type GetBasicInfoAggregateType<T extends BasicInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateBasicInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBasicInfo[P]>
      : GetScalarType<T[P], AggregateBasicInfo[P]>
  }




  export type BasicInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BasicInfoWhereInput
    orderBy?: BasicInfoOrderByWithAggregationInput | BasicInfoOrderByWithAggregationInput[]
    by: BasicInfoScalarFieldEnum[] | BasicInfoScalarFieldEnum
    having?: BasicInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BasicInfoCountAggregateInputType | true
    _min?: BasicInfoMinAggregateInputType
    _max?: BasicInfoMaxAggregateInputType
  }

  export type BasicInfoGroupByOutputType = {
    id: string
    gender: $Enums.Gender | null
    bio: string | null
    birth: Date | null
    socialId: string | null
    _count: BasicInfoCountAggregateOutputType | null
    _min: BasicInfoMinAggregateOutputType | null
    _max: BasicInfoMaxAggregateOutputType | null
  }

  type GetBasicInfoGroupByPayload<T extends BasicInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BasicInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BasicInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BasicInfoGroupByOutputType[P]>
            : GetScalarType<T[P], BasicInfoGroupByOutputType[P]>
        }
      >
    >


  export type BasicInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gender?: boolean
    bio?: boolean
    birth?: boolean
    socialId?: boolean
    socials?: boolean | BasicInfo$socialsArgs<ExtArgs>
    user?: boolean | BasicInfo$userArgs<ExtArgs>
  }, ExtArgs["result"]["basicInfo"]>

  export type BasicInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gender?: boolean
    bio?: boolean
    birth?: boolean
    socialId?: boolean
    socials?: boolean | BasicInfo$socialsArgs<ExtArgs>
  }, ExtArgs["result"]["basicInfo"]>

  export type BasicInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gender?: boolean
    bio?: boolean
    birth?: boolean
    socialId?: boolean
    socials?: boolean | BasicInfo$socialsArgs<ExtArgs>
  }, ExtArgs["result"]["basicInfo"]>

  export type BasicInfoSelectScalar = {
    id?: boolean
    gender?: boolean
    bio?: boolean
    birth?: boolean
    socialId?: boolean
  }

  export type BasicInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gender" | "bio" | "birth" | "socialId", ExtArgs["result"]["basicInfo"]>
  export type BasicInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socials?: boolean | BasicInfo$socialsArgs<ExtArgs>
    user?: boolean | BasicInfo$userArgs<ExtArgs>
  }
  export type BasicInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socials?: boolean | BasicInfo$socialsArgs<ExtArgs>
  }
  export type BasicInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socials?: boolean | BasicInfo$socialsArgs<ExtArgs>
  }

  export type $BasicInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BasicInfo"
    objects: {
      socials: Prisma.$SocialPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gender: $Enums.Gender | null
      bio: string | null
      birth: Date | null
      socialId: string | null
    }, ExtArgs["result"]["basicInfo"]>
    composites: {}
  }

  type BasicInfoGetPayload<S extends boolean | null | undefined | BasicInfoDefaultArgs> = $Result.GetResult<Prisma.$BasicInfoPayload, S>

  type BasicInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BasicInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BasicInfoCountAggregateInputType | true
    }

  export interface BasicInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BasicInfo'], meta: { name: 'BasicInfo' } }
    /**
     * Find zero or one BasicInfo that matches the filter.
     * @param {BasicInfoFindUniqueArgs} args - Arguments to find a BasicInfo
     * @example
     * // Get one BasicInfo
     * const basicInfo = await prisma.basicInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BasicInfoFindUniqueArgs>(args: SelectSubset<T, BasicInfoFindUniqueArgs<ExtArgs>>): Prisma__BasicInfoClient<$Result.GetResult<Prisma.$BasicInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BasicInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BasicInfoFindUniqueOrThrowArgs} args - Arguments to find a BasicInfo
     * @example
     * // Get one BasicInfo
     * const basicInfo = await prisma.basicInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BasicInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, BasicInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BasicInfoClient<$Result.GetResult<Prisma.$BasicInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BasicInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BasicInfoFindFirstArgs} args - Arguments to find a BasicInfo
     * @example
     * // Get one BasicInfo
     * const basicInfo = await prisma.basicInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BasicInfoFindFirstArgs>(args?: SelectSubset<T, BasicInfoFindFirstArgs<ExtArgs>>): Prisma__BasicInfoClient<$Result.GetResult<Prisma.$BasicInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BasicInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BasicInfoFindFirstOrThrowArgs} args - Arguments to find a BasicInfo
     * @example
     * // Get one BasicInfo
     * const basicInfo = await prisma.basicInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BasicInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, BasicInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__BasicInfoClient<$Result.GetResult<Prisma.$BasicInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BasicInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BasicInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BasicInfos
     * const basicInfos = await prisma.basicInfo.findMany()
     * 
     * // Get first 10 BasicInfos
     * const basicInfos = await prisma.basicInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const basicInfoWithIdOnly = await prisma.basicInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BasicInfoFindManyArgs>(args?: SelectSubset<T, BasicInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BasicInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BasicInfo.
     * @param {BasicInfoCreateArgs} args - Arguments to create a BasicInfo.
     * @example
     * // Create one BasicInfo
     * const BasicInfo = await prisma.basicInfo.create({
     *   data: {
     *     // ... data to create a BasicInfo
     *   }
     * })
     * 
     */
    create<T extends BasicInfoCreateArgs>(args: SelectSubset<T, BasicInfoCreateArgs<ExtArgs>>): Prisma__BasicInfoClient<$Result.GetResult<Prisma.$BasicInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BasicInfos.
     * @param {BasicInfoCreateManyArgs} args - Arguments to create many BasicInfos.
     * @example
     * // Create many BasicInfos
     * const basicInfo = await prisma.basicInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BasicInfoCreateManyArgs>(args?: SelectSubset<T, BasicInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BasicInfos and returns the data saved in the database.
     * @param {BasicInfoCreateManyAndReturnArgs} args - Arguments to create many BasicInfos.
     * @example
     * // Create many BasicInfos
     * const basicInfo = await prisma.basicInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BasicInfos and only return the `id`
     * const basicInfoWithIdOnly = await prisma.basicInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BasicInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, BasicInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BasicInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BasicInfo.
     * @param {BasicInfoDeleteArgs} args - Arguments to delete one BasicInfo.
     * @example
     * // Delete one BasicInfo
     * const BasicInfo = await prisma.basicInfo.delete({
     *   where: {
     *     // ... filter to delete one BasicInfo
     *   }
     * })
     * 
     */
    delete<T extends BasicInfoDeleteArgs>(args: SelectSubset<T, BasicInfoDeleteArgs<ExtArgs>>): Prisma__BasicInfoClient<$Result.GetResult<Prisma.$BasicInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BasicInfo.
     * @param {BasicInfoUpdateArgs} args - Arguments to update one BasicInfo.
     * @example
     * // Update one BasicInfo
     * const basicInfo = await prisma.basicInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BasicInfoUpdateArgs>(args: SelectSubset<T, BasicInfoUpdateArgs<ExtArgs>>): Prisma__BasicInfoClient<$Result.GetResult<Prisma.$BasicInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BasicInfos.
     * @param {BasicInfoDeleteManyArgs} args - Arguments to filter BasicInfos to delete.
     * @example
     * // Delete a few BasicInfos
     * const { count } = await prisma.basicInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BasicInfoDeleteManyArgs>(args?: SelectSubset<T, BasicInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BasicInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BasicInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BasicInfos
     * const basicInfo = await prisma.basicInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BasicInfoUpdateManyArgs>(args: SelectSubset<T, BasicInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BasicInfos and returns the data updated in the database.
     * @param {BasicInfoUpdateManyAndReturnArgs} args - Arguments to update many BasicInfos.
     * @example
     * // Update many BasicInfos
     * const basicInfo = await prisma.basicInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BasicInfos and only return the `id`
     * const basicInfoWithIdOnly = await prisma.basicInfo.updateManyAndReturn({
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
    updateManyAndReturn<T extends BasicInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, BasicInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BasicInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BasicInfo.
     * @param {BasicInfoUpsertArgs} args - Arguments to update or create a BasicInfo.
     * @example
     * // Update or create a BasicInfo
     * const basicInfo = await prisma.basicInfo.upsert({
     *   create: {
     *     // ... data to create a BasicInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BasicInfo we want to update
     *   }
     * })
     */
    upsert<T extends BasicInfoUpsertArgs>(args: SelectSubset<T, BasicInfoUpsertArgs<ExtArgs>>): Prisma__BasicInfoClient<$Result.GetResult<Prisma.$BasicInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BasicInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BasicInfoCountArgs} args - Arguments to filter BasicInfos to count.
     * @example
     * // Count the number of BasicInfos
     * const count = await prisma.basicInfo.count({
     *   where: {
     *     // ... the filter for the BasicInfos we want to count
     *   }
     * })
    **/
    count<T extends BasicInfoCountArgs>(
      args?: Subset<T, BasicInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BasicInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BasicInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BasicInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BasicInfoAggregateArgs>(args: Subset<T, BasicInfoAggregateArgs>): Prisma.PrismaPromise<GetBasicInfoAggregateType<T>>

    /**
     * Group by BasicInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BasicInfoGroupByArgs} args - Group by arguments.
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
      T extends BasicInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BasicInfoGroupByArgs['orderBy'] }
        : { orderBy?: BasicInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BasicInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBasicInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BasicInfo model
   */
  readonly fields: BasicInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BasicInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BasicInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    socials<T extends BasicInfo$socialsArgs<ExtArgs> = {}>(args?: Subset<T, BasicInfo$socialsArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends BasicInfo$userArgs<ExtArgs> = {}>(args?: Subset<T, BasicInfo$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BasicInfo model
   */
  interface BasicInfoFieldRefs {
    readonly id: FieldRef<"BasicInfo", 'String'>
    readonly gender: FieldRef<"BasicInfo", 'Gender'>
    readonly bio: FieldRef<"BasicInfo", 'String'>
    readonly birth: FieldRef<"BasicInfo", 'DateTime'>
    readonly socialId: FieldRef<"BasicInfo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BasicInfo findUnique
   */
  export type BasicInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasicInfo
     */
    select?: BasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasicInfo
     */
    omit?: BasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasicInfoInclude<ExtArgs> | null
    /**
     * Filter, which BasicInfo to fetch.
     */
    where: BasicInfoWhereUniqueInput
  }

  /**
   * BasicInfo findUniqueOrThrow
   */
  export type BasicInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasicInfo
     */
    select?: BasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasicInfo
     */
    omit?: BasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasicInfoInclude<ExtArgs> | null
    /**
     * Filter, which BasicInfo to fetch.
     */
    where: BasicInfoWhereUniqueInput
  }

  /**
   * BasicInfo findFirst
   */
  export type BasicInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasicInfo
     */
    select?: BasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasicInfo
     */
    omit?: BasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasicInfoInclude<ExtArgs> | null
    /**
     * Filter, which BasicInfo to fetch.
     */
    where?: BasicInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BasicInfos to fetch.
     */
    orderBy?: BasicInfoOrderByWithRelationInput | BasicInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BasicInfos.
     */
    cursor?: BasicInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BasicInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BasicInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BasicInfos.
     */
    distinct?: BasicInfoScalarFieldEnum | BasicInfoScalarFieldEnum[]
  }

  /**
   * BasicInfo findFirstOrThrow
   */
  export type BasicInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasicInfo
     */
    select?: BasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasicInfo
     */
    omit?: BasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasicInfoInclude<ExtArgs> | null
    /**
     * Filter, which BasicInfo to fetch.
     */
    where?: BasicInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BasicInfos to fetch.
     */
    orderBy?: BasicInfoOrderByWithRelationInput | BasicInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BasicInfos.
     */
    cursor?: BasicInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BasicInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BasicInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BasicInfos.
     */
    distinct?: BasicInfoScalarFieldEnum | BasicInfoScalarFieldEnum[]
  }

  /**
   * BasicInfo findMany
   */
  export type BasicInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasicInfo
     */
    select?: BasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasicInfo
     */
    omit?: BasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasicInfoInclude<ExtArgs> | null
    /**
     * Filter, which BasicInfos to fetch.
     */
    where?: BasicInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BasicInfos to fetch.
     */
    orderBy?: BasicInfoOrderByWithRelationInput | BasicInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BasicInfos.
     */
    cursor?: BasicInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BasicInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BasicInfos.
     */
    skip?: number
    distinct?: BasicInfoScalarFieldEnum | BasicInfoScalarFieldEnum[]
  }

  /**
   * BasicInfo create
   */
  export type BasicInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasicInfo
     */
    select?: BasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasicInfo
     */
    omit?: BasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasicInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a BasicInfo.
     */
    data?: XOR<BasicInfoCreateInput, BasicInfoUncheckedCreateInput>
  }

  /**
   * BasicInfo createMany
   */
  export type BasicInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BasicInfos.
     */
    data: BasicInfoCreateManyInput | BasicInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BasicInfo createManyAndReturn
   */
  export type BasicInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasicInfo
     */
    select?: BasicInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BasicInfo
     */
    omit?: BasicInfoOmit<ExtArgs> | null
    /**
     * The data used to create many BasicInfos.
     */
    data: BasicInfoCreateManyInput | BasicInfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasicInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BasicInfo update
   */
  export type BasicInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasicInfo
     */
    select?: BasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasicInfo
     */
    omit?: BasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasicInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a BasicInfo.
     */
    data: XOR<BasicInfoUpdateInput, BasicInfoUncheckedUpdateInput>
    /**
     * Choose, which BasicInfo to update.
     */
    where: BasicInfoWhereUniqueInput
  }

  /**
   * BasicInfo updateMany
   */
  export type BasicInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BasicInfos.
     */
    data: XOR<BasicInfoUpdateManyMutationInput, BasicInfoUncheckedUpdateManyInput>
    /**
     * Filter which BasicInfos to update
     */
    where?: BasicInfoWhereInput
    /**
     * Limit how many BasicInfos to update.
     */
    limit?: number
  }

  /**
   * BasicInfo updateManyAndReturn
   */
  export type BasicInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasicInfo
     */
    select?: BasicInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BasicInfo
     */
    omit?: BasicInfoOmit<ExtArgs> | null
    /**
     * The data used to update BasicInfos.
     */
    data: XOR<BasicInfoUpdateManyMutationInput, BasicInfoUncheckedUpdateManyInput>
    /**
     * Filter which BasicInfos to update
     */
    where?: BasicInfoWhereInput
    /**
     * Limit how many BasicInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasicInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BasicInfo upsert
   */
  export type BasicInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasicInfo
     */
    select?: BasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasicInfo
     */
    omit?: BasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasicInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the BasicInfo to update in case it exists.
     */
    where: BasicInfoWhereUniqueInput
    /**
     * In case the BasicInfo found by the `where` argument doesn't exist, create a new BasicInfo with this data.
     */
    create: XOR<BasicInfoCreateInput, BasicInfoUncheckedCreateInput>
    /**
     * In case the BasicInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BasicInfoUpdateInput, BasicInfoUncheckedUpdateInput>
  }

  /**
   * BasicInfo delete
   */
  export type BasicInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasicInfo
     */
    select?: BasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasicInfo
     */
    omit?: BasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasicInfoInclude<ExtArgs> | null
    /**
     * Filter which BasicInfo to delete.
     */
    where: BasicInfoWhereUniqueInput
  }

  /**
   * BasicInfo deleteMany
   */
  export type BasicInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BasicInfos to delete
     */
    where?: BasicInfoWhereInput
    /**
     * Limit how many BasicInfos to delete.
     */
    limit?: number
  }

  /**
   * BasicInfo.socials
   */
  export type BasicInfo$socialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
    where?: SocialWhereInput
  }

  /**
   * BasicInfo.user
   */
  export type BasicInfo$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * BasicInfo without action
   */
  export type BasicInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasicInfo
     */
    select?: BasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasicInfo
     */
    omit?: BasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasicInfoInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullname: string | null
    email: string | null
    username: string | null
    password: string | null
    profileImage: string | null
    role: $Enums.UserRole | null
    isGoogleAuth: boolean | null
    isEmailVerified: boolean | null
    isActive: boolean | null
    emailVerificationToken: string | null
    emailVerificationExpiry: Date | null
    forgotPasswordToken: string | null
    forgotPasswordExpiry: Date | null
    refreshToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
    basicInfoId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullname: string | null
    email: string | null
    username: string | null
    password: string | null
    profileImage: string | null
    role: $Enums.UserRole | null
    isGoogleAuth: boolean | null
    isEmailVerified: boolean | null
    isActive: boolean | null
    emailVerificationToken: string | null
    emailVerificationExpiry: Date | null
    forgotPasswordToken: string | null
    forgotPasswordExpiry: Date | null
    refreshToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
    basicInfoId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullname: number
    email: number
    username: number
    password: number
    profileImage: number
    role: number
    isGoogleAuth: number
    isEmailVerified: number
    isActive: number
    emailVerificationToken: number
    emailVerificationExpiry: number
    forgotPasswordToken: number
    forgotPasswordExpiry: number
    refreshToken: number
    createdAt: number
    updatedAt: number
    basicInfoId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    username?: true
    password?: true
    profileImage?: true
    role?: true
    isGoogleAuth?: true
    isEmailVerified?: true
    isActive?: true
    emailVerificationToken?: true
    emailVerificationExpiry?: true
    forgotPasswordToken?: true
    forgotPasswordExpiry?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
    basicInfoId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    username?: true
    password?: true
    profileImage?: true
    role?: true
    isGoogleAuth?: true
    isEmailVerified?: true
    isActive?: true
    emailVerificationToken?: true
    emailVerificationExpiry?: true
    forgotPasswordToken?: true
    forgotPasswordExpiry?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
    basicInfoId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    username?: true
    password?: true
    profileImage?: true
    role?: true
    isGoogleAuth?: true
    isEmailVerified?: true
    isActive?: true
    emailVerificationToken?: true
    emailVerificationExpiry?: true
    forgotPasswordToken?: true
    forgotPasswordExpiry?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
    basicInfoId?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullname: string | null
    email: string
    username: string | null
    password: string | null
    profileImage: string
    role: $Enums.UserRole
    isGoogleAuth: boolean
    isEmailVerified: boolean
    isActive: boolean
    emailVerificationToken: string | null
    emailVerificationExpiry: Date | null
    forgotPasswordToken: string | null
    forgotPasswordExpiry: Date | null
    refreshToken: string | null
    createdAt: Date
    updatedAt: Date
    basicInfoId: string | null
    _count: UserCountAggregateOutputType | null
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
    fullname?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    profileImage?: boolean
    role?: boolean
    isGoogleAuth?: boolean
    isEmailVerified?: boolean
    isActive?: boolean
    emailVerificationToken?: boolean
    emailVerificationExpiry?: boolean
    forgotPasswordToken?: boolean
    forgotPasswordExpiry?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    basicInfoId?: boolean
    problems?: boolean | User$problemsArgs<ExtArgs>
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    solvedProblems?: boolean | User$solvedProblemsArgs<ExtArgs>
    playlists?: boolean | User$playlistsArgs<ExtArgs>
    purchases?: boolean | User$purchasesArgs<ExtArgs>
    sheetAssignments?: boolean | User$sheetAssignmentsArgs<ExtArgs>
    basicInfo?: boolean | User$basicInfoArgs<ExtArgs>
    payment?: boolean | User$paymentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    profileImage?: boolean
    role?: boolean
    isGoogleAuth?: boolean
    isEmailVerified?: boolean
    isActive?: boolean
    emailVerificationToken?: boolean
    emailVerificationExpiry?: boolean
    forgotPasswordToken?: boolean
    forgotPasswordExpiry?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    basicInfoId?: boolean
    basicInfo?: boolean | User$basicInfoArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    profileImage?: boolean
    role?: boolean
    isGoogleAuth?: boolean
    isEmailVerified?: boolean
    isActive?: boolean
    emailVerificationToken?: boolean
    emailVerificationExpiry?: boolean
    forgotPasswordToken?: boolean
    forgotPasswordExpiry?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    basicInfoId?: boolean
    basicInfo?: boolean | User$basicInfoArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullname?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    profileImage?: boolean
    role?: boolean
    isGoogleAuth?: boolean
    isEmailVerified?: boolean
    isActive?: boolean
    emailVerificationToken?: boolean
    emailVerificationExpiry?: boolean
    forgotPasswordToken?: boolean
    forgotPasswordExpiry?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    basicInfoId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "email" | "username" | "password" | "profileImage" | "role" | "isGoogleAuth" | "isEmailVerified" | "isActive" | "emailVerificationToken" | "emailVerificationExpiry" | "forgotPasswordToken" | "forgotPasswordExpiry" | "refreshToken" | "createdAt" | "updatedAt" | "basicInfoId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | User$problemsArgs<ExtArgs>
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    solvedProblems?: boolean | User$solvedProblemsArgs<ExtArgs>
    playlists?: boolean | User$playlistsArgs<ExtArgs>
    purchases?: boolean | User$purchasesArgs<ExtArgs>
    sheetAssignments?: boolean | User$sheetAssignmentsArgs<ExtArgs>
    basicInfo?: boolean | User$basicInfoArgs<ExtArgs>
    payment?: boolean | User$paymentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    basicInfo?: boolean | User$basicInfoArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    basicInfo?: boolean | User$basicInfoArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      problems: Prisma.$ProblemPayload<ExtArgs>[]
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
      solvedProblems: Prisma.$SolvedProblemPayload<ExtArgs>[]
      playlists: Prisma.$PlaylistPayload<ExtArgs>[]
      purchases: Prisma.$PurchasePayload<ExtArgs>[]
      sheetAssignments: Prisma.$SheetProblemPayload<ExtArgs>[]
      basicInfo: Prisma.$BasicInfoPayload<ExtArgs> | null
      payment: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullname: string | null
      email: string
      username: string | null
      password: string | null
      profileImage: string
      role: $Enums.UserRole
      isGoogleAuth: boolean
      isEmailVerified: boolean
      isActive: boolean
      emailVerificationToken: string | null
      emailVerificationExpiry: Date | null
      forgotPasswordToken: string | null
      forgotPasswordExpiry: Date | null
      refreshToken: string | null
      createdAt: Date
      updatedAt: Date
      basicInfoId: string | null
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
    problems<T extends User$problemsArgs<ExtArgs> = {}>(args?: Subset<T, User$problemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submissions<T extends User$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    solvedProblems<T extends User$solvedProblemsArgs<ExtArgs> = {}>(args?: Subset<T, User$solvedProblemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolvedProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    playlists<T extends User$playlistsArgs<ExtArgs> = {}>(args?: Subset<T, User$playlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchases<T extends User$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, User$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sheetAssignments<T extends User$sheetAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$sheetAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    basicInfo<T extends User$basicInfoArgs<ExtArgs> = {}>(args?: Subset<T, User$basicInfoArgs<ExtArgs>>): Prisma__BasicInfoClient<$Result.GetResult<Prisma.$BasicInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payment<T extends User$paymentArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly fullname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isGoogleAuth: FieldRef<"User", 'Boolean'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly emailVerificationToken: FieldRef<"User", 'String'>
    readonly emailVerificationExpiry: FieldRef<"User", 'DateTime'>
    readonly forgotPasswordToken: FieldRef<"User", 'String'>
    readonly forgotPasswordExpiry: FieldRef<"User", 'DateTime'>
    readonly refreshToken: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly basicInfoId: FieldRef<"User", 'String'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.problems
   */
  export type User$problemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    where?: ProblemWhereInput
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    cursor?: ProblemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * User.submissions
   */
  export type User$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * User.solvedProblems
   */
  export type User$solvedProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedProblem
     */
    select?: SolvedProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedProblem
     */
    omit?: SolvedProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedProblemInclude<ExtArgs> | null
    where?: SolvedProblemWhereInput
    orderBy?: SolvedProblemOrderByWithRelationInput | SolvedProblemOrderByWithRelationInput[]
    cursor?: SolvedProblemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SolvedProblemScalarFieldEnum | SolvedProblemScalarFieldEnum[]
  }

  /**
   * User.playlists
   */
  export type User$playlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    cursor?: PlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * User.purchases
   */
  export type User$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * User.sheetAssignments
   */
  export type User$sheetAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetProblem
     */
    select?: SheetProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetProblem
     */
    omit?: SheetProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetProblemInclude<ExtArgs> | null
    where?: SheetProblemWhereInput
    orderBy?: SheetProblemOrderByWithRelationInput | SheetProblemOrderByWithRelationInput[]
    cursor?: SheetProblemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SheetProblemScalarFieldEnum | SheetProblemScalarFieldEnum[]
  }

  /**
   * User.basicInfo
   */
  export type User$basicInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasicInfo
     */
    select?: BasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasicInfo
     */
    omit?: BasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasicInfoInclude<ExtArgs> | null
    where?: BasicInfoWhereInput
  }

  /**
   * User.payment
   */
  export type User$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
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
   * Model Problem
   */

  export type AggregateProblem = {
    _count: ProblemCountAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  export type ProblemMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    difficulty: $Enums.Difficulty | null
    userId: string | null
    constraints: string | null
    editorial: string | null
    isDemo: boolean | null
    isPremium: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    difficulty: $Enums.Difficulty | null
    userId: string | null
    constraints: string | null
    editorial: string | null
    isDemo: boolean | null
    isPremium: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemCountAggregateOutputType = {
    id: number
    title: number
    description: number
    difficulty: number
    tags: number
    userId: number
    examples: number
    constraints: number
    hints: number
    editorial: number
    isDemo: number
    isPremium: number
    company: number
    testcases: number
    codeSnippets: number
    referenceSolutions: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProblemMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    userId?: true
    constraints?: true
    editorial?: true
    isDemo?: true
    isPremium?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    userId?: true
    constraints?: true
    editorial?: true
    isDemo?: true
    isPremium?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    tags?: true
    userId?: true
    examples?: true
    constraints?: true
    hints?: true
    editorial?: true
    isDemo?: true
    isPremium?: true
    company?: true
    testcases?: true
    codeSnippets?: true
    referenceSolutions?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProblemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problem to aggregate.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Problems
    **/
    _count?: true | ProblemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemMaxAggregateInputType
  }

  export type GetProblemAggregateType<T extends ProblemAggregateArgs> = {
        [P in keyof T & keyof AggregateProblem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblem[P]>
      : GetScalarType<T[P], AggregateProblem[P]>
  }




  export type ProblemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
    orderBy?: ProblemOrderByWithAggregationInput | ProblemOrderByWithAggregationInput[]
    by: ProblemScalarFieldEnum[] | ProblemScalarFieldEnum
    having?: ProblemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemCountAggregateInputType | true
    _min?: ProblemMinAggregateInputType
    _max?: ProblemMaxAggregateInputType
  }

  export type ProblemGroupByOutputType = {
    id: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags: string[]
    userId: string
    examples: JsonValue
    constraints: string
    hints: JsonValue | null
    editorial: string | null
    isDemo: boolean
    isPremium: boolean
    company: string[]
    testcases: JsonValue
    codeSnippets: JsonValue
    referenceSolutions: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: ProblemCountAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  type GetProblemGroupByPayload<T extends ProblemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemGroupByOutputType[P]>
        }
      >
    >


  export type ProblemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    isDemo?: boolean
    isPremium?: boolean
    company?: boolean
    testcases?: boolean
    codeSnippets?: boolean
    referenceSolutions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    submissions?: boolean | Problem$submissionsArgs<ExtArgs>
    sheetAssignments?: boolean | Problem$sheetAssignmentsArgs<ExtArgs>
    solvedBy?: boolean | Problem$solvedByArgs<ExtArgs>
    problemInPlaylist?: boolean | Problem$problemInPlaylistArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    isDemo?: boolean
    isPremium?: boolean
    company?: boolean
    testcases?: boolean
    codeSnippets?: boolean
    referenceSolutions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    isDemo?: boolean
    isPremium?: boolean
    company?: boolean
    testcases?: boolean
    codeSnippets?: boolean
    referenceSolutions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    isDemo?: boolean
    isPremium?: boolean
    company?: boolean
    testcases?: boolean
    codeSnippets?: boolean
    referenceSolutions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProblemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "difficulty" | "tags" | "userId" | "examples" | "constraints" | "hints" | "editorial" | "isDemo" | "isPremium" | "company" | "testcases" | "codeSnippets" | "referenceSolutions" | "createdAt" | "updatedAt", ExtArgs["result"]["problem"]>
  export type ProblemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    submissions?: boolean | Problem$submissionsArgs<ExtArgs>
    sheetAssignments?: boolean | Problem$sheetAssignmentsArgs<ExtArgs>
    solvedBy?: boolean | Problem$solvedByArgs<ExtArgs>
    problemInPlaylist?: boolean | Problem$problemInPlaylistArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProblemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProblemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProblemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Problem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
      sheetAssignments: Prisma.$SheetProblemPayload<ExtArgs>[]
      solvedBy: Prisma.$SolvedProblemPayload<ExtArgs>[]
      problemInPlaylist: Prisma.$ProblemInPlaylistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      difficulty: $Enums.Difficulty
      tags: string[]
      userId: string
      examples: Prisma.JsonValue
      constraints: string
      hints: Prisma.JsonValue | null
      editorial: string | null
      isDemo: boolean
      isPremium: boolean
      company: string[]
      testcases: Prisma.JsonValue
      codeSnippets: Prisma.JsonValue
      referenceSolutions: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["problem"]>
    composites: {}
  }

  type ProblemGetPayload<S extends boolean | null | undefined | ProblemDefaultArgs> = $Result.GetResult<Prisma.$ProblemPayload, S>

  type ProblemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProblemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemCountAggregateInputType | true
    }

  export interface ProblemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Problem'], meta: { name: 'Problem' } }
    /**
     * Find zero or one Problem that matches the filter.
     * @param {ProblemFindUniqueArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemFindUniqueArgs>(args: SelectSubset<T, ProblemFindUniqueArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Problem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemFindUniqueOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemFindUniqueOrThrowArgs>(args: SelectSubset<T, ProblemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemFindFirstArgs>(args?: SelectSubset<T, ProblemFindFirstArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemFindFirstOrThrowArgs>(args?: SelectSubset<T, ProblemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Problems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Problems
     * const problems = await prisma.problem.findMany()
     * 
     * // Get first 10 Problems
     * const problems = await prisma.problem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemWithIdOnly = await prisma.problem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProblemFindManyArgs>(args?: SelectSubset<T, ProblemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Problem.
     * @param {ProblemCreateArgs} args - Arguments to create a Problem.
     * @example
     * // Create one Problem
     * const Problem = await prisma.problem.create({
     *   data: {
     *     // ... data to create a Problem
     *   }
     * })
     * 
     */
    create<T extends ProblemCreateArgs>(args: SelectSubset<T, ProblemCreateArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Problems.
     * @param {ProblemCreateManyArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProblemCreateManyArgs>(args?: SelectSubset<T, ProblemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Problems and returns the data saved in the database.
     * @param {ProblemCreateManyAndReturnArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Problems and only return the `id`
     * const problemWithIdOnly = await prisma.problem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProblemCreateManyAndReturnArgs>(args?: SelectSubset<T, ProblemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Problem.
     * @param {ProblemDeleteArgs} args - Arguments to delete one Problem.
     * @example
     * // Delete one Problem
     * const Problem = await prisma.problem.delete({
     *   where: {
     *     // ... filter to delete one Problem
     *   }
     * })
     * 
     */
    delete<T extends ProblemDeleteArgs>(args: SelectSubset<T, ProblemDeleteArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Problem.
     * @param {ProblemUpdateArgs} args - Arguments to update one Problem.
     * @example
     * // Update one Problem
     * const problem = await prisma.problem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProblemUpdateArgs>(args: SelectSubset<T, ProblemUpdateArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Problems.
     * @param {ProblemDeleteManyArgs} args - Arguments to filter Problems to delete.
     * @example
     * // Delete a few Problems
     * const { count } = await prisma.problem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProblemDeleteManyArgs>(args?: SelectSubset<T, ProblemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProblemUpdateManyArgs>(args: SelectSubset<T, ProblemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems and returns the data updated in the database.
     * @param {ProblemUpdateManyAndReturnArgs} args - Arguments to update many Problems.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Problems and only return the `id`
     * const problemWithIdOnly = await prisma.problem.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProblemUpdateManyAndReturnArgs>(args: SelectSubset<T, ProblemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Problem.
     * @param {ProblemUpsertArgs} args - Arguments to update or create a Problem.
     * @example
     * // Update or create a Problem
     * const problem = await prisma.problem.upsert({
     *   create: {
     *     // ... data to create a Problem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Problem we want to update
     *   }
     * })
     */
    upsert<T extends ProblemUpsertArgs>(args: SelectSubset<T, ProblemUpsertArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemCountArgs} args - Arguments to filter Problems to count.
     * @example
     * // Count the number of Problems
     * const count = await prisma.problem.count({
     *   where: {
     *     // ... the filter for the Problems we want to count
     *   }
     * })
    **/
    count<T extends ProblemCountArgs>(
      args?: Subset<T, ProblemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProblemAggregateArgs>(args: Subset<T, ProblemAggregateArgs>): Prisma.PrismaPromise<GetProblemAggregateType<T>>

    /**
     * Group by Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemGroupByArgs} args - Group by arguments.
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
      T extends ProblemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemGroupByArgs['orderBy'] }
        : { orderBy?: ProblemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProblemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Problem model
   */
  readonly fields: ProblemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Problem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submissions<T extends Problem$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Problem$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sheetAssignments<T extends Problem$sheetAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Problem$sheetAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    solvedBy<T extends Problem$solvedByArgs<ExtArgs> = {}>(args?: Subset<T, Problem$solvedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolvedProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    problemInPlaylist<T extends Problem$problemInPlaylistArgs<ExtArgs> = {}>(args?: Subset<T, Problem$problemInPlaylistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemInPlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Problem model
   */
  interface ProblemFieldRefs {
    readonly id: FieldRef<"Problem", 'String'>
    readonly title: FieldRef<"Problem", 'String'>
    readonly description: FieldRef<"Problem", 'String'>
    readonly difficulty: FieldRef<"Problem", 'Difficulty'>
    readonly tags: FieldRef<"Problem", 'String[]'>
    readonly userId: FieldRef<"Problem", 'String'>
    readonly examples: FieldRef<"Problem", 'Json'>
    readonly constraints: FieldRef<"Problem", 'String'>
    readonly hints: FieldRef<"Problem", 'Json'>
    readonly editorial: FieldRef<"Problem", 'String'>
    readonly isDemo: FieldRef<"Problem", 'Boolean'>
    readonly isPremium: FieldRef<"Problem", 'Boolean'>
    readonly company: FieldRef<"Problem", 'String[]'>
    readonly testcases: FieldRef<"Problem", 'Json'>
    readonly codeSnippets: FieldRef<"Problem", 'Json'>
    readonly referenceSolutions: FieldRef<"Problem", 'Json'>
    readonly createdAt: FieldRef<"Problem", 'DateTime'>
    readonly updatedAt: FieldRef<"Problem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Problem findUnique
   */
  export type ProblemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem findUniqueOrThrow
   */
  export type ProblemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem findFirst
   */
  export type ProblemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem findFirstOrThrow
   */
  export type ProblemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem findMany
   */
  export type ProblemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problems to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem create
   */
  export type ProblemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to create a Problem.
     */
    data: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
  }

  /**
   * Problem createMany
   */
  export type ProblemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Problems.
     */
    data: ProblemCreateManyInput | ProblemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Problem createManyAndReturn
   */
  export type ProblemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * The data used to create many Problems.
     */
    data: ProblemCreateManyInput | ProblemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Problem update
   */
  export type ProblemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to update a Problem.
     */
    data: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
    /**
     * Choose, which Problem to update.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem updateMany
   */
  export type ProblemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Problems.
     */
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>
    /**
     * Filter which Problems to update
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to update.
     */
    limit?: number
  }

  /**
   * Problem updateManyAndReturn
   */
  export type ProblemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * The data used to update Problems.
     */
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>
    /**
     * Filter which Problems to update
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Problem upsert
   */
  export type ProblemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The filter to search for the Problem to update in case it exists.
     */
    where: ProblemWhereUniqueInput
    /**
     * In case the Problem found by the `where` argument doesn't exist, create a new Problem with this data.
     */
    create: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
    /**
     * In case the Problem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
  }

  /**
   * Problem delete
   */
  export type ProblemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter which Problem to delete.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem deleteMany
   */
  export type ProblemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problems to delete
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to delete.
     */
    limit?: number
  }

  /**
   * Problem.submissions
   */
  export type Problem$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Problem.sheetAssignments
   */
  export type Problem$sheetAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetProblem
     */
    select?: SheetProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetProblem
     */
    omit?: SheetProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetProblemInclude<ExtArgs> | null
    where?: SheetProblemWhereInput
    orderBy?: SheetProblemOrderByWithRelationInput | SheetProblemOrderByWithRelationInput[]
    cursor?: SheetProblemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SheetProblemScalarFieldEnum | SheetProblemScalarFieldEnum[]
  }

  /**
   * Problem.solvedBy
   */
  export type Problem$solvedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedProblem
     */
    select?: SolvedProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedProblem
     */
    omit?: SolvedProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedProblemInclude<ExtArgs> | null
    where?: SolvedProblemWhereInput
    orderBy?: SolvedProblemOrderByWithRelationInput | SolvedProblemOrderByWithRelationInput[]
    cursor?: SolvedProblemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SolvedProblemScalarFieldEnum | SolvedProblemScalarFieldEnum[]
  }

  /**
   * Problem.problemInPlaylist
   */
  export type Problem$problemInPlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null
    where?: ProblemInPlaylistWhereInput
    orderBy?: ProblemInPlaylistOrderByWithRelationInput | ProblemInPlaylistOrderByWithRelationInput[]
    cursor?: ProblemInPlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemInPlaylistScalarFieldEnum | ProblemInPlaylistScalarFieldEnum[]
  }

  /**
   * Problem without action
   */
  export type ProblemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: string | null
    language: string | null
    stdin: string | null
    stdout: string | null
    stderr: string | null
    compileOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
    feedback: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    problemId: string | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: string | null
    language: string | null
    stdin: string | null
    stdout: string | null
    stderr: string | null
    compileOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
    feedback: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    problemId: string | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    source_code: number
    language: number
    stdin: number
    stdout: number
    stderr: number
    compileOutput: number
    status: number
    memory: number
    time: number
    feedback: number
    createdAt: number
    updatedAt: number
    userId: number
    problemId: number
    _all: number
  }


  export type SubmissionMinAggregateInputType = {
    id?: true
    language?: true
    stdin?: true
    stdout?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    feedback?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    problemId?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    language?: true
    stdin?: true
    stdout?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    feedback?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    problemId?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    source_code?: true
    language?: true
    stdin?: true
    stdout?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    feedback?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    problemId?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: string
    source_code: JsonValue
    language: string
    stdin: string | null
    stdout: string | null
    stderr: string | null
    compileOutput: string | null
    status: string
    memory: string | null
    time: string | null
    feedback: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    problemId: string | null
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source_code?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    problemId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | Submission$problemArgs<ExtArgs>
    testCases?: boolean | Submission$testCasesArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source_code?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    problemId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | Submission$problemArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source_code?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    problemId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | Submission$problemArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectScalar = {
    id?: boolean
    source_code?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    problemId?: boolean
  }

  export type SubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "source_code" | "language" | "stdin" | "stdout" | "stderr" | "compileOutput" | "status" | "memory" | "time" | "feedback" | "createdAt" | "updatedAt" | "userId" | "problemId", ExtArgs["result"]["submission"]>
  export type SubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | Submission$problemArgs<ExtArgs>
    testCases?: boolean | Submission$testCasesArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | Submission$problemArgs<ExtArgs>
  }
  export type SubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | Submission$problemArgs<ExtArgs>
  }

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      problem: Prisma.$ProblemPayload<ExtArgs> | null
      testCases: Prisma.$TestcasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      source_code: Prisma.JsonValue
      language: string
      stdin: string | null
      stdout: string | null
      stderr: string | null
      compileOutput: string | null
      status: string
      memory: string | null
      time: string | null
      feedback: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
      problemId: string | null
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {SubmissionCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions and returns the data updated in the database.
     * @param {SubmissionUpdateManyAndReturnArgs} args - Arguments to update many Submissions.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
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
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends Submission$problemArgs<ExtArgs> = {}>(args?: Subset<T, Submission$problemArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    testCases<T extends Submission$testCasesArgs<ExtArgs> = {}>(args?: Subset<T, Submission$testCasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestcasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Submission model
   */
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'String'>
    readonly source_code: FieldRef<"Submission", 'Json'>
    readonly language: FieldRef<"Submission", 'String'>
    readonly stdin: FieldRef<"Submission", 'String'>
    readonly stdout: FieldRef<"Submission", 'String'>
    readonly stderr: FieldRef<"Submission", 'String'>
    readonly compileOutput: FieldRef<"Submission", 'String'>
    readonly status: FieldRef<"Submission", 'String'>
    readonly memory: FieldRef<"Submission", 'String'>
    readonly time: FieldRef<"Submission", 'String'>
    readonly feedback: FieldRef<"Submission", 'String'>
    readonly createdAt: FieldRef<"Submission", 'DateTime'>
    readonly updatedAt: FieldRef<"Submission", 'DateTime'>
    readonly userId: FieldRef<"Submission", 'String'>
    readonly problemId: FieldRef<"Submission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Submission createManyAndReturn
   */
  export type SubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
  }

  /**
   * Submission updateManyAndReturn
   */
  export type SubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to delete.
     */
    limit?: number
  }

  /**
   * Submission.problem
   */
  export type Submission$problemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    where?: ProblemWhereInput
  }

  /**
   * Submission.testCases
   */
  export type Submission$testCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testcase
     */
    select?: TestcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testcase
     */
    omit?: TestcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestcaseInclude<ExtArgs> | null
    where?: TestcaseWhereInput
    orderBy?: TestcaseOrderByWithRelationInput | TestcaseOrderByWithRelationInput[]
    cursor?: TestcaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestcaseScalarFieldEnum | TestcaseScalarFieldEnum[]
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
  }


  /**
   * Model Testcase
   */

  export type AggregateTestcase = {
    _count: TestcaseCountAggregateOutputType | null
    _avg: TestcaseAvgAggregateOutputType | null
    _sum: TestcaseSumAggregateOutputType | null
    _min: TestcaseMinAggregateOutputType | null
    _max: TestcaseMaxAggregateOutputType | null
  }

  export type TestcaseAvgAggregateOutputType = {
    testCase: number | null
  }

  export type TestcaseSumAggregateOutputType = {
    testCase: number | null
  }

  export type TestcaseMinAggregateOutputType = {
    id: string | null
    testCase: number | null
    passed: boolean | null
    stdout: string | null
    stderr: string | null
    expected: string | null
    compileOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
    submissionId: string | null
  }

  export type TestcaseMaxAggregateOutputType = {
    id: string | null
    testCase: number | null
    passed: boolean | null
    stdout: string | null
    stderr: string | null
    expected: string | null
    compileOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
    submissionId: string | null
  }

  export type TestcaseCountAggregateOutputType = {
    id: number
    testCase: number
    passed: number
    stdout: number
    stderr: number
    expected: number
    compileOutput: number
    status: number
    memory: number
    time: number
    createdAt: number
    updatedAt: number
    submissionId: number
    _all: number
  }


  export type TestcaseAvgAggregateInputType = {
    testCase?: true
  }

  export type TestcaseSumAggregateInputType = {
    testCase?: true
  }

  export type TestcaseMinAggregateInputType = {
    id?: true
    testCase?: true
    passed?: true
    stdout?: true
    stderr?: true
    expected?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
    submissionId?: true
  }

  export type TestcaseMaxAggregateInputType = {
    id?: true
    testCase?: true
    passed?: true
    stdout?: true
    stderr?: true
    expected?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
    submissionId?: true
  }

  export type TestcaseCountAggregateInputType = {
    id?: true
    testCase?: true
    passed?: true
    stdout?: true
    stderr?: true
    expected?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
    submissionId?: true
    _all?: true
  }

  export type TestcaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testcase to aggregate.
     */
    where?: TestcaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testcases to fetch.
     */
    orderBy?: TestcaseOrderByWithRelationInput | TestcaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestcaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testcases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testcases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Testcases
    **/
    _count?: true | TestcaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestcaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestcaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestcaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestcaseMaxAggregateInputType
  }

  export type GetTestcaseAggregateType<T extends TestcaseAggregateArgs> = {
        [P in keyof T & keyof AggregateTestcase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestcase[P]>
      : GetScalarType<T[P], AggregateTestcase[P]>
  }




  export type TestcaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestcaseWhereInput
    orderBy?: TestcaseOrderByWithAggregationInput | TestcaseOrderByWithAggregationInput[]
    by: TestcaseScalarFieldEnum[] | TestcaseScalarFieldEnum
    having?: TestcaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestcaseCountAggregateInputType | true
    _avg?: TestcaseAvgAggregateInputType
    _sum?: TestcaseSumAggregateInputType
    _min?: TestcaseMinAggregateInputType
    _max?: TestcaseMaxAggregateInputType
  }

  export type TestcaseGroupByOutputType = {
    id: string
    testCase: number
    passed: boolean
    stdout: string | null
    stderr: string | null
    expected: string
    compileOutput: string | null
    status: string
    memory: string | null
    time: string | null
    createdAt: Date
    updatedAt: Date
    submissionId: string | null
    _count: TestcaseCountAggregateOutputType | null
    _avg: TestcaseAvgAggregateOutputType | null
    _sum: TestcaseSumAggregateOutputType | null
    _min: TestcaseMinAggregateOutputType | null
    _max: TestcaseMaxAggregateOutputType | null
  }

  type GetTestcaseGroupByPayload<T extends TestcaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestcaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestcaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestcaseGroupByOutputType[P]>
            : GetScalarType<T[P], TestcaseGroupByOutputType[P]>
        }
      >
    >


  export type TestcaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testCase?: boolean
    passed?: boolean
    stdout?: boolean
    stderr?: boolean
    expected?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submissionId?: boolean
    submission?: boolean | Testcase$submissionArgs<ExtArgs>
  }, ExtArgs["result"]["testcase"]>

  export type TestcaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testCase?: boolean
    passed?: boolean
    stdout?: boolean
    stderr?: boolean
    expected?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submissionId?: boolean
    submission?: boolean | Testcase$submissionArgs<ExtArgs>
  }, ExtArgs["result"]["testcase"]>

  export type TestcaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testCase?: boolean
    passed?: boolean
    stdout?: boolean
    stderr?: boolean
    expected?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submissionId?: boolean
    submission?: boolean | Testcase$submissionArgs<ExtArgs>
  }, ExtArgs["result"]["testcase"]>

  export type TestcaseSelectScalar = {
    id?: boolean
    testCase?: boolean
    passed?: boolean
    stdout?: boolean
    stderr?: boolean
    expected?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submissionId?: boolean
  }

  export type TestcaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "testCase" | "passed" | "stdout" | "stderr" | "expected" | "compileOutput" | "status" | "memory" | "time" | "createdAt" | "updatedAt" | "submissionId", ExtArgs["result"]["testcase"]>
  export type TestcaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | Testcase$submissionArgs<ExtArgs>
  }
  export type TestcaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | Testcase$submissionArgs<ExtArgs>
  }
  export type TestcaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | Testcase$submissionArgs<ExtArgs>
  }

  export type $TestcasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Testcase"
    objects: {
      submission: Prisma.$SubmissionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      testCase: number
      passed: boolean
      stdout: string | null
      stderr: string | null
      expected: string
      compileOutput: string | null
      status: string
      memory: string | null
      time: string | null
      createdAt: Date
      updatedAt: Date
      submissionId: string | null
    }, ExtArgs["result"]["testcase"]>
    composites: {}
  }

  type TestcaseGetPayload<S extends boolean | null | undefined | TestcaseDefaultArgs> = $Result.GetResult<Prisma.$TestcasePayload, S>

  type TestcaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestcaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestcaseCountAggregateInputType | true
    }

  export interface TestcaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Testcase'], meta: { name: 'Testcase' } }
    /**
     * Find zero or one Testcase that matches the filter.
     * @param {TestcaseFindUniqueArgs} args - Arguments to find a Testcase
     * @example
     * // Get one Testcase
     * const testcase = await prisma.testcase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestcaseFindUniqueArgs>(args: SelectSubset<T, TestcaseFindUniqueArgs<ExtArgs>>): Prisma__TestcaseClient<$Result.GetResult<Prisma.$TestcasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Testcase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestcaseFindUniqueOrThrowArgs} args - Arguments to find a Testcase
     * @example
     * // Get one Testcase
     * const testcase = await prisma.testcase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestcaseFindUniqueOrThrowArgs>(args: SelectSubset<T, TestcaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestcaseClient<$Result.GetResult<Prisma.$TestcasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testcase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestcaseFindFirstArgs} args - Arguments to find a Testcase
     * @example
     * // Get one Testcase
     * const testcase = await prisma.testcase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestcaseFindFirstArgs>(args?: SelectSubset<T, TestcaseFindFirstArgs<ExtArgs>>): Prisma__TestcaseClient<$Result.GetResult<Prisma.$TestcasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testcase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestcaseFindFirstOrThrowArgs} args - Arguments to find a Testcase
     * @example
     * // Get one Testcase
     * const testcase = await prisma.testcase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestcaseFindFirstOrThrowArgs>(args?: SelectSubset<T, TestcaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestcaseClient<$Result.GetResult<Prisma.$TestcasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Testcases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestcaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Testcases
     * const testcases = await prisma.testcase.findMany()
     * 
     * // Get first 10 Testcases
     * const testcases = await prisma.testcase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testcaseWithIdOnly = await prisma.testcase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestcaseFindManyArgs>(args?: SelectSubset<T, TestcaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestcasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Testcase.
     * @param {TestcaseCreateArgs} args - Arguments to create a Testcase.
     * @example
     * // Create one Testcase
     * const Testcase = await prisma.testcase.create({
     *   data: {
     *     // ... data to create a Testcase
     *   }
     * })
     * 
     */
    create<T extends TestcaseCreateArgs>(args: SelectSubset<T, TestcaseCreateArgs<ExtArgs>>): Prisma__TestcaseClient<$Result.GetResult<Prisma.$TestcasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Testcases.
     * @param {TestcaseCreateManyArgs} args - Arguments to create many Testcases.
     * @example
     * // Create many Testcases
     * const testcase = await prisma.testcase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestcaseCreateManyArgs>(args?: SelectSubset<T, TestcaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Testcases and returns the data saved in the database.
     * @param {TestcaseCreateManyAndReturnArgs} args - Arguments to create many Testcases.
     * @example
     * // Create many Testcases
     * const testcase = await prisma.testcase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Testcases and only return the `id`
     * const testcaseWithIdOnly = await prisma.testcase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestcaseCreateManyAndReturnArgs>(args?: SelectSubset<T, TestcaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestcasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Testcase.
     * @param {TestcaseDeleteArgs} args - Arguments to delete one Testcase.
     * @example
     * // Delete one Testcase
     * const Testcase = await prisma.testcase.delete({
     *   where: {
     *     // ... filter to delete one Testcase
     *   }
     * })
     * 
     */
    delete<T extends TestcaseDeleteArgs>(args: SelectSubset<T, TestcaseDeleteArgs<ExtArgs>>): Prisma__TestcaseClient<$Result.GetResult<Prisma.$TestcasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Testcase.
     * @param {TestcaseUpdateArgs} args - Arguments to update one Testcase.
     * @example
     * // Update one Testcase
     * const testcase = await prisma.testcase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestcaseUpdateArgs>(args: SelectSubset<T, TestcaseUpdateArgs<ExtArgs>>): Prisma__TestcaseClient<$Result.GetResult<Prisma.$TestcasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Testcases.
     * @param {TestcaseDeleteManyArgs} args - Arguments to filter Testcases to delete.
     * @example
     * // Delete a few Testcases
     * const { count } = await prisma.testcase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestcaseDeleteManyArgs>(args?: SelectSubset<T, TestcaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testcases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestcaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Testcases
     * const testcase = await prisma.testcase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestcaseUpdateManyArgs>(args: SelectSubset<T, TestcaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testcases and returns the data updated in the database.
     * @param {TestcaseUpdateManyAndReturnArgs} args - Arguments to update many Testcases.
     * @example
     * // Update many Testcases
     * const testcase = await prisma.testcase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Testcases and only return the `id`
     * const testcaseWithIdOnly = await prisma.testcase.updateManyAndReturn({
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
    updateManyAndReturn<T extends TestcaseUpdateManyAndReturnArgs>(args: SelectSubset<T, TestcaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestcasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Testcase.
     * @param {TestcaseUpsertArgs} args - Arguments to update or create a Testcase.
     * @example
     * // Update or create a Testcase
     * const testcase = await prisma.testcase.upsert({
     *   create: {
     *     // ... data to create a Testcase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Testcase we want to update
     *   }
     * })
     */
    upsert<T extends TestcaseUpsertArgs>(args: SelectSubset<T, TestcaseUpsertArgs<ExtArgs>>): Prisma__TestcaseClient<$Result.GetResult<Prisma.$TestcasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Testcases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestcaseCountArgs} args - Arguments to filter Testcases to count.
     * @example
     * // Count the number of Testcases
     * const count = await prisma.testcase.count({
     *   where: {
     *     // ... the filter for the Testcases we want to count
     *   }
     * })
    **/
    count<T extends TestcaseCountArgs>(
      args?: Subset<T, TestcaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestcaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Testcase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestcaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestcaseAggregateArgs>(args: Subset<T, TestcaseAggregateArgs>): Prisma.PrismaPromise<GetTestcaseAggregateType<T>>

    /**
     * Group by Testcase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestcaseGroupByArgs} args - Group by arguments.
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
      T extends TestcaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestcaseGroupByArgs['orderBy'] }
        : { orderBy?: TestcaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestcaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestcaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Testcase model
   */
  readonly fields: TestcaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Testcase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestcaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submission<T extends Testcase$submissionArgs<ExtArgs> = {}>(args?: Subset<T, Testcase$submissionArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Testcase model
   */
  interface TestcaseFieldRefs {
    readonly id: FieldRef<"Testcase", 'String'>
    readonly testCase: FieldRef<"Testcase", 'Int'>
    readonly passed: FieldRef<"Testcase", 'Boolean'>
    readonly stdout: FieldRef<"Testcase", 'String'>
    readonly stderr: FieldRef<"Testcase", 'String'>
    readonly expected: FieldRef<"Testcase", 'String'>
    readonly compileOutput: FieldRef<"Testcase", 'String'>
    readonly status: FieldRef<"Testcase", 'String'>
    readonly memory: FieldRef<"Testcase", 'String'>
    readonly time: FieldRef<"Testcase", 'String'>
    readonly createdAt: FieldRef<"Testcase", 'DateTime'>
    readonly updatedAt: FieldRef<"Testcase", 'DateTime'>
    readonly submissionId: FieldRef<"Testcase", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Testcase findUnique
   */
  export type TestcaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testcase
     */
    select?: TestcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testcase
     */
    omit?: TestcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestcaseInclude<ExtArgs> | null
    /**
     * Filter, which Testcase to fetch.
     */
    where: TestcaseWhereUniqueInput
  }

  /**
   * Testcase findUniqueOrThrow
   */
  export type TestcaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testcase
     */
    select?: TestcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testcase
     */
    omit?: TestcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestcaseInclude<ExtArgs> | null
    /**
     * Filter, which Testcase to fetch.
     */
    where: TestcaseWhereUniqueInput
  }

  /**
   * Testcase findFirst
   */
  export type TestcaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testcase
     */
    select?: TestcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testcase
     */
    omit?: TestcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestcaseInclude<ExtArgs> | null
    /**
     * Filter, which Testcase to fetch.
     */
    where?: TestcaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testcases to fetch.
     */
    orderBy?: TestcaseOrderByWithRelationInput | TestcaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testcases.
     */
    cursor?: TestcaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testcases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testcases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testcases.
     */
    distinct?: TestcaseScalarFieldEnum | TestcaseScalarFieldEnum[]
  }

  /**
   * Testcase findFirstOrThrow
   */
  export type TestcaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testcase
     */
    select?: TestcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testcase
     */
    omit?: TestcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestcaseInclude<ExtArgs> | null
    /**
     * Filter, which Testcase to fetch.
     */
    where?: TestcaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testcases to fetch.
     */
    orderBy?: TestcaseOrderByWithRelationInput | TestcaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testcases.
     */
    cursor?: TestcaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testcases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testcases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testcases.
     */
    distinct?: TestcaseScalarFieldEnum | TestcaseScalarFieldEnum[]
  }

  /**
   * Testcase findMany
   */
  export type TestcaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testcase
     */
    select?: TestcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testcase
     */
    omit?: TestcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestcaseInclude<ExtArgs> | null
    /**
     * Filter, which Testcases to fetch.
     */
    where?: TestcaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testcases to fetch.
     */
    orderBy?: TestcaseOrderByWithRelationInput | TestcaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Testcases.
     */
    cursor?: TestcaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testcases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testcases.
     */
    skip?: number
    distinct?: TestcaseScalarFieldEnum | TestcaseScalarFieldEnum[]
  }

  /**
   * Testcase create
   */
  export type TestcaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testcase
     */
    select?: TestcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testcase
     */
    omit?: TestcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestcaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Testcase.
     */
    data: XOR<TestcaseCreateInput, TestcaseUncheckedCreateInput>
  }

  /**
   * Testcase createMany
   */
  export type TestcaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Testcases.
     */
    data: TestcaseCreateManyInput | TestcaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Testcase createManyAndReturn
   */
  export type TestcaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testcase
     */
    select?: TestcaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Testcase
     */
    omit?: TestcaseOmit<ExtArgs> | null
    /**
     * The data used to create many Testcases.
     */
    data: TestcaseCreateManyInput | TestcaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestcaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Testcase update
   */
  export type TestcaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testcase
     */
    select?: TestcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testcase
     */
    omit?: TestcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestcaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Testcase.
     */
    data: XOR<TestcaseUpdateInput, TestcaseUncheckedUpdateInput>
    /**
     * Choose, which Testcase to update.
     */
    where: TestcaseWhereUniqueInput
  }

  /**
   * Testcase updateMany
   */
  export type TestcaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Testcases.
     */
    data: XOR<TestcaseUpdateManyMutationInput, TestcaseUncheckedUpdateManyInput>
    /**
     * Filter which Testcases to update
     */
    where?: TestcaseWhereInput
    /**
     * Limit how many Testcases to update.
     */
    limit?: number
  }

  /**
   * Testcase updateManyAndReturn
   */
  export type TestcaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testcase
     */
    select?: TestcaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Testcase
     */
    omit?: TestcaseOmit<ExtArgs> | null
    /**
     * The data used to update Testcases.
     */
    data: XOR<TestcaseUpdateManyMutationInput, TestcaseUncheckedUpdateManyInput>
    /**
     * Filter which Testcases to update
     */
    where?: TestcaseWhereInput
    /**
     * Limit how many Testcases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestcaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Testcase upsert
   */
  export type TestcaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testcase
     */
    select?: TestcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testcase
     */
    omit?: TestcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestcaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Testcase to update in case it exists.
     */
    where: TestcaseWhereUniqueInput
    /**
     * In case the Testcase found by the `where` argument doesn't exist, create a new Testcase with this data.
     */
    create: XOR<TestcaseCreateInput, TestcaseUncheckedCreateInput>
    /**
     * In case the Testcase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestcaseUpdateInput, TestcaseUncheckedUpdateInput>
  }

  /**
   * Testcase delete
   */
  export type TestcaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testcase
     */
    select?: TestcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testcase
     */
    omit?: TestcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestcaseInclude<ExtArgs> | null
    /**
     * Filter which Testcase to delete.
     */
    where: TestcaseWhereUniqueInput
  }

  /**
   * Testcase deleteMany
   */
  export type TestcaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testcases to delete
     */
    where?: TestcaseWhereInput
    /**
     * Limit how many Testcases to delete.
     */
    limit?: number
  }

  /**
   * Testcase.submission
   */
  export type Testcase$submissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
  }

  /**
   * Testcase without action
   */
  export type TestcaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testcase
     */
    select?: TestcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testcase
     */
    omit?: TestcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestcaseInclude<ExtArgs> | null
  }


  /**
   * Model SolvedProblem
   */

  export type AggregateSolvedProblem = {
    _count: SolvedProblemCountAggregateOutputType | null
    _min: SolvedProblemMinAggregateOutputType | null
    _max: SolvedProblemMaxAggregateOutputType | null
  }

  export type SolvedProblemMinAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SolvedProblemMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SolvedProblemCountAggregateOutputType = {
    id: number
    userId: number
    problemId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SolvedProblemMinAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SolvedProblemMaxAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SolvedProblemCountAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SolvedProblemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SolvedProblem to aggregate.
     */
    where?: SolvedProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolvedProblems to fetch.
     */
    orderBy?: SolvedProblemOrderByWithRelationInput | SolvedProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SolvedProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolvedProblems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolvedProblems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SolvedProblems
    **/
    _count?: true | SolvedProblemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SolvedProblemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SolvedProblemMaxAggregateInputType
  }

  export type GetSolvedProblemAggregateType<T extends SolvedProblemAggregateArgs> = {
        [P in keyof T & keyof AggregateSolvedProblem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolvedProblem[P]>
      : GetScalarType<T[P], AggregateSolvedProblem[P]>
  }




  export type SolvedProblemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolvedProblemWhereInput
    orderBy?: SolvedProblemOrderByWithAggregationInput | SolvedProblemOrderByWithAggregationInput[]
    by: SolvedProblemScalarFieldEnum[] | SolvedProblemScalarFieldEnum
    having?: SolvedProblemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SolvedProblemCountAggregateInputType | true
    _min?: SolvedProblemMinAggregateInputType
    _max?: SolvedProblemMaxAggregateInputType
  }

  export type SolvedProblemGroupByOutputType = {
    id: string
    userId: string | null
    problemId: string | null
    createdAt: Date
    updatedAt: Date
    _count: SolvedProblemCountAggregateOutputType | null
    _min: SolvedProblemMinAggregateOutputType | null
    _max: SolvedProblemMaxAggregateOutputType | null
  }

  type GetSolvedProblemGroupByPayload<T extends SolvedProblemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SolvedProblemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SolvedProblemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SolvedProblemGroupByOutputType[P]>
            : GetScalarType<T[P], SolvedProblemGroupByOutputType[P]>
        }
      >
    >


  export type SolvedProblemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | SolvedProblem$userArgs<ExtArgs>
    problem?: boolean | SolvedProblem$problemArgs<ExtArgs>
  }, ExtArgs["result"]["solvedProblem"]>

  export type SolvedProblemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | SolvedProblem$userArgs<ExtArgs>
    problem?: boolean | SolvedProblem$problemArgs<ExtArgs>
  }, ExtArgs["result"]["solvedProblem"]>

  export type SolvedProblemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | SolvedProblem$userArgs<ExtArgs>
    problem?: boolean | SolvedProblem$problemArgs<ExtArgs>
  }, ExtArgs["result"]["solvedProblem"]>

  export type SolvedProblemSelectScalar = {
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SolvedProblemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "problemId" | "createdAt" | "updatedAt", ExtArgs["result"]["solvedProblem"]>
  export type SolvedProblemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SolvedProblem$userArgs<ExtArgs>
    problem?: boolean | SolvedProblem$problemArgs<ExtArgs>
  }
  export type SolvedProblemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SolvedProblem$userArgs<ExtArgs>
    problem?: boolean | SolvedProblem$problemArgs<ExtArgs>
  }
  export type SolvedProblemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SolvedProblem$userArgs<ExtArgs>
    problem?: boolean | SolvedProblem$problemArgs<ExtArgs>
  }

  export type $SolvedProblemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SolvedProblem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      problem: Prisma.$ProblemPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      problemId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["solvedProblem"]>
    composites: {}
  }

  type SolvedProblemGetPayload<S extends boolean | null | undefined | SolvedProblemDefaultArgs> = $Result.GetResult<Prisma.$SolvedProblemPayload, S>

  type SolvedProblemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SolvedProblemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SolvedProblemCountAggregateInputType | true
    }

  export interface SolvedProblemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SolvedProblem'], meta: { name: 'SolvedProblem' } }
    /**
     * Find zero or one SolvedProblem that matches the filter.
     * @param {SolvedProblemFindUniqueArgs} args - Arguments to find a SolvedProblem
     * @example
     * // Get one SolvedProblem
     * const solvedProblem = await prisma.solvedProblem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SolvedProblemFindUniqueArgs>(args: SelectSubset<T, SolvedProblemFindUniqueArgs<ExtArgs>>): Prisma__SolvedProblemClient<$Result.GetResult<Prisma.$SolvedProblemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SolvedProblem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SolvedProblemFindUniqueOrThrowArgs} args - Arguments to find a SolvedProblem
     * @example
     * // Get one SolvedProblem
     * const solvedProblem = await prisma.solvedProblem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SolvedProblemFindUniqueOrThrowArgs>(args: SelectSubset<T, SolvedProblemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SolvedProblemClient<$Result.GetResult<Prisma.$SolvedProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SolvedProblem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedProblemFindFirstArgs} args - Arguments to find a SolvedProblem
     * @example
     * // Get one SolvedProblem
     * const solvedProblem = await prisma.solvedProblem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SolvedProblemFindFirstArgs>(args?: SelectSubset<T, SolvedProblemFindFirstArgs<ExtArgs>>): Prisma__SolvedProblemClient<$Result.GetResult<Prisma.$SolvedProblemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SolvedProblem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedProblemFindFirstOrThrowArgs} args - Arguments to find a SolvedProblem
     * @example
     * // Get one SolvedProblem
     * const solvedProblem = await prisma.solvedProblem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SolvedProblemFindFirstOrThrowArgs>(args?: SelectSubset<T, SolvedProblemFindFirstOrThrowArgs<ExtArgs>>): Prisma__SolvedProblemClient<$Result.GetResult<Prisma.$SolvedProblemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SolvedProblems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedProblemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SolvedProblems
     * const solvedProblems = await prisma.solvedProblem.findMany()
     * 
     * // Get first 10 SolvedProblems
     * const solvedProblems = await prisma.solvedProblem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const solvedProblemWithIdOnly = await prisma.solvedProblem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SolvedProblemFindManyArgs>(args?: SelectSubset<T, SolvedProblemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolvedProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SolvedProblem.
     * @param {SolvedProblemCreateArgs} args - Arguments to create a SolvedProblem.
     * @example
     * // Create one SolvedProblem
     * const SolvedProblem = await prisma.solvedProblem.create({
     *   data: {
     *     // ... data to create a SolvedProblem
     *   }
     * })
     * 
     */
    create<T extends SolvedProblemCreateArgs>(args: SelectSubset<T, SolvedProblemCreateArgs<ExtArgs>>): Prisma__SolvedProblemClient<$Result.GetResult<Prisma.$SolvedProblemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SolvedProblems.
     * @param {SolvedProblemCreateManyArgs} args - Arguments to create many SolvedProblems.
     * @example
     * // Create many SolvedProblems
     * const solvedProblem = await prisma.solvedProblem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SolvedProblemCreateManyArgs>(args?: SelectSubset<T, SolvedProblemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SolvedProblems and returns the data saved in the database.
     * @param {SolvedProblemCreateManyAndReturnArgs} args - Arguments to create many SolvedProblems.
     * @example
     * // Create many SolvedProblems
     * const solvedProblem = await prisma.solvedProblem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SolvedProblems and only return the `id`
     * const solvedProblemWithIdOnly = await prisma.solvedProblem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SolvedProblemCreateManyAndReturnArgs>(args?: SelectSubset<T, SolvedProblemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolvedProblemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SolvedProblem.
     * @param {SolvedProblemDeleteArgs} args - Arguments to delete one SolvedProblem.
     * @example
     * // Delete one SolvedProblem
     * const SolvedProblem = await prisma.solvedProblem.delete({
     *   where: {
     *     // ... filter to delete one SolvedProblem
     *   }
     * })
     * 
     */
    delete<T extends SolvedProblemDeleteArgs>(args: SelectSubset<T, SolvedProblemDeleteArgs<ExtArgs>>): Prisma__SolvedProblemClient<$Result.GetResult<Prisma.$SolvedProblemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SolvedProblem.
     * @param {SolvedProblemUpdateArgs} args - Arguments to update one SolvedProblem.
     * @example
     * // Update one SolvedProblem
     * const solvedProblem = await prisma.solvedProblem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SolvedProblemUpdateArgs>(args: SelectSubset<T, SolvedProblemUpdateArgs<ExtArgs>>): Prisma__SolvedProblemClient<$Result.GetResult<Prisma.$SolvedProblemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SolvedProblems.
     * @param {SolvedProblemDeleteManyArgs} args - Arguments to filter SolvedProblems to delete.
     * @example
     * // Delete a few SolvedProblems
     * const { count } = await prisma.solvedProblem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SolvedProblemDeleteManyArgs>(args?: SelectSubset<T, SolvedProblemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SolvedProblems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedProblemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SolvedProblems
     * const solvedProblem = await prisma.solvedProblem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SolvedProblemUpdateManyArgs>(args: SelectSubset<T, SolvedProblemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SolvedProblems and returns the data updated in the database.
     * @param {SolvedProblemUpdateManyAndReturnArgs} args - Arguments to update many SolvedProblems.
     * @example
     * // Update many SolvedProblems
     * const solvedProblem = await prisma.solvedProblem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SolvedProblems and only return the `id`
     * const solvedProblemWithIdOnly = await prisma.solvedProblem.updateManyAndReturn({
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
    updateManyAndReturn<T extends SolvedProblemUpdateManyAndReturnArgs>(args: SelectSubset<T, SolvedProblemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolvedProblemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SolvedProblem.
     * @param {SolvedProblemUpsertArgs} args - Arguments to update or create a SolvedProblem.
     * @example
     * // Update or create a SolvedProblem
     * const solvedProblem = await prisma.solvedProblem.upsert({
     *   create: {
     *     // ... data to create a SolvedProblem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SolvedProblem we want to update
     *   }
     * })
     */
    upsert<T extends SolvedProblemUpsertArgs>(args: SelectSubset<T, SolvedProblemUpsertArgs<ExtArgs>>): Prisma__SolvedProblemClient<$Result.GetResult<Prisma.$SolvedProblemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SolvedProblems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedProblemCountArgs} args - Arguments to filter SolvedProblems to count.
     * @example
     * // Count the number of SolvedProblems
     * const count = await prisma.solvedProblem.count({
     *   where: {
     *     // ... the filter for the SolvedProblems we want to count
     *   }
     * })
    **/
    count<T extends SolvedProblemCountArgs>(
      args?: Subset<T, SolvedProblemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SolvedProblemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SolvedProblem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedProblemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SolvedProblemAggregateArgs>(args: Subset<T, SolvedProblemAggregateArgs>): Prisma.PrismaPromise<GetSolvedProblemAggregateType<T>>

    /**
     * Group by SolvedProblem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedProblemGroupByArgs} args - Group by arguments.
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
      T extends SolvedProblemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SolvedProblemGroupByArgs['orderBy'] }
        : { orderBy?: SolvedProblemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SolvedProblemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolvedProblemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SolvedProblem model
   */
  readonly fields: SolvedProblemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SolvedProblem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SolvedProblemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends SolvedProblem$userArgs<ExtArgs> = {}>(args?: Subset<T, SolvedProblem$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    problem<T extends SolvedProblem$problemArgs<ExtArgs> = {}>(args?: Subset<T, SolvedProblem$problemArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SolvedProblem model
   */
  interface SolvedProblemFieldRefs {
    readonly id: FieldRef<"SolvedProblem", 'String'>
    readonly userId: FieldRef<"SolvedProblem", 'String'>
    readonly problemId: FieldRef<"SolvedProblem", 'String'>
    readonly createdAt: FieldRef<"SolvedProblem", 'DateTime'>
    readonly updatedAt: FieldRef<"SolvedProblem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SolvedProblem findUnique
   */
  export type SolvedProblemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedProblem
     */
    select?: SolvedProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedProblem
     */
    omit?: SolvedProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedProblemInclude<ExtArgs> | null
    /**
     * Filter, which SolvedProblem to fetch.
     */
    where: SolvedProblemWhereUniqueInput
  }

  /**
   * SolvedProblem findUniqueOrThrow
   */
  export type SolvedProblemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedProblem
     */
    select?: SolvedProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedProblem
     */
    omit?: SolvedProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedProblemInclude<ExtArgs> | null
    /**
     * Filter, which SolvedProblem to fetch.
     */
    where: SolvedProblemWhereUniqueInput
  }

  /**
   * SolvedProblem findFirst
   */
  export type SolvedProblemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedProblem
     */
    select?: SolvedProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedProblem
     */
    omit?: SolvedProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedProblemInclude<ExtArgs> | null
    /**
     * Filter, which SolvedProblem to fetch.
     */
    where?: SolvedProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolvedProblems to fetch.
     */
    orderBy?: SolvedProblemOrderByWithRelationInput | SolvedProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SolvedProblems.
     */
    cursor?: SolvedProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolvedProblems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolvedProblems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SolvedProblems.
     */
    distinct?: SolvedProblemScalarFieldEnum | SolvedProblemScalarFieldEnum[]
  }

  /**
   * SolvedProblem findFirstOrThrow
   */
  export type SolvedProblemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedProblem
     */
    select?: SolvedProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedProblem
     */
    omit?: SolvedProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedProblemInclude<ExtArgs> | null
    /**
     * Filter, which SolvedProblem to fetch.
     */
    where?: SolvedProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolvedProblems to fetch.
     */
    orderBy?: SolvedProblemOrderByWithRelationInput | SolvedProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SolvedProblems.
     */
    cursor?: SolvedProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolvedProblems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolvedProblems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SolvedProblems.
     */
    distinct?: SolvedProblemScalarFieldEnum | SolvedProblemScalarFieldEnum[]
  }

  /**
   * SolvedProblem findMany
   */
  export type SolvedProblemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedProblem
     */
    select?: SolvedProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedProblem
     */
    omit?: SolvedProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedProblemInclude<ExtArgs> | null
    /**
     * Filter, which SolvedProblems to fetch.
     */
    where?: SolvedProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolvedProblems to fetch.
     */
    orderBy?: SolvedProblemOrderByWithRelationInput | SolvedProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SolvedProblems.
     */
    cursor?: SolvedProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolvedProblems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolvedProblems.
     */
    skip?: number
    distinct?: SolvedProblemScalarFieldEnum | SolvedProblemScalarFieldEnum[]
  }

  /**
   * SolvedProblem create
   */
  export type SolvedProblemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedProblem
     */
    select?: SolvedProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedProblem
     */
    omit?: SolvedProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedProblemInclude<ExtArgs> | null
    /**
     * The data needed to create a SolvedProblem.
     */
    data: XOR<SolvedProblemCreateInput, SolvedProblemUncheckedCreateInput>
  }

  /**
   * SolvedProblem createMany
   */
  export type SolvedProblemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SolvedProblems.
     */
    data: SolvedProblemCreateManyInput | SolvedProblemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SolvedProblem createManyAndReturn
   */
  export type SolvedProblemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedProblem
     */
    select?: SolvedProblemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedProblem
     */
    omit?: SolvedProblemOmit<ExtArgs> | null
    /**
     * The data used to create many SolvedProblems.
     */
    data: SolvedProblemCreateManyInput | SolvedProblemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedProblemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SolvedProblem update
   */
  export type SolvedProblemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedProblem
     */
    select?: SolvedProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedProblem
     */
    omit?: SolvedProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedProblemInclude<ExtArgs> | null
    /**
     * The data needed to update a SolvedProblem.
     */
    data: XOR<SolvedProblemUpdateInput, SolvedProblemUncheckedUpdateInput>
    /**
     * Choose, which SolvedProblem to update.
     */
    where: SolvedProblemWhereUniqueInput
  }

  /**
   * SolvedProblem updateMany
   */
  export type SolvedProblemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SolvedProblems.
     */
    data: XOR<SolvedProblemUpdateManyMutationInput, SolvedProblemUncheckedUpdateManyInput>
    /**
     * Filter which SolvedProblems to update
     */
    where?: SolvedProblemWhereInput
    /**
     * Limit how many SolvedProblems to update.
     */
    limit?: number
  }

  /**
   * SolvedProblem updateManyAndReturn
   */
  export type SolvedProblemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedProblem
     */
    select?: SolvedProblemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedProblem
     */
    omit?: SolvedProblemOmit<ExtArgs> | null
    /**
     * The data used to update SolvedProblems.
     */
    data: XOR<SolvedProblemUpdateManyMutationInput, SolvedProblemUncheckedUpdateManyInput>
    /**
     * Filter which SolvedProblems to update
     */
    where?: SolvedProblemWhereInput
    /**
     * Limit how many SolvedProblems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedProblemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SolvedProblem upsert
   */
  export type SolvedProblemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedProblem
     */
    select?: SolvedProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedProblem
     */
    omit?: SolvedProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedProblemInclude<ExtArgs> | null
    /**
     * The filter to search for the SolvedProblem to update in case it exists.
     */
    where: SolvedProblemWhereUniqueInput
    /**
     * In case the SolvedProblem found by the `where` argument doesn't exist, create a new SolvedProblem with this data.
     */
    create: XOR<SolvedProblemCreateInput, SolvedProblemUncheckedCreateInput>
    /**
     * In case the SolvedProblem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SolvedProblemUpdateInput, SolvedProblemUncheckedUpdateInput>
  }

  /**
   * SolvedProblem delete
   */
  export type SolvedProblemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedProblem
     */
    select?: SolvedProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedProblem
     */
    omit?: SolvedProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedProblemInclude<ExtArgs> | null
    /**
     * Filter which SolvedProblem to delete.
     */
    where: SolvedProblemWhereUniqueInput
  }

  /**
   * SolvedProblem deleteMany
   */
  export type SolvedProblemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SolvedProblems to delete
     */
    where?: SolvedProblemWhereInput
    /**
     * Limit how many SolvedProblems to delete.
     */
    limit?: number
  }

  /**
   * SolvedProblem.user
   */
  export type SolvedProblem$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * SolvedProblem.problem
   */
  export type SolvedProblem$problemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    where?: ProblemWhereInput
  }

  /**
   * SolvedProblem without action
   */
  export type SolvedProblemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedProblem
     */
    select?: SolvedProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedProblem
     */
    omit?: SolvedProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedProblemInclude<ExtArgs> | null
  }


  /**
   * Model Playlist
   */

  export type AggregatePlaylist = {
    _count: PlaylistCountAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  export type PlaylistMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isPrivate: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlaylistMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isPrivate: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlaylistCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isPrivate: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlaylistMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isPrivate?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlaylistMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isPrivate?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlaylistCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isPrivate?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlist to aggregate.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Playlists
    **/
    _count?: true | PlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistMaxAggregateInputType
  }

  export type GetPlaylistAggregateType<T extends PlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylist[P]>
      : GetScalarType<T[P], AggregatePlaylist[P]>
  }




  export type PlaylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithAggregationInput | PlaylistOrderByWithAggregationInput[]
    by: PlaylistScalarFieldEnum[] | PlaylistScalarFieldEnum
    having?: PlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistCountAggregateInputType | true
    _min?: PlaylistMinAggregateInputType
    _max?: PlaylistMaxAggregateInputType
  }

  export type PlaylistGroupByOutputType = {
    id: string
    name: string
    description: string | null
    isPrivate: boolean
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: PlaylistCountAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  type GetPlaylistGroupByPayload<T extends PlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isPrivate?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problems?: boolean | Playlist$problemsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isPrivate?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isPrivate?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    isPrivate?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlaylistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "isPrivate" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["playlist"]>
  export type PlaylistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | Playlist$problemsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlaylistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlaylistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PlaylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Playlist"
    objects: {
      problems: Prisma.$ProblemInPlaylistPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      isPrivate: boolean
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["playlist"]>
    composites: {}
  }

  type PlaylistGetPayload<S extends boolean | null | undefined | PlaylistDefaultArgs> = $Result.GetResult<Prisma.$PlaylistPayload, S>

  type PlaylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaylistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaylistCountAggregateInputType | true
    }

  export interface PlaylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Playlist'], meta: { name: 'Playlist' } }
    /**
     * Find zero or one Playlist that matches the filter.
     * @param {PlaylistFindUniqueArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaylistFindUniqueArgs>(args: SelectSubset<T, PlaylistFindUniqueArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Playlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaylistFindUniqueOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaylistFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaylistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaylistFindFirstArgs>(args?: SelectSubset<T, PlaylistFindFirstArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaylistFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaylistFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlists
     * const playlists = await prisma.playlist.findMany()
     * 
     * // Get first 10 Playlists
     * const playlists = await prisma.playlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistWithIdOnly = await prisma.playlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaylistFindManyArgs>(args?: SelectSubset<T, PlaylistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Playlist.
     * @param {PlaylistCreateArgs} args - Arguments to create a Playlist.
     * @example
     * // Create one Playlist
     * const Playlist = await prisma.playlist.create({
     *   data: {
     *     // ... data to create a Playlist
     *   }
     * })
     * 
     */
    create<T extends PlaylistCreateArgs>(args: SelectSubset<T, PlaylistCreateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Playlists.
     * @param {PlaylistCreateManyArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaylistCreateManyArgs>(args?: SelectSubset<T, PlaylistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Playlists and returns the data saved in the database.
     * @param {PlaylistCreateManyAndReturnArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Playlists and only return the `id`
     * const playlistWithIdOnly = await prisma.playlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaylistCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaylistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Playlist.
     * @param {PlaylistDeleteArgs} args - Arguments to delete one Playlist.
     * @example
     * // Delete one Playlist
     * const Playlist = await prisma.playlist.delete({
     *   where: {
     *     // ... filter to delete one Playlist
     *   }
     * })
     * 
     */
    delete<T extends PlaylistDeleteArgs>(args: SelectSubset<T, PlaylistDeleteArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Playlist.
     * @param {PlaylistUpdateArgs} args - Arguments to update one Playlist.
     * @example
     * // Update one Playlist
     * const playlist = await prisma.playlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaylistUpdateArgs>(args: SelectSubset<T, PlaylistUpdateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Playlists.
     * @param {PlaylistDeleteManyArgs} args - Arguments to filter Playlists to delete.
     * @example
     * // Delete a few Playlists
     * const { count } = await prisma.playlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaylistDeleteManyArgs>(args?: SelectSubset<T, PlaylistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaylistUpdateManyArgs>(args: SelectSubset<T, PlaylistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists and returns the data updated in the database.
     * @param {PlaylistUpdateManyAndReturnArgs} args - Arguments to update many Playlists.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Playlists and only return the `id`
     * const playlistWithIdOnly = await prisma.playlist.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlaylistUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaylistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Playlist.
     * @param {PlaylistUpsertArgs} args - Arguments to update or create a Playlist.
     * @example
     * // Update or create a Playlist
     * const playlist = await prisma.playlist.upsert({
     *   create: {
     *     // ... data to create a Playlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlist we want to update
     *   }
     * })
     */
    upsert<T extends PlaylistUpsertArgs>(args: SelectSubset<T, PlaylistUpsertArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistCountArgs} args - Arguments to filter Playlists to count.
     * @example
     * // Count the number of Playlists
     * const count = await prisma.playlist.count({
     *   where: {
     *     // ... the filter for the Playlists we want to count
     *   }
     * })
    **/
    count<T extends PlaylistCountArgs>(
      args?: Subset<T, PlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlaylistAggregateArgs>(args: Subset<T, PlaylistAggregateArgs>): Prisma.PrismaPromise<GetPlaylistAggregateType<T>>

    /**
     * Group by Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistGroupByArgs} args - Group by arguments.
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
      T extends PlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Playlist model
   */
  readonly fields: PlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Playlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    problems<T extends Playlist$problemsArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$problemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemInPlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Playlist model
   */
  interface PlaylistFieldRefs {
    readonly id: FieldRef<"Playlist", 'String'>
    readonly name: FieldRef<"Playlist", 'String'>
    readonly description: FieldRef<"Playlist", 'String'>
    readonly isPrivate: FieldRef<"Playlist", 'Boolean'>
    readonly userId: FieldRef<"Playlist", 'String'>
    readonly createdAt: FieldRef<"Playlist", 'DateTime'>
    readonly updatedAt: FieldRef<"Playlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Playlist findUnique
   */
  export type PlaylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findUniqueOrThrow
   */
  export type PlaylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findFirst
   */
  export type PlaylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findFirstOrThrow
   */
  export type PlaylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findMany
   */
  export type PlaylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlists to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist create
   */
  export type PlaylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to create a Playlist.
     */
    data: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
  }

  /**
   * Playlist createMany
   */
  export type PlaylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Playlist createManyAndReturn
   */
  export type PlaylistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Playlist update
   */
  export type PlaylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to update a Playlist.
     */
    data: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
    /**
     * Choose, which Playlist to update.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist updateMany
   */
  export type PlaylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to update.
     */
    limit?: number
  }

  /**
   * Playlist updateManyAndReturn
   */
  export type PlaylistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Playlist upsert
   */
  export type PlaylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The filter to search for the Playlist to update in case it exists.
     */
    where: PlaylistWhereUniqueInput
    /**
     * In case the Playlist found by the `where` argument doesn't exist, create a new Playlist with this data.
     */
    create: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
    /**
     * In case the Playlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
  }

  /**
   * Playlist delete
   */
  export type PlaylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter which Playlist to delete.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist deleteMany
   */
  export type PlaylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlists to delete
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to delete.
     */
    limit?: number
  }

  /**
   * Playlist.problems
   */
  export type Playlist$problemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null
    where?: ProblemInPlaylistWhereInput
    orderBy?: ProblemInPlaylistOrderByWithRelationInput | ProblemInPlaylistOrderByWithRelationInput[]
    cursor?: ProblemInPlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemInPlaylistScalarFieldEnum | ProblemInPlaylistScalarFieldEnum[]
  }

  /**
   * Playlist without action
   */
  export type PlaylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
  }


  /**
   * Model ProblemInPlaylist
   */

  export type AggregateProblemInPlaylist = {
    _count: ProblemInPlaylistCountAggregateOutputType | null
    _min: ProblemInPlaylistMinAggregateOutputType | null
    _max: ProblemInPlaylistMaxAggregateOutputType | null
  }

  export type ProblemInPlaylistMinAggregateOutputType = {
    id: string | null
    playlistId: string | null
    problemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemInPlaylistMaxAggregateOutputType = {
    id: string | null
    playlistId: string | null
    problemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemInPlaylistCountAggregateOutputType = {
    id: number
    playlistId: number
    problemId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProblemInPlaylistMinAggregateInputType = {
    id?: true
    playlistId?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemInPlaylistMaxAggregateInputType = {
    id?: true
    playlistId?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemInPlaylistCountAggregateInputType = {
    id?: true
    playlistId?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProblemInPlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProblemInPlaylist to aggregate.
     */
    where?: ProblemInPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemInPlaylists to fetch.
     */
    orderBy?: ProblemInPlaylistOrderByWithRelationInput | ProblemInPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProblemInPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemInPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemInPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProblemInPlaylists
    **/
    _count?: true | ProblemInPlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemInPlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemInPlaylistMaxAggregateInputType
  }

  export type GetProblemInPlaylistAggregateType<T extends ProblemInPlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregateProblemInPlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblemInPlaylist[P]>
      : GetScalarType<T[P], AggregateProblemInPlaylist[P]>
  }




  export type ProblemInPlaylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemInPlaylistWhereInput
    orderBy?: ProblemInPlaylistOrderByWithAggregationInput | ProblemInPlaylistOrderByWithAggregationInput[]
    by: ProblemInPlaylistScalarFieldEnum[] | ProblemInPlaylistScalarFieldEnum
    having?: ProblemInPlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemInPlaylistCountAggregateInputType | true
    _min?: ProblemInPlaylistMinAggregateInputType
    _max?: ProblemInPlaylistMaxAggregateInputType
  }

  export type ProblemInPlaylistGroupByOutputType = {
    id: string
    playlistId: string
    problemId: string
    createdAt: Date
    updatedAt: Date
    _count: ProblemInPlaylistCountAggregateOutputType | null
    _min: ProblemInPlaylistMinAggregateOutputType | null
    _max: ProblemInPlaylistMaxAggregateOutputType | null
  }

  type GetProblemInPlaylistGroupByPayload<T extends ProblemInPlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemInPlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemInPlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemInPlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemInPlaylistGroupByOutputType[P]>
        }
      >
    >


  export type ProblemInPlaylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlistId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemInPlaylist"]>

  export type ProblemInPlaylistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlistId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemInPlaylist"]>

  export type ProblemInPlaylistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlistId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemInPlaylist"]>

  export type ProblemInPlaylistSelectScalar = {
    id?: boolean
    playlistId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProblemInPlaylistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playlistId" | "problemId" | "createdAt" | "updatedAt", ExtArgs["result"]["problemInPlaylist"]>
  export type ProblemInPlaylistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type ProblemInPlaylistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type ProblemInPlaylistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }

  export type $ProblemInPlaylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProblemInPlaylist"
    objects: {
      playlist: Prisma.$PlaylistPayload<ExtArgs>
      problem: Prisma.$ProblemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playlistId: string
      problemId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["problemInPlaylist"]>
    composites: {}
  }

  type ProblemInPlaylistGetPayload<S extends boolean | null | undefined | ProblemInPlaylistDefaultArgs> = $Result.GetResult<Prisma.$ProblemInPlaylistPayload, S>

  type ProblemInPlaylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProblemInPlaylistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemInPlaylistCountAggregateInputType | true
    }

  export interface ProblemInPlaylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProblemInPlaylist'], meta: { name: 'ProblemInPlaylist' } }
    /**
     * Find zero or one ProblemInPlaylist that matches the filter.
     * @param {ProblemInPlaylistFindUniqueArgs} args - Arguments to find a ProblemInPlaylist
     * @example
     * // Get one ProblemInPlaylist
     * const problemInPlaylist = await prisma.problemInPlaylist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemInPlaylistFindUniqueArgs>(args: SelectSubset<T, ProblemInPlaylistFindUniqueArgs<ExtArgs>>): Prisma__ProblemInPlaylistClient<$Result.GetResult<Prisma.$ProblemInPlaylistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProblemInPlaylist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemInPlaylistFindUniqueOrThrowArgs} args - Arguments to find a ProblemInPlaylist
     * @example
     * // Get one ProblemInPlaylist
     * const problemInPlaylist = await prisma.problemInPlaylist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemInPlaylistFindUniqueOrThrowArgs>(args: SelectSubset<T, ProblemInPlaylistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProblemInPlaylistClient<$Result.GetResult<Prisma.$ProblemInPlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemInPlaylist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInPlaylistFindFirstArgs} args - Arguments to find a ProblemInPlaylist
     * @example
     * // Get one ProblemInPlaylist
     * const problemInPlaylist = await prisma.problemInPlaylist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemInPlaylistFindFirstArgs>(args?: SelectSubset<T, ProblemInPlaylistFindFirstArgs<ExtArgs>>): Prisma__ProblemInPlaylistClient<$Result.GetResult<Prisma.$ProblemInPlaylistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemInPlaylist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInPlaylistFindFirstOrThrowArgs} args - Arguments to find a ProblemInPlaylist
     * @example
     * // Get one ProblemInPlaylist
     * const problemInPlaylist = await prisma.problemInPlaylist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemInPlaylistFindFirstOrThrowArgs>(args?: SelectSubset<T, ProblemInPlaylistFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProblemInPlaylistClient<$Result.GetResult<Prisma.$ProblemInPlaylistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProblemInPlaylists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInPlaylistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProblemInPlaylists
     * const problemInPlaylists = await prisma.problemInPlaylist.findMany()
     * 
     * // Get first 10 ProblemInPlaylists
     * const problemInPlaylists = await prisma.problemInPlaylist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemInPlaylistWithIdOnly = await prisma.problemInPlaylist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProblemInPlaylistFindManyArgs>(args?: SelectSubset<T, ProblemInPlaylistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemInPlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProblemInPlaylist.
     * @param {ProblemInPlaylistCreateArgs} args - Arguments to create a ProblemInPlaylist.
     * @example
     * // Create one ProblemInPlaylist
     * const ProblemInPlaylist = await prisma.problemInPlaylist.create({
     *   data: {
     *     // ... data to create a ProblemInPlaylist
     *   }
     * })
     * 
     */
    create<T extends ProblemInPlaylistCreateArgs>(args: SelectSubset<T, ProblemInPlaylistCreateArgs<ExtArgs>>): Prisma__ProblemInPlaylistClient<$Result.GetResult<Prisma.$ProblemInPlaylistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProblemInPlaylists.
     * @param {ProblemInPlaylistCreateManyArgs} args - Arguments to create many ProblemInPlaylists.
     * @example
     * // Create many ProblemInPlaylists
     * const problemInPlaylist = await prisma.problemInPlaylist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProblemInPlaylistCreateManyArgs>(args?: SelectSubset<T, ProblemInPlaylistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProblemInPlaylists and returns the data saved in the database.
     * @param {ProblemInPlaylistCreateManyAndReturnArgs} args - Arguments to create many ProblemInPlaylists.
     * @example
     * // Create many ProblemInPlaylists
     * const problemInPlaylist = await prisma.problemInPlaylist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProblemInPlaylists and only return the `id`
     * const problemInPlaylistWithIdOnly = await prisma.problemInPlaylist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProblemInPlaylistCreateManyAndReturnArgs>(args?: SelectSubset<T, ProblemInPlaylistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemInPlaylistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProblemInPlaylist.
     * @param {ProblemInPlaylistDeleteArgs} args - Arguments to delete one ProblemInPlaylist.
     * @example
     * // Delete one ProblemInPlaylist
     * const ProblemInPlaylist = await prisma.problemInPlaylist.delete({
     *   where: {
     *     // ... filter to delete one ProblemInPlaylist
     *   }
     * })
     * 
     */
    delete<T extends ProblemInPlaylistDeleteArgs>(args: SelectSubset<T, ProblemInPlaylistDeleteArgs<ExtArgs>>): Prisma__ProblemInPlaylistClient<$Result.GetResult<Prisma.$ProblemInPlaylistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProblemInPlaylist.
     * @param {ProblemInPlaylistUpdateArgs} args - Arguments to update one ProblemInPlaylist.
     * @example
     * // Update one ProblemInPlaylist
     * const problemInPlaylist = await prisma.problemInPlaylist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProblemInPlaylistUpdateArgs>(args: SelectSubset<T, ProblemInPlaylistUpdateArgs<ExtArgs>>): Prisma__ProblemInPlaylistClient<$Result.GetResult<Prisma.$ProblemInPlaylistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProblemInPlaylists.
     * @param {ProblemInPlaylistDeleteManyArgs} args - Arguments to filter ProblemInPlaylists to delete.
     * @example
     * // Delete a few ProblemInPlaylists
     * const { count } = await prisma.problemInPlaylist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProblemInPlaylistDeleteManyArgs>(args?: SelectSubset<T, ProblemInPlaylistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemInPlaylists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInPlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProblemInPlaylists
     * const problemInPlaylist = await prisma.problemInPlaylist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProblemInPlaylistUpdateManyArgs>(args: SelectSubset<T, ProblemInPlaylistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemInPlaylists and returns the data updated in the database.
     * @param {ProblemInPlaylistUpdateManyAndReturnArgs} args - Arguments to update many ProblemInPlaylists.
     * @example
     * // Update many ProblemInPlaylists
     * const problemInPlaylist = await prisma.problemInPlaylist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProblemInPlaylists and only return the `id`
     * const problemInPlaylistWithIdOnly = await prisma.problemInPlaylist.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProblemInPlaylistUpdateManyAndReturnArgs>(args: SelectSubset<T, ProblemInPlaylistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemInPlaylistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProblemInPlaylist.
     * @param {ProblemInPlaylistUpsertArgs} args - Arguments to update or create a ProblemInPlaylist.
     * @example
     * // Update or create a ProblemInPlaylist
     * const problemInPlaylist = await prisma.problemInPlaylist.upsert({
     *   create: {
     *     // ... data to create a ProblemInPlaylist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProblemInPlaylist we want to update
     *   }
     * })
     */
    upsert<T extends ProblemInPlaylistUpsertArgs>(args: SelectSubset<T, ProblemInPlaylistUpsertArgs<ExtArgs>>): Prisma__ProblemInPlaylistClient<$Result.GetResult<Prisma.$ProblemInPlaylistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProblemInPlaylists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInPlaylistCountArgs} args - Arguments to filter ProblemInPlaylists to count.
     * @example
     * // Count the number of ProblemInPlaylists
     * const count = await prisma.problemInPlaylist.count({
     *   where: {
     *     // ... the filter for the ProblemInPlaylists we want to count
     *   }
     * })
    **/
    count<T extends ProblemInPlaylistCountArgs>(
      args?: Subset<T, ProblemInPlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemInPlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProblemInPlaylist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInPlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProblemInPlaylistAggregateArgs>(args: Subset<T, ProblemInPlaylistAggregateArgs>): Prisma.PrismaPromise<GetProblemInPlaylistAggregateType<T>>

    /**
     * Group by ProblemInPlaylist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInPlaylistGroupByArgs} args - Group by arguments.
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
      T extends ProblemInPlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemInPlaylistGroupByArgs['orderBy'] }
        : { orderBy?: ProblemInPlaylistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProblemInPlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemInPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProblemInPlaylist model
   */
  readonly fields: ProblemInPlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProblemInPlaylist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemInPlaylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    playlist<T extends PlaylistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlaylistDefaultArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProblemInPlaylist model
   */
  interface ProblemInPlaylistFieldRefs {
    readonly id: FieldRef<"ProblemInPlaylist", 'String'>
    readonly playlistId: FieldRef<"ProblemInPlaylist", 'String'>
    readonly problemId: FieldRef<"ProblemInPlaylist", 'String'>
    readonly createdAt: FieldRef<"ProblemInPlaylist", 'DateTime'>
    readonly updatedAt: FieldRef<"ProblemInPlaylist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProblemInPlaylist findUnique
   */
  export type ProblemInPlaylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which ProblemInPlaylist to fetch.
     */
    where: ProblemInPlaylistWhereUniqueInput
  }

  /**
   * ProblemInPlaylist findUniqueOrThrow
   */
  export type ProblemInPlaylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which ProblemInPlaylist to fetch.
     */
    where: ProblemInPlaylistWhereUniqueInput
  }

  /**
   * ProblemInPlaylist findFirst
   */
  export type ProblemInPlaylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which ProblemInPlaylist to fetch.
     */
    where?: ProblemInPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemInPlaylists to fetch.
     */
    orderBy?: ProblemInPlaylistOrderByWithRelationInput | ProblemInPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProblemInPlaylists.
     */
    cursor?: ProblemInPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemInPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemInPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProblemInPlaylists.
     */
    distinct?: ProblemInPlaylistScalarFieldEnum | ProblemInPlaylistScalarFieldEnum[]
  }

  /**
   * ProblemInPlaylist findFirstOrThrow
   */
  export type ProblemInPlaylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which ProblemInPlaylist to fetch.
     */
    where?: ProblemInPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemInPlaylists to fetch.
     */
    orderBy?: ProblemInPlaylistOrderByWithRelationInput | ProblemInPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProblemInPlaylists.
     */
    cursor?: ProblemInPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemInPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemInPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProblemInPlaylists.
     */
    distinct?: ProblemInPlaylistScalarFieldEnum | ProblemInPlaylistScalarFieldEnum[]
  }

  /**
   * ProblemInPlaylist findMany
   */
  export type ProblemInPlaylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which ProblemInPlaylists to fetch.
     */
    where?: ProblemInPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemInPlaylists to fetch.
     */
    orderBy?: ProblemInPlaylistOrderByWithRelationInput | ProblemInPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProblemInPlaylists.
     */
    cursor?: ProblemInPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemInPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemInPlaylists.
     */
    skip?: number
    distinct?: ProblemInPlaylistScalarFieldEnum | ProblemInPlaylistScalarFieldEnum[]
  }

  /**
   * ProblemInPlaylist create
   */
  export type ProblemInPlaylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null
    /**
     * The data needed to create a ProblemInPlaylist.
     */
    data: XOR<ProblemInPlaylistCreateInput, ProblemInPlaylistUncheckedCreateInput>
  }

  /**
   * ProblemInPlaylist createMany
   */
  export type ProblemInPlaylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProblemInPlaylists.
     */
    data: ProblemInPlaylistCreateManyInput | ProblemInPlaylistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProblemInPlaylist createManyAndReturn
   */
  export type ProblemInPlaylistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null
    /**
     * The data used to create many ProblemInPlaylists.
     */
    data: ProblemInPlaylistCreateManyInput | ProblemInPlaylistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProblemInPlaylist update
   */
  export type ProblemInPlaylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null
    /**
     * The data needed to update a ProblemInPlaylist.
     */
    data: XOR<ProblemInPlaylistUpdateInput, ProblemInPlaylistUncheckedUpdateInput>
    /**
     * Choose, which ProblemInPlaylist to update.
     */
    where: ProblemInPlaylistWhereUniqueInput
  }

  /**
   * ProblemInPlaylist updateMany
   */
  export type ProblemInPlaylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProblemInPlaylists.
     */
    data: XOR<ProblemInPlaylistUpdateManyMutationInput, ProblemInPlaylistUncheckedUpdateManyInput>
    /**
     * Filter which ProblemInPlaylists to update
     */
    where?: ProblemInPlaylistWhereInput
    /**
     * Limit how many ProblemInPlaylists to update.
     */
    limit?: number
  }

  /**
   * ProblemInPlaylist updateManyAndReturn
   */
  export type ProblemInPlaylistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null
    /**
     * The data used to update ProblemInPlaylists.
     */
    data: XOR<ProblemInPlaylistUpdateManyMutationInput, ProblemInPlaylistUncheckedUpdateManyInput>
    /**
     * Filter which ProblemInPlaylists to update
     */
    where?: ProblemInPlaylistWhereInput
    /**
     * Limit how many ProblemInPlaylists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProblemInPlaylist upsert
   */
  export type ProblemInPlaylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null
    /**
     * The filter to search for the ProblemInPlaylist to update in case it exists.
     */
    where: ProblemInPlaylistWhereUniqueInput
    /**
     * In case the ProblemInPlaylist found by the `where` argument doesn't exist, create a new ProblemInPlaylist with this data.
     */
    create: XOR<ProblemInPlaylistCreateInput, ProblemInPlaylistUncheckedCreateInput>
    /**
     * In case the ProblemInPlaylist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemInPlaylistUpdateInput, ProblemInPlaylistUncheckedUpdateInput>
  }

  /**
   * ProblemInPlaylist delete
   */
  export type ProblemInPlaylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null
    /**
     * Filter which ProblemInPlaylist to delete.
     */
    where: ProblemInPlaylistWhereUniqueInput
  }

  /**
   * ProblemInPlaylist deleteMany
   */
  export type ProblemInPlaylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProblemInPlaylists to delete
     */
    where?: ProblemInPlaylistWhereInput
    /**
     * Limit how many ProblemInPlaylists to delete.
     */
    limit?: number
  }

  /**
   * ProblemInPlaylist without action
   */
  export type ProblemInPlaylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null
  }


  /**
   * Model Sheet
   */

  export type AggregateSheet = {
    _count: SheetCountAggregateOutputType | null
    _avg: SheetAvgAggregateOutputType | null
    _sum: SheetSumAggregateOutputType | null
    _min: SheetMinAggregateOutputType | null
    _max: SheetMaxAggregateOutputType | null
  }

  export type SheetAvgAggregateOutputType = {
    price: number | null
  }

  export type SheetSumAggregateOutputType = {
    price: number | null
  }

  export type SheetMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    price: number | null
    isPremium: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SheetMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    price: number | null
    isPremium: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SheetCountAggregateOutputType = {
    id: number
    title: number
    description: number
    languages: number
    tags: number
    price: number
    isPremium: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SheetAvgAggregateInputType = {
    price?: true
  }

  export type SheetSumAggregateInputType = {
    price?: true
  }

  export type SheetMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    isPremium?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SheetMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    isPremium?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SheetCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    languages?: true
    tags?: true
    price?: true
    isPremium?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SheetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sheet to aggregate.
     */
    where?: SheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sheets to fetch.
     */
    orderBy?: SheetOrderByWithRelationInput | SheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sheets
    **/
    _count?: true | SheetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SheetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SheetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SheetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SheetMaxAggregateInputType
  }

  export type GetSheetAggregateType<T extends SheetAggregateArgs> = {
        [P in keyof T & keyof AggregateSheet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSheet[P]>
      : GetScalarType<T[P], AggregateSheet[P]>
  }




  export type SheetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SheetWhereInput
    orderBy?: SheetOrderByWithAggregationInput | SheetOrderByWithAggregationInput[]
    by: SheetScalarFieldEnum[] | SheetScalarFieldEnum
    having?: SheetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SheetCountAggregateInputType | true
    _avg?: SheetAvgAggregateInputType
    _sum?: SheetSumAggregateInputType
    _min?: SheetMinAggregateInputType
    _max?: SheetMaxAggregateInputType
  }

  export type SheetGroupByOutputType = {
    id: string
    title: string
    description: string | null
    languages: string[]
    tags: string[]
    price: number
    isPremium: boolean
    createdAt: Date
    updatedAt: Date
    _count: SheetCountAggregateOutputType | null
    _avg: SheetAvgAggregateOutputType | null
    _sum: SheetSumAggregateOutputType | null
    _min: SheetMinAggregateOutputType | null
    _max: SheetMaxAggregateOutputType | null
  }

  type GetSheetGroupByPayload<T extends SheetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SheetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SheetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SheetGroupByOutputType[P]>
            : GetScalarType<T[P], SheetGroupByOutputType[P]>
        }
      >
    >


  export type SheetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    languages?: boolean
    tags?: boolean
    price?: boolean
    isPremium?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    purchases?: boolean | Sheet$purchasesArgs<ExtArgs>
    sheetAssignments?: boolean | Sheet$sheetAssignmentsArgs<ExtArgs>
    _count?: boolean | SheetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sheet"]>

  export type SheetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    languages?: boolean
    tags?: boolean
    price?: boolean
    isPremium?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sheet"]>

  export type SheetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    languages?: boolean
    tags?: boolean
    price?: boolean
    isPremium?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sheet"]>

  export type SheetSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    languages?: boolean
    tags?: boolean
    price?: boolean
    isPremium?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SheetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "languages" | "tags" | "price" | "isPremium" | "createdAt" | "updatedAt", ExtArgs["result"]["sheet"]>
  export type SheetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchases?: boolean | Sheet$purchasesArgs<ExtArgs>
    sheetAssignments?: boolean | Sheet$sheetAssignmentsArgs<ExtArgs>
    _count?: boolean | SheetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SheetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SheetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SheetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sheet"
    objects: {
      purchases: Prisma.$PurchasePayload<ExtArgs>[]
      sheetAssignments: Prisma.$SheetProblemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      languages: string[]
      tags: string[]
      price: number
      isPremium: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sheet"]>
    composites: {}
  }

  type SheetGetPayload<S extends boolean | null | undefined | SheetDefaultArgs> = $Result.GetResult<Prisma.$SheetPayload, S>

  type SheetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SheetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SheetCountAggregateInputType | true
    }

  export interface SheetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sheet'], meta: { name: 'Sheet' } }
    /**
     * Find zero or one Sheet that matches the filter.
     * @param {SheetFindUniqueArgs} args - Arguments to find a Sheet
     * @example
     * // Get one Sheet
     * const sheet = await prisma.sheet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SheetFindUniqueArgs>(args: SelectSubset<T, SheetFindUniqueArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sheet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SheetFindUniqueOrThrowArgs} args - Arguments to find a Sheet
     * @example
     * // Get one Sheet
     * const sheet = await prisma.sheet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SheetFindUniqueOrThrowArgs>(args: SelectSubset<T, SheetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sheet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetFindFirstArgs} args - Arguments to find a Sheet
     * @example
     * // Get one Sheet
     * const sheet = await prisma.sheet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SheetFindFirstArgs>(args?: SelectSubset<T, SheetFindFirstArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sheet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetFindFirstOrThrowArgs} args - Arguments to find a Sheet
     * @example
     * // Get one Sheet
     * const sheet = await prisma.sheet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SheetFindFirstOrThrowArgs>(args?: SelectSubset<T, SheetFindFirstOrThrowArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sheets
     * const sheets = await prisma.sheet.findMany()
     * 
     * // Get first 10 Sheets
     * const sheets = await prisma.sheet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sheetWithIdOnly = await prisma.sheet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SheetFindManyArgs>(args?: SelectSubset<T, SheetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sheet.
     * @param {SheetCreateArgs} args - Arguments to create a Sheet.
     * @example
     * // Create one Sheet
     * const Sheet = await prisma.sheet.create({
     *   data: {
     *     // ... data to create a Sheet
     *   }
     * })
     * 
     */
    create<T extends SheetCreateArgs>(args: SelectSubset<T, SheetCreateArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sheets.
     * @param {SheetCreateManyArgs} args - Arguments to create many Sheets.
     * @example
     * // Create many Sheets
     * const sheet = await prisma.sheet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SheetCreateManyArgs>(args?: SelectSubset<T, SheetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sheets and returns the data saved in the database.
     * @param {SheetCreateManyAndReturnArgs} args - Arguments to create many Sheets.
     * @example
     * // Create many Sheets
     * const sheet = await prisma.sheet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sheets and only return the `id`
     * const sheetWithIdOnly = await prisma.sheet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SheetCreateManyAndReturnArgs>(args?: SelectSubset<T, SheetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sheet.
     * @param {SheetDeleteArgs} args - Arguments to delete one Sheet.
     * @example
     * // Delete one Sheet
     * const Sheet = await prisma.sheet.delete({
     *   where: {
     *     // ... filter to delete one Sheet
     *   }
     * })
     * 
     */
    delete<T extends SheetDeleteArgs>(args: SelectSubset<T, SheetDeleteArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sheet.
     * @param {SheetUpdateArgs} args - Arguments to update one Sheet.
     * @example
     * // Update one Sheet
     * const sheet = await prisma.sheet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SheetUpdateArgs>(args: SelectSubset<T, SheetUpdateArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sheets.
     * @param {SheetDeleteManyArgs} args - Arguments to filter Sheets to delete.
     * @example
     * // Delete a few Sheets
     * const { count } = await prisma.sheet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SheetDeleteManyArgs>(args?: SelectSubset<T, SheetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sheets
     * const sheet = await prisma.sheet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SheetUpdateManyArgs>(args: SelectSubset<T, SheetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sheets and returns the data updated in the database.
     * @param {SheetUpdateManyAndReturnArgs} args - Arguments to update many Sheets.
     * @example
     * // Update many Sheets
     * const sheet = await prisma.sheet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sheets and only return the `id`
     * const sheetWithIdOnly = await prisma.sheet.updateManyAndReturn({
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
    updateManyAndReturn<T extends SheetUpdateManyAndReturnArgs>(args: SelectSubset<T, SheetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sheet.
     * @param {SheetUpsertArgs} args - Arguments to update or create a Sheet.
     * @example
     * // Update or create a Sheet
     * const sheet = await prisma.sheet.upsert({
     *   create: {
     *     // ... data to create a Sheet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sheet we want to update
     *   }
     * })
     */
    upsert<T extends SheetUpsertArgs>(args: SelectSubset<T, SheetUpsertArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetCountArgs} args - Arguments to filter Sheets to count.
     * @example
     * // Count the number of Sheets
     * const count = await prisma.sheet.count({
     *   where: {
     *     // ... the filter for the Sheets we want to count
     *   }
     * })
    **/
    count<T extends SheetCountArgs>(
      args?: Subset<T, SheetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SheetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SheetAggregateArgs>(args: Subset<T, SheetAggregateArgs>): Prisma.PrismaPromise<GetSheetAggregateType<T>>

    /**
     * Group by Sheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetGroupByArgs} args - Group by arguments.
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
      T extends SheetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SheetGroupByArgs['orderBy'] }
        : { orderBy?: SheetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SheetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSheetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sheet model
   */
  readonly fields: SheetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sheet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SheetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchases<T extends Sheet$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, Sheet$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sheetAssignments<T extends Sheet$sheetAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Sheet$sheetAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Sheet model
   */
  interface SheetFieldRefs {
    readonly id: FieldRef<"Sheet", 'String'>
    readonly title: FieldRef<"Sheet", 'String'>
    readonly description: FieldRef<"Sheet", 'String'>
    readonly languages: FieldRef<"Sheet", 'String[]'>
    readonly tags: FieldRef<"Sheet", 'String[]'>
    readonly price: FieldRef<"Sheet", 'Float'>
    readonly isPremium: FieldRef<"Sheet", 'Boolean'>
    readonly createdAt: FieldRef<"Sheet", 'DateTime'>
    readonly updatedAt: FieldRef<"Sheet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sheet findUnique
   */
  export type SheetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * Filter, which Sheet to fetch.
     */
    where: SheetWhereUniqueInput
  }

  /**
   * Sheet findUniqueOrThrow
   */
  export type SheetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * Filter, which Sheet to fetch.
     */
    where: SheetWhereUniqueInput
  }

  /**
   * Sheet findFirst
   */
  export type SheetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * Filter, which Sheet to fetch.
     */
    where?: SheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sheets to fetch.
     */
    orderBy?: SheetOrderByWithRelationInput | SheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sheets.
     */
    cursor?: SheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sheets.
     */
    distinct?: SheetScalarFieldEnum | SheetScalarFieldEnum[]
  }

  /**
   * Sheet findFirstOrThrow
   */
  export type SheetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * Filter, which Sheet to fetch.
     */
    where?: SheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sheets to fetch.
     */
    orderBy?: SheetOrderByWithRelationInput | SheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sheets.
     */
    cursor?: SheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sheets.
     */
    distinct?: SheetScalarFieldEnum | SheetScalarFieldEnum[]
  }

  /**
   * Sheet findMany
   */
  export type SheetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * Filter, which Sheets to fetch.
     */
    where?: SheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sheets to fetch.
     */
    orderBy?: SheetOrderByWithRelationInput | SheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sheets.
     */
    cursor?: SheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sheets.
     */
    skip?: number
    distinct?: SheetScalarFieldEnum | SheetScalarFieldEnum[]
  }

  /**
   * Sheet create
   */
  export type SheetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * The data needed to create a Sheet.
     */
    data: XOR<SheetCreateInput, SheetUncheckedCreateInput>
  }

  /**
   * Sheet createMany
   */
  export type SheetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sheets.
     */
    data: SheetCreateManyInput | SheetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sheet createManyAndReturn
   */
  export type SheetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * The data used to create many Sheets.
     */
    data: SheetCreateManyInput | SheetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sheet update
   */
  export type SheetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * The data needed to update a Sheet.
     */
    data: XOR<SheetUpdateInput, SheetUncheckedUpdateInput>
    /**
     * Choose, which Sheet to update.
     */
    where: SheetWhereUniqueInput
  }

  /**
   * Sheet updateMany
   */
  export type SheetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sheets.
     */
    data: XOR<SheetUpdateManyMutationInput, SheetUncheckedUpdateManyInput>
    /**
     * Filter which Sheets to update
     */
    where?: SheetWhereInput
    /**
     * Limit how many Sheets to update.
     */
    limit?: number
  }

  /**
   * Sheet updateManyAndReturn
   */
  export type SheetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * The data used to update Sheets.
     */
    data: XOR<SheetUpdateManyMutationInput, SheetUncheckedUpdateManyInput>
    /**
     * Filter which Sheets to update
     */
    where?: SheetWhereInput
    /**
     * Limit how many Sheets to update.
     */
    limit?: number
  }

  /**
   * Sheet upsert
   */
  export type SheetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * The filter to search for the Sheet to update in case it exists.
     */
    where: SheetWhereUniqueInput
    /**
     * In case the Sheet found by the `where` argument doesn't exist, create a new Sheet with this data.
     */
    create: XOR<SheetCreateInput, SheetUncheckedCreateInput>
    /**
     * In case the Sheet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SheetUpdateInput, SheetUncheckedUpdateInput>
  }

  /**
   * Sheet delete
   */
  export type SheetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * Filter which Sheet to delete.
     */
    where: SheetWhereUniqueInput
  }

  /**
   * Sheet deleteMany
   */
  export type SheetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sheets to delete
     */
    where?: SheetWhereInput
    /**
     * Limit how many Sheets to delete.
     */
    limit?: number
  }

  /**
   * Sheet.purchases
   */
  export type Sheet$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Sheet.sheetAssignments
   */
  export type Sheet$sheetAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetProblem
     */
    select?: SheetProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetProblem
     */
    omit?: SheetProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetProblemInclude<ExtArgs> | null
    where?: SheetProblemWhereInput
    orderBy?: SheetProblemOrderByWithRelationInput | SheetProblemOrderByWithRelationInput[]
    cursor?: SheetProblemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SheetProblemScalarFieldEnum | SheetProblemScalarFieldEnum[]
  }

  /**
   * Sheet without action
   */
  export type SheetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
  }


  /**
   * Model SheetProblem
   */

  export type AggregateSheetProblem = {
    _count: SheetProblemCountAggregateOutputType | null
    _avg: SheetProblemAvgAggregateOutputType | null
    _sum: SheetProblemSumAggregateOutputType | null
    _min: SheetProblemMinAggregateOutputType | null
    _max: SheetProblemMaxAggregateOutputType | null
  }

  export type SheetProblemAvgAggregateOutputType = {
    orderIndex: number | null
  }

  export type SheetProblemSumAggregateOutputType = {
    orderIndex: number | null
  }

  export type SheetProblemMinAggregateOutputType = {
    id: string | null
    sheetId: string | null
    problemId: string | null
    orderIndex: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type SheetProblemMaxAggregateOutputType = {
    id: string | null
    sheetId: string | null
    problemId: string | null
    orderIndex: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type SheetProblemCountAggregateOutputType = {
    id: number
    sheetId: number
    problemId: number
    orderIndex: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type SheetProblemAvgAggregateInputType = {
    orderIndex?: true
  }

  export type SheetProblemSumAggregateInputType = {
    orderIndex?: true
  }

  export type SheetProblemMinAggregateInputType = {
    id?: true
    sheetId?: true
    problemId?: true
    orderIndex?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type SheetProblemMaxAggregateInputType = {
    id?: true
    sheetId?: true
    problemId?: true
    orderIndex?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type SheetProblemCountAggregateInputType = {
    id?: true
    sheetId?: true
    problemId?: true
    orderIndex?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type SheetProblemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SheetProblem to aggregate.
     */
    where?: SheetProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SheetProblems to fetch.
     */
    orderBy?: SheetProblemOrderByWithRelationInput | SheetProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SheetProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SheetProblems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SheetProblems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SheetProblems
    **/
    _count?: true | SheetProblemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SheetProblemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SheetProblemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SheetProblemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SheetProblemMaxAggregateInputType
  }

  export type GetSheetProblemAggregateType<T extends SheetProblemAggregateArgs> = {
        [P in keyof T & keyof AggregateSheetProblem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSheetProblem[P]>
      : GetScalarType<T[P], AggregateSheetProblem[P]>
  }




  export type SheetProblemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SheetProblemWhereInput
    orderBy?: SheetProblemOrderByWithAggregationInput | SheetProblemOrderByWithAggregationInput[]
    by: SheetProblemScalarFieldEnum[] | SheetProblemScalarFieldEnum
    having?: SheetProblemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SheetProblemCountAggregateInputType | true
    _avg?: SheetProblemAvgAggregateInputType
    _sum?: SheetProblemSumAggregateInputType
    _min?: SheetProblemMinAggregateInputType
    _max?: SheetProblemMaxAggregateInputType
  }

  export type SheetProblemGroupByOutputType = {
    id: string
    sheetId: string
    problemId: string
    orderIndex: number | null
    createdAt: Date
    updatedAt: Date
    userId: string | null
    _count: SheetProblemCountAggregateOutputType | null
    _avg: SheetProblemAvgAggregateOutputType | null
    _sum: SheetProblemSumAggregateOutputType | null
    _min: SheetProblemMinAggregateOutputType | null
    _max: SheetProblemMaxAggregateOutputType | null
  }

  type GetSheetProblemGroupByPayload<T extends SheetProblemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SheetProblemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SheetProblemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SheetProblemGroupByOutputType[P]>
            : GetScalarType<T[P], SheetProblemGroupByOutputType[P]>
        }
      >
    >


  export type SheetProblemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sheetId?: boolean
    problemId?: boolean
    orderIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    User?: boolean | SheetProblem$UserArgs<ExtArgs>
  }, ExtArgs["result"]["sheetProblem"]>

  export type SheetProblemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sheetId?: boolean
    problemId?: boolean
    orderIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    User?: boolean | SheetProblem$UserArgs<ExtArgs>
  }, ExtArgs["result"]["sheetProblem"]>

  export type SheetProblemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sheetId?: boolean
    problemId?: boolean
    orderIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    User?: boolean | SheetProblem$UserArgs<ExtArgs>
  }, ExtArgs["result"]["sheetProblem"]>

  export type SheetProblemSelectScalar = {
    id?: boolean
    sheetId?: boolean
    problemId?: boolean
    orderIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type SheetProblemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sheetId" | "problemId" | "orderIndex" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["sheetProblem"]>
  export type SheetProblemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    User?: boolean | SheetProblem$UserArgs<ExtArgs>
  }
  export type SheetProblemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    User?: boolean | SheetProblem$UserArgs<ExtArgs>
  }
  export type SheetProblemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    User?: boolean | SheetProblem$UserArgs<ExtArgs>
  }

  export type $SheetProblemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SheetProblem"
    objects: {
      sheet: Prisma.$SheetPayload<ExtArgs>
      problem: Prisma.$ProblemPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sheetId: string
      problemId: string
      orderIndex: number | null
      createdAt: Date
      updatedAt: Date
      userId: string | null
    }, ExtArgs["result"]["sheetProblem"]>
    composites: {}
  }

  type SheetProblemGetPayload<S extends boolean | null | undefined | SheetProblemDefaultArgs> = $Result.GetResult<Prisma.$SheetProblemPayload, S>

  type SheetProblemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SheetProblemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SheetProblemCountAggregateInputType | true
    }

  export interface SheetProblemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SheetProblem'], meta: { name: 'SheetProblem' } }
    /**
     * Find zero or one SheetProblem that matches the filter.
     * @param {SheetProblemFindUniqueArgs} args - Arguments to find a SheetProblem
     * @example
     * // Get one SheetProblem
     * const sheetProblem = await prisma.sheetProblem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SheetProblemFindUniqueArgs>(args: SelectSubset<T, SheetProblemFindUniqueArgs<ExtArgs>>): Prisma__SheetProblemClient<$Result.GetResult<Prisma.$SheetProblemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SheetProblem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SheetProblemFindUniqueOrThrowArgs} args - Arguments to find a SheetProblem
     * @example
     * // Get one SheetProblem
     * const sheetProblem = await prisma.sheetProblem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SheetProblemFindUniqueOrThrowArgs>(args: SelectSubset<T, SheetProblemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SheetProblemClient<$Result.GetResult<Prisma.$SheetProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SheetProblem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetProblemFindFirstArgs} args - Arguments to find a SheetProblem
     * @example
     * // Get one SheetProblem
     * const sheetProblem = await prisma.sheetProblem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SheetProblemFindFirstArgs>(args?: SelectSubset<T, SheetProblemFindFirstArgs<ExtArgs>>): Prisma__SheetProblemClient<$Result.GetResult<Prisma.$SheetProblemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SheetProblem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetProblemFindFirstOrThrowArgs} args - Arguments to find a SheetProblem
     * @example
     * // Get one SheetProblem
     * const sheetProblem = await prisma.sheetProblem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SheetProblemFindFirstOrThrowArgs>(args?: SelectSubset<T, SheetProblemFindFirstOrThrowArgs<ExtArgs>>): Prisma__SheetProblemClient<$Result.GetResult<Prisma.$SheetProblemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SheetProblems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetProblemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SheetProblems
     * const sheetProblems = await prisma.sheetProblem.findMany()
     * 
     * // Get first 10 SheetProblems
     * const sheetProblems = await prisma.sheetProblem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sheetProblemWithIdOnly = await prisma.sheetProblem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SheetProblemFindManyArgs>(args?: SelectSubset<T, SheetProblemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SheetProblem.
     * @param {SheetProblemCreateArgs} args - Arguments to create a SheetProblem.
     * @example
     * // Create one SheetProblem
     * const SheetProblem = await prisma.sheetProblem.create({
     *   data: {
     *     // ... data to create a SheetProblem
     *   }
     * })
     * 
     */
    create<T extends SheetProblemCreateArgs>(args: SelectSubset<T, SheetProblemCreateArgs<ExtArgs>>): Prisma__SheetProblemClient<$Result.GetResult<Prisma.$SheetProblemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SheetProblems.
     * @param {SheetProblemCreateManyArgs} args - Arguments to create many SheetProblems.
     * @example
     * // Create many SheetProblems
     * const sheetProblem = await prisma.sheetProblem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SheetProblemCreateManyArgs>(args?: SelectSubset<T, SheetProblemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SheetProblems and returns the data saved in the database.
     * @param {SheetProblemCreateManyAndReturnArgs} args - Arguments to create many SheetProblems.
     * @example
     * // Create many SheetProblems
     * const sheetProblem = await prisma.sheetProblem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SheetProblems and only return the `id`
     * const sheetProblemWithIdOnly = await prisma.sheetProblem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SheetProblemCreateManyAndReturnArgs>(args?: SelectSubset<T, SheetProblemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetProblemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SheetProblem.
     * @param {SheetProblemDeleteArgs} args - Arguments to delete one SheetProblem.
     * @example
     * // Delete one SheetProblem
     * const SheetProblem = await prisma.sheetProblem.delete({
     *   where: {
     *     // ... filter to delete one SheetProblem
     *   }
     * })
     * 
     */
    delete<T extends SheetProblemDeleteArgs>(args: SelectSubset<T, SheetProblemDeleteArgs<ExtArgs>>): Prisma__SheetProblemClient<$Result.GetResult<Prisma.$SheetProblemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SheetProblem.
     * @param {SheetProblemUpdateArgs} args - Arguments to update one SheetProblem.
     * @example
     * // Update one SheetProblem
     * const sheetProblem = await prisma.sheetProblem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SheetProblemUpdateArgs>(args: SelectSubset<T, SheetProblemUpdateArgs<ExtArgs>>): Prisma__SheetProblemClient<$Result.GetResult<Prisma.$SheetProblemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SheetProblems.
     * @param {SheetProblemDeleteManyArgs} args - Arguments to filter SheetProblems to delete.
     * @example
     * // Delete a few SheetProblems
     * const { count } = await prisma.sheetProblem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SheetProblemDeleteManyArgs>(args?: SelectSubset<T, SheetProblemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SheetProblems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetProblemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SheetProblems
     * const sheetProblem = await prisma.sheetProblem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SheetProblemUpdateManyArgs>(args: SelectSubset<T, SheetProblemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SheetProblems and returns the data updated in the database.
     * @param {SheetProblemUpdateManyAndReturnArgs} args - Arguments to update many SheetProblems.
     * @example
     * // Update many SheetProblems
     * const sheetProblem = await prisma.sheetProblem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SheetProblems and only return the `id`
     * const sheetProblemWithIdOnly = await prisma.sheetProblem.updateManyAndReturn({
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
    updateManyAndReturn<T extends SheetProblemUpdateManyAndReturnArgs>(args: SelectSubset<T, SheetProblemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetProblemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SheetProblem.
     * @param {SheetProblemUpsertArgs} args - Arguments to update or create a SheetProblem.
     * @example
     * // Update or create a SheetProblem
     * const sheetProblem = await prisma.sheetProblem.upsert({
     *   create: {
     *     // ... data to create a SheetProblem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SheetProblem we want to update
     *   }
     * })
     */
    upsert<T extends SheetProblemUpsertArgs>(args: SelectSubset<T, SheetProblemUpsertArgs<ExtArgs>>): Prisma__SheetProblemClient<$Result.GetResult<Prisma.$SheetProblemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SheetProblems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetProblemCountArgs} args - Arguments to filter SheetProblems to count.
     * @example
     * // Count the number of SheetProblems
     * const count = await prisma.sheetProblem.count({
     *   where: {
     *     // ... the filter for the SheetProblems we want to count
     *   }
     * })
    **/
    count<T extends SheetProblemCountArgs>(
      args?: Subset<T, SheetProblemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SheetProblemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SheetProblem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetProblemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SheetProblemAggregateArgs>(args: Subset<T, SheetProblemAggregateArgs>): Prisma.PrismaPromise<GetSheetProblemAggregateType<T>>

    /**
     * Group by SheetProblem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetProblemGroupByArgs} args - Group by arguments.
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
      T extends SheetProblemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SheetProblemGroupByArgs['orderBy'] }
        : { orderBy?: SheetProblemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SheetProblemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSheetProblemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SheetProblem model
   */
  readonly fields: SheetProblemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SheetProblem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SheetProblemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sheet<T extends SheetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SheetDefaultArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends SheetProblem$UserArgs<ExtArgs> = {}>(args?: Subset<T, SheetProblem$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SheetProblem model
   */
  interface SheetProblemFieldRefs {
    readonly id: FieldRef<"SheetProblem", 'String'>
    readonly sheetId: FieldRef<"SheetProblem", 'String'>
    readonly problemId: FieldRef<"SheetProblem", 'String'>
    readonly orderIndex: FieldRef<"SheetProblem", 'Int'>
    readonly createdAt: FieldRef<"SheetProblem", 'DateTime'>
    readonly updatedAt: FieldRef<"SheetProblem", 'DateTime'>
    readonly userId: FieldRef<"SheetProblem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SheetProblem findUnique
   */
  export type SheetProblemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetProblem
     */
    select?: SheetProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetProblem
     */
    omit?: SheetProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetProblemInclude<ExtArgs> | null
    /**
     * Filter, which SheetProblem to fetch.
     */
    where: SheetProblemWhereUniqueInput
  }

  /**
   * SheetProblem findUniqueOrThrow
   */
  export type SheetProblemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetProblem
     */
    select?: SheetProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetProblem
     */
    omit?: SheetProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetProblemInclude<ExtArgs> | null
    /**
     * Filter, which SheetProblem to fetch.
     */
    where: SheetProblemWhereUniqueInput
  }

  /**
   * SheetProblem findFirst
   */
  export type SheetProblemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetProblem
     */
    select?: SheetProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetProblem
     */
    omit?: SheetProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetProblemInclude<ExtArgs> | null
    /**
     * Filter, which SheetProblem to fetch.
     */
    where?: SheetProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SheetProblems to fetch.
     */
    orderBy?: SheetProblemOrderByWithRelationInput | SheetProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SheetProblems.
     */
    cursor?: SheetProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SheetProblems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SheetProblems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SheetProblems.
     */
    distinct?: SheetProblemScalarFieldEnum | SheetProblemScalarFieldEnum[]
  }

  /**
   * SheetProblem findFirstOrThrow
   */
  export type SheetProblemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetProblem
     */
    select?: SheetProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetProblem
     */
    omit?: SheetProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetProblemInclude<ExtArgs> | null
    /**
     * Filter, which SheetProblem to fetch.
     */
    where?: SheetProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SheetProblems to fetch.
     */
    orderBy?: SheetProblemOrderByWithRelationInput | SheetProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SheetProblems.
     */
    cursor?: SheetProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SheetProblems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SheetProblems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SheetProblems.
     */
    distinct?: SheetProblemScalarFieldEnum | SheetProblemScalarFieldEnum[]
  }

  /**
   * SheetProblem findMany
   */
  export type SheetProblemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetProblem
     */
    select?: SheetProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetProblem
     */
    omit?: SheetProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetProblemInclude<ExtArgs> | null
    /**
     * Filter, which SheetProblems to fetch.
     */
    where?: SheetProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SheetProblems to fetch.
     */
    orderBy?: SheetProblemOrderByWithRelationInput | SheetProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SheetProblems.
     */
    cursor?: SheetProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SheetProblems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SheetProblems.
     */
    skip?: number
    distinct?: SheetProblemScalarFieldEnum | SheetProblemScalarFieldEnum[]
  }

  /**
   * SheetProblem create
   */
  export type SheetProblemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetProblem
     */
    select?: SheetProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetProblem
     */
    omit?: SheetProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetProblemInclude<ExtArgs> | null
    /**
     * The data needed to create a SheetProblem.
     */
    data: XOR<SheetProblemCreateInput, SheetProblemUncheckedCreateInput>
  }

  /**
   * SheetProblem createMany
   */
  export type SheetProblemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SheetProblems.
     */
    data: SheetProblemCreateManyInput | SheetProblemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SheetProblem createManyAndReturn
   */
  export type SheetProblemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetProblem
     */
    select?: SheetProblemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SheetProblem
     */
    omit?: SheetProblemOmit<ExtArgs> | null
    /**
     * The data used to create many SheetProblems.
     */
    data: SheetProblemCreateManyInput | SheetProblemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetProblemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SheetProblem update
   */
  export type SheetProblemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetProblem
     */
    select?: SheetProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetProblem
     */
    omit?: SheetProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetProblemInclude<ExtArgs> | null
    /**
     * The data needed to update a SheetProblem.
     */
    data: XOR<SheetProblemUpdateInput, SheetProblemUncheckedUpdateInput>
    /**
     * Choose, which SheetProblem to update.
     */
    where: SheetProblemWhereUniqueInput
  }

  /**
   * SheetProblem updateMany
   */
  export type SheetProblemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SheetProblems.
     */
    data: XOR<SheetProblemUpdateManyMutationInput, SheetProblemUncheckedUpdateManyInput>
    /**
     * Filter which SheetProblems to update
     */
    where?: SheetProblemWhereInput
    /**
     * Limit how many SheetProblems to update.
     */
    limit?: number
  }

  /**
   * SheetProblem updateManyAndReturn
   */
  export type SheetProblemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetProblem
     */
    select?: SheetProblemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SheetProblem
     */
    omit?: SheetProblemOmit<ExtArgs> | null
    /**
     * The data used to update SheetProblems.
     */
    data: XOR<SheetProblemUpdateManyMutationInput, SheetProblemUncheckedUpdateManyInput>
    /**
     * Filter which SheetProblems to update
     */
    where?: SheetProblemWhereInput
    /**
     * Limit how many SheetProblems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetProblemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SheetProblem upsert
   */
  export type SheetProblemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetProblem
     */
    select?: SheetProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetProblem
     */
    omit?: SheetProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetProblemInclude<ExtArgs> | null
    /**
     * The filter to search for the SheetProblem to update in case it exists.
     */
    where: SheetProblemWhereUniqueInput
    /**
     * In case the SheetProblem found by the `where` argument doesn't exist, create a new SheetProblem with this data.
     */
    create: XOR<SheetProblemCreateInput, SheetProblemUncheckedCreateInput>
    /**
     * In case the SheetProblem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SheetProblemUpdateInput, SheetProblemUncheckedUpdateInput>
  }

  /**
   * SheetProblem delete
   */
  export type SheetProblemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetProblem
     */
    select?: SheetProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetProblem
     */
    omit?: SheetProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetProblemInclude<ExtArgs> | null
    /**
     * Filter which SheetProblem to delete.
     */
    where: SheetProblemWhereUniqueInput
  }

  /**
   * SheetProblem deleteMany
   */
  export type SheetProblemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SheetProblems to delete
     */
    where?: SheetProblemWhereInput
    /**
     * Limit how many SheetProblems to delete.
     */
    limit?: number
  }

  /**
   * SheetProblem.User
   */
  export type SheetProblem$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * SheetProblem without action
   */
  export type SheetProblemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetProblem
     */
    select?: SheetProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetProblem
     */
    omit?: SheetProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetProblemInclude<ExtArgs> | null
  }


  /**
   * Model Purchase
   */

  export type AggregatePurchase = {
    _count: PurchaseCountAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  export type PurchaseMinAggregateOutputType = {
    id: string | null
    userId: string | null
    sheetId: string | null
    boughtAt: Date | null
  }

  export type PurchaseMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    sheetId: string | null
    boughtAt: Date | null
  }

  export type PurchaseCountAggregateOutputType = {
    id: number
    userId: number
    sheetId: number
    boughtAt: number
    _all: number
  }


  export type PurchaseMinAggregateInputType = {
    id?: true
    userId?: true
    sheetId?: true
    boughtAt?: true
  }

  export type PurchaseMaxAggregateInputType = {
    id?: true
    userId?: true
    sheetId?: true
    boughtAt?: true
  }

  export type PurchaseCountAggregateInputType = {
    id?: true
    userId?: true
    sheetId?: true
    boughtAt?: true
    _all?: true
  }

  export type PurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchase to aggregate.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Purchases
    **/
    _count?: true | PurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseMaxAggregateInputType
  }

  export type GetPurchaseAggregateType<T extends PurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchase[P]>
      : GetScalarType<T[P], AggregatePurchase[P]>
  }




  export type PurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithAggregationInput | PurchaseOrderByWithAggregationInput[]
    by: PurchaseScalarFieldEnum[] | PurchaseScalarFieldEnum
    having?: PurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseCountAggregateInputType | true
    _min?: PurchaseMinAggregateInputType
    _max?: PurchaseMaxAggregateInputType
  }

  export type PurchaseGroupByOutputType = {
    id: string
    userId: string
    sheetId: string
    boughtAt: Date
    _count: PurchaseCountAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  type GetPurchaseGroupByPayload<T extends PurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sheetId?: boolean
    boughtAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
    payment?: boolean | Purchase$paymentArgs<ExtArgs>
    _count?: boolean | PurchaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sheetId?: boolean
    boughtAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sheetId?: boolean
    boughtAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectScalar = {
    id?: boolean
    userId?: boolean
    sheetId?: boolean
    boughtAt?: boolean
  }

  export type PurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "sheetId" | "boughtAt", ExtArgs["result"]["purchase"]>
  export type PurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
    payment?: boolean | Purchase$paymentArgs<ExtArgs>
    _count?: boolean | PurchaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }
  export type PurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }

  export type $PurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Purchase"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      sheet: Prisma.$SheetPayload<ExtArgs>
      payment: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      sheetId: string
      boughtAt: Date
    }, ExtArgs["result"]["purchase"]>
    composites: {}
  }

  type PurchaseGetPayload<S extends boolean | null | undefined | PurchaseDefaultArgs> = $Result.GetResult<Prisma.$PurchasePayload, S>

  type PurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseCountAggregateInputType | true
    }

  export interface PurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Purchase'], meta: { name: 'Purchase' } }
    /**
     * Find zero or one Purchase that matches the filter.
     * @param {PurchaseFindUniqueArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseFindUniqueArgs>(args: SelectSubset<T, PurchaseFindUniqueArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Purchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseFindUniqueOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseFindFirstArgs>(args?: SelectSubset<T, PurchaseFindFirstArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchase.findMany()
     * 
     * // Get first 10 Purchases
     * const purchases = await prisma.purchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseWithIdOnly = await prisma.purchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseFindManyArgs>(args?: SelectSubset<T, PurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Purchase.
     * @param {PurchaseCreateArgs} args - Arguments to create a Purchase.
     * @example
     * // Create one Purchase
     * const Purchase = await prisma.purchase.create({
     *   data: {
     *     // ... data to create a Purchase
     *   }
     * })
     * 
     */
    create<T extends PurchaseCreateArgs>(args: SelectSubset<T, PurchaseCreateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Purchases.
     * @param {PurchaseCreateManyArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseCreateManyArgs>(args?: SelectSubset<T, PurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Purchases and returns the data saved in the database.
     * @param {PurchaseCreateManyAndReturnArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Purchases and only return the `id`
     * const purchaseWithIdOnly = await prisma.purchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Purchase.
     * @param {PurchaseDeleteArgs} args - Arguments to delete one Purchase.
     * @example
     * // Delete one Purchase
     * const Purchase = await prisma.purchase.delete({
     *   where: {
     *     // ... filter to delete one Purchase
     *   }
     * })
     * 
     */
    delete<T extends PurchaseDeleteArgs>(args: SelectSubset<T, PurchaseDeleteArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Purchase.
     * @param {PurchaseUpdateArgs} args - Arguments to update one Purchase.
     * @example
     * // Update one Purchase
     * const purchase = await prisma.purchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseUpdateArgs>(args: SelectSubset<T, PurchaseUpdateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Purchases.
     * @param {PurchaseDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseDeleteManyArgs>(args?: SelectSubset<T, PurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseUpdateManyArgs>(args: SelectSubset<T, PurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases and returns the data updated in the database.
     * @param {PurchaseUpdateManyAndReturnArgs} args - Arguments to update many Purchases.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Purchases and only return the `id`
     * const purchaseWithIdOnly = await prisma.purchase.updateManyAndReturn({
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
    updateManyAndReturn<T extends PurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Purchase.
     * @param {PurchaseUpsertArgs} args - Arguments to update or create a Purchase.
     * @example
     * // Update or create a Purchase
     * const purchase = await prisma.purchase.upsert({
     *   create: {
     *     // ... data to create a Purchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchase we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseUpsertArgs>(args: SelectSubset<T, PurchaseUpsertArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchase.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
    **/
    count<T extends PurchaseCountArgs>(
      args?: Subset<T, PurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PurchaseAggregateArgs>(args: Subset<T, PurchaseAggregateArgs>): Prisma.PrismaPromise<GetPurchaseAggregateType<T>>

    /**
     * Group by Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseGroupByArgs} args - Group by arguments.
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
      T extends PurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Purchase model
   */
  readonly fields: PurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Purchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sheet<T extends SheetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SheetDefaultArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payment<T extends Purchase$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Purchase$paymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Purchase model
   */
  interface PurchaseFieldRefs {
    readonly id: FieldRef<"Purchase", 'String'>
    readonly userId: FieldRef<"Purchase", 'String'>
    readonly sheetId: FieldRef<"Purchase", 'String'>
    readonly boughtAt: FieldRef<"Purchase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Purchase findUnique
   */
  export type PurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findUniqueOrThrow
   */
  export type PurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findFirst
   */
  export type PurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findFirstOrThrow
   */
  export type PurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findMany
   */
  export type PurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase create
   */
  export type PurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Purchase.
     */
    data: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
  }

  /**
   * Purchase createMany
   */
  export type PurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Purchase createManyAndReturn
   */
  export type PurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purchase update
   */
  export type PurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Purchase.
     */
    data: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
    /**
     * Choose, which Purchase to update.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase updateMany
   */
  export type PurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
  }

  /**
   * Purchase updateManyAndReturn
   */
  export type PurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purchase upsert
   */
  export type PurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Purchase to update in case it exists.
     */
    where: PurchaseWhereUniqueInput
    /**
     * In case the Purchase found by the `where` argument doesn't exist, create a new Purchase with this data.
     */
    create: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
    /**
     * In case the Purchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
  }

  /**
   * Purchase delete
   */
  export type PurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter which Purchase to delete.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase deleteMany
   */
  export type PurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchases to delete
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to delete.
     */
    limit?: number
  }

  /**
   * Purchase.payment
   */
  export type Purchase$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Purchase without action
   */
  export type PurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    purchaseId: string | null
    amount: number | null
    currency: string | null
    status: string | null
    orderId: string | null
    paymentId: string | null
    paymentMethod: string | null
    transactionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    purchaseId: string | null
    amount: number | null
    currency: string | null
    status: string | null
    orderId: string | null
    paymentId: string | null
    paymentMethod: string | null
    transactionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    userId: number
    purchaseId: number
    amount: number
    currency: number
    status: number
    orderId: number
    paymentId: number
    paymentMethod: number
    transactionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    userId?: true
    purchaseId?: true
    amount?: true
    currency?: true
    status?: true
    orderId?: true
    paymentId?: true
    paymentMethod?: true
    transactionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    userId?: true
    purchaseId?: true
    amount?: true
    currency?: true
    status?: true
    orderId?: true
    paymentId?: true
    paymentMethod?: true
    transactionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    userId?: true
    purchaseId?: true
    amount?: true
    currency?: true
    status?: true
    orderId?: true
    paymentId?: true
    paymentMethod?: true
    transactionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    userId: string
    purchaseId: string
    amount: number
    currency: string
    status: string
    orderId: string
    paymentId: string
    paymentMethod: string | null
    transactionId: string | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    purchaseId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    orderId?: boolean
    paymentId?: boolean
    paymentMethod?: boolean
    transactionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    purchaseId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    orderId?: boolean
    paymentId?: boolean
    paymentMethod?: boolean
    transactionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    purchaseId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    orderId?: boolean
    paymentId?: boolean
    paymentMethod?: boolean
    transactionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    userId?: boolean
    purchaseId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    orderId?: boolean
    paymentId?: boolean
    paymentMethod?: boolean
    transactionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "purchaseId" | "amount" | "currency" | "status" | "orderId" | "paymentId" | "paymentMethod" | "transactionId" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      purchase: Prisma.$PurchasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      purchaseId: string
      amount: number
      currency: string
      status: string
      orderId: string
      paymentId: string
      paymentMethod: string | null
      transactionId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    purchase<T extends PurchaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseDefaultArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly userId: FieldRef<"Payment", 'String'>
    readonly purchaseId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly orderId: FieldRef<"Payment", 'String'>
    readonly paymentId: FieldRef<"Payment", 'String'>
    readonly paymentMethod: FieldRef<"Payment", 'String'>
    readonly transactionId: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
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


  export const SocialScalarFieldEnum: {
    id: 'id',
    website: 'website',
    twitter: 'twitter',
    github: 'github',
    linkedIn: 'linkedIn'
  };

  export type SocialScalarFieldEnum = (typeof SocialScalarFieldEnum)[keyof typeof SocialScalarFieldEnum]


  export const BasicInfoScalarFieldEnum: {
    id: 'id',
    gender: 'gender',
    bio: 'bio',
    birth: 'birth',
    socialId: 'socialId'
  };

  export type BasicInfoScalarFieldEnum = (typeof BasicInfoScalarFieldEnum)[keyof typeof BasicInfoScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    email: 'email',
    username: 'username',
    password: 'password',
    profileImage: 'profileImage',
    role: 'role',
    isGoogleAuth: 'isGoogleAuth',
    isEmailVerified: 'isEmailVerified',
    isActive: 'isActive',
    emailVerificationToken: 'emailVerificationToken',
    emailVerificationExpiry: 'emailVerificationExpiry',
    forgotPasswordToken: 'forgotPasswordToken',
    forgotPasswordExpiry: 'forgotPasswordExpiry',
    refreshToken: 'refreshToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    basicInfoId: 'basicInfoId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProblemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    difficulty: 'difficulty',
    tags: 'tags',
    userId: 'userId',
    examples: 'examples',
    constraints: 'constraints',
    hints: 'hints',
    editorial: 'editorial',
    isDemo: 'isDemo',
    isPremium: 'isPremium',
    company: 'company',
    testcases: 'testcases',
    codeSnippets: 'codeSnippets',
    referenceSolutions: 'referenceSolutions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProblemScalarFieldEnum = (typeof ProblemScalarFieldEnum)[keyof typeof ProblemScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    source_code: 'source_code',
    language: 'language',
    stdin: 'stdin',
    stdout: 'stdout',
    stderr: 'stderr',
    compileOutput: 'compileOutput',
    status: 'status',
    memory: 'memory',
    time: 'time',
    feedback: 'feedback',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    problemId: 'problemId'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const TestcaseScalarFieldEnum: {
    id: 'id',
    testCase: 'testCase',
    passed: 'passed',
    stdout: 'stdout',
    stderr: 'stderr',
    expected: 'expected',
    compileOutput: 'compileOutput',
    status: 'status',
    memory: 'memory',
    time: 'time',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    submissionId: 'submissionId'
  };

  export type TestcaseScalarFieldEnum = (typeof TestcaseScalarFieldEnum)[keyof typeof TestcaseScalarFieldEnum]


  export const SolvedProblemScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    problemId: 'problemId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SolvedProblemScalarFieldEnum = (typeof SolvedProblemScalarFieldEnum)[keyof typeof SolvedProblemScalarFieldEnum]


  export const PlaylistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    isPrivate: 'isPrivate',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlaylistScalarFieldEnum = (typeof PlaylistScalarFieldEnum)[keyof typeof PlaylistScalarFieldEnum]


  export const ProblemInPlaylistScalarFieldEnum: {
    id: 'id',
    playlistId: 'playlistId',
    problemId: 'problemId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProblemInPlaylistScalarFieldEnum = (typeof ProblemInPlaylistScalarFieldEnum)[keyof typeof ProblemInPlaylistScalarFieldEnum]


  export const SheetScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    languages: 'languages',
    tags: 'tags',
    price: 'price',
    isPremium: 'isPremium',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SheetScalarFieldEnum = (typeof SheetScalarFieldEnum)[keyof typeof SheetScalarFieldEnum]


  export const SheetProblemScalarFieldEnum: {
    id: 'id',
    sheetId: 'sheetId',
    problemId: 'problemId',
    orderIndex: 'orderIndex',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type SheetProblemScalarFieldEnum = (typeof SheetProblemScalarFieldEnum)[keyof typeof SheetProblemScalarFieldEnum]


  export const PurchaseScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sheetId: 'sheetId',
    boughtAt: 'boughtAt'
  };

  export type PurchaseScalarFieldEnum = (typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    purchaseId: 'purchaseId',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    orderId: 'orderId',
    paymentId: 'paymentId',
    paymentMethod: 'paymentMethod',
    transactionId: 'transactionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const SocialOrderByRelevanceFieldEnum: {
    id: 'id',
    website: 'website',
    twitter: 'twitter',
    github: 'github',
    linkedIn: 'linkedIn'
  };

  export type SocialOrderByRelevanceFieldEnum = (typeof SocialOrderByRelevanceFieldEnum)[keyof typeof SocialOrderByRelevanceFieldEnum]


  export const BasicInfoOrderByRelevanceFieldEnum: {
    id: 'id',
    bio: 'bio',
    socialId: 'socialId'
  };

  export type BasicInfoOrderByRelevanceFieldEnum = (typeof BasicInfoOrderByRelevanceFieldEnum)[keyof typeof BasicInfoOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    email: 'email',
    username: 'username',
    password: 'password',
    profileImage: 'profileImage',
    emailVerificationToken: 'emailVerificationToken',
    forgotPasswordToken: 'forgotPasswordToken',
    refreshToken: 'refreshToken',
    basicInfoId: 'basicInfoId'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const ProblemOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    tags: 'tags',
    userId: 'userId',
    constraints: 'constraints',
    editorial: 'editorial',
    company: 'company'
  };

  export type ProblemOrderByRelevanceFieldEnum = (typeof ProblemOrderByRelevanceFieldEnum)[keyof typeof ProblemOrderByRelevanceFieldEnum]


  export const SubmissionOrderByRelevanceFieldEnum: {
    id: 'id',
    language: 'language',
    stdin: 'stdin',
    stdout: 'stdout',
    stderr: 'stderr',
    compileOutput: 'compileOutput',
    status: 'status',
    memory: 'memory',
    time: 'time',
    feedback: 'feedback',
    userId: 'userId',
    problemId: 'problemId'
  };

  export type SubmissionOrderByRelevanceFieldEnum = (typeof SubmissionOrderByRelevanceFieldEnum)[keyof typeof SubmissionOrderByRelevanceFieldEnum]


  export const TestcaseOrderByRelevanceFieldEnum: {
    id: 'id',
    stdout: 'stdout',
    stderr: 'stderr',
    expected: 'expected',
    compileOutput: 'compileOutput',
    status: 'status',
    memory: 'memory',
    time: 'time',
    submissionId: 'submissionId'
  };

  export type TestcaseOrderByRelevanceFieldEnum = (typeof TestcaseOrderByRelevanceFieldEnum)[keyof typeof TestcaseOrderByRelevanceFieldEnum]


  export const SolvedProblemOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    problemId: 'problemId'
  };

  export type SolvedProblemOrderByRelevanceFieldEnum = (typeof SolvedProblemOrderByRelevanceFieldEnum)[keyof typeof SolvedProblemOrderByRelevanceFieldEnum]


  export const PlaylistOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    userId: 'userId'
  };

  export type PlaylistOrderByRelevanceFieldEnum = (typeof PlaylistOrderByRelevanceFieldEnum)[keyof typeof PlaylistOrderByRelevanceFieldEnum]


  export const ProblemInPlaylistOrderByRelevanceFieldEnum: {
    id: 'id',
    playlistId: 'playlistId',
    problemId: 'problemId'
  };

  export type ProblemInPlaylistOrderByRelevanceFieldEnum = (typeof ProblemInPlaylistOrderByRelevanceFieldEnum)[keyof typeof ProblemInPlaylistOrderByRelevanceFieldEnum]


  export const SheetOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    languages: 'languages',
    tags: 'tags'
  };

  export type SheetOrderByRelevanceFieldEnum = (typeof SheetOrderByRelevanceFieldEnum)[keyof typeof SheetOrderByRelevanceFieldEnum]


  export const SheetProblemOrderByRelevanceFieldEnum: {
    id: 'id',
    sheetId: 'sheetId',
    problemId: 'problemId',
    userId: 'userId'
  };

  export type SheetProblemOrderByRelevanceFieldEnum = (typeof SheetProblemOrderByRelevanceFieldEnum)[keyof typeof SheetProblemOrderByRelevanceFieldEnum]


  export const PurchaseOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    sheetId: 'sheetId'
  };

  export type PurchaseOrderByRelevanceFieldEnum = (typeof PurchaseOrderByRelevanceFieldEnum)[keyof typeof PurchaseOrderByRelevanceFieldEnum]


  export const PaymentOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    purchaseId: 'purchaseId',
    currency: 'currency',
    status: 'status',
    orderId: 'orderId',
    paymentId: 'paymentId',
    paymentMethod: 'paymentMethod',
    transactionId: 'transactionId'
  };

  export type PaymentOrderByRelevanceFieldEnum = (typeof PaymentOrderByRelevanceFieldEnum)[keyof typeof PaymentOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty'>
    


  /**
   * Reference to a field of type 'Difficulty[]'
   */
  export type ListEnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type SocialWhereInput = {
    AND?: SocialWhereInput | SocialWhereInput[]
    OR?: SocialWhereInput[]
    NOT?: SocialWhereInput | SocialWhereInput[]
    id?: StringFilter<"Social"> | string
    website?: StringNullableFilter<"Social"> | string | null
    twitter?: StringNullableFilter<"Social"> | string | null
    github?: StringNullableFilter<"Social"> | string | null
    linkedIn?: StringNullableFilter<"Social"> | string | null
    BasicInfo?: XOR<BasicInfoNullableScalarRelationFilter, BasicInfoWhereInput> | null
  }

  export type SocialOrderByWithRelationInput = {
    id?: SortOrder
    website?: SortOrderInput | SortOrder
    twitter?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    linkedIn?: SortOrderInput | SortOrder
    BasicInfo?: BasicInfoOrderByWithRelationInput
    _relevance?: SocialOrderByRelevanceInput
  }

  export type SocialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SocialWhereInput | SocialWhereInput[]
    OR?: SocialWhereInput[]
    NOT?: SocialWhereInput | SocialWhereInput[]
    website?: StringNullableFilter<"Social"> | string | null
    twitter?: StringNullableFilter<"Social"> | string | null
    github?: StringNullableFilter<"Social"> | string | null
    linkedIn?: StringNullableFilter<"Social"> | string | null
    BasicInfo?: XOR<BasicInfoNullableScalarRelationFilter, BasicInfoWhereInput> | null
  }, "id">

  export type SocialOrderByWithAggregationInput = {
    id?: SortOrder
    website?: SortOrderInput | SortOrder
    twitter?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    linkedIn?: SortOrderInput | SortOrder
    _count?: SocialCountOrderByAggregateInput
    _max?: SocialMaxOrderByAggregateInput
    _min?: SocialMinOrderByAggregateInput
  }

  export type SocialScalarWhereWithAggregatesInput = {
    AND?: SocialScalarWhereWithAggregatesInput | SocialScalarWhereWithAggregatesInput[]
    OR?: SocialScalarWhereWithAggregatesInput[]
    NOT?: SocialScalarWhereWithAggregatesInput | SocialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Social"> | string
    website?: StringNullableWithAggregatesFilter<"Social"> | string | null
    twitter?: StringNullableWithAggregatesFilter<"Social"> | string | null
    github?: StringNullableWithAggregatesFilter<"Social"> | string | null
    linkedIn?: StringNullableWithAggregatesFilter<"Social"> | string | null
  }

  export type BasicInfoWhereInput = {
    AND?: BasicInfoWhereInput | BasicInfoWhereInput[]
    OR?: BasicInfoWhereInput[]
    NOT?: BasicInfoWhereInput | BasicInfoWhereInput[]
    id?: StringFilter<"BasicInfo"> | string
    gender?: EnumGenderNullableFilter<"BasicInfo"> | $Enums.Gender | null
    bio?: StringNullableFilter<"BasicInfo"> | string | null
    birth?: DateTimeNullableFilter<"BasicInfo"> | Date | string | null
    socialId?: StringNullableFilter<"BasicInfo"> | string | null
    socials?: XOR<SocialNullableScalarRelationFilter, SocialWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type BasicInfoOrderByWithRelationInput = {
    id?: SortOrder
    gender?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    birth?: SortOrderInput | SortOrder
    socialId?: SortOrderInput | SortOrder
    socials?: SocialOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: BasicInfoOrderByRelevanceInput
  }

  export type BasicInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    socialId?: string
    AND?: BasicInfoWhereInput | BasicInfoWhereInput[]
    OR?: BasicInfoWhereInput[]
    NOT?: BasicInfoWhereInput | BasicInfoWhereInput[]
    gender?: EnumGenderNullableFilter<"BasicInfo"> | $Enums.Gender | null
    bio?: StringNullableFilter<"BasicInfo"> | string | null
    birth?: DateTimeNullableFilter<"BasicInfo"> | Date | string | null
    socials?: XOR<SocialNullableScalarRelationFilter, SocialWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "socialId">

  export type BasicInfoOrderByWithAggregationInput = {
    id?: SortOrder
    gender?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    birth?: SortOrderInput | SortOrder
    socialId?: SortOrderInput | SortOrder
    _count?: BasicInfoCountOrderByAggregateInput
    _max?: BasicInfoMaxOrderByAggregateInput
    _min?: BasicInfoMinOrderByAggregateInput
  }

  export type BasicInfoScalarWhereWithAggregatesInput = {
    AND?: BasicInfoScalarWhereWithAggregatesInput | BasicInfoScalarWhereWithAggregatesInput[]
    OR?: BasicInfoScalarWhereWithAggregatesInput[]
    NOT?: BasicInfoScalarWhereWithAggregatesInput | BasicInfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BasicInfo"> | string
    gender?: EnumGenderNullableWithAggregatesFilter<"BasicInfo"> | $Enums.Gender | null
    bio?: StringNullableWithAggregatesFilter<"BasicInfo"> | string | null
    birth?: DateTimeNullableWithAggregatesFilter<"BasicInfo"> | Date | string | null
    socialId?: StringNullableWithAggregatesFilter<"BasicInfo"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fullname?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    profileImage?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isGoogleAuth?: BoolFilter<"User"> | boolean
    isEmailVerified?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    emailVerificationToken?: StringNullableFilter<"User"> | string | null
    emailVerificationExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    forgotPasswordToken?: StringNullableFilter<"User"> | string | null
    forgotPasswordExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    basicInfoId?: StringNullableFilter<"User"> | string | null
    problems?: ProblemListRelationFilter
    submissions?: SubmissionListRelationFilter
    solvedProblems?: SolvedProblemListRelationFilter
    playlists?: PlaylistListRelationFilter
    purchases?: PurchaseListRelationFilter
    sheetAssignments?: SheetProblemListRelationFilter
    basicInfo?: XOR<BasicInfoNullableScalarRelationFilter, BasicInfoWhereInput> | null
    payment?: PaymentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrderInput | SortOrder
    email?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    profileImage?: SortOrder
    role?: SortOrder
    isGoogleAuth?: SortOrder
    isEmailVerified?: SortOrder
    isActive?: SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    emailVerificationExpiry?: SortOrderInput | SortOrder
    forgotPasswordToken?: SortOrderInput | SortOrder
    forgotPasswordExpiry?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    basicInfoId?: SortOrderInput | SortOrder
    problems?: ProblemOrderByRelationAggregateInput
    submissions?: SubmissionOrderByRelationAggregateInput
    solvedProblems?: SolvedProblemOrderByRelationAggregateInput
    playlists?: PlaylistOrderByRelationAggregateInput
    purchases?: PurchaseOrderByRelationAggregateInput
    sheetAssignments?: SheetProblemOrderByRelationAggregateInput
    basicInfo?: BasicInfoOrderByWithRelationInput
    payment?: PaymentOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    basicInfoId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullname?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    profileImage?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isGoogleAuth?: BoolFilter<"User"> | boolean
    isEmailVerified?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    emailVerificationToken?: StringNullableFilter<"User"> | string | null
    emailVerificationExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    forgotPasswordToken?: StringNullableFilter<"User"> | string | null
    forgotPasswordExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    problems?: ProblemListRelationFilter
    submissions?: SubmissionListRelationFilter
    solvedProblems?: SolvedProblemListRelationFilter
    playlists?: PlaylistListRelationFilter
    purchases?: PurchaseListRelationFilter
    sheetAssignments?: SheetProblemListRelationFilter
    basicInfo?: XOR<BasicInfoNullableScalarRelationFilter, BasicInfoWhereInput> | null
    payment?: PaymentListRelationFilter
  }, "id" | "email" | "username" | "basicInfoId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrderInput | SortOrder
    email?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    profileImage?: SortOrder
    role?: SortOrder
    isGoogleAuth?: SortOrder
    isEmailVerified?: SortOrder
    isActive?: SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    emailVerificationExpiry?: SortOrderInput | SortOrder
    forgotPasswordToken?: SortOrderInput | SortOrder
    forgotPasswordExpiry?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    basicInfoId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fullname?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    profileImage?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isGoogleAuth?: BoolWithAggregatesFilter<"User"> | boolean
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    emailVerificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerificationExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    forgotPasswordToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    forgotPasswordExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    basicInfoId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ProblemWhereInput = {
    AND?: ProblemWhereInput | ProblemWhereInput[]
    OR?: ProblemWhereInput[]
    NOT?: ProblemWhereInput | ProblemWhereInput[]
    id?: StringFilter<"Problem"> | string
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    difficulty?: EnumDifficultyFilter<"Problem"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"Problem">
    userId?: StringFilter<"Problem"> | string
    examples?: JsonFilter<"Problem">
    constraints?: StringFilter<"Problem"> | string
    hints?: JsonNullableFilter<"Problem">
    editorial?: StringNullableFilter<"Problem"> | string | null
    isDemo?: BoolFilter<"Problem"> | boolean
    isPremium?: BoolFilter<"Problem"> | boolean
    company?: StringNullableListFilter<"Problem">
    testcases?: JsonFilter<"Problem">
    codeSnippets?: JsonFilter<"Problem">
    referenceSolutions?: JsonFilter<"Problem">
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    submissions?: SubmissionListRelationFilter
    sheetAssignments?: SheetProblemListRelationFilter
    solvedBy?: SolvedProblemListRelationFilter
    problemInPlaylist?: ProblemInPlaylistListRelationFilter
  }

  export type ProblemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    userId?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    hints?: SortOrderInput | SortOrder
    editorial?: SortOrderInput | SortOrder
    isDemo?: SortOrder
    isPremium?: SortOrder
    company?: SortOrder
    testcases?: SortOrder
    codeSnippets?: SortOrder
    referenceSolutions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    submissions?: SubmissionOrderByRelationAggregateInput
    sheetAssignments?: SheetProblemOrderByRelationAggregateInput
    solvedBy?: SolvedProblemOrderByRelationAggregateInput
    problemInPlaylist?: ProblemInPlaylistOrderByRelationAggregateInput
    _relevance?: ProblemOrderByRelevanceInput
  }

  export type ProblemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProblemWhereInput | ProblemWhereInput[]
    OR?: ProblemWhereInput[]
    NOT?: ProblemWhereInput | ProblemWhereInput[]
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    difficulty?: EnumDifficultyFilter<"Problem"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"Problem">
    userId?: StringFilter<"Problem"> | string
    examples?: JsonFilter<"Problem">
    constraints?: StringFilter<"Problem"> | string
    hints?: JsonNullableFilter<"Problem">
    editorial?: StringNullableFilter<"Problem"> | string | null
    isDemo?: BoolFilter<"Problem"> | boolean
    isPremium?: BoolFilter<"Problem"> | boolean
    company?: StringNullableListFilter<"Problem">
    testcases?: JsonFilter<"Problem">
    codeSnippets?: JsonFilter<"Problem">
    referenceSolutions?: JsonFilter<"Problem">
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    submissions?: SubmissionListRelationFilter
    sheetAssignments?: SheetProblemListRelationFilter
    solvedBy?: SolvedProblemListRelationFilter
    problemInPlaylist?: ProblemInPlaylistListRelationFilter
  }, "id">

  export type ProblemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    userId?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    hints?: SortOrderInput | SortOrder
    editorial?: SortOrderInput | SortOrder
    isDemo?: SortOrder
    isPremium?: SortOrder
    company?: SortOrder
    testcases?: SortOrder
    codeSnippets?: SortOrder
    referenceSolutions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProblemCountOrderByAggregateInput
    _max?: ProblemMaxOrderByAggregateInput
    _min?: ProblemMinOrderByAggregateInput
  }

  export type ProblemScalarWhereWithAggregatesInput = {
    AND?: ProblemScalarWhereWithAggregatesInput | ProblemScalarWhereWithAggregatesInput[]
    OR?: ProblemScalarWhereWithAggregatesInput[]
    NOT?: ProblemScalarWhereWithAggregatesInput | ProblemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Problem"> | string
    title?: StringWithAggregatesFilter<"Problem"> | string
    description?: StringWithAggregatesFilter<"Problem"> | string
    difficulty?: EnumDifficultyWithAggregatesFilter<"Problem"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"Problem">
    userId?: StringWithAggregatesFilter<"Problem"> | string
    examples?: JsonWithAggregatesFilter<"Problem">
    constraints?: StringWithAggregatesFilter<"Problem"> | string
    hints?: JsonNullableWithAggregatesFilter<"Problem">
    editorial?: StringNullableWithAggregatesFilter<"Problem"> | string | null
    isDemo?: BoolWithAggregatesFilter<"Problem"> | boolean
    isPremium?: BoolWithAggregatesFilter<"Problem"> | boolean
    company?: StringNullableListFilter<"Problem">
    testcases?: JsonWithAggregatesFilter<"Problem">
    codeSnippets?: JsonWithAggregatesFilter<"Problem">
    referenceSolutions?: JsonWithAggregatesFilter<"Problem">
    createdAt?: DateTimeWithAggregatesFilter<"Problem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Problem"> | Date | string
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: StringFilter<"Submission"> | string
    source_code?: JsonFilter<"Submission">
    language?: StringFilter<"Submission"> | string
    stdin?: StringNullableFilter<"Submission"> | string | null
    stdout?: StringNullableFilter<"Submission"> | string | null
    stderr?: StringNullableFilter<"Submission"> | string | null
    compileOutput?: StringNullableFilter<"Submission"> | string | null
    status?: StringFilter<"Submission"> | string
    memory?: StringNullableFilter<"Submission"> | string | null
    time?: StringNullableFilter<"Submission"> | string | null
    feedback?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    userId?: StringFilter<"Submission"> | string
    problemId?: StringNullableFilter<"Submission"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemNullableScalarRelationFilter, ProblemWhereInput> | null
    testCases?: TestcaseListRelationFilter
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    source_code?: SortOrder
    language?: SortOrder
    stdin?: SortOrderInput | SortOrder
    stdout?: SortOrderInput | SortOrder
    stderr?: SortOrderInput | SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    problemId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    problem?: ProblemOrderByWithRelationInput
    testCases?: TestcaseOrderByRelationAggregateInput
    _relevance?: SubmissionOrderByRelevanceInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    source_code?: JsonFilter<"Submission">
    language?: StringFilter<"Submission"> | string
    stdin?: StringNullableFilter<"Submission"> | string | null
    stdout?: StringNullableFilter<"Submission"> | string | null
    stderr?: StringNullableFilter<"Submission"> | string | null
    compileOutput?: StringNullableFilter<"Submission"> | string | null
    status?: StringFilter<"Submission"> | string
    memory?: StringNullableFilter<"Submission"> | string | null
    time?: StringNullableFilter<"Submission"> | string | null
    feedback?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    userId?: StringFilter<"Submission"> | string
    problemId?: StringNullableFilter<"Submission"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemNullableScalarRelationFilter, ProblemWhereInput> | null
    testCases?: TestcaseListRelationFilter
  }, "id">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    source_code?: SortOrder
    language?: SortOrder
    stdin?: SortOrderInput | SortOrder
    stdout?: SortOrderInput | SortOrder
    stderr?: SortOrderInput | SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    problemId?: SortOrderInput | SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Submission"> | string
    source_code?: JsonWithAggregatesFilter<"Submission">
    language?: StringWithAggregatesFilter<"Submission"> | string
    stdin?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    stdout?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    stderr?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    compileOutput?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    status?: StringWithAggregatesFilter<"Submission"> | string
    memory?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    time?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    feedback?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
    userId?: StringWithAggregatesFilter<"Submission"> | string
    problemId?: StringNullableWithAggregatesFilter<"Submission"> | string | null
  }

  export type TestcaseWhereInput = {
    AND?: TestcaseWhereInput | TestcaseWhereInput[]
    OR?: TestcaseWhereInput[]
    NOT?: TestcaseWhereInput | TestcaseWhereInput[]
    id?: StringFilter<"Testcase"> | string
    testCase?: IntFilter<"Testcase"> | number
    passed?: BoolFilter<"Testcase"> | boolean
    stdout?: StringNullableFilter<"Testcase"> | string | null
    stderr?: StringNullableFilter<"Testcase"> | string | null
    expected?: StringFilter<"Testcase"> | string
    compileOutput?: StringNullableFilter<"Testcase"> | string | null
    status?: StringFilter<"Testcase"> | string
    memory?: StringNullableFilter<"Testcase"> | string | null
    time?: StringNullableFilter<"Testcase"> | string | null
    createdAt?: DateTimeFilter<"Testcase"> | Date | string
    updatedAt?: DateTimeFilter<"Testcase"> | Date | string
    submissionId?: StringNullableFilter<"Testcase"> | string | null
    submission?: XOR<SubmissionNullableScalarRelationFilter, SubmissionWhereInput> | null
  }

  export type TestcaseOrderByWithRelationInput = {
    id?: SortOrder
    testCase?: SortOrder
    passed?: SortOrder
    stdout?: SortOrderInput | SortOrder
    stderr?: SortOrderInput | SortOrder
    expected?: SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissionId?: SortOrderInput | SortOrder
    submission?: SubmissionOrderByWithRelationInput
    _relevance?: TestcaseOrderByRelevanceInput
  }

  export type TestcaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestcaseWhereInput | TestcaseWhereInput[]
    OR?: TestcaseWhereInput[]
    NOT?: TestcaseWhereInput | TestcaseWhereInput[]
    testCase?: IntFilter<"Testcase"> | number
    passed?: BoolFilter<"Testcase"> | boolean
    stdout?: StringNullableFilter<"Testcase"> | string | null
    stderr?: StringNullableFilter<"Testcase"> | string | null
    expected?: StringFilter<"Testcase"> | string
    compileOutput?: StringNullableFilter<"Testcase"> | string | null
    status?: StringFilter<"Testcase"> | string
    memory?: StringNullableFilter<"Testcase"> | string | null
    time?: StringNullableFilter<"Testcase"> | string | null
    createdAt?: DateTimeFilter<"Testcase"> | Date | string
    updatedAt?: DateTimeFilter<"Testcase"> | Date | string
    submissionId?: StringNullableFilter<"Testcase"> | string | null
    submission?: XOR<SubmissionNullableScalarRelationFilter, SubmissionWhereInput> | null
  }, "id">

  export type TestcaseOrderByWithAggregationInput = {
    id?: SortOrder
    testCase?: SortOrder
    passed?: SortOrder
    stdout?: SortOrderInput | SortOrder
    stderr?: SortOrderInput | SortOrder
    expected?: SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissionId?: SortOrderInput | SortOrder
    _count?: TestcaseCountOrderByAggregateInput
    _avg?: TestcaseAvgOrderByAggregateInput
    _max?: TestcaseMaxOrderByAggregateInput
    _min?: TestcaseMinOrderByAggregateInput
    _sum?: TestcaseSumOrderByAggregateInput
  }

  export type TestcaseScalarWhereWithAggregatesInput = {
    AND?: TestcaseScalarWhereWithAggregatesInput | TestcaseScalarWhereWithAggregatesInput[]
    OR?: TestcaseScalarWhereWithAggregatesInput[]
    NOT?: TestcaseScalarWhereWithAggregatesInput | TestcaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Testcase"> | string
    testCase?: IntWithAggregatesFilter<"Testcase"> | number
    passed?: BoolWithAggregatesFilter<"Testcase"> | boolean
    stdout?: StringNullableWithAggregatesFilter<"Testcase"> | string | null
    stderr?: StringNullableWithAggregatesFilter<"Testcase"> | string | null
    expected?: StringWithAggregatesFilter<"Testcase"> | string
    compileOutput?: StringNullableWithAggregatesFilter<"Testcase"> | string | null
    status?: StringWithAggregatesFilter<"Testcase"> | string
    memory?: StringNullableWithAggregatesFilter<"Testcase"> | string | null
    time?: StringNullableWithAggregatesFilter<"Testcase"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Testcase"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Testcase"> | Date | string
    submissionId?: StringNullableWithAggregatesFilter<"Testcase"> | string | null
  }

  export type SolvedProblemWhereInput = {
    AND?: SolvedProblemWhereInput | SolvedProblemWhereInput[]
    OR?: SolvedProblemWhereInput[]
    NOT?: SolvedProblemWhereInput | SolvedProblemWhereInput[]
    id?: StringFilter<"SolvedProblem"> | string
    userId?: StringNullableFilter<"SolvedProblem"> | string | null
    problemId?: StringNullableFilter<"SolvedProblem"> | string | null
    createdAt?: DateTimeFilter<"SolvedProblem"> | Date | string
    updatedAt?: DateTimeFilter<"SolvedProblem"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    problem?: XOR<ProblemNullableScalarRelationFilter, ProblemWhereInput> | null
  }

  export type SolvedProblemOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    problemId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    problem?: ProblemOrderByWithRelationInput
    _relevance?: SolvedProblemOrderByRelevanceInput
  }

  export type SolvedProblemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_problemId?: SolvedProblemUserIdProblemIdCompoundUniqueInput
    AND?: SolvedProblemWhereInput | SolvedProblemWhereInput[]
    OR?: SolvedProblemWhereInput[]
    NOT?: SolvedProblemWhereInput | SolvedProblemWhereInput[]
    userId?: StringNullableFilter<"SolvedProblem"> | string | null
    problemId?: StringNullableFilter<"SolvedProblem"> | string | null
    createdAt?: DateTimeFilter<"SolvedProblem"> | Date | string
    updatedAt?: DateTimeFilter<"SolvedProblem"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    problem?: XOR<ProblemNullableScalarRelationFilter, ProblemWhereInput> | null
  }, "id" | "userId_problemId">

  export type SolvedProblemOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    problemId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SolvedProblemCountOrderByAggregateInput
    _max?: SolvedProblemMaxOrderByAggregateInput
    _min?: SolvedProblemMinOrderByAggregateInput
  }

  export type SolvedProblemScalarWhereWithAggregatesInput = {
    AND?: SolvedProblemScalarWhereWithAggregatesInput | SolvedProblemScalarWhereWithAggregatesInput[]
    OR?: SolvedProblemScalarWhereWithAggregatesInput[]
    NOT?: SolvedProblemScalarWhereWithAggregatesInput | SolvedProblemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SolvedProblem"> | string
    userId?: StringNullableWithAggregatesFilter<"SolvedProblem"> | string | null
    problemId?: StringNullableWithAggregatesFilter<"SolvedProblem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SolvedProblem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SolvedProblem"> | Date | string
  }

  export type PlaylistWhereInput = {
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    id?: StringFilter<"Playlist"> | string
    name?: StringFilter<"Playlist"> | string
    description?: StringNullableFilter<"Playlist"> | string | null
    isPrivate?: BoolFilter<"Playlist"> | boolean
    userId?: StringFilter<"Playlist"> | string
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    problems?: ProblemInPlaylistListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PlaylistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isPrivate?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    problems?: ProblemInPlaylistOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    _relevance?: PlaylistOrderByRelevanceInput
  }

  export type PlaylistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_userId?: PlaylistNameUserIdCompoundUniqueInput
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    name?: StringFilter<"Playlist"> | string
    description?: StringNullableFilter<"Playlist"> | string | null
    isPrivate?: BoolFilter<"Playlist"> | boolean
    userId?: StringFilter<"Playlist"> | string
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    problems?: ProblemInPlaylistListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "name_userId">

  export type PlaylistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isPrivate?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlaylistCountOrderByAggregateInput
    _max?: PlaylistMaxOrderByAggregateInput
    _min?: PlaylistMinOrderByAggregateInput
  }

  export type PlaylistScalarWhereWithAggregatesInput = {
    AND?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    OR?: PlaylistScalarWhereWithAggregatesInput[]
    NOT?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Playlist"> | string
    name?: StringWithAggregatesFilter<"Playlist"> | string
    description?: StringNullableWithAggregatesFilter<"Playlist"> | string | null
    isPrivate?: BoolWithAggregatesFilter<"Playlist"> | boolean
    userId?: StringWithAggregatesFilter<"Playlist"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string
  }

  export type ProblemInPlaylistWhereInput = {
    AND?: ProblemInPlaylistWhereInput | ProblemInPlaylistWhereInput[]
    OR?: ProblemInPlaylistWhereInput[]
    NOT?: ProblemInPlaylistWhereInput | ProblemInPlaylistWhereInput[]
    id?: StringFilter<"ProblemInPlaylist"> | string
    playlistId?: StringFilter<"ProblemInPlaylist"> | string
    problemId?: StringFilter<"ProblemInPlaylist"> | string
    createdAt?: DateTimeFilter<"ProblemInPlaylist"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemInPlaylist"> | Date | string
    playlist?: XOR<PlaylistScalarRelationFilter, PlaylistWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }

  export type ProblemInPlaylistOrderByWithRelationInput = {
    id?: SortOrder
    playlistId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    playlist?: PlaylistOrderByWithRelationInput
    problem?: ProblemOrderByWithRelationInput
    _relevance?: ProblemInPlaylistOrderByRelevanceInput
  }

  export type ProblemInPlaylistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    playlistId_problemId?: ProblemInPlaylistPlaylistIdProblemIdCompoundUniqueInput
    AND?: ProblemInPlaylistWhereInput | ProblemInPlaylistWhereInput[]
    OR?: ProblemInPlaylistWhereInput[]
    NOT?: ProblemInPlaylistWhereInput | ProblemInPlaylistWhereInput[]
    playlistId?: StringFilter<"ProblemInPlaylist"> | string
    problemId?: StringFilter<"ProblemInPlaylist"> | string
    createdAt?: DateTimeFilter<"ProblemInPlaylist"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemInPlaylist"> | Date | string
    playlist?: XOR<PlaylistScalarRelationFilter, PlaylistWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }, "id" | "playlistId_problemId">

  export type ProblemInPlaylistOrderByWithAggregationInput = {
    id?: SortOrder
    playlistId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProblemInPlaylistCountOrderByAggregateInput
    _max?: ProblemInPlaylistMaxOrderByAggregateInput
    _min?: ProblemInPlaylistMinOrderByAggregateInput
  }

  export type ProblemInPlaylistScalarWhereWithAggregatesInput = {
    AND?: ProblemInPlaylistScalarWhereWithAggregatesInput | ProblemInPlaylistScalarWhereWithAggregatesInput[]
    OR?: ProblemInPlaylistScalarWhereWithAggregatesInput[]
    NOT?: ProblemInPlaylistScalarWhereWithAggregatesInput | ProblemInPlaylistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProblemInPlaylist"> | string
    playlistId?: StringWithAggregatesFilter<"ProblemInPlaylist"> | string
    problemId?: StringWithAggregatesFilter<"ProblemInPlaylist"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProblemInPlaylist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProblemInPlaylist"> | Date | string
  }

  export type SheetWhereInput = {
    AND?: SheetWhereInput | SheetWhereInput[]
    OR?: SheetWhereInput[]
    NOT?: SheetWhereInput | SheetWhereInput[]
    id?: StringFilter<"Sheet"> | string
    title?: StringFilter<"Sheet"> | string
    description?: StringNullableFilter<"Sheet"> | string | null
    languages?: StringNullableListFilter<"Sheet">
    tags?: StringNullableListFilter<"Sheet">
    price?: FloatFilter<"Sheet"> | number
    isPremium?: BoolFilter<"Sheet"> | boolean
    createdAt?: DateTimeFilter<"Sheet"> | Date | string
    updatedAt?: DateTimeFilter<"Sheet"> | Date | string
    purchases?: PurchaseListRelationFilter
    sheetAssignments?: SheetProblemListRelationFilter
  }

  export type SheetOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    languages?: SortOrder
    tags?: SortOrder
    price?: SortOrder
    isPremium?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    purchases?: PurchaseOrderByRelationAggregateInput
    sheetAssignments?: SheetProblemOrderByRelationAggregateInput
    _relevance?: SheetOrderByRelevanceInput
  }

  export type SheetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SheetWhereInput | SheetWhereInput[]
    OR?: SheetWhereInput[]
    NOT?: SheetWhereInput | SheetWhereInput[]
    title?: StringFilter<"Sheet"> | string
    description?: StringNullableFilter<"Sheet"> | string | null
    languages?: StringNullableListFilter<"Sheet">
    tags?: StringNullableListFilter<"Sheet">
    price?: FloatFilter<"Sheet"> | number
    isPremium?: BoolFilter<"Sheet"> | boolean
    createdAt?: DateTimeFilter<"Sheet"> | Date | string
    updatedAt?: DateTimeFilter<"Sheet"> | Date | string
    purchases?: PurchaseListRelationFilter
    sheetAssignments?: SheetProblemListRelationFilter
  }, "id">

  export type SheetOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    languages?: SortOrder
    tags?: SortOrder
    price?: SortOrder
    isPremium?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SheetCountOrderByAggregateInput
    _avg?: SheetAvgOrderByAggregateInput
    _max?: SheetMaxOrderByAggregateInput
    _min?: SheetMinOrderByAggregateInput
    _sum?: SheetSumOrderByAggregateInput
  }

  export type SheetScalarWhereWithAggregatesInput = {
    AND?: SheetScalarWhereWithAggregatesInput | SheetScalarWhereWithAggregatesInput[]
    OR?: SheetScalarWhereWithAggregatesInput[]
    NOT?: SheetScalarWhereWithAggregatesInput | SheetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sheet"> | string
    title?: StringWithAggregatesFilter<"Sheet"> | string
    description?: StringNullableWithAggregatesFilter<"Sheet"> | string | null
    languages?: StringNullableListFilter<"Sheet">
    tags?: StringNullableListFilter<"Sheet">
    price?: FloatWithAggregatesFilter<"Sheet"> | number
    isPremium?: BoolWithAggregatesFilter<"Sheet"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Sheet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sheet"> | Date | string
  }

  export type SheetProblemWhereInput = {
    AND?: SheetProblemWhereInput | SheetProblemWhereInput[]
    OR?: SheetProblemWhereInput[]
    NOT?: SheetProblemWhereInput | SheetProblemWhereInput[]
    id?: StringFilter<"SheetProblem"> | string
    sheetId?: StringFilter<"SheetProblem"> | string
    problemId?: StringFilter<"SheetProblem"> | string
    orderIndex?: IntNullableFilter<"SheetProblem"> | number | null
    createdAt?: DateTimeFilter<"SheetProblem"> | Date | string
    updatedAt?: DateTimeFilter<"SheetProblem"> | Date | string
    userId?: StringNullableFilter<"SheetProblem"> | string | null
    sheet?: XOR<SheetScalarRelationFilter, SheetWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type SheetProblemOrderByWithRelationInput = {
    id?: SortOrder
    sheetId?: SortOrder
    problemId?: SortOrder
    orderIndex?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    sheet?: SheetOrderByWithRelationInput
    problem?: ProblemOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
    _relevance?: SheetProblemOrderByRelevanceInput
  }

  export type SheetProblemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sheetId_problemId?: SheetProblemSheetIdProblemIdCompoundUniqueInput
    AND?: SheetProblemWhereInput | SheetProblemWhereInput[]
    OR?: SheetProblemWhereInput[]
    NOT?: SheetProblemWhereInput | SheetProblemWhereInput[]
    sheetId?: StringFilter<"SheetProblem"> | string
    problemId?: StringFilter<"SheetProblem"> | string
    orderIndex?: IntNullableFilter<"SheetProblem"> | number | null
    createdAt?: DateTimeFilter<"SheetProblem"> | Date | string
    updatedAt?: DateTimeFilter<"SheetProblem"> | Date | string
    userId?: StringNullableFilter<"SheetProblem"> | string | null
    sheet?: XOR<SheetScalarRelationFilter, SheetWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "sheetId_problemId">

  export type SheetProblemOrderByWithAggregationInput = {
    id?: SortOrder
    sheetId?: SortOrder
    problemId?: SortOrder
    orderIndex?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: SheetProblemCountOrderByAggregateInput
    _avg?: SheetProblemAvgOrderByAggregateInput
    _max?: SheetProblemMaxOrderByAggregateInput
    _min?: SheetProblemMinOrderByAggregateInput
    _sum?: SheetProblemSumOrderByAggregateInput
  }

  export type SheetProblemScalarWhereWithAggregatesInput = {
    AND?: SheetProblemScalarWhereWithAggregatesInput | SheetProblemScalarWhereWithAggregatesInput[]
    OR?: SheetProblemScalarWhereWithAggregatesInput[]
    NOT?: SheetProblemScalarWhereWithAggregatesInput | SheetProblemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SheetProblem"> | string
    sheetId?: StringWithAggregatesFilter<"SheetProblem"> | string
    problemId?: StringWithAggregatesFilter<"SheetProblem"> | string
    orderIndex?: IntNullableWithAggregatesFilter<"SheetProblem"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"SheetProblem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SheetProblem"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"SheetProblem"> | string | null
  }

  export type PurchaseWhereInput = {
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    id?: StringFilter<"Purchase"> | string
    userId?: StringFilter<"Purchase"> | string
    sheetId?: StringFilter<"Purchase"> | string
    boughtAt?: DateTimeFilter<"Purchase"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sheet?: XOR<SheetScalarRelationFilter, SheetWhereInput>
    payment?: PaymentListRelationFilter
  }

  export type PurchaseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    sheetId?: SortOrder
    boughtAt?: SortOrder
    user?: UserOrderByWithRelationInput
    sheet?: SheetOrderByWithRelationInput
    payment?: PaymentOrderByRelationAggregateInput
    _relevance?: PurchaseOrderByRelevanceInput
  }

  export type PurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_sheetId?: PurchaseUserIdSheetIdCompoundUniqueInput
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    userId?: StringFilter<"Purchase"> | string
    sheetId?: StringFilter<"Purchase"> | string
    boughtAt?: DateTimeFilter<"Purchase"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sheet?: XOR<SheetScalarRelationFilter, SheetWhereInput>
    payment?: PaymentListRelationFilter
  }, "id" | "userId_sheetId">

  export type PurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    sheetId?: SortOrder
    boughtAt?: SortOrder
    _count?: PurchaseCountOrderByAggregateInput
    _max?: PurchaseMaxOrderByAggregateInput
    _min?: PurchaseMinOrderByAggregateInput
  }

  export type PurchaseScalarWhereWithAggregatesInput = {
    AND?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    OR?: PurchaseScalarWhereWithAggregatesInput[]
    NOT?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Purchase"> | string
    userId?: StringWithAggregatesFilter<"Purchase"> | string
    sheetId?: StringWithAggregatesFilter<"Purchase"> | string
    boughtAt?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    purchaseId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    orderId?: StringFilter<"Payment"> | string
    paymentId?: StringFilter<"Payment"> | string
    paymentMethod?: StringNullableFilter<"Payment"> | string | null
    transactionId?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    purchase?: XOR<PurchaseScalarRelationFilter, PurchaseWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    purchaseId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    orderId?: SortOrder
    paymentId?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    transactionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    purchase?: PurchaseOrderByWithRelationInput
    _relevance?: PaymentOrderByRelevanceInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    userId?: StringFilter<"Payment"> | string
    purchaseId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    orderId?: StringFilter<"Payment"> | string
    paymentId?: StringFilter<"Payment"> | string
    paymentMethod?: StringNullableFilter<"Payment"> | string | null
    transactionId?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    purchase?: XOR<PurchaseScalarRelationFilter, PurchaseWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    purchaseId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    orderId?: SortOrder
    paymentId?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    transactionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    userId?: StringWithAggregatesFilter<"Payment"> | string
    purchaseId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    currency?: StringWithAggregatesFilter<"Payment"> | string
    status?: StringWithAggregatesFilter<"Payment"> | string
    orderId?: StringWithAggregatesFilter<"Payment"> | string
    paymentId?: StringWithAggregatesFilter<"Payment"> | string
    paymentMethod?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    transactionId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type SocialCreateInput = {
    id?: string
    website?: string | null
    twitter?: string | null
    github?: string | null
    linkedIn?: string | null
    BasicInfo?: BasicInfoCreateNestedOneWithoutSocialsInput
  }

  export type SocialUncheckedCreateInput = {
    id?: string
    website?: string | null
    twitter?: string | null
    github?: string | null
    linkedIn?: string | null
    BasicInfo?: BasicInfoUncheckedCreateNestedOneWithoutSocialsInput
  }

  export type SocialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    BasicInfo?: BasicInfoUpdateOneWithoutSocialsNestedInput
  }

  export type SocialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    BasicInfo?: BasicInfoUncheckedUpdateOneWithoutSocialsNestedInput
  }

  export type SocialCreateManyInput = {
    id?: string
    website?: string | null
    twitter?: string | null
    github?: string | null
    linkedIn?: string | null
  }

  export type SocialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SocialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BasicInfoCreateInput = {
    id?: string
    gender?: $Enums.Gender | null
    bio?: string | null
    birth?: Date | string | null
    socials?: SocialCreateNestedOneWithoutBasicInfoInput
    user?: UserCreateNestedOneWithoutBasicInfoInput
  }

  export type BasicInfoUncheckedCreateInput = {
    id?: string
    gender?: $Enums.Gender | null
    bio?: string | null
    birth?: Date | string | null
    socialId?: string | null
    user?: UserUncheckedCreateNestedOneWithoutBasicInfoInput
  }

  export type BasicInfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    socials?: SocialUpdateOneWithoutBasicInfoNestedInput
    user?: UserUpdateOneWithoutBasicInfoNestedInput
  }

  export type BasicInfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUncheckedUpdateOneWithoutBasicInfoNestedInput
  }

  export type BasicInfoCreateManyInput = {
    id?: string
    gender?: $Enums.Gender | null
    bio?: string | null
    birth?: Date | string | null
    socialId?: string | null
  }

  export type BasicInfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BasicInfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    fullname?: string | null
    email: string
    username?: string | null
    password?: string | null
    profileImage?: string
    role?: $Enums.UserRole
    isGoogleAuth?: boolean
    isEmailVerified?: boolean
    isActive?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    solvedProblems?: SolvedProblemCreateNestedManyWithoutUserInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    purchases?: PurchaseCreateNestedManyWithoutUserInput
    sheetAssignments?: SheetProblemCreateNestedManyWithoutUserInput
    basicInfo?: BasicInfoCreateNestedOneWithoutUserInput
    payment?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullname?: string | null
    email: string
    username?: string | null
    password?: string | null
    profileImage?: string
    role?: $Enums.UserRole
    isGoogleAuth?: boolean
    isEmailVerified?: boolean
    isActive?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    basicInfoId?: string | null
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    solvedProblems?: SolvedProblemUncheckedCreateNestedManyWithoutUserInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    sheetAssignments?: SheetProblemUncheckedCreateNestedManyWithoutUserInput
    payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isGoogleAuth?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    solvedProblems?: SolvedProblemUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
    sheetAssignments?: SheetProblemUpdateManyWithoutUserNestedInput
    basicInfo?: BasicInfoUpdateOneWithoutUserNestedInput
    payment?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isGoogleAuth?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    basicInfoId?: NullableStringFieldUpdateOperationsInput | string | null
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    solvedProblems?: SolvedProblemUncheckedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    sheetAssignments?: SheetProblemUncheckedUpdateManyWithoutUserNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullname?: string | null
    email: string
    username?: string | null
    password?: string | null
    profileImage?: string
    role?: $Enums.UserRole
    isGoogleAuth?: boolean
    isEmailVerified?: boolean
    isActive?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    basicInfoId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isGoogleAuth?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isGoogleAuth?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    basicInfoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProblemCreateInput = {
    id?: string
    title: string
    description: string
    difficulty?: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: string | null
    isDemo?: boolean
    isPremium?: boolean
    company?: ProblemCreatecompanyInput | string[]
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemsInput
    submissions?: SubmissionCreateNestedManyWithoutProblemInput
    sheetAssignments?: SheetProblemCreateNestedManyWithoutProblemInput
    solvedBy?: SolvedProblemCreateNestedManyWithoutProblemInput
    problemInPlaylist?: ProblemInPlaylistCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    difficulty?: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: string | null
    isDemo?: boolean
    isPremium?: boolean
    company?: ProblemCreatecompanyInput | string[]
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    sheetAssignments?: SheetProblemUncheckedCreateNestedManyWithoutProblemInput
    solvedBy?: SolvedProblemUncheckedCreateNestedManyWithoutProblemInput
    problemInPlaylist?: ProblemInPlaylistUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    company?: ProblemUpdatecompanyInput | string[]
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    submissions?: SubmissionUpdateManyWithoutProblemNestedInput
    sheetAssignments?: SheetProblemUpdateManyWithoutProblemNestedInput
    solvedBy?: SolvedProblemUpdateManyWithoutProblemNestedInput
    problemInPlaylist?: ProblemInPlaylistUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    company?: ProblemUpdatecompanyInput | string[]
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    sheetAssignments?: SheetProblemUncheckedUpdateManyWithoutProblemNestedInput
    solvedBy?: SolvedProblemUncheckedUpdateManyWithoutProblemNestedInput
    problemInPlaylist?: ProblemInPlaylistUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemCreateManyInput = {
    id?: string
    title: string
    description: string
    difficulty?: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: string | null
    isDemo?: boolean
    isPremium?: boolean
    company?: ProblemCreatecompanyInput | string[]
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    company?: ProblemUpdatecompanyInput | string[]
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    company?: ProblemUpdatecompanyInput | string[]
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateInput = {
    id?: string
    source_code: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
    problem?: ProblemCreateNestedOneWithoutSubmissionsInput
    testCases?: TestcaseCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: string
    source_code: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    problemId?: string | null
    testCases?: TestcaseUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source_code?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    problem?: ProblemUpdateOneWithoutSubmissionsNestedInput
    testCases?: TestcaseUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source_code?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: TestcaseUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionCreateManyInput = {
    id?: string
    source_code: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    problemId?: string | null
  }

  export type SubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source_code?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    source_code?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TestcaseCreateInput = {
    id?: string
    testCase: number
    passed: boolean
    stdout?: string | null
    stderr?: string | null
    expected: string
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionCreateNestedOneWithoutTestCasesInput
  }

  export type TestcaseUncheckedCreateInput = {
    id?: string
    testCase: number
    passed: boolean
    stdout?: string | null
    stderr?: string | null
    expected: string
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissionId?: string | null
  }

  export type TestcaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    expected?: StringFieldUpdateOperationsInput | string
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUpdateOneWithoutTestCasesNestedInput
  }

  export type TestcaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    expected?: StringFieldUpdateOperationsInput | string
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TestcaseCreateManyInput = {
    id?: string
    testCase: number
    passed: boolean
    stdout?: string | null
    stderr?: string | null
    expected: string
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissionId?: string | null
  }

  export type TestcaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    expected?: StringFieldUpdateOperationsInput | string
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestcaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    expected?: StringFieldUpdateOperationsInput | string
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SolvedProblemCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutSolvedProblemsInput
    problem?: ProblemCreateNestedOneWithoutSolvedByInput
  }

  export type SolvedProblemUncheckedCreateInput = {
    id?: string
    userId?: string | null
    problemId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolvedProblemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSolvedProblemsNestedInput
    problem?: ProblemUpdateOneWithoutSolvedByNestedInput
  }

  export type SolvedProblemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    problemId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolvedProblemCreateManyInput = {
    id?: string
    userId?: string | null
    problemId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolvedProblemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolvedProblemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    problemId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistCreateInput = {
    id?: string
    name: string
    description?: string | null
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemInPlaylistCreateNestedManyWithoutPlaylistInput
    user: UserCreateNestedOneWithoutPlaylistsInput
  }

  export type PlaylistUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    isPrivate?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemInPlaylistUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemInPlaylistUpdateManyWithoutPlaylistNestedInput
    user?: UserUpdateOneRequiredWithoutPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemInPlaylistUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    isPrivate?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInPlaylistCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlist: PlaylistCreateNestedOneWithoutProblemsInput
    problem: ProblemCreateNestedOneWithoutProblemInPlaylistInput
  }

  export type ProblemInPlaylistUncheckedCreateInput = {
    id?: string
    playlistId: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemInPlaylistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneRequiredWithoutProblemsNestedInput
    problem?: ProblemUpdateOneRequiredWithoutProblemInPlaylistNestedInput
  }

  export type ProblemInPlaylistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInPlaylistCreateManyInput = {
    id?: string
    playlistId: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemInPlaylistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInPlaylistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SheetCreateInput = {
    id?: string
    title: string
    description?: string | null
    languages?: SheetCreatelanguagesInput | string[]
    tags?: SheetCreatetagsInput | string[]
    price: number
    isPremium?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: PurchaseCreateNestedManyWithoutSheetInput
    sheetAssignments?: SheetProblemCreateNestedManyWithoutSheetInput
  }

  export type SheetUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    languages?: SheetCreatelanguagesInput | string[]
    tags?: SheetCreatetagsInput | string[]
    price: number
    isPremium?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: PurchaseUncheckedCreateNestedManyWithoutSheetInput
    sheetAssignments?: SheetProblemUncheckedCreateNestedManyWithoutSheetInput
  }

  export type SheetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: SheetUpdatelanguagesInput | string[]
    tags?: SheetUpdatetagsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUpdateManyWithoutSheetNestedInput
    sheetAssignments?: SheetProblemUpdateManyWithoutSheetNestedInput
  }

  export type SheetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: SheetUpdatelanguagesInput | string[]
    tags?: SheetUpdatetagsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUncheckedUpdateManyWithoutSheetNestedInput
    sheetAssignments?: SheetProblemUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type SheetCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    languages?: SheetCreatelanguagesInput | string[]
    tags?: SheetCreatetagsInput | string[]
    price: number
    isPremium?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SheetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: SheetUpdatelanguagesInput | string[]
    tags?: SheetUpdatetagsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SheetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: SheetUpdatelanguagesInput | string[]
    tags?: SheetUpdatetagsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SheetProblemCreateInput = {
    id?: string
    orderIndex?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sheet: SheetCreateNestedOneWithoutSheetAssignmentsInput
    problem: ProblemCreateNestedOneWithoutSheetAssignmentsInput
    User?: UserCreateNestedOneWithoutSheetAssignmentsInput
  }

  export type SheetProblemUncheckedCreateInput = {
    id?: string
    sheetId: string
    problemId: string
    orderIndex?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type SheetProblemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderIndex?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sheet?: SheetUpdateOneRequiredWithoutSheetAssignmentsNestedInput
    problem?: ProblemUpdateOneRequiredWithoutSheetAssignmentsNestedInput
    User?: UserUpdateOneWithoutSheetAssignmentsNestedInput
  }

  export type SheetProblemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheetId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    orderIndex?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SheetProblemCreateManyInput = {
    id?: string
    sheetId: string
    problemId: string
    orderIndex?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type SheetProblemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderIndex?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SheetProblemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheetId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    orderIndex?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PurchaseCreateInput = {
    id?: string
    boughtAt?: Date | string
    user: UserCreateNestedOneWithoutPurchasesInput
    sheet: SheetCreateNestedOneWithoutPurchasesInput
    payment?: PaymentCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateInput = {
    id?: string
    userId: string
    sheetId: string
    boughtAt?: Date | string
    payment?: PaymentUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    boughtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPurchasesNestedInput
    sheet?: SheetUpdateOneRequiredWithoutPurchasesNestedInput
    payment?: PaymentUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sheetId?: StringFieldUpdateOperationsInput | string
    boughtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseCreateManyInput = {
    id?: string
    userId: string
    sheetId: string
    boughtAt?: Date | string
  }

  export type PurchaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    boughtAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sheetId?: StringFieldUpdateOperationsInput | string
    boughtAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: number
    currency: string
    status: string
    orderId: string
    paymentId: string
    paymentMethod?: string | null
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentInput
    purchase: PurchaseCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    userId: string
    purchaseId: string
    amount: number
    currency: string
    status: string
    orderId: string
    paymentId: string
    paymentMethod?: string | null
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentNestedInput
    purchase?: PurchaseUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    userId: string
    purchaseId: string
    amount: number
    currency: string
    status: string
    orderId: string
    paymentId: string
    paymentMethod?: string | null
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    search?: string
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
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
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BasicInfoNullableScalarRelationFilter = {
    is?: BasicInfoWhereInput | null
    isNot?: BasicInfoWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SocialOrderByRelevanceInput = {
    fields: SocialOrderByRelevanceFieldEnum | SocialOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SocialCountOrderByAggregateInput = {
    id?: SortOrder
    website?: SortOrder
    twitter?: SortOrder
    github?: SortOrder
    linkedIn?: SortOrder
  }

  export type SocialMaxOrderByAggregateInput = {
    id?: SortOrder
    website?: SortOrder
    twitter?: SortOrder
    github?: SortOrder
    linkedIn?: SortOrder
  }

  export type SocialMinOrderByAggregateInput = {
    id?: SortOrder
    website?: SortOrder
    twitter?: SortOrder
    github?: SortOrder
    linkedIn?: SortOrder
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
    search?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
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

  export type SocialNullableScalarRelationFilter = {
    is?: SocialWhereInput | null
    isNot?: SocialWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type BasicInfoOrderByRelevanceInput = {
    fields: BasicInfoOrderByRelevanceFieldEnum | BasicInfoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BasicInfoCountOrderByAggregateInput = {
    id?: SortOrder
    gender?: SortOrder
    bio?: SortOrder
    birth?: SortOrder
    socialId?: SortOrder
  }

  export type BasicInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    gender?: SortOrder
    bio?: SortOrder
    birth?: SortOrder
    socialId?: SortOrder
  }

  export type BasicInfoMinOrderByAggregateInput = {
    id?: SortOrder
    gender?: SortOrder
    bio?: SortOrder
    birth?: SortOrder
    socialId?: SortOrder
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type ProblemListRelationFilter = {
    every?: ProblemWhereInput
    some?: ProblemWhereInput
    none?: ProblemWhereInput
  }

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type SolvedProblemListRelationFilter = {
    every?: SolvedProblemWhereInput
    some?: SolvedProblemWhereInput
    none?: SolvedProblemWhereInput
  }

  export type PlaylistListRelationFilter = {
    every?: PlaylistWhereInput
    some?: PlaylistWhereInput
    none?: PlaylistWhereInput
  }

  export type PurchaseListRelationFilter = {
    every?: PurchaseWhereInput
    some?: PurchaseWhereInput
    none?: PurchaseWhereInput
  }

  export type SheetProblemListRelationFilter = {
    every?: SheetProblemWhereInput
    some?: SheetProblemWhereInput
    none?: SheetProblemWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type ProblemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SolvedProblemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaylistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SheetProblemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    profileImage?: SortOrder
    role?: SortOrder
    isGoogleAuth?: SortOrder
    isEmailVerified?: SortOrder
    isActive?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationExpiry?: SortOrder
    forgotPasswordToken?: SortOrder
    forgotPasswordExpiry?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    basicInfoId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    profileImage?: SortOrder
    role?: SortOrder
    isGoogleAuth?: SortOrder
    isEmailVerified?: SortOrder
    isActive?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationExpiry?: SortOrder
    forgotPasswordToken?: SortOrder
    forgotPasswordExpiry?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    basicInfoId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    profileImage?: SortOrder
    role?: SortOrder
    isGoogleAuth?: SortOrder
    isEmailVerified?: SortOrder
    isActive?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationExpiry?: SortOrder
    forgotPasswordToken?: SortOrder
    forgotPasswordExpiry?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    basicInfoId?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type EnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProblemInPlaylistListRelationFilter = {
    every?: ProblemInPlaylistWhereInput
    some?: ProblemInPlaylistWhereInput
    none?: ProblemInPlaylistWhereInput
  }

  export type ProblemInPlaylistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProblemOrderByRelevanceInput = {
    fields: ProblemOrderByRelevanceFieldEnum | ProblemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProblemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    userId?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    hints?: SortOrder
    editorial?: SortOrder
    isDemo?: SortOrder
    isPremium?: SortOrder
    company?: SortOrder
    testcases?: SortOrder
    codeSnippets?: SortOrder
    referenceSolutions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    userId?: SortOrder
    constraints?: SortOrder
    editorial?: SortOrder
    isDemo?: SortOrder
    isPremium?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    userId?: SortOrder
    constraints?: SortOrder
    editorial?: SortOrder
    isDemo?: SortOrder
    isPremium?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ProblemNullableScalarRelationFilter = {
    is?: ProblemWhereInput | null
    isNot?: ProblemWhereInput | null
  }

  export type TestcaseListRelationFilter = {
    every?: TestcaseWhereInput
    some?: TestcaseWhereInput
    none?: TestcaseWhereInput
  }

  export type TestcaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionOrderByRelevanceInput = {
    fields: SubmissionOrderByRelevanceFieldEnum | SubmissionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    source_code?: SortOrder
    language?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    language?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    language?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
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

  export type SubmissionNullableScalarRelationFilter = {
    is?: SubmissionWhereInput | null
    isNot?: SubmissionWhereInput | null
  }

  export type TestcaseOrderByRelevanceInput = {
    fields: TestcaseOrderByRelevanceFieldEnum | TestcaseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TestcaseCountOrderByAggregateInput = {
    id?: SortOrder
    testCase?: SortOrder
    passed?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    expected?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissionId?: SortOrder
  }

  export type TestcaseAvgOrderByAggregateInput = {
    testCase?: SortOrder
  }

  export type TestcaseMaxOrderByAggregateInput = {
    id?: SortOrder
    testCase?: SortOrder
    passed?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    expected?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissionId?: SortOrder
  }

  export type TestcaseMinOrderByAggregateInput = {
    id?: SortOrder
    testCase?: SortOrder
    passed?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    expected?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissionId?: SortOrder
  }

  export type TestcaseSumOrderByAggregateInput = {
    testCase?: SortOrder
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

  export type SolvedProblemOrderByRelevanceInput = {
    fields: SolvedProblemOrderByRelevanceFieldEnum | SolvedProblemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SolvedProblemUserIdProblemIdCompoundUniqueInput = {
    userId: string
    problemId: string
  }

  export type SolvedProblemCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SolvedProblemMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SolvedProblemMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistOrderByRelevanceInput = {
    fields: PlaylistOrderByRelevanceFieldEnum | PlaylistOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PlaylistNameUserIdCompoundUniqueInput = {
    name: string
    userId: string
  }

  export type PlaylistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPrivate?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPrivate?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPrivate?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistScalarRelationFilter = {
    is?: PlaylistWhereInput
    isNot?: PlaylistWhereInput
  }

  export type ProblemScalarRelationFilter = {
    is?: ProblemWhereInput
    isNot?: ProblemWhereInput
  }

  export type ProblemInPlaylistOrderByRelevanceInput = {
    fields: ProblemInPlaylistOrderByRelevanceFieldEnum | ProblemInPlaylistOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProblemInPlaylistPlaylistIdProblemIdCompoundUniqueInput = {
    playlistId: string
    problemId: string
  }

  export type ProblemInPlaylistCountOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemInPlaylistMaxOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemInPlaylistMinOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type SheetOrderByRelevanceInput = {
    fields: SheetOrderByRelevanceFieldEnum | SheetOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SheetCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    languages?: SortOrder
    tags?: SortOrder
    price?: SortOrder
    isPremium?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SheetAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type SheetMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    isPremium?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SheetMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    isPremium?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SheetSumOrderByAggregateInput = {
    price?: SortOrder
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

  export type SheetScalarRelationFilter = {
    is?: SheetWhereInput
    isNot?: SheetWhereInput
  }

  export type SheetProblemOrderByRelevanceInput = {
    fields: SheetProblemOrderByRelevanceFieldEnum | SheetProblemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SheetProblemSheetIdProblemIdCompoundUniqueInput = {
    sheetId: string
    problemId: string
  }

  export type SheetProblemCountOrderByAggregateInput = {
    id?: SortOrder
    sheetId?: SortOrder
    problemId?: SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type SheetProblemAvgOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type SheetProblemMaxOrderByAggregateInput = {
    id?: SortOrder
    sheetId?: SortOrder
    problemId?: SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type SheetProblemMinOrderByAggregateInput = {
    id?: SortOrder
    sheetId?: SortOrder
    problemId?: SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type SheetProblemSumOrderByAggregateInput = {
    orderIndex?: SortOrder
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

  export type PurchaseOrderByRelevanceInput = {
    fields: PurchaseOrderByRelevanceFieldEnum | PurchaseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PurchaseUserIdSheetIdCompoundUniqueInput = {
    userId: string
    sheetId: string
  }

  export type PurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sheetId?: SortOrder
    boughtAt?: SortOrder
  }

  export type PurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sheetId?: SortOrder
    boughtAt?: SortOrder
  }

  export type PurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sheetId?: SortOrder
    boughtAt?: SortOrder
  }

  export type PurchaseScalarRelationFilter = {
    is?: PurchaseWhereInput
    isNot?: PurchaseWhereInput
  }

  export type PaymentOrderByRelevanceInput = {
    fields: PaymentOrderByRelevanceFieldEnum | PaymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    purchaseId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    orderId?: SortOrder
    paymentId?: SortOrder
    paymentMethod?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    purchaseId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    orderId?: SortOrder
    paymentId?: SortOrder
    paymentMethod?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    purchaseId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    orderId?: SortOrder
    paymentId?: SortOrder
    paymentMethod?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BasicInfoCreateNestedOneWithoutSocialsInput = {
    create?: XOR<BasicInfoCreateWithoutSocialsInput, BasicInfoUncheckedCreateWithoutSocialsInput>
    connectOrCreate?: BasicInfoCreateOrConnectWithoutSocialsInput
    connect?: BasicInfoWhereUniqueInput
  }

  export type BasicInfoUncheckedCreateNestedOneWithoutSocialsInput = {
    create?: XOR<BasicInfoCreateWithoutSocialsInput, BasicInfoUncheckedCreateWithoutSocialsInput>
    connectOrCreate?: BasicInfoCreateOrConnectWithoutSocialsInput
    connect?: BasicInfoWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BasicInfoUpdateOneWithoutSocialsNestedInput = {
    create?: XOR<BasicInfoCreateWithoutSocialsInput, BasicInfoUncheckedCreateWithoutSocialsInput>
    connectOrCreate?: BasicInfoCreateOrConnectWithoutSocialsInput
    upsert?: BasicInfoUpsertWithoutSocialsInput
    disconnect?: BasicInfoWhereInput | boolean
    delete?: BasicInfoWhereInput | boolean
    connect?: BasicInfoWhereUniqueInput
    update?: XOR<XOR<BasicInfoUpdateToOneWithWhereWithoutSocialsInput, BasicInfoUpdateWithoutSocialsInput>, BasicInfoUncheckedUpdateWithoutSocialsInput>
  }

  export type BasicInfoUncheckedUpdateOneWithoutSocialsNestedInput = {
    create?: XOR<BasicInfoCreateWithoutSocialsInput, BasicInfoUncheckedCreateWithoutSocialsInput>
    connectOrCreate?: BasicInfoCreateOrConnectWithoutSocialsInput
    upsert?: BasicInfoUpsertWithoutSocialsInput
    disconnect?: BasicInfoWhereInput | boolean
    delete?: BasicInfoWhereInput | boolean
    connect?: BasicInfoWhereUniqueInput
    update?: XOR<XOR<BasicInfoUpdateToOneWithWhereWithoutSocialsInput, BasicInfoUpdateWithoutSocialsInput>, BasicInfoUncheckedUpdateWithoutSocialsInput>
  }

  export type SocialCreateNestedOneWithoutBasicInfoInput = {
    create?: XOR<SocialCreateWithoutBasicInfoInput, SocialUncheckedCreateWithoutBasicInfoInput>
    connectOrCreate?: SocialCreateOrConnectWithoutBasicInfoInput
    connect?: SocialWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBasicInfoInput = {
    create?: XOR<UserCreateWithoutBasicInfoInput, UserUncheckedCreateWithoutBasicInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutBasicInfoInput
    connect?: UserWhereUniqueInput
  }

  export type UserUncheckedCreateNestedOneWithoutBasicInfoInput = {
    create?: XOR<UserCreateWithoutBasicInfoInput, UserUncheckedCreateWithoutBasicInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutBasicInfoInput
    connect?: UserWhereUniqueInput
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SocialUpdateOneWithoutBasicInfoNestedInput = {
    create?: XOR<SocialCreateWithoutBasicInfoInput, SocialUncheckedCreateWithoutBasicInfoInput>
    connectOrCreate?: SocialCreateOrConnectWithoutBasicInfoInput
    upsert?: SocialUpsertWithoutBasicInfoInput
    disconnect?: SocialWhereInput | boolean
    delete?: SocialWhereInput | boolean
    connect?: SocialWhereUniqueInput
    update?: XOR<XOR<SocialUpdateToOneWithWhereWithoutBasicInfoInput, SocialUpdateWithoutBasicInfoInput>, SocialUncheckedUpdateWithoutBasicInfoInput>
  }

  export type UserUpdateOneWithoutBasicInfoNestedInput = {
    create?: XOR<UserCreateWithoutBasicInfoInput, UserUncheckedCreateWithoutBasicInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutBasicInfoInput
    upsert?: UserUpsertWithoutBasicInfoInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBasicInfoInput, UserUpdateWithoutBasicInfoInput>, UserUncheckedUpdateWithoutBasicInfoInput>
  }

  export type UserUncheckedUpdateOneWithoutBasicInfoNestedInput = {
    create?: XOR<UserCreateWithoutBasicInfoInput, UserUncheckedCreateWithoutBasicInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutBasicInfoInput
    upsert?: UserUpsertWithoutBasicInfoInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBasicInfoInput, UserUpdateWithoutBasicInfoInput>, UserUncheckedUpdateWithoutBasicInfoInput>
  }

  export type ProblemCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type SubmissionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type SolvedProblemCreateNestedManyWithoutUserInput = {
    create?: XOR<SolvedProblemCreateWithoutUserInput, SolvedProblemUncheckedCreateWithoutUserInput> | SolvedProblemCreateWithoutUserInput[] | SolvedProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SolvedProblemCreateOrConnectWithoutUserInput | SolvedProblemCreateOrConnectWithoutUserInput[]
    createMany?: SolvedProblemCreateManyUserInputEnvelope
    connect?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
  }

  export type PlaylistCreateNestedManyWithoutUserInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type PurchaseCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type SheetProblemCreateNestedManyWithoutUserInput = {
    create?: XOR<SheetProblemCreateWithoutUserInput, SheetProblemUncheckedCreateWithoutUserInput> | SheetProblemCreateWithoutUserInput[] | SheetProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SheetProblemCreateOrConnectWithoutUserInput | SheetProblemCreateOrConnectWithoutUserInput[]
    createMany?: SheetProblemCreateManyUserInputEnvelope
    connect?: SheetProblemWhereUniqueInput | SheetProblemWhereUniqueInput[]
  }

  export type BasicInfoCreateNestedOneWithoutUserInput = {
    create?: XOR<BasicInfoCreateWithoutUserInput, BasicInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: BasicInfoCreateOrConnectWithoutUserInput
    connect?: BasicInfoWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type ProblemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type SolvedProblemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SolvedProblemCreateWithoutUserInput, SolvedProblemUncheckedCreateWithoutUserInput> | SolvedProblemCreateWithoutUserInput[] | SolvedProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SolvedProblemCreateOrConnectWithoutUserInput | SolvedProblemCreateOrConnectWithoutUserInput[]
    createMany?: SolvedProblemCreateManyUserInputEnvelope
    connect?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
  }

  export type PlaylistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type SheetProblemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SheetProblemCreateWithoutUserInput, SheetProblemUncheckedCreateWithoutUserInput> | SheetProblemCreateWithoutUserInput[] | SheetProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SheetProblemCreateOrConnectWithoutUserInput | SheetProblemCreateOrConnectWithoutUserInput[]
    createMany?: SheetProblemCreateManyUserInputEnvelope
    connect?: SheetProblemWhereUniqueInput | SheetProblemWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProblemUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutUserInput | ProblemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutUserInput | ProblemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutUserInput | ProblemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
  }

  export type SubmissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type SolvedProblemUpdateManyWithoutUserNestedInput = {
    create?: XOR<SolvedProblemCreateWithoutUserInput, SolvedProblemUncheckedCreateWithoutUserInput> | SolvedProblemCreateWithoutUserInput[] | SolvedProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SolvedProblemCreateOrConnectWithoutUserInput | SolvedProblemCreateOrConnectWithoutUserInput[]
    upsert?: SolvedProblemUpsertWithWhereUniqueWithoutUserInput | SolvedProblemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SolvedProblemCreateManyUserInputEnvelope
    set?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    disconnect?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    delete?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    connect?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    update?: SolvedProblemUpdateWithWhereUniqueWithoutUserInput | SolvedProblemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SolvedProblemUpdateManyWithWhereWithoutUserInput | SolvedProblemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SolvedProblemScalarWhereInput | SolvedProblemScalarWhereInput[]
  }

  export type PlaylistUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutUserInput | PlaylistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutUserInput | PlaylistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutUserInput | PlaylistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type PurchaseUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutUserInput | PurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutUserInput | PurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutUserInput | PurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type SheetProblemUpdateManyWithoutUserNestedInput = {
    create?: XOR<SheetProblemCreateWithoutUserInput, SheetProblemUncheckedCreateWithoutUserInput> | SheetProblemCreateWithoutUserInput[] | SheetProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SheetProblemCreateOrConnectWithoutUserInput | SheetProblemCreateOrConnectWithoutUserInput[]
    upsert?: SheetProblemUpsertWithWhereUniqueWithoutUserInput | SheetProblemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SheetProblemCreateManyUserInputEnvelope
    set?: SheetProblemWhereUniqueInput | SheetProblemWhereUniqueInput[]
    disconnect?: SheetProblemWhereUniqueInput | SheetProblemWhereUniqueInput[]
    delete?: SheetProblemWhereUniqueInput | SheetProblemWhereUniqueInput[]
    connect?: SheetProblemWhereUniqueInput | SheetProblemWhereUniqueInput[]
    update?: SheetProblemUpdateWithWhereUniqueWithoutUserInput | SheetProblemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SheetProblemUpdateManyWithWhereWithoutUserInput | SheetProblemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SheetProblemScalarWhereInput | SheetProblemScalarWhereInput[]
  }

  export type BasicInfoUpdateOneWithoutUserNestedInput = {
    create?: XOR<BasicInfoCreateWithoutUserInput, BasicInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: BasicInfoCreateOrConnectWithoutUserInput
    upsert?: BasicInfoUpsertWithoutUserInput
    disconnect?: BasicInfoWhereInput | boolean
    delete?: BasicInfoWhereInput | boolean
    connect?: BasicInfoWhereUniqueInput
    update?: XOR<XOR<BasicInfoUpdateToOneWithWhereWithoutUserInput, BasicInfoUpdateWithoutUserInput>, BasicInfoUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ProblemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutUserInput | ProblemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutUserInput | ProblemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutUserInput | ProblemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type SolvedProblemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SolvedProblemCreateWithoutUserInput, SolvedProblemUncheckedCreateWithoutUserInput> | SolvedProblemCreateWithoutUserInput[] | SolvedProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SolvedProblemCreateOrConnectWithoutUserInput | SolvedProblemCreateOrConnectWithoutUserInput[]
    upsert?: SolvedProblemUpsertWithWhereUniqueWithoutUserInput | SolvedProblemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SolvedProblemCreateManyUserInputEnvelope
    set?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    disconnect?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    delete?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    connect?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    update?: SolvedProblemUpdateWithWhereUniqueWithoutUserInput | SolvedProblemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SolvedProblemUpdateManyWithWhereWithoutUserInput | SolvedProblemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SolvedProblemScalarWhereInput | SolvedProblemScalarWhereInput[]
  }

  export type PlaylistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutUserInput | PlaylistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutUserInput | PlaylistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutUserInput | PlaylistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutUserInput | PurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutUserInput | PurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutUserInput | PurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type SheetProblemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SheetProblemCreateWithoutUserInput, SheetProblemUncheckedCreateWithoutUserInput> | SheetProblemCreateWithoutUserInput[] | SheetProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SheetProblemCreateOrConnectWithoutUserInput | SheetProblemCreateOrConnectWithoutUserInput[]
    upsert?: SheetProblemUpsertWithWhereUniqueWithoutUserInput | SheetProblemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SheetProblemCreateManyUserInputEnvelope
    set?: SheetProblemWhereUniqueInput | SheetProblemWhereUniqueInput[]
    disconnect?: SheetProblemWhereUniqueInput | SheetProblemWhereUniqueInput[]
    delete?: SheetProblemWhereUniqueInput | SheetProblemWhereUniqueInput[]
    connect?: SheetProblemWhereUniqueInput | SheetProblemWhereUniqueInput[]
    update?: SheetProblemUpdateWithWhereUniqueWithoutUserInput | SheetProblemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SheetProblemUpdateManyWithWhereWithoutUserInput | SheetProblemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SheetProblemScalarWhereInput | SheetProblemScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ProblemCreatetagsInput = {
    set: string[]
  }

  export type ProblemCreatecompanyInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutProblemsInput = {
    create?: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemsInput
    connect?: UserWhereUniqueInput
  }

  export type SubmissionCreateNestedManyWithoutProblemInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type SheetProblemCreateNestedManyWithoutProblemInput = {
    create?: XOR<SheetProblemCreateWithoutProblemInput, SheetProblemUncheckedCreateWithoutProblemInput> | SheetProblemCreateWithoutProblemInput[] | SheetProblemUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SheetProblemCreateOrConnectWithoutProblemInput | SheetProblemCreateOrConnectWithoutProblemInput[]
    createMany?: SheetProblemCreateManyProblemInputEnvelope
    connect?: SheetProblemWhereUniqueInput | SheetProblemWhereUniqueInput[]
  }

  export type SolvedProblemCreateNestedManyWithoutProblemInput = {
    create?: XOR<SolvedProblemCreateWithoutProblemInput, SolvedProblemUncheckedCreateWithoutProblemInput> | SolvedProblemCreateWithoutProblemInput[] | SolvedProblemUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SolvedProblemCreateOrConnectWithoutProblemInput | SolvedProblemCreateOrConnectWithoutProblemInput[]
    createMany?: SolvedProblemCreateManyProblemInputEnvelope
    connect?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
  }

  export type ProblemInPlaylistCreateNestedManyWithoutProblemInput = {
    create?: XOR<ProblemInPlaylistCreateWithoutProblemInput, ProblemInPlaylistUncheckedCreateWithoutProblemInput> | ProblemInPlaylistCreateWithoutProblemInput[] | ProblemInPlaylistUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemInPlaylistCreateOrConnectWithoutProblemInput | ProblemInPlaylistCreateOrConnectWithoutProblemInput[]
    createMany?: ProblemInPlaylistCreateManyProblemInputEnvelope
    connect?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type SheetProblemUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<SheetProblemCreateWithoutProblemInput, SheetProblemUncheckedCreateWithoutProblemInput> | SheetProblemCreateWithoutProblemInput[] | SheetProblemUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SheetProblemCreateOrConnectWithoutProblemInput | SheetProblemCreateOrConnectWithoutProblemInput[]
    createMany?: SheetProblemCreateManyProblemInputEnvelope
    connect?: SheetProblemWhereUniqueInput | SheetProblemWhereUniqueInput[]
  }

  export type SolvedProblemUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<SolvedProblemCreateWithoutProblemInput, SolvedProblemUncheckedCreateWithoutProblemInput> | SolvedProblemCreateWithoutProblemInput[] | SolvedProblemUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SolvedProblemCreateOrConnectWithoutProblemInput | SolvedProblemCreateOrConnectWithoutProblemInput[]
    createMany?: SolvedProblemCreateManyProblemInputEnvelope
    connect?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
  }

  export type ProblemInPlaylistUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<ProblemInPlaylistCreateWithoutProblemInput, ProblemInPlaylistUncheckedCreateWithoutProblemInput> | ProblemInPlaylistCreateWithoutProblemInput[] | ProblemInPlaylistUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemInPlaylistCreateOrConnectWithoutProblemInput | ProblemInPlaylistCreateOrConnectWithoutProblemInput[]
    createMany?: ProblemInPlaylistCreateManyProblemInputEnvelope
    connect?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
  }

  export type EnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty
  }

  export type ProblemUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProblemUpdatecompanyInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutProblemsNestedInput = {
    create?: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemsInput
    upsert?: UserUpsertWithoutProblemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProblemsInput, UserUpdateWithoutProblemsInput>, UserUncheckedUpdateWithoutProblemsInput>
  }

  export type SubmissionUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutProblemInput | SubmissionUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutProblemInput | SubmissionUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutProblemInput | SubmissionUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type SheetProblemUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SheetProblemCreateWithoutProblemInput, SheetProblemUncheckedCreateWithoutProblemInput> | SheetProblemCreateWithoutProblemInput[] | SheetProblemUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SheetProblemCreateOrConnectWithoutProblemInput | SheetProblemCreateOrConnectWithoutProblemInput[]
    upsert?: SheetProblemUpsertWithWhereUniqueWithoutProblemInput | SheetProblemUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SheetProblemCreateManyProblemInputEnvelope
    set?: SheetProblemWhereUniqueInput | SheetProblemWhereUniqueInput[]
    disconnect?: SheetProblemWhereUniqueInput | SheetProblemWhereUniqueInput[]
    delete?: SheetProblemWhereUniqueInput | SheetProblemWhereUniqueInput[]
    connect?: SheetProblemWhereUniqueInput | SheetProblemWhereUniqueInput[]
    update?: SheetProblemUpdateWithWhereUniqueWithoutProblemInput | SheetProblemUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SheetProblemUpdateManyWithWhereWithoutProblemInput | SheetProblemUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SheetProblemScalarWhereInput | SheetProblemScalarWhereInput[]
  }

  export type SolvedProblemUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SolvedProblemCreateWithoutProblemInput, SolvedProblemUncheckedCreateWithoutProblemInput> | SolvedProblemCreateWithoutProblemInput[] | SolvedProblemUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SolvedProblemCreateOrConnectWithoutProblemInput | SolvedProblemCreateOrConnectWithoutProblemInput[]
    upsert?: SolvedProblemUpsertWithWhereUniqueWithoutProblemInput | SolvedProblemUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SolvedProblemCreateManyProblemInputEnvelope
    set?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    disconnect?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    delete?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    connect?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    update?: SolvedProblemUpdateWithWhereUniqueWithoutProblemInput | SolvedProblemUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SolvedProblemUpdateManyWithWhereWithoutProblemInput | SolvedProblemUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SolvedProblemScalarWhereInput | SolvedProblemScalarWhereInput[]
  }

  export type ProblemInPlaylistUpdateManyWithoutProblemNestedInput = {
    create?: XOR<ProblemInPlaylistCreateWithoutProblemInput, ProblemInPlaylistUncheckedCreateWithoutProblemInput> | ProblemInPlaylistCreateWithoutProblemInput[] | ProblemInPlaylistUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemInPlaylistCreateOrConnectWithoutProblemInput | ProblemInPlaylistCreateOrConnectWithoutProblemInput[]
    upsert?: ProblemInPlaylistUpsertWithWhereUniqueWithoutProblemInput | ProblemInPlaylistUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: ProblemInPlaylistCreateManyProblemInputEnvelope
    set?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    disconnect?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    delete?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    connect?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    update?: ProblemInPlaylistUpdateWithWhereUniqueWithoutProblemInput | ProblemInPlaylistUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: ProblemInPlaylistUpdateManyWithWhereWithoutProblemInput | ProblemInPlaylistUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: ProblemInPlaylistScalarWhereInput | ProblemInPlaylistScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutProblemInput | SubmissionUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutProblemInput | SubmissionUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutProblemInput | SubmissionUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type SheetProblemUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SheetProblemCreateWithoutProblemInput, SheetProblemUncheckedCreateWithoutProblemInput> | SheetProblemCreateWithoutProblemInput[] | SheetProblemUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SheetProblemCreateOrConnectWithoutProblemInput | SheetProblemCreateOrConnectWithoutProblemInput[]
    upsert?: SheetProblemUpsertWithWhereUniqueWithoutProblemInput | SheetProblemUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SheetProblemCreateManyProblemInputEnvelope
    set?: SheetProblemWhereUniqueInput | SheetProblemWhereUniqueInput[]
    disconnect?: SheetProblemWhereUniqueInput | SheetProblemWhereUniqueInput[]
    delete?: SheetProblemWhereUniqueInput | SheetProblemWhereUniqueInput[]
    connect?: SheetProblemWhereUniqueInput | SheetProblemWhereUniqueInput[]
    update?: SheetProblemUpdateWithWhereUniqueWithoutProblemInput | SheetProblemUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SheetProblemUpdateManyWithWhereWithoutProblemInput | SheetProblemUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SheetProblemScalarWhereInput | SheetProblemScalarWhereInput[]
  }

  export type SolvedProblemUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SolvedProblemCreateWithoutProblemInput, SolvedProblemUncheckedCreateWithoutProblemInput> | SolvedProblemCreateWithoutProblemInput[] | SolvedProblemUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SolvedProblemCreateOrConnectWithoutProblemInput | SolvedProblemCreateOrConnectWithoutProblemInput[]
    upsert?: SolvedProblemUpsertWithWhereUniqueWithoutProblemInput | SolvedProblemUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SolvedProblemCreateManyProblemInputEnvelope
    set?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    disconnect?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    delete?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    connect?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    update?: SolvedProblemUpdateWithWhereUniqueWithoutProblemInput | SolvedProblemUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SolvedProblemUpdateManyWithWhereWithoutProblemInput | SolvedProblemUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SolvedProblemScalarWhereInput | SolvedProblemScalarWhereInput[]
  }

  export type ProblemInPlaylistUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<ProblemInPlaylistCreateWithoutProblemInput, ProblemInPlaylistUncheckedCreateWithoutProblemInput> | ProblemInPlaylistCreateWithoutProblemInput[] | ProblemInPlaylistUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemInPlaylistCreateOrConnectWithoutProblemInput | ProblemInPlaylistCreateOrConnectWithoutProblemInput[]
    upsert?: ProblemInPlaylistUpsertWithWhereUniqueWithoutProblemInput | ProblemInPlaylistUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: ProblemInPlaylistCreateManyProblemInputEnvelope
    set?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    disconnect?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    delete?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    connect?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    update?: ProblemInPlaylistUpdateWithWhereUniqueWithoutProblemInput | ProblemInPlaylistUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: ProblemInPlaylistUpdateManyWithWhereWithoutProblemInput | ProblemInPlaylistUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: ProblemInPlaylistScalarWhereInput | ProblemInPlaylistScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type ProblemCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<ProblemCreateWithoutSubmissionsInput, ProblemUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSubmissionsInput
    connect?: ProblemWhereUniqueInput
  }

  export type TestcaseCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<TestcaseCreateWithoutSubmissionInput, TestcaseUncheckedCreateWithoutSubmissionInput> | TestcaseCreateWithoutSubmissionInput[] | TestcaseUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: TestcaseCreateOrConnectWithoutSubmissionInput | TestcaseCreateOrConnectWithoutSubmissionInput[]
    createMany?: TestcaseCreateManySubmissionInputEnvelope
    connect?: TestcaseWhereUniqueInput | TestcaseWhereUniqueInput[]
  }

  export type TestcaseUncheckedCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<TestcaseCreateWithoutSubmissionInput, TestcaseUncheckedCreateWithoutSubmissionInput> | TestcaseCreateWithoutSubmissionInput[] | TestcaseUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: TestcaseCreateOrConnectWithoutSubmissionInput | TestcaseCreateOrConnectWithoutSubmissionInput[]
    createMany?: TestcaseCreateManySubmissionInputEnvelope
    connect?: TestcaseWhereUniqueInput | TestcaseWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    upsert?: UserUpsertWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubmissionsInput, UserUpdateWithoutSubmissionsInput>, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type ProblemUpdateOneWithoutSubmissionsNestedInput = {
    create?: XOR<ProblemCreateWithoutSubmissionsInput, ProblemUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSubmissionsInput
    upsert?: ProblemUpsertWithoutSubmissionsInput
    disconnect?: ProblemWhereInput | boolean
    delete?: ProblemWhereInput | boolean
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutSubmissionsInput, ProblemUpdateWithoutSubmissionsInput>, ProblemUncheckedUpdateWithoutSubmissionsInput>
  }

  export type TestcaseUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<TestcaseCreateWithoutSubmissionInput, TestcaseUncheckedCreateWithoutSubmissionInput> | TestcaseCreateWithoutSubmissionInput[] | TestcaseUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: TestcaseCreateOrConnectWithoutSubmissionInput | TestcaseCreateOrConnectWithoutSubmissionInput[]
    upsert?: TestcaseUpsertWithWhereUniqueWithoutSubmissionInput | TestcaseUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: TestcaseCreateManySubmissionInputEnvelope
    set?: TestcaseWhereUniqueInput | TestcaseWhereUniqueInput[]
    disconnect?: TestcaseWhereUniqueInput | TestcaseWhereUniqueInput[]
    delete?: TestcaseWhereUniqueInput | TestcaseWhereUniqueInput[]
    connect?: TestcaseWhereUniqueInput | TestcaseWhereUniqueInput[]
    update?: TestcaseUpdateWithWhereUniqueWithoutSubmissionInput | TestcaseUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: TestcaseUpdateManyWithWhereWithoutSubmissionInput | TestcaseUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: TestcaseScalarWhereInput | TestcaseScalarWhereInput[]
  }

  export type TestcaseUncheckedUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<TestcaseCreateWithoutSubmissionInput, TestcaseUncheckedCreateWithoutSubmissionInput> | TestcaseCreateWithoutSubmissionInput[] | TestcaseUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: TestcaseCreateOrConnectWithoutSubmissionInput | TestcaseCreateOrConnectWithoutSubmissionInput[]
    upsert?: TestcaseUpsertWithWhereUniqueWithoutSubmissionInput | TestcaseUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: TestcaseCreateManySubmissionInputEnvelope
    set?: TestcaseWhereUniqueInput | TestcaseWhereUniqueInput[]
    disconnect?: TestcaseWhereUniqueInput | TestcaseWhereUniqueInput[]
    delete?: TestcaseWhereUniqueInput | TestcaseWhereUniqueInput[]
    connect?: TestcaseWhereUniqueInput | TestcaseWhereUniqueInput[]
    update?: TestcaseUpdateWithWhereUniqueWithoutSubmissionInput | TestcaseUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: TestcaseUpdateManyWithWhereWithoutSubmissionInput | TestcaseUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: TestcaseScalarWhereInput | TestcaseScalarWhereInput[]
  }

  export type SubmissionCreateNestedOneWithoutTestCasesInput = {
    create?: XOR<SubmissionCreateWithoutTestCasesInput, SubmissionUncheckedCreateWithoutTestCasesInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutTestCasesInput
    connect?: SubmissionWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubmissionUpdateOneWithoutTestCasesNestedInput = {
    create?: XOR<SubmissionCreateWithoutTestCasesInput, SubmissionUncheckedCreateWithoutTestCasesInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutTestCasesInput
    upsert?: SubmissionUpsertWithoutTestCasesInput
    disconnect?: SubmissionWhereInput | boolean
    delete?: SubmissionWhereInput | boolean
    connect?: SubmissionWhereUniqueInput
    update?: XOR<XOR<SubmissionUpdateToOneWithWhereWithoutTestCasesInput, SubmissionUpdateWithoutTestCasesInput>, SubmissionUncheckedUpdateWithoutTestCasesInput>
  }

  export type UserCreateNestedOneWithoutSolvedProblemsInput = {
    create?: XOR<UserCreateWithoutSolvedProblemsInput, UserUncheckedCreateWithoutSolvedProblemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSolvedProblemsInput
    connect?: UserWhereUniqueInput
  }

  export type ProblemCreateNestedOneWithoutSolvedByInput = {
    create?: XOR<ProblemCreateWithoutSolvedByInput, ProblemUncheckedCreateWithoutSolvedByInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSolvedByInput
    connect?: ProblemWhereUniqueInput
  }

  export type UserUpdateOneWithoutSolvedProblemsNestedInput = {
    create?: XOR<UserCreateWithoutSolvedProblemsInput, UserUncheckedCreateWithoutSolvedProblemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSolvedProblemsInput
    upsert?: UserUpsertWithoutSolvedProblemsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSolvedProblemsInput, UserUpdateWithoutSolvedProblemsInput>, UserUncheckedUpdateWithoutSolvedProblemsInput>
  }

  export type ProblemUpdateOneWithoutSolvedByNestedInput = {
    create?: XOR<ProblemCreateWithoutSolvedByInput, ProblemUncheckedCreateWithoutSolvedByInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSolvedByInput
    upsert?: ProblemUpsertWithoutSolvedByInput
    disconnect?: ProblemWhereInput | boolean
    delete?: ProblemWhereInput | boolean
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutSolvedByInput, ProblemUpdateWithoutSolvedByInput>, ProblemUncheckedUpdateWithoutSolvedByInput>
  }

  export type ProblemInPlaylistCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<ProblemInPlaylistCreateWithoutPlaylistInput, ProblemInPlaylistUncheckedCreateWithoutPlaylistInput> | ProblemInPlaylistCreateWithoutPlaylistInput[] | ProblemInPlaylistUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: ProblemInPlaylistCreateOrConnectWithoutPlaylistInput | ProblemInPlaylistCreateOrConnectWithoutPlaylistInput[]
    createMany?: ProblemInPlaylistCreateManyPlaylistInputEnvelope
    connect?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPlaylistsInput = {
    create?: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistsInput
    connect?: UserWhereUniqueInput
  }

  export type ProblemInPlaylistUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<ProblemInPlaylistCreateWithoutPlaylistInput, ProblemInPlaylistUncheckedCreateWithoutPlaylistInput> | ProblemInPlaylistCreateWithoutPlaylistInput[] | ProblemInPlaylistUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: ProblemInPlaylistCreateOrConnectWithoutPlaylistInput | ProblemInPlaylistCreateOrConnectWithoutPlaylistInput[]
    createMany?: ProblemInPlaylistCreateManyPlaylistInputEnvelope
    connect?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
  }

  export type ProblemInPlaylistUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<ProblemInPlaylistCreateWithoutPlaylistInput, ProblemInPlaylistUncheckedCreateWithoutPlaylistInput> | ProblemInPlaylistCreateWithoutPlaylistInput[] | ProblemInPlaylistUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: ProblemInPlaylistCreateOrConnectWithoutPlaylistInput | ProblemInPlaylistCreateOrConnectWithoutPlaylistInput[]
    upsert?: ProblemInPlaylistUpsertWithWhereUniqueWithoutPlaylistInput | ProblemInPlaylistUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: ProblemInPlaylistCreateManyPlaylistInputEnvelope
    set?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    disconnect?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    delete?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    connect?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    update?: ProblemInPlaylistUpdateWithWhereUniqueWithoutPlaylistInput | ProblemInPlaylistUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: ProblemInPlaylistUpdateManyWithWhereWithoutPlaylistInput | ProblemInPlaylistUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: ProblemInPlaylistScalarWhereInput | ProblemInPlaylistScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutPlaylistsNestedInput = {
    create?: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistsInput
    upsert?: UserUpsertWithoutPlaylistsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlaylistsInput, UserUpdateWithoutPlaylistsInput>, UserUncheckedUpdateWithoutPlaylistsInput>
  }

  export type ProblemInPlaylistUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<ProblemInPlaylistCreateWithoutPlaylistInput, ProblemInPlaylistUncheckedCreateWithoutPlaylistInput> | ProblemInPlaylistCreateWithoutPlaylistInput[] | ProblemInPlaylistUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: ProblemInPlaylistCreateOrConnectWithoutPlaylistInput | ProblemInPlaylistCreateOrConnectWithoutPlaylistInput[]
    upsert?: ProblemInPlaylistUpsertWithWhereUniqueWithoutPlaylistInput | ProblemInPlaylistUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: ProblemInPlaylistCreateManyPlaylistInputEnvelope
    set?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    disconnect?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    delete?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    connect?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    update?: ProblemInPlaylistUpdateWithWhereUniqueWithoutPlaylistInput | ProblemInPlaylistUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: ProblemInPlaylistUpdateManyWithWhereWithoutPlaylistInput | ProblemInPlaylistUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: ProblemInPlaylistScalarWhereInput | ProblemInPlaylistScalarWhereInput[]
  }

  export type PlaylistCreateNestedOneWithoutProblemsInput = {
    create?: XOR<PlaylistCreateWithoutProblemsInput, PlaylistUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutProblemsInput
    connect?: PlaylistWhereUniqueInput
  }

  export type ProblemCreateNestedOneWithoutProblemInPlaylistInput = {
    create?: XOR<ProblemCreateWithoutProblemInPlaylistInput, ProblemUncheckedCreateWithoutProblemInPlaylistInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutProblemInPlaylistInput
    connect?: ProblemWhereUniqueInput
  }

  export type PlaylistUpdateOneRequiredWithoutProblemsNestedInput = {
    create?: XOR<PlaylistCreateWithoutProblemsInput, PlaylistUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutProblemsInput
    upsert?: PlaylistUpsertWithoutProblemsInput
    connect?: PlaylistWhereUniqueInput
    update?: XOR<XOR<PlaylistUpdateToOneWithWhereWithoutProblemsInput, PlaylistUpdateWithoutProblemsInput>, PlaylistUncheckedUpdateWithoutProblemsInput>
  }

  export type ProblemUpdateOneRequiredWithoutProblemInPlaylistNestedInput = {
    create?: XOR<ProblemCreateWithoutProblemInPlaylistInput, ProblemUncheckedCreateWithoutProblemInPlaylistInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutProblemInPlaylistInput
    upsert?: ProblemUpsertWithoutProblemInPlaylistInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutProblemInPlaylistInput, ProblemUpdateWithoutProblemInPlaylistInput>, ProblemUncheckedUpdateWithoutProblemInPlaylistInput>
  }

  export type SheetCreatelanguagesInput = {
    set: string[]
  }

  export type SheetCreatetagsInput = {
    set: string[]
  }

  export type PurchaseCreateNestedManyWithoutSheetInput = {
    create?: XOR<PurchaseCreateWithoutSheetInput, PurchaseUncheckedCreateWithoutSheetInput> | PurchaseCreateWithoutSheetInput[] | PurchaseUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutSheetInput | PurchaseCreateOrConnectWithoutSheetInput[]
    createMany?: PurchaseCreateManySheetInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type SheetProblemCreateNestedManyWithoutSheetInput = {
    create?: XOR<SheetProblemCreateWithoutSheetInput, SheetProblemUncheckedCreateWithoutSheetInput> | SheetProblemCreateWithoutSheetInput[] | SheetProblemUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: SheetProblemCreateOrConnectWithoutSheetInput | SheetProblemCreateOrConnectWithoutSheetInput[]
    createMany?: SheetProblemCreateManySheetInputEnvelope
    connect?: SheetProblemWhereUniqueInput | SheetProblemWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutSheetInput = {
    create?: XOR<PurchaseCreateWithoutSheetInput, PurchaseUncheckedCreateWithoutSheetInput> | PurchaseCreateWithoutSheetInput[] | PurchaseUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutSheetInput | PurchaseCreateOrConnectWithoutSheetInput[]
    createMany?: PurchaseCreateManySheetInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type SheetProblemUncheckedCreateNestedManyWithoutSheetInput = {
    create?: XOR<SheetProblemCreateWithoutSheetInput, SheetProblemUncheckedCreateWithoutSheetInput> | SheetProblemCreateWithoutSheetInput[] | SheetProblemUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: SheetProblemCreateOrConnectWithoutSheetInput | SheetProblemCreateOrConnectWithoutSheetInput[]
    createMany?: SheetProblemCreateManySheetInputEnvelope
    connect?: SheetProblemWhereUniqueInput | SheetProblemWhereUniqueInput[]
  }

  export type SheetUpdatelanguagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SheetUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PurchaseUpdateManyWithoutSheetNestedInput = {
    create?: XOR<PurchaseCreateWithoutSheetInput, PurchaseUncheckedCreateWithoutSheetInput> | PurchaseCreateWithoutSheetInput[] | PurchaseUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutSheetInput | PurchaseCreateOrConnectWithoutSheetInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutSheetInput | PurchaseUpsertWithWhereUniqueWithoutSheetInput[]
    createMany?: PurchaseCreateManySheetInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutSheetInput | PurchaseUpdateWithWhereUniqueWithoutSheetInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutSheetInput | PurchaseUpdateManyWithWhereWithoutSheetInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type SheetProblemUpdateManyWithoutSheetNestedInput = {
    create?: XOR<SheetProblemCreateWithoutSheetInput, SheetProblemUncheckedCreateWithoutSheetInput> | SheetProblemCreateWithoutSheetInput[] | SheetProblemUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: SheetProblemCreateOrConnectWithoutSheetInput | SheetProblemCreateOrConnectWithoutSheetInput[]
    upsert?: SheetProblemUpsertWithWhereUniqueWithoutSheetInput | SheetProblemUpsertWithWhereUniqueWithoutSheetInput[]
    createMany?: SheetProblemCreateManySheetInputEnvelope
    set?: SheetProblemWhereUniqueInput | SheetProblemWhereUniqueInput[]
    disconnect?: SheetProblemWhereUniqueInput | SheetProblemWhereUniqueInput[]
    delete?: SheetProblemWhereUniqueInput | SheetProblemWhereUniqueInput[]
    connect?: SheetProblemWhereUniqueInput | SheetProblemWhereUniqueInput[]
    update?: SheetProblemUpdateWithWhereUniqueWithoutSheetInput | SheetProblemUpdateWithWhereUniqueWithoutSheetInput[]
    updateMany?: SheetProblemUpdateManyWithWhereWithoutSheetInput | SheetProblemUpdateManyWithWhereWithoutSheetInput[]
    deleteMany?: SheetProblemScalarWhereInput | SheetProblemScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateManyWithoutSheetNestedInput = {
    create?: XOR<PurchaseCreateWithoutSheetInput, PurchaseUncheckedCreateWithoutSheetInput> | PurchaseCreateWithoutSheetInput[] | PurchaseUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutSheetInput | PurchaseCreateOrConnectWithoutSheetInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutSheetInput | PurchaseUpsertWithWhereUniqueWithoutSheetInput[]
    createMany?: PurchaseCreateManySheetInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutSheetInput | PurchaseUpdateWithWhereUniqueWithoutSheetInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutSheetInput | PurchaseUpdateManyWithWhereWithoutSheetInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type SheetProblemUncheckedUpdateManyWithoutSheetNestedInput = {
    create?: XOR<SheetProblemCreateWithoutSheetInput, SheetProblemUncheckedCreateWithoutSheetInput> | SheetProblemCreateWithoutSheetInput[] | SheetProblemUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: SheetProblemCreateOrConnectWithoutSheetInput | SheetProblemCreateOrConnectWithoutSheetInput[]
    upsert?: SheetProblemUpsertWithWhereUniqueWithoutSheetInput | SheetProblemUpsertWithWhereUniqueWithoutSheetInput[]
    createMany?: SheetProblemCreateManySheetInputEnvelope
    set?: SheetProblemWhereUniqueInput | SheetProblemWhereUniqueInput[]
    disconnect?: SheetProblemWhereUniqueInput | SheetProblemWhereUniqueInput[]
    delete?: SheetProblemWhereUniqueInput | SheetProblemWhereUniqueInput[]
    connect?: SheetProblemWhereUniqueInput | SheetProblemWhereUniqueInput[]
    update?: SheetProblemUpdateWithWhereUniqueWithoutSheetInput | SheetProblemUpdateWithWhereUniqueWithoutSheetInput[]
    updateMany?: SheetProblemUpdateManyWithWhereWithoutSheetInput | SheetProblemUpdateManyWithWhereWithoutSheetInput[]
    deleteMany?: SheetProblemScalarWhereInput | SheetProblemScalarWhereInput[]
  }

  export type SheetCreateNestedOneWithoutSheetAssignmentsInput = {
    create?: XOR<SheetCreateWithoutSheetAssignmentsInput, SheetUncheckedCreateWithoutSheetAssignmentsInput>
    connectOrCreate?: SheetCreateOrConnectWithoutSheetAssignmentsInput
    connect?: SheetWhereUniqueInput
  }

  export type ProblemCreateNestedOneWithoutSheetAssignmentsInput = {
    create?: XOR<ProblemCreateWithoutSheetAssignmentsInput, ProblemUncheckedCreateWithoutSheetAssignmentsInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSheetAssignmentsInput
    connect?: ProblemWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSheetAssignmentsInput = {
    create?: XOR<UserCreateWithoutSheetAssignmentsInput, UserUncheckedCreateWithoutSheetAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSheetAssignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SheetUpdateOneRequiredWithoutSheetAssignmentsNestedInput = {
    create?: XOR<SheetCreateWithoutSheetAssignmentsInput, SheetUncheckedCreateWithoutSheetAssignmentsInput>
    connectOrCreate?: SheetCreateOrConnectWithoutSheetAssignmentsInput
    upsert?: SheetUpsertWithoutSheetAssignmentsInput
    connect?: SheetWhereUniqueInput
    update?: XOR<XOR<SheetUpdateToOneWithWhereWithoutSheetAssignmentsInput, SheetUpdateWithoutSheetAssignmentsInput>, SheetUncheckedUpdateWithoutSheetAssignmentsInput>
  }

  export type ProblemUpdateOneRequiredWithoutSheetAssignmentsNestedInput = {
    create?: XOR<ProblemCreateWithoutSheetAssignmentsInput, ProblemUncheckedCreateWithoutSheetAssignmentsInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSheetAssignmentsInput
    upsert?: ProblemUpsertWithoutSheetAssignmentsInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutSheetAssignmentsInput, ProblemUpdateWithoutSheetAssignmentsInput>, ProblemUncheckedUpdateWithoutSheetAssignmentsInput>
  }

  export type UserUpdateOneWithoutSheetAssignmentsNestedInput = {
    create?: XOR<UserCreateWithoutSheetAssignmentsInput, UserUncheckedCreateWithoutSheetAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSheetAssignmentsInput
    upsert?: UserUpsertWithoutSheetAssignmentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSheetAssignmentsInput, UserUpdateWithoutSheetAssignmentsInput>, UserUncheckedUpdateWithoutSheetAssignmentsInput>
  }

  export type UserCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasesInput
    connect?: UserWhereUniqueInput
  }

  export type SheetCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<SheetCreateWithoutPurchasesInput, SheetUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: SheetCreateOrConnectWithoutPurchasesInput
    connect?: SheetWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<PaymentCreateWithoutPurchaseInput, PaymentUncheckedCreateWithoutPurchaseInput> | PaymentCreateWithoutPurchaseInput[] | PaymentUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPurchaseInput | PaymentCreateOrConnectWithoutPurchaseInput[]
    createMany?: PaymentCreateManyPurchaseInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<PaymentCreateWithoutPurchaseInput, PaymentUncheckedCreateWithoutPurchaseInput> | PaymentCreateWithoutPurchaseInput[] | PaymentUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPurchaseInput | PaymentCreateOrConnectWithoutPurchaseInput[]
    createMany?: PaymentCreateManyPurchaseInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasesInput
    upsert?: UserUpsertWithoutPurchasesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPurchasesInput, UserUpdateWithoutPurchasesInput>, UserUncheckedUpdateWithoutPurchasesInput>
  }

  export type SheetUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<SheetCreateWithoutPurchasesInput, SheetUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: SheetCreateOrConnectWithoutPurchasesInput
    upsert?: SheetUpsertWithoutPurchasesInput
    connect?: SheetWhereUniqueInput
    update?: XOR<XOR<SheetUpdateToOneWithWhereWithoutPurchasesInput, SheetUpdateWithoutPurchasesInput>, SheetUncheckedUpdateWithoutPurchasesInput>
  }

  export type PaymentUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<PaymentCreateWithoutPurchaseInput, PaymentUncheckedCreateWithoutPurchaseInput> | PaymentCreateWithoutPurchaseInput[] | PaymentUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPurchaseInput | PaymentCreateOrConnectWithoutPurchaseInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutPurchaseInput | PaymentUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: PaymentCreateManyPurchaseInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutPurchaseInput | PaymentUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutPurchaseInput | PaymentUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<PaymentCreateWithoutPurchaseInput, PaymentUncheckedCreateWithoutPurchaseInput> | PaymentCreateWithoutPurchaseInput[] | PaymentUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPurchaseInput | PaymentCreateOrConnectWithoutPurchaseInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutPurchaseInput | PaymentUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: PaymentCreateManyPurchaseInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutPurchaseInput | PaymentUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutPurchaseInput | PaymentUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPaymentInput = {
    create?: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput
    connect?: UserWhereUniqueInput
  }

  export type PurchaseCreateNestedOneWithoutPaymentInput = {
    create?: XOR<PurchaseCreateWithoutPaymentInput, PurchaseUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutPaymentInput
    connect?: PurchaseWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput
    upsert?: UserUpsertWithoutPaymentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentInput, UserUpdateWithoutPaymentInput>, UserUncheckedUpdateWithoutPaymentInput>
  }

  export type PurchaseUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<PurchaseCreateWithoutPaymentInput, PurchaseUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutPaymentInput
    upsert?: PurchaseUpsertWithoutPaymentInput
    connect?: PurchaseWhereUniqueInput
    update?: XOR<XOR<PurchaseUpdateToOneWithWhereWithoutPaymentInput, PurchaseUpdateWithoutPaymentInput>, PurchaseUncheckedUpdateWithoutPaymentInput>
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    search?: string
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

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
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

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedEnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type NestedEnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type BasicInfoCreateWithoutSocialsInput = {
    id?: string
    gender?: $Enums.Gender | null
    bio?: string | null
    birth?: Date | string | null
    user?: UserCreateNestedOneWithoutBasicInfoInput
  }

  export type BasicInfoUncheckedCreateWithoutSocialsInput = {
    id?: string
    gender?: $Enums.Gender | null
    bio?: string | null
    birth?: Date | string | null
    user?: UserUncheckedCreateNestedOneWithoutBasicInfoInput
  }

  export type BasicInfoCreateOrConnectWithoutSocialsInput = {
    where: BasicInfoWhereUniqueInput
    create: XOR<BasicInfoCreateWithoutSocialsInput, BasicInfoUncheckedCreateWithoutSocialsInput>
  }

  export type BasicInfoUpsertWithoutSocialsInput = {
    update: XOR<BasicInfoUpdateWithoutSocialsInput, BasicInfoUncheckedUpdateWithoutSocialsInput>
    create: XOR<BasicInfoCreateWithoutSocialsInput, BasicInfoUncheckedCreateWithoutSocialsInput>
    where?: BasicInfoWhereInput
  }

  export type BasicInfoUpdateToOneWithWhereWithoutSocialsInput = {
    where?: BasicInfoWhereInput
    data: XOR<BasicInfoUpdateWithoutSocialsInput, BasicInfoUncheckedUpdateWithoutSocialsInput>
  }

  export type BasicInfoUpdateWithoutSocialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutBasicInfoNestedInput
  }

  export type BasicInfoUncheckedUpdateWithoutSocialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUncheckedUpdateOneWithoutBasicInfoNestedInput
  }

  export type SocialCreateWithoutBasicInfoInput = {
    id?: string
    website?: string | null
    twitter?: string | null
    github?: string | null
    linkedIn?: string | null
  }

  export type SocialUncheckedCreateWithoutBasicInfoInput = {
    id?: string
    website?: string | null
    twitter?: string | null
    github?: string | null
    linkedIn?: string | null
  }

  export type SocialCreateOrConnectWithoutBasicInfoInput = {
    where: SocialWhereUniqueInput
    create: XOR<SocialCreateWithoutBasicInfoInput, SocialUncheckedCreateWithoutBasicInfoInput>
  }

  export type UserCreateWithoutBasicInfoInput = {
    id?: string
    fullname?: string | null
    email: string
    username?: string | null
    password?: string | null
    profileImage?: string
    role?: $Enums.UserRole
    isGoogleAuth?: boolean
    isEmailVerified?: boolean
    isActive?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    solvedProblems?: SolvedProblemCreateNestedManyWithoutUserInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    purchases?: PurchaseCreateNestedManyWithoutUserInput
    sheetAssignments?: SheetProblemCreateNestedManyWithoutUserInput
    payment?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBasicInfoInput = {
    id?: string
    fullname?: string | null
    email: string
    username?: string | null
    password?: string | null
    profileImage?: string
    role?: $Enums.UserRole
    isGoogleAuth?: boolean
    isEmailVerified?: boolean
    isActive?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    solvedProblems?: SolvedProblemUncheckedCreateNestedManyWithoutUserInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    sheetAssignments?: SheetProblemUncheckedCreateNestedManyWithoutUserInput
    payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBasicInfoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBasicInfoInput, UserUncheckedCreateWithoutBasicInfoInput>
  }

  export type SocialUpsertWithoutBasicInfoInput = {
    update: XOR<SocialUpdateWithoutBasicInfoInput, SocialUncheckedUpdateWithoutBasicInfoInput>
    create: XOR<SocialCreateWithoutBasicInfoInput, SocialUncheckedCreateWithoutBasicInfoInput>
    where?: SocialWhereInput
  }

  export type SocialUpdateToOneWithWhereWithoutBasicInfoInput = {
    where?: SocialWhereInput
    data: XOR<SocialUpdateWithoutBasicInfoInput, SocialUncheckedUpdateWithoutBasicInfoInput>
  }

  export type SocialUpdateWithoutBasicInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SocialUncheckedUpdateWithoutBasicInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutBasicInfoInput = {
    update: XOR<UserUpdateWithoutBasicInfoInput, UserUncheckedUpdateWithoutBasicInfoInput>
    create: XOR<UserCreateWithoutBasicInfoInput, UserUncheckedCreateWithoutBasicInfoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBasicInfoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBasicInfoInput, UserUncheckedUpdateWithoutBasicInfoInput>
  }

  export type UserUpdateWithoutBasicInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isGoogleAuth?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    solvedProblems?: SolvedProblemUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
    sheetAssignments?: SheetProblemUpdateManyWithoutUserNestedInput
    payment?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBasicInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isGoogleAuth?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    solvedProblems?: SolvedProblemUncheckedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    sheetAssignments?: SheetProblemUncheckedUpdateManyWithoutUserNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProblemCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    difficulty?: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: string | null
    isDemo?: boolean
    isPremium?: boolean
    company?: ProblemCreatecompanyInput | string[]
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionCreateNestedManyWithoutProblemInput
    sheetAssignments?: SheetProblemCreateNestedManyWithoutProblemInput
    solvedBy?: SolvedProblemCreateNestedManyWithoutProblemInput
    problemInPlaylist?: ProblemInPlaylistCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    difficulty?: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: string | null
    isDemo?: boolean
    isPremium?: boolean
    company?: ProblemCreatecompanyInput | string[]
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    sheetAssignments?: SheetProblemUncheckedCreateNestedManyWithoutProblemInput
    solvedBy?: SolvedProblemUncheckedCreateNestedManyWithoutProblemInput
    problemInPlaylist?: ProblemInPlaylistUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutUserInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput>
  }

  export type ProblemCreateManyUserInputEnvelope = {
    data: ProblemCreateManyUserInput | ProblemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionCreateWithoutUserInput = {
    id?: string
    source_code: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problem?: ProblemCreateNestedOneWithoutSubmissionsInput
    testCases?: TestcaseCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutUserInput = {
    id?: string
    source_code: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problemId?: string | null
    testCases?: TestcaseUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionCreateManyUserInputEnvelope = {
    data: SubmissionCreateManyUserInput | SubmissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SolvedProblemCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problem?: ProblemCreateNestedOneWithoutSolvedByInput
  }

  export type SolvedProblemUncheckedCreateWithoutUserInput = {
    id?: string
    problemId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolvedProblemCreateOrConnectWithoutUserInput = {
    where: SolvedProblemWhereUniqueInput
    create: XOR<SolvedProblemCreateWithoutUserInput, SolvedProblemUncheckedCreateWithoutUserInput>
  }

  export type SolvedProblemCreateManyUserInputEnvelope = {
    data: SolvedProblemCreateManyUserInput | SolvedProblemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PlaylistCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemInPlaylistCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemInPlaylistUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistCreateOrConnectWithoutUserInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput>
  }

  export type PlaylistCreateManyUserInputEnvelope = {
    data: PlaylistCreateManyUserInput | PlaylistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseCreateWithoutUserInput = {
    id?: string
    boughtAt?: Date | string
    sheet: SheetCreateNestedOneWithoutPurchasesInput
    payment?: PaymentCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutUserInput = {
    id?: string
    sheetId: string
    boughtAt?: Date | string
    payment?: PaymentUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseCreateOrConnectWithoutUserInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput>
  }

  export type PurchaseCreateManyUserInputEnvelope = {
    data: PurchaseCreateManyUserInput | PurchaseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SheetProblemCreateWithoutUserInput = {
    id?: string
    orderIndex?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sheet: SheetCreateNestedOneWithoutSheetAssignmentsInput
    problem: ProblemCreateNestedOneWithoutSheetAssignmentsInput
  }

  export type SheetProblemUncheckedCreateWithoutUserInput = {
    id?: string
    sheetId: string
    problemId: string
    orderIndex?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SheetProblemCreateOrConnectWithoutUserInput = {
    where: SheetProblemWhereUniqueInput
    create: XOR<SheetProblemCreateWithoutUserInput, SheetProblemUncheckedCreateWithoutUserInput>
  }

  export type SheetProblemCreateManyUserInputEnvelope = {
    data: SheetProblemCreateManyUserInput | SheetProblemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BasicInfoCreateWithoutUserInput = {
    id?: string
    gender?: $Enums.Gender | null
    bio?: string | null
    birth?: Date | string | null
    socials?: SocialCreateNestedOneWithoutBasicInfoInput
  }

  export type BasicInfoUncheckedCreateWithoutUserInput = {
    id?: string
    gender?: $Enums.Gender | null
    bio?: string | null
    birth?: Date | string | null
    socialId?: string | null
  }

  export type BasicInfoCreateOrConnectWithoutUserInput = {
    where: BasicInfoWhereUniqueInput
    create: XOR<BasicInfoCreateWithoutUserInput, BasicInfoUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateWithoutUserInput = {
    id?: string
    amount: number
    currency: string
    status: string
    orderId: string
    paymentId: string
    paymentMethod?: string | null
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    purchase: PurchaseCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: string
    purchaseId: string
    amount: number
    currency: string
    status: string
    orderId: string
    paymentId: string
    paymentMethod?: string | null
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProblemUpsertWithWhereUniqueWithoutUserInput = {
    where: ProblemWhereUniqueInput
    update: XOR<ProblemUpdateWithoutUserInput, ProblemUncheckedUpdateWithoutUserInput>
    create: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput>
  }

  export type ProblemUpdateWithWhereUniqueWithoutUserInput = {
    where: ProblemWhereUniqueInput
    data: XOR<ProblemUpdateWithoutUserInput, ProblemUncheckedUpdateWithoutUserInput>
  }

  export type ProblemUpdateManyWithWhereWithoutUserInput = {
    where: ProblemScalarWhereInput
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyWithoutUserInput>
  }

  export type ProblemScalarWhereInput = {
    AND?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
    OR?: ProblemScalarWhereInput[]
    NOT?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
    id?: StringFilter<"Problem"> | string
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    difficulty?: EnumDifficultyFilter<"Problem"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"Problem">
    userId?: StringFilter<"Problem"> | string
    examples?: JsonFilter<"Problem">
    constraints?: StringFilter<"Problem"> | string
    hints?: JsonNullableFilter<"Problem">
    editorial?: StringNullableFilter<"Problem"> | string | null
    isDemo?: BoolFilter<"Problem"> | boolean
    isPremium?: BoolFilter<"Problem"> | boolean
    company?: StringNullableListFilter<"Problem">
    testcases?: JsonFilter<"Problem">
    codeSnippets?: JsonFilter<"Problem">
    referenceSolutions?: JsonFilter<"Problem">
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
  }

  export type SubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutUserInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    OR?: SubmissionScalarWhereInput[]
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    id?: StringFilter<"Submission"> | string
    source_code?: JsonFilter<"Submission">
    language?: StringFilter<"Submission"> | string
    stdin?: StringNullableFilter<"Submission"> | string | null
    stdout?: StringNullableFilter<"Submission"> | string | null
    stderr?: StringNullableFilter<"Submission"> | string | null
    compileOutput?: StringNullableFilter<"Submission"> | string | null
    status?: StringFilter<"Submission"> | string
    memory?: StringNullableFilter<"Submission"> | string | null
    time?: StringNullableFilter<"Submission"> | string | null
    feedback?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    userId?: StringFilter<"Submission"> | string
    problemId?: StringNullableFilter<"Submission"> | string | null
  }

  export type SolvedProblemUpsertWithWhereUniqueWithoutUserInput = {
    where: SolvedProblemWhereUniqueInput
    update: XOR<SolvedProblemUpdateWithoutUserInput, SolvedProblemUncheckedUpdateWithoutUserInput>
    create: XOR<SolvedProblemCreateWithoutUserInput, SolvedProblemUncheckedCreateWithoutUserInput>
  }

  export type SolvedProblemUpdateWithWhereUniqueWithoutUserInput = {
    where: SolvedProblemWhereUniqueInput
    data: XOR<SolvedProblemUpdateWithoutUserInput, SolvedProblemUncheckedUpdateWithoutUserInput>
  }

  export type SolvedProblemUpdateManyWithWhereWithoutUserInput = {
    where: SolvedProblemScalarWhereInput
    data: XOR<SolvedProblemUpdateManyMutationInput, SolvedProblemUncheckedUpdateManyWithoutUserInput>
  }

  export type SolvedProblemScalarWhereInput = {
    AND?: SolvedProblemScalarWhereInput | SolvedProblemScalarWhereInput[]
    OR?: SolvedProblemScalarWhereInput[]
    NOT?: SolvedProblemScalarWhereInput | SolvedProblemScalarWhereInput[]
    id?: StringFilter<"SolvedProblem"> | string
    userId?: StringNullableFilter<"SolvedProblem"> | string | null
    problemId?: StringNullableFilter<"SolvedProblem"> | string | null
    createdAt?: DateTimeFilter<"SolvedProblem"> | Date | string
    updatedAt?: DateTimeFilter<"SolvedProblem"> | Date | string
  }

  export type PlaylistUpsertWithWhereUniqueWithoutUserInput = {
    where: PlaylistWhereUniqueInput
    update: XOR<PlaylistUpdateWithoutUserInput, PlaylistUncheckedUpdateWithoutUserInput>
    create: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput>
  }

  export type PlaylistUpdateWithWhereUniqueWithoutUserInput = {
    where: PlaylistWhereUniqueInput
    data: XOR<PlaylistUpdateWithoutUserInput, PlaylistUncheckedUpdateWithoutUserInput>
  }

  export type PlaylistUpdateManyWithWhereWithoutUserInput = {
    where: PlaylistScalarWhereInput
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyWithoutUserInput>
  }

  export type PlaylistScalarWhereInput = {
    AND?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    OR?: PlaylistScalarWhereInput[]
    NOT?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    id?: StringFilter<"Playlist"> | string
    name?: StringFilter<"Playlist"> | string
    description?: StringNullableFilter<"Playlist"> | string | null
    isPrivate?: BoolFilter<"Playlist"> | boolean
    userId?: StringFilter<"Playlist"> | string
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
  }

  export type PurchaseUpsertWithWhereUniqueWithoutUserInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutUserInput, PurchaseUncheckedUpdateWithoutUserInput>
    create: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutUserInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutUserInput, PurchaseUncheckedUpdateWithoutUserInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutUserInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutUserInput>
  }

  export type PurchaseScalarWhereInput = {
    AND?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    OR?: PurchaseScalarWhereInput[]
    NOT?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    id?: StringFilter<"Purchase"> | string
    userId?: StringFilter<"Purchase"> | string
    sheetId?: StringFilter<"Purchase"> | string
    boughtAt?: DateTimeFilter<"Purchase"> | Date | string
  }

  export type SheetProblemUpsertWithWhereUniqueWithoutUserInput = {
    where: SheetProblemWhereUniqueInput
    update: XOR<SheetProblemUpdateWithoutUserInput, SheetProblemUncheckedUpdateWithoutUserInput>
    create: XOR<SheetProblemCreateWithoutUserInput, SheetProblemUncheckedCreateWithoutUserInput>
  }

  export type SheetProblemUpdateWithWhereUniqueWithoutUserInput = {
    where: SheetProblemWhereUniqueInput
    data: XOR<SheetProblemUpdateWithoutUserInput, SheetProblemUncheckedUpdateWithoutUserInput>
  }

  export type SheetProblemUpdateManyWithWhereWithoutUserInput = {
    where: SheetProblemScalarWhereInput
    data: XOR<SheetProblemUpdateManyMutationInput, SheetProblemUncheckedUpdateManyWithoutUserInput>
  }

  export type SheetProblemScalarWhereInput = {
    AND?: SheetProblemScalarWhereInput | SheetProblemScalarWhereInput[]
    OR?: SheetProblemScalarWhereInput[]
    NOT?: SheetProblemScalarWhereInput | SheetProblemScalarWhereInput[]
    id?: StringFilter<"SheetProblem"> | string
    sheetId?: StringFilter<"SheetProblem"> | string
    problemId?: StringFilter<"SheetProblem"> | string
    orderIndex?: IntNullableFilter<"SheetProblem"> | number | null
    createdAt?: DateTimeFilter<"SheetProblem"> | Date | string
    updatedAt?: DateTimeFilter<"SheetProblem"> | Date | string
    userId?: StringNullableFilter<"SheetProblem"> | string | null
  }

  export type BasicInfoUpsertWithoutUserInput = {
    update: XOR<BasicInfoUpdateWithoutUserInput, BasicInfoUncheckedUpdateWithoutUserInput>
    create: XOR<BasicInfoCreateWithoutUserInput, BasicInfoUncheckedCreateWithoutUserInput>
    where?: BasicInfoWhereInput
  }

  export type BasicInfoUpdateToOneWithWhereWithoutUserInput = {
    where?: BasicInfoWhereInput
    data: XOR<BasicInfoUpdateWithoutUserInput, BasicInfoUncheckedUpdateWithoutUserInput>
  }

  export type BasicInfoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    socials?: SocialUpdateOneWithoutBasicInfoNestedInput
  }

  export type BasicInfoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    purchaseId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    orderId?: StringFilter<"Payment"> | string
    paymentId?: StringFilter<"Payment"> | string
    paymentMethod?: StringNullableFilter<"Payment"> | string | null
    transactionId?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type UserCreateWithoutProblemsInput = {
    id?: string
    fullname?: string | null
    email: string
    username?: string | null
    password?: string | null
    profileImage?: string
    role?: $Enums.UserRole
    isGoogleAuth?: boolean
    isEmailVerified?: boolean
    isActive?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    solvedProblems?: SolvedProblemCreateNestedManyWithoutUserInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    purchases?: PurchaseCreateNestedManyWithoutUserInput
    sheetAssignments?: SheetProblemCreateNestedManyWithoutUserInput
    basicInfo?: BasicInfoCreateNestedOneWithoutUserInput
    payment?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProblemsInput = {
    id?: string
    fullname?: string | null
    email: string
    username?: string | null
    password?: string | null
    profileImage?: string
    role?: $Enums.UserRole
    isGoogleAuth?: boolean
    isEmailVerified?: boolean
    isActive?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    basicInfoId?: string | null
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    solvedProblems?: SolvedProblemUncheckedCreateNestedManyWithoutUserInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    sheetAssignments?: SheetProblemUncheckedCreateNestedManyWithoutUserInput
    payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProblemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
  }

  export type SubmissionCreateWithoutProblemInput = {
    id?: string
    source_code: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
    testCases?: TestcaseCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutProblemInput = {
    id?: string
    source_code: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    testCases?: TestcaseUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutProblemInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput>
  }

  export type SubmissionCreateManyProblemInputEnvelope = {
    data: SubmissionCreateManyProblemInput | SubmissionCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type SheetProblemCreateWithoutProblemInput = {
    id?: string
    orderIndex?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sheet: SheetCreateNestedOneWithoutSheetAssignmentsInput
    User?: UserCreateNestedOneWithoutSheetAssignmentsInput
  }

  export type SheetProblemUncheckedCreateWithoutProblemInput = {
    id?: string
    sheetId: string
    orderIndex?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type SheetProblemCreateOrConnectWithoutProblemInput = {
    where: SheetProblemWhereUniqueInput
    create: XOR<SheetProblemCreateWithoutProblemInput, SheetProblemUncheckedCreateWithoutProblemInput>
  }

  export type SheetProblemCreateManyProblemInputEnvelope = {
    data: SheetProblemCreateManyProblemInput | SheetProblemCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type SolvedProblemCreateWithoutProblemInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutSolvedProblemsInput
  }

  export type SolvedProblemUncheckedCreateWithoutProblemInput = {
    id?: string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolvedProblemCreateOrConnectWithoutProblemInput = {
    where: SolvedProblemWhereUniqueInput
    create: XOR<SolvedProblemCreateWithoutProblemInput, SolvedProblemUncheckedCreateWithoutProblemInput>
  }

  export type SolvedProblemCreateManyProblemInputEnvelope = {
    data: SolvedProblemCreateManyProblemInput | SolvedProblemCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type ProblemInPlaylistCreateWithoutProblemInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlist: PlaylistCreateNestedOneWithoutProblemsInput
  }

  export type ProblemInPlaylistUncheckedCreateWithoutProblemInput = {
    id?: string
    playlistId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemInPlaylistCreateOrConnectWithoutProblemInput = {
    where: ProblemInPlaylistWhereUniqueInput
    create: XOR<ProblemInPlaylistCreateWithoutProblemInput, ProblemInPlaylistUncheckedCreateWithoutProblemInput>
  }

  export type ProblemInPlaylistCreateManyProblemInputEnvelope = {
    data: ProblemInPlaylistCreateManyProblemInput | ProblemInPlaylistCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProblemsInput = {
    update: XOR<UserUpdateWithoutProblemsInput, UserUncheckedUpdateWithoutProblemsInput>
    create: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProblemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProblemsInput, UserUncheckedUpdateWithoutProblemsInput>
  }

  export type UserUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isGoogleAuth?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    solvedProblems?: SolvedProblemUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
    sheetAssignments?: SheetProblemUpdateManyWithoutUserNestedInput
    basicInfo?: BasicInfoUpdateOneWithoutUserNestedInput
    payment?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isGoogleAuth?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    basicInfoId?: NullableStringFieldUpdateOperationsInput | string | null
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    solvedProblems?: SolvedProblemUncheckedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    sheetAssignments?: SheetProblemUncheckedUpdateManyWithoutUserNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubmissionUpsertWithWhereUniqueWithoutProblemInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutProblemInput, SubmissionUncheckedUpdateWithoutProblemInput>
    create: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutProblemInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutProblemInput, SubmissionUncheckedUpdateWithoutProblemInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutProblemInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutProblemInput>
  }

  export type SheetProblemUpsertWithWhereUniqueWithoutProblemInput = {
    where: SheetProblemWhereUniqueInput
    update: XOR<SheetProblemUpdateWithoutProblemInput, SheetProblemUncheckedUpdateWithoutProblemInput>
    create: XOR<SheetProblemCreateWithoutProblemInput, SheetProblemUncheckedCreateWithoutProblemInput>
  }

  export type SheetProblemUpdateWithWhereUniqueWithoutProblemInput = {
    where: SheetProblemWhereUniqueInput
    data: XOR<SheetProblemUpdateWithoutProblemInput, SheetProblemUncheckedUpdateWithoutProblemInput>
  }

  export type SheetProblemUpdateManyWithWhereWithoutProblemInput = {
    where: SheetProblemScalarWhereInput
    data: XOR<SheetProblemUpdateManyMutationInput, SheetProblemUncheckedUpdateManyWithoutProblemInput>
  }

  export type SolvedProblemUpsertWithWhereUniqueWithoutProblemInput = {
    where: SolvedProblemWhereUniqueInput
    update: XOR<SolvedProblemUpdateWithoutProblemInput, SolvedProblemUncheckedUpdateWithoutProblemInput>
    create: XOR<SolvedProblemCreateWithoutProblemInput, SolvedProblemUncheckedCreateWithoutProblemInput>
  }

  export type SolvedProblemUpdateWithWhereUniqueWithoutProblemInput = {
    where: SolvedProblemWhereUniqueInput
    data: XOR<SolvedProblemUpdateWithoutProblemInput, SolvedProblemUncheckedUpdateWithoutProblemInput>
  }

  export type SolvedProblemUpdateManyWithWhereWithoutProblemInput = {
    where: SolvedProblemScalarWhereInput
    data: XOR<SolvedProblemUpdateManyMutationInput, SolvedProblemUncheckedUpdateManyWithoutProblemInput>
  }

  export type ProblemInPlaylistUpsertWithWhereUniqueWithoutProblemInput = {
    where: ProblemInPlaylistWhereUniqueInput
    update: XOR<ProblemInPlaylistUpdateWithoutProblemInput, ProblemInPlaylistUncheckedUpdateWithoutProblemInput>
    create: XOR<ProblemInPlaylistCreateWithoutProblemInput, ProblemInPlaylistUncheckedCreateWithoutProblemInput>
  }

  export type ProblemInPlaylistUpdateWithWhereUniqueWithoutProblemInput = {
    where: ProblemInPlaylistWhereUniqueInput
    data: XOR<ProblemInPlaylistUpdateWithoutProblemInput, ProblemInPlaylistUncheckedUpdateWithoutProblemInput>
  }

  export type ProblemInPlaylistUpdateManyWithWhereWithoutProblemInput = {
    where: ProblemInPlaylistScalarWhereInput
    data: XOR<ProblemInPlaylistUpdateManyMutationInput, ProblemInPlaylistUncheckedUpdateManyWithoutProblemInput>
  }

  export type ProblemInPlaylistScalarWhereInput = {
    AND?: ProblemInPlaylistScalarWhereInput | ProblemInPlaylistScalarWhereInput[]
    OR?: ProblemInPlaylistScalarWhereInput[]
    NOT?: ProblemInPlaylistScalarWhereInput | ProblemInPlaylistScalarWhereInput[]
    id?: StringFilter<"ProblemInPlaylist"> | string
    playlistId?: StringFilter<"ProblemInPlaylist"> | string
    problemId?: StringFilter<"ProblemInPlaylist"> | string
    createdAt?: DateTimeFilter<"ProblemInPlaylist"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemInPlaylist"> | Date | string
  }

  export type UserCreateWithoutSubmissionsInput = {
    id?: string
    fullname?: string | null
    email: string
    username?: string | null
    password?: string | null
    profileImage?: string
    role?: $Enums.UserRole
    isGoogleAuth?: boolean
    isEmailVerified?: boolean
    isActive?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    solvedProblems?: SolvedProblemCreateNestedManyWithoutUserInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    purchases?: PurchaseCreateNestedManyWithoutUserInput
    sheetAssignments?: SheetProblemCreateNestedManyWithoutUserInput
    basicInfo?: BasicInfoCreateNestedOneWithoutUserInput
    payment?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    fullname?: string | null
    email: string
    username?: string | null
    password?: string | null
    profileImage?: string
    role?: $Enums.UserRole
    isGoogleAuth?: boolean
    isEmailVerified?: boolean
    isActive?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    basicInfoId?: string | null
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    solvedProblems?: SolvedProblemUncheckedCreateNestedManyWithoutUserInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    sheetAssignments?: SheetProblemUncheckedCreateNestedManyWithoutUserInput
    payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
  }

  export type ProblemCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    description: string
    difficulty?: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: string | null
    isDemo?: boolean
    isPremium?: boolean
    company?: ProblemCreatecompanyInput | string[]
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemsInput
    sheetAssignments?: SheetProblemCreateNestedManyWithoutProblemInput
    solvedBy?: SolvedProblemCreateNestedManyWithoutProblemInput
    problemInPlaylist?: ProblemInPlaylistCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    description: string
    difficulty?: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: string | null
    isDemo?: boolean
    isPremium?: boolean
    company?: ProblemCreatecompanyInput | string[]
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    sheetAssignments?: SheetProblemUncheckedCreateNestedManyWithoutProblemInput
    solvedBy?: SolvedProblemUncheckedCreateNestedManyWithoutProblemInput
    problemInPlaylist?: ProblemInPlaylistUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutSubmissionsInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutSubmissionsInput, ProblemUncheckedCreateWithoutSubmissionsInput>
  }

  export type TestcaseCreateWithoutSubmissionInput = {
    id?: string
    testCase: number
    passed: boolean
    stdout?: string | null
    stderr?: string | null
    expected: string
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestcaseUncheckedCreateWithoutSubmissionInput = {
    id?: string
    testCase: number
    passed: boolean
    stdout?: string | null
    stderr?: string | null
    expected: string
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestcaseCreateOrConnectWithoutSubmissionInput = {
    where: TestcaseWhereUniqueInput
    create: XOR<TestcaseCreateWithoutSubmissionInput, TestcaseUncheckedCreateWithoutSubmissionInput>
  }

  export type TestcaseCreateManySubmissionInputEnvelope = {
    data: TestcaseCreateManySubmissionInput | TestcaseCreateManySubmissionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSubmissionsInput = {
    update: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isGoogleAuth?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    solvedProblems?: SolvedProblemUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
    sheetAssignments?: SheetProblemUpdateManyWithoutUserNestedInput
    basicInfo?: BasicInfoUpdateOneWithoutUserNestedInput
    payment?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isGoogleAuth?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    basicInfoId?: NullableStringFieldUpdateOperationsInput | string | null
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    solvedProblems?: SolvedProblemUncheckedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    sheetAssignments?: SheetProblemUncheckedUpdateManyWithoutUserNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProblemUpsertWithoutSubmissionsInput = {
    update: XOR<ProblemUpdateWithoutSubmissionsInput, ProblemUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<ProblemCreateWithoutSubmissionsInput, ProblemUncheckedCreateWithoutSubmissionsInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutSubmissionsInput, ProblemUncheckedUpdateWithoutSubmissionsInput>
  }

  export type ProblemUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    company?: ProblemUpdatecompanyInput | string[]
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    sheetAssignments?: SheetProblemUpdateManyWithoutProblemNestedInput
    solvedBy?: SolvedProblemUpdateManyWithoutProblemNestedInput
    problemInPlaylist?: ProblemInPlaylistUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    company?: ProblemUpdatecompanyInput | string[]
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sheetAssignments?: SheetProblemUncheckedUpdateManyWithoutProblemNestedInput
    solvedBy?: SolvedProblemUncheckedUpdateManyWithoutProblemNestedInput
    problemInPlaylist?: ProblemInPlaylistUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type TestcaseUpsertWithWhereUniqueWithoutSubmissionInput = {
    where: TestcaseWhereUniqueInput
    update: XOR<TestcaseUpdateWithoutSubmissionInput, TestcaseUncheckedUpdateWithoutSubmissionInput>
    create: XOR<TestcaseCreateWithoutSubmissionInput, TestcaseUncheckedCreateWithoutSubmissionInput>
  }

  export type TestcaseUpdateWithWhereUniqueWithoutSubmissionInput = {
    where: TestcaseWhereUniqueInput
    data: XOR<TestcaseUpdateWithoutSubmissionInput, TestcaseUncheckedUpdateWithoutSubmissionInput>
  }

  export type TestcaseUpdateManyWithWhereWithoutSubmissionInput = {
    where: TestcaseScalarWhereInput
    data: XOR<TestcaseUpdateManyMutationInput, TestcaseUncheckedUpdateManyWithoutSubmissionInput>
  }

  export type TestcaseScalarWhereInput = {
    AND?: TestcaseScalarWhereInput | TestcaseScalarWhereInput[]
    OR?: TestcaseScalarWhereInput[]
    NOT?: TestcaseScalarWhereInput | TestcaseScalarWhereInput[]
    id?: StringFilter<"Testcase"> | string
    testCase?: IntFilter<"Testcase"> | number
    passed?: BoolFilter<"Testcase"> | boolean
    stdout?: StringNullableFilter<"Testcase"> | string | null
    stderr?: StringNullableFilter<"Testcase"> | string | null
    expected?: StringFilter<"Testcase"> | string
    compileOutput?: StringNullableFilter<"Testcase"> | string | null
    status?: StringFilter<"Testcase"> | string
    memory?: StringNullableFilter<"Testcase"> | string | null
    time?: StringNullableFilter<"Testcase"> | string | null
    createdAt?: DateTimeFilter<"Testcase"> | Date | string
    updatedAt?: DateTimeFilter<"Testcase"> | Date | string
    submissionId?: StringNullableFilter<"Testcase"> | string | null
  }

  export type SubmissionCreateWithoutTestCasesInput = {
    id?: string
    source_code: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
    problem?: ProblemCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutTestCasesInput = {
    id?: string
    source_code: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    problemId?: string | null
  }

  export type SubmissionCreateOrConnectWithoutTestCasesInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutTestCasesInput, SubmissionUncheckedCreateWithoutTestCasesInput>
  }

  export type SubmissionUpsertWithoutTestCasesInput = {
    update: XOR<SubmissionUpdateWithoutTestCasesInput, SubmissionUncheckedUpdateWithoutTestCasesInput>
    create: XOR<SubmissionCreateWithoutTestCasesInput, SubmissionUncheckedCreateWithoutTestCasesInput>
    where?: SubmissionWhereInput
  }

  export type SubmissionUpdateToOneWithWhereWithoutTestCasesInput = {
    where?: SubmissionWhereInput
    data: XOR<SubmissionUpdateWithoutTestCasesInput, SubmissionUncheckedUpdateWithoutTestCasesInput>
  }

  export type SubmissionUpdateWithoutTestCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    source_code?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    problem?: ProblemUpdateOneWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutTestCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    source_code?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutSolvedProblemsInput = {
    id?: string
    fullname?: string | null
    email: string
    username?: string | null
    password?: string | null
    profileImage?: string
    role?: $Enums.UserRole
    isGoogleAuth?: boolean
    isEmailVerified?: boolean
    isActive?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    purchases?: PurchaseCreateNestedManyWithoutUserInput
    sheetAssignments?: SheetProblemCreateNestedManyWithoutUserInput
    basicInfo?: BasicInfoCreateNestedOneWithoutUserInput
    payment?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSolvedProblemsInput = {
    id?: string
    fullname?: string | null
    email: string
    username?: string | null
    password?: string | null
    profileImage?: string
    role?: $Enums.UserRole
    isGoogleAuth?: boolean
    isEmailVerified?: boolean
    isActive?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    basicInfoId?: string | null
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    sheetAssignments?: SheetProblemUncheckedCreateNestedManyWithoutUserInput
    payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSolvedProblemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSolvedProblemsInput, UserUncheckedCreateWithoutSolvedProblemsInput>
  }

  export type ProblemCreateWithoutSolvedByInput = {
    id?: string
    title: string
    description: string
    difficulty?: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: string | null
    isDemo?: boolean
    isPremium?: boolean
    company?: ProblemCreatecompanyInput | string[]
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemsInput
    submissions?: SubmissionCreateNestedManyWithoutProblemInput
    sheetAssignments?: SheetProblemCreateNestedManyWithoutProblemInput
    problemInPlaylist?: ProblemInPlaylistCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutSolvedByInput = {
    id?: string
    title: string
    description: string
    difficulty?: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: string | null
    isDemo?: boolean
    isPremium?: boolean
    company?: ProblemCreatecompanyInput | string[]
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    sheetAssignments?: SheetProblemUncheckedCreateNestedManyWithoutProblemInput
    problemInPlaylist?: ProblemInPlaylistUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutSolvedByInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutSolvedByInput, ProblemUncheckedCreateWithoutSolvedByInput>
  }

  export type UserUpsertWithoutSolvedProblemsInput = {
    update: XOR<UserUpdateWithoutSolvedProblemsInput, UserUncheckedUpdateWithoutSolvedProblemsInput>
    create: XOR<UserCreateWithoutSolvedProblemsInput, UserUncheckedCreateWithoutSolvedProblemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSolvedProblemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSolvedProblemsInput, UserUncheckedUpdateWithoutSolvedProblemsInput>
  }

  export type UserUpdateWithoutSolvedProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isGoogleAuth?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
    sheetAssignments?: SheetProblemUpdateManyWithoutUserNestedInput
    basicInfo?: BasicInfoUpdateOneWithoutUserNestedInput
    payment?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSolvedProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isGoogleAuth?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    basicInfoId?: NullableStringFieldUpdateOperationsInput | string | null
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    sheetAssignments?: SheetProblemUncheckedUpdateManyWithoutUserNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProblemUpsertWithoutSolvedByInput = {
    update: XOR<ProblemUpdateWithoutSolvedByInput, ProblemUncheckedUpdateWithoutSolvedByInput>
    create: XOR<ProblemCreateWithoutSolvedByInput, ProblemUncheckedCreateWithoutSolvedByInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutSolvedByInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutSolvedByInput, ProblemUncheckedUpdateWithoutSolvedByInput>
  }

  export type ProblemUpdateWithoutSolvedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    company?: ProblemUpdatecompanyInput | string[]
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    submissions?: SubmissionUpdateManyWithoutProblemNestedInput
    sheetAssignments?: SheetProblemUpdateManyWithoutProblemNestedInput
    problemInPlaylist?: ProblemInPlaylistUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutSolvedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    company?: ProblemUpdatecompanyInput | string[]
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    sheetAssignments?: SheetProblemUncheckedUpdateManyWithoutProblemNestedInput
    problemInPlaylist?: ProblemInPlaylistUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemInPlaylistCreateWithoutPlaylistInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutProblemInPlaylistInput
  }

  export type ProblemInPlaylistUncheckedCreateWithoutPlaylistInput = {
    id?: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemInPlaylistCreateOrConnectWithoutPlaylistInput = {
    where: ProblemInPlaylistWhereUniqueInput
    create: XOR<ProblemInPlaylistCreateWithoutPlaylistInput, ProblemInPlaylistUncheckedCreateWithoutPlaylistInput>
  }

  export type ProblemInPlaylistCreateManyPlaylistInputEnvelope = {
    data: ProblemInPlaylistCreateManyPlaylistInput | ProblemInPlaylistCreateManyPlaylistInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPlaylistsInput = {
    id?: string
    fullname?: string | null
    email: string
    username?: string | null
    password?: string | null
    profileImage?: string
    role?: $Enums.UserRole
    isGoogleAuth?: boolean
    isEmailVerified?: boolean
    isActive?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    solvedProblems?: SolvedProblemCreateNestedManyWithoutUserInput
    purchases?: PurchaseCreateNestedManyWithoutUserInput
    sheetAssignments?: SheetProblemCreateNestedManyWithoutUserInput
    basicInfo?: BasicInfoCreateNestedOneWithoutUserInput
    payment?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlaylistsInput = {
    id?: string
    fullname?: string | null
    email: string
    username?: string | null
    password?: string | null
    profileImage?: string
    role?: $Enums.UserRole
    isGoogleAuth?: boolean
    isEmailVerified?: boolean
    isActive?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    basicInfoId?: string | null
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    solvedProblems?: SolvedProblemUncheckedCreateNestedManyWithoutUserInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    sheetAssignments?: SheetProblemUncheckedCreateNestedManyWithoutUserInput
    payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlaylistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
  }

  export type ProblemInPlaylistUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: ProblemInPlaylistWhereUniqueInput
    update: XOR<ProblemInPlaylistUpdateWithoutPlaylistInput, ProblemInPlaylistUncheckedUpdateWithoutPlaylistInput>
    create: XOR<ProblemInPlaylistCreateWithoutPlaylistInput, ProblemInPlaylistUncheckedCreateWithoutPlaylistInput>
  }

  export type ProblemInPlaylistUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: ProblemInPlaylistWhereUniqueInput
    data: XOR<ProblemInPlaylistUpdateWithoutPlaylistInput, ProblemInPlaylistUncheckedUpdateWithoutPlaylistInput>
  }

  export type ProblemInPlaylistUpdateManyWithWhereWithoutPlaylistInput = {
    where: ProblemInPlaylistScalarWhereInput
    data: XOR<ProblemInPlaylistUpdateManyMutationInput, ProblemInPlaylistUncheckedUpdateManyWithoutPlaylistInput>
  }

  export type UserUpsertWithoutPlaylistsInput = {
    update: XOR<UserUpdateWithoutPlaylistsInput, UserUncheckedUpdateWithoutPlaylistsInput>
    create: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlaylistsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlaylistsInput, UserUncheckedUpdateWithoutPlaylistsInput>
  }

  export type UserUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isGoogleAuth?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    solvedProblems?: SolvedProblemUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
    sheetAssignments?: SheetProblemUpdateManyWithoutUserNestedInput
    basicInfo?: BasicInfoUpdateOneWithoutUserNestedInput
    payment?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isGoogleAuth?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    basicInfoId?: NullableStringFieldUpdateOperationsInput | string | null
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    solvedProblems?: SolvedProblemUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    sheetAssignments?: SheetProblemUncheckedUpdateManyWithoutUserNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlaylistCreateWithoutProblemsInput = {
    id?: string
    name: string
    description?: string | null
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPlaylistsInput
  }

  export type PlaylistUncheckedCreateWithoutProblemsInput = {
    id?: string
    name: string
    description?: string | null
    isPrivate?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistCreateOrConnectWithoutProblemsInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutProblemsInput, PlaylistUncheckedCreateWithoutProblemsInput>
  }

  export type ProblemCreateWithoutProblemInPlaylistInput = {
    id?: string
    title: string
    description: string
    difficulty?: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: string | null
    isDemo?: boolean
    isPremium?: boolean
    company?: ProblemCreatecompanyInput | string[]
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemsInput
    submissions?: SubmissionCreateNestedManyWithoutProblemInput
    sheetAssignments?: SheetProblemCreateNestedManyWithoutProblemInput
    solvedBy?: SolvedProblemCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutProblemInPlaylistInput = {
    id?: string
    title: string
    description: string
    difficulty?: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: string | null
    isDemo?: boolean
    isPremium?: boolean
    company?: ProblemCreatecompanyInput | string[]
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    sheetAssignments?: SheetProblemUncheckedCreateNestedManyWithoutProblemInput
    solvedBy?: SolvedProblemUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutProblemInPlaylistInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutProblemInPlaylistInput, ProblemUncheckedCreateWithoutProblemInPlaylistInput>
  }

  export type PlaylistUpsertWithoutProblemsInput = {
    update: XOR<PlaylistUpdateWithoutProblemsInput, PlaylistUncheckedUpdateWithoutProblemsInput>
    create: XOR<PlaylistCreateWithoutProblemsInput, PlaylistUncheckedCreateWithoutProblemsInput>
    where?: PlaylistWhereInput
  }

  export type PlaylistUpdateToOneWithWhereWithoutProblemsInput = {
    where?: PlaylistWhereInput
    data: XOR<PlaylistUpdateWithoutProblemsInput, PlaylistUncheckedUpdateWithoutProblemsInput>
  }

  export type PlaylistUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemUpsertWithoutProblemInPlaylistInput = {
    update: XOR<ProblemUpdateWithoutProblemInPlaylistInput, ProblemUncheckedUpdateWithoutProblemInPlaylistInput>
    create: XOR<ProblemCreateWithoutProblemInPlaylistInput, ProblemUncheckedCreateWithoutProblemInPlaylistInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutProblemInPlaylistInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutProblemInPlaylistInput, ProblemUncheckedUpdateWithoutProblemInPlaylistInput>
  }

  export type ProblemUpdateWithoutProblemInPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    company?: ProblemUpdatecompanyInput | string[]
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    submissions?: SubmissionUpdateManyWithoutProblemNestedInput
    sheetAssignments?: SheetProblemUpdateManyWithoutProblemNestedInput
    solvedBy?: SolvedProblemUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutProblemInPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    company?: ProblemUpdatecompanyInput | string[]
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    sheetAssignments?: SheetProblemUncheckedUpdateManyWithoutProblemNestedInput
    solvedBy?: SolvedProblemUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type PurchaseCreateWithoutSheetInput = {
    id?: string
    boughtAt?: Date | string
    user: UserCreateNestedOneWithoutPurchasesInput
    payment?: PaymentCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutSheetInput = {
    id?: string
    userId: string
    boughtAt?: Date | string
    payment?: PaymentUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseCreateOrConnectWithoutSheetInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutSheetInput, PurchaseUncheckedCreateWithoutSheetInput>
  }

  export type PurchaseCreateManySheetInputEnvelope = {
    data: PurchaseCreateManySheetInput | PurchaseCreateManySheetInput[]
    skipDuplicates?: boolean
  }

  export type SheetProblemCreateWithoutSheetInput = {
    id?: string
    orderIndex?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutSheetAssignmentsInput
    User?: UserCreateNestedOneWithoutSheetAssignmentsInput
  }

  export type SheetProblemUncheckedCreateWithoutSheetInput = {
    id?: string
    problemId: string
    orderIndex?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type SheetProblemCreateOrConnectWithoutSheetInput = {
    where: SheetProblemWhereUniqueInput
    create: XOR<SheetProblemCreateWithoutSheetInput, SheetProblemUncheckedCreateWithoutSheetInput>
  }

  export type SheetProblemCreateManySheetInputEnvelope = {
    data: SheetProblemCreateManySheetInput | SheetProblemCreateManySheetInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseUpsertWithWhereUniqueWithoutSheetInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutSheetInput, PurchaseUncheckedUpdateWithoutSheetInput>
    create: XOR<PurchaseCreateWithoutSheetInput, PurchaseUncheckedCreateWithoutSheetInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutSheetInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutSheetInput, PurchaseUncheckedUpdateWithoutSheetInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutSheetInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutSheetInput>
  }

  export type SheetProblemUpsertWithWhereUniqueWithoutSheetInput = {
    where: SheetProblemWhereUniqueInput
    update: XOR<SheetProblemUpdateWithoutSheetInput, SheetProblemUncheckedUpdateWithoutSheetInput>
    create: XOR<SheetProblemCreateWithoutSheetInput, SheetProblemUncheckedCreateWithoutSheetInput>
  }

  export type SheetProblemUpdateWithWhereUniqueWithoutSheetInput = {
    where: SheetProblemWhereUniqueInput
    data: XOR<SheetProblemUpdateWithoutSheetInput, SheetProblemUncheckedUpdateWithoutSheetInput>
  }

  export type SheetProblemUpdateManyWithWhereWithoutSheetInput = {
    where: SheetProblemScalarWhereInput
    data: XOR<SheetProblemUpdateManyMutationInput, SheetProblemUncheckedUpdateManyWithoutSheetInput>
  }

  export type SheetCreateWithoutSheetAssignmentsInput = {
    id?: string
    title: string
    description?: string | null
    languages?: SheetCreatelanguagesInput | string[]
    tags?: SheetCreatetagsInput | string[]
    price: number
    isPremium?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: PurchaseCreateNestedManyWithoutSheetInput
  }

  export type SheetUncheckedCreateWithoutSheetAssignmentsInput = {
    id?: string
    title: string
    description?: string | null
    languages?: SheetCreatelanguagesInput | string[]
    tags?: SheetCreatetagsInput | string[]
    price: number
    isPremium?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: PurchaseUncheckedCreateNestedManyWithoutSheetInput
  }

  export type SheetCreateOrConnectWithoutSheetAssignmentsInput = {
    where: SheetWhereUniqueInput
    create: XOR<SheetCreateWithoutSheetAssignmentsInput, SheetUncheckedCreateWithoutSheetAssignmentsInput>
  }

  export type ProblemCreateWithoutSheetAssignmentsInput = {
    id?: string
    title: string
    description: string
    difficulty?: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: string | null
    isDemo?: boolean
    isPremium?: boolean
    company?: ProblemCreatecompanyInput | string[]
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemsInput
    submissions?: SubmissionCreateNestedManyWithoutProblemInput
    solvedBy?: SolvedProblemCreateNestedManyWithoutProblemInput
    problemInPlaylist?: ProblemInPlaylistCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutSheetAssignmentsInput = {
    id?: string
    title: string
    description: string
    difficulty?: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: string | null
    isDemo?: boolean
    isPremium?: boolean
    company?: ProblemCreatecompanyInput | string[]
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    solvedBy?: SolvedProblemUncheckedCreateNestedManyWithoutProblemInput
    problemInPlaylist?: ProblemInPlaylistUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutSheetAssignmentsInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutSheetAssignmentsInput, ProblemUncheckedCreateWithoutSheetAssignmentsInput>
  }

  export type UserCreateWithoutSheetAssignmentsInput = {
    id?: string
    fullname?: string | null
    email: string
    username?: string | null
    password?: string | null
    profileImage?: string
    role?: $Enums.UserRole
    isGoogleAuth?: boolean
    isEmailVerified?: boolean
    isActive?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    solvedProblems?: SolvedProblemCreateNestedManyWithoutUserInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    purchases?: PurchaseCreateNestedManyWithoutUserInput
    basicInfo?: BasicInfoCreateNestedOneWithoutUserInput
    payment?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSheetAssignmentsInput = {
    id?: string
    fullname?: string | null
    email: string
    username?: string | null
    password?: string | null
    profileImage?: string
    role?: $Enums.UserRole
    isGoogleAuth?: boolean
    isEmailVerified?: boolean
    isActive?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    basicInfoId?: string | null
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    solvedProblems?: SolvedProblemUncheckedCreateNestedManyWithoutUserInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSheetAssignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSheetAssignmentsInput, UserUncheckedCreateWithoutSheetAssignmentsInput>
  }

  export type SheetUpsertWithoutSheetAssignmentsInput = {
    update: XOR<SheetUpdateWithoutSheetAssignmentsInput, SheetUncheckedUpdateWithoutSheetAssignmentsInput>
    create: XOR<SheetCreateWithoutSheetAssignmentsInput, SheetUncheckedCreateWithoutSheetAssignmentsInput>
    where?: SheetWhereInput
  }

  export type SheetUpdateToOneWithWhereWithoutSheetAssignmentsInput = {
    where?: SheetWhereInput
    data: XOR<SheetUpdateWithoutSheetAssignmentsInput, SheetUncheckedUpdateWithoutSheetAssignmentsInput>
  }

  export type SheetUpdateWithoutSheetAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: SheetUpdatelanguagesInput | string[]
    tags?: SheetUpdatetagsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUpdateManyWithoutSheetNestedInput
  }

  export type SheetUncheckedUpdateWithoutSheetAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: SheetUpdatelanguagesInput | string[]
    tags?: SheetUpdatetagsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type ProblemUpsertWithoutSheetAssignmentsInput = {
    update: XOR<ProblemUpdateWithoutSheetAssignmentsInput, ProblemUncheckedUpdateWithoutSheetAssignmentsInput>
    create: XOR<ProblemCreateWithoutSheetAssignmentsInput, ProblemUncheckedCreateWithoutSheetAssignmentsInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutSheetAssignmentsInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutSheetAssignmentsInput, ProblemUncheckedUpdateWithoutSheetAssignmentsInput>
  }

  export type ProblemUpdateWithoutSheetAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    company?: ProblemUpdatecompanyInput | string[]
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    submissions?: SubmissionUpdateManyWithoutProblemNestedInput
    solvedBy?: SolvedProblemUpdateManyWithoutProblemNestedInput
    problemInPlaylist?: ProblemInPlaylistUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutSheetAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    company?: ProblemUpdatecompanyInput | string[]
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    solvedBy?: SolvedProblemUncheckedUpdateManyWithoutProblemNestedInput
    problemInPlaylist?: ProblemInPlaylistUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type UserUpsertWithoutSheetAssignmentsInput = {
    update: XOR<UserUpdateWithoutSheetAssignmentsInput, UserUncheckedUpdateWithoutSheetAssignmentsInput>
    create: XOR<UserCreateWithoutSheetAssignmentsInput, UserUncheckedCreateWithoutSheetAssignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSheetAssignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSheetAssignmentsInput, UserUncheckedUpdateWithoutSheetAssignmentsInput>
  }

  export type UserUpdateWithoutSheetAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isGoogleAuth?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    solvedProblems?: SolvedProblemUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
    basicInfo?: BasicInfoUpdateOneWithoutUserNestedInput
    payment?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSheetAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isGoogleAuth?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    basicInfoId?: NullableStringFieldUpdateOperationsInput | string | null
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    solvedProblems?: SolvedProblemUncheckedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPurchasesInput = {
    id?: string
    fullname?: string | null
    email: string
    username?: string | null
    password?: string | null
    profileImage?: string
    role?: $Enums.UserRole
    isGoogleAuth?: boolean
    isEmailVerified?: boolean
    isActive?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    solvedProblems?: SolvedProblemCreateNestedManyWithoutUserInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    sheetAssignments?: SheetProblemCreateNestedManyWithoutUserInput
    basicInfo?: BasicInfoCreateNestedOneWithoutUserInput
    payment?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPurchasesInput = {
    id?: string
    fullname?: string | null
    email: string
    username?: string | null
    password?: string | null
    profileImage?: string
    role?: $Enums.UserRole
    isGoogleAuth?: boolean
    isEmailVerified?: boolean
    isActive?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    basicInfoId?: string | null
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    solvedProblems?: SolvedProblemUncheckedCreateNestedManyWithoutUserInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    sheetAssignments?: SheetProblemUncheckedCreateNestedManyWithoutUserInput
    payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPurchasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
  }

  export type SheetCreateWithoutPurchasesInput = {
    id?: string
    title: string
    description?: string | null
    languages?: SheetCreatelanguagesInput | string[]
    tags?: SheetCreatetagsInput | string[]
    price: number
    isPremium?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sheetAssignments?: SheetProblemCreateNestedManyWithoutSheetInput
  }

  export type SheetUncheckedCreateWithoutPurchasesInput = {
    id?: string
    title: string
    description?: string | null
    languages?: SheetCreatelanguagesInput | string[]
    tags?: SheetCreatetagsInput | string[]
    price: number
    isPremium?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sheetAssignments?: SheetProblemUncheckedCreateNestedManyWithoutSheetInput
  }

  export type SheetCreateOrConnectWithoutPurchasesInput = {
    where: SheetWhereUniqueInput
    create: XOR<SheetCreateWithoutPurchasesInput, SheetUncheckedCreateWithoutPurchasesInput>
  }

  export type PaymentCreateWithoutPurchaseInput = {
    id?: string
    amount: number
    currency: string
    status: string
    orderId: string
    paymentId: string
    paymentMethod?: string | null
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutPurchaseInput = {
    id?: string
    userId: string
    amount: number
    currency: string
    status: string
    orderId: string
    paymentId: string
    paymentMethod?: string | null
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutPurchaseInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutPurchaseInput, PaymentUncheckedCreateWithoutPurchaseInput>
  }

  export type PaymentCreateManyPurchaseInputEnvelope = {
    data: PaymentCreateManyPurchaseInput | PaymentCreateManyPurchaseInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPurchasesInput = {
    update: XOR<UserUpdateWithoutPurchasesInput, UserUncheckedUpdateWithoutPurchasesInput>
    create: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPurchasesInput, UserUncheckedUpdateWithoutPurchasesInput>
  }

  export type UserUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isGoogleAuth?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    solvedProblems?: SolvedProblemUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    sheetAssignments?: SheetProblemUpdateManyWithoutUserNestedInput
    basicInfo?: BasicInfoUpdateOneWithoutUserNestedInput
    payment?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isGoogleAuth?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    basicInfoId?: NullableStringFieldUpdateOperationsInput | string | null
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    solvedProblems?: SolvedProblemUncheckedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    sheetAssignments?: SheetProblemUncheckedUpdateManyWithoutUserNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SheetUpsertWithoutPurchasesInput = {
    update: XOR<SheetUpdateWithoutPurchasesInput, SheetUncheckedUpdateWithoutPurchasesInput>
    create: XOR<SheetCreateWithoutPurchasesInput, SheetUncheckedCreateWithoutPurchasesInput>
    where?: SheetWhereInput
  }

  export type SheetUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: SheetWhereInput
    data: XOR<SheetUpdateWithoutPurchasesInput, SheetUncheckedUpdateWithoutPurchasesInput>
  }

  export type SheetUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: SheetUpdatelanguagesInput | string[]
    tags?: SheetUpdatetagsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sheetAssignments?: SheetProblemUpdateManyWithoutSheetNestedInput
  }

  export type SheetUncheckedUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: SheetUpdatelanguagesInput | string[]
    tags?: SheetUpdatetagsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sheetAssignments?: SheetProblemUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutPurchaseInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutPurchaseInput, PaymentUncheckedUpdateWithoutPurchaseInput>
    create: XOR<PaymentCreateWithoutPurchaseInput, PaymentUncheckedCreateWithoutPurchaseInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutPurchaseInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutPurchaseInput, PaymentUncheckedUpdateWithoutPurchaseInput>
  }

  export type PaymentUpdateManyWithWhereWithoutPurchaseInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutPurchaseInput>
  }

  export type UserCreateWithoutPaymentInput = {
    id?: string
    fullname?: string | null
    email: string
    username?: string | null
    password?: string | null
    profileImage?: string
    role?: $Enums.UserRole
    isGoogleAuth?: boolean
    isEmailVerified?: boolean
    isActive?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    solvedProblems?: SolvedProblemCreateNestedManyWithoutUserInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    purchases?: PurchaseCreateNestedManyWithoutUserInput
    sheetAssignments?: SheetProblemCreateNestedManyWithoutUserInput
    basicInfo?: BasicInfoCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentInput = {
    id?: string
    fullname?: string | null
    email: string
    username?: string | null
    password?: string | null
    profileImage?: string
    role?: $Enums.UserRole
    isGoogleAuth?: boolean
    isEmailVerified?: boolean
    isActive?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    basicInfoId?: string | null
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    solvedProblems?: SolvedProblemUncheckedCreateNestedManyWithoutUserInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    sheetAssignments?: SheetProblemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
  }

  export type PurchaseCreateWithoutPaymentInput = {
    id?: string
    boughtAt?: Date | string
    user: UserCreateNestedOneWithoutPurchasesInput
    sheet: SheetCreateNestedOneWithoutPurchasesInput
  }

  export type PurchaseUncheckedCreateWithoutPaymentInput = {
    id?: string
    userId: string
    sheetId: string
    boughtAt?: Date | string
  }

  export type PurchaseCreateOrConnectWithoutPaymentInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutPaymentInput, PurchaseUncheckedCreateWithoutPaymentInput>
  }

  export type UserUpsertWithoutPaymentInput = {
    update: XOR<UserUpdateWithoutPaymentInput, UserUncheckedUpdateWithoutPaymentInput>
    create: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentInput, UserUncheckedUpdateWithoutPaymentInput>
  }

  export type UserUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isGoogleAuth?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    solvedProblems?: SolvedProblemUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
    sheetAssignments?: SheetProblemUpdateManyWithoutUserNestedInput
    basicInfo?: BasicInfoUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isGoogleAuth?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    basicInfoId?: NullableStringFieldUpdateOperationsInput | string | null
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    solvedProblems?: SolvedProblemUncheckedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    sheetAssignments?: SheetProblemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PurchaseUpsertWithoutPaymentInput = {
    update: XOR<PurchaseUpdateWithoutPaymentInput, PurchaseUncheckedUpdateWithoutPaymentInput>
    create: XOR<PurchaseCreateWithoutPaymentInput, PurchaseUncheckedCreateWithoutPaymentInput>
    where?: PurchaseWhereInput
  }

  export type PurchaseUpdateToOneWithWhereWithoutPaymentInput = {
    where?: PurchaseWhereInput
    data: XOR<PurchaseUpdateWithoutPaymentInput, PurchaseUncheckedUpdateWithoutPaymentInput>
  }

  export type PurchaseUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    boughtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPurchasesNestedInput
    sheet?: SheetUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sheetId?: StringFieldUpdateOperationsInput | string
    boughtAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemCreateManyUserInput = {
    id?: string
    title: string
    description: string
    difficulty?: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: string | null
    isDemo?: boolean
    isPremium?: boolean
    company?: ProblemCreatecompanyInput | string[]
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionCreateManyUserInput = {
    id?: string
    source_code: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problemId?: string | null
  }

  export type SolvedProblemCreateManyUserInput = {
    id?: string
    problemId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseCreateManyUserInput = {
    id?: string
    sheetId: string
    boughtAt?: Date | string
  }

  export type SheetProblemCreateManyUserInput = {
    id?: string
    sheetId: string
    problemId: string
    orderIndex?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManyUserInput = {
    id?: string
    purchaseId: string
    amount: number
    currency: string
    status: string
    orderId: string
    paymentId: string
    paymentMethod?: string | null
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    company?: ProblemUpdatecompanyInput | string[]
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUpdateManyWithoutProblemNestedInput
    sheetAssignments?: SheetProblemUpdateManyWithoutProblemNestedInput
    solvedBy?: SolvedProblemUpdateManyWithoutProblemNestedInput
    problemInPlaylist?: ProblemInPlaylistUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    company?: ProblemUpdatecompanyInput | string[]
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    sheetAssignments?: SheetProblemUncheckedUpdateManyWithoutProblemNestedInput
    solvedBy?: SolvedProblemUncheckedUpdateManyWithoutProblemNestedInput
    problemInPlaylist?: ProblemInPlaylistUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    company?: ProblemUpdatecompanyInput | string[]
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    source_code?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneWithoutSubmissionsNestedInput
    testCases?: TestcaseUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    source_code?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problemId?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: TestcaseUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    source_code?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problemId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SolvedProblemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneWithoutSolvedByNestedInput
  }

  export type SolvedProblemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolvedProblemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemInPlaylistUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemInPlaylistUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    boughtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sheet?: SheetUpdateOneRequiredWithoutPurchasesNestedInput
    payment?: PaymentUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheetId?: StringFieldUpdateOperationsInput | string
    boughtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheetId?: StringFieldUpdateOperationsInput | string
    boughtAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SheetProblemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderIndex?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sheet?: SheetUpdateOneRequiredWithoutSheetAssignmentsNestedInput
    problem?: ProblemUpdateOneRequiredWithoutSheetAssignmentsNestedInput
  }

  export type SheetProblemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheetId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    orderIndex?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SheetProblemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheetId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    orderIndex?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchase?: PurchaseUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateManyProblemInput = {
    id?: string
    source_code: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type SheetProblemCreateManyProblemInput = {
    id?: string
    sheetId: string
    orderIndex?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type SolvedProblemCreateManyProblemInput = {
    id?: string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemInPlaylistCreateManyProblemInput = {
    id?: string
    playlistId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    source_code?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    testCases?: TestcaseUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    source_code?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    testCases?: TestcaseUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    source_code?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SheetProblemUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderIndex?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sheet?: SheetUpdateOneRequiredWithoutSheetAssignmentsNestedInput
    User?: UserUpdateOneWithoutSheetAssignmentsNestedInput
  }

  export type SheetProblemUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheetId?: StringFieldUpdateOperationsInput | string
    orderIndex?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SheetProblemUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheetId?: StringFieldUpdateOperationsInput | string
    orderIndex?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SolvedProblemUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSolvedProblemsNestedInput
  }

  export type SolvedProblemUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolvedProblemUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInPlaylistUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneRequiredWithoutProblemsNestedInput
  }

  export type ProblemInPlaylistUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInPlaylistUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestcaseCreateManySubmissionInput = {
    id?: string
    testCase: number
    passed: boolean
    stdout?: string | null
    stderr?: string | null
    expected: string
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestcaseUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    expected?: StringFieldUpdateOperationsInput | string
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestcaseUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    expected?: StringFieldUpdateOperationsInput | string
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestcaseUncheckedUpdateManyWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    expected?: StringFieldUpdateOperationsInput | string
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInPlaylistCreateManyPlaylistInput = {
    id?: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemInPlaylistUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutProblemInPlaylistNestedInput
  }

  export type ProblemInPlaylistUncheckedUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInPlaylistUncheckedUpdateManyWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseCreateManySheetInput = {
    id?: string
    userId: string
    boughtAt?: Date | string
  }

  export type SheetProblemCreateManySheetInput = {
    id?: string
    problemId: string
    orderIndex?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type PurchaseUpdateWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    boughtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPurchasesNestedInput
    payment?: PaymentUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    boughtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateManyWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    boughtAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SheetProblemUpdateWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderIndex?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutSheetAssignmentsNestedInput
    User?: UserUpdateOneWithoutSheetAssignmentsNestedInput
  }

  export type SheetProblemUncheckedUpdateWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    orderIndex?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SheetProblemUncheckedUpdateManyWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    orderIndex?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentCreateManyPurchaseInput = {
    id?: string
    userId: string
    amount: number
    currency: string
    status: string
    orderId: string
    paymentId: string
    paymentMethod?: string | null
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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