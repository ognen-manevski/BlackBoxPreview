const previewDomainGroupId = '149ec859-ab8c-49f0-95c2-9ea8be99c8a3';
const configuredDomainGroupId = import.meta.env.PUBLIC_COOKIEBOT_CBID?.trim();
const siteHostname = import.meta.env.SITE ? new URL(import.meta.env.SITE).hostname : '';
const isGitHubPagesPreview = siteHostname === 'ognen-manevski.github.io';

export const cookiebotDomainGroupId =
  configuredDomainGroupId || (isGitHubPagesPreview ? previewDomainGroupId : undefined);

if (import.meta.env.PROD && import.meta.env.PUBLIC_COOKIEBOT_REQUIRED === 'true' && !cookiebotDomainGroupId) {
  throw new Error('Set PUBLIC_COOKIEBOT_CBID to the production Cookiebot domain group ID before building.');
}
