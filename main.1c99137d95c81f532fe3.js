(()=>{"use strict";var t;!function(t){t.searchButton=".search-wrapper__button",t.searchInput=".search-wrapper__input",t.mainWrapper=".main-wrapper",t.toast=".toast",t.backHomeButton=".back-home-button"}(t||(t={}));const e=t;class n{listnerSearchButton(t){const n=document.querySelector(e.searchButton),r=document.querySelector(e.searchInput);null==n||n.addEventListener("click",(()=>{const{value:n}=r;this.validationInput(n)?t(n):(((t,n)=>{if(!document.querySelector(e.toast)){const r=`<span>${t}</span>`;M.toast({html:r}),document.querySelector(e.toast).style.backgroundColor=n}})("Input letters","red"),r.focus())}))}validationInput(t){return!!t.trim()}listnerBackHomeButton(t){document.querySelector(e.backHomeButton).addEventListener("click",(()=>{t()}))}}class r{constructor(){this.baseUrl="https://rickandmortyapi.com/api/character/"}fetchData(t=""){return e=this,n=void 0,a=function*(){try{const e=yield fetch(`${this.baseUrl}?name=${t}`);return yield e.json()}catch(t){return console.error(t),null}},new((r=void 0)||(r=Promise))((function(t,c){function s(t){try{o(a.next(t))}catch(t){c(t)}}function i(t){try{o(a.throw(t))}catch(t){c(t)}}function o(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(t){t(n)}))).then(s,i)}o((a=a.apply(e,n||[])).next())}));var e,n,r,a}}class a{constructor(){this.api=new r}getCards(t){return e=this,n=void 0,a=function*(){const e=yield this.api.fetchData(t);return null==e?void 0:e.results},new((r=void 0)||(r=Promise))((function(t,c){function s(t){try{o(a.next(t))}catch(t){c(t)}}function i(t){try{o(a.throw(t))}catch(t){c(t)}}function o(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(t){t(n)}))).then(s,i)}o((a=a.apply(e,n||[])).next())}));var e,n,r,a}}class c{renderCards(t){const n=document.querySelector(e.mainWrapper);t.length>1?n.innerHTML=this.cardsTemplate(t):n.innerHTML=this.messageTemplate("Cards not found...")}cardsTemplate(t){return t.map((t=>`\n        <div class="fetch-card">\n          <img class="fetch-card__picture" src=${t.image} alt=${t.name} />\n          <h4 class="fetch-card__name">${t.name}</h4>\n        </div>\n      `)).join("")}messageTemplate(t){return`\n    <div class="message-template">${t}</div>\n    `}}class s{constructor(){this.getSearchValue=t=>{this.getCards(t)},this.model=new a,this.view=new c}init(){this.getCards()}getCards(t){return e=this,n=void 0,a=function*(){this.view.renderCards([]);const e=yield this.model.getCards(t);e&&this.view.renderCards(e)},new((r=void 0)||(r=Promise))((function(t,c){function s(t){try{o(a.next(t))}catch(t){c(t)}}function i(t){try{o(a.throw(t))}catch(t){c(t)}}function o(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(t){t(n)}))).then(s,i)}o((a=a.apply(e,n||[])).next())}));var e,n,r,a}}(new class{constructor(){this.view=new n,this.cards=new s,this.view.listnerSearchButton(this.cards.getSearchValue),this.view.listnerBackHomeButton(this.cards.getSearchValue)}initApp(){this.cards.init()}}).initApp()})();