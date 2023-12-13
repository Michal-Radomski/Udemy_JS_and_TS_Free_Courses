interface BasicUser<A = boolean> {
  name: string;
  surname: string;
  age: number;
  // isAdmin: boolean;
  isAdmin: A;
}

const basicUser: BasicUser<boolean> = {
  name: "Nick",
  surname: "Ovchinnikov",
  age: 30,
  isAdmin: true,
};
console.log("basicUser:", basicUser);

// type UserPermissions = ["admin" , "user" , "manager"];
type UserPermissions = "admin" | "user" | "manager";

interface UserWithPermissions extends BasicUser<boolean> {
  permissions?: UserPermissions;
}

const userWithPermissions: UserWithPermissions = {
  name: "Nick",
  surname: "Ovchinnikov",
  age: 30,
  isAdmin: true,
  // permissions: ["admin" , "user" , "manager"],
  permissions: "admin",
};
console.log("userWithPermissions:", userWithPermissions);

type MathFunc = (a: number, b: number) => number;
// type MathFunc<T = number> = (a: T, b: T) => T;
const mul: MathFunc = (a, b) => a * b;
const add: MathFunc = (a, b) => a + b;
console.log("mul(4,5):", mul(4, 5));
console.log("add(4,5):", add(4, 5));

//* Generics
const usersArray: BasicUser[] = [basicUser, basicUser, basicUser];
function getFirst<T>(arr: T[]): T {
  return arr[0];
}
console.log("getFirst<BasicUser>(usersArray):", getFirst<BasicUser>(usersArray));

// type UserPermissions = "admin" | "user" | "manager";

// type PermissionsWithoutAdmin = Exclude<UserPermissions, "admin">;

// interface DepartmentsForPermission {
//   depName: string;
//   lvl: number;
// }

// const DepsForPerms: Record<UserPermissions, DepartmentsForPermission> = {
//   admin: {
//     depName: "security",
//     lvl: 10,
//   },
//   user: {
//     depName: "sales",
//     lvl: 5,
//   },
//   manager: {
//     depName: "sales",
//     lvl: 10,
//   },
// };

// type TuplePermissions = [UserPermissions, UserPermissions];

// type BasicUser<A = boolean, P = TuplePermissions> = {
//   name: string;
//   surname: string;
//   age: number;
//   isAdmin: A;
//   permissions?: P;
// };

// type BasicUserWithoutPermissions = Omit<BasicUser, "permissions">;

// type AdvancedUser = {
//   account: number;
// };

// type FullUser<A = boolean, P = string[]> = BasicUser<A, P> & AdvancedUser;

// type BasicUserReadonly = Readonly<BasicUser>;
// type BasicUserRequired = Required<BasicUser>;
// type BasicUserPartial = Partial<BasicUser>;

// type BasicUserReadonlyRequired = Readonly<Required<BasicUser>>;

// const user: FullUser<boolean> = {
//   name: "Nick",
//   surname: "Ovchinnikov",
//   age: 30,
//   isAdmin: true,
//   account: 100,
//   permissions: ["admin", "user"],
// };

// user.name = "Test";

// const usersArray: FullUser[] = [user, user];

// function getFirst<T>(arr: T[]): T {
//   return arr[0];
// }

// type BasicFunction = () => FullUser[];

// type getFirstReturnType = ReturnType<BasicFunction>;

// getFirst<FullUser>(usersArray);

// type MathFunc<T = number> = (a: T, b: T) => T;

// const mul: MathFunc = (a, b) => a * b;

// const add: MathFunc = (a, b) => a + b;

// console.log("mul(4,5):", mul(4, 5));
// console.log("add(4,5):", add(4, 5));
