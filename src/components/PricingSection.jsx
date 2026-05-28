import { useState, useEffect } from 'react'
import tickSvg from '../assets/charm_circle-tick.svg'

const GMAIL_URL = 'https://mail.google.com/mail/?view=cm&to=hello@riggleapp.in'
const APP_URL   = 'https://app.rigglex.in/welcome'

const billingPeriods = [
  { label: 'Monthly',   badge: null },
  { label: '6 months',  badge: '1 Month Free' },
  { label: '12 months', badge: '3 Months Free' },
]

const monthlyPlans = [
  {
    name: 'Free Forever ❤️',
    price: '₹0', priceSuffix: null, priceDetails: null,
    tagline: 'No credit card required.',
    platform: null,
    bullets: [
      'Mobile & Web Access', 'Signup using Email', 'Notification Centre', 'Single Sign On',
      'Unlimited 1:1 & Group Chats', 'Email Notifications', 'Read Receipts',
      'End-to-End Encryption', 'Audio Call (1:1)', 'Video Call (1:1)',
      'Screen Sharing', 'Chat History (30 days)',
    ],
    cta: 'Get Started Free', ctaHref: APP_URL, highlight: false,
  },
  {
    name: 'Pro',
    price: '₹70', priceSuffix: '/user/mo', priceDetails: null,
    tagline: null, platform: 'Everything in Free Forever +',
    bullets: [
      'Manage Roles & Permissions', 'Unlimited Chat History',
      'Schedule Meetings', 'Tasks & Subtasks', 'Create Notes',
    ],
    cta: 'Start 30-Day Trial', ctaHref: APP_URL, highlight: false,
  },
  {
    name: 'Pro Plus',
    price: '₹90', priceSuffix: '/user/mo', priceDetails: null,
    tagline: null, platform: 'Everything in Pro +',
    bullets: [
      'Attendance Management', 'Selfie Clock-In',
      'Continuous Location Punching', 'Leave Management',
      'Holiday Calendar', 'Expense Claims',
    ],
    cta: 'Start 30-Day Trial', ctaHref: APP_URL, highlight: true,
  },
  {
    name: 'Enterprise',
    price: null, priceSuffix: null, priceDetails: null,
    tagline: 'Custom pricing for your team size and needs.',
    platform: null, bullets: [],
    cta: 'Contact Us', ctaHref: GMAIL_URL, highlight: false,
  },
]

const sixMonthPlans = [
  { ...monthlyPlans[0] },
  { ...monthlyPlans[1], price: '₹420', priceSuffix: null, priceDetails: [{ text: '₹70/user/mo', strikethrough: true }, { text: '₹60/user/mo' }] },
  { ...monthlyPlans[2], price: '₹540', priceSuffix: null, priceDetails: [{ text: '₹90/user/mo', strikethrough: true }, { text: '₹77/user/mo' }] },
  { ...monthlyPlans[3] },
]

const twelveMonthPlans = [
  { ...monthlyPlans[0] },
  { ...monthlyPlans[1], price: '₹840', priceSuffix: null, priceDetails: [{ text: '₹70/user/mo', strikethrough: true }, { text: '₹56/user/mo' }] },
  { ...monthlyPlans[2], price: '₹1,080', priceSuffix: null, priceDetails: [{ text: '₹90/user/mo', strikethrough: true }, { text: '₹72/user/mo' }] },
  { ...monthlyPlans[3] },
]

