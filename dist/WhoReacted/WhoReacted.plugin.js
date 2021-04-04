/**!
 * @name WhoReacted
 * @description Shows the avatars of the users who reacted to a message.
 * @version 1.2.1
 * @author Jaime Filho
 * @authorId 289112759948410881
 * @invite z6Yx9A8VDR
 * @website https://github.com/jaimeadf/BetterDiscordPlugins/tree/release/src/WhoReacted
 * @source https://github.com/jaimeadf/BetterDiscordPlugins/tree/release/src/WhoReacted
 * @updateUrl https://raw.githubusercontent.com/jaimeadf/BetterDiscordPlugins/release/dist/WhoReacted/WhoReacted.plugin.js
 */(()=>{"use strict";var e={280:(e,t,r)=>{r.d(t,{Z:()=>d});const s=global.BdApi.React;var n=r.n(s),o=r(635);const i=o.BdApi.findModuleByProps("Store","connectStores"),a=o.BdApi.findModuleByProps("getReactions","_changeCallbacks"),c=o.BdApi.findModule((e=>"VoiceUserSummaryItem"===function(e){let t,r=e[0],s=1;for(;s<e.length;){const n=e[s],o=e[s+1];if(s+=2,("optionalAccess"===n||"optionalCall"===n)&&null==r)return;"access"===n||"optionalAccess"===n?(t=r,r=o(r)):"call"!==n&&"optionalCall"!==n||(r=o(((...e)=>r.call(t,...e))),t=void 0)}return r}([e,"optionalAccess",e=>e.default,"optionalAccess",e=>e.displayName]))).default,l=i.connectStores([a],(({message:e,emoji:t})=>{return{users:Object.values((r=a.getReactions(e.getChannelId(),e.id,t),s=()=>({}),null!=r?r:s()))};var r,s}))((({count:e,max:t,users:r})=>n().createElement(c,{className:"bd-who-reacted-reactors",max:t,users:r,renderMoreUsers:function(r,s){return n().createElement("div",{className:`${s} bd-who-reacted-more-reactors`},"+",1+e-t)}})));function u(e){let t,r=e[0],s=1;for(;s<e.length;){const n=e[s],o=e[s+1];if(s+=2,("optionalAccess"===n||"optionalCall"===n)&&null==r)return;"access"===n||"optionalAccess"===n?(t=r,r=o(r)):"call"!==n&&"optionalCall"!==n||(r=o(((...e)=>r.call(t,...e))),t=void 0)}return r}const d=([e,t])=>{const{Settings:r,WebpackModules:s,PluginUtilities:o,Patcher:i,Toasts:a,DiscordSelectors:c,ReactTools:d,Utilities:h}=t,{SettingPanel:p,Textbox:g,Slider:m,Switch:f}=r,b=s.find((e=>"Reactions"===u([e,"optionalAccess",e=>e.default,"optionalAccess",e=>e.displayName]))).default;return class extends e{constructor(){super(),this.defaultSettings={maxUsersShown:6,reactionThreshold:10,userThreshold:100,useHighestUserCount:!0}}async onStart(){o.addStyle(this.getName(),".bd-who-reacted-reactors:not(:empty){margin-left:6px}.bd-who-reacted-reactors .bd-who-reacted-more-reactors{background-color:var(--background-tertiary);color:var(--text-normal);font-weight:500}\n"),await this.patchReaction()}onStop(){o.removeStyle(this.getName()),i.unpatchAll()}buildSettingsPanel(){return new p((()=>{this.saveSettings(),this.forceUpdateAllReactions()}),new g("Max users shown","The maximum number of users shown for each reaction emoji.",this.settings.maxUsersShown,(e=>{if(isNaN(e)||e<1||e>99)return a.error("Value must be a number between 1 and 99!");this.settings.maxUsersShown=parseInt(e)})),new m("Reaction threshold","Hides the reactors when the number of separate reactions is exceeded on a message. Set to 0 to disable.",0,20,this.settings.reactionThreshold,(e=>this.settings.reactionThreshold=e),{markers:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],stickToMarkers:!0}),new m("User threshold","Hides the reactors when their count is exceeded on a message. Set to 0 to disable.",0,1e4,this.settings.userThreshold,(e=>this.settings.userThreshold=e),{markers:[0,10,20,50,100,500,1e3,2e3,3e3,4e3,5e3,1e4],stickToMarkers:!0,equidistant:!0}),new f("Use highest user count","Uses the reaction with most reactors of a message for user threshold.",this.settings.useHighestUserCount,(e=>this.settings.useHighestUserCount=e)))}getSettingsPanel(){return this.buildSettingsPanel().getElement()}async patchReaction(){const e=await this.findReaction(),t=({reactions:e})=>{const{reactionThreshold:t,userThreshold:r,useHighestUserCount:s}=this.settings;if(0!==t&&e.length>t)return!1;if(0!==r){if((s?Math.max(...e.map((e=>e.count))):e.reduce(((e,t)=>e+t.count),0))>r)return!1}return!0};i.after(e.prototype,"render",((e,r,s)=>{const{message:o,emoji:i,count:a}=e.props;if(!t(o))return;const c=s.props.children;s.props.children=e=>{const t=c(e),r=t.props.children.props.children,s=r.props.children;return r.props.children=e=>{const t=s(e);return t.props.children.props.children.push(n().createElement(l,{message:o,emoji:i,count:a,max:this.settings.maxUsersShown})),t},t}})),this.forceUpdateAllReactions()}findReaction(){return new Promise((e=>{const t=document.querySelector(c.Reactions.reaction);if(t)return e(this.findReactionReactInstance(t).type);const r=i.after(b.prototype,"render",((t,s,n)=>{if(!n)return;const o=n.props.children[0][0];o&&(r(),e(o.type))}))}))}forceUpdateAllReactions(){for(const e of document.querySelectorAll(c.Reactions.reaction))this.findReactionReactInstance(e).stateNode.forceUpdate()}findReactionReactInstance(e){return h.findInTree(d.getReactInstance(e),(e=>"Reaction"===u([e,"optionalAccess",e=>e.type,"optionalAccess",e=>e.displayName])),{walkable:["return"]})}}}},127:(e,t,r)=>{r.d(t,{default:()=>f});const s=require("fs");var n=r.n(s);const o=require("path");var i=r.n(o);const a=require("request");var c=r.n(a);const l=require("electron");var u=r.n(l),d=r(635);const h=global.ZeresPluginLibrary;var p=r.n(h),g=r(280);const m={info:{name:"WhoReacted",description:"Shows the avatars of the users who reacted to a message.",version:"1.2.1",authors:[{name:"Jaime Filho",discord_id:"289112759948410881"}],github:"https://github.com/jaimeadf/BetterDiscordPlugins/tree/release/src/WhoReacted",github_raw:"https://raw.githubusercontent.com/jaimeadf/BetterDiscordPlugins/release/dist/WhoReacted/WhoReacted.plugin.js"}},f=p()?(0,g.Z)(p().buildPlugin(m)):class{constructor(){this._config=m}getName(){return m.info.name}getAuthor(){return m.info.authors.map((e=>e.name)).join(", ")}getDescription(){return m.info.description}getVersion(){return m.info.version}load(){d.BdApi.showConfirmationModal("Library plugin is needed",`The library plugin needed for ${m.info.name} is missing. Please click Download Now to install it.`,{confirmText:"Download",cancelText:"Cancel",onConfirm(){c().get("https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js",((e,t,r)=>{if(e)return u().shell.openExternal("https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js");n().writeFileSync(i().join(d.BdApi.Plugins.folder,"0PluginLibrary.plugin.js"),r)}))}})}start(){}stop(){}}},635:e=>{e.exports={BdApi:global.BdApi}}},t={};function r(s){var n=t[s];if(void 0!==n)return n.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r(280);var s=r(127);module.exports=s.default})();