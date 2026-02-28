import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="relative overflow-hidden py-12 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">

          {/* Logo & Copyright */}
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-6 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm text-white/80">
                  &copy; 2023 DevUI. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="tracking-wider mb-6 text-xs font-semibold uppercase text-white/80">
              Company
            </h3>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Affiliate Program', 'Press Kit'].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="tracking-wider mb-6 text-xs font-semibold uppercase text-white/80">
              Support
            </h3>
            <ul className="space-y-3">
              {['Account', 'Help', 'Contact Us', 'Customer Support'].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <h3 className="tracking-wider mb-6 text-xs font-semibold uppercase text-white/80">
              Legals
            </h3>
            <ul className="space-y-3">
              {['Terms & Conditions', 'Privacy Policy', 'Licensing'].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer