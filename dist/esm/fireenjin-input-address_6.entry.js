import { r as registerInstance, d as createEvent, B as Build, h, c as getElement, H as Host } from './index-4531603b.js';
import { L as Loader } from './loader-d392e06d.js';
import { g as getIonMode } from './ionic-global-89c58f88.js';
import { c as componentOnReady } from './helpers-fa85189e.js';

const inputAddressCss = "fireenjin-input-address ion-label{font-size:12px;font-weight:bold;font-family:arial;display:block;background:transparent;text-align:left;padding:0 0 8px 0}fireenjin-input-address .invalid .input-wrapper{border-bottom-color:var(--ion-color-danger) !important}fireenjin-input-address .invalid .label{color:var(--ion-color-danger) !important}fireenjin-input-address ion-item{position:relative;border-bottom:none !important;box-shadow:none !important}fireenjin-input-address ion-item.is-hidden{display:none}fireenjin-input-address ion-item ion-label{color:var(--ion-color-medium) !important}fireenjin-input-address ion-item ion-input{border:none;box-shadow:none !important;outline:none !important;font-size:16px;font-weight:normal !important}fireenjin-input-address ion-item.item-has-focus{--border-width:0;border-color:var(--ion-color-primary)}fireenjin-input-address ion-item.item-has-focus ion-label{color:var(--ion-color-primary) !important}fireenjin-input-address ion-input.autocomplete-field{--padding-top:13px !important}fireenjin-input-address ion-button{text-decoration:none;position:absolute;right:0px;top:3px;z-index:3}fireenjin-input-address ion-button .button-inner{font-size:14px;color:var(--ion-color-primary);padding-right:25px}fireenjin-input-address ion-button ion-icon{position:absolute;top:6px;right:10px;color:var(--ion-color-primary)}fireenjin-input-address .manual-fields{width:100%;padding-top:5px}fireenjin-input-address .manual-fields ion-input{--padding-top:8px;--padding-bottom:8px;--padding-start:17px}fireenjin-input-address .manual-fields ion-grid floodbot-state-autocomplete,fireenjin-input-address .manual-fields ion-grid ion-input{display:block;min-width:150px}fireenjin-input-address .autocomplete-field{display:block;padding-top:8px}fireenjin-input-address .manual-fields ion-grid,fireenjin-input-address .manual-fields ion-grid ion-row ion-col{padding-bottom:0 !important;padding-top:0 !important}fireenjin-input-address .manual-fields ion-input:not(.zip-input){border-bottom:1px solid var(--ion-color-light-shade, #eee) !important}";

const InputAddress = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionInput = createEvent(this, "ionInput", 7);
    this.fireenjinAddressMode = createEvent(this, "fireenjinAddressMode", 7);
    this.fireenjinUpdateAutoHeight = createEvent(this, "fireenjinUpdateAutoHeight", 7);
    /**
     * The value of the input field
     */
    this.value = {};
    this.manualEntry = false;
  }
  onChange() {
    if (this.manualEntry) {
      setTimeout(() => {
        const fullAddress = `${this.streetInputEl.value},${this.unitInputEl.value ? ` ${this.unitInputEl.value},` : ""} ${this.cityInputEl.value}, ${this.stateSelectEl.querySelector("ion-select").value} ${this.zipInputEl.value}`;
        this.autocompleteFieldEl.value = fullAddress;
        this.value.full = fullAddress;
        this.ionInput.emit({
          name: this.name,
          value: this.value,
        });
      }, 100);
    }
  }
  async loadGoogleMaps(options) {
    const loader = new Loader(this.googleMapsKey, Object.assign({ libraries: ["places"] }, options));
    return loader.load();
  }
  async componentDidLoad() {
    var _a;
    if (!(Build === null || Build === void 0 ? void 0 : Build.isBrowser))
      return;
    if (!((_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.maps) && !this.googleMapsKey)
      return;
    this.google = (window === null || window === void 0 ? void 0 : window.google) || (await this.loadGoogleMaps());
    const inputEl = await this.autocompleteFieldEl.getInputElement();
    setTimeout(() => {
      inputEl.setAttribute("autocomplete", "new-password");
      const autocomplete = new this.google.maps.places.Autocomplete(inputEl, {
        types: ["address"],
      });
      this.google.maps.event.addListener(autocomplete, "place_changed", () => {
        var _a, _b, _c, _d, _e, _f, _g;
        this.place = autocomplete.getPlace();
        if (!this.value) {
          this.value = {};
        }
        this.value.full = this.place.formatted_address;
        let streetAddress = "";
        this.value.placeId = (_a = this.place) === null || _a === void 0 ? void 0 : _a.place_id;
        this.value.lat = (_d = (_c = (_b = this.place) === null || _b === void 0 ? void 0 : _b.geometry) === null || _c === void 0 ? void 0 : _c.location) === null || _d === void 0 ? void 0 : _d.lat();
        this.value.lng = (_g = (_f = (_e = this.place) === null || _e === void 0 ? void 0 : _e.geometry) === null || _f === void 0 ? void 0 : _f.location) === null || _g === void 0 ? void 0 : _g.lng();
        this.place.address_components.map((field, index) => {
          if (field.types.indexOf("street_number") !== -1) {
            streetAddress = field.long_name;
          }
          if (field.types.indexOf("route") !== -1) {
            streetAddress = streetAddress + " " + field.long_name;
          }
          if (field.types.indexOf("locality") !== -1) {
            this.value.city = field.long_name;
          }
          if (field.types.indexOf("postal_code") !== -1) {
            this.value.zip = field.short_name;
          }
          if (field.types.indexOf("administrative_area_level_1") !== -1) {
            this.value.state = field.short_name;
          }
          if (this.place.address_components.length === index + 1) {
            this.value.street = streetAddress;
          }
          if (index === this.place.address_components.length - 1) {
            setTimeout(() => {
              this.ionInput.emit({
                name: this.name,
                value: this.value,
              });
            }, 10);
          }
        });
      });
    }, 200);
  }
  toggleManualEntry() {
    this.manualEntry = !this.manualEntry;
    if (this.manualEntry) {
      this.value = {
        city: this.cityInputEl.value,
        country: "US",
        full: this.autocompleteFieldEl.value,
        state: this.stateSelectEl.value,
        street: this.streetInputEl.value,
        unit: this.unitInputEl.value,
        zip: this.zipInputEl.value,
      };
    }
    this.fireenjinAddressMode.emit({ maual: this.manualEntry });
    this.fireenjinUpdateAutoHeight.emit();
    setTimeout(() => {
      this.addressAutocompleteEl.forceUpdate();
    }, 0);
  }
  render() {
    const value = this.value ? this.value : {};
    return [
      h("ion-item", { lines: this.lines, class: { "is-hidden": !this.manualEntry } }, h("ion-label", { position: this.labelPosition }, this.label), h("div", { class: "manual-fields" }, h("ion-input", { ref: (el) => (this.streetInputEl = el), type: "text", name: this.name + ".street", placeholder: "Street Address", value: value.street, required: this.required && this.manualEntry }), h("ion-input", { ref: (el) => (this.unitInputEl = el), type: "text", name: this.name + ".unit", placeholder: "Street Address 2", value: value.unit }), h("ion-input", { ref: (el) => (this.cityInputEl = el), type: "text", name: this.name + ".city", placeholder: "City", value: value.city, required: this.required && this.manualEntry }), h("ion-grid", null, h("ion-row", null, h("ion-col", { size: "6" }, h("fireenjin-input-state", { ref: (el) => (this.stateSelectEl = el), name: this.name + ".state", value: value.state, placeholder: "State" })), h("ion-col", { size: "6" }, h("ion-input", { ref: (el) => (this.zipInputEl = el), class: "zip-input", type: "tel", name: this.name + ".zip", min: "0", max: "999999", value: value.zip, placeholder: "Zip Code", required: this.required && this.manualEntry }))))), h("ion-button", { fill: "clear", color: "primary", onClick: () => this.toggleManualEntry(), slot: "end" }, "Search")),
      h("ion-item", { class: { "is-hidden": this.manualEntry } }, h("ion-label", { position: "stacked" }, this.label), h("ion-input", { ref: (el) => (this.autocompleteFieldEl = el), class: "autocomplete-field", type: "text", placeholder: this.placeholder, value: value.full, autocomplete: "off", required: this.required && !this.manualEntry }), h("ion-button", { fill: "clear", color: "primary", onClick: () => this.toggleManualEntry(), slot: "end" }, "Manual")),
    ];
  }
  get addressAutocompleteEl() { return getElement(this); }
};
InputAddress.style = inputAddressCss;

