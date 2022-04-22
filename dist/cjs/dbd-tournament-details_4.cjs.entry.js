'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-faf70b2e.js');
const ionicGlobal = require('./ionic-global-07f11642.js');
const index$1 = require('./index-7b3ca02f.js');
const helpers = require('./helpers-061c1472.js');
const theme = require('./theme-b0b295c1.js');
require('./index-adf933de.js');

const dbdTournamentDetailsCss = "";

const DbdTournamentDetails = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.image = "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y";
  }
  // @Prop() component: string;
  // @Prop() componentProps?: any;
  // @Prop() cssClass?: string;
  // @Prop() paginationEl: HTMLFireenjinPaginationElement;
  // @Prop() endpoint: string;
  // @Prop() limit: number;
  // @Prop() query: string;
  async componentDidLoad() {
    if (!(index.Build === null || index.Build === void 0 ? void 0 : index.Build.isBrowser))
      return;
  }
  render() {
    return (index.h("div", null, index.h("ion-card", null, index.h("ion-item", null, index.h("ion-thumbnail", { slot: "start", style: {
        height: "80px",
        width: "100px",
      } }, index.h("img", { src: this.image })), index.h("ion-label", null, index.h("h2", null, this.name), index.h("h2", null, this.dateTime), index.h("ion-button", { size: "cover", id: "trigger-button" }, "Tournament Details"), (this.rules || []).find((rule) => (index.h("ion-popover", { trigger: "trigger-button" }, index.h("ul", null, index.h("li", null, rule)))))))), index.h("ion-row", { style: {
        "flex-wrap": "wrap-reverse",
      } }, index.h("ion-col", { size: "12", "size-md": "6" }, index.h("ion-card", null, index.h("ion-item", null, index.h("ion-avatar", { slot: "start" }, index.h("img", { src: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" })), index.h("p", null, "SURVIVOR"))), index.h("ion-card", null, index.h("ion-item", null, index.h("ion-avatar", { slot: "start" }, index.h("img", { src: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" })), index.h("p", null, "SURVIVOR"))), index.h("ion-card", null, index.h("ion-item", null, index.h("ion-avatar", { slot: "start" }, index.h("img", { src: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" })), index.h("p", null, "SURVIVOR"))), index.h("ion-card", null, index.h("ion-item", null, index.h("ion-avatar", { slot: "start" }, index.h("img", { src: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" })), index.h("p", null, "SURVIVOR")))), index.h("ion-col", { size: "12", "size-md": "6" }, index.h("ion-card", null, index.h("ion-item", null, index.h("ion-avatar", { slot: "start" }, index.h("img", { src: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" })), index.h("p", null, "KILLER")))))));
  }
};
DbdTournamentDetails.style = dbdTournamentDetailsCss;

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const TRANSITION = 'all 0.2s ease-in-out';
const cloneElement = (tagName) => {
  const getCachedEl = document.querySelector(`${tagName}.ion-cloned-element`);
  if (getCachedEl !== null) {
    return getCachedEl;
  }
  const clonedEl = document.createElement(tagName);
  clonedEl.classList.add('ion-cloned-element');
  clonedEl.style.setProperty('display', 'none');
  document.body.appendChild(clonedEl);
  return clonedEl;
};
const createHeaderIndex = (headerEl) => {
  if (!headerEl) {
    return;
  }
  const toolbars = headerEl.querySelectorAll('ion-toolbar');
  return {
    el: headerEl,
    toolbars: Array.from(toolbars).map((toolbar) => {
      const ionTitleEl = toolbar.querySelector('ion-title');
      return {
        el: toolbar,
        background: toolbar.shadowRoot.querySelector('.toolbar-background'),
        ionTitleEl,
        innerTitleEl: ionTitleEl ? ionTitleEl.shadowRoot.querySelector('.toolbar-title') : null,
        ionButtonsEl: Array.from(toolbar.querySelectorAll('ion-buttons')) || [],
      };
    }) || [],
  };
};
const handleContentScroll = (scrollEl, scrollHeaderIndex, contentEl) => {
  index.readTask(() => {
    const scrollTop = scrollEl.scrollTop;
    const scale = helpers.clamp(1, 1 + -scrollTop / 500, 1.1);
    // Native refresher should not cause titles to scale
    const nativeRefresher = contentEl.querySelector('ion-refresher.refresher-native');
    if (nativeRefresher === null) {
      index.writeTask(() => {
        scaleLargeTitles(scrollHeaderIndex.toolbars, scale);
      });
    }
  });
};
const setToolbarBackgroundOpacity = (headerEl, opacity) => {
  /**
   * Fading in the backdrop opacity
   * should happen after the large title
   * has collapsed, so it is handled
   * by handleHeaderFade()
   */
  if (headerEl.collapse === 'fade') {
    return;
  }
  if (opacity === undefined) {
    headerEl.style.removeProperty('--opacity-scale');
  }
  else {
    headerEl.style.setProperty('--opacity-scale', opacity.toString());
  }
};
const handleToolbarBorderIntersection = (ev, mainHeaderIndex, scrollTop) => {
  if (!ev[0].isIntersecting) {
    return;
  }
  /**
   * There is a bug in Safari where overflow scrolling on a non-body element
   * does not always reset the scrollTop position to 0 when letting go. It will
   * set to 1 once the rubber band effect has ended. This causes the background to
   * appear slightly on certain app setups.
   *
   * Additionally, we check if user is rubber banding (scrolling is negative)
   * as this can mean they are using pull to refresh. Once the refresher starts,
   * the content is transformed which can cause the intersection observer to erroneously
   * fire here as well.
   */
  const scale = ev[0].intersectionRatio > 0.9 || scrollTop <= 0 ? 0 : ((1 - ev[0].intersectionRatio) * 100) / 75;
  setToolbarBackgroundOpacity(mainHeaderIndex.el, scale === 1 ? undefined : scale);
};
/**
 * If toolbars are intersecting, hide the scrollable toolbar content
 * and show the primary toolbar content. If the toolbars are not intersecting,
 * hide the primary toolbar content and show the scrollable toolbar content
 */
const handleToolbarIntersection = (ev, mainHeaderIndex, scrollHeaderIndex, scrollEl) => {
  index.writeTask(() => {
    const scrollTop = scrollEl.scrollTop;
    handleToolbarBorderIntersection(ev, mainHeaderIndex, scrollTop);
    const event = ev[0];
    const intersection = event.intersectionRect;
    const intersectionArea = intersection.width * intersection.height;
    const rootArea = event.rootBounds.width * event.rootBounds.height;
    const isPageHidden = intersectionArea === 0 && rootArea === 0;
    const leftDiff = Math.abs(intersection.left - event.boundingClientRect.left);
    const rightDiff = Math.abs(intersection.right - event.boundingClientRect.right);
    const isPageTransitioning = intersectionArea > 0 && (leftDiff >= 5 || rightDiff >= 5);
    if (isPageHidden || isPageTransitioning) {
      return;
    }
    if (event.isIntersecting) {
      setHeaderActive(mainHeaderIndex, false);
      setHeaderActive(scrollHeaderIndex);
    }
    else {
      /**
       * There is a bug with IntersectionObserver on Safari
       * where `event.isIntersecting === false` when cancelling
       * a swipe to go back gesture. Checking the intersection
       * x, y, width, and height provides a workaround. This bug
       * does not happen when using Safari + Web Animations,
       * only Safari + CSS Animations.
       */
      const hasValidIntersection = (intersection.x === 0 && intersection.y === 0) || (intersection.width !== 0 && intersection.height !== 0);
      if (hasValidIntersection && scrollTop > 0) {
        setHeaderActive(mainHeaderIndex);
        setHeaderActive(scrollHeaderIndex, false);
        setToolbarBackgroundOpacity(mainHeaderIndex.el);
      }
    }
  });
};
const setHeaderActive = (headerIndex, active = true) => {
  if (active) {
    headerIndex.el.classList.remove('header-collapse-condense-inactive');
  }
  else {
    headerIndex.el.classList.add('header-collapse-condense-inactive');
  }
};
const scaleLargeTitles = (toolbars = [], scale = 1, transition = false) => {
  toolbars.forEach((toolbar) => {
    const ionTitle = toolbar.ionTitleEl;
    const titleDiv = toolbar.innerTitleEl;
    if (!ionTitle || ionTitle.size !== 'large') {
      return;
    }
    titleDiv.style.transition = transition ? TRANSITION : '';
    titleDiv.style.transform = `scale3d(${scale}, ${scale}, 1)`;
  });
};
const handleHeaderFade = (scrollEl, baseEl, condenseHeader) => {
  index.readTask(() => {
    const scrollTop = scrollEl.scrollTop;
    const baseElHeight = baseEl.clientHeight;
    const fadeStart = condenseHeader ? condenseHeader.clientHeight : 0;
    /**
     * If we are using fade header with a condense
     * header, then the toolbar backgrounds should
     * not begin to fade in until the condense
     * header has fully collapsed.
     *
     * Additionally, the main content should not
     * overflow out of the container until the
     * condense header has fully collapsed. When
     * using just the condense header the content
     * should overflow out of the container.
     */
    if (condenseHeader !== null && scrollTop < fadeStart) {
      baseEl.style.setProperty('--opacity-scale', '0');
      scrollEl.style.setProperty('clip-path', `inset(${baseElHeight}px 0px 0px 0px)`);
      return;
    }
    const distanceToStart = scrollTop - fadeStart;
    const fadeDuration = 10;
    const scale = helpers.clamp(0, distanceToStart / fadeDuration, 1);
    index.writeTask(() => {
      scrollEl.style.removeProperty('clip-path');
      baseEl.style.setProperty('--opacity-scale', scale.toString());
    });
  });
};

const headerIosCss = "ion-header{display:block;position:relative;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-of-type{--border-width:0 0 0.55px}@supports (backdrop-filter: blur(0)){.header-background{left:0;right:0;top:0;bottom:0;position:absolute;backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8}.header-collapse-condense-inactive .header-background{backdrop-filter:blur(20px)}}.header-ios.ion-no-border ion-toolbar:last-of-type{--border-width:0}.header-collapse-fade ion-toolbar{--opacity-scale:inherit}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:sticky;top:0}.header-collapse-condense ion-toolbar:first-of-type{padding-top:7px;z-index:1}.header-collapse-condense ion-toolbar{--background:var(--ion-background-color, #fff);z-index:0}.header-collapse-condense ion-toolbar:last-of-type{--border-width:0px}.header-collapse-condense ion-toolbar ion-searchbar{height:48px;padding-top:0px;padding-bottom:13px}.header-collapse-main{--opacity-scale:1}.header-collapse-main ion-toolbar{--opacity-scale:inherit}.header-collapse-main ion-toolbar.in-toolbar ion-title,.header-collapse-main ion-toolbar.in-toolbar ion-buttons{transition:all 0.2s ease-in-out}.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-buttons.buttons-collapse{visibility:hidden}";

const headerMdCss = "ion-header{display:block;position:relative;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-md::after{left:0;bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:\"\"}[dir=rtl] .header-md::after,:host-context([dir=rtl]) .header-md::after{left:unset;right:unset;right:0}[dir=rtl] .header-md::after,:host-context([dir=rtl]) .header-md::after{background-position:right 0 top -2px}.header-collapse-condense{display:none}.header-md.ion-no-border::after{display:none}";

const Header = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.inheritedAttributes = {};
    /**
     * If `true`, the header will be translucent.
     * Only applies when the mode is `"ios"` and the device supports
     * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
     *
     * Note: In order to scroll content behind the header, the `fullscreen`
     * attribute needs to be set on the content.
     */
    this.translucent = false;
    this.setupFadeHeader = async (contentEl, condenseHeader) => {
      const scrollEl = (this.scrollEl = await index$1.getScrollElement(contentEl));
      /**
       * Handle fading of toolbars on scroll
       */
      this.contentScrollCallback = () => {
        handleHeaderFade(this.scrollEl, this.el, condenseHeader);
      };
      scrollEl.addEventListener('scroll', this.contentScrollCallback);
      handleHeaderFade(this.scrollEl, this.el, condenseHeader);
    };
  }
  componentWillLoad() {
    this.inheritedAttributes = helpers.inheritAttributes(this.el, ['role']);
  }
  componentDidLoad() {
    this.checkCollapsibleHeader();
  }
  componentDidUpdate() {
    this.checkCollapsibleHeader();
  }
  disconnectedCallback() {
    this.destroyCollapsibleHeader();
  }
  async checkCollapsibleHeader() {
    const mode = ionicGlobal.getIonMode(this);
    if (mode !== 'ios') {
      return;
    }
    const { collapse } = this;
    const hasCondense = collapse === 'condense';
    const hasFade = collapse === 'fade';
    this.destroyCollapsibleHeader();
    if (hasCondense) {
      const pageEl = this.el.closest('ion-app,ion-page,.ion-page,page-inner');
      const contentEl = pageEl ? index$1.findIonContent(pageEl) : null;
      // Cloned elements are always needed in iOS transition
      index.writeTask(() => {
        const title = cloneElement('ion-title');
        title.size = 'large';
        cloneElement('ion-back-button');
      });
      await this.setupCondenseHeader(contentEl, pageEl);
    }
    else if (hasFade) {
      const pageEl = this.el.closest('ion-app,ion-page,.ion-page,page-inner');
      const contentEl = pageEl ? index$1.findIonContent(pageEl) : null;
      if (!contentEl) {
        index$1.printIonContentErrorMsg(this.el);
        return;
      }
      const condenseHeader = contentEl.querySelector('ion-header[collapse="condense"]');
      await this.setupFadeHeader(contentEl, condenseHeader);
    }
  }
  destroyCollapsibleHeader() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      this.intersectionObserver = undefined;
    }
    if (this.scrollEl && this.contentScrollCallback) {
      this.scrollEl.removeEventListener('scroll', this.contentScrollCallback);
      this.contentScrollCallback = undefined;
    }
    if (this.collapsibleMainHeader) {
      this.collapsibleMainHeader.classList.remove('header-collapse-main');
      this.collapsibleMainHeader = undefined;
    }
  }
  async setupCondenseHeader(contentEl, pageEl) {
    if (!contentEl || !pageEl) {
      index$1.printIonContentErrorMsg(this.el);
      return;
    }
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }
    this.scrollEl = await index$1.getScrollElement(contentEl);
    const headers = pageEl.querySelectorAll('ion-header');
    this.collapsibleMainHeader = Array.from(headers).find((header) => header.collapse !== 'condense');
    if (!this.collapsibleMainHeader) {
      return;
    }
    const mainHeaderIndex = createHeaderIndex(this.collapsibleMainHeader);
    const scrollHeaderIndex = createHeaderIndex(this.el);
    if (!mainHeaderIndex || !scrollHeaderIndex) {
      return;
    }
    setHeaderActive(mainHeaderIndex, false);
    setToolbarBackgroundOpacity(mainHeaderIndex.el, 0);
    /**
     * Handle interaction between toolbar collapse and
     * showing/hiding content in the primary ion-header
     * as well as progressively showing/hiding the main header
     * border as the top-most toolbar collapses or expands.
     */
    const toolbarIntersection = (ev) => {
      handleToolbarIntersection(ev, mainHeaderIndex, scrollHeaderIndex, this.scrollEl);
    };
    this.intersectionObserver = new IntersectionObserver(toolbarIntersection, {
      root: contentEl,
      threshold: [0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    });
    this.intersectionObserver.observe(scrollHeaderIndex.toolbars[scrollHeaderIndex.toolbars.length - 1].el);
    /**
     * Handle scaling of large iOS titles and
     * showing/hiding border on last toolbar
     * in primary header
     */
    this.contentScrollCallback = () => {
      handleContentScroll(this.scrollEl, scrollHeaderIndex, contentEl);
    };
    this.scrollEl.addEventListener('scroll', this.contentScrollCallback);
    index.writeTask(() => {
      if (this.collapsibleMainHeader !== undefined) {
        this.collapsibleMainHeader.classList.add('header-collapse-main');
      }
    });
  }
  render() {
    const { translucent, inheritedAttributes } = this;
    const mode = ionicGlobal.getIonMode(this);
    const collapse = this.collapse || 'none';
    // banner role must be at top level, so remove role if inside a menu
    const roleType = theme.hostContext('ion-menu', this.el) ? 'none' : 'banner';
    return (index.h(index.Host, Object.assign({ role: roleType, class: {
        [mode]: true,
        // Used internally for styling
        [`header-${mode}`]: true,
        [`header-translucent`]: this.translucent,
        [`header-collapse-${collapse}`]: true,
        [`header-translucent-${mode}`]: this.translucent,
      } }, inheritedAttributes), mode === 'ios' && translucent && index.h("div", { class: "header-background" }), index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
};
Header.style = {
  ios: headerIosCss,
  md: headerMdCss
};

const titleIosCss = ":host{--color:initial;display:flex;flex:1;align-items:center;transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{left:0;top:0;padding-left:90px;padding-right:90px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);position:absolute;width:100%;height:100%;transform:translateZ(0);font-size:17px;font-weight:600;text-align:center;box-sizing:border-box;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px}}:host(.title-small){padding-left:9px;padding-right:9px;padding-top:6px;padding-bottom:16px;position:relative;font-size:13px;font-weight:normal}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.title-small){padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}:host(.title-large){padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;transform-origin:left center;bottom:0;align-items:flex-end;min-width:100%;padding-bottom:6px;font-size:34px;font-weight:700;text-align:start}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.title-large){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.title-large.title-rtl){transform-origin:right center}:host(.title-large.ion-cloned-element){--color:var(--ion-text-color, #000)}:host(.title-large) .toolbar-title{transform-origin:inherit}:host-context([dir=rtl]):host(.title-large) .toolbar-title,:host-context([dir=rtl]).title-large .toolbar-title{transform-origin:calc(100% - inherit)}";

const titleMdCss = ":host{--color:initial;display:flex;flex:1;align-items:center;transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:0.0125em}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.title-small){width:100%;height:100%;font-size:15px;font-weight:normal}";

const ToolbarTitle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ionStyle = index.createEvent(this, "ionStyle", 7);
  }
  sizeChanged() {
    this.emitStyle();
  }
  connectedCallback() {
    this.emitStyle();
  }
  emitStyle() {
    const size = this.getSize();
    this.ionStyle.emit({
      [`title-${size}`]: true,
    });
  }
  getSize() {
    return this.size !== undefined ? this.size : 'default';
  }
  render() {
    const mode = ionicGlobal.getIonMode(this);
    const size = this.getSize();
    return (index.h(index.Host, { class: theme.createColorClasses(this.color, {
        [mode]: true,
        [`title-${size}`]: true,
        'title-rtl': document.dir === 'rtl',
      }) }, index.h("div", { class: "toolbar-title" }, index.h("slot", null))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "size": ["sizeChanged"]
  }; }
};
ToolbarTitle.style = {
  ios: titleIosCss,
  md: titleMdCss
};

const toolbarIosCss = ":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;box-sizing:border-box}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:flex;position:relative;flex-direction:row;align-items:center;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;box-sizing:border-box}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-color-step-50, #f7f7f7));--color:var(--ion-toolbar-color, var(--ion-text-color, #000));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{flex:1;order:4;min-width:0}:host(.toolbar-segment) .toolbar-content{display:inline-flex}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}:host(.toolbar-searchbar) ::slotted(ion-back-button){height:38px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){order:2}::slotted([slot=secondary]){order:3}::slotted([slot=primary]){order:5;text-align:end}::slotted([slot=end]){order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{flex-wrap:wrap;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{flex:1;order:8;min-width:100%}";

const toolbarMdCss = ":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;box-sizing:border-box}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:flex;position:relative;flex-direction:row;align-items:center;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;box-sizing:border-box}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-background-color, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #424242));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, #c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{flex:1;order:3;min-width:0;max-width:100%}::slotted(ion-segment){min-height:var(--min-height)}::slotted(.buttons-first-slot){margin-left:4px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(.buttons-first-slot){margin-left:unset;-webkit-margin-start:4px;margin-inline-start:4px}}::slotted(.buttons-last-slot){margin-right:4px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(.buttons-last-slot){margin-right:unset;-webkit-margin-end:4px;margin-inline-end:4px}}::slotted([slot=start]){order:2}::slotted([slot=secondary]){order:4}::slotted([slot=primary]){order:5;text-align:end}::slotted([slot=end]){order:6;text-align:end}";

const Toolbar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.childrenStyles = new Map();
  }
  componentWillLoad() {
    const buttons = Array.from(this.el.querySelectorAll('ion-buttons'));
    const firstButtons = buttons.find((button) => {
      return button.slot === 'start';
    });
    if (firstButtons) {
      firstButtons.classList.add('buttons-first-slot');
    }
    const buttonsReversed = buttons.reverse();
    const lastButtons = buttonsReversed.find((button) => button.slot === 'end') ||
      buttonsReversed.find((button) => button.slot === 'primary') ||
      buttonsReversed.find((button) => button.slot === 'secondary');
    if (lastButtons) {
      lastButtons.classList.add('buttons-last-slot');
    }
  }
  childrenStyle(ev) {
    ev.stopPropagation();
    const tagName = ev.target.tagName;
    const updatedStyles = ev.detail;
    const newStyles = {};
    const childStyles = this.childrenStyles.get(tagName) || {};
    let hasStyleChange = false;
    Object.keys(updatedStyles).forEach((key) => {
      const childKey = `toolbar-${key}`;
      const newValue = updatedStyles[key];
      if (newValue !== childStyles[childKey]) {
        hasStyleChange = true;
      }
      if (newValue) {
        newStyles[childKey] = true;
      }
    });
    if (hasStyleChange) {
      this.childrenStyles.set(tagName, newStyles);
      index.forceUpdate(this);
    }
  }
  render() {
    const mode = ionicGlobal.getIonMode(this);
    const childStyles = {};
    this.childrenStyles.forEach((value) => {
      Object.assign(childStyles, value);
    });
    return (index.h(index.Host, { class: Object.assign(Object.assign({}, childStyles), theme.createColorClasses(this.color, {
        [mode]: true,
        'in-toolbar': theme.hostContext('ion-toolbar', this.el),
      })) }, index.h("div", { class: "toolbar-background" }), index.h("div", { class: "toolbar-container" }, index.h("slot", { name: "start" }), index.h("slot", { name: "secondary" }), index.h("div", { class: "toolbar-content" }, index.h("slot", null)), index.h("slot", { name: "primary" }), index.h("slot", { name: "end" }))));
  }
  get el() { return index.getElement(this); }
};
Toolbar.style = {
  ios: toolbarIosCss,
  md: toolbarMdCss
};

exports.dbd_tournament_details = DbdTournamentDetails;
exports.ion_header = Header;
exports.ion_title = ToolbarTitle;
exports.ion_toolbar = Toolbar;
