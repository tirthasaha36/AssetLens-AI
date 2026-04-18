"use client";

import { motion } from "framer-motion";
import { BarChart3, Clock, ShieldAlert, Check } from "lucide-react";
import styles from "./Features.module.css";

const features = [
  {
    icon: <BarChart3 size={28} />,
    title: "Precision Valuation",
    desc: "Move beyond simple regression. Our engine combines circle rates, infrastructure proximity, and neighborhood quality scores for accurate pricing.",
    items: ["Circle Rate Benchmarking", "Depreciation Logic", "Location Premium Analysis"]
  },
  {
    icon: <Clock size={28} />,
    title: "Liquidity Intelligence",
    desc: "Calculate exit certainty with our Resale Potential Index. Know exactly how many days it will take to liquidate an asset in any market condition.",
    items: ["Time-to-Liquidate Estimates", "Distress Value Ranges", "Demand-Supply Mapping"]
  },
  {
    icon: <ShieldAlert size={28} />,
    title: "Risk & Fraud Layer",
    desc: "Identify red flags instantly. From fake property sizes to location mismatches, we provide the safeguards lenders need.",
    items: ["Size Verification", "Legal Clarity Signals", "Configuration Plausibility"]
  }
];

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.header}>
        <h2 className={`${styles.title} text-gradient`}>Advanced Collateral Intelligence</h2>
        <p className={styles.subtitle}>
          Everything you need to assess property risk and value in one unified platform.
        </p>
      </div>

      <div className={styles.grid}>
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`${styles.card} glass-card`}
          >
            <div className={styles.iconWrapper}>
              {feature.icon}
            </div>
            <h3 className={styles.cardTitle}>{feature.title}</h3>
            <p className={styles.cardDesc}>{feature.desc}</p>
            
            <div className={styles.featureList}>
              {feature.items.map((item, i) => (
                <div key={i} className={styles.featureItem}>
                  <Check size={16} className={styles.check} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
