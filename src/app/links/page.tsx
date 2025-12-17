'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Dither from '@/blocks/Backgrounds/Dither/Dither'

export default function LinksPage() {
  const links = [
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5554999629799?text=Olá! Vim pelo link da bio.',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 22, height: 22 }}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      )
    },
    {
      name: 'Nosso Site',
      url: 'https://amageweb.com',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}>
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      )
    },
    {
      name: 'Portfólio',
      url: 'https://amageweb.com/#portfolio',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      )
    }
  ]

  return (
    <div style={{
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* CSS para animação de pulsar em escada */}
      <style jsx global>{`
        @keyframes iconGlowSequence {
          0%, 20% {
            background: rgba(155, 77, 202, 0.2);
            box-shadow: 0 0 5px rgba(155, 77, 202, 0.2);
          }
          10% {
            background: rgba(199, 125, 255, 0.35);
            box-shadow: 0 0 12px rgba(199, 125, 255, 0.3);
          }
        }

        .icon-glow-0 {
          animation: iconGlowSequence 2.4s ease-in-out infinite;
          animation-delay: 0s;
          background: rgba(155, 77, 202, 0.2);
        }

        .icon-glow-1 {
          animation: iconGlowSequence 2.4s ease-in-out infinite;
          animation-delay: 0.3s;
          background: rgba(155, 77, 202, 0.2);
        }

        .icon-glow-2 {
          animation: iconGlowSequence 2.4s ease-in-out infinite;
          animation-delay: 0.6s;
          background: rgba(155, 77, 202, 0.2);
        }

        .icon-glow-0:hover,
        .icon-glow-1:hover,
        .icon-glow-2:hover {
          animation: none;
          background: rgba(199, 125, 255, 0.4) !important;
          box-shadow: 0 0 15px rgba(199, 125, 255, 0.4);
        }

        @keyframes ctaPulse {
          0%, 100% {
            box-shadow: 0 4px 20px rgba(111, 39, 139, 0.4), 0 0 0 0 rgba(139, 58, 175, 0.4);
          }
          50% {
            box-shadow: 0 6px 30px rgba(111, 39, 139, 0.6), 0 0 0 8px rgba(139, 58, 175, 0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }

        .cta-button {
          position: relative;
          overflow: hidden;
          animation: ctaPulse 2s ease-in-out infinite;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          animation: shimmer 3s ease-in-out infinite;
        }

        .cta-button:hover {
          animation: none;
          box-shadow: 0 10px 40px rgba(111, 39, 139, 0.6);
        }

        .cta-button:hover::before {
          animation: shimmer 1s ease-in-out infinite;
        }
      `}</style>

      {/* Background Dither */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <Dither
          waveColor={[0.5, 0.4, 0.5]}
          colorNum={4.5}
          waveAmplitude={0.09}
          waveFrequency={3}
          disableAnimation={false}
          waveSpeed={0.05}
          enableMouseInteraction={false}
          mouseRadius={0.15}
        />
      </div>

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px'
      }}>

        {/* Container para Logo + Card */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: 400,
          paddingTop: 75
        }}>
          {/* Logo posicionada no meio da borda superior do card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              display: 'flex',
              justifyContent: 'center',
              zIndex: 20
            }}
          >
            <Image
              src="/logos/LOGO LINKS.svg"
              alt="Amage"
              width={150}
              height={150}
              style={{ objectFit: 'contain' }}
            />
          </motion.div>

          {/* Glass Card Container */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              width: '100%',
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: 32,
              paddingTop: 110,
              paddingBottom: 40,
              paddingLeft: 28,
              paddingRight: 28,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
          >
            {/* Texto dentro do card */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                textAlign: 'center',
                marginBottom: 40,
                fontSize: 15,
                color: 'rgba(255, 255, 255, 0.75)',
                fontWeight: 400,
                lineHeight: 1.5
              }}
            >
              Criamos experiências digitais que convertem visitantes em clientes.
            </motion.p>

            {/* Links - Botões roxos com brilho correndo na borda */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {links.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.05 } }}
                  whileTap={{ scale: 0.98, transition: { duration: 0.02 } }}
                  style={{
                    width: '100%',
                    background: '#6F278B',
                    borderRadius: 16,
                    padding: 0,
                    display: 'flex',
                    alignItems: 'stretch',
                    textDecoration: 'none',
                    fontFamily: 'Nugros, sans-serif',
                    cursor: 'pointer',
                    height: 58
                  }}
                >
                  {/* Icon na borda esquerda com efeito de pulsar em escada */}
                  <div
                    className={`icon-glow-${index}`}
                    style={{
                      width: 58,
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      flexShrink: 0,
                      borderRadius: '16px 0 0 16px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {link.icon}
                  </div>

                  {/* Text centralizado no espaço restante */}
                  <div style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingRight: 58
                  }}>
                    <span style={{
                      fontSize: 17,
                      fontWeight: 600,
                      color: '#ffffff'
                    }}>
                      {link.name}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="https://wa.me/5554999629799?text=Olá! Quero um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.55 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="cta-button"
              style={{
                display: 'block',
                marginTop: 28,
                width: '100%',
                background: 'linear-gradient(135deg, #8B3AAF 0%, #6F278B 100%)',
                color: '#ffffff',
                borderRadius: 14,
                padding: '16px 24px',
                textAlign: 'center',
                fontSize: 16,
                fontWeight: 600,
                fontFamily: 'Nugros, sans-serif',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: 'none'
              }}
            >
              Quero um orçamento!
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
