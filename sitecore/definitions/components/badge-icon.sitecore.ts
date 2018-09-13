import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the badgeIcon component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when `jss manifest` is run.
 */
export default function(manifest: Manifest) {
  manifest.addComponent({
    name: 'BadgeIcon',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'icon', type: CommonFieldTypes.Image },
      { name: 'text', type: CommonFieldTypes.RichText },
    ],
  });
}
