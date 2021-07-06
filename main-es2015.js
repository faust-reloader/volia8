(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-top w3-bar w3-card-2 w3-wide w3-white w3-padding\">\r\n  <div class=\"w3-left\">\r\n    <a routerLink=\"/\" class=\"w3-button\" (click)=\"setTitle('Комбайн для уборки ягод')\"><b>СФГ</b> Воля</a>\r\n  </div>\r\n  <div class=\"w3-right\">\r\n    <a routerLink=\"/переработка_ягод_фруктов_овощей\" class=\"w3-button w3-bar-item\"\r\n       (click)=\"setTitle('Переработка ягод')\">Ягоды</a>\r\n    <a routerLink=\"/комбайны_для_уборки_бобовых\" class=\"w3-button w3-bar-item\" (click)=\"setTitle('Техника для уборки фасоли')\">Фасоль</a>\r\n    <a routerLink=\"/контакты\" class=\"w3-button w3-bar-item\" (click)=\"setTitle('Контакты')\">Контакты</a>\r\n  </div>\r\n</div>\r\n<router-outlet (deactivate)=\"onDeactivate()\"></router-outlet>\r\n<footer class=\"w3-center w3-black w3-padding\" id=contact>\r\n  <p>\r\n    <span class=\"w3-show-inline-block\">КФХ „Воля”, 08436, Украина, Киевская область, Переяслав-Хмельницкий р-н,</span>\r\n    <span class=\"w3-show-inline-block\">Стовпьязкий сельсовет, урочище Чаплин, ул. Озерная, дом.1,</span>\r\n    <br>\r\n    <span class=\"w3-show-inline-block\">Код 20597514, Р/р 26004000051182, МФО 300023, ПАТ «Укрсоцбанк»,</span>\r\n    <span class=\"w3-show-inline-block\">Тел/факс (04567) 5-84-14, 5-35-10, e-mail: <u>{{ 'sfgvolia'+'@'+'ukr.net' }}</u></span>\r\n  </p>\r\n</footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/bean/bean.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bean/bean.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-modal *ngIf=\"displayModal\" (close)=\"closeModal()\" [modalSrc]=displayModal></app-modal>-->\n<div class=\"w3-margin\">\n    <div class=\"w3-container w3-padding-32\" id=\"about\">\n        <h3 class=\"w3-border-bottom w3-border-light-grey w3-padding-12\">Комбайны для уборки бобовых культур</h3>\n        <p>Сельскохозяйственные техника для уборки фасоли, арахиса и других бобовых производства фирмы SWEERE\n            (Голландия)\n            отлично зарекомендовавшая себя на рынке.\n            Надежные фасолеуборочные комбайны, косилки для срезания бобовых, мини комбайны для уборки фасоли\n            являються ледером отрасли, при этом они легки в обслуживании и эксплуатации</p>\n    </div>\n\n    <div class=\"w3-col l3 m6 w3-padding\"\n         *ngFor=\"let harvester of harvestersArray; let i = index\"\n         (click)=\"showHarvester(i)\">\n        <div class=\"w3-display-container cursor-pointer\">\n            <img src=\"./assets/bean/{{ harvester.code }}_1.jpg\" alt=\"{{ harvester.name }}\" class=\"w3-image\">\n            <h3>{{ harvester.name }}</h3>\n            <p class=\"w3-green\">{{ harvester.func }}</p>\n            <p class=\"w3-small\">{{ harvester.desc }}</p>\n        </div>\n    </div>\n\n    <div *ngIf=\"needHarvester\" class=\"w3-modal w3-center w3-animate-opacity\">\n        <span class=\"w3-padding w3-yellow w3-hover-red w3-display-topright cursor-pointer\"\n              (click)=\"hideHarvester()\">&times;</span>\n        <span class=\"w3-button w3-display-left w3-padding w3-green cursor-pointer\"\n              (click)=\"changeHarvester(-1)\">&#10094;</span>\n        <span class=\"w3-button w3-display-right w3-padding w3-green cursor-pointer\"\n              (click)=\"changeHarvester(+1)\">&#10095;</span>\n        <div class=\"w3-modal-content w3-animate-zoom\">\n\n            <div class=\"w3-half w3-left w3-white\">\n                <img src=\"assets/bean/{{currentHarvester.code}}_{{currentHarvesterBigImg}}.jpg\" class=\"w3-image\">\n                <div *ngIf=\"currentHarvester.imgNum > 1\">\n                    <img *ngFor=\"let i of currentHarvesterImages\"\n                         src=\"assets/bean/{{currentHarvester.code}}_{{i}}.jpg\"\n                         class=\"w3-hover-opacity cursor-pointer w3-third w3-image\"\n                         (click)=\"changeImg(i)\">\n                </div>\n            </div>\n            <div class=\"w3-half w3-right w3-left-align w3-small w3-white w3-padding\">\n                <h3>{{ currentHarvester.name }}</h3>\n                <div [innerHTML]=\"currentHarvester.text | safe: 'html'\"></div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"w3-container w3-padding-32\">\n        <h3 class=\"w3-border-bottom w3-border-light-grey w3-padding-12\">Гарантия и обслуживание</h3>\n        <p>\n            Предоставляется гарантия на один сезон работы комбайна, а также послегарантийное\n            сервисное обслуживание, поставка запасных частей и бесплатное обучение комбайнеров на протяжении 20 часов.\n            Период поставки техники 90 дней. Возможна оплата частями.\n        </p>\n        <p>\n            Вас также могут заинтересовать\n            <a routerLink=\"/\" title=\"для уборки малины, черники, смородины\">универсальный ягодоуборочный комбайн</a>\n            или <a routerLink=\"/переработка_ягод_фруктов_овощей\" title=\"линии переработки\">оборудование по переработке\n            овощей, фруктов</a>\n        </p>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/kokan/kokan.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/kokan/kokan.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header message=\"Комбайн для уборки ягод\"></app-header>\r\n\r\n<div class=\"w3-center w3-indigo w3-padding\">\r\n  <h2>Воздушно-струйный ягодный комбайн BSK KOKAN 500s</h2>\r\n  <h3 class=\"w3-margin-bottom\">Простой сбор всех ягод без физического контакта и повреждений</h3>\r\n</div>\r\n\r\n<div class=\"w3-margin\">\r\n  <div class=\"w3-container w3-padding-16 w3-row\">\r\n    <div class=\"w3-half w3-padding w3-responsive\">\r\n      <h3>ПРЕИМУЩЕСТВА</h3>\r\n      <p>На мировом рынке представлены комбайны с механическим способом уборки ягод –\r\n        различные системы тряски, постукиваний и ударов. По сравнению с механической уборкой,\r\n        многофункциональный комбайн KOKAN 500s предлагает <b>воздушный сбор</b> и очистку плодов,\r\n        который имеет много преимуществ:</p>\r\n      <ul>\r\n        <li>простая регулировка рабочих параметров для уборки широкого ассортимента ягод,\r\n          таких как: малина, черника, ежевика, черная смородина;\r\n        <li>селективный сбор только зрелых плодов;\r\n        <li>не вредит самому растению;\r\n        <li>не ломает плодоносящие ветви, что не снижает урожайность;\r\n        <li>возможность сбора урожая с начала сезона;\r\n        <li>собранные ягоды с полей могут сразу идти на рынок.\r\n      </ul>\r\n      <img class=\"w3-image w3-border-top w3-border-left w3-border-right\" src=\"assets/kokan/kokan500s_470.jpg\"\r\n           alt=\"Длинна комбайна для сбора ягод\">\r\n      <table class=\"w3-table-all w3-striped w3-small\">\r\n        <tr><td>Длинна (с дышлом)<td>м<td>4.7</tr>\r\n        <tr><td>Длинна (со снятым дышлом)<td>м<td>4.0</tr>\r\n        <tr><td>Ширина (с опущенными платформами)<td>м<td>3.3</tr>\r\n        <tr><td>Ширина (во время транспортировки)<td>м<td>2.5</tr>\r\n        <tr><td>Высота (самое низкое положение)<td>м<td>2.5</tr>\r\n        <tr><td>Вес<td>кг<td>3.250</tr>\r\n        <tr><td>Скорость уборки (макс.)<td>км/ч<td>1,5±10%</tr>\r\n        <tr><td>Производительность (макс.)<td>га/день<td>4</tr>\r\n        <tr><td>Высота подъема комбайна (макс.)<td>мм<td>500</tr>\r\n        <tr><td>Количество ящиков<td>штук<td>50</tr>\r\n        <tr><td>Количество людей обслуживающих комбайн (мин.)<td>человек<td>2</tr>\r\n        <tr><td>Высота тоннеля (мин.)<td>м<td>2.0</tr>\r\n        <tr><td>Высота тоннеля (макс.)<td>м<td>2.5</tr>\r\n        <tr><td>Ширина входя в тоннель<td>м<td>1.4</tr>\r\n        <tr><td>Ширина выхода с тоннеля<td>мм<td>850</tr>\r\n        <tr><td>Шины<td>inc<td>10.0/75-15.3</tr>\r\n      </table>\r\n    </div>\r\n    <div class=\"w3-half w3-padding\">\r\n      <div class=\"video-container\">\r\n        <iframe type=\"text/html\" width=\"563\" height=\"317\"\r\n                src=\"https://www.youtube.com/embed/1-4wNoRVvoI?autoplay=0&rel=0&modestbrending=0\"\r\n                frameborder=\"0\" allowfullscreen></iframe>\r\n      </div>\r\n      <div class=\"w3-display-container w3-padding-top w3-padding-bottom\">\r\n        <p>KOKAN 500s буксируется позади трактора, эффективно собирает малину, ежевику,\r\n          чернику, голубику, черную смородину и другие ягоды. При сборе ягод данным комбайном используется технология\r\n          пульсирующих (вибрирующих) воздушных струй регулируемой скорости и частоты, которые трясут кусты\r\n          растений и отрывают плоды, после чего, ягоды способом «задержки свободного падения» попадают на\r\n          систему транспортировки плодов к ящикам.\tПри этом листья и сухие веточки убираются интенсивным потоком воздуха.</p>\r\n        <p>KOKAN 500s обеспечивает инновационный, уникальный и проверенный способ эффективной\r\n          уборки широкого ассортимента ягод, в том числе: малины, черники, ежевики и черной смородины.</p>\r\n        <p>В отличии от других доступных комбайнов, механизм тряски кустов, по существу, бесконтактный,\r\n          гарантирует минимальную степень ушиба ягод и повреждений кустарника. KOKAN 500s применяет проверенные и\r\n          усовершенствованные методы сбора ягод, транспортировки и очистки. Задержка свободного падения оторванных\r\n          и собранных плодов является еще одной особенностью отличительного дизайна KOKAN 500s, что обеспечивает\r\n          дополнительное снижение повреждений плодов.</p>\r\n        <p>Неотъемлемой частью данного комбайна есть универсальность, которая достигается с помощью простой и\r\n          удобной для пользователя регулировкой рабочих параметров машины, таких как: независимая регулировка\r\n          пульсирующей скорости воздушных струй и частоты.</p>\r\n      </div>\r\n      <div class=\"w3-content w3-display-container w3-light-grey w3-padding-16\">\r\n        <span class=\"w3-button w3-display-left w3-padding w3-green cursor-pointer\" (click)=\"changeSlide(-1)\">&#10094;</span>\r\n        <span class=\"w3-button w3-display-right w3-padding w3-green cursor-pointer\" (click)=\"changeSlide(+1)\">&#10095;</span>\r\n        <div *ngFor=\"let slide of imgSlides\" class=\"w3-row-padding\" [class.w3-hide]=\"slide != imgSlides[currentSlide]\">\r\n          <div class=\"w3-col l6 m6 w3-padding\" *ngFor=\"let img of slide\">\r\n            <img src=\"assets/kokan/{{img}}.jpg\" (click)=\"showBigImg(img)\" class=\"w3-image w3-hover-opacity cursor-pointer\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"w3-container w3-padding-32\">\r\n    <h3 class=\"w3-border-bottom w3-border-light-grey w3-padding-12\">Комбайн для сбора малины, черники, смородины</h3>\r\n    <p>Универсальный комбайн может использоваться как малиноуборочный, черникоуборочный и так далее.\r\n      Это позволит Вам иметь всего один вид техники, что в свою очередь значительно удешевит уход за ней,\r\n      сократит расходы на запасные части, позволит быстрее разобраться с настройками и приступить к уборке урожая ягод.</p>\r\n    <h3 class=\"w3-border-bottom w3-border-light-grey w3-padding-12\">Гарантия и обслуживание</h3>\r\n    <p>Предоставляется гарантия на один сезон работы комбайна, а также послегарантийное\r\n      сервисное обслуживание, поставка запасных частей и бесплатное обучение комбайнеров на протяжении 20 часов.\r\n      Период поставки техники 90 дней. Возможна оплата частями.</p>\r\n    <p>Вас также могут заинтересовать\r\n      <a routerLink=\"/переработка_ягод_фруктов_овощей\" title=\"мини цех по переработке ягод\">линии по переработке ягод</a>\r\n      или <a routerLink=\"/комбайны_для_уборки_бобовых\" title=\"горохоуборочные, фасолеуборочные комбайны\">техника для уборки бобовых</a>\r\n    </p>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"needBigImg\" class=\"w3-modal w3-center w3-animate-opacity\">\r\n  <span class=\"w3-padding w3-yellow w3-hover-red w3-display-topright cursor-pointer\" (click)=\"hideBigImg()\">&times;</span>\r\n  <span class=\"w3-button w3-display-left w3-padding w3-green cursor-pointer\" (click)=\"changeBigImg(-1)\">&#10094;</span>\r\n  <span class=\"w3-button w3-display-right w3-padding w3-green cursor-pointer\" (click)=\"changeBigImg(+1)\">&#10095;</span>\r\n  <img src=\"assets/kokan/{{bigImg}}.jpg\" class=\"w3-image w3-animate-zoom\">\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/lines/lines.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/lines/lines.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-margin\">\r\n    <div class=\"w3-container w3-padding-32\">\r\n        <h3 class=\"w3-border-bottom w3-border-light-grey w3-padding-12\">Техника по переработке ягод, фруктов и\r\n            овощей</h3>\r\n        <p>Предлагаем линии по переработке ягод, фруктов и овощей любой модификации по Вашим индивидуальным\r\n            требованиям. Изготовим проект по Вашему заказу. Линии компактные, простые и доступные в обслуживании.</p>\r\n    </div>\r\n\r\n    <div class=\"w3-col l3 m6 w3-padding\" *ngFor=\"let line of linesArray; let i = index\" (click)=\"showLine(i)\">\r\n        <div class=\"w3-display-container cursor-pointer\">\r\n            <div class=\"w3-display-topleft w3-black w3-padding w3-opacity-min\">\r\n                {{ line.name }}\r\n            </div>\r\n            <img src=\"assets/lines/{{ line.code }}_1.jpg\" class=\"w3-image\">\r\n            <div class=\"w3-display-bottomleft w3-display-hover w3-black w3-padding w3-opacity-min\">\r\n                {{ line.desc }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"needLine\" class=\"w3-modal w3-animate-opacity\">\r\n        <span class=\"w3-padding w3-yellow w3-hover-red w3-display-topright cursor-pointer\"\r\n              (click)=\"hideLine()\">&times;</span>\r\n        <span class=\"w3-button w3-display-left w3-padding w3-green cursor-pointer\"\r\n              (click)=\"changeLine(-1)\">&#10094;</span>\r\n        <span class=\"w3-button w3-display-right w3-padding w3-green cursor-pointer\"\r\n              (click)=\"changeLine(+1)\">&#10095;</span>\r\n        <div class=\"w3-modal-content w3-animate-zoom\">\r\n            <div class=\"w3-center w3-white w3-half\">\r\n                <img src=\"assets/lines/{{currentLine.code}}_{{currentLineBigImg}}.jpg\" class=\"w3-image\">\r\n                <div *ngIf=\"currentLine.imgNum > 1\">\r\n                    <img *ngFor=\"let i of currentLineImages\"\r\n                         src=\"assets/lines/{{currentLine.code}}_{{i}}.jpg\"\r\n                         class=\"w3-hover-opacity cursor-pointer w3-third\"\r\n                         (click)=\"changeImg(i)\">\r\n                </div>\r\n            </div>\r\n            <div class=\"w3-right w3-small w3-white w3-padding w3-half\">\r\n                <ul>\r\n                    <li *ngFor=\"let item of currentLineList\"><b>{{item[0]}}:</b>{{item[1]}}</li>\r\n                </ul>\r\n                <p>{{currentLine.text}}</p>\r\n                <p> Возможно изготовление оборудования любой модификации по индивидуальным требованиям покупателя.\r\n                    Так-же можем сделать проект по Вашему заказу. Цену уточняйте.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"w3-container w3-padding-32 w3-color-dark-grey\">\r\n        <h3 class=\"w3-border-bottom w3-border-light-grey w3-padding-12\">Мини линии по переработке фруктов</h3>\r\n        <p>Переработка ягод, овощей и фруктов в скором времени будет все более и более востребованным бизнесом.\r\n            Поскольку при росте урбанизации в странах постсоветского пространства, городской житель не имеет возможности\r\n            и главное времени самому собирать и уж тем более заготавливать ягоды, фрукты или овощи.\r\n            Ему гораздо удобнее будет посетить кафе или фреш-маркет.</p>\r\n        <p>Мини завод по переработке ягод, овощей и фруктов — бизнес идея, которая может принести стабильный доход\r\n            владельцу,\r\n            при правильном планировании сбыта и реализации продукции в рестораны, гипермаркеты или магазины.\r\n            Мини цех по переработке овощей, на котором будет установлено оборудование для переработки фруктов и ягод\r\n            от европейских производителей вполне по карману сейчас среднему бизнесу.\r\n            Мы поможем Вас сделать проект и изготовить конвеерные линии по переработке ягод, фруктов и овощей.</p>\r\n        <p>Вас также могут заинтересовать\r\n            <a routerLink=\"/\" title=\"для уборки малины, черники, смородины\">универсальный ягодоуборочный комбайн</a>\r\n            или\r\n            <a routerLink=\"/комбайны_для_уборки_бобовых\" title=\"фасолеуборочные комбайны\">техника для уборки бобовых</a>\r\n        </p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/404/404.component.ts":
/*!**************************************!*\
  !*** ./src/app/404/404.component.ts ***!
  \**************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: '<app-header message="Страница не найдена"></app-header>'
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _404_404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./404/404.component */ "./src/app/404/404.component.ts");
/* harmony import */ var _kokan_kokan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kokan/kokan.component */ "./src/app/kokan/kokan.component.ts");
/* harmony import */ var _lines_lines_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lines/lines.component */ "./src/app/lines/lines.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _bean_bean_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bean/bean.component */ "./src/app/bean/bean.component.ts");








