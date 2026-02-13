import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

function HeroSection() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.heroButtons}>
            <Link className={styles.primaryButton} to="/mindset">
              Start Here
            </Link>
            <Link className={styles.secondaryButton} to="/techniques">
              Browse Techniques
            </Link>
          </div>
        </div>
        <div className={styles.heroGraphic}>
          <img
            src="/adversarial-design-thinking/img/landing/hero-illustration.svg"
            alt="ADT Hero Illustration"
          />
        </div>
      </div>
    </header>
  );
}

const features = [
  {
    title: "Techniques",
    link: "/techniques",
    icon: "/adversarial-design-thinking/img/landing/tech-icon.svg",
    description:
      "17 technique categories across prompt-level, structural, and infrastructure tactics. Understand what mechanisms exist and why they work.",
  },
  {
    title: "Crafting Prompts",
    link: "/crafting-prompts",
    icon: "/adversarial-design-thinking/img/landing/craft-icon.svg",
    description:
      "Compose techniques into effective attacks. Covers anatomy, workflow, composition patterns, and common mistakes.",
  },
  {
    title: "System Jailbreaks",
    link: "/jailbreaks",
    icon: "/adversarial-design-thinking/img/landing/jailbreak-icon.svg",
    description:
      "Construct persistent configurations that bypass safety entirely. Architecture, patterns, persistence, and model modification.",
  },
  {
    title: "Process",
    link: "/exercises",
    icon: "/adversarial-design-thinking/img/landing/process-icon.svg",
    description:
      "Structured methodology adapted from UX design thinking. Exercises for systematic coverage and team coordination.",
  },
];

function FeatureCard({ title, link, description, icon }) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>
        <img src={icon} alt={title} />
      </div>
      <h3>
        <Link to={link}>{title}</Link>
      </h3>
      <p>{description}</p>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className={styles.featuresGrid}>
        {features.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section className={styles.approach}>
      <h2>The Approach</h2>
      <div className={styles.approachFlow}>
        <img
          src="/adversarial-design-thinking/img/landing/approach-flow.svg"
          alt="ADT Approach Flow"
        />
      </div>
    </section>
  );
}

function DisclaimerSection() {
  return (
    <section className={styles.disclaimer}>
      <p>
        <strong>Responsible Use:</strong> These techniques are documented for
        defensive understanding and authorized security testing. Only test
        systems you own or have explicit permission to test. See the full{" "}
        <Link to="/disclaimer">Disclaimer</Link>.
      </p>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main>
        <HeroSection />
        <ApproachSection />
        <FeaturesSection />
        <DisclaimerSection />
      </main>
    </Layout>
  );
}