const inputFileCss = "fireenjin-input-file ion-card{width:95%;margin:15px auto;background-color:var(--ion-color-light-tint);--background-color:var(--ion-color-light-tint);padding:0}fireenjin-input-file ion-card.drag-over{opacity:0.8}fireenjin-input-file ion-card ion-item{padding:5px 0;background-color:var(--ion-color-light-tint);--ion-color-base:var(--ion-color-light-tint);--background:var(--ion-color-light-tint);pointer-events:none}fireenjin-input-file ion-card ion-item ion-icon{height:50px;width:50px;color:var(--ion-color-medium)}fireenjin-input-file ion-card ion-item h2{font-size:20px;color:var(--ion-color-dark);margin:0}fireenjin-input-file ion-card ion-item p{color:var(--ion-color-darker-grey);margin:0}fireenjin-input-file ion-card:hover{cursor:pointer}fireenjin-input-file ion-card:hover h2{color:var(--ion-color-primary)}fireenjin-input-file ion-card:hover ion-icon{color:var(--ion-color-primary)}fireenjin-input-file input{float:left;height:0;width:0;visibility:hidden}";

const InputFile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fireenjinUpload = createEvent(this, "fireenjinUpload", 7);
    this.ionInput = createEvent(this, "ionInput", 7);
    this.type = "file";
    this.disabled = false;
    /**
     * The endpoint to upload to
     */
    this.endpoint = "upload";
    this.uploadData = {};
    this.dragOver = false;
  }
  onFileChange() {
    if (!this.value)
      return false;
    this.ionInput.emit({
      name: this.name,
      value: this.value,
    });
  }
  async openFile() {
    const fileInputEl = this.fileUploaderEl.querySelector('input[type="file"]');
    fileInputEl.click();
    return fileInputEl;
  }
  uploadFile(file) {
    this.isLoading = true;
    if (!window.FileReader)
      return;
    const reader = new FileReader();
    reader.onload = async (event) => {
      if (event.target.readyState != 2)
        return;
      if (event.target.error) {
        alert("Error while reading file");
        return;
      }
      this.fireenjinUpload.emit({
        event,
        name: this.name,
        endpoint: this.endpoint,
        data: Object.assign({
          id: this.documentId,
          type: this.type,
          fileName: this.fileName,
          file,
          path: this.path,
          encodedContent: event.target.result,
        }, this.uploadData),
      });
    };
    reader.readAsDataURL(file);
  }
  selectFile(event) {
    this.isLoading = true;
    const file = event.target.files[0];
    this.selectedFile = file.name;
    this.uploadFile(file);
  }
  onDrop(event) {
    event.preventDefault();
    if (event.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (var i = 0; i < event.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (event.dataTransfer.items[i].kind === "file") {
          var file = event.dataTransfer.items[i].getAsFile();
          this.selectedFile = file.name;
          this.uploadFile(file);
        }
      }
    }
    else {
      // Use DataTransfer interface to access the file(s)
      for (var i = 0; i < event.dataTransfer.files.length; i++) {
        const file = event.dataTransfer.files[i];
        this.selectedFile = file.name;
        this.uploadFile(file);
        console.log("... file[" + i + "].name = " + file.name);
      }
    }
    this.dragOver = false;
  }
  onDrag(event) {
    event.preventDefault();
  }
  onDragOver(event) {
    event.preventDefault();
  }
  onDragEnter(event) {
    console.log("Show UI to drop file", event);
    this.dragOver = true;
  }
  onDragLeave(event) {
    console.log("Hide UI to drop file", event);
    this.dragOver = false;
  }
  render() {
    return (h("ion-card", { disabled: this.disabled, class: { "drag-over": this.dragOver }, onDragEnter: (event) => this.onDragEnter(event), onDragOver: (event) => this.onDragOver(event), onDrag: (event) => this.onDrag(event), onDrop: (event) => this.onDrop(event), onDragLeave: (event) => this.onDragLeave(event), onClick: () => this.openFile() }, h("ion-item", { lines: "none" }, h("ion-icon", { name: this.icon ? this.icon : "document", slot: "start" }), h("div", null, h("h2", null, this.dragOver
      ? "Drop File Here"
      : this.label
        ? this.label
        : "Upload a File"), h("p", null, this.selectedFile
      ? this.selectedFile
      : this.defaultValue
        ? this.defaultValue
        : "Select a letterhead"))), h("input", { disabled: this.disabled, type: "file", onChange: (event) => this.selectFile(event), accept: this.accept ? this.accept : null, value: "blah" })));
  }
  get fileUploaderEl() { return getElement(this); }
  static get watchers() { return {
    "value": ["onFileChange"]
  }; }
};
InputFile.style = inputFileCss;