const routes = [
    { path: '', component: _kokan_kokan_component__WEBPACK_IMPORTED_MODULE_4__["KokanComponent"] },
    { path: 'контакты', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] },
    // { path: 'комбайны_для_уборки_бобовых', loadChildren: 'app/bean/bean.module#BeanModule'},
    { path: 'переработка_ягод_фруктов_овощей', component: _lines_lines_component__WEBPACK_IMPORTED_MODULE_5__["LinesComponent"] },
    { path: 'shnekovyi_konveer_pt-50', component: _lines_lines_component__WEBPACK_IMPORTED_MODULE_5__["LinesComponent"] },
    { path: 'rolang_rg-01', component: _lines_lines_component__WEBPACK_IMPORTED_MODULE_5__["LinesComponent"] },
    { path: 'rolang_rg-02', component: _lines_lines_component__WEBPACK_IMPORTED_MODULE_5__["LinesComponent"] },
    { path: 'rolang_rg-50', component: _lines_lines_component__WEBPACK_IMPORTED_MODULE_5__["LinesComponent"] },
    { path: 'vejalka_d-01', component: _lines_lines_component__WEBPACK_IMPORTED_MODULE_5__["LinesComponent"] },
    { path: 'vibratsionnyi_kalibrator_vg-08', component: _lines_lines_component__WEBPACK_IMPORTED_MODULE_5__["LinesComponent"] },
    { path: 'barbotazhnaja_moechnaja_mashyna_br-02', component: _lines_lines_component__WEBPACK_IMPORTED_MODULE_5__["LinesComponent"] },
    { path: 'valchatyi_kalibrator_sk-01', component: _lines_lines_component__WEBPACK_IMPORTED_MODULE_5__["LinesComponent"] },
    { path: 'vibrostol_v-2', component: _lines_lines_component__WEBPACK_IMPORTED_MODULE_5__["LinesComponent"] },
    { path: 'vertikalnyi_ekstraktor_vp-01', component: _lines_lines_component__WEBPACK_IMPORTED_MODULE_5__["LinesComponent"] },
    { path: 'mashina_udalenija_cherenkov_p-01', component: _lines_lines_component__WEBPACK_IMPORTED_MODULE_5__["LinesComponent"] },
    { path: 'mashina_gruboi_ochistki_b1-01', component: _lines_lines_component__WEBPACK_IMPORTED_MODULE_5__["LinesComponent"] },
    { path: 'mashina_tonkoi_ochistki_b2-01', component: _lines_lines_component__WEBPACK_IMPORTED_MODULE_5__["LinesComponent"] },
    { path: 'inspekcionnyi_transporter_it-01', component: _lines_lines_component__WEBPACK_IMPORTED_MODULE_5__["LinesComponent"] },
    { path: 'inspekcionnyi_transporter_it-03', component: _lines_lines_component__WEBPACK_IMPORTED_MODULE_5__["LinesComponent"] },
    { path: 'lentochnyi_transporter_tt-01', component: _lines_lines_component__WEBPACK_IMPORTED_MODULE_5__["LinesComponent"] },
    { path: 'lentochnyi_transporter_tt-33', component: _lines_lines_component__WEBPACK_IMPORTED_MODULE_5__["LinesComponent"] },
    { path: 'lentochnyi_transporter_tt-50', component: _lines_lines_component__WEBPACK_IMPORTED_MODULE_5__["LinesComponent"] },
    { path: 'lentochnyi_transporter_tt-83', component: _lines_lines_component__WEBPACK_IMPORTED_MODULE_5__["LinesComponent"] },
    { path: 'zapaischik_plenki_pvh', component: _lines_lines_component__WEBPACK_IMPORTED_MODULE_5__["LinesComponent"] },
    { path: 'nastil_dlia_ustanovki_linii', component: _lines_lines_component__WEBPACK_IMPORTED_MODULE_5__["LinesComponent"] },
    { path: 'комбайны_для_уборки_бобовых', component: _bean_bean_component__WEBPACK_IMPORTED_MODULE_7__["BeanComponent"] },
    { path: 'ceiflex_bean_cutter', component: _bean_bean_component__WEBPACK_IMPORTED_MODULE_7__["BeanComponent"] },
    { path: 'sweere_bean_cutter', component: _bean_bean_component__WEBPACK_IMPORTED_MODULE_7__["BeanComponent"] },
    { path: 'double_master_ii', component: _bean_bean_component__WEBPACK_IMPORTED_MODULE_7__["BeanComponent"] },
    { path: 'double_master_iv', component: _bean_bean_component__WEBPACK_IMPORTED_MODULE_7__["BeanComponent"] },
    { path: 'manual_master', component: _bean_bean_component__WEBPACK_IMPORTED_MODULE_7__["BeanComponent"] },
    { path: 'c200_peanut_digger', component: _bean_bean_component__WEBPACK_IMPORTED_MODULE_7__["BeanComponent"] },
    { path: '**', component: _404_404_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let AppComponent = class AppComponent {
    constructor(titleService) {
        this.titleService = titleService;
    }
    onDeactivate() {
        document.body.scrollTop = 0;
    }
    setTitle(newTitle) {
        this.titleService.setTitle(newTitle);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _404_404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./404/404.component */ "./src/app/404/404.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _bean_bean_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bean/bean.module */ "./src/app/bean/bean.module.ts");
/* harmony import */ var _lines_lines_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lines/lines.module */ "./src/app/lines/lines.module.ts");
/* harmony import */ var _kokan_kokan_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./kokan/kokan.module */ "./src/app/kokan/kokan.module.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
            _404_404_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _bean_bean_module__WEBPACK_IMPORTED_MODULE_8__["BeanModule"],
            _lines_lines_module__WEBPACK_IMPORTED_MODULE_9__["LinesModule"],
            _kokan_kokan_module__WEBPACK_IMPORTED_MODULE_10__["KokanModule"]
        ],
        providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/bean/bean-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/bean/bean-routing.module.ts ***!
  \*********************************************/
/*! exports provided: BeanRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeanRoutingModule", function() { return BeanRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bean_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bean.component */ "./src/app/bean/bean.component.ts");




