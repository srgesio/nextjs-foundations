// Simulated session (in production, use NextAuth or Clerk)
// This file provides the getSession function required by protected/page.tsx

import { getUserFromDB } from "@/lib/server/db";

// Mock session data structure
interface Session {
    user: {
        id: string;
        name: string;
        email: string;
    };
}

// Simulated authentication check
// In a real app, this would check for a valid session cookie/token
export async function getSession(): Promise<Session | null> {
    // Simulate checking for auth credentials (e.g., session cookie)
    const isAuthenticated = true; // For demo purposes, always true
    const userId = "user-123"; // Mock user ID

    if (!isAuthenticated) {
        return null;
    }

    // Fetch user data from database (server-side only)
    const user = getUserFromDB(userId);

    // Return session object
    return {
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
        },
    };
}