async function resizeImage(base64image, width = 1080, height = 1080) {
  return new Promise((resolve, reject) => {
    try {
      let img = new Image();
      img.src = base64image;
      img.onload = () => {
        let base64ResizedImage;
        // Check if the image require resize at all
        if (img.height <= height && img.width <= width) {
          base64ResizedImage = base64image;
          // TODO: Call method to do something with the resize image
        }
        else {
          // Make sure the width and height preserve the original aspect ratio and adjust if needed
          if (img.height > img.width) {
            width = Math.floor(height * (img.width / img.height));
          }
          else {
            height = Math.floor(width * (img.height / img.width));
          }
          let resizingCanvas = document.createElement("canvas");
          let resizingCanvasContext = resizingCanvas.getContext("2d");
          // Start with original image size
          resizingCanvas.width = img.width;
          resizingCanvas.height = img.height;
          // Draw the original image on the (temp) resizing canvas
          resizingCanvasContext.drawImage(img, 0, 0, resizingCanvas.width, resizingCanvas.height);
          let curImageDimensions = {
            width: Math.floor(img.width),
            height: Math.floor(img.height),
          };
          let halfImageDimensions = {
            width: null,
            height: null,
          };
          // Quickly reduce the dize by 50% each time in few iterations until the size is less then
          // 2x time the target size - the motivation for it, is to reduce the aliasing that would have been
          // created with direct reduction of very big image to small image
          while (curImageDimensions.width * 0.5 > width) {
            // Reduce the resizing canvas by half and refresh the image
            halfImageDimensions.width = Math.floor(curImageDimensions.width * 0.5);
            halfImageDimensions.height = Math.floor(curImageDimensions.height * 0.5);
            resizingCanvasContext.drawImage(resizingCanvas, 0, 0, curImageDimensions.width, curImageDimensions.height, 0, 0, halfImageDimensions.width, halfImageDimensions.height);
            curImageDimensions.width = halfImageDimensions.width;
            curImageDimensions.height = halfImageDimensions.height;
          }
          // Now do final resize for the resizingCanvas to meet the dimension requirments
          // directly to the output canvas, that will output the final image
          let outputCanvas = document.createElement("canvas");
          let outputCanvasContext = outputCanvas.getContext("2d");
          outputCanvas.width = width;
          outputCanvas.height = height;
          outputCanvasContext.drawImage(resizingCanvas, 0, 0, curImageDimensions.width, curImageDimensions.height, 0, 0, width, height);
          // output the canvas pixels as an image. params: format, quality
          base64ResizedImage = outputCanvas.toDataURL("image/jpeg", 1);
          // TODO: Call method to do something with the resize image
        }
        resolve(base64ResizedImage);
      };
    }
    catch (error) {
      reject("Error resizing image!");
    }
  });
}

const inputPhotoCss = "fireenjin-input-photo .upload-wrapper{display:block;margin:0 auto;height:150px;width:150px;position:relative}fireenjin-input-photo .upload-wrapper .photo{position:relative;background:var(--ion-color-medium);border-radius:4px;border:2px solid var(--ion-color-light);height:150px;width:150px;margin:0 auto;display:block;background-repeat:no-repeat;background-size:cover;background-position:center;color:var(--ion-color-medium);font-size:75px;line-height:150px;text-align:center;font-weight:bolder}fireenjin-input-photo .upload-wrapper .photo.is-loading:before{border-radius:4px}fireenjin-input-photo .upload-wrapper .photo.is-loading:after{border-radius:4px}fireenjin-input-photo .upload-wrapper .photo:hover{cursor:pointer;border-color:var(--ion-color-primary)}fireenjin-input-photo input[type=\"file\"]{height:0;width:0;visibility:hidden;opacity:0;pointer-events:none;float:left}";

