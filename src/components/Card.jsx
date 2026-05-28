const Card = ({ title, subtitle, actions, children, accent, className = '' }) => {
  return (
    <section
      className={`rounded-3xl border border-orange-100 bg-white/95 p-6 shadow-[0_20px_45px_-25px_rgba(255,122,0,0.45)] backdrop-blur ${accent ?? ''} ${className}`.trim()}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          {title && <h2 className="text-lg font-semibold text-slate-900">{title}</h2>}
          {subtitle && (
            <p className="mt-1 text-sm text-slate-500">
              {subtitle}
            </p>
          )}
        </div>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>
      <div className="space-y-4 text-sm text-slate-600">{children}</div>
    </section>
  )
}

export default Card
