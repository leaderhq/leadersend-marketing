'use client';

export function EmailBroadcastMock() {
  return (
    <div
      className="w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden border border-zinc-800"
      style={{ background: '#06163E' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 48 48" fill="none">
            <path d="M10 14 L24 3 L38 14 L38 20 L24 9 L10 20 Z" fill="#1862EA" />
            <path d="M10 26 L24 15 L38 26 L38 32 L24 21 L10 32 Z" fill="#FFFFFF" opacity="0.3" />
            <path d="M10 38 L24 27 L38 38 L38 44 L24 33 L10 44 Z" fill="#5CAC23" />
          </svg>
          <span className="text-sm font-bold text-white tracking-tight">
            Leader<span className="text-[#5CAC23]">Send</span>
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-[#5CAC23]" />
          <span className="text-xs text-zinc-400">Live</span>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-px bg-white/5 border-b border-white/10">
        {[
          { label: 'Sent', value: '847' },
          { label: 'Opened', value: '312' },
          { label: 'Clicked', value: '67' },
        ].map((s) => (
          <div key={s.label} className="bg-[#06163E] px-4 py-3 text-center">
            <div className="text-xl font-extrabold text-white">{s.value}</div>
            <div className="text-xs text-zinc-500 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Broadcast compose */}
      <div className="p-5 space-y-3">
        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">New Broadcast</div>
        <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
          <div className="text-xs text-zinc-500 mb-1">To</div>
          <div className="text-sm text-white font-medium">All Contacts (847)</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
          <div className="text-xs text-zinc-500 mb-1">Subject</div>
          <div className="text-sm text-white">{"Hey {first_name}, quick update on..."}</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 min-h-[60px]">
          <div className="text-xs text-zinc-500 mb-1">Message</div>
          <div className="text-sm text-zinc-300 leading-relaxed">
            I wanted to personally reach out with some exciting news about...
          </div>
        </div>
        <button className="w-full rounded-xl bg-[#5CAC23] py-2.5 text-sm font-semibold text-white hover:brightness-110 transition">
          Send Broadcast
        </button>
      </div>
    </div>
  );
}