const InputPhoto = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fireenjinUpload = createEvent(this, "fireenjinUpload", 7);
    this.ionInput = createEvent(this, "ionInput", 7);
    /**
     * Is the uploader disabled
     */
    this.disabled = false;
    /**
     * Should the photo uploader show the button
     */
    this.showButton = false;
    /**
     * Text to display on the photo upload button
     */
    this.buttonText = "Edit Image";
    /**
     * The type of photo being uploaded
     */
    this.type = "photo";
    /**
     * The endpoint to upload to
     */
    this.endpoint = "upload";
    /**
     * Allow uploading multiple
     */
    this.multiple = false;
    /**
     * Resize photos before uploading
     */
    this.resize = false;
  }
  onSuccess(event) {
    if (event.detail.endpoint !== "upload" || event.detail.name !== this.name)
      return false;
    this.loading = false;
  }
  onPhotoChange() {
    this.updatePhoto();
  }
  componentDidLoad() {
    if (!(Build === null || Build === void 0 ? void 0 : Build.isBrowser))
      return;
    this.updatePhoto();
  }
  updatePhoto() {
    this.photoUrl = this.value
      ? this.value
      : this.fallback
        ? this.fallback
        : null;
    if (this.value) {
      this.ionInput.emit({
        name: this.name,
        value: this.value,
      });
    }
  }
  async triggerFileInput(_event) {
    if (this.disabled) {
      return false;
    }
    const fileInputEl = this.photoUploaderEl.querySelector('input[type="file"]');
    fileInputEl.click();
  }
  selectFile(event) {
    var _a;
    for (const file of ((_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.files) || []) {
      this.uploadPhoto(file);
    }
  }
  uploadPhoto(file) {
    this.loading = true;
    if (!window.FileReader)
      return;
    const reader = new FileReader();
    reader.onload = async (event) => {
      var _a, _b;
      if (event.target.readyState != 2)
        return;
      if (event.target.error) {
        alert("Error while reading file");
        return;
      }
      this.fireenjinUpload.emit({
        event,
        endpoint: this.endpoint,
        name: this.name,
        data: {
          id: this.documentId,
          type: this.type,
          path: this.path,
          file,
          fileName: this.fileName,
          encodedContent: this.resize
            ? resizeImage((_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.result)
            : (_b = event === null || event === void 0 ? void 0 : event.target) === null || _b === void 0 ? void 0 : _b.result,
        },
      });
    };
    reader.readAsDataURL(file);
  }
  onDrop(event) {
    event.preventDefault();
    this.uploadPhoto(event.dataTransfer.files[0]);
  }
  onDrag(event) {
    event.preventDefault();
  }
  onDragEnter() {
    this.showButton = true;
  }
  onDragLeave() {
    this.showButton = false;
  }
  render() {
    return (h("div", null, h("div", { class: "upload-wrapper" }, h("div", { class: this.loading ? "photo is-loading" : "photo", style: {
        backgroundImage: this.photoUrl ? `url('${this.photoUrl}')` : null,
      }, onClick: (event) => this.triggerFileInput(event), onDrop: (event) => this.onDrop(event), onDragOver: (event) => this.onDrag(event), onDragEnter: () => this.onDragEnter(), onDragLeave: () => this.onDragLeave() }, !this.photoUrl && this.initials ? this.initials : null), this.showButton ? (h("ion-button", { fill: "clear", expand: "block", size: "small", onClick: (event) => this.triggerFileInput(event) }, this.buttonText, h("ion-icon", { name: "image", slot: "end" }))) : null), h("slot", null), h("input", { type: "file", onChange: (event) => this.selectFile(event), accept: "image/*", multiple: this.multiple })));
  }
  get photoUploaderEl() { return getElement(this); }
  static get watchers() { return {
    "value": ["onPhotoChange"]
  }; }
};
InputPhoto.style = inputPhotoCss;

const radiosCss = "";

const Radios = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fireenjinFetch = createEvent(this, "fireenjinFetch", 7);
    this.disabled = false;
    this.allowEmptySelection = false;
    this.lines = "none";
    this.labelPosition = "stacked";
    this.limit = 15;
    this.radioSlot = "start";
    this.results = [];
  }
  onSuccess(event) {
    var _a, _b, _c;
    if (((_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.name) !== "radios" ||
      event.detail.endpoint !== this.endpoint)
      return;
    this.results = ((_c = (_b = event === null || event === void 0 ? void 0 : event.detail) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.results)
      ? event.detail.data.results
      : [];
    setTimeout(() => {
      this.value = this.value;
    }, 200);
  }
  fetchData() {
    if (!this.endpoint)
      return;
    this.fireenjinFetch.emit({
      name: "radios",
      endpoint: this.endpoint,
      dataPropsMap: this.dataPropsMap
        ? this.dataPropsMap
        : this.resultsKey
          ? { [this.resultsKey]: "results" }
          : null,
      params: Object.assign({ data: Object.assign(Object.assign(Object.assign({}, (this.query ? { query: this.query } : {})), (this.orderBy ? { orderBy: this.orderBy } : {})), { limit: this.limit ? this.limit : 15 }) }, (this.params ? this.params : {})),
    });
  }
  componentWillLoad() {
    this.fetchData();
  }
  render() {
    return (h("ion-list", null, h("ion-radio-group", { name: this.name, value: this.value, allowEmptySelection: this.allowEmptySelection }, h("ion-list-header", { position: this.labelPosition }, this.label), (this.options ? this.options : []).map((option) => this.optionEl ? (this.optionEl(option)) : (h("ion-item", { lines: this.lines }, h("ion-label", null, (option === null || option === void 0 ? void 0 : option.label) || (option === null || option === void 0 ? void 0 : option.value)), h("ion-radio", { mode: this.mode, color: (option === null || option === void 0 ? void 0 : option.color) || this.color, disabled: this.disabled || option.disabled, slot: (option === null || option === void 0 ? void 0 : option.slot) || this.radioSlot, value: (option === null || option === void 0 ? void 0 : option.value) || null })))), (this.results ? this.results : []).map((result) => this.optionEl ? (this.optionEl(result)) : (h("ion-item", { lines: this.lines }, h("ion-label", null, (result === null || result === void 0 ? void 0 : result.label) || (result === null || result === void 0 ? void 0 : result.name) || (result === null || result === void 0 ? void 0 : result.value) || (result === null || result === void 0 ? void 0 : result.id)), h("ion-radio", { mode: this.mode, color: (result === null || result === void 0 ? void 0 : result.color) || this.color, disabled: this.disabled || (result === null || result === void 0 ? void 0 : result.disabled), slot: (result === null || result === void 0 ? void 0 : result.slot) || this.radioSlot, value: (result === null || result === void 0 ? void 0 : result.value) || (result === null || result === void 0 ? void 0 : result.id) || null })))))));
  }
};
Radios.style = radiosCss;

const slideCss = "ion-slide{display:block;width:100%;height:100%}.slide-zoom{display:block;width:100%;text-align:center}.swiper-slide{display:flex;position:relative;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%;font-size:18px;text-align:center;box-sizing:border-box}.swiper-slide img{width:auto;max-width:100%;height:auto;max-height:100%}";

const Slide = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { class: {
        [mode]: true,
        'swiper-slide': true,
        'swiper-zoom-container': true,
      } }));
  }
};
Slide.style = slideCss;