const PricingSection = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Monthly')
  const [currentPlans, setCurrentPlans] = useState(monthlyPlans)

  useEffect(() => {
    if (selectedPeriod === '6 months') setCurrentPlans(sixMonthPlans)
    else if (selectedPeriod === '12 months') setCurrentPlans(twelveMonthPlans)
    else setCurrentPlans(monthlyPlans)
  }, [selectedPeriod])

  return (
    <section id="pricing" className="bg-white px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-12">

        {/* Header */}
        <div className="space-y-5 text-center">
          <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-1.5 font-['Montserrat'] text-xs font-bold uppercase tracking-widest text-orange-500">
            Pricing
          </span>
          <h2
            className="font-['Montserrat'] font-extrabold leading-tight text-slate-900"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
          >
            Simple Pricing for{' '}
            <span className="text-[#F57E3B]">Your Business</span>
          </h2>
          <p className="mx-auto max-w-xl font-['Montserrat'] text-base leading-relaxed text-slate-500 sm:text-lg">
            No hidden fees. Cancel anytime. Start free, scale when you're ready.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="mx-auto flex max-w-md items-center justify-center gap-1.5 rounded-2xl bg-slate-100 p-1.5">
          {billingPeriods.map((p) => (
            <button
              key={p.label}
              onClick={() => setSelectedPeriod(p.label)}
              className={`relative flex-1 rounded-xl px-4 py-3.5 font-['Montserrat'] text-base font-bold transition-all ${
                selectedPeriod === p.label
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {p.label}
              {p.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#49BEFF] px-2 py-0.5 text-[10px] font-bold text-white">
                  +{p.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Plan cards */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {currentPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
                plan.highlight
                  ? 'border-orange-400 bg-gradient-to-b from-orange-50 to-white shadow-[0_20px_60px_-20px_rgba(245,126,59,0.4)]'
                  : 'border-slate-200 bg-white shadow-sm hover:shadow-md'
              }`}
            >
              {/* Most popular badge */}
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#F57E3B] px-5 py-1.5 font-['Montserrat'] text-xs font-bold text-white shadow-md">
                  ⭐ Most Popular
                </span>
              )}

              {/* Plan name */}
              <h3 className="font-['Montserrat'] text-2xl font-extrabold text-slate-900">{plan.name}</h3>

              {/* Price */}
              <div className="mt-5 mb-1">
                {plan.price ? (
                  <div className="flex items-end gap-1.5">
                    <span className="font-['Montserrat'] text-6xl font-extrabold leading-none text-[#F57E3B]">
                      {plan.price}
                    </span>
                    {plan.priceSuffix && (
                      <span className="mb-1.5 font-['Montserrat'] text-base font-semibold text-slate-400">
                        {plan.priceSuffix}
                      </span>
                    )}
                  </div>
                ) : (
                  <span className="font-['Montserrat'] text-4xl font-extrabold text-slate-400">Custom</span>
                )}
              </div>

              {/* Tagline / price details */}
              <div className="mb-6 min-h-[44px] font-['Montserrat'] text-base text-slate-400">
                {plan.tagline && <p className="leading-relaxed">{plan.tagline}</p>}
                {plan.priceDetails?.map((d) => (
                  <p key={d.text} className={d.strikethrough ? 'line-through opacity-60' : 'font-semibold text-slate-500'}>
                    {d.text}
                  </p>
                ))}
              </div>

              {/* CTA */}
              <a
                href={plan.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`mb-7 flex w-full items-center justify-center rounded-xl px-4 py-4 font-['Montserrat'] text-base font-bold transition ${
                  plan.highlight
                    ? 'bg-[#F57E3B] text-white shadow-md shadow-orange-200 hover:bg-orange-500'
                    : 'border-2 border-slate-200 bg-white text-slate-700 hover:border-orange-400 hover:text-orange-500'
                }`}
              >
                {plan.cta}
              </a>

              {/* Platform label */}
              {plan.platform && (
                <p className="mb-4 font-['Montserrat'] text-sm font-bold uppercase tracking-wide text-[#49BEFF]">
                  {plan.platform}
                </p>
              )}

              {/* Bullets */}
              {plan.bullets.length > 0 && (
                <ul className="space-y-4">
                  {plan.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3">
                      <img src={tickSvg} alt="✓" className="h-6 w-6 flex-shrink-0" />
                      <span className="font-['Montserrat'] text-lg font-medium leading-snug text-slate-700">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default PricingSection
