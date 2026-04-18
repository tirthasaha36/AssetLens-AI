"use client";

import { Check, MapPin, Target, Wallet, Calendar } from "lucide-react";
import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              AI Property <br />
              Valuation Engine
            </h1>
            
            <p className={styles.subtitle}>
              Get instant, accurate property valuations powered by AI. Make smart lending & investment decisions with confidence.
            </p>
            
            <div className={styles.bulletList}>
              {[
                "Accurate Market Valuations",
                "Quick Liquidity Estimates",
                "Resale Potential Score",
                "Identify Key Risks & Insights"
              ].map((text, i) => (
                <div key={i} className={styles.bullet}>
                  <Check size={20} className={styles.checkIcon} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
            
            <button className={styles.btnEvaluate}>
              Evaluate Property
            </button>
            <p className={styles.quickAnalysis}>Completely free & quick analysis</p>
          </div>

          <div className={styles.visualContainer}>
            <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
              <Image 
                src="/images/hero-image.png" 
                alt="AI Valuator Intelligence Illustration" 
                width={900}
                height={800}
                className={styles.illustration}
                style={{ objectPosition: 'center' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Centered Secondary Call to Action - Static */}
      <section style={{ padding: '8rem 1.5rem', textAlign: 'center', background: '#ffffff' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
          {[
            "Accurate Market Valuations",
            "Quick Liquidity Estimates",
            "Resale Potential Score",
            "Identify Key Risks & Insights"
          ].map((text, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#1e293b', fontWeight: 600, fontSize: '1.25rem' }}>
              <Check size={24} style={{ color: '#45a08a', background: 'rgba(69, 160, 138, 0.1)', borderRadius: '50%', padding: '4px' }} />
              <span>{text}</span>
            </div>
          ))}
        </div>
        <button className={styles.btnEvaluate} style={{ margin: '0 auto', padding: '1.5rem 4rem' }}>
          Evaluate Property
        </button>
        <p className={styles.quickAnalysis} style={{ marginTop: '1.5rem' }}>Completely free & quick analysis</p>
      </section>

      {/* Stats Cards Section - Static */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statHeader}>
              <div className={styles.statIcon} style={{ background: 'rgba(79, 70, 229, 0.1)', color: '#4f46e5' }}>
                <MapPin size={28} />
              </div>
              <span className={styles.statTitle}>Location Intelligence</span>
            </div>
            <div className={styles.statValue}>3.5M+</div>
            <p className={styles.statLabel}>Data Points Analyzed</p>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statHeader}>
              <div className={styles.statIcon} style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                <Target size={28} />
              </div>
              <span className={styles.statTitle}>Resale Index</span>
            </div>
            <div className={styles.statValue}>72 <span style={{ fontSize: '1.25rem', color: '#94a3b8', fontWeight: 500 }}>/ 100</span></div>
            <div className={styles.progress}>
              <div className={styles.progressBar} style={{ width: '72%' }} />
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statHeader}>
              <div className={styles.statIcon} style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
                <Wallet size={28} />
              </div>
              <span className={styles.statTitle}>Distress Sale Value</span>
            </div>
            <div className={styles.statValue}>40%</div>
            <p className={styles.statLabel}>Maximum Discount</p>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statHeader}>
              <div className={styles.statIcon} style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
                <Calendar size={28} />
              </div>
              <span className={styles.statTitle}>Time to Liquidate</span>
            </div>
            <div className={styles.statValue}>40–70 <span style={{ fontSize: '1.25rem', color: '#94a3b8', fontWeight: 500 }}>Days</span></div>
            <div className={styles.progress}>
              <div className={styles.progressBar} style={{ width: '60%', background: '#3b82f6' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
