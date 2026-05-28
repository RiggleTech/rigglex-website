import astronautSvg from '../assets/astronaut.svg'
import chatIcon from '../assets/chat.svg'
import circleIcon from '../assets/circle.svg'
import notesIcon from '../assets/notes.svg'
import phoneSvg from '../assets/phone.svg'
import timelyIcon from '../assets/timely.svg'

const featureHighlights = [
  {
    title: 'Chat',
    description: 'Clear, clutter-free conversations.',
    icon: chatIcon,
    badge: 'bg-[#FEE4CF]',
    desktopPosition: 'lg:absolute lg:left-[-220px] lg:top-36 lg:w-[300px]',
  },
  {
    title: 'Timely',
    description: 'Stay on top of tasks and meetings, effortlessly.',
    icon: timelyIcon,
    badge: 'bg-[#FFECD4]',
    desktopPosition: 'lg:absolute lg:left-[-190px] lg:bottom-8 lg:w-[300px]',
  },
  {
    title: 'Circle',
    description: 'Share updates and wins together.',
    icon: circleIcon,
    badge: 'bg-[#FFEBD9]',
    desktopPosition: 'lg:absolute lg:right-[-60px] lg:top-12 lg:w-[300px]',
  },
  {
    title: 'Notes',
    description: 'Jot down ideas anytime, anywhere.',
    icon: notesIcon,
    badge: 'bg-[#FFE5D5]',
    desktopPosition: 'lg:absolute lg:right-[-40px] lg:bottom-16 lg:w-[300px]',
  },
]

const FeatureCard = ({ title, description, icon, badge, className }) => (
  <div
    className={`w-full rounded-2xl border border-[#F3E9E1] bg-white px-6 py-5 shadow-[0_20px_50px_-20px_rgba(43,35,28,0.25)] transition hover:shadow-[0_28px_60px_-20px_rgba(245,126,59,0.2)] lg:z-10 ${className ?? ''}`.trim()}
  >
    <div className="flex items-start gap-3">
      <span className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full ${badge}`}>
        <img src={icon} alt={title} className="h-5 w-5 object-contain" />
      </span>
      <div className="space-y-1">
        <p className="font-['Montserrat'] text-base font-bold text-[#263238]">{title}</p>
        <p className="font-['Montserrat'] text-sm leading-relaxed text-slate-500">{description}</p>
      </div>
    </div>
  </div>
)

const FeatureShowcase = () => (
  <section id="product" className="bg-[#F9F5F1] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">

      {/* Left — Text */}
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

        {/* Section badge */}
        <span className="mb-5 inline-flex items-center rounded-full bg-orange-100 px-4 py-1.5 font-['Montserrat'] text-xs font-bold uppercase tracking-widest text-orange-500">
          Features
        </span>

        <h2
          className="font-['Montserrat'] font-extrabold leading-[1.15] tracking-tight text-slate-900"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
        >
          One <span className="text-[#F57E3B]">App,</span>
          <br />
          Many <span className="text-[#F57E3B]">Superpowers.</span>
        </h2>

        <p className="mt-5 max-w-md font-['Montserrat'] text-base leading-relaxed text-slate-500 sm:text-lg">
          From deep work to team sync — Chat, Plan, Note, and Celebrate, all in one place.
        </p>

        <div className="mt-10 flex w-full flex-col items-center gap-5 sm:flex-row sm:items-end lg:justify-start">
          <img
            src={astronautSvg}
            alt="Astronaut"
            className="h-28 w-auto sm:h-36 lg:h-44"
          />
          <a
            href="https://mail.google.com/mail/?view=cm&to=hello@riggleapp.in"
            className="inline-flex items-center justify-center rounded-xl bg-[#F57E3B] px-9 py-4 font-['Montserrat'] text-base font-bold text-white shadow-lg shadow-orange-300/40 transition hover:bg-orange-500"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Right — Phone + Feature cards */}
      <div className="relative flex w-full justify-center lg:justify-end">
        {/* Glow blob */}
        <div className="absolute inset-y-10 left-1/2 -z-10 h-full w-full max-w-[440px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#FFF5ED] to-[#FFE1CC] blur-3xl opacity-70 lg:left-auto lg:right-12 lg:translate-x-[6%]" />

        {/* Mobile */}
        <div className="flex w-full max-w-lg flex-col items-center gap-6 lg:hidden">
          <img src={phoneSvg} alt="RiggleX app" className="w-52 drop-shadow-xl" />
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            {featureHighlights.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="relative hidden w-full max-w-4xl items-end justify-center lg:flex lg:min-h-[420px]">
          <img
            src={phoneSvg}
            alt="RiggleX app"
            className="z-20 w-[450px] -translate-x-[20%] translate-y-14 drop-shadow-[0_36px_72px_-26px_rgba(43,35,28,0.46)]"
          />
          {featureHighlights.map((f) => (
            <FeatureCard
              key={f.title}
              {...f}
              className={`hidden lg:flex lg:flex-col lg:items-start ${f.desktopPosition}`}
            />
          ))}
        </div>
      </div>

    </div>
  </section>
)

export default FeatureShowcase
