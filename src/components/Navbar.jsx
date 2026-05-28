import { useLocation } from 'react-router-dom'

const navigation = [
  { label: 'Product',   hash: 'product' },
  { label: 'Pricing',   hash: 'pricing' },
  { label: 'Benefits',  hash: 'benefits' },
  { label: 'Resources', hash: 'resources' },
]

const Navbar = () => {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  // On legal pages prefix with '/' so links go home first, then scroll
  const href = (hash) => isHome ? `#${hash}` : `/#${hash}`

  return (
    <header className="relative z-10 flex items-center justify-between gap-6 px-6 py-5">
      <div className="flex items-center gap-6">
        <a href={isHome ? '#hero' : '/'} className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-300 text-lg font-bold text-white shadow-xl shadow-orange-500/40">
            RX
          </span>
          <span>
            <span className="block text-sm font-semibold text-slate-900">Riggle X</span>
            <span className="flex items-center gap-1 text-xs font-medium text-slate-500">
              Built for Bharat (IN)
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={href(item.hash)}
              className="transition-colors hover:text-orange-500"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <a
        href="https://app.rigglex.in/welcome"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:from-orange-400 hover:to-orange-300"
      >
        Get Started →
      </a>
    </header>
  )
}

export default Navbar