const routes = [
    { path: '', component: _bean_component__WEBPACK_IMPORTED_MODULE_3__["BeanComponent"] },
    { path: ':id', component: _bean_component__WEBPACK_IMPORTED_MODULE_3__["BeanComponent"] }
];
let BeanRoutingModule = class BeanRoutingModule {
};
BeanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BeanRoutingModule);



/***/ }),

/***/ "./src/app/bean/bean.component.css":
/*!*****************************************!*\
  !*** ./src/app/bean/bean.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".w3-modal {\r\n    display: block;\r\n    background: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.w3-image {\r\n    max-height: 400px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVhbi9iZWFuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2JlYW4vYmVhbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnczLW1vZGFsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4udzMtaW1hZ2Uge1xyXG4gICAgbWF4LWhlaWdodDogNDAwcHhcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/bean/bean.component.ts":
/*!****************************************!*\
  !*** ./src/app/bean/bean.component.ts ***!
  \****************************************/
/*! exports provided: BeanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeanComponent", function() { return BeanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _shared_harvesters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/harvesters */ "./src/app/shared/harvesters.ts");




let BeanComponent = class BeanComponent {
    constructor(titleService) {
        this.titleService = titleService;
    }
    setTitle(newTitle) {
        this.titleService.setTitle(newTitle);
    }
    // constructor(private router: Router,
    //            private route: ActivatedRoute,
    //            private titleService: Title) {
    // }
    // showModal(id) {
    //     if (id) {
    //         this.displayModal = id;
    //     }
    // }
    ngOnInit() {
        this.currentHarvesterBigImg = 1;
        this.harvestersArray = _shared_harvesters__WEBPACK_IMPORTED_MODULE_3__["beanHarvesters"];
        //this.route.paramMap.subscribe(pmap => this.showModal(pmap.get('id')));
    }
    showHarvester(index) {
        this.currentHarvesterIndex = index;
        this.currentHarvester = this.harvestersArray[index];
        this.currentHarvesterImages = [];
        for (let i = 1; i <= this.currentHarvester.imgNum; i++) {
            this.currentHarvesterImages.push(i);
        }
        this.currentHarvesterBigImg = 1;
        this.needHarvester = true;
        this.setTitle(this.currentHarvester.name);
    }
    hideHarvester() {
        this.needHarvester = false;
        this.currentHarvesterBigImg = 1;
        this.setTitle('Техника для уборки фасоли');
    }
    changeImg(i) {
        this.currentHarvesterBigImg = i;
    }
    changeHarvester(n) {
        const l = this.harvestersArray.length;
        const i = (this.currentHarvesterIndex + n + l) % l;
        this.showHarvester(i);
    }
};
BeanComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
];
BeanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bean',
        template: __webpack_require__(/*! raw-loader!./bean.component.html */ "./node_modules/raw-loader/index.js!./src/app/bean/bean.component.html"),
        styles: [__webpack_require__(/*! ./bean.component.css */ "./src/app/bean/bean.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
], BeanComponent);



