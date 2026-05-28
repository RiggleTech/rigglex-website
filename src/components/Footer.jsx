import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import rigglexLogo from '../assets/rigglex.svg'

const socialLinks = [
  { label: 'Facebook',  Icon: FaFacebookF,  href: 'https://www.facebook.com/profile.php?id=100092731064840' },
  { label: 'Instagram', Icon: FaInstagram,  href: 'https://www.instagram.com/riggle.india/' },
  { label: 'X',         Icon: FaXTwitter,   href: 'https://x.com/RiggleApp' },
  { label: 'LinkedIn',  Icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/riggle-app/' },
]

const contactItems = [
  {
    label: 'hello@riggleapp.in',
    href: 'https://mail.google.com/mail/?view=cm&to=hello@riggleapp.in',
    Icon: FiMail,
  },
  {
    label: '+91 88502 44062',
    href: 'tel:+918850244062',
    Icon: FiPhone,
  },
  {
    label: '1st Floor, 102, Srishti Square, Lal Bahadur Shastri Marg, Bhandup West, Mumbai 400078, Maharashtra',
    href: 'https://maps.google.com/?q=Srishti+Square+LBS+Marg+Bhandup+West+Mumbai+400078',
    Icon: FiMapPin,
  },
]

const Footer = () => (
  <footer id="resources" className="bg-[#f7f0ea] text-slate-700 font-montserrat">
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="grid gap-10 md:grid-cols-3 lg:gap-16">

        {/* Logo and Social Links - Left */}
        <div className="space-y-8">
          <a href="#hero" className="inline-flex items-center gap-3">
            <img src={rigglexLogo} alt="Riggle X" className="h-15 w-auto" />
          </a>
          <div>
            <p className="text-sm md:text-base lg:text-lg font-normal text-slate-600 mb-3">Follow us on</p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition hover:border-orange-400 hover:text-orange-500 hover:bg-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Resources - Center */}
        <div className="space-y-4">
          <h4 className="text-base md:text-lg lg:text-xl font-semibold text-slate-900">Resources</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/terms" className="text-sm md:text-base lg:text-lg font-normal text-slate-600 transition hover:text-orange-500">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="text-sm md:text-base lg:text-lg font-normal text-slate-600 transition hover:text-orange-500">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us - Right */}
        <div className="space-y-4">
          <h4 className="text-base md:text-lg lg:text-xl font-semibold text-slate-900">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            {contactItems.map(({ label, href, Icon }) => (
              <li key={label} className="flex items-start gap-3">
                <span className="flex-shrink-0 flex h-5 w-5 items-center justify-center text-orange-500 mt-0.5">
                  <Icon className="h-4 w-4" />
                </span>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-sm md:text-base font-normal text-slate-600 transition hover:text-orange-500 leading-snug"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="mt-12 border-t border-slate-200 pt-6 text-center text-xs md:text-sm lg:text-base font-normal text-slate-500">
        © {new Date().getFullYear()} RiggleX. Made with ❤️ in Bharat. All rights reserved.
      </div>
    </div>
  </footer>
)

export default Footer