const slidesIosCss = ".swiper-container{margin:0 auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-no-flexbox .swiper-slide{float:left}.swiper-container-vertical{height:100%}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform, -webkit-transform;-webkit-box-sizing:content-box;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0px, 0, 0);transform:translate3d(0px, 0, 0)}.swiper-container-multirow>.swiper-wrapper{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:100%;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform, -webkit-transform}.swiper-invisible-blank-slide{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-transition-property:height, -webkit-transform;transition-property:height, -webkit-transform;-o-transition-property:transform, height;transition-property:transform, height;transition-property:transform, height, -webkit-transform}.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-wrapper,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-cube-shadow{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-slide-shadow-bottom{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));background-image:-webkit-linear-gradient(right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:-o-linear-gradient(right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));background-image:-webkit-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:-o-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));background-image:-webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:-o-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));background-image:-webkit-linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:-o-linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))}.swiper-container-wp8-horizontal,.swiper-container-wp8-horizontal>.swiper-wrapper{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-container-wp8-vertical,.swiper-container-wp8-vertical>.swiper-wrapper{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-button-prev,.swiper-button-next{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:center;background-repeat:no-repeat}.swiper-button-prev.swiper-button-disabled,.swiper-button-next.swiper-button-disabled{opacity:0.35;cursor:auto;pointer-events:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");left:10px;right:auto}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");right:10px;left:auto}.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:300ms opacity;-o-transition:300ms opacity;transition:300ms opacity;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-fraction,.swiper-pagination-custom,.swiper-container-horizontal>.swiper-pagination-bullets{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(0.33);-ms-transform:scale(0.33);transform:scale(0.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(0.66);-ms-transform:scale(0.66);transform:scale(0.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(0.33);-ms-transform:scale(0.33);transform:scale(0.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(0.66);-ms-transform:scale(0.66);transform:scale(0.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(0.33);-ms-transform:scale(0.33);transform:scale(0.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:0.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;-webkit-box-shadow:none;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:#007aff}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0px, -50%, 0);transform:translate3d(0px, -50%, 0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;-webkit-transition:200ms top, 200ms -webkit-transform;transition:200ms top, 200ms -webkit-transform;-o-transition:200ms transform, 200ms top;transition:200ms transform, 200ms top;transition:200ms transform, 200ms top, 200ms -webkit-transform}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:200ms left, 200ms -webkit-transform;transition:200ms left, 200ms -webkit-transform;-o-transition:200ms transform, 200ms left;transition:200ms transform, 200ms left;transition:200ms transform, 200ms left, 200ms -webkit-transform}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:200ms right, 200ms -webkit-transform;transition:200ms right, 200ms -webkit-transform;-o-transition:200ms transform, 200ms right;transition:200ms transform, 200ms right;transition:200ms transform, 200ms right, 200ms -webkit-transform}.swiper-pagination-progressbar{background:rgba(0, 0, 0, 0.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;-ms-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-vertical>.swiper-pagination-progressbar,.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:4px;height:100%;left:0;top:0}.swiper-pagination-white .swiper-pagination-bullet-active{background:#ffffff}.swiper-pagination-progressbar.swiper-pagination-white{background:rgba(255, 255, 255, 0.25)}.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill{background:#ffffff}.swiper-pagination-black .swiper-pagination-bullet-active{background:#000000}.swiper-pagination-progressbar.swiper-pagination-black{background:rgba(0, 0, 0, 0.25)}.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill{background:#000000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0, 0, 0, 0.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0, 0, 0, 0.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center}.swiper-zoom-container>img,.swiper-zoom-container>svg,.swiper-zoom-container>canvas{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12, end) infinite;animation:swiper-preloader-spin 1s steps(12, end) infinite}.swiper-lazy-preloader:after{display:block;content:\"\";width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;-o-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-prev,.swiper-container-cube .swiper-slide-next+.swiper-slide{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-top,.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;background:#000;opacity:0.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-top,.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-coverflow .swiper-wrapper{-ms-perspective:1200px}ion-slides{display:block;user-select:none}.swiper-pagination-bullet{background:var(--bullet-background)}.swiper-pagination-bullet-active{background:var(--bullet-background-active)}.swiper-pagination-progressbar{background:var(--progress-bar-background)}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--progress-bar-background-active)}.swiper-scrollbar{background:var(--scroll-bar-background)}.swiper-scrollbar-drag{background:var(--scroll-bar-background-active)}.slides-ios{--bullet-background:var(--ion-color-step-200, #cccccc);--bullet-background-active:var(--ion-color-primary, #3880ff);--progress-bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.25);--progress-bar-background-active:var(--ion-color-primary-shade, #3171e0);--scroll-bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);--scroll-bar-background-active:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.5)}";

