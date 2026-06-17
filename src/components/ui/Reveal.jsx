import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-reveal wrapper. Fades + slides children into view once.
 * Respects prefers-reduced-motion (renders static).
 *
 * @param {string} as        - element/component to render (default "div")
 * @param {number} delay     - stagger delay in seconds
 * @param {number} y         - initial vertical offset
 */
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 24,
  className = "",
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
