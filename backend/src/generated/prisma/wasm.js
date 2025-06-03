
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

exports.Prisma.SocialScalarFieldEnum = {
  id: 'id',
  website: 'website',
  twitter: 'twitter',
  github: 'github',
  linkedIn: 'linkedIn'
};

exports.Prisma.BasicInfoScalarFieldEnum = {
  id: 'id',
  gender: 'gender',
  bio: 'bio',
  birth: 'birth',
  socialId: 'socialId'
};

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.ProblemScalarFieldEnum = {
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

exports.Prisma.SubmissionScalarFieldEnum = {
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

exports.Prisma.TestcaseScalarFieldEnum = {
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

exports.Prisma.SolvedProblemScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  problemId: 'problemId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PlaylistScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  isPrivate: 'isPrivate',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProblemInPlaylistScalarFieldEnum = {
  id: 'id',
  playlistId: 'playlistId',
  problemId: 'problemId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SheetScalarFieldEnum = {
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

exports.Prisma.SheetProblemScalarFieldEnum = {
  id: 'id',
  sheetId: 'sheetId',
  problemId: 'problemId',
  orderIndex: 'orderIndex',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId'
};

exports.Prisma.PurchaseScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  sheetId: 'sheetId',
  boughtAt: 'boughtAt'
};

exports.Prisma.PaymentScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.SocialOrderByRelevanceFieldEnum = {
  id: 'id',
  website: 'website',
  twitter: 'twitter',
  github: 'github',
  linkedIn: 'linkedIn'
};

exports.Prisma.BasicInfoOrderByRelevanceFieldEnum = {
  id: 'id',
  bio: 'bio',
  socialId: 'socialId'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
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

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.ProblemOrderByRelevanceFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  tags: 'tags',
  userId: 'userId',
  constraints: 'constraints',
  editorial: 'editorial',
  company: 'company'
};

exports.Prisma.SubmissionOrderByRelevanceFieldEnum = {
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

exports.Prisma.TestcaseOrderByRelevanceFieldEnum = {
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

exports.Prisma.SolvedProblemOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  problemId: 'problemId'
};

exports.Prisma.PlaylistOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  userId: 'userId'
};

exports.Prisma.ProblemInPlaylistOrderByRelevanceFieldEnum = {
  id: 'id',
  playlistId: 'playlistId',
  problemId: 'problemId'
};

exports.Prisma.SheetOrderByRelevanceFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  languages: 'languages',
  tags: 'tags'
};

exports.Prisma.SheetProblemOrderByRelevanceFieldEnum = {
  id: 'id',
  sheetId: 'sheetId',
  problemId: 'problemId',
  userId: 'userId'
};

exports.Prisma.PurchaseOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  sheetId: 'sheetId'
};

exports.Prisma.PaymentOrderByRelevanceFieldEnum = {
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
exports.Gender = exports.$Enums.Gender = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

exports.UserRole = exports.$Enums.UserRole = {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

exports.Difficulty = exports.$Enums.Difficulty = {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD'
};

exports.Prisma.ModelName = {
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
