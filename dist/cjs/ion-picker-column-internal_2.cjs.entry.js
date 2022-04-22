'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-faf70b2e.js');
const ionicGlobal = require('./ionic-global-07f11642.js');
const helpers = require('./helpers-061c1472.js');
const haptic = require('./haptic-780f33c4.js');
const theme = require('./theme-b0b295c1.js');

const pickerColumnInternalIosCss = ":host{padding-left:16px;padding-right:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host::-webkit-scrollbar{display:none}:host .picker-item{height:34px;line-height:34px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty{scroll-snap-align:none}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}";

const pickerColumnInternalMdCss = ":host{padding-left:16px;padding-right:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host::-webkit-scrollbar{display:none}:host .picker-item{height:34px;line-height:34px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty{scroll-snap-align:none}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}:host .picker-item-active{color:var(--ion-color-base)}";

const PickerColumnInternal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ionChange = index.createEvent(this, "ionChange", 7);
    this.hapticsStarted = false;
    this.isColumnVisible = false;
    this.isActive = false;
    /**
     * A list of options to be displayed in the picker
     */
    this.items = [];
    /**
     * The color to use from your application's color palette.
     * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
     * For more information on colors, see [theming](/docs/theming/basics).
     */
    this.color = 'primary';
    /**
     * If `true`, tapping the picker will
     * reveal a number input keyboard that lets
     * the user type in values for each picker
     * column. This is useful when working
     * with time pickers.
     *
     * @internal
     */
    this.numericInput = false;
    this.centerPickerItemInView = (target, smooth = true) => {
      const { el, isColumnVisible } = this;
      if (isColumnVisible) {
        // (Vertical offset from parent) - (three empty picker rows) + (half the height of the target to ensure the scroll triggers)
        const top = target.offsetTop - 3 * target.clientHeight + target.clientHeight / 2;
        if (el.scrollTop !== top) {
          el.scroll({
            top,
            left: 0,
            behavior: smooth ? 'smooth' : undefined,
          });
        }
      }
    };
    /**
     * When ionInputModeChange is emitted, each column
     * needs to check if it is the one being made available
     * for text entry.
     */
    this.inputModeChange = (ev) => {
      if (!this.numericInput) {
        return;
      }
      const { useInputMode, inputModeColumn } = ev.detail;
      /**
       * If inputModeColumn is undefined then this means
       * all numericInput columns are being selected.
       */
      const isColumnActive = inputModeColumn === undefined || inputModeColumn === this.el;
      if (!useInputMode || !isColumnActive) {
        this.isActive = false;
        return;
      }
      this.isActive = true;
    };
    /**
     * When the column scrolls, the component
     * needs to determine which item is centered
     * in the view and will emit an ionChange with
     * the item object.
     */
    this.initializeScrollListener = () => {
      const { el } = this;
      let timeout;
      let activeEl = this.activeItem;
      const scrollCallback = () => {
        helpers.raf(() => {
          if (timeout) {
            clearTimeout(timeout);
            timeout = undefined;
          }
          if (!this.hapticsStarted) {
            haptic.hapticSelectionStart();
            this.hapticsStarted = true;
          }
          /**
           * Select item in the center of the column
           * which is the month/year that we want to select
           */
          const bbox = el.getBoundingClientRect();
          const centerX = bbox.x + bbox.width / 2;
          const centerY = bbox.y + bbox.height / 2;
          const activeElement = el.shadowRoot.elementFromPoint(centerX, centerY);
          if (activeEl !== null) {
            activeEl.classList.remove(PICKER_COL_ACTIVE);
          }
          /**
           * If we are selecting a new value,
           * we need to run haptics again.
           */
          if (activeElement !== activeEl) {
            haptic.hapticSelectionChanged();
          }
          activeEl = activeElement;
          activeElement.classList.add(PICKER_COL_ACTIVE);
          timeout = setTimeout(() => {
            const dataIndex = activeElement.getAttribute('data-index');
            /**
             * If no value it is
             * possible we hit one of the
             * empty padding columns.
             */
            if (dataIndex === null) {
              return;
            }
            const index = parseInt(dataIndex, 10);
            const selectedItem = this.items[index];
            if (selectedItem.value !== this.value) {
              this.setValue(selectedItem.value);
              haptic.hapticSelectionEnd();
              this.hapticsStarted = false;
            }
          }, 250);
        });
      };
      /**
       * Wrap this in an raf so that the scroll callback
       * does not fire when component is initially shown.
       */
      helpers.raf(() => {
        el.addEventListener('scroll', scrollCallback);
        this.destroyScrollListener = () => {
          el.removeEventListener('scroll', scrollCallback);
        };
      });
    };
  }
  valueChange() {
    if (this.isColumnVisible) {
      /**
       * Only scroll the active item into view when the picker column
       * is actively visible to the user.
       */
      this.scrollActiveItemIntoView();
    }
  }
  /**
   * Only setup scroll listeners
   * when the picker is visible, otherwise
   * the container will have a scroll
   * height of 0px.
   */
  componentWillLoad() {
    const visibleCallback = (entries) => {
      var _a;
      const ev = entries[0];
      if (ev.isIntersecting) {
        this.isColumnVisible = true;
        /**
         * Because this initial call to scrollActiveItemIntoView has to fire before
         * the scroll listener is set up, we need to manage the active class manually.
         */
        const oldActive = helpers.getElementRoot(this.el).querySelector(`.${PICKER_COL_ACTIVE}`);
        oldActive === null || oldActive === void 0 ? void 0 : oldActive.classList.remove(PICKER_COL_ACTIVE);
        this.scrollActiveItemIntoView();
        (_a = this.activeItem) === null || _a === void 0 ? void 0 : _a.classList.add(PICKER_COL_ACTIVE);
        this.initializeScrollListener();
      }
      else {
        this.isColumnVisible = false;
        if (this.destroyScrollListener) {
          this.destroyScrollListener();
          this.destroyScrollListener = undefined;
        }
      }
    };
    new IntersectionObserver(visibleCallback, { threshold: 0.01 }).observe(this.el);
    const parentEl = this.el.closest('ion-picker-internal');
    if (parentEl !== null) {
      parentEl.addEventListener('ionInputModeChange', (ev) => this.inputModeChange(ev));
    }
  }
  componentDidRender() {
    var _a;
    const { activeItem, items, isColumnVisible, value } = this;
    if (isColumnVisible) {
      if (activeItem) {
        this.scrollActiveItemIntoView();
      }
      else if (((_a = items[0]) === null || _a === void 0 ? void 0 : _a.value) !== value) {
        /**
         * If the picker column does not have an active item and the current value
         * does not match the first item in the picker column, that means
         * the value is out of bounds. In this case, we assign the value to the
         * first item to match the scroll position of the column.
         *
         */
        this.setValue(items[0].value);
      }
    }
  }
  /** @internal  */
  async scrollActiveItemIntoView() {
    const activeEl = this.activeItem;
    if (activeEl) {
      this.centerPickerItemInView(activeEl, false);
    }
  }
  setValue(value) {
    const { items } = this;
    this.value = value;
    const findItem = items.find((item) => item.value === value);
    if (findItem) {
      this.ionChange.emit(findItem);
    }
  }
  get activeItem() {
    return helpers.getElementRoot(this.el).querySelector(`.picker-item[data-value="${this.value}"]`);
  }
  render() {
    const { items, color, isActive, numericInput } = this;
    const mode = ionicGlobal.getIonMode(this);
    return (index.h(index.Host, { tabindex: 0, class: theme.createColorClasses(color, {
        [mode]: true,
        ['picker-column-active']: isActive,
        ['picker-column-numeric-input']: numericInput,
      }) }, index.h("div", { class: "picker-item picker-item-empty" }, "\u00A0"), index.h("div", { class: "picker-item picker-item-empty" }, "\u00A0"), index.h("div", { class: "picker-item picker-item-empty" }, "\u00A0"), items.map((item, index$1) => {
      return (index.h("div", { class: "picker-item", "data-value": item.value, "data-index": index$1, onClick: (ev) => {
          this.centerPickerItemInView(ev.target);
        } }, item.text));
    }), index.h("div", { class: "picker-item picker-item-empty" }, "\u00A0"), index.h("div", { class: "picker-item picker-item-empty" }, "\u00A0"), index.h("div", { class: "picker-item picker-item-empty" }, "\u00A0")));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "value": ["valueChange"]
  }; }
};
const PICKER_COL_ACTIVE = 'picker-item-active';
PickerColumnInternal.style = {
  ios: pickerColumnInternalIosCss,
  md: pickerColumnInternalMdCss
};

