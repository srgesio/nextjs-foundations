import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: '%s | Marketing Next.js Foundations',
        default: 'Marketing Next.js Foundations',
    },
}

export default function MarketingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen">

            <main className="container mx-auto px-4 min-h-[calc(100svh-4rem)]">{children}</main>

        </div>
    )
}
