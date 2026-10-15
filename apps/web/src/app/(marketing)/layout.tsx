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
            <header className="mb-8 border-b py-4">
                <nav className="flex gap-4">
                    <a href="/" className="font-semibold">Home</a>
                    <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
                    <a href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
                    <a href="/docs" className="text-gray-600 hover:text-gray-900">Docs</a>
                    <a href="/shop" className="text-gray-600 hover:text-gray-900">Shop</a>
                    <a href="/dashboard" className="ml-auto text-blue-600 hover:text-blue-800">Dashboard →</a>
                    <a href="/demo" className="text-gray-600 hover:text-gray-900">Demo</a>
                    <a href="/demo/cards" className="text-gray-600 hover:text-gray-900">Demo Cards</a>
                </nav>
            </header>
            <main className="container mx-auto px-4 min-h-[calc(100svh-4rem)]">{children}</main>
            <footer className="mt-8 border-t py-4 text-gray-500 text-sm">
                © 2026 Next.js Foundations
            </footer>
        </div>
    )
}
