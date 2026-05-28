const perks = [
  'Stay on top of tasks, chats, and notes in one calming workspace.',
  'Keep the team synced across devices built for Bharat.',
]

const Sidebar = () => (
  <aside className="flex w-full flex-col items-center justify-between gap-6 rounded-3xl bg-white/80 p-6 text-center shadow-xl shadow-orange-500/20 ring-1 ring-orange-100 lg:max-w-xs">
    <div className="space-y-4">
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-200 text-3xl font-bold text-white">
        RX
      </div>
      <div>
        <p className="text-lg font-semibold text-slate-900">Riggle X Co-pilot</p>
        <p className="mt-2 text-sm text-slate-600">
          We are right here when you need a human touch. Reach out anytime.
        </p>
      </div>
    </div>
    <ul className="space-y-3 text-left text-sm text-slate-600">
      {perks.map((perk) => (
        <li key={perk} className="flex items-start gap-2">
          <span className="mt-1 text-lg text-orange-500">*</span>
          <span>{perk}</span>
        </li>
      ))}
    </ul>
    <div className="mt-4 flex flex-col gap-3 text-sm">
      <a
        href="https://mail.google.com/mail/?view=cm&to=hello@riggleapp.in"
        className="rounded-full border border-orange-200 bg-white px-5 py-2 font-semibold text-orange-500 shadow-sm shadow-orange-200 transition hover:border-orange-300 hover:bg-orange-50"
      >
        Contact us
      </a>
      <p className="text-xs text-slate-500">
        Prefer a call? Dial <span className="font-semibold text-orange-500">+91 12345 67890</span>
      </p>
    </div>
  </aside>
)

export default Sidebar