const slidesMdCss = ".swiper-container{margin:0 auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-no-flexbox .swiper-slide{float:left}.swiper-container-vertical{height:100%}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform, -webkit-transform;-webkit-box-sizing:content-box;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0px, 0, 0);transform:translate3d(0px, 0, 0)}.swiper-container-multirow>.swiper-wrapper{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:100%;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform, -webkit-transform}.swiper-invisible-blank-slide{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-transition-property:height, -webkit-transform;transition-property:height, -webkit-transform;-o-transition-property:transform, height;transition-property:transform, height;transition-property:transform, height, -webkit-transform}.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-wrapper,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-cube-shadow{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-slide-shadow-bottom{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));background-image:-webkit-linear-gradient(right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:-o-linear-gradient(right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));background-image:-webkit-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:-o-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));background-image:-webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:-o-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));background-image:-webkit-linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:-o-linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))}.swiper-container-wp8-horizontal,.swiper-container-wp8-horizontal>.swiper-wrapper{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-container-wp8-vertical,.swiper-container-wp8-vertical>.swiper-wrapper{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-button-prev,.swiper-button-next{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:center;background-repeat:no-repeat}.swiper-button-prev.swiper-button-disabled,.swiper-button-next.swiper-button-disabled{opacity:0.35;cursor:auto;pointer-events:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");left:10px;right:auto}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");right:10px;left:auto}.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:300ms opacity;-o-transition:300ms opacity;transition:300ms opacity;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-fraction,.swiper-pagination-custom,.swiper-container-horizontal>.swiper-pagination-bullets{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(0.33);-ms-transform:scale(0.33);transform:scale(0.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(0.66);-ms-transform:scale(0.66);transform:scale(0.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(0.33);-ms-transform:scale(0.33);transform:scale(0.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(0.66);-ms-transform:scale(0.66);transform:scale(0.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(0.33);-ms-transform:scale(0.33);transform:scale(0.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:0.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;-webkit-box-shadow:none;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:#007aff}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0px, -50%, 0);transform:translate3d(0px, -50%, 0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;-webkit-transition:200ms top, 200ms -webkit-transform;transition:200ms top, 200ms -webkit-transform;-o-transition:200ms transform, 200ms top;transition:200ms transform, 200ms top;transition:200ms transform, 200ms top, 200ms -webkit-transform}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:200ms left, 200ms -webkit-transform;transition:200ms left, 200ms -webkit-transform;-o-transition:200ms transform, 200ms left;transition:200ms transform, 200ms left;transition:200ms transform, 200ms left, 200ms -webkit-transform}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:200ms right, 200ms -webkit-transform;transition:200ms right, 200ms -webkit-transform;-o-transition:200ms transform, 200ms right;transition:200ms transform, 200ms right;transition:200ms transform, 200ms right, 200ms -webkit-transform}.swiper-pagination-progressbar{background:rgba(0, 0, 0, 0.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;-ms-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-vertical>.swiper-pagination-progressbar,.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:4px;height:100%;left:0;top:0}.swiper-pagination-white .swiper-pagination-bullet-active{background:#ffffff}.swiper-pagination-progressbar.swiper-pagination-white{background:rgba(255, 255, 255, 0.25)}.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill{background:#ffffff}.swiper-pagination-black .swiper-pagination-bullet-active{background:#000000}.swiper-pagination-progressbar.swiper-pagination-black{background:rgba(0, 0, 0, 0.25)}.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill{background:#000000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0, 0, 0, 0.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0, 0, 0, 0.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center}.swiper-zoom-container>img,.swiper-zoom-container>svg,.swiper-zoom-container>canvas{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12, end) infinite;animation:swiper-preloader-spin 1s steps(12, end) infinite}.swiper-lazy-preloader:after{display:block;content:\"\";width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;-o-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-prev,.swiper-container-cube .swiper-slide-next+.swiper-slide{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-top,.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;background:#000;opacity:0.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-top,.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-coverflow .swiper-wrapper{-ms-perspective:1200px}ion-slides{display:block;user-select:none}.swiper-pagination-bullet{background:var(--bullet-background)}.swiper-pagination-bullet-active{background:var(--bullet-background-active)}.swiper-pagination-progressbar{background:var(--progress-bar-background)}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--progress-bar-background-active)}.swiper-scrollbar{background:var(--scroll-bar-background)}.swiper-scrollbar-drag{background:var(--scroll-bar-background-active)}.slides-md{--bullet-background:var(--ion-color-step-200, #cccccc);--bullet-background-active:var(--ion-color-primary, #3880ff);--progress-bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.25);--progress-bar-background-active:var(--ion-color-primary-shade, #3171e0);--scroll-bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);--scroll-bar-background-active:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.5)}";