const pickerInternalIosCss = ":host{display:flex;position:relative;align-items:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;z-index:1;pointer-events:none}:host .picker-before{left:0;top:0;height:83px}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host .picker-after{left:0;top:116px;height:84px}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host .picker-highlight{border-radius:8px;left:0;right:0;top:50%;bottom:0;margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;transform:translateY(-50%);z-index:-1}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host .picker-highlight{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column-internal:first-of-type){text-align:start}:host ::slotted(ion-picker-column-internal:last-of-type){text-align:end}:host .picker-before{background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%)}:host .picker-after{background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%)}:host .picker-highlight{background:var(--ion-color-step-150, #eeeeef)}";

const pickerInternalMdCss = ":host{display:flex;position:relative;align-items:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;z-index:1;pointer-events:none}:host .picker-before{left:0;top:0;height:83px}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host .picker-after{left:0;top:116px;height:84px}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host .picker-highlight{border-radius:8px;left:0;right:0;top:50%;bottom:0;margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;transform:translateY(-50%);z-index:-1}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host .picker-highlight{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column-internal:first-of-type){text-align:start}:host ::slotted(ion-picker-column-internal:last-of-type){text-align:end}:host .picker-before{background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0) 90%)}:host .picker-after{background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 30%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0) 90%)}";

