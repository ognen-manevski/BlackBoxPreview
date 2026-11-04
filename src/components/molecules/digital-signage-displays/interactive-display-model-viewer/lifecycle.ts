declare global {
  interface Window {
    __interactiveDisplayViewerController?: AbortController;
    __interactiveDisplayViewerEventsBound?: boolean;
  }
}

function initialize(): void {
  window.__interactiveDisplayViewerController?.abort();

  const controller = new AbortController();
  window.__interactiveDisplayViewerController = controller;
  const containers = document.querySelectorAll<HTMLElement>(
    "[data-interactive-display-viewer]",
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const container = entry.target as HTMLElement;
        observer.unobserve(container);

        void import("./viewer.ts")
          .then(({ initInteractiveDisplayViewer }) => {
            if (!controller.signal.aborted) {
              initInteractiveDisplayViewer(container, controller.signal);
            }
          })
          .catch((error: unknown) => {
            if (controller.signal.aborted) return;
            console.error("Unable to initialize interactive display viewer.", error);
            const status = container.querySelector<HTMLElement>("[data-model-status]");
            if (status) {
              status.textContent =
                container.querySelector("canvas")?.getAttribute("data-error-label") ?? "";
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

export function mountInteractiveDisplayViewers(): void {
  if (!window.__interactiveDisplayViewerEventsBound) {
    window.__interactiveDisplayViewerEventsBound = true;
    document.addEventListener("astro:page-load", initialize);
    document.addEventListener("astro:before-swap", () => {
      window.__interactiveDisplayViewerController?.abort();
    });
  }

  initialize();
}
