import { FaApple, FaGooglePlay } from 'react-icons/fa'
import rigglexLogo from '../assets/rigglex.svg'
import heroBackground from '../assets/bg-image.svg'

const HeroSection = () => (
  <section id="hero" className="relative w-full h-screen min-h-[700px] overflow-hidden">

    {/* Background image */}
    <img
      src={heroBackground}
      alt="RiggleX team collaboration"
      className="absolute inset-0 h-full w-full object-cover"
    />

    {/* Dark overlay for legibility */}
    <div className="absolute inset-0 bg-black/30" />

    {/* Subtle vignette */}
    <div
      className="absolute inset-0"
      style={{
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.35) 100%)',
      }}
    />

    {/* ── Sign Up button — top right ── */}
    <a
      href="https://app.rigglex.in/welcome"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute right-5 top-5 z-20 flex items-center justify-center rounded-2xl bg-[#fc8c4d] px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white shadow-[inset_2px_2px_5px_rgba(0,0,0,0.15)] transition hover:bg-orange-400 sm:right-8 sm:top-8 sm:px-9 sm:py-4 sm:text-base md:right-12 md:top-10"
    >
      Sign Up
    </a>

    {/* ── Main content ── */}
    <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-4 text-center sm:gap-8 sm:px-8">

      {/* Logo + Built for Bharat */}
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-3 sm:gap-4">
          <img
            src={rigglexLogo}
            alt="RiggleX"
            className="h-12 w-auto sm:h-14 md:h-16 lg:h-20 drop-shadow-lg"
          />
          <span className="font-['Montserrat'] font-extrabold tracking-tight text-[#fc8c4d] drop-shadow-lg"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            RiggleX
          </span>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 px-5 py-2 font-['Montserrat'] text-sm sm:text-base md:text-lg font-semibold tracking-[0.18em] uppercase text-white/90 drop-shadow-md">
          Built for Bharat 🇮🇳
        </span>
      </div>

      {/* Headline */}
      <div className="space-y-2 sm:space-y-3">
        <h1
          className="font-['Montserrat'] font-extrabold leading-[1.15] tracking-tight"
          style={{ fontSize: 'clamp(2.6rem, 7vw, 5.5rem)' }}
        >
          <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">Your Work, </span>
          <span className="text-[#fc8c4d] drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">Simplified.</span>
          <br />
          <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">Your Day, </span>
          <span className="text-[#fc8c4d] drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">Sorted.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto max-w-2xl font-['Montserrat'] font-medium text-white/80 leading-relaxed"
          style={{ fontSize: 'clamp(1rem, 2.2vw, 1.5rem)' }}
        >
          Tasks, chats, and updates —<br className="hidden sm:block" />
          clearly organized in one calming workspace.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5 mt-2">
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full max-w-[320px] items-center justify-center gap-3 rounded-2xl bg-[#fc8c4d] px-8 py-4 font-['Montserrat'] text-base font-semibold text-white shadow-[inset_2px_2px_5px_rgba(0,0,0,0.15)] transition hover:bg-orange-400 sm:w-auto sm:py-4 lg:px-10 lg:py-5 lg:text-lg"
        >
          <FaGooglePlay className="h-5 w-5 flex-shrink-0" />
          Download on Play Store
        </a>
        <a
          href="https://apps.apple.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full max-w-[320px] items-center justify-center gap-3 rounded-2xl bg-[#fc8c4d] px-8 py-4 font-['Montserrat'] text-base font-semibold text-white shadow-[inset_2px_2px_5px_rgba(0,0,0,0.15)] transition hover:bg-orange-400 sm:w-auto sm:py-4 lg:px-10 lg:py-5 lg:text-lg"
        >
          <FaApple className="h-5 w-5 flex-shrink-0" />
          Download on Apple Store
        </a>
      </div>

    </div>
  </section>
)

export default HeroSection
