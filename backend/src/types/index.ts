// src/types/index.ts

export type UserRole = "doctor" | "receptionist" | "patient";

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string | null;
  role: UserRole;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

// User object without password — this is what we attach to req.user
// and send back in API responses.
export type SafeUser = Omit<IUser, "password">;

export interface JwtPayload {
  id: number;
  role: UserRole;
}