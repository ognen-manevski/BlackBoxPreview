declare global {
  interface Window {
    __shelfLabelViewerController?: AbortController;
    __shelfLabelViewerEventsBound?: boolean;
  }
}

function initialize(): void {
  window.__shelfLabelViewerController?.abort();

  const controller = new AbortController();
  window.__shelfLabelViewerController = controller;

  const containers = document.querySelectorAll<HTMLElement>(
    "[data-shelf-label-viewer]",
  );

  if (containers.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const container = entry.target as HTMLElement;
        observer.unobserve(container);

        void import("./viewer").then(({ initShelfLabelViewer }) => {
          if (!controller.signal.aborted) {
            initShelfLabelViewer(container, controller.signal);
          }
        });
      });
    },
    { rootMargin: "50% 0px" },
  );

  containers.forEach((container) => observer.observe(container));
  controller.signal.addEventListener("abort", () => observer.disconnect(), {
    once: true,
  });
}

export function mountShelfLabelViewers(): void {
  if (!window.__shelfLabelViewerEventsBound) {
    window.__shelfLabelViewerEventsBound = true;

    document.addEventListener("astro:page-load", initialize);
    document.addEventListener("astro:before-swap", () => {
      window.__shelfLabelViewerController?.abort();
    });
  }

  initialize();
}
