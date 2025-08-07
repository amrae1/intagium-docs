import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Modular Architecture',
    Svg: require('@site/static/img/x2.svg').default,
    description: (
      <>
        INTAGIUM is built on a highly modular design,
        allowing seamless integration of governance, staking, Web3, and more.
      </>
    ),
  },
  {
    title: 'Secure by Design',
    Svg: require('@site/static/img/x3.svg').default,
    description: (
      <>
        Built from the ground up for data integrity, privacy, and cryptographic ownership,
        fully decentralized and tamper-proof.
      </>
    ),
  },
  {
    title: 'Developer Friendly',
    Svg: require('@site/static/img/x1.svg').default,
    description: (
      <>
        Type-safe APIs, customizable modules,
        and comprehensive documentation make development fast and scalable.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
