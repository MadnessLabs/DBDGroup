import { o as readTask, i as writeTask } from './index-bac865b7.js';
import { c as componentOnReady } from './helpers-b5b4d5eb.js';

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const startStatusTap = () => {
  const win = window;
  win.addEventListener('statusTap', () => {
    readTask(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = el.closest('ion-content');
      if (contentEl) {
        new Promise(resolve => componentOnReady(contentEl, resolve)).then(() => {
          writeTask(async () => {
            /**
             * If scrolling and user taps status bar,
             * only calling scrollToTop is not enough
             * as engines like WebKit will jump the
             * scroll position back down and complete
             * any in-progress momentum scrolling.
             */
            contentEl.style.setProperty('--overflow', 'hidden');
            await contentEl.scrollToTop(300);
            contentEl.style.removeProperty('--overflow');
          });
        });
      }
    });
  });
};

export { startStatusTap };