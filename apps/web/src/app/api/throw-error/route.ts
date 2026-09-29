import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const throwError = searchParams.get("error") === "true";

    if (throwError) {
        throw new Error("Error from API route");
    }

    return NextResponse.json({
        ok: true,
        message: "Everything is fine",
    });
}
