/**
 * URL search-parameter helpers for shareable modal state.
 * Uses replaceState so the browser URL updates without navigation.
 */

export function getUrlParam(name: string): string | null {
  return new URLSearchParams(window.location.search).get(name);
}

export function setUrlParam(name: string, value: string | null) {
  const url = new URL(window.location.href);
  if (value) {
    url.searchParams.set(name, value);
  } else {
    url.searchParams.delete(name);
  }
  window.history.replaceState({}, '', url.toString());
}
