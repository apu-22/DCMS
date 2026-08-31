// src/types/express.d.ts
// Extends Express's Request type so `req.user` is type-safe everywhere.

import { SafeUser } from "./index";

declare global {
  namespace Express {
    interface Request {
      user?: SafeUser;
    }
  }
}

export {};