/***/ }),

/***/ "./src/app/bean/bean.module.ts":
/*!*************************************!*\
  !*** ./src/app/bean/bean.module.ts ***!
  \*************************************/
/*! exports provided: BeanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeanModule", function() { return BeanModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _bean_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bean-routing.module */ "./src/app/bean/bean-routing.module.ts");
/* harmony import */ var _bean_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bean.component */ "./src/app/bean/bean.component.ts");






let BeanModule = class BeanModule {
};
BeanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _bean_routing_module__WEBPACK_IMPORTED_MODULE_4__["BeanRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        ],
        declarations: [
            _bean_component__WEBPACK_IMPORTED_MODULE_5__["BeanComponent"],
        ]
    })
], BeanModule);



/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: '<app-header message="Контактная информация"></app-header>'
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/kokan/kokan-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/kokan/kokan-routing.module.ts ***!
  \***********************************************/
/*! exports provided: KokanRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KokanRoutingModule", function() { return KokanRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _kokan_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kokan.component */ "./src/app/kokan/kokan.component.ts");




const routes = [
    { path: '', component: _kokan_component__WEBPACK_IMPORTED_MODULE_3__["KokanComponent"] }
];
let KokanRoutingModule = class KokanRoutingModule {
};
KokanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], KokanRoutingModule);



/***/ }),

/***/ "./src/app/kokan/kokan.component.css":
/*!*******************************************!*\
  !*** ./src/app/kokan/kokan.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".w3-center {\r\n    background: url('/assets/kokan/tag.png') center no-repeat;\r\n}\r\n.w3-modal {\r\n    display: block;\r\n    background: rgba(0, 0, 0, 0.5);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva29rYW4va29rYW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlEQUF5RDtBQUM3RDtBQUNBO0lBQ0ksY0FBYztJQUNkLDhCQUE4QjtBQUNsQyIsImZpbGUiOiJzcmMvYXBwL2tva2FuL2tva2FuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudzMtY2VudGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9rb2thbi90YWcucG5nJykgY2VudGVyIG5vLXJlcGVhdDtcclxufVxyXG4udzMtbW9kYWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/kokan/kokan.component.ts":
/*!******************************************!*\
  !*** ./src/app/kokan/kokan.component.ts ***!
  \******************************************/
/*! exports provided: KokanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KokanComponent", function() { return KokanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let KokanComponent = class KokanComponent {
    ngOnInit() {
        this.needBigImg = false;
        this.currentImg = 0;
        this.currentSlide = 0;
        this.imgArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        this.imgSlides = [];
        for (let i = 0; i < Math.ceil(this.imgArray.length / 2); i++) {
            this.imgSlides[i] = this.imgArray.slice((i * 2), (i * 2) + 2);
        }
    }
    changeSlide(n) {
        const l = this.imgSlides.length;
        this.currentSlide = (this.currentSlide + n + l) % l;
    }
    showBigImg(img) {
        this.bigImg = img;
        this.needBigImg = true;
    }
    changeBigImg(n) {
        const l = this.imgArray.length;
        this.currentImg = this.bigImg - 1;
        this.currentImg = (this.currentImg + n + l) % l;
        this.bigImg = this.currentImg + 1;
    }
    hideBigImg() {
        this.needBigImg = false;
    }
};
KokanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kokan',
        template: __webpack_require__(/*! raw-loader!./kokan.component.html */ "./node_modules/raw-loader/index.js!./src/app/kokan/kokan.component.html"),
        styles: [__webpack_require__(/*! ./kokan.component.css */ "./src/app/kokan/kokan.component.css")]
    })
], KokanComponent);



/***/ }),

/***/ "./src/app/kokan/kokan.module.ts":
/*!***************************************!*\
  !*** ./src/app/kokan/kokan.module.ts ***!
  \***************************************/
/*! exports provided: KokanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KokanModule", function() { return KokanModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kokan_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kokan-routing.module */ "./src/app/kokan/kokan-routing.module.ts");
/* harmony import */ var _kokan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kokan.component */ "./src/app/kokan/kokan.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");






let KokanModule = class KokanModule {
};
KokanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _kokan_routing_module__WEBPACK_IMPORTED_MODULE_3__["KokanRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        ],
        declarations: [
            _kokan_component__WEBPACK_IMPORTED_MODULE_4__["KokanComponent"]
        ]
    })
], KokanModule);



/***/ }),

/***/ "./src/app/lines/lines-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/lines/lines-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LinesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinesRoutingModule", function() { return LinesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let LinesRoutingModule = class LinesRoutingModule {
};
LinesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LinesRoutingModule);



/***/ }),

/***/ "./src/app/lines/lines.component.css":
/*!*******************************************!*\
  !*** ./src/app/lines/lines.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".w3-margin .w3-col:nth-child(4n+2) {\r\n    clear: left;\r\n}\r\n\r\n.w3-modal {\r\n    display: block;\r\n    background: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.w3-image {\r\n    max-height: 400px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGluZXMvbGluZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbGluZXMvbGluZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53My1tYXJnaW4gLnczLWNvbDpudGgtY2hpbGQoNG4rMikge1xyXG4gICAgY2xlYXI6IGxlZnQ7XHJcbn1cclxuXHJcbi53My1tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLnczLWltYWdlIHtcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/lines/lines.component.ts":
/*!******************************************!*\
  !*** ./src/app/lines/lines.component.ts ***!
  \******************************************/
/*! exports provided: LinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinesComponent", function() { return LinesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_lines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/lines */ "./src/app/shared/lines.ts");



let LinesComponent = class LinesComponent {
    ngOnInit() {
        this.currentLineBigImg = 1;
        this.linesArray = _shared_lines__WEBPACK_IMPORTED_MODULE_2__["lines"];
    }
    showLine(index) {
        this.currentLineIndex = index;
        this.currentLine = this.linesArray[index];
        this.currentLineImages = [];
        for (let i = 1; i <= this.currentLine.imgNum; i++) {
            this.currentLineImages.push(i);
        }
        this.currentLineBigImg = 1;
        this.currentLineList = this.currentLine.list.trim().split('     ').map(x => x.split(':'));
        this.needLine = true;
    }
    hideLine() {
        this.needLine = false;
        this.currentLineBigImg = 1;
    }
    changeImg(i) {
        this.currentLineBigImg = i;
    }
    changeLine(n) {
        const l = this.linesArray.length;
        const i = (this.currentLineIndex + n + l) % l;
        this.showLine(i);
    }
};
LinesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lines',
        template: __webpack_require__(/*! raw-loader!./lines.component.html */ "./node_modules/raw-loader/index.js!./src/app/lines/lines.component.html"),
        styles: [__webpack_require__(/*! ./lines.component.css */ "./src/app/lines/lines.component.css")]
    })
], LinesComponent);



/***/ }),

/***/ "./src/app/lines/lines.module.ts":
/*!***************************************!*\
  !*** ./src/app/lines/lines.module.ts ***!
  \***************************************/
