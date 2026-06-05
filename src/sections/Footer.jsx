import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Mail, Clock, Instagram, Facebook, Heart } from 'lucide-react'
import { CLINIC_INFO } from '../data/content'

const FOOTER_NAV = {
  'Navegação': [
    { label: 'Início',               to: '/'                   },
    { label: 'Sobre a Clínica',      to: '/sobre'              },
    { label: 'Especialidades',       to: '/especialidades'     },
    { label: 'Tratamentos',          to: '/tratamentos'        },
    { label: 'Localização',          to: '/estrutura'          },
    { label: 'Contato',              to: '/contato'            },
  ],
  'Especialidades': [
    { label: 'Hérnia de Disco',      to: '/especialidades'     },
    { label: 'Lombalgia',            to: '/especialidades'     },
    { label: 'Cervicalgia',          to: '/especialidades'     },
    { label: 'Dores Crônicas',       to: '/especialidades'     },
    { label: 'Reabilitação',         to: '/especialidades'     },
  ],
}

const SOCIAL = [
  { icon: Instagram, href: CLINIC_INFO.instagram, label: 'Instagram' },
  { icon: Facebook,  href: CLINIC_INFO.facebook,  label: 'Facebook'  },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 relative overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-brand-600 to-transparent" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #2563eb, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="block mb-5 group">
              <img
                src="/img/espinhal.png"
                alt="D.O.R. Clínica Espinhal"
                className="h-11 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Referência em tratamentos para coluna e dor. Tecnologia, precisão e cuidado especializado para sua qualidade de vida.
            </p>
            <div className="flex items-center gap-2">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 rounded-xl bg-neutral-800 hover:bg-brand-600 flex items-center justify-center transition-colors text-neutral-400 hover:text-white"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(FOOTER_NAV).map(([title, links]) => (
            <div key={title} className="col-span-1">
              <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm hover:text-white transition-colors duration-200 inline-block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white font-semibold text-sm mb-4">Contato</h4>
            <div className="space-y-3">
              <a href={`mailto:${CLINIC_INFO.email}`} className="flex items-start gap-2.5 hover:text-white transition-colors text-sm group">
                <Mail size={13} className="shrink-0 mt-0.5 text-brand-500 group-hover:text-brand-400" />
                {CLINIC_INFO.email}
              </a>
              <div className="flex items-start gap-2.5 text-sm">
                <MapPin size={13} className="shrink-0 mt-0.5 text-brand-500" />
                <span className="leading-relaxed">{CLINIC_INFO.address}</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm">
                <Clock size={13} className="shrink-0 mt-0.5 text-brand-500" />
                <span>{CLINIC_INFO.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800 pt-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <p>© 2026 Espinhal D.O.R. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            Feito com <Heart size={11} className="text-red-400 fill-red-400" /> para quem merece viver sem dor
          </p>
          <p>CRM 36782-RS</p>
        </div>
      </div>
    </footer>
  )
}
