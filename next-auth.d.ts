// import { UserRole } from "@prisma/client";
// import NextAuth, { type DefaultSession } from "next-auth";

// export type ExtendedUser = DefaultSession["user"] & {
//   role: "ADMIN" | "USER";
// };

// declare module "next-auth" {
//   interface Session {
//     user: {
//       // custom field should be added here before use it in sessions
//       role: "ADMIN" | "USER";
//     };
//   }
// }

// import { JWT } from "next-auth/jwt";

// declare module "next-auth/jwt" {
//   interface JWT {
//     // also the custom field is define here if use it in jwt
//     role?: UserRole
//   }
// }

// import { UserRole } from "@prisma/client";
// import NextAuth, { type DefaultSession } from "next-auth";

// export type ExtendedUser = DefaultSession["user"] & {
//   role: "ADMIN" | "USER";
// };

// declare module "next-auth" {
//   interface Session {
//     user: DefaultSession["user"] & {
//       role: "ADMIN" | "USER";
//     };
//   }
// }

// import { JWT } from "next-auth/jwt";

// declare module "next-auth/jwt" {
//   interface JWT {
//     role?: UserRole;
//   }
// }


import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role: "ADMIN" | "USER";
    };
  }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    role?: UserRole;
  }
}
