const stylesByVariant = {
  primary:
    'bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-lg shadow-orange-500/30 hover:from-orange-400 hover:to-orange-300 focus-visible:ring-orange-200',
  secondary:
    'bg-white text-orange-500 border border-orange-200 hover:border-orange-300 focus-visible:ring-orange-100',
  outline:
    'border border-slate-300 bg-white text-slate-800 hover:border-orange-300 hover:text-orange-500 focus-visible:ring-orange-100',
  ghost:
    'text-slate-600 hover:bg-orange-50/60 hover:text-orange-500 focus-visible:ring-orange-100',
}

const Button = ({
  variant = 'primary',
  className = '',
  children,
  icon,
  iconPosition = 'left',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-50'

  const variantStyles = stylesByVariant[variant] ?? stylesByVariant.primary

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`.trim()}
      {...props}
    >
      {icon && iconPosition === 'left' ? <span className="text-lg">{icon}</span> : null}
      <span>{children}</span>
      {icon && iconPosition === 'right' ? <span className="text-lg">{icon}</span> : null}
    </button>
  )
}

export default Button
