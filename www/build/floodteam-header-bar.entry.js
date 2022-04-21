import { r as registerInstance, h } from './index-0fc14935.js';

const headerBarCss = ".single li:hover a{background:#54B6E7 !important}a{font-size:12px;text-transform:uppercase}.nav-area{background:var(--ion-color-medium-contrast)}.nav-area:after{content:\"\";clear:both;display:block}.nav-area ul{list-style:none;margin:0}.nav-area>ul>li{float:left;position:relative}.nav-area ul li a{text-decoration:none;color:rgb(0, 0, 0);padding:1px 5px 10px 5px;display:block}.nav-area ul ul{position:absolute;padding:0;display:none;min-width:120px;top:100%;left:0;z-index:99999}.nav-area ul li:hover a{background:var(--ion-color-medium-contrast)}.nav-area ul li:hover>ul{display:block;background:#54B6E7}.nav-area ul ul li:hover a{background:#54B6E7}.nav-area ul ul li{position:relative}.nav-area ul ul ul{top:0;left:100%}.nav-area ul ul ul li:hover a{background:#54B6E7}";

let headerBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("ion-header", null, h("nav", { class: "nav-area" }, h("ion-icon", { style: {
        padding: "2px 15px 2px 25px",
        height: "120px",
        width: "150px",
      }, src: "/assets/logo/logo-light-mode.svg" }), h("ul", null, h("li", null, h("a", { href: "#" }, "What We Do \u2304 "), h("ul", null, h("li", null, h("a", { href: "#" }, "Sub-1")), h("li", null, h("a", { href: "#" }, "Sub-2")), h("li", null, h("a", { href: "#" }, "Sub-3")))), h("li", null, h("a", { href: "#" }, "Who We Are \u2304"), h("ul", null, h("li", null, h("a", { href: "#" }, "Sub-1")), h("li", null, h("a", { href: "#" }, "Sub-2")), h("li", null, h("a", { href: "#" }, "Sub-3")))), h("li", null, h("a", { href: "#" }, "Locations \u2304"), h("ul", null, h("li", null, h("a", { href: "#" }, "Sub-1")), h("li", null, h("a", { href: "#" }, "Sub-2")), h("li", null, h("a", { href: "#" }, "Sub-3")))), h("li", null, h("a", { href: "#" }, "Resources \u2304"), h("ul", null, h("li", null, h("a", { href: "#" }, "Sub-1")), h("li", null, h("a", { href: "#" }, "Sub-2")), h("li", null, h("a", { href: "#" }, "Sub-3")))), h("li", null, h("a", { href: "#" }, "Join Our Team \u2304"), h("ul", null, h("li", null, h("a", { href: "#" }, "Sub-1")), h("li", null, h("a", { href: "#" }, "Sub-2")), h("li", null, h("a", { href: "#" }, "Sub-3")))), h("li", null, h("a", { href: "#" }, "Franchise \u2304"), h("ul", null, h("li", null, h("a", { href: "#" }, "Sub-1")), h("li", null, h("a", { href: "#" }, "Sub-2")), h("li", null, h("a", { href: "#" }, "Sub-3"))))), h("ul", { class: "single" }, h("li", null, h("a", { href: "#" }, "App")), h("li", null, h("a", { href: "#" }, "Contact"))))));
  }
};
headerBar.style = headerBarCss;

export { headerBar as floodteam_header_bar };
