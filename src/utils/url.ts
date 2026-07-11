/**
 * Prefix a root-relative path with the configured base path.
 *
 * The GitHub Pages workflow builds with `--base /my-portfolio`, so internal
 * links and public/ asset paths must go through this helper — a hardcoded
 * "/projects" would 404 on the deployed site.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}
