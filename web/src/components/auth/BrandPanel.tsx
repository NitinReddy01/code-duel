


export default function BrandPanel() {
    return (
        <aside className="h-screen p-10 bg-neutral-950 flex flex-col justify-between">
            <div>
                Duel
            </div>
            <div className="flex flex-col gap-5">
                <span className="text-neutral-200 text-[15px] font-mono" >SIGN IN</span>
                <h1 className="font-display text-[64px] leading-[0.96] tracking-display">
                    Welcome <em className="block text-mint-300">duelist</em>
                </h1>

                <p className="text-neutral-200 text-[15px] mt-3 max-w-md">
                    A coding duel. Two players, one problem, head-to-head. Submit first with all tests passing - that's the win.
                </p>

                <dl className="flex gap-12">
                    <Stat
                        value="47"
                        label="Live duels"
                        live
                    />
                    <Stat value="6" label="In queue" />
                    <Stat value="12" label="Languages" />
                </dl>
            </div>
            <footer className="font-mono text-[13px] text-neutral-500 tracking-wide">
                © duel · {new Date().getFullYear()}
            </footer>
        </aside>
    );
}


function Stat({ value, label, live }: { value: string; label: string; live?: boolean }) {
    return (
        <div>
            <dt className="font-mono text-[32px] font-medium text-neutral-50 leading-none flex items-center gap-2">
                {live && <span className="w-2 h-2 rounded-full bg-mint-300 animate-pulse-soft" />}
                {value}
            </dt>
            <dd className="font-mono text-[10px] tracking-kicker uppercase text-neutral-400 mt-2">
                {label}
            </dd>
        </div>
    );
}