// Keep state outside the DOM so repeat lifecycle events cannot duplicate listeners.
const active = new Map<HTMLElement, () => void>();

function initialize() {
  document.querySelectorAll<HTMLElement>('[data-progressive-proxy]').forEach((proxy) => {
    if (active.has(proxy)) return;
    const sibling = proxy.previousElementSibling;
    const image = sibling instanceof HTMLImageElement ? sibling : sibling?.querySelector('img');
    if (!(image instanceof HTMLImageElement)) { proxy.remove(); return; }
    const controller = new AbortController();
    let timer: ReturnType<typeof setTimeout> | undefined;
    let finishing = false;
    const remove = () => {
      controller.abort();
      clearTimeout(timer);
      active.delete(proxy);
      proxy.remove();
    };
    active.set(proxy, remove);
    const loaded = async () => {
      if (finishing || !image.complete || image.naturalWidth === 0) return;
      finishing = true;
      // Never call decode() on a pending lazy image: that can request its source.
      try { await image.decode(); } catch { /* A successfully loaded image is still usable. */ }
      if (!proxy.isConnected || controller.signal.aborted) return;
      image.dataset.progressiveLoaded = 'true';
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) { remove(); return; }
      proxy.addEventListener('transitionend', (event) => {
        if (event.target === proxy && event.propertyName === 'opacity') remove();
      }, { signal: controller.signal });
      proxy.style.opacity = '0';
      // Hidden elements and interrupted transitions do not always emit transitionend.
      timer = setTimeout(remove, 350);
    };
    image.addEventListener('load', loaded, { signal: controller.signal });
    image.addEventListener('error', remove, { signal: controller.signal });
    if (image.complete) {
      if (image.naturalWidth > 0) void loaded();
      else remove();
    }
  });
}

initialize();
document.addEventListener('astro:page-load', initialize);
document.addEventListener('astro:before-swap', () => {
  for (const remove of active.values()) remove();
});
