import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HeroSection() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
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
    </header>
  );
}

const features = [
  {
    title: 'Techniques',
    link: '/techniques',
    description: '17 technique categories across prompt-level, structural, and infrastructure tactics. Understand what mechanisms exist and why they work.',
  },
  {
    title: 'Crafting Prompts',
    link: '/crafting-prompts',
    description: 'Compose techniques into effective attacks. Covers anatomy, workflow, composition patterns, and common mistakes.',
  },
  {
    title: 'System Jailbreaks',
    link: '/jailbreaks',
    description: 'Construct persistent configurations that bypass safety entirely. Architecture, patterns, persistence, and model modification.',
  },
  {
    title: 'Process',
    link: '/exercises',
    description: 'Structured methodology adapted from UX design thinking. Exercises for systematic coverage and team coordination.',
  },
];

function FeatureCard({title, link, description}) {
  return (
    <div className={styles.featureCard}>
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
      <div className={styles.approachTable}>
        <table>
          <thead>
            <tr>
              <th>Design Thinking</th>
              <th>Red Team Application</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Empathize</strong></td>
              <td>Understand the target. What are its constraints? Where has it been hardened?</td>
            </tr>
            <tr>
              <td><strong>Define</strong></td>
              <td>Name the vulnerability precisely. Not "use encoding" but "exploit tokenizer-classifier asymmetry."</td>
            </tr>
            <tr>
              <td><strong>Ideate</strong></td>
              <td>Generate approaches without filtering. What combinations haven't been tried?</td>
            </tr>
            <tr>
              <td><strong>Prototype</strong></td>
              <td>Test. What happens? What does the failure reveal about defenses?</td>
            </tr>
            <tr>
              <td><strong>Iterate</strong></td>
              <td>Refine based on what you learned. Use failure data to inform the next attempt.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

function DisclaimerSection() {
  return (
    <section className={styles.disclaimer}>
      <p>
        <strong>Responsible Use:</strong> These techniques are documented for defensive understanding and authorized security testing.
        Only test systems you own or have explicit permission to test. See the full <Link to="/disclaimer">Disclaimer</Link>.
      </p>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <main>
        <HeroSection />
        <FeaturesSection />
        <ApproachSection />
        <DisclaimerSection />
      </main>
    </Layout>
  );
}