/*! exports provided: LinesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinesModule", function() { return LinesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _lines_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lines-routing.module */ "./src/app/lines/lines-routing.module.ts");
/* harmony import */ var _lines_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lines.component */ "./src/app/lines/lines.component.ts");





let LinesModule = class LinesModule {
};
LinesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lines_component__WEBPACK_IMPORTED_MODULE_4__["LinesComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _lines_routing_module__WEBPACK_IMPORTED_MODULE_3__["LinesRoutingModule"]
        ]
    })
], LinesModule);



/***/ }),

/***/ "./src/app/shared/harvesters.ts":
/*!**************************************!*\
  !*** ./src/app/shared/harvesters.ts ***!
  \**************************************/
/*! exports provided: beanHarvesters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beanHarvesters", function() { return beanHarvesters; });
const beanHarvesters = [
    {
        name: 'Ceiflex bean cutter',
        code: 'ceiflex_bean_cutter',
        imgNum: 1,
        func: 'Косилка для срезания фасоли',
        desc: `Ceiflex 3000T захватывает 3 м.   
      Высокая фасоль косится в зеленой стадии на плоской подготовленной почве.
      Режущий вал обрезает стебли. Подборщик транспортирует растения на поперечный конвейер,
      который перемещает их в сторону и складывает в валок.`,
        text: `<p>В районах, где климат стабилен урожай фасоли косится в более зеленой стадии косилкой "Ceiflex 3000T",
      где высокие растения и хорошая плоская подготовленная почва.
      <p>Это устройство захватывает 3 м, поднимая растения, в то время как режущий вал обрезает стебли.
      Тогда подборщик транспортирует срезанные растения на поперечный конвейер.
      Поперечный транспортер перемещает растения в сторону и складывает их в валок.</p>`
    },
    {
        name: 'Sweere bean cutter',
        code: 'sweere_bean_cutter',
        imgNum: 1,
        func: 'Для срезания фасоли в земле',
        desc: `Косилка, которая косит растения прямо в земле.
      Захватывает 10 рядов с расстоянием 37,5 см между ними.
      Рекомендуем, если у вас выросли небольшие растения, в результате чего стручки почти касаются земли
      или вы срезаете фасоль до сбора урожая из-за риска смены погоды.`,
        text: `<p>Косилка для срезания фасоли в земле фирмы Sweere, косит 10 рядов, расстояние между рядами 37,5 см.
      В районах, где у вас выросли небольшие растения, в результате чего стручки почти касаются земли
      или вы срезаете фасоль до сбора урожая из-за риска смены погоды,
      мы рекомендуем пользоваться нашей косилкой, которая косит растения прямо в земле.
      <p>Особенности:</p>
      <ul>
        <li>Трактор с передней навеской.
        <li>5 тяжелых параллелограммов параллельно соединенных с подшипниками и тяжелыми направляющими колесами.
        <li>Подъемный цилиндр в элементах параллелограмма.
        <li>Пружины на каждом ноже позволяют  регулировать  каждый ряд индивидуально.
        <li>Ступенчатый  высокий  клиренс, ножи смонтированы на фиксированной раме,
          панель инструментов для превосходного подкопа на тяжелых почвах. 
        <li>Индивидуальные калибровочные колеса с ножами легко настроить для правильной глубины срезания.
        <li>Плавающие роликовые делители осторожно разделят стебла.
      </ul>
      <p>Нужная регулировка шага каждой разделительной головки быстро достигается индивидуальной стяжной гайкой.
      Чтобы сделать валки вам нужны валкообразователи.</p>`
    },
    {
        name: 'Double Master II',
        code: 'double_master_ii',
        imgNum: 4,
        func: 'Комбайн для уборки фасоли',
        desc: `Универсальный комбайн для сбора сухих бобов и арахиса.
      Комбайн дает Вам возможность собирать фасоль, независимо от погодных и полевых условий,
      что позволит собирать качественный, чистый продукт, который Вы заслуживаете.`,
        text: `<p>Double Master II - это универсальный комбайн для сбора сухих бобов и арахиса.
      Комбайн дает Вам возможность собирать фасоль, независимо от погодных и полевых условий,
      что позволит Вам собирать качественный продукт, который Вы заслуживаете.</p>
      <div class="video-container">
        <iframe width="698" height="418" src="https://www.youtube.com/embed/np5DSUz5YF8" frameborder="0" allowfullscreen></iframe>
      </div>
      <p>Система умной плавучести (а smart flotation system) следует контурам почвы,
      чтобы обеспечить постоянную высоту сборщика. Эта система увеличивает скорость сбора продукции,
      а также снижает попадание грязи и камней в рабочие органы комбайна.
      <div class="video-container">
        <iframe width="698" height="418" src="https://www.youtube.com/embed/ZnxXqF162RE" frameborder="0" allowfullscreen></iframe>
      </div>
      <p>Благодаря фирменной системе обмолота Active Flow, блок обмолота может быть настроен на любое состояния посевов,
      не ставя под угрозу качество уборки.
      <div class="video-container">
        <iframe width="698" height="418" src="https://www.youtube.com/embed/FxS-kHUgNuU" frameborder="0" allowfullscreen></iframe>
      </div>
      <p>Требования:</p>
      <ul>
        <li>Требуемая мощность: 85 л.с. (65кВт)
        <li>Прицепное устройсто трактора
        <li>Два гидравлических соединения</li>
      </ul>
      <p>Узел сборки:</p>
      <ul>
        <li>Ширина сборщика: 180см
        <li>Пружинные пальцы сборщика
        <li>90 пальцев сборщика</li>
      </ul>
      <p>Система очистки:</p>
      <ul>
        <li>Площадь очистки главного экрана: 2,36 m²
        <li>Регулируемый воздушный поток
        <li>Диаметр турбины: 70см</li>
      </ul>
      <p>Емкость бункера: 3.000kg
      <p>Габаритные размеры</p>
      <ul>
        <li>Расстояние между колес: 109 см
        <li>Размер колес: 467/28 
        <li>Вес: 3.750kg
        <li>Ширина: 245 см
        <li>Длина: 660cm
        <li>Высота: 430cm
        <li>Шины: 376/30.
      </ul>`
    },
    {
        name: 'Double Master IV',
        code: 'double_master_iv',
        imgNum: 5,
        func: 'Универсальный комбайн',
        desc: `Система умной плавучести следует контурам почвы, чтобы обеспечить постоянную высоту сборщика.
      Это увеличивает скорость сбора продукции и снижает попадание грязи и камней в рабочие органы комбайна.
      Блок обмолота может быть настроен на любое состояния посевов.`,
        text: `
      <p>Double Master IV – это универсальный комбайн для сбора сухих бобов и арахиса.
      Комбайн дает Вам возможность собирать фасоль, независимо от погодных и полевых условий,
      что позволит Вам собирать качественный продукт, который Вы заслуживаете.</p>      
      <div class="video-container">
        <iframe width="536" height="354" src="https://www.youtube.com/embed/9HdKSfoThVs" frameborder="0" allowfullscreen></iframe>
      </div>
      <p>Система умной плавучести (а smart flotation system) следует контурам почвы,
        чтобы обеспечить постоянную высоту сборщика. Эта система увеличивает скорость сбора продукции,
        а также снижает попадание грязи и камней в рабочие органы комбайна.</p>
      <div class="video-container">
        <iframe width="536" height="354" src="https://www.youtube.com/embed/FxS-kHUgNuU" frameborder="0" allowfullscreen></iframe>
      </div>
      <p>Спецификации Double Master IV:</p>
      <ul>
        <li>Требуемая мощность: 100-130 л.с.</li>
        <li>Прицепное устройсто трактора</li>
        <li>Два гидравлических соединения</li>
      </ul>
      <p>Подбор:</p>
      <ul>
        <li>Рабочая ширина: 185см</li>
        <li>Гибкие пальцы сборщика</li>
        <li>90 пальцев сборщика</li>
      </ul>
      <p>Система очистки:</p>
      <ul>
        <li>Диаметр цилиндра очистки: 48cm</li>
        <li>Длина цилиндр очистки: 379,6cm</li>
        <li>Рабочая скорость: 540rpm(оборотов в минуту)</li>
        <li>Регулируемая система всасывания</li>
        <li>Диаметр турбины: 700мм</li>
      </ul>
      <p>Емкость бункера: 3000 кг</p>
      <p>Габаритные размеры:</p>
      <ul>
        <li>Длина: 744cm</li>
        <li>Ширина: 310cm</li>
        <li>Колеса: 18,4 * 26 "</li>
        <li>Вес: 4640 кг</li>
      </ul>`
    },
    {
        name: 'Manual Master',
        code: 'manual_master',
        imgNum: 6,
        func: 'Ручной комбайн',
        desc: `Представляет собой простой в эксплуатации ручной подающий блок для мобильного обмолота.
      Эта машина позволяет задействовать механизированную уборку для производителей с небольшими участками земли,
      обеспечивая эффективный и чистый обмолот сухих бобов и арахиса.`,
        text: `<p>Manual Master представляет собой простой в эксплуатации ручной подающий блок для мобильного обмолота.
      Эта машина позволяет задействовать механизированную уборку для производителей с небольшими участками земли,
      обеспечивая эффективный и чистый обмолот сухих бобов и арахиса.</p>
      <div class="video-container">
        <iframe width="536" height="354" src="https://www.youtube.com/embed/ualH365Up9w" frameborder="0" allowfullscreen></iframe>
      </div>
      <p>Требования:</p>
      <ul>
        <li>Требуемая мощность: 75л.с.
        <li>RPM: 540</li>
      </ul>
      <p>Технические характеристики:</p>
      <ul>
        <li>Диаметр цилиндра: 60 см
        <li>Диаметр турбины: 70 см</li>
      </ul>
      <p>Габаритные размеры:</p>
      <ul>
        <li>Длина: 355 см
        <li>Ширина: 135 см
        <li>Высота: 320 см
        <li>Вес: 1350kg</li>
      </ul>`
    },
    {
        name: 'C200 Peanut Digger',
        code: 'c200_peanut_digger',
        imgNum: 3,
        func: 'Срезание в земле, формировка',
        desc: `Двухрядная и четырехрядная косилка C200 Peanut Digger предназначена для выкапывания растений фасоли и арахиса,
      а так же формирования валков. Оснащена системой для удаления земли,
      камей и других предметов, чтобы не повредить комбайн, который будет собирать фасоль или арахис`,
        text: `<p>Двухрядная и четырехрядная косилка C200 Peanut Digger  предназначена  для выкапывания растений фасоли и арахиса,
      а так же формирования валков для удобного механизированного сбора продукции. Машина оснащена системой для удаления земли,
      камней и других предметов из лозы, чтобы не повредить комбайн, который будет собирать фасоль (арахис).</p>`
    }
];


/***/ }),

