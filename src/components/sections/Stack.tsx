"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { skillClusters } from "@/data/skills";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const CX = 210;
const CY = 210;
const RADIUS = 155;

function ClusterSVG({
  cluster,
  index,
}: {
  cluster: (typeof skillClusters)[number];
  index: number;
}) {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const count = cluster.nodes.length;
  const startAngle = -Math.PI / 2; // top

  const nodes = cluster.nodes.map((node, i) => {
    const angle = startAngle + (i * 2 * Math.PI) / count;
    return {
      ...node,
      x: CX + RADIUS * Math.cos(angle),
      y: CY + RADIUS * Math.sin(angle),
      angle,
    };
  });

  const isClusterHovered = hoveredNode !== null;

  return (
    <motion.div
      variants={fadeUp}
      className="relative mx-auto aspect-square w-full max-w-[360px] sm:max-w-[420px]"
      onMouseLeave={() => setHoveredNode(null)}
    >
      <svg
        viewBox="0 0 420 420"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connection lines */}
        <g
          className={cn(
            "transition-all duration-300",
            isClusterHovered ? "stroke-accent/40" : "stroke-border/60"
          )}
          strokeWidth="1"
          fill="none"
        >
          {nodes.map((node, i) => (
            <motion.line
              key={`line-${i}`}
              x1={CX}
              y1={CY}
              x2={node.x}
              y2={node.y}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.4 + i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          ))}
        </g>

        {/* Inter-cluster connection line (only on first cluster, to next) */}
        {index < skillClusters.length - 1 && (
          <motion.line
            x1={CX + RADIUS * 0.9}
            y1={CY}
            x2={420}
            y2={CY}
            className="stroke-border/40"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
        )}

        {/* Satellite nodes */}
        {nodes.map((node, i) => {
          const isHovered = hoveredNode === i;
          return (
            <motion.g
              key={`node-${i}`}
              className="cursor-default"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              onMouseEnter={() => setHoveredNode(i)}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r={isHovered ? 10 : 6}
                className={cn(
                  "transition-all duration-250",
                  isHovered
                    ? "fill-accent stroke-accent"
                    : "fill-elevated stroke-border"
                )}
                strokeWidth={isHovered ? 2 : 1}
              />
              <text
                x={node.x}
                y={node.y + 22}
                textAnchor="middle"
                className={cn(
                  "fill-primary text-[10px] font-medium transition-colors duration-250 sm:text-[11px]",
                  isHovered && "fill-accent"
                )}
              >
                {node.label.length > 18
                  ? `${node.label.slice(0, 17)}…`
                  : node.label}
              </text>
            </motion.g>
          );
        })}

        {/* Center node */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <circle
            cx={CX}
            cy={CY}
            r={46}
            className={cn(
              "fill-elevated transition-colors duration-300",
              isClusterHovered ? "stroke-accent/50" : "stroke-border"
            )}
            strokeWidth={1}
          />
          <text
            x={CX}
            y={CY}
            textAnchor="middle"
            dominantBaseline="middle"
            className={cn(
              "fill-primary text-xs font-semibold transition-colors duration-300",
              isClusterHovered && "fill-accent"
            )}
          >
            {cluster.title}
          </text>
        </motion.g>
      </svg>
    </motion.div>
  );
}

export function Stack() {
  return (
    <section id="stack" className="py-24 md:py-32">
      <Container>
        {/* Header */}
        <motion.div
          className="mb-16 max-w-3xl md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            [02] — Stack
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Habilidades conectadas para diseñar plataformas que funcionan.
          </motion.h2>
        </motion.div>

        {/* Clusters */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {skillClusters.map((cluster, index) => (
            <ClusterSVG key={cluster.title} cluster={cluster} index={index} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
