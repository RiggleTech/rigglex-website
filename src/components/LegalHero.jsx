import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import heroImage from '../assets/image.png'

const LegalHero = ({ title, subtitle }) => (
  <div className="relative overflow-hidden bg-white">
    {/* Diagonal peach background — right panel */}
    <div
      className="absolute inset-0 bg-[#fde8d8]"
      style={{ clipPath: 'polygon(42% 0%, 100% 0%, 100% 100%, 62% 100%)' }}
    />

    <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
      <div className="flex items-center justify-between min-h-[260px] md:min-h-[320px] py-10 md:py-14 gap-8">

        {/* Left — Text */}
        <div className="flex-1 max-w-xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-orange-500 text-sm font-medium mb-6 transition-colors"
          >
            <FiArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Right — Illustration */}
        <div className="hidden md:flex flex-shrink-0 w-[42%] lg:w-[40%] items-center justify-center">
          <img
            src={heroImage}
            alt={title}
            className="w-full max-w-md object-contain drop-shadow-sm"
          />
        </div>
      </div>
    </div>
  </div>
)

export default LegalHero
