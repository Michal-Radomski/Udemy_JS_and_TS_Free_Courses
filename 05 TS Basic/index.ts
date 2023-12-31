//@ -> 1
// type UserPermissions = "admin" | "user" | "manager";

// interface BasicUser<A = boolean> {
//   name: string;
//   surname: string;
//   age: number;
//   // isAdmin: boolean;
//   isAdmin: A;
// }

// //* Merging - don't do it!
// // interface BasicUser {
// //   account: number;
// // }

// interface AdvancedUser {
//   account: number;
// }

// type FullUser = BasicUser & AdvancedUser;

// const basicUser: BasicUser<boolean> = {
//   name: "Nick",
//   surname: "Ovchinnikov",
//   age: 30,
//   isAdmin: true,
//   // account: 30,
// };
// console.log("basicUser:", basicUser);

// interface UserWithPermissions extends BasicUser<boolean> {
//   permissions?: UserPermissions;
// }

// const userWithPermissions: UserWithPermissions = {
//   name: "Nick",
//   surname: "Ovchinnikov",
//   age: 30,
//   isAdmin: true,
//   permissions: "admin",
//   // account: 50,
// };
// console.log("userWithPermissions:", userWithPermissions);

// const fullUser: FullUser = {
//   name: "Nick",
//   surname: "Ovchinnikov",
//   age: 30,
//   isAdmin: true,
//   account: 50,
// };
// console.log("fullUser:", fullUser);

// type MathFunc = (a: number, b: number) => number;
// // type MathFunc<T = number> = (a: T, b: T) => T;
// const mul: MathFunc = (a, b) => a * b;
// const add: MathFunc = (a, b) => a + b;
// console.log("mul(4,5):", mul(4, 5));
// console.log("add(4,5):", add(4, 5));

// //* Generics
// const usersArray: BasicUser[] = [basicUser, basicUser, basicUser];
// function getFirst<T>(arr: T[]): T {
//   return arr[0];
// }
// console.log("getFirst<BasicUser>(usersArray):", getFirst<BasicUser>(usersArray));

//@ -> 2
// const logFunction = (data: unknown): void => {
//   console.log("data:", data);
//   // return data
//   return undefined;
// };

// const logFunction2 = (data: unknown): never => {
//   console.log("data:", data);
//   throw new Error("Bad");
// };

// type UserPermissions = "admin" | "user" | "manager";
// type TuplePermissions = [UserPermissions, number];
// const permissions: TuplePermissions = ["admin", 5];
// console.log("permissions", permissions);

//@ -> 3
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
//   // readonly name: string; //* You can't change this
//   name: string;
//   surname: string;
//   age: number;
//   isAdmin: A;
//   permissions?: P;
// };

// type BasicUserWithoutPermissions = Omit<BasicUser, "permissions">; //* without permissions

// type AdvancedUser = {
//   account: number;
// };

// type FullUser<A = boolean, P = string[]> = BasicUser<A, P> & AdvancedUser;

// type BasicUserReadonly = Readonly<BasicUser>; //* every item is mark as readonly
// type BasicUserRequired = Required<BasicUser>; //* every item is mark as required
// type BasicUserPartial = Partial<BasicUser>; //* every item is mark as not required ( item? : string | undefined)

// type BasicUserReadonlyRequired = Readonly<Required<BasicUser>>;

// const user: FullUser<boolean> = {
//   name: "Nick",
//   surname: "Ovchinnikov",
//   age: 30,
//   isAdmin: true,
//   account: 100,
//   permissions: ["admin", "user"],
// };

// user.name = "Test"; //* can't be mark as readonly!

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

interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob: Pick<Person, "name"> = {
  name: "Bob", // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};

console.log({ bob });