const Slides = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionSlidesDidLoad = createEvent(this, "ionSlidesDidLoad", 7);
    this.ionSlideTap = createEvent(this, "ionSlideTap", 7);
    this.ionSlideDoubleTap = createEvent(this, "ionSlideDoubleTap", 7);
    this.ionSlideWillChange = createEvent(this, "ionSlideWillChange", 7);
    this.ionSlideDidChange = createEvent(this, "ionSlideDidChange", 7);
    this.ionSlideNextStart = createEvent(this, "ionSlideNextStart", 7);
    this.ionSlidePrevStart = createEvent(this, "ionSlidePrevStart", 7);
    this.ionSlideNextEnd = createEvent(this, "ionSlideNextEnd", 7);
    this.ionSlidePrevEnd = createEvent(this, "ionSlidePrevEnd", 7);
    this.ionSlideTransitionStart = createEvent(this, "ionSlideTransitionStart", 7);
    this.ionSlideTransitionEnd = createEvent(this, "ionSlideTransitionEnd", 7);
    this.ionSlideDrag = createEvent(this, "ionSlideDrag", 7);
    this.ionSlideReachStart = createEvent(this, "ionSlideReachStart", 7);
    this.ionSlideReachEnd = createEvent(this, "ionSlideReachEnd", 7);
    this.ionSlideTouchStart = createEvent(this, "ionSlideTouchStart", 7);
    this.ionSlideTouchEnd = createEvent(this, "ionSlideTouchEnd", 7);
    this.swiperReady = false;
    this.swiper = new Promise((resolve) => {
      this.readySwiper = resolve;
    });
    /**
     * Options to pass to the swiper instance.
     * See https://swiperjs.com/swiper-api for valid options
     */
    this.options = {}; // SwiperOptions;  // TODO
    /**
     * If `true`, show the pagination.
     */
    this.pager = false;
    /**
     * If `true`, show the scrollbar.
     */
    this.scrollbar = false;
  }
  async optionsChanged() {
    if (this.swiperReady) {
      const swiper = await this.getSwiper();
      if (swiper === null || swiper === void 0 ? void 0 : swiper.params) {
        Object.assign(swiper.params, this.options);
        await this.update();
      }
    }
  }
  componentWillLoad() {
    console.warn(`[Deprecation Warning]: ion-slides has been deprecated and will be removed in Ionic Framework v7.0. We recommend using the framework-specific integrations that Swiper.js provides, allowing for faster bug fixes and an improved developer experience. See https://ionicframework.com/docs/api/slides for more information including migration steps.`);
  }
  connectedCallback() {
    {
      const mut = (this.mutationO = new MutationObserver(() => {
        if (this.swiperReady) {
          this.update();
        }
      }));
      mut.observe(this.el, {
        childList: true,
        subtree: true,
      });
      componentOnReady(this.el, () => {
        this.initSwiper();
      });
    }
  }
  disconnectedCallback() {
    if (this.mutationO) {
      this.mutationO.disconnect();
      this.mutationO = undefined;
    }
  }
  /**
   * Update the underlying slider implementation. Call this if you've added or removed
   * child slides.
   */
  async update() {
    const [swiper] = await Promise.all([this.getSwiper(), waitForSlides(this.el)]);
    swiper.update();
  }
  /**
   * Force swiper to update its height (when autoHeight is enabled) for the duration
   * equal to 'speed' parameter.
   *
   * @param speed The transition duration (in ms).
   */
  async updateAutoHeight(speed) {
    const swiper = await this.getSwiper();
    swiper.updateAutoHeight(speed);
  }
  /**
   * Transition to the specified slide.
   *
   * @param index The index of the slide to transition to.
   * @param speed The transition duration (in ms).
   * @param runCallbacks If true, the transition will produce [Transition/SlideChange][Start/End] transition events.
   */
  async slideTo(index, speed, runCallbacks) {
    const swiper = await this.getSwiper();
    swiper.slideTo(index, speed, runCallbacks);
  }
  /**
   * Transition to the next slide.
   *
   * @param speed The transition duration (in ms).
   * @param runCallbacks If true, the transition will produce [Transition/SlideChange][Start/End] transition events.
   */
  async slideNext(speed, runCallbacks) {
    const swiper = await this.getSwiper();
    swiper.slideNext(speed, runCallbacks);
  }
  /**
   * Transition to the previous slide.
   *
   * @param speed The transition duration (in ms).
   * @param runCallbacks If true, the transition will produce the [Transition/SlideChange][Start/End] transition events.
   */
  async slidePrev(speed, runCallbacks) {
    const swiper = await this.getSwiper();
    swiper.slidePrev(speed, runCallbacks);
  }
  /**
   * Get the index of the active slide.
   */
  async getActiveIndex() {
    const swiper = await this.getSwiper();
    return swiper.activeIndex;
  }
  /**
   * Get the index of the previous slide.
   */
  async getPreviousIndex() {
    const swiper = await this.getSwiper();
    return swiper.previousIndex;
  }
  /**
   * Get the total number of slides.
   */
  async length() {
    const swiper = await this.getSwiper();
    return swiper.slides.length;
  }
  /**
   * Get whether or not the current slide is the last slide.
   */
  async isEnd() {
    const swiper = await this.getSwiper();
    return swiper.isEnd;
  }
  /**
   * Get whether or not the current slide is the first slide.
   */
  async isBeginning() {
    const swiper = await this.getSwiper();
    return swiper.isBeginning;
  }
  /**
   * Start auto play.
   */
  async startAutoplay() {
    const swiper = await this.getSwiper();
    if (swiper.autoplay) {
      swiper.autoplay.start();
    }
  }
  /**
   * Stop auto play.
   */
  async stopAutoplay() {
    const swiper = await this.getSwiper();
    if (swiper.autoplay) {
      swiper.autoplay.stop();
    }
  }
  /**
   * Lock or unlock the ability to slide to the next slide.
   *
   * @param lock If `true`, disable swiping to the next slide.
   */
  async lockSwipeToNext(lock) {
    const swiper = await this.getSwiper();
    swiper.allowSlideNext = !lock;
  }
  /**
   * Lock or unlock the ability to slide to the previous slide.
   *
   * @param lock If `true`, disable swiping to the previous slide.
   */
  async lockSwipeToPrev(lock) {
    const swiper = await this.getSwiper();
    swiper.allowSlidePrev = !lock;
  }
  /**
   * Lock or unlock the ability to slide to the next or previous slide.
   *
   * @param lock If `true`, disable swiping to the next and previous slide.
   */
  async lockSwipes(lock) {
    const swiper = await this.getSwiper();
    swiper.allowSlideNext = !lock;
    swiper.allowSlidePrev = !lock;
    swiper.allowTouchMove = !lock;
  }
  /**
   * Get the Swiper instance.
   * Use this to access the full Swiper API.
   * See https://swiperjs.com/swiper-api for all API options.
   */
  async getSwiper() {
    return this.swiper;
  }
  async initSwiper() {
    const finalOptions = this.normalizeOptions();
    // init swiper core
    // eslint-disable-next-line
    // @ts-ignore
    const { Swiper } = await import('./swiper.bundle-b6a959de.js');
    await waitForSlides(this.el);
    const swiper = new Swiper(this.el, finalOptions);
    this.swiperReady = true;
    this.readySwiper(swiper);
  }
  normalizeOptions() {
    // Base options, can be changed
    // TODO Add interface SwiperOptions
    const swiperOptions = {
      effect: undefined,
      direction: 'horizontal',
      initialSlide: 0,
      loop: false,
      parallax: false,
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 300,
      slidesPerColumn: 1,
      slidesPerColumnFill: 'column',
      slidesPerGroup: 1,
      centeredSlides: false,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      touchEventsTarget: 'container',
      autoplay: false,
      freeMode: false,
      freeModeMomentum: true,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: true,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: false,
      freeModeMinimumVelocity: 0.02,
      autoHeight: false,
      setWrapperSize: false,
      zoom: {
        maxRatio: 3,
        minRatio: 1,
        toggle: false,
      },
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: true,
      touchStartPreventDefault: false,
      shortSwipes: true,
      longSwipes: true,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: true,
      threshold: 0,
      touchMoveStopPropagation: true,
      touchReleaseOnEdges: false,
      iOSEdgeSwipeDetection: false,
      iOSEdgeSwipeThreshold: 20,
      resistance: true,
      resistanceRatio: 0.85,
      watchSlidesProgress: false,
      watchSlidesVisibility: false,
      preventClicks: true,
      preventClicksPropagation: true,
      slideToClickedSlide: false,
      loopAdditionalSlides: 0,
      noSwiping: true,
      runCallbacksOnInit: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      flipEffect: {
        slideShadows: true,
        limitRotation: true,
      },
      cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      fadeEffect: {
        crossFade: false,
      },
      a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        firstSlideMessage: 'This is the first slide',
        lastSlideMessage: 'This is the last slide',
      },
    };
    if (this.pager) {
      swiperOptions.pagination = {
        el: this.paginationEl,
        type: 'bullets',
        clickable: false,
        hideOnClick: false,
      };
    }
    if (this.scrollbar) {
      swiperOptions.scrollbar = {
        el: this.scrollbarEl,
        hide: true,
      };
    }
    // Keep the event options separate, we dont want users
    // overwriting these
    const eventOptions = {
      on: {
        init: () => {
          setTimeout(() => {
            this.ionSlidesDidLoad.emit();
            // Forces the swiper instance to update after initializing.
            this.update();
          }, 20);
        },
        slideChangeTransitionStart: this.ionSlideWillChange.emit,
        slideChangeTransitionEnd: this.ionSlideDidChange.emit,
        slideNextTransitionStart: this.ionSlideNextStart.emit,
        slidePrevTransitionStart: this.ionSlidePrevStart.emit,
        slideNextTransitionEnd: this.ionSlideNextEnd.emit,
        slidePrevTransitionEnd: this.ionSlidePrevEnd.emit,
        transitionStart: this.ionSlideTransitionStart.emit,
        transitionEnd: this.ionSlideTransitionEnd.emit,
        sliderMove: this.ionSlideDrag.emit,
        reachBeginning: this.ionSlideReachStart.emit,
        reachEnd: this.ionSlideReachEnd.emit,
        touchStart: this.ionSlideTouchStart.emit,
        touchEnd: this.ionSlideTouchEnd.emit,
        tap: this.ionSlideTap.emit,
        doubleTap: this.ionSlideDoubleTap.emit,
      },
    };
    const customEvents = !!this.options && !!this.options.on ? this.options.on : {};
    // merge "on" event listeners, while giving our event listeners priority
    const mergedEventOptions = { on: Object.assign(Object.assign({}, customEvents), eventOptions.on) };
    // Merge the base, user options, and events together then pas to swiper
    return Object.assign(Object.assign(Object.assign({}, swiperOptions), this.options), mergedEventOptions);
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { class: {
        [`${mode}`]: true,
        // Used internally for styling
        [`slides-${mode}`]: true,
        'swiper-container': true,
      } }, h("div", { class: "swiper-wrapper" }, h("slot", null)), this.pager && h("div", { class: "swiper-pagination", ref: (el) => (this.paginationEl = el) }), this.scrollbar && h("div", { class: "swiper-scrollbar", ref: (el) => (this.scrollbarEl = el) })));
  }
  static get assetsDirs() { return ["swiper"]; }
  get el() { return getElement(this); }
  static get watchers() { return {
    "options": ["optionsChanged"]
  }; }
};
const waitForSlides = (el) => {
  return Promise.all(Array.from(el.querySelectorAll('ion-slide')).map((s) => new Promise((resolve) => componentOnReady(s, resolve))));
};
Slides.style = {
  ios: slidesIosCss,
  md: slidesMdCss
};

export { InputAddress as fireenjin_input_address, InputFile as fireenjin_input_file, InputPhoto as fireenjin_input_photo, Radios as fireenjin_radios, Slide as ion_slide, Slides as ion_slides };
