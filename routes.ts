/**
 * An array of routes that access to the public
 * These routes doesn't require authentication
 * @type {string[]}
 */

export const publicRoutes: string[] = ["/", "/auth/new-verification", "/auth/new-password"];

/**
 * An Array of route that use for authentication
 * These routes will redirect logged in user to settings
 * @type {string[]}
 */
export const authRoutes: string[] = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
];

/**
 * The prefix for the API Authentication routes
 * Routes That start with prefix are used for API for authentication purpose
 * @type {string}
 */

export const apiAuthPrefix: string = "/api/auth";

/**
 * The default redirect path after loggin in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/settings";
