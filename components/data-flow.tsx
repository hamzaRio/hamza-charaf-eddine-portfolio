"use client";

import { motion, useReducedMotion } from "framer-motion";

const nodes = [
  { x: 20, y: 110, label: "SQL" },
  { x: 150, y: 40, label: "ETL" },
  { x: 150, y: 180, label: "EDI" },
  { x: 290, y: 110, label: "ERP" },
];

const paths = [
  "M20,110 C70,110 100,40 150,40",
  "M20,110 C70,110 100,180 150,180",
  "M150,40 C200,40 230,110 290,110",
  "M150,180 C200,180 230,110 290,110",
];

export default function DataFlow() {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 310 220"
      className="h-full w-full"
      role="img"
      aria-label="Diagram showing data flowing between SQL, ETL, EDI, and ERP systems"
    >
      {paths.map((d) => (
        <path key={d} d={d} fill="none" stroke="var(--color-line-strong)" strokeWidth="1.5" />
      ))}
      {!reduce &&
        paths.map((d, i) => (
          <motion.circle
            key={`dot-${i}`}
            r="3"
            fill="var(--color-accent)"
            initial={{ offsetDistance: "0%", opacity: 0 }}
            animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              delay: i * 0.65,
              ease: "easeInOut",
            }}
            style={{ offsetPath: `path("${d}")`, offsetRotate: "0deg" }}
          />
        ))}
      {nodes.map((n) => (
        <g key={n.label}>
          <circle cx={n.x} cy={n.y} r="22" fill="var(--color-panel-raised)" stroke="var(--color-line-strong)" />
          <text
            x={n.x}
            y={n.y}
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="var(--font-data)"
            fontSize="11"
            fill="var(--color-muted)"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
