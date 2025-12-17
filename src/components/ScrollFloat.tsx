'use client'

import React, { useEffect, useMemo, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextSegment {
  text: string;
  color?: string;
  lineBreak?: boolean;
}

interface ScrollFloatProps {
  children?: ReactNode;
  segments?: TextSegment[];
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  stagger?: number;
  style?: React.CSSProperties;
  as?: 'h1' | 'h2' | 'h3' | 'p';
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  segments,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  stagger = 0.03,
  style = {},
  as: Tag = 'h2'
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const hasAnimated = useRef(false);

  const splitText = useMemo(() => {
    // Se tiver segments, usa eles
    if (segments && segments.length > 0) {
      return segments.flatMap((segment, segIndex) => {
        const chars = segment.text.split('').map((char, charIndex) => (
          <span
            className="inline-block word"
            key={`${segIndex}-${charIndex}`}
            style={{ color: segment.color, opacity: 0 }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ));

        if (segment.lineBreak) {
          return [...chars, <br key={`br-${segIndex}`} />];
        }
        return chars;
      });
    }

    // Fallback para children string
    const text = typeof children === 'string' ? children : '';
    return text.split('').map((char, index) => (
      <span className="inline-block word" key={index} style={{ opacity: 0 }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  }, [children, segments]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || hasAnimated.current) return;

    const charElements = el.querySelectorAll('.inline-block');

    // Cria o ScrollTrigger para detectar quando entra na view
    ScrollTrigger.create({
      trigger: el,
      start: 'top bottom-=100',
      once: true, // Só executa uma vez
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        gsap.fromTo(
          charElements,
          {
            opacity: 0,
            yPercent: 120,
            scaleY: 2.3,
            scaleX: 0.7,
            transformOrigin: '50% 0%'
          },
          {
            duration: animationDuration,
            ease: ease,
            opacity: 1,
            yPercent: 0,
            scaleY: 1,
            scaleX: 1,
            stagger: stagger
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === el) {
          trigger.kill();
        }
      });
    };
  }, [animationDuration, ease, stagger]);

  return (
    <Tag ref={containerRef as React.RefObject<HTMLHeadingElement>} className={`my-5 overflow-hidden ${containerClassName}`} style={style}>
      <span className={`inline-block text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] ${textClassName}`}>{splitText}</span>
    </Tag>
  );
};

export default ScrollFloat;
