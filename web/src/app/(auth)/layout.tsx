import BrandPanel from "@/components/auth/BrandPanel"


export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="h-screen grid md:grid-cols-[2fr_1fr]">
            <BrandPanel />
            <section className="min-h-screen flex flex-col justify-center md:border-l border-neutral-800 px-8 py-12">
                <div className="w-full max-w-sm">
                    {children}
                </div>
            </section>
        </main>
    );
}