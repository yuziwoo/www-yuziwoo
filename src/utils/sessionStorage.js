import PATH from '../constants/path';
import SESSION_STORAGE from '../constants/sessionStorageConstants';

export const visitedURL = Object.freeze({
  getCurrentPath() {
    const currentURL = window.location.href;
    const url = new URL(currentURL);

    return url.pathname;
  },

  getURLs() {
    return (
      JSON.parse(sessionStorage.getItem(SESSION_STORAGE.visitedURLs)) || []
    );
  },

  resetURLs() {
    const defaultURLs = [PATH.root];
    sessionStorage.setItem(
      SESSION_STORAGE.visitedURLs,
      JSON.stringify(defaultURLs),
    );
  },

  resetURLsIfEmpty() {
    const urls = this.getURLs();

    if (urls.length === SESSION_STORAGE.visitedURLsMaxLength) {
      this.resetURLs();
    }
  },

  unshiftIfRootMissing() {
    const urls = this.getURLs();

    if (urls[0] !== PATH.root) {
      urls.unshift(PATH.root);
      sessionStorage.setItem(SESSION_STORAGE.visitedURLs, JSON.stringify(urls));
    }
  },

  spliceURLsIfFull() {
    const urls = this.getURLs();

    if (urls.length === SESSION_STORAGE.visitedURLsMaxLength) {
      urls.splice(1, 1);
    }
  },

  recordURL() {
    const visitedURLs = this.getURLs();
    const latestVisit = visitedURLs[visitedURLs.length - 1];
    const currentPath = this.getCurrentPath();

    if (latestVisit !== currentPath) {
      visitedURLs.push(currentPath);
      sessionStorage.setItem(
        SESSION_STORAGE.visitedURLs,
        JSON.stringify(visitedURLs),
      );
    }
  },

  getVisitedURLsBeforeRoot() {
    return (
      JSON.parse(
        sessionStorage.getItem(SESSION_STORAGE.visitedURLsBeforeRoot),
      ) || []
    );
  },

  setVisitedURLsBeforeRoot(urls) {
    sessionStorage.setItem(SESSION_STORAGE.visitedURLsBeforeRoot, urls);
  },

  setURLs() {
    const currentPath = this.getCurrentPath();
    const urls = this.getURLs();

    this.resetURLsIfEmpty();
    this.recordURL();
    this.unshiftIfRootMissing();
    this.spliceURLsIfFull();

    if (currentPath === SESSION_STORAGE.root && urls.length > 1) {
      this.setVisitedURLsBeforeRoot(urls);
      this.resetURLs();
    }
  },

  onFirstVisit(callback) {
    const urls = this.getURLs();

    if (urls.length === 0) {
      callback();
    }
  },
});