const PickerInternal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ionInputModeChange = index.createEvent(this, "ionInputModeChange", 7);
    this.useInputMode = false;
    this.isInHighlightBounds = (ev) => {
      const { highlightEl } = this;
      if (!highlightEl) {
        return false;
      }
      const bbox = highlightEl.getBoundingClientRect();
      /**
       * Check to see if the user clicked
       * outside the bounds of the highlight.
       */
      const outsideX = ev.clientX < bbox.left || ev.clientX > bbox.right;
      const outsideY = ev.clientY < bbox.top || ev.clientY > bbox.bottom;
      if (outsideX || outsideY) {
        return false;
      }
      return true;
    };
    /**
     * If we are no longer focused
     * on a picker column, then we should
     * exit input mode. An exception is made
     * for the input in the picker since having
     * that focused means we are still in input mode.
     */
    this.onFocusOut = (ev) => {
      const { relatedTarget } = ev;
      if (!relatedTarget || (relatedTarget.tagName !== 'ION-PICKER-COLUMN-INTERNAL' && relatedTarget !== this.inputEl)) {
        this.exitInputMode();
      }
    };
    /**
     * When picker columns receive focus
     * the parent picker needs to determine
     * whether to enter/exit input mode.
     */
    this.onFocusIn = (ev) => {
      const { target } = ev;
      /**
       * Due to browser differences in how/when focus
       * is dispatched on certain elements, we need to
       * make sure that this function only ever runs when
       * focusing a picker column.
       */
      if (target.tagName !== 'ION-PICKER-COLUMN-INTERNAL') {
        return;
      }
      /**
       * If we have actionOnClick
       * then this means the user focused
       * a picker column via mouse or
       * touch (i.e. a PointerEvent). As a result,
       * we should not enter/exit input mode
       * until the click event has fired, which happens
       * after the `focusin` event.
       *
       * Otherwise, the user likely focused
       * the column using their keyboard and
       * we should enter/exit input mode automatically.
       */
      if (!this.actionOnClick) {
        const columnEl = target;
        const allowInput = columnEl.numericInput;
        if (allowInput) {
          this.enterInputMode(columnEl, false);
        }
        else {
          this.exitInputMode();
        }
      }
    };
    /**
     * On click we need to run an actionOnClick
     * function that has been set in onPointerDown
     * so that we enter/exit input mode correctly.
     */
    this.onClick = () => {
      const { actionOnClick } = this;
      if (actionOnClick) {
        actionOnClick();
        this.actionOnClick = undefined;
      }
    };
    /**
     * Clicking a column also focuses the column on
     * certain browsers, so we use onPointerDown
     * to tell the onFocusIn function that users
     * are trying to click the column rather than
     * focus the column using the keyboard. When the
     * user completes the click, the onClick function
     * runs and runs the actionOnClick callback.
     */
    this.onPointerDown = (ev) => {
      const { useInputMode, inputModeColumn, el } = this;
      if (this.isInHighlightBounds(ev)) {
        /**
         * If we were already in
         * input mode, then we should determine
         * if we tapped a particular column and
         * should switch to input mode for
         * that specific column.
         */
        if (useInputMode) {
          /**
           * If we tapped a picker column
           * then we should either switch to input
           * mode for that column or all columns.
           * Otherwise we should exit input mode
           * since we just tapped the highlight and
           * not a column.
           */
          if (ev.target.tagName === 'ION-PICKER-COLUMN-INTERNAL') {
            /**
             * If user taps 2 different columns
             * then we should just switch to input mode
             * for the new column rather than switching to
             * input mode for all columns.
             */
            if (inputModeColumn && inputModeColumn === ev.target) {
              this.actionOnClick = () => {
                this.enterInputMode();
              };
            }
            else {
              this.actionOnClick = () => {
                this.enterInputMode(ev.target);
              };
            }
          }
          else {
            this.actionOnClick = () => {
              this.exitInputMode();
            };
          }
          /**
           * If we were not already in
           * input mode, then we should
           * enter input mode for all columns.
           */
        }
        else {
          /**
           * If there is only 1 numeric input column
           * then we should skip multi column input.
           */
          const columns = el.querySelectorAll('ion-picker-column-internal.picker-column-numeric-input');
          const columnEl = columns.length === 1 ? ev.target : undefined;
          this.actionOnClick = () => {
            this.enterInputMode(columnEl);
          };
        }
        return;
      }
      this.actionOnClick = () => {
        this.exitInputMode();
      };
    };
    /**
     * Enters input mode to allow
     * for text entry of numeric values.
     * If on mobile, we focus a hidden input
     * field so that the on screen keyboard
     * is brought up. When tabbing using a
     * keyboard, picker columns receive an outline
     * to indicate they are focused. As a result,
     * we should not focus the hidden input as it
     * would cause the outline to go away, preventing
     * users from having any visual indication of which
     * column is focused.
     */
    this.enterInputMode = (columnEl, focusInput = true) => {
      const { inputEl, el } = this;
      if (!inputEl) {
        return;
      }
      /**
       * Only active input mode if there is at
       * least one column that accepts numeric input.
       */
      const hasInputColumn = el.querySelector('ion-picker-column-internal.picker-column-numeric-input');
      if (!hasInputColumn) {
        return;
      }
      /**
       * If columnEl is undefined then
       * it is assumed that all numeric pickers
       * are eligible for text entry.
       * (i.e. hour and minute columns)
       */
      this.useInputMode = true;
      this.inputModeColumn = columnEl;
      /**
       * Users with a keyboard and mouse can
       * activate input mode where the input is
       * focused as well as when it is not focused,
       * so we need to make sure we clean up any
       * old listeners.
       */
      if (focusInput) {
        if (this.destroyKeypressListener) {
          this.destroyKeypressListener();
          this.destroyKeypressListener = undefined;
        }
        inputEl.focus();
      }
      else {
        el.addEventListener('keypress', this.onKeyPress);
        this.destroyKeypressListener = () => {
          el.removeEventListener('keypress', this.onKeyPress);
        };
      }
      this.emitInputModeChange();
    };
    this.exitInputMode = () => {
      const { inputEl, useInputMode } = this;
      if (!useInputMode || !inputEl) {
        return;
      }
      this.useInputMode = false;
      this.inputModeColumn = undefined;
      inputEl.blur();
      inputEl.value = '';
      if (this.destroyKeypressListener) {
        this.destroyKeypressListener();
        this.destroyKeypressListener = undefined;
      }
      this.emitInputModeChange();
    };
    this.onKeyPress = (ev) => {
      const { inputEl } = this;
      if (!inputEl) {
        return;
      }
      const parsedValue = parseInt(ev.key, 10);
      /**
       * Only numbers should be allowed
       */
      if (!Number.isNaN(parsedValue)) {
        inputEl.value += ev.key;
        this.onInputChange();
      }
    };
    this.selectSingleColumn = () => {
      const { inputEl, inputModeColumn, singleColumnSearchTimeout } = this;
      if (!inputEl || !inputModeColumn) {
        return;
      }
      const values = inputModeColumn.items;
      /**
       * If users pause for a bit, the search
       * value should be reset similar to how a
       * <select> behaves. So typing "34", waiting,
       * then typing "5" should select "05".
       */
      if (singleColumnSearchTimeout) {
        clearTimeout(singleColumnSearchTimeout);
      }
      this.singleColumnSearchTimeout = setTimeout(() => {
        inputEl.value = '';
        this.singleColumnSearchTimeout = undefined;
      }, 1000);
      /**
       * For values that are longer than 2 digits long
       * we should shift the value over 1 character
       * to the left. So typing "456" would result in "56".
       * TODO: If we want to support more than just
       * time entry, we should update this value to be
       * the max length of all of the picker items.
       */
      if (inputEl.value.length >= 3) {
        const startIndex = inputEl.value.length - 2;
        const newString = inputEl.value.substring(startIndex);
        inputEl.value = newString;
        this.selectSingleColumn();
        return;
      }
      /**
       * Checking the value of the input gets priority
       * first. For example, if the value of the input
       * is "1" and we entered "2", then the complete value
       * is "12" and we should select hour 12.
       *
       * Regex removes any leading zeros from values like "02".
       */
      const findItemFromCompleteValue = values.find(({ text }) => text.replace(/^0+/, '') === inputEl.value);
      if (findItemFromCompleteValue) {
        inputModeColumn.value = findItemFromCompleteValue.value;
        return;
      }
      /**
       * If we typed "56" to get minute 56, then typed "7",
       * we should select "07" as "567" is not a valid minute.
       */
      if (inputEl.value.length === 2) {
        const changedCharacter = inputEl.value.substring(inputEl.value.length - 1);
        inputEl.value = changedCharacter;
        this.selectSingleColumn();
      }
    };
    /**
     * Searches a list of column items for a particular
     * value. This is currently used for numeric values.
     * The zeroBehavior can be set to account for leading
     * or trailing zeros when looking at the item text.
     */
    this.searchColumn = (colEl, value, zeroBehavior = 'start') => {
      const behavior = zeroBehavior === 'start' ? /^0+/ : /0$/;
      const item = colEl.items.find(({ text }) => text.replace(behavior, '') === value);
      if (item) {
        colEl.value = item.value;
      }
    };
    this.selectMultiColumn = () => {
      const { inputEl, el } = this;
      if (!inputEl) {
        return;
      }
      const numericPickers = Array.from(el.querySelectorAll('ion-picker-column-internal')).filter((col) => col.numericInput);
      const firstColumn = numericPickers[0];
      const lastColumn = numericPickers[1];
      let value = inputEl.value;
      let minuteValue;
      switch (value.length) {
        case 1:
          this.searchColumn(firstColumn, value);
          break;
        case 2:
          /**
           * If the first character is `0` or `1` it is
           * possible that users are trying to type `09`
           * or `11` into the hour field, so we should look
           * at that first.
           */
          const firstCharacter = inputEl.value.substring(0, 1);
          value = firstCharacter === '0' || firstCharacter === '1' ? inputEl.value : firstCharacter;
          this.searchColumn(firstColumn, value);
          /**
           * If only checked the first value,
           * we can check the second value
           * for a match in the minutes column
           */
          if (value.length === 1) {
            minuteValue = inputEl.value.substring(inputEl.value.length - 1);
            this.searchColumn(lastColumn, minuteValue, 'end');
          }
          break;
        case 3:
          /**
           * If the first character is `0` or `1` it is
           * possible that users are trying to type `09`
           * or `11` into the hour field, so we should look
           * at that first.
           */
          const firstCharacterAgain = inputEl.value.substring(0, 1);
          value =
            firstCharacterAgain === '0' || firstCharacterAgain === '1'
              ? inputEl.value.substring(0, 2)
              : firstCharacterAgain;
          this.searchColumn(firstColumn, value);
          /**
           * If only checked the first value,
           * we can check the second value
           * for a match in the minutes column
           */
          minuteValue = value.length === 1 ? inputEl.value.substring(1) : inputEl.value.substring(2);
          this.searchColumn(lastColumn, minuteValue, 'end');
          break;
        case 4:
          /**
           * If the first character is `0` or `1` it is
           * possible that users are trying to type `09`
           * or `11` into the hour field, so we should look
           * at that first.
           */
          const firstCharacterAgainAgain = inputEl.value.substring(0, 1);
          value =
            firstCharacterAgainAgain === '0' || firstCharacterAgainAgain === '1'
              ? inputEl.value.substring(0, 2)
              : firstCharacterAgainAgain;
          this.searchColumn(firstColumn, value);
          /**
           * If only checked the first value,
           * we can check the second value
           * for a match in the minutes column
           */
          const minuteValueAgain = value.length === 1
            ? inputEl.value.substring(1, inputEl.value.length)
            : inputEl.value.substring(2, inputEl.value.length);
          this.searchColumn(lastColumn, minuteValueAgain, 'end');
          break;
        default:
          const startIndex = inputEl.value.length - 4;
          const newString = inputEl.value.substring(startIndex);
          inputEl.value = newString;
          this.selectMultiColumn();
          break;
      }
    };
    /**
     * Searches the value of the active column
     * to determine which value users are trying
     * to select
     */
    this.onInputChange = () => {
      const { useInputMode, inputEl, inputModeColumn } = this;
      if (!useInputMode || !inputEl) {
        return;
      }
      if (inputModeColumn) {
        this.selectSingleColumn();
      }
      else {
        this.selectMultiColumn();
      }
    };
    /**
     * Emit ionInputModeChange. Picker columns
     * listen for this event to determine whether
     * or not their column is "active" for text input.
     */
    this.emitInputModeChange = () => {
      const { useInputMode, inputModeColumn } = this;
      this.ionInputModeChange.emit({
        useInputMode,
        inputModeColumn,
      });
    };
  }
  componentWillLoad() {
    helpers.getElementRoot(this.el).addEventListener('focusin', this.onFocusIn);
    helpers.getElementRoot(this.el).addEventListener('focusout', this.onFocusOut);
  }
  render() {
    return (index.h(index.Host, { onPointerDown: (ev) => this.onPointerDown(ev), onClick: () => this.onClick() }, index.h("input", { "aria-hidden": "true", tabindex: -1, inputmode: "numeric", type: "number", ref: (el) => (this.inputEl = el), onInput: () => this.onInputChange(), onBlur: () => this.exitInputMode() }), index.h("div", { class: "picker-before" }), index.h("div", { class: "picker-after" }), index.h("div", { class: "picker-highlight", ref: (el) => (this.highlightEl = el) }), index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
};
PickerInternal.style = {
  ios: pickerInternalIosCss,
  md: pickerInternalMdCss
};

exports.ion_picker_column_internal = PickerColumnInternal;
exports.ion_picker_internal = PickerInternal;
