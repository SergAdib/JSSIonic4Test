import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the banner component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when `jss manifest` is run.
 */
export default function(manifest: Manifest) {
  manifest.addComponent({
    name: 'Banner',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
    ],
  });
}
