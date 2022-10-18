import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';


export const config: Config = {
  namespace: 'wc-fin',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'wc-fin',
      proxiesFile: '../wc-fin-react/src/components.ts',
      includeDefineCustomElements: true,
    }),
    angularOutputTarget({
      componentCorePackage: 'wc-fin',
      directivesProxyFile: '../wc-fin-angular/projects/stencil-angular/src/lib/components.ts',
      directivesArrayFile: '../wc-fin-angular/projects/stencil-angular/src/lib/index.ts',
      includeImportCustomElements: true
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
