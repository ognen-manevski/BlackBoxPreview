declare global {
  interface Window {
    __totemModelViewerController?: AbortController;
    __totemModelViewerEventsBound?: boolean;
  }
}

function initialize(): void {
  window.__totemModelViewerController?.abort();

  const controller = new AbortController();
  window.__totemModelViewerController = controller;
  const containers = document.querySelectorAll<HTMLElement>(
    "[data-totem-model-viewer]",
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const container = entry.target as HTMLElement;
        observer.unobserve(container);

        void import("./viewer.ts")
          .then(({ initTotemModelViewer }) => {
            if (!controller.signal.aborted) {
              initTotemModelViewer(container, controller.signal);
            }
          })
          .catch((error: unknown) => {
            if (controller.signal.aborted) return;
            console.error("Unable to initialize totem model viewer.", error);
            const canvas = container.querySelector("canvas");
            const status = container.querySelector<HTMLElement>(
              "[data-model-status]",
            );
            if (status) {
              status.textContent =
                canvas?.getAttribute("data-error-label") ?? "";
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

export function mountTotemModelViewers(): void {
  if (!window.__totemModelViewerEventsBound) {
    window.__totemModelViewerEventsBound = true;
    document.addEventListener("astro:page-load", initialize);
    document.addEventListener("astro:before-swap", () => {
      window.__totemModelViewerController?.abort();
    });
  }

  initialize();
}
