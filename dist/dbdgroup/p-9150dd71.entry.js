import{r as o,h as n}from"./p-dfb43096.js";import{t}from"./p-5333cd76.js";import"./p-452b8205.js";import"./p-f2660943.js";import"./p-cdcfcafb.js";let i=class{constructor(n){o(this,n)}async presentToast(o){(await t.create({message:"Help yourself you fuck!",duration:2e3})).present()}onInput(o){"email"===o.target.name?this.email=o.target.value:"password"===o.target.name&&(this.password=o.target.value)}onSubmit(o){o.preventDefault(),console.log(this.email,this.password)}render(){return n("ion-content",null,n("form",null,n("ion-label",{position:"floating"},"E-mail"),n("ion-input",{type:"text",name:"email",value:""}),n("ion-label",{position:"floating"},"Password"),n("ion-input",{type:"password",name:"password",value:""}),n("ion-button",{type:"submit",color:"tertiary"},"Submit")),n("ion-grid",null,n("ion-row",null,n("ion-col",null,n("ion-card",null,n("div",{class:"choices"},n("ion-grid",null,n("ion-row",null,n("ion-col",null,n("ion-text",{color:"danger"},"Killer")),n("ion-col",null,n("ion-text",{color:"tertiary"},"Survivor")))))))),n("ion-grid",null,n("ion-row",null,n("ion-col",null,n("ion-button",{color:"medium",expand:"block",href:"",target:"_blank"},n("ion-icon",{slot:"start",name:"logo-steam"}),"Steam")),n("ion-col",null,n("ion-button",{color:"medium",expand:"block",href:"https://discord.com/channels/933969468227481690/933970601230618634",target:"_blank"},n("ion-icon",{slot:"start",name:"logo-discord"}),"Discord")),n("ion-col",null,n("ion-button",{expand:"block",onClick:o=>this.presentToast(o),target:"_blank"},n("ion-icon",{slot:"start",name:"help-circle"}),"Help"))))))}};i.style='ion-content{--background:none;background:url("/assets/dbd-background.png");background-position:center top;background-repeat:no-repeat;background-size:contain;background-color:rgb(66, 66, 66)}.choices{text-align:center;font-size:x-large}';export{i as app_signup}