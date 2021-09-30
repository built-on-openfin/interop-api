import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';


export const config: Config = {
  namespace: 'wc-fin',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'wc-fin',
      proxiesFile: '../wc-fin-react/src/components.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
