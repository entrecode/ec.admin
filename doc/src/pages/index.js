import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: (
      <>
        <a href="https://doc.entrecode.de/data_manager/" target="_blank">
          Data Manager
        </a>{' '}
        inside
      </>
    ),
    imageUrl: 'https://entrecode.de/de/assets/ec-logo.svg',
    description: <></>,
  },
  {
    title: (
      <>
        Powered by{' '}
        <a href="https://marmelab.com/react-admin/" target="_blank">
          react-admin
        </a>
      </>
    ),
    imageUrl: 'https://marmelab.com/react-admin/assets/logo.svg',
    description: <></>,
  },
  {
    title: (
      <>
        Powered by{' '}
        <a href="https://material-ui.com/" target="_blank">
          material-ui
        </a>
      </>
    ),
    imageUrl: 'https://material-ui.com/static/logo_raw.svg',
    description: <></>,
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4 center', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--secondary button--lg', styles.getStarted)}
              to={useBaseUrl('docs/getting-started')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
