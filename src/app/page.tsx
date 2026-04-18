import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main>
        <Hero />
        
        {/* Bottom Illustration Section */}
        <section className={styles.bottomIllustrationSection}>
          <div className={styles.illustrationWrapper}>
            <Image 
              src="/images/bottom-illustration.png" 
              alt="Suburban neighborhood illustration" 
              width={1400}
              height={400}
              className={styles.bottomIllustration}
            />
          </div>
        </section>

        {/* Simplified Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerLeft}>
              <span className={styles.footerLogo}>AssetLens AI</span>
              <p className={styles.footerDesc}>The most accurate AI-powered property valuation engine.</p>
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.linkCol}>
                <h4>Platform</h4>
                <a href="#">Valuation</a>
                <a href="#">Features</a>
                <a href="#">About</a>
              </div>
              <div className={styles.linkCol}>
                <h4>Legal</h4>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2026 AssetLens AI. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