/***/ "./src/app/shared/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/shared/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HeaderComponent.prototype, "message", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: '<header class="w3-display-container">\n' +
            '    <img class="w3-image" src="assets/kokan/kokan500s.jpg" alt="Комбайн для уборки ягод">\n' +
            '    <h1 class="w3-wide w3-display-middle w3-padding-large w3-text-white w3-black w3-opacity">\n' +
            '        <span class="w3-margin-left w3-margin-right"> {{ message }} </span>\n' +
            '    </h1>\n' +
            '</header>',
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/lines.ts":
/*!*********************************!*\
  !*** ./src/app/shared/lines.ts ***!
  \*********************************/
/*! exports provided: lines */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lines", function() { return lines; });
const lines = [
    {
        name: 'Шнековый конвейер PT-50',
        code: 'shnekovyi_konveer_pt-50',
        imgNum: 1,
        desc: 'Предотвращает рассыпание ягод при транспортировке, позволяет равномерно подавать их в последующие агрегаты',
        list: `
      Название устройства: Шнековый конвейер
      Тип устройства: PT-50
      Цель устройства: Равномерная подача плодов в следующие агрегаты.
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили
      Состояние устройства: Новое
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: на четырех колесах; без привязки к фундаменту
      Габариты устройства: 3520x1250x3170 мм
      Высота приема: 965 мм
      Высота подачи: 2146 мм
      Уровень автоматизации: автоматический
      Опорная конструкция: Жесть, сварные профили.
      Базовый модуль: Нержавеющая сталь
      Материал листов, которые контактируют с плодами: кислотоупорный лист из нержавеющей стали WN 1.4301
      Приводное устройство: електромотор P=1,1kW
      Рабочее напряжение: 380 V`,
        text: `Шнековый транспортер предотвращает рассыпание ягод в период транспортировки,
     позволяет равномерно подавать их в последующие агрегаты. Простота и доступность в обслуживании.`
    },
    {
        name: 'Роликовый транспортер (Ролганг) RG-01',
        code: 'rolang_rg-01',
        imgNum: 1,
        desc: 'Перемещает продукцию',
        list: `
      Название устройства: Роликовый транспортер (Ролганг)
      Тип устройства: RG-01
      Цель устройства: перемещение продукции под своим весом или с помощью усилий человека.
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили
      Состояние устройства: Новое
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: Регулируемые опоры.
      Габариты устройства (ДхШхВ): 1240x460x155 мм
      Вес устройства: 11 кг
      Опорная конструкция: Жесть, сварные профили
      Базовый модуль: Нержавеющая сталь.`,
        text: `Используется для перемещения продукции под своим весом или с помощью усилий человека.`
    },
    {
        name: 'Роликовый транспортер (Ролганг) RG-02',
        code: 'rolang_rg-02',
        imgNum: 1,
        desc: 'Перемещает коробоки, ящики под тяжестью товара или с помощью усилий человека',
        list: `
      Название устройства: Роликовый транспортер (Ролганг)
      Тип устройства: RG-02
      Цель устройства: перемещение продукции под своим весом или с помощью усилий человека.
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили
      Состояние устройства: Новое
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: Регулируемые опоры.
      Габариты устройства (ДхШхВ): 3240x360x40 мм
      Вес устройства: 20 кг
      Опорная конструкция: Жесть / Сварные профили
      Базовый модуль: Нержавеющая сталь`,
        text: `Ролганг используется для перемещения коробок, ящиков и пр. Роликовый конвейер состоит из роликов и подшипников,
      в которых они вращаются. Ролики устанавливаются под углом благодаря чему они свободно вращаются
      под тяжестью груза или с помощью усилий человека.`
    },
    {
        name: 'Роликовый транспортер (Ролганг) RG-50',
        code: 'rolang_rg-50',
        imgNum: 1,
        desc: 'Перемещает плоды',
        list: `
      Название устройства: Роликовый транспортер (Ролганг)
      Тип устройства: RG-50
      Цель устройства: перемещение продукции под своим весом или с помощью усилий человека.
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили
      Состояние устройства: Новое
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: Регулируемые опоры.
      Габариты устройства: 1240x460x800 мм
      Угол уклона: от 0 до 45º
      Вес устройства: 22 кг
      Опорная конструкция: Жесть / сварные профили
      Базовый модуль: Нержавеющая сталь`,
        text: `Используется для перемещения продукции под своим весом или с помощью усилий человека.`
    },
    {
        name: 'Веялка D-01',
        code: 'vejalka_d-01',
        imgNum: 2,
        desc: 'Очищает от мелких, легких вкраплений и мусора',
        list: `
      Название устройства: Веялка
      Тип устройства: D-01
      Цель устройства: Выдувает с плодов нежелательную примесь.
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили
      Состояние устройства: Новое
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: Регулируемые опоры.
      Габариты устройства (ДхШхВ): 1570x700x1110 мм
      Опорная конструкция: Жесть, сварные профили.
      Базовый модуль: Нержавеющая сталь
      Мощность двигателя: P=0.75 kW
      Обороты двигателя: 2800 о/мин
      Рабочее напряжение: U= 380 V`,
        text: `Веялки предназначены для очистки продукта от мелких и легких вкраплений и мусора.
      Например, при очистке замороженных ягод веялки применяются для отделения листьев, засохших ягод, отделенной плодоножки.
      При очистке орехов, веялки отделяют шелуху и другие легкие добавки.`
    },
    {
        name: 'Вибрационный калибратор VG-08',
        code: 'vibratsionnyi_kalibrator_vg-08',
        imgNum: 1,
        desc: 'Удаляет мусор, распределяет плоды на 3 фракции',
        list: `
      Название устройства: Вибрационный калибратор
      Тип устройства: VG-08
      Цель устройства: Удаление мусора и нежелательных примесей, распределение плодов на 3 фракции.
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили
      Состояние устройства: Новое
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: Восемь регулируемых опор, без привязки к фундаменту
      Габариты устройства (ДхШхВ): 3365x1240x1960мм
      Опорная конструкция: Жесть / Сварные профили
      Базовый модуль: Нержавеющая сталь
      Приводное устройство: Трехфазный вибромотор VM-1. 80B-4a
      Скорость вибромотора: nmax=1375 о/мин
      Рабочее напряжение: U=220V`,
        text: `Вибрационный калибратор позволяет быстро и качественно убрать ненужную примесь,
     а также распределить поступающие плоды на 3 фракции для подальшей переработки продукции.`
    },
    {
        name: 'Барботажная моечная машина BR-02',
        code: 'barbotazhnaja_moechnaja_mashyna_br-02',
        imgNum: 4,
        desc: 'Моет ягоды, фрукты и овощи',
        list: `
      Название устройства: Барботажная моечная машина
      Тип устройства: BR-02
      Цель устройства: Мойка фруктов и овощей
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили
      Состояние устройства: Новое.
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: На четырех регулируемых опорах, без привязки к фундаменту
      Габариты устройства (ДхШхВ): 3960x1060x2045±30мм
      Высота ванны: Hu=1045±30мм
      Высота выгрузки барботажной моечной машины: Hi=1495±30мм
      Материал листов, которые контактируют с плодами: Кислотоупорный лист из нержавеющей стали WN 1.4301
      Тип конвейера: Секционный M2533 Ячейка сетки 1″
      Ширина конвейерной ленты: 600мм
      Подключение к водопроводу: G2ʺ; pmax=5bar
      Привод вентилятора:
      Мощность электродвигателя P=2,2 kW,
      Скорость вентилятора: n = 2800 о/мин
      Привод элеватора:
      Мощность электродвигателя P=0,37kW,
      Скорость вращения выходной шестерни: n = 28 о/мин`,
        text: `Барботажная моечная машина эфективно моет фрукты, овощи, ягоды (вишни, абрикосы, сливы, смородина и тд.)`
    },
    {
        name: 'Вальчатый калибратор CK-01',
        code: 'valchatyi_kalibrator_sk-01',
        imgNum: 2,
        desc: 'Автоматически калибрует ягоды по размерам на 3 фракции',
        list: `
      Название устройства: Вальчатый калибратор
      Тип устройства: CK-01
      Цель устройства: Калибровка плодов (сливы, вишни, черешни, клубники, ежевики, малины и тд.)
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили
      Состояние устройства: Новое.
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: На четырех регулируемых опорах, без привязки к фундаменту
      Габариты устройства (ДхШхВ): 4350x2540x119555мм
      Вес устройства: 1000 кг
      Материал листов, которые контактируют с плодами: Кислотоупорный лист из нержавеющей стали WN 1.4301
      Несущая конструкция: Жесть, сварные профили
      Количество секций: 3, возможно регулировать расстояние между вальцами в секциях
      Диаметр калибровки: От 6 до 40 мм
      Производительность: 2,5-3 т/ч
      Количество выгрузных лент: 3
      Привод калибратора: Электромотор P=1,5 kW
      Привод ленточных конвейеров: Электромотор P=0,25 kW x 3
      Рабочее напряжение: U= 380V`,
        text: `Предназначен для автоматической калибровки ягодной продукции по размерам на 3 фракции.
      Минимальный размер ягод  – 6 мм, максимальный до 40 мм (отсортированный).
      Отсортированный продукт попадает в специальную тару или на отводящие транспортеры.
      Можем сделать калибратор любых размеров по требованию заказчика.`
    },
    {
        name: 'Вибростол V-2',
        code: 'vibrostol_v-2',
        imgNum: 1,
        desc: 'Калибрует и выравниванивает поток на линиях замороженных ягод',
        list: `
      Название устройства: Вибростол
      Тип устройства: V-2
      Цель устройства: Удаление фруктов меньше, чем 12 мм
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили
      Состояние устройства: Новое.
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: На четырех регулируемых опорах, без привязки к фундаменту
      Габариты устройства (ДхШхВ): 1800x890x1200мм
      Вес устройства: 175 кг
      Опорная конструкция: Жесть, сварные профили
      Базовый модуль: Нержавеющая сталь.
      Приводное устройство: Трехфазный вибромотор VM-1. 80B-4a
      Скорость вибромотора: nmax=1400о/мин
      Рабочее напряжение: U=380V`,
        text: `
      Вибростолы изготавливаются из кислотоупорной нержавеющей стали с пищевым допуском и являются важным компонентом
      в составе линии переработки ягодной продукции. Применяется для калибровки и выравнивания потока
      на линиях замороженных ягод. Отличаются надежностью, простотой в обслуживыании и большим ресурсом работы.`
    },
    {
        name: 'Вертикальный экстрактор VP-01',
        code: 'vertikalnyi_ekstraktor_vp-01',
        imgNum: 1,
        desc: 'Удаляет с косточек остатки ягод, без их повреждения',
        list: `
      Название устройства: Вертикальный экстрактор
      Тип устройства: VP-01
      Цель устройства: Удаление остатков вишни, сливы и черешни с косточки.
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили
      Состояние устройства: Новое.
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: На четырех регулируемых опорах, без привязки к фундаменту
      Габариты устройства (ДхШхВ): 1000x810x840±30мм
      Опорная конструкция: Жесть, сварные профили
      Базовый модуль: Нержавеющая сталь.
      Рабочее напряжение: 380V
      Приводное устройство:
      Мощность электромотора: P=4kW
      Обороты электромотора: n=1400 о/мин`,
        text: `
      Экстрактор создан для удаления с косточек остатков ягод. Может использоваться для вишни, черешни, сливы, малины
      и других косточковых ягод. Обеспечивает полную очистку косточек. Косточки не повреждаются и не разламываются
      в процессе работы, как следствие, фрагменты косточек не смешиваются с ягодной массой.`
    },
    {
        name: 'Машина для удаления черенков P-01',
        code: 'mashina_udalenija_cherenkov_p-01',
        imgNum: 3,
        desc: 'Удаляет черенки с ягод',
        list: `
      Название устройства: Черенкователь
      Тип устройства: P-01
      Цель устройства: Удаление черенков с вишни, сливы и черешни.
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: На четырех регулируемых опорах, без привязки к фундаменту
      Габариты устройства (ДхШхВ): 2470x1310x1460±30мм
      Высота загрузки: Hu=1227±30мм
      Высота выгрузки: Hi=1070±30мм
      Опорная конструкция: Жесть, сварные профили
      Базовый модуль: Нержавеющая сталь.
      Рабочее напряжение: 380V
      Подключение к водопроводу: 3xØ20мм; pmax=5bar
      Приводное устройство: Електромотор P1=3kW, n1 = 700о/мин;
      Электродвигатель редуктора: P2=0,55kW/NMRV50 i=7,5; регулировка скорости с помощью преобразователя частоты.`,
        text: `Удаление черенков с вишни, сливы и черешни.`
    },
    {
        name: 'Машина для грубой очистки черники, смородины, шиповника B1-01',
        code: 'mashina_gruboi_ochistki_b1-01',
        imgNum: 3,
        desc: 'Выполняет грубую очистку ягод',
        list: `
      Название устройства: Машина для грубой очистки черники, смородины, шиповника
      Тип устройства: B1-01
      Цель устройства: Грубая очистка черники, смородины, шиповника
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили
      Состояние устройства: Новое.
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: На четырех регулируемых опорах, без привязки к фундаменту
      Габариты устройства (ДхШхВ): 3650x700x187525 мм
      Вес устройства: 315 кг
      Уровень автоматизации: Автоматический
      Опорная конструкция: Жесть, сварные профили
      Базовый модуль: Нержавеющая сталь.
      Приводное устройство:
      Винтовой конвейер: муфта редукторного мотора, P=1.5kW, n=2 800min-1, i=10;
      Разбивка мороженых плодов: муфта редукторного мотора, P=1.5kW, n=2 800min-1, i=10
      Рабочее напряжение: U=380V`,
        text: `Грубая очистка черники, смородины, шиповника.`
    },
    {
        name: 'Машина для тонкой очистки черники и смородины B2-01',
        code: 'mashina_tonkoi_ochistki_b2-01',
        imgNum: 3,
        desc: 'Выполняет тонкую очистку ягод',
        list: `
      Название устройства: Машина для тонкой очистки черники и смородины
      Тип устройства: B2-01
      Цель устройства: Тонкая очистка черники и смородины
      Цвет устройства: Неокрашенные листы из нержавеющей стали и профили Состояние устройства: Новое.
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: На четырех регулируемых опорах, без привязки к фундаменту
      Габариты устройства (ДхШхВ): 3540x700x1835мм
      Вес устройства: 310 кг
      Уровень автоматизации: Автоматический.
      Опорная конструкция: Жесть, сварные профили
      Базовый модуль: Нержавеющая сталь.
      Приводное устройство:
      Винтовой конвейер.: P=1.5kW, n=280min-1,
      Разбивка мороженых плодов: P=1.5kW, n=280min-1,
      Рабочее напряжение: U=380V`,
        text: `Тонкая очистка черники и смородины.`
    },
    {
        name: 'Инспекционный транспортер IT-01',
        code: 'inspekcionnyi_transporter_it-01',
        imgNum: 1,
        desc: 'Перемещает продукцию',
        list: `
      Название устройства: Инспекционный транспортер
      Тип устройства: IT-01
      Цель устройства: Транспортировка и контроль плодов.
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили
      Состояние устройства: Новое
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: Четыре регулируемых опоры.
      Габариты устройства (ДхШхВ): 4800x1100x2000 мм
      Вес устройства: 300 кг
      Опорная конструкция: Жесть, сварные профили.
      Базовый модуль: Нержавеющая сталь.
      Материал листов, которые контактируют с плодами: Кислотоупорный лист из нержавеющей стали Č.4580
      Осветление: Три лампы дневного света 2x36W и одна лампа дневного света 2x18W
      Тип конвейера: NAB 10
      Ширина конвейера: 800 мм
      Регулирование скорости полосы: Частотным преобразователем.
      Скорость конвейера: V = 4,66 – 14,14 м/мин
      Диаметр приводного и натяжного ролика: Ø150 мм
      Приводное устройство: Червячные редуктора.
      Мощность главного двигателя: P=0,55kW
      Частота вращения выходного вала редуктора: n2=30 о/мин
      Рабочее напряжение: U=380V`,
        text: `Инспекционный транспортер оснащен осветительными приборами,
      обеспечивающими хорошую освещенность проверяемого продукта, а также имеются перегородки для отсортировки брака.`
    },
    {
        name: 'Инспекционный транспортер IT-03',
        code: 'inspekcionnyi_transporter_it-03',
        imgNum: 1,
        desc: 'Позволяет быстро и качественно сортировать продукцию',
        list: `
      Название устройства: Инспекционный транспортер IT-03
      Цель устройства: Транспортировка и контроль плодов
      Цвет устройства: Неокрашенные листы из нержавеющей стали и профили
      Состояние устройства: Новое
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: Четыре регулируемых опоры.
      Габариты устройства (ДхШхВ): 4210x1160x2040 мм
      Вес устройства: 240 кг
      Опорная конструкция: Жесть, сварные профили.
      Базовый модуль: Нержавеющая сталь.
      Материал листов, которые контактируют с сырьем:  Кислотоупорный лист из нержавеющей стали 1.4301
      Осветление: лампа дневного света 2x36W и лампа дневного света 2x18W.
      Тип конвейера: NAB 10
      Ширина ленты: 800 мм
      Регулирование скорости ленты: преобразователем частоты
      Скорость конвейера: V = 5 – 13.5 м/мин
      Диаметр приводного и натяжного ролика: Ø150 мм
      Приводное устройство: винтовой редуктор
      Мощность главного двигателя: P=0,55kW
      Рабочее напряжение: U=380V`,
        text: `Инспекционный транспортер для сортировки ягод (малина, голубика, ежевика, смородина и тд.)
      позволяет быстро, а самое главное – качественно отсортировать продукцию. Транспортировочная лента –
      полеуритановая, пищевая, ее ширина – 800 мм. Также имеются перегородки для отсортировки брака.`
    },
    {
        name: 'Ленточный транспортер TT-01',
        code: 'lentochnyi_transporter_tt-01',
        imgNum: 1,
        desc: 'Транспортирует продукт',
        list: `
      Название устройства: Ленточный транспортер
      Тип устройства: TT-01
      Цель устройства: Транспортировка плодов и деление на три равных потока для последующей переработки.
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили.
      Состояние устройства: Новое.
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: Четыре регулируемых опоры.
      Габариты устройства (ДхШхВ): 5360x1330x124530 мм
      Вес устройства: 260кг
      Опорная конструкция: Жесть, сварные профили
      Базовый модуль: Нержавеющая сталь.
      Тип конвейера: NAB 10
      Ширина конвейера: 800 мм
      Скорость конвейера: V = 11,73 м/мин
      Диаметр приводного и натяжного ролика: Ø150 мм
      Мощность главного двигателя: P=0,55Kw
      Рабочее напряжение: U=380V`,
        text: `Оснащен тремя перегородками, для деления продукта на потоки.`
    },
    {
        name: 'Ленточный транспортер TT-33',
        code: 'lentochnyi_transporter_tt-33',
        imgNum: 2,
        desc: 'Транспортирует фрукты и овощи в приемный бункер',
        list: `
      Название устройства: Ленточный транспортер.
      Тип устройства: TT-33
      Цель устройства: Транспортировка фруктов и овощей.
      Цвет устройства: Неокрашенные листы из нержавеющей стали и профили
      Состояние устройства: Новое
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: Четыре регулируемых опоры
      Габариты устройства (ДхШхВ): 1900x740x1580 мм
      Угол наклона конвейера: 45º
      Вес устройства: 130 кг
      Опорная конструкция: Жесть, сварные профили
      Базовый модуль: Нержавеющая сталь
      Tип конвейера: NAB – 10, с лопастями
      Диаметр приводного и натяжного ролика: Ø150 мм
      Мощность двигателя: P=0.37 kW
      Рабочее напряжение: U= 380 V`,
        text: `Оснащен лентой с шевронами, а также приемным бункером.`
    },
    {
        name: 'Ленточный транспортер TT-50',
        code: 'lentochnyi_transporter_tt-50',
        imgNum: 4,
        desc: 'Доставляет плоды',
        list: `
      Название устройства: Ленточный транспортер
      Тип устройства: TT-50
      Цель устройства: Транспортировка фруктов и овощей
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили
      Состояние устройства: Новое
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: Четыре регулируемых опоры.
      Габариты устройства (ДхШхВ): 3110x1020x1330±30 мм
      Высота загрузки: Hu=1330±30мм
      Высота выгрузки: Hi=1045±30мм
      Опорная конструкция: Жесть, сварные профили
      Базовый модуль: Нержавеющая сталь.
      Тип конвейера: Модульная лента M2533
      Диаметр звездочки привода и натяжения: Ø146.9мм
      Ширина конвейерной ленты: 650мм
      Мощность двигателя: P=0.37 kW
      Рабочее напряжение: U= 380 V`,
        text: `Транспортировка фруктов и овощей`
    },
    {
        name: 'Ленточный транспортер TT-83',
        code: 'lentochnyi_transporter_tt-83',
        imgNum: 2,
        desc: 'Транспортирует продукцию',
        list: `
      Название устройства: Ленточный транспортер
      Тип устройства: TT-83
      Цель устройства: Транспортировка фруктов и овощей
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили
      Состояние устройства: Новое
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: Четыре регулируемых опоры.
      Габариты устройства (ДхШхВ): 2330x920x2650 мм
      Вес устройства: 220кг
      Опорная конструкция: Жесть, сварные профили
      Базовый модуль: Нержавеющая сталь.
      Тип конвейера: Модульная лента M2533
      Диаметр звездочки привода и натяжения: Ø146,9мм
      Ширина конвейерной ленты: 650 мм
      Мощность двигателя: P=0.55 kW
      Рабочее напряжение: U= 380 V`,
        text: `Транспортировка фруктов и овощей`
    },
    {
        name: 'Запайщик пленки ПВХ',
        code: 'zapaischik_plenki_pvh',
        imgNum: 2,
        desc: 'Сваривает различные полотна полимерных материалов для изготовление герметичных пакетов',
        list: `
      Название устройства: Запайщик пленки ПВХ
      Тип устройства: PVC -01
      Цель устройства: Сварка пленки ПВХ
      Цвет устройства: Неокрашенные листы из нержавеющей стали и профили
      Состояние устройства: Новое.
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: На четырех регулируемых опорах, без привязки к фундаменту
      Габариты устройства (ДхШхВ): 500x650x1075 мм
      Вес устройства: 25 кг
      Уровень автоматизации: Полуавтоматический
      Опорная конструкция: Жесть, сварные профили
      Базовый модуль: Нержавеющая сталь.
      Рабочее напряжение: U=220V`,
        text: `Запайщики (свариватели) пленки предназначены для сварки различных полотен полимерных материалов друг с другом.
      С помощью запайщика можно быстро изготовить пакет из пленки и герметично запечатать его.`
    },
    {
        name: 'Настил для установки линии',
        code: 'nastil_dlia_ustanovki_linii',
        imgNum: 1,
        desc: 'Повышает безопасность при работе на линии, предотвращает скольжение',
        list: 'Название устройства: Настил для установки линии',
        text: `Материал ПВХ(PVC), перфорированный. Противоскользящее покрытие.
      Применяется для повышения безопасности при работе на линии, для предотвращения скольжения и падения людей.`
    }
];


/***/ }),

/***/ "./src/app/shared/safe.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/shared/safe.pipe.ts ***!
  \*************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SafePipe = class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
};
SafePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safe'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
], SafePipe);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.component */ "./src/app/shared/header.component.ts");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./safe.pipe */ "./src/app/shared/safe.pipe.ts");





let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
            _safe_pipe__WEBPACK_IMPORTED_MODULE_4__["SafePipe"]
        ],
        declarations: [
            _header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
            _safe_pipe__WEBPACK_IMPORTED_MODULE_4__["SafePipe"],
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Programs\www\volia7\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map