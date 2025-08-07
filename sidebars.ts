import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/overview',
        'getting-started/quick-start',
        'getting-started/testnet-setup',
        'getting-started/hello-world',
      ],
    },
    {
      type: 'category',
      label: 'Modules Documentation',
      items: [
        'modules/overview',
        'modules/drm',
        'modules/dor',
        'modules/edm',
        'modules/infra',
        'modules/quantum',
        'modules/governance',
        'modules/web3-compatibility',
        'modules/smart-contracts',
      ],
    },
      {
      type: 'category',
      label: 'Flow Diagrams',
      items: [
       'flowdigramm/drm-flow',
       'flowdigramm/gov-flow',
       'flowdigramm/infra-flow',
       'flowdigramm/comm-flow',
       'flowdigramm/dual-flow',
       'flowdigramm/quantum-flow',
       'flowdigramm/sys-flow',
       'flowdigramm/trans-flow',
       'flowdigramm/web3-flow',
    ],
   },
    {
      type: 'category',
      label: 'API Guide',
      items: [
        'api/overview',
      ],
    },
  ],
};

export default sidebars;
