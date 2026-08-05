import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useReveal } from "@/lib/useReveal";
import stylistPhoto from "@/assets/portrait/stylist.png";

export default function Process() {
  const portraitRef = useReveal<HTMLDivElement>();
  const copyRef = useReveal<HTMLDivElement>();
  const parallaxTarget = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: parallaxTarget,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-24, 24]);

  return (
    <section className="process" id="process">
      <div className="wrap process__inner">
        <div className="process__portrait reveal" ref={portraitRef}>
          <div className="portrait-block" ref={parallaxTarget}>
            <motion.img
              src={stylistPhoto}
              alt="Maren Osei, master stylist at Pigment"
              className="portrait-block__parallax"
              style={{ y }}
            />
          </div>
        </div>
        <div className="process__copy reveal" ref={copyRef}>
          <p className="eyebrow">The Master Stylist</p>
          <h2 className="section-title">Maren Osei</h2>
          <p className="process__bio">
            Maren trained in color correction before she ever picked up a balayage brush, which
            means she reads hair the way most colorists only read swatch charts — porosity, prior
            color, how it'll lift, all before the first foil goes in. She's been behind the chair
            at Pigment for seven years.
          </p>
          <blockquote className="pull-quote">
            &ldquo;Every formula starts with a conversation. The mixing bowl is the easy
            part.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
