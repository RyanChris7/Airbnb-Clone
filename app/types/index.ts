import { User, Listing } from "@prisma/client";

export type safeListings = Omit<Listing, "createdAt"> & { createdAt: string };

// Change User model types from date&time to String
export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
