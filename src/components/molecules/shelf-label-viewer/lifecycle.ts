import { initShelfLabelViewer } from "./viewer";

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

  document
    .querySelectorAll<HTMLElement>("[data-shelf-label-viewer]")
    .forEach((container) => {
      initShelfLabelViewer(container, controller.signal);
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
