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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: '<app-header message="Страница не найдена"></app-header>'
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _404_404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./404/404.component */ "./src/app/404/404.component.ts");
/* harmony import */ var _kokan_kokan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kokan/kokan.component */ "./src/app/kokan/kokan.component.ts");
/* harmony import */ var _lines_lines_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lines/lines.component */ "./src/app/lines/lines.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _bean_bean_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bean/bean.component */ "./src/app/bean/bean.component.ts");








var routes = [
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
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(titleService) {
        this.titleService = titleService;
    }
    AppComponent.prototype.onDeactivate = function () {
        document.body.scrollTop = 0;
    };
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _404_404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./404/404.component */ "./src/app/404/404.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _bean_bean_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bean/bean.module */ "./src/app/bean/bean.module.ts");
/* harmony import */ var _lines_lines_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lines/lines.module */ "./src/app/lines/lines.module.ts");
/* harmony import */ var _kokan_kokan_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./kokan/kokan.module */ "./src/app/kokan/kokan.module.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
    return AppModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bean_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bean.component */ "./src/app/bean/bean.component.ts");




var routes = [
    { path: '', component: _bean_component__WEBPACK_IMPORTED_MODULE_3__["BeanComponent"] },
    { path: ':id', component: _bean_component__WEBPACK_IMPORTED_MODULE_3__["BeanComponent"] }
];
var BeanRoutingModule = /** @class */ (function () {
    function BeanRoutingModule() {
    }
    BeanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BeanRoutingModule);
    return BeanRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_harvesters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/harvesters */ "./src/app/shared/harvesters.ts");




var BeanComponent = /** @class */ (function () {
    function BeanComponent(titleService) {
        this.titleService = titleService;
    }
    BeanComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    // constructor(private router: Router,
    //            private route: ActivatedRoute,
    //            private titleService: Title) {
    // }
    // showModal(id) {
    //     if (id) {
    //         this.displayModal = id;
    //     }
    // }
    BeanComponent.prototype.ngOnInit = function () {
        this.currentHarvesterBigImg = 1;
        this.harvestersArray = _shared_harvesters__WEBPACK_IMPORTED_MODULE_3__["beanHarvesters"];
        //this.route.paramMap.subscribe(pmap => this.showModal(pmap.get('id')));
    };
    BeanComponent.prototype.showHarvester = function (index) {
        this.currentHarvesterIndex = index;
        this.currentHarvester = this.harvestersArray[index];
        this.currentHarvesterImages = [];
        for (var i = 1; i <= this.currentHarvester.imgNum; i++) {
            this.currentHarvesterImages.push(i);
        }
        this.currentHarvesterBigImg = 1;
        this.needHarvester = true;
        this.setTitle(this.currentHarvester.name);
    };
    BeanComponent.prototype.hideHarvester = function () {
        this.needHarvester = false;
        this.currentHarvesterBigImg = 1;
        this.setTitle('Техника для уборки фасоли');
    };
    BeanComponent.prototype.changeImg = function (i) {
        this.currentHarvesterBigImg = i;
    };
    BeanComponent.prototype.changeHarvester = function (n) {
        var l = this.harvestersArray.length;
        var i = (this.currentHarvesterIndex + n + l) % l;
        this.showHarvester(i);
    };
    BeanComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
    ]; };
    BeanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bean',
            template: __webpack_require__(/*! raw-loader!./bean.component.html */ "./node_modules/raw-loader/index.js!./src/app/bean/bean.component.html"),
            styles: [__webpack_require__(/*! ./bean.component.css */ "./src/app/bean/bean.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], BeanComponent);
    return BeanComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _bean_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bean-routing.module */ "./src/app/bean/bean-routing.module.ts");
/* harmony import */ var _bean_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bean.component */ "./src/app/bean/bean.component.ts");






var BeanModule = /** @class */ (function () {
    function BeanModule() {
    }
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
    return BeanModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: '<app-header message="Контактная информация"></app-header>'
        })
    ], ContactComponent);
    return ContactComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _kokan_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kokan.component */ "./src/app/kokan/kokan.component.ts");




var routes = [
    { path: '', component: _kokan_component__WEBPACK_IMPORTED_MODULE_3__["KokanComponent"] }
];
var KokanRoutingModule = /** @class */ (function () {
    function KokanRoutingModule() {
    }
    KokanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], KokanRoutingModule);
    return KokanRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KokanComponent = /** @class */ (function () {
    function KokanComponent() {
    }
    KokanComponent.prototype.ngOnInit = function () {
        this.needBigImg = false;
        this.currentImg = 0;
        this.currentSlide = 0;
        this.imgArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        this.imgSlides = [];
        for (var i = 0; i < Math.ceil(this.imgArray.length / 2); i++) {
            this.imgSlides[i] = this.imgArray.slice((i * 2), (i * 2) + 2);
        }
    };
    KokanComponent.prototype.changeSlide = function (n) {
        var l = this.imgSlides.length;
        this.currentSlide = (this.currentSlide + n + l) % l;
    };
    KokanComponent.prototype.showBigImg = function (img) {
        this.bigImg = img;
        this.needBigImg = true;
    };
    KokanComponent.prototype.changeBigImg = function (n) {
        var l = this.imgArray.length;
        this.currentImg = this.bigImg - 1;
        this.currentImg = (this.currentImg + n + l) % l;
        this.bigImg = this.currentImg + 1;
    };
    KokanComponent.prototype.hideBigImg = function () {
        this.needBigImg = false;
    };
    KokanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kokan',
            template: __webpack_require__(/*! raw-loader!./kokan.component.html */ "./node_modules/raw-loader/index.js!./src/app/kokan/kokan.component.html"),
            styles: [__webpack_require__(/*! ./kokan.component.css */ "./src/app/kokan/kokan.component.css")]
        })
    ], KokanComponent);
    return KokanComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _kokan_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kokan-routing.module */ "./src/app/kokan/kokan-routing.module.ts");
/* harmony import */ var _kokan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kokan.component */ "./src/app/kokan/kokan.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");






var KokanModule = /** @class */ (function () {
    function KokanModule() {
    }
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
    return KokanModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var LinesRoutingModule = /** @class */ (function () {
    function LinesRoutingModule() {
    }
    LinesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LinesRoutingModule);
    return LinesRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_lines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/lines */ "./src/app/shared/lines.ts");



var LinesComponent = /** @class */ (function () {
    function LinesComponent() {
    }
    LinesComponent.prototype.ngOnInit = function () {
        this.currentLineBigImg = 1;
        this.linesArray = _shared_lines__WEBPACK_IMPORTED_MODULE_2__["lines"];
    };
    LinesComponent.prototype.showLine = function (index) {
        this.currentLineIndex = index;
        this.currentLine = this.linesArray[index];
        this.currentLineImages = [];
        for (var i = 1; i <= this.currentLine.imgNum; i++) {
            this.currentLineImages.push(i);
        }
        this.currentLineBigImg = 1;
        this.currentLineList = this.currentLine.list.trim().split('     ').map(function (x) { return x.split(':'); });
        this.needLine = true;
    };
    LinesComponent.prototype.hideLine = function () {
        this.needLine = false;
        this.currentLineBigImg = 1;
    };
    LinesComponent.prototype.changeImg = function (i) {
        this.currentLineBigImg = i;
    };
    LinesComponent.prototype.changeLine = function (n) {
        var l = this.linesArray.length;
        var i = (this.currentLineIndex + n + l) % l;
        this.showLine(i);
    };
    LinesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lines',
            template: __webpack_require__(/*! raw-loader!./lines.component.html */ "./node_modules/raw-loader/index.js!./src/app/lines/lines.component.html"),
            styles: [__webpack_require__(/*! ./lines.component.css */ "./src/app/lines/lines.component.css")]
        })
    ], LinesComponent);
    return LinesComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _lines_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lines-routing.module */ "./src/app/lines/lines-routing.module.ts");
/* harmony import */ var _lines_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lines.component */ "./src/app/lines/lines.component.ts");





var LinesModule = /** @class */ (function () {
    function LinesModule() {
    }
    LinesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_lines_component__WEBPACK_IMPORTED_MODULE_4__["LinesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _lines_routing_module__WEBPACK_IMPORTED_MODULE_3__["LinesRoutingModule"]
            ]
        })
    ], LinesModule);
    return LinesModule;
}());



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
var beanHarvesters = [
    {
        name: 'Ceiflex bean cutter',
        code: 'ceiflex_bean_cutter',
        imgNum: 1,
        func: 'Косилка для срезания фасоли',
        desc: "Ceiflex 3000T \u0437\u0430\u0445\u0432\u0430\u0442\u044B\u0432\u0430\u0435\u0442 3 \u043C.   \n      \u0412\u044B\u0441\u043E\u043A\u0430\u044F \u0444\u0430\u0441\u043E\u043B\u044C \u043A\u043E\u0441\u0438\u0442\u0441\u044F \u0432 \u0437\u0435\u043B\u0435\u043D\u043E\u0439 \u0441\u0442\u0430\u0434\u0438\u0438 \u043D\u0430 \u043F\u043B\u043E\u0441\u043A\u043E\u0439 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0432\u0435.\n      \u0420\u0435\u0436\u0443\u0449\u0438\u0439 \u0432\u0430\u043B \u043E\u0431\u0440\u0435\u0437\u0430\u0435\u0442 \u0441\u0442\u0435\u0431\u043B\u0438. \u041F\u043E\u0434\u0431\u043E\u0440\u0449\u0438\u043A \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u0443\u0435\u0442 \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u044F \u043D\u0430 \u043F\u043E\u043F\u0435\u0440\u0435\u0447\u043D\u044B\u0439 \u043A\u043E\u043D\u0432\u0435\u0439\u0435\u0440,\n      \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0430\u0435\u0442 \u0438\u0445 \u0432 \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u0438 \u0441\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0435\u0442 \u0432 \u0432\u0430\u043B\u043E\u043A.",
        text: "<p>\u0412 \u0440\u0430\u0439\u043E\u043D\u0430\u0445, \u0433\u0434\u0435 \u043A\u043B\u0438\u043C\u0430\u0442 \u0441\u0442\u0430\u0431\u0438\u043B\u0435\u043D \u0443\u0440\u043E\u0436\u0430\u0439 \u0444\u0430\u0441\u043E\u043B\u0438 \u043A\u043E\u0441\u0438\u0442\u0441\u044F \u0432 \u0431\u043E\u043B\u0435\u0435 \u0437\u0435\u043B\u0435\u043D\u043E\u0439 \u0441\u0442\u0430\u0434\u0438\u0438 \u043A\u043E\u0441\u0438\u043B\u043A\u043E\u0439 \"Ceiflex 3000T\",\n      \u0433\u0434\u0435 \u0432\u044B\u0441\u043E\u043A\u0438\u0435 \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u044F \u0438 \u0445\u043E\u0440\u043E\u0448\u0430\u044F \u043F\u043B\u043E\u0441\u043A\u0430\u044F \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0432\u0430.\n      <p>\u042D\u0442\u043E \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u0437\u0430\u0445\u0432\u0430\u0442\u044B\u0432\u0430\u0435\u0442 3 \u043C, \u043F\u043E\u0434\u043D\u0438\u043C\u0430\u044F \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u044F, \u0432 \u0442\u043E \u0432\u0440\u0435\u043C\u044F \u043A\u0430\u043A \u0440\u0435\u0436\u0443\u0449\u0438\u0439 \u0432\u0430\u043B \u043E\u0431\u0440\u0435\u0437\u0430\u0435\u0442 \u0441\u0442\u0435\u0431\u043B\u0438.\n      \u0422\u043E\u0433\u0434\u0430 \u043F\u043E\u0434\u0431\u043E\u0440\u0449\u0438\u043A \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u0443\u0435\u0442 \u0441\u0440\u0435\u0437\u0430\u043D\u043D\u044B\u0435 \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u044F \u043D\u0430 \u043F\u043E\u043F\u0435\u0440\u0435\u0447\u043D\u044B\u0439 \u043A\u043E\u043D\u0432\u0435\u0439\u0435\u0440.\n      \u041F\u043E\u043F\u0435\u0440\u0435\u0447\u043D\u044B\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0435\u0440 \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0430\u0435\u0442 \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u044F \u0432 \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u0438 \u0441\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0435\u0442 \u0438\u0445 \u0432 \u0432\u0430\u043B\u043E\u043A.</p>"
    },
    {
        name: 'Sweere bean cutter',
        code: 'sweere_bean_cutter',
        imgNum: 1,
        func: 'Для срезания фасоли в земле',
        desc: "\u041A\u043E\u0441\u0438\u043B\u043A\u0430, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043A\u043E\u0441\u0438\u0442 \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u044F \u043F\u0440\u044F\u043C\u043E \u0432 \u0437\u0435\u043C\u043B\u0435.\n      \u0417\u0430\u0445\u0432\u0430\u0442\u044B\u0432\u0430\u0435\u0442 10 \u0440\u044F\u0434\u043E\u0432 \u0441 \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435\u043C 37,5 \u0441\u043C \u043C\u0435\u0436\u0434\u0443 \u043D\u0438\u043C\u0438.\n      \u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C, \u0435\u0441\u043B\u0438 \u0443 \u0432\u0430\u0441 \u0432\u044B\u0440\u043E\u0441\u043B\u0438 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u0435 \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u044F, \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0447\u0435\u0433\u043E \u0441\u0442\u0440\u0443\u0447\u043A\u0438 \u043F\u043E\u0447\u0442\u0438 \u043A\u0430\u0441\u0430\u044E\u0442\u0441\u044F \u0437\u0435\u043C\u043B\u0438\n      \u0438\u043B\u0438 \u0432\u044B \u0441\u0440\u0435\u0437\u0430\u0435\u0442\u0435 \u0444\u0430\u0441\u043E\u043B\u044C \u0434\u043E \u0441\u0431\u043E\u0440\u0430 \u0443\u0440\u043E\u0436\u0430\u044F \u0438\u0437-\u0437\u0430 \u0440\u0438\u0441\u043A\u0430 \u0441\u043C\u0435\u043D\u044B \u043F\u043E\u0433\u043E\u0434\u044B.",
        text: "<p>\u041A\u043E\u0441\u0438\u043B\u043A\u0430 \u0434\u043B\u044F \u0441\u0440\u0435\u0437\u0430\u043D\u0438\u044F \u0444\u0430\u0441\u043E\u043B\u0438 \u0432 \u0437\u0435\u043C\u043B\u0435 \u0444\u0438\u0440\u043C\u044B Sweere, \u043A\u043E\u0441\u0438\u0442 10 \u0440\u044F\u0434\u043E\u0432, \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043C\u0435\u0436\u0434\u0443 \u0440\u044F\u0434\u0430\u043C\u0438 37,5 \u0441\u043C.\n      \u0412 \u0440\u0430\u0439\u043E\u043D\u0430\u0445, \u0433\u0434\u0435 \u0443 \u0432\u0430\u0441 \u0432\u044B\u0440\u043E\u0441\u043B\u0438 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u0435 \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u044F, \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0447\u0435\u0433\u043E \u0441\u0442\u0440\u0443\u0447\u043A\u0438 \u043F\u043E\u0447\u0442\u0438 \u043A\u0430\u0441\u0430\u044E\u0442\u0441\u044F \u0437\u0435\u043C\u043B\u0438\n      \u0438\u043B\u0438 \u0432\u044B \u0441\u0440\u0435\u0437\u0430\u0435\u0442\u0435 \u0444\u0430\u0441\u043E\u043B\u044C \u0434\u043E \u0441\u0431\u043E\u0440\u0430 \u0443\u0440\u043E\u0436\u0430\u044F \u0438\u0437-\u0437\u0430 \u0440\u0438\u0441\u043A\u0430 \u0441\u043C\u0435\u043D\u044B \u043F\u043E\u0433\u043E\u0434\u044B,\n      \u043C\u044B \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u0441\u0438\u043B\u043A\u043E\u0439, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043A\u043E\u0441\u0438\u0442 \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u044F \u043F\u0440\u044F\u043C\u043E \u0432 \u0437\u0435\u043C\u043B\u0435.\n      <p>\u041E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438:</p>\n      <ul>\n        <li>\u0422\u0440\u0430\u043A\u0442\u043E\u0440 \u0441 \u043F\u0435\u0440\u0435\u0434\u043D\u0435\u0439 \u043D\u0430\u0432\u0435\u0441\u043A\u043E\u0439.\n        <li>5 \u0442\u044F\u0436\u0435\u043B\u044B\u0445 \u043F\u0430\u0440\u0430\u043B\u043B\u0435\u043B\u043E\u0433\u0440\u0430\u043C\u043C\u043E\u0432 \u043F\u0430\u0440\u0430\u043B\u043B\u0435\u043B\u044C\u043D\u043E \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u043D\u044B\u0445 \u0441 \u043F\u043E\u0434\u0448\u0438\u043F\u043D\u0438\u043A\u0430\u043C\u0438 \u0438 \u0442\u044F\u0436\u0435\u043B\u044B\u043C\u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u043C\u0438 \u043A\u043E\u043B\u0435\u0441\u0430\u043C\u0438.\n        <li>\u041F\u043E\u0434\u044A\u0435\u043C\u043D\u044B\u0439 \u0446\u0438\u043B\u0438\u043D\u0434\u0440 \u0432 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u0445 \u043F\u0430\u0440\u0430\u043B\u043B\u0435\u043B\u043E\u0433\u0440\u0430\u043C\u043C\u0430.\n        <li>\u041F\u0440\u0443\u0436\u0438\u043D\u044B \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u043C \u043D\u043E\u0436\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0442  \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C  \u043A\u0430\u0436\u0434\u044B\u0439 \u0440\u044F\u0434 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E.\n        <li>\u0421\u0442\u0443\u043F\u0435\u043D\u0447\u0430\u0442\u044B\u0439  \u0432\u044B\u0441\u043E\u043A\u0438\u0439  \u043A\u043B\u0438\u0440\u0435\u043D\u0441, \u043D\u043E\u0436\u0438 \u0441\u043C\u043E\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u044B \u043D\u0430 \u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u0440\u0430\u043C\u0435,\n          \u043F\u0430\u043D\u0435\u043B\u044C \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u0434\u043B\u044F \u043F\u0440\u0435\u0432\u043E\u0441\u0445\u043E\u0434\u043D\u043E\u0433\u043E \u043F\u043E\u0434\u043A\u043E\u043F\u0430 \u043D\u0430 \u0442\u044F\u0436\u0435\u043B\u044B\u0445 \u043F\u043E\u0447\u0432\u0430\u0445. \n        <li>\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u043A\u0430\u043B\u0438\u0431\u0440\u043E\u0432\u043E\u0447\u043D\u044B\u0435 \u043A\u043E\u043B\u0435\u0441\u0430 \u0441 \u043D\u043E\u0436\u0430\u043C\u0438 \u043B\u0435\u0433\u043A\u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0434\u043B\u044F \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0439 \u0433\u043B\u0443\u0431\u0438\u043D\u044B \u0441\u0440\u0435\u0437\u0430\u043D\u0438\u044F.\n        <li>\u041F\u043B\u0430\u0432\u0430\u044E\u0449\u0438\u0435 \u0440\u043E\u043B\u0438\u043A\u043E\u0432\u044B\u0435 \u0434\u0435\u043B\u0438\u0442\u0435\u043B\u0438 \u043E\u0441\u0442\u043E\u0440\u043E\u0436\u043D\u043E \u0440\u0430\u0437\u0434\u0435\u043B\u044F\u0442 \u0441\u0442\u0435\u0431\u043B\u0430.\n      </ul>\n      <p>\u041D\u0443\u0436\u043D\u0430\u044F \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u043A\u0430 \u0448\u0430\u0433\u0430 \u043A\u0430\u0436\u0434\u043E\u0439 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0433\u043E\u043B\u043E\u0432\u043A\u0438 \u0431\u044B\u0441\u0442\u0440\u043E \u0434\u043E\u0441\u0442\u0438\u0433\u0430\u0435\u0442\u0441\u044F \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u0442\u044F\u0436\u043D\u043E\u0439 \u0433\u0430\u0439\u043A\u043E\u0439.\n      \u0427\u0442\u043E\u0431\u044B \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0432\u0430\u043B\u043A\u0438 \u0432\u0430\u043C \u043D\u0443\u0436\u043D\u044B \u0432\u0430\u043B\u043A\u043E\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438.</p>"
    },
    {
        name: 'Double Master II',
        code: 'double_master_ii',
        imgNum: 4,
        func: 'Комбайн для уборки фасоли',
        desc: "\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u043C\u0431\u0430\u0439\u043D \u0434\u043B\u044F \u0441\u0431\u043E\u0440\u0430 \u0441\u0443\u0445\u0438\u0445 \u0431\u043E\u0431\u043E\u0432 \u0438 \u0430\u0440\u0430\u0445\u0438\u0441\u0430.\n      \u041A\u043E\u043C\u0431\u0430\u0439\u043D \u0434\u0430\u0435\u0442 \u0412\u0430\u043C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0441\u043E\u0431\u0438\u0440\u0430\u0442\u044C \u0444\u0430\u0441\u043E\u043B\u044C, \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u043E\u0442 \u043F\u043E\u0433\u043E\u0434\u043D\u044B\u0445 \u0438 \u043F\u043E\u043B\u0435\u0432\u044B\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u0439,\n      \u0447\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u0441\u043E\u0431\u0438\u0440\u0430\u0442\u044C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439, \u0447\u0438\u0441\u0442\u044B\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0412\u044B \u0437\u0430\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u0435\u0442\u0435.",
        text: "<p>Double Master II - \u044D\u0442\u043E \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u043C\u0431\u0430\u0439\u043D \u0434\u043B\u044F \u0441\u0431\u043E\u0440\u0430 \u0441\u0443\u0445\u0438\u0445 \u0431\u043E\u0431\u043E\u0432 \u0438 \u0430\u0440\u0430\u0445\u0438\u0441\u0430.\n      \u041A\u043E\u043C\u0431\u0430\u0439\u043D \u0434\u0430\u0435\u0442 \u0412\u0430\u043C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0441\u043E\u0431\u0438\u0440\u0430\u0442\u044C \u0444\u0430\u0441\u043E\u043B\u044C, \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u043E\u0442 \u043F\u043E\u0433\u043E\u0434\u043D\u044B\u0445 \u0438 \u043F\u043E\u043B\u0435\u0432\u044B\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u0439,\n      \u0447\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u0412\u0430\u043C \u0441\u043E\u0431\u0438\u0440\u0430\u0442\u044C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0412\u044B \u0437\u0430\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u0435\u0442\u0435.</p>\n      <div class=\"video-container\">\n        <iframe width=\"698\" height=\"418\" src=\"https://www.youtube.com/embed/np5DSUz5YF8\" frameborder=\"0\" allowfullscreen></iframe>\n      </div>\n      <p>\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u0443\u043C\u043D\u043E\u0439 \u043F\u043B\u0430\u0432\u0443\u0447\u0435\u0441\u0442\u0438 (\u0430 smart flotation system) \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u043A\u043E\u043D\u0442\u0443\u0440\u0430\u043C \u043F\u043E\u0447\u0432\u044B,\n      \u0447\u0442\u043E\u0431\u044B \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u0443\u044E \u0432\u044B\u0441\u043E\u0442\u0443 \u0441\u0431\u043E\u0440\u0449\u0438\u043A\u0430. \u042D\u0442\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0441\u0431\u043E\u0440\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438,\n      \u0430 \u0442\u0430\u043A\u0436\u0435 \u0441\u043D\u0438\u0436\u0430\u0435\u0442 \u043F\u043E\u043F\u0430\u0434\u0430\u043D\u0438\u0435 \u0433\u0440\u044F\u0437\u0438 \u0438 \u043A\u0430\u043C\u043D\u0435\u0439 \u0432 \u0440\u0430\u0431\u043E\u0447\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u044B \u043A\u043E\u043C\u0431\u0430\u0439\u043D\u0430.\n      <div class=\"video-container\">\n        <iframe width=\"698\" height=\"418\" src=\"https://www.youtube.com/embed/ZnxXqF162RE\" frameborder=\"0\" allowfullscreen></iframe>\n      </div>\n      <p>\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u0444\u0438\u0440\u043C\u0435\u043D\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u043E\u0431\u043C\u043E\u043B\u043E\u0442\u0430 Active Flow, \u0431\u043B\u043E\u043A \u043E\u0431\u043C\u043E\u043B\u043E\u0442\u0430 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D \u043D\u0430 \u043B\u044E\u0431\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u043F\u043E\u0441\u0435\u0432\u043E\u0432,\n      \u043D\u0435 \u0441\u0442\u0430\u0432\u044F \u043F\u043E\u0434 \u0443\u0433\u0440\u043E\u0437\u0443 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0443\u0431\u043E\u0440\u043A\u0438.\n      <div class=\"video-container\">\n        <iframe width=\"698\" height=\"418\" src=\"https://www.youtube.com/embed/FxS-kHUgNuU\" frameborder=\"0\" allowfullscreen></iframe>\n      </div>\n      <p>\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F:</p>\n      <ul>\n        <li>\u0422\u0440\u0435\u0431\u0443\u0435\u043C\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C: 85 \u043B.\u0441. (65\u043A\u0412\u0442)\n        <li>\u041F\u0440\u0438\u0446\u0435\u043F\u043D\u043E\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u043E \u0442\u0440\u0430\u043A\u0442\u043E\u0440\u0430\n        <li>\u0414\u0432\u0430 \u0433\u0438\u0434\u0440\u0430\u0432\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F</li>\n      </ul>\n      <p>\u0423\u0437\u0435\u043B \u0441\u0431\u043E\u0440\u043A\u0438:</p>\n      <ul>\n        <li>\u0428\u0438\u0440\u0438\u043D\u0430 \u0441\u0431\u043E\u0440\u0449\u0438\u043A\u0430: 180\u0441\u043C\n        <li>\u041F\u0440\u0443\u0436\u0438\u043D\u043D\u044B\u0435 \u043F\u0430\u043B\u044C\u0446\u044B \u0441\u0431\u043E\u0440\u0449\u0438\u043A\u0430\n        <li>90 \u043F\u0430\u043B\u044C\u0446\u0435\u0432 \u0441\u0431\u043E\u0440\u0449\u0438\u043A\u0430</li>\n      </ul>\n      <p>\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u043E\u0447\u0438\u0441\u0442\u043A\u0438:</p>\n      <ul>\n        <li>\u041F\u043B\u043E\u0449\u0430\u0434\u044C \u043E\u0447\u0438\u0441\u0442\u043A\u0438 \u0433\u043B\u0430\u0432\u043D\u043E\u0433\u043E \u044D\u043A\u0440\u0430\u043D\u0430: 2,36 m\u00B2\n        <li>\u0420\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0439 \u0432\u043E\u0437\u0434\u0443\u0448\u043D\u044B\u0439 \u043F\u043E\u0442\u043E\u043A\n        <li>\u0414\u0438\u0430\u043C\u0435\u0442\u0440 \u0442\u0443\u0440\u0431\u0438\u043D\u044B: 70\u0441\u043C</li>\n      </ul>\n      <p>\u0415\u043C\u043A\u043E\u0441\u0442\u044C \u0431\u0443\u043D\u043A\u0435\u0440\u0430: 3.000kg\n      <p>\u0413\u0430\u0431\u0430\u0440\u0438\u0442\u043D\u044B\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u044B</p>\n      <ul>\n        <li>\u0420\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043C\u0435\u0436\u0434\u0443 \u043A\u043E\u043B\u0435\u0441: 109 \u0441\u043C\n        <li>\u0420\u0430\u0437\u043C\u0435\u0440 \u043A\u043E\u043B\u0435\u0441: 467/28 \n        <li>\u0412\u0435\u0441: 3.750kg\n        <li>\u0428\u0438\u0440\u0438\u043D\u0430: 245 \u0441\u043C\n        <li>\u0414\u043B\u0438\u043D\u0430: 660cm\n        <li>\u0412\u044B\u0441\u043E\u0442\u0430: 430cm\n        <li>\u0428\u0438\u043D\u044B: 376/30.\n      </ul>"
    },
    {
        name: 'Double Master IV',
        code: 'double_master_iv',
        imgNum: 5,
        func: 'Универсальный комбайн',
        desc: "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u0443\u043C\u043D\u043E\u0439 \u043F\u043B\u0430\u0432\u0443\u0447\u0435\u0441\u0442\u0438 \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u043A\u043E\u043D\u0442\u0443\u0440\u0430\u043C \u043F\u043E\u0447\u0432\u044B, \u0447\u0442\u043E\u0431\u044B \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u0443\u044E \u0432\u044B\u0441\u043E\u0442\u0443 \u0441\u0431\u043E\u0440\u0449\u0438\u043A\u0430.\n      \u042D\u0442\u043E \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0441\u0431\u043E\u0440\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u0438 \u0441\u043D\u0438\u0436\u0430\u0435\u0442 \u043F\u043E\u043F\u0430\u0434\u0430\u043D\u0438\u0435 \u0433\u0440\u044F\u0437\u0438 \u0438 \u043A\u0430\u043C\u043D\u0435\u0439 \u0432 \u0440\u0430\u0431\u043E\u0447\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u044B \u043A\u043E\u043C\u0431\u0430\u0439\u043D\u0430.\n      \u0411\u043B\u043E\u043A \u043E\u0431\u043C\u043E\u043B\u043E\u0442\u0430 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D \u043D\u0430 \u043B\u044E\u0431\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u043F\u043E\u0441\u0435\u0432\u043E\u0432.",
        text: "\n      <p>Double Master IV \u2013 \u044D\u0442\u043E \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u043C\u0431\u0430\u0439\u043D \u0434\u043B\u044F \u0441\u0431\u043E\u0440\u0430 \u0441\u0443\u0445\u0438\u0445 \u0431\u043E\u0431\u043E\u0432 \u0438 \u0430\u0440\u0430\u0445\u0438\u0441\u0430.\n      \u041A\u043E\u043C\u0431\u0430\u0439\u043D \u0434\u0430\u0435\u0442 \u0412\u0430\u043C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0441\u043E\u0431\u0438\u0440\u0430\u0442\u044C \u0444\u0430\u0441\u043E\u043B\u044C, \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u043E\u0442 \u043F\u043E\u0433\u043E\u0434\u043D\u044B\u0445 \u0438 \u043F\u043E\u043B\u0435\u0432\u044B\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u0439,\n      \u0447\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u0412\u0430\u043C \u0441\u043E\u0431\u0438\u0440\u0430\u0442\u044C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0412\u044B \u0437\u0430\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u0435\u0442\u0435.</p>      \n      <div class=\"video-container\">\n        <iframe width=\"536\" height=\"354\" src=\"https://www.youtube.com/embed/9HdKSfoThVs\" frameborder=\"0\" allowfullscreen></iframe>\n      </div>\n      <p>\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u0443\u043C\u043D\u043E\u0439 \u043F\u043B\u0430\u0432\u0443\u0447\u0435\u0441\u0442\u0438 (\u0430 smart flotation system) \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u043A\u043E\u043D\u0442\u0443\u0440\u0430\u043C \u043F\u043E\u0447\u0432\u044B,\n        \u0447\u0442\u043E\u0431\u044B \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u0443\u044E \u0432\u044B\u0441\u043E\u0442\u0443 \u0441\u0431\u043E\u0440\u0449\u0438\u043A\u0430. \u042D\u0442\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0441\u0431\u043E\u0440\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438,\n        \u0430 \u0442\u0430\u043A\u0436\u0435 \u0441\u043D\u0438\u0436\u0430\u0435\u0442 \u043F\u043E\u043F\u0430\u0434\u0430\u043D\u0438\u0435 \u0433\u0440\u044F\u0437\u0438 \u0438 \u043A\u0430\u043C\u043D\u0435\u0439 \u0432 \u0440\u0430\u0431\u043E\u0447\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u044B \u043A\u043E\u043C\u0431\u0430\u0439\u043D\u0430.</p>\n      <div class=\"video-container\">\n        <iframe width=\"536\" height=\"354\" src=\"https://www.youtube.com/embed/FxS-kHUgNuU\" frameborder=\"0\" allowfullscreen></iframe>\n      </div>\n      <p>\u0421\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 Double Master IV:</p>\n      <ul>\n        <li>\u0422\u0440\u0435\u0431\u0443\u0435\u043C\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C: 100-130 \u043B.\u0441.</li>\n        <li>\u041F\u0440\u0438\u0446\u0435\u043F\u043D\u043E\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u043E \u0442\u0440\u0430\u043A\u0442\u043E\u0440\u0430</li>\n        <li>\u0414\u0432\u0430 \u0433\u0438\u0434\u0440\u0430\u0432\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F</li>\n      </ul>\n      <p>\u041F\u043E\u0434\u0431\u043E\u0440:</p>\n      <ul>\n        <li>\u0420\u0430\u0431\u043E\u0447\u0430\u044F \u0448\u0438\u0440\u0438\u043D\u0430: 185\u0441\u043C</li>\n        <li>\u0413\u0438\u0431\u043A\u0438\u0435 \u043F\u0430\u043B\u044C\u0446\u044B \u0441\u0431\u043E\u0440\u0449\u0438\u043A\u0430</li>\n        <li>90 \u043F\u0430\u043B\u044C\u0446\u0435\u0432 \u0441\u0431\u043E\u0440\u0449\u0438\u043A\u0430</li>\n      </ul>\n      <p>\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u043E\u0447\u0438\u0441\u0442\u043A\u0438:</p>\n      <ul>\n        <li>\u0414\u0438\u0430\u043C\u0435\u0442\u0440 \u0446\u0438\u043B\u0438\u043D\u0434\u0440\u0430 \u043E\u0447\u0438\u0441\u0442\u043A\u0438: 48cm</li>\n        <li>\u0414\u043B\u0438\u043D\u0430 \u0446\u0438\u043B\u0438\u043D\u0434\u0440 \u043E\u0447\u0438\u0441\u0442\u043A\u0438: 379,6cm</li>\n        <li>\u0420\u0430\u0431\u043E\u0447\u0430\u044F \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C: 540rpm(\u043E\u0431\u043E\u0440\u043E\u0442\u043E\u0432 \u0432 \u043C\u0438\u043D\u0443\u0442\u0443)</li>\n        <li>\u0420\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0432\u0441\u0430\u0441\u044B\u0432\u0430\u043D\u0438\u044F</li>\n        <li>\u0414\u0438\u0430\u043C\u0435\u0442\u0440 \u0442\u0443\u0440\u0431\u0438\u043D\u044B: 700\u043C\u043C</li>\n      </ul>\n      <p>\u0415\u043C\u043A\u043E\u0441\u0442\u044C \u0431\u0443\u043D\u043A\u0435\u0440\u0430: 3000 \u043A\u0433</p>\n      <p>\u0413\u0430\u0431\u0430\u0440\u0438\u0442\u043D\u044B\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u044B:</p>\n      <ul>\n        <li>\u0414\u043B\u0438\u043D\u0430: 744cm</li>\n        <li>\u0428\u0438\u0440\u0438\u043D\u0430: 310cm</li>\n        <li>\u041A\u043E\u043B\u0435\u0441\u0430: 18,4 * 26 \"</li>\n        <li>\u0412\u0435\u0441: 4640 \u043A\u0433</li>\n      </ul>"
    },
    {
        name: 'Manual Master',
        code: 'manual_master',
        imgNum: 6,
        func: 'Ручной комбайн',
        desc: "\u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u043E\u0431\u043E\u0439 \u043F\u0440\u043E\u0441\u0442\u043E\u0439 \u0432 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438 \u0440\u0443\u0447\u043D\u043E\u0439 \u043F\u043E\u0434\u0430\u044E\u0449\u0438\u0439 \u0431\u043B\u043E\u043A \u0434\u043B\u044F \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0431\u043C\u043E\u043B\u043E\u0442\u0430.\n      \u042D\u0442\u0430 \u043C\u0430\u0448\u0438\u043D\u0430 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0437\u0430\u0434\u0435\u0439\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u043C\u0435\u0445\u0430\u043D\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0443\u044E \u0443\u0431\u043E\u0440\u043A\u0443 \u0434\u043B\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u0441 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u043C\u0438 \u0443\u0447\u0430\u0441\u0442\u043A\u0430\u043C\u0438 \u0437\u0435\u043C\u043B\u0438,\n      \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u044F \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u0438 \u0447\u0438\u0441\u0442\u044B\u0439 \u043E\u0431\u043C\u043E\u043B\u043E\u0442 \u0441\u0443\u0445\u0438\u0445 \u0431\u043E\u0431\u043E\u0432 \u0438 \u0430\u0440\u0430\u0445\u0438\u0441\u0430.",
        text: "<p>Manual Master \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u043E\u0431\u043E\u0439 \u043F\u0440\u043E\u0441\u0442\u043E\u0439 \u0432 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438 \u0440\u0443\u0447\u043D\u043E\u0439 \u043F\u043E\u0434\u0430\u044E\u0449\u0438\u0439 \u0431\u043B\u043E\u043A \u0434\u043B\u044F \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0431\u043C\u043E\u043B\u043E\u0442\u0430.\n      \u042D\u0442\u0430 \u043C\u0430\u0448\u0438\u043D\u0430 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0437\u0430\u0434\u0435\u0439\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u043C\u0435\u0445\u0430\u043D\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0443\u044E \u0443\u0431\u043E\u0440\u043A\u0443 \u0434\u043B\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u0441 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u043C\u0438 \u0443\u0447\u0430\u0441\u0442\u043A\u0430\u043C\u0438 \u0437\u0435\u043C\u043B\u0438,\n      \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u044F \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u0438 \u0447\u0438\u0441\u0442\u044B\u0439 \u043E\u0431\u043C\u043E\u043B\u043E\u0442 \u0441\u0443\u0445\u0438\u0445 \u0431\u043E\u0431\u043E\u0432 \u0438 \u0430\u0440\u0430\u0445\u0438\u0441\u0430.</p>\n      <div class=\"video-container\">\n        <iframe width=\"536\" height=\"354\" src=\"https://www.youtube.com/embed/ualH365Up9w\" frameborder=\"0\" allowfullscreen></iframe>\n      </div>\n      <p>\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F:</p>\n      <ul>\n        <li>\u0422\u0440\u0435\u0431\u0443\u0435\u043C\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C: 75\u043B.\u0441.\n        <li>RPM: 540</li>\n      </ul>\n      <p>\u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438:</p>\n      <ul>\n        <li>\u0414\u0438\u0430\u043C\u0435\u0442\u0440 \u0446\u0438\u043B\u0438\u043D\u0434\u0440\u0430: 60 \u0441\u043C\n        <li>\u0414\u0438\u0430\u043C\u0435\u0442\u0440 \u0442\u0443\u0440\u0431\u0438\u043D\u044B: 70 \u0441\u043C</li>\n      </ul>\n      <p>\u0413\u0430\u0431\u0430\u0440\u0438\u0442\u043D\u044B\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u044B:</p>\n      <ul>\n        <li>\u0414\u043B\u0438\u043D\u0430: 355 \u0441\u043C\n        <li>\u0428\u0438\u0440\u0438\u043D\u0430: 135 \u0441\u043C\n        <li>\u0412\u044B\u0441\u043E\u0442\u0430: 320 \u0441\u043C\n        <li>\u0412\u0435\u0441: 1350kg</li>\n      </ul>"
    },
    {
        name: 'C200 Peanut Digger',
        code: 'c200_peanut_digger',
        imgNum: 3,
        func: 'Срезание в земле, формировка',
        desc: "\u0414\u0432\u0443\u0445\u0440\u044F\u0434\u043D\u0430\u044F \u0438 \u0447\u0435\u0442\u044B\u0440\u0435\u0445\u0440\u044F\u0434\u043D\u0430\u044F \u043A\u043E\u0441\u0438\u043B\u043A\u0430 C200 Peanut Digger \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0430 \u0434\u043B\u044F \u0432\u044B\u043A\u0430\u043F\u044B\u0432\u0430\u043D\u0438\u044F \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u0439 \u0444\u0430\u0441\u043E\u043B\u0438 \u0438 \u0430\u0440\u0430\u0445\u0438\u0441\u0430,\n      \u0430 \u0442\u0430\u043A \u0436\u0435 \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0432\u0430\u043B\u043A\u043E\u0432. \u041E\u0441\u043D\u0430\u0449\u0435\u043D\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439 \u0434\u043B\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0437\u0435\u043C\u043B\u0438,\n      \u043A\u0430\u043C\u0435\u0439 \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432, \u0447\u0442\u043E\u0431\u044B \u043D\u0435 \u043F\u043E\u0432\u0440\u0435\u0434\u0438\u0442\u044C \u043A\u043E\u043C\u0431\u0430\u0439\u043D, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0431\u0443\u0434\u0435\u0442 \u0441\u043E\u0431\u0438\u0440\u0430\u0442\u044C \u0444\u0430\u0441\u043E\u043B\u044C \u0438\u043B\u0438 \u0430\u0440\u0430\u0445\u0438\u0441",
        text: "<p>\u0414\u0432\u0443\u0445\u0440\u044F\u0434\u043D\u0430\u044F \u0438 \u0447\u0435\u0442\u044B\u0440\u0435\u0445\u0440\u044F\u0434\u043D\u0430\u044F \u043A\u043E\u0441\u0438\u043B\u043A\u0430 C200 Peanut Digger  \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0430  \u0434\u043B\u044F \u0432\u044B\u043A\u0430\u043F\u044B\u0432\u0430\u043D\u0438\u044F \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u0439 \u0444\u0430\u0441\u043E\u043B\u0438 \u0438 \u0430\u0440\u0430\u0445\u0438\u0441\u0430,\n      \u0430 \u0442\u0430\u043A \u0436\u0435 \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0432\u0430\u043B\u043A\u043E\u0432 \u0434\u043B\u044F \u0443\u0434\u043E\u0431\u043D\u043E\u0433\u043E \u043C\u0435\u0445\u0430\u043D\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0441\u0431\u043E\u0440\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438. \u041C\u0430\u0448\u0438\u043D\u0430 \u043E\u0441\u043D\u0430\u0449\u0435\u043D\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439 \u0434\u043B\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0437\u0435\u043C\u043B\u0438,\n      \u043A\u0430\u043C\u043D\u0435\u0439 \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432 \u0438\u0437 \u043B\u043E\u0437\u044B, \u0447\u0442\u043E\u0431\u044B \u043D\u0435 \u043F\u043E\u0432\u0440\u0435\u0434\u0438\u0442\u044C \u043A\u043E\u043C\u0431\u0430\u0439\u043D, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0431\u0443\u0434\u0435\u0442 \u0441\u043E\u0431\u0438\u0440\u0430\u0442\u044C \u0444\u0430\u0441\u043E\u043B\u044C (\u0430\u0440\u0430\u0445\u0438\u0441).</p>"
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
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
    return HeaderComponent;
}());



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
var lines = [
    {
        name: 'Шнековый конвейер PT-50',
        code: 'shnekovyi_konveer_pt-50',
        imgNum: 1,
        desc: 'Предотвращает рассыпание ягод при транспортировке, позволяет равномерно подавать их в последующие агрегаты',
        list: "\n      \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0428\u043D\u0435\u043A\u043E\u0432\u044B\u0439 \u043A\u043E\u043D\u0432\u0435\u0439\u0435\u0440\n      \u0422\u0438\u043F \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: PT-50\n      \u0426\u0435\u043B\u044C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0420\u0430\u0432\u043D\u043E\u043C\u0435\u0440\u043D\u0430\u044F \u043F\u043E\u0434\u0430\u0447\u0430 \u043F\u043B\u043E\u0434\u043E\u0432 \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u044B.\n      \u0426\u0432\u0435\u0442 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u0435\u043E\u043A\u0440\u0430\u0448\u0435\u043D\u043D\u044B\u0435 \u043B\u0438\u0441\u0442 \u0438\u0437 \u043D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0435\u0439 \u0441\u0442\u0430\u043B\u0438 \u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u043E\u0432\u043E\u0435\n      \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u044B: SRPS, DIN, ISO\n      \u041E\u043F\u043E\u0440\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u043D\u0430 \u0447\u0435\u0442\u044B\u0440\u0435\u0445 \u043A\u043E\u043B\u0435\u0441\u0430\u0445; \u0431\u0435\u0437 \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0438 \u043A \u0444\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442\u0443\n      \u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044B \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: 3520x1250x3170 \u043C\u043C\n      \u0412\u044B\u0441\u043E\u0442\u0430 \u043F\u0440\u0438\u0435\u043C\u0430: 965 \u043C\u043C\n      \u0412\u044B\u0441\u043E\u0442\u0430 \u043F\u043E\u0434\u0430\u0447\u0438: 2146 \u043C\u043C\n      \u0423\u0440\u043E\u0432\u0435\u043D\u044C \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438: \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439\n      \u041E\u043F\u043E\u0440\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F: \u0416\u0435\u0441\u0442\u044C, \u0441\u0432\u0430\u0440\u043D\u044B\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u0438.\n      \u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043C\u043E\u0434\u0443\u043B\u044C: \u041D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0430\u044F \u0441\u0442\u0430\u043B\u044C\n      \u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u043B\u0438\u0441\u0442\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0438\u0440\u0443\u044E\u0442 \u0441 \u043F\u043B\u043E\u0434\u0430\u043C\u0438: \u043A\u0438\u0441\u043B\u043E\u0442\u043E\u0443\u043F\u043E\u0440\u043D\u044B\u0439 \u043B\u0438\u0441\u0442 \u0438\u0437 \u043D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0435\u0439 \u0441\u0442\u0430\u043B\u0438 WN 1.4301\n      \u041F\u0440\u0438\u0432\u043E\u0434\u043D\u043E\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E: \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043C\u043E\u0442\u043E\u0440 P=1,1kW\n      \u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435: 380 V",
        text: "\u0428\u043D\u0435\u043A\u043E\u0432\u044B\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0435\u0440 \u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0440\u0430\u0441\u0441\u044B\u043F\u0430\u043D\u0438\u0435 \u044F\u0433\u043E\u0434 \u0432 \u043F\u0435\u0440\u0438\u043E\u0434 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0438,\n     \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0440\u0430\u0432\u043D\u043E\u043C\u0435\u0440\u043D\u043E \u043F\u043E\u0434\u0430\u0432\u0430\u0442\u044C \u0438\u0445 \u0432 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u044B. \u041F\u0440\u043E\u0441\u0442\u043E\u0442\u0430 \u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u044C \u0432 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0438."
    },
    {
        name: 'Роликовый транспортер (Ролганг) RG-01',
        code: 'rolang_rg-01',
        imgNum: 1,
        desc: 'Перемещает продукцию',
        list: "\n      \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0420\u043E\u043B\u0438\u043A\u043E\u0432\u044B\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0435\u0440 (\u0420\u043E\u043B\u0433\u0430\u043D\u0433)\n      \u0422\u0438\u043F \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: RG-01\n      \u0426\u0435\u043B\u044C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u043F\u043E\u0434 \u0441\u0432\u043E\u0438\u043C \u0432\u0435\u0441\u043E\u043C \u0438\u043B\u0438 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0443\u0441\u0438\u043B\u0438\u0439 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430.\n      \u0426\u0432\u0435\u0442 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u0435\u043E\u043A\u0440\u0430\u0448\u0435\u043D\u043D\u044B\u0435 \u043B\u0438\u0441\u0442 \u0438\u0437 \u043D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0435\u0439 \u0441\u0442\u0430\u043B\u0438 \u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u043E\u0432\u043E\u0435\n      \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u044B: SRPS, DIN, ISO\n      \u041E\u043F\u043E\u0440\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0420\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0435 \u043E\u043F\u043E\u0440\u044B.\n      \u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044B \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 (\u0414\u0445\u0428\u0445\u0412): 1240x460x155 \u043C\u043C\n      \u0412\u0435\u0441 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: 11 \u043A\u0433\n      \u041E\u043F\u043E\u0440\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F: \u0416\u0435\u0441\u0442\u044C, \u0441\u0432\u0430\u0440\u043D\u044B\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043C\u043E\u0434\u0443\u043B\u044C: \u041D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0430\u044F \u0441\u0442\u0430\u043B\u044C.",
        text: "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u043F\u043E\u0434 \u0441\u0432\u043E\u0438\u043C \u0432\u0435\u0441\u043E\u043C \u0438\u043B\u0438 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0443\u0441\u0438\u043B\u0438\u0439 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430."
    },
    {
        name: 'Роликовый транспортер (Ролганг) RG-02',
        code: 'rolang_rg-02',
        imgNum: 1,
        desc: 'Перемещает коробоки, ящики под тяжестью товара или с помощью усилий человека',
        list: "\n      \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0420\u043E\u043B\u0438\u043A\u043E\u0432\u044B\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0435\u0440 (\u0420\u043E\u043B\u0433\u0430\u043D\u0433)\n      \u0422\u0438\u043F \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: RG-02\n      \u0426\u0435\u043B\u044C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u043F\u043E\u0434 \u0441\u0432\u043E\u0438\u043C \u0432\u0435\u0441\u043E\u043C \u0438\u043B\u0438 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0443\u0441\u0438\u043B\u0438\u0439 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430.\n      \u0426\u0432\u0435\u0442 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u0435\u043E\u043A\u0440\u0430\u0448\u0435\u043D\u043D\u044B\u0435 \u043B\u0438\u0441\u0442 \u0438\u0437 \u043D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0435\u0439 \u0441\u0442\u0430\u043B\u0438 \u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u043E\u0432\u043E\u0435\n      \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u044B: SRPS, DIN, ISO\n      \u041E\u043F\u043E\u0440\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0420\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0435 \u043E\u043F\u043E\u0440\u044B.\n      \u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044B \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 (\u0414\u0445\u0428\u0445\u0412): 3240x360x40 \u043C\u043C\n      \u0412\u0435\u0441 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: 20 \u043A\u0433\n      \u041E\u043F\u043E\u0440\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F: \u0416\u0435\u0441\u0442\u044C / \u0421\u0432\u0430\u0440\u043D\u044B\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043C\u043E\u0434\u0443\u043B\u044C: \u041D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0430\u044F \u0441\u0442\u0430\u043B\u044C",
        text: "\u0420\u043E\u043B\u0433\u0430\u043D\u0433 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u043A\u043E\u0440\u043E\u0431\u043E\u043A, \u044F\u0449\u0438\u043A\u043E\u0432 \u0438 \u043F\u0440. \u0420\u043E\u043B\u0438\u043A\u043E\u0432\u044B\u0439 \u043A\u043E\u043D\u0432\u0435\u0439\u0435\u0440 \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u0440\u043E\u043B\u0438\u043A\u043E\u0432 \u0438 \u043F\u043E\u0434\u0448\u0438\u043F\u043D\u0438\u043A\u043E\u0432,\n      \u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043E\u043D\u0438 \u0432\u0440\u0430\u0449\u0430\u044E\u0442\u0441\u044F. \u0420\u043E\u043B\u0438\u043A\u0438 \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u043F\u043E\u0434 \u0443\u0433\u043B\u043E\u043C \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u0447\u0435\u043C\u0443 \u043E\u043D\u0438 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E \u0432\u0440\u0430\u0449\u0430\u044E\u0442\u0441\u044F\n      \u043F\u043E\u0434 \u0442\u044F\u0436\u0435\u0441\u0442\u044C\u044E \u0433\u0440\u0443\u0437\u0430 \u0438\u043B\u0438 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0443\u0441\u0438\u043B\u0438\u0439 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430."
    },
    {
        name: 'Роликовый транспортер (Ролганг) RG-50',
        code: 'rolang_rg-50',
        imgNum: 1,
        desc: 'Перемещает плоды',
        list: "\n      \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0420\u043E\u043B\u0438\u043A\u043E\u0432\u044B\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0435\u0440 (\u0420\u043E\u043B\u0433\u0430\u043D\u0433)\n      \u0422\u0438\u043F \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: RG-50\n      \u0426\u0435\u043B\u044C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u043F\u043E\u0434 \u0441\u0432\u043E\u0438\u043C \u0432\u0435\u0441\u043E\u043C \u0438\u043B\u0438 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0443\u0441\u0438\u043B\u0438\u0439 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430.\n      \u0426\u0432\u0435\u0442 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u0435\u043E\u043A\u0440\u0430\u0448\u0435\u043D\u043D\u044B\u0435 \u043B\u0438\u0441\u0442 \u0438\u0437 \u043D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0435\u0439 \u0441\u0442\u0430\u043B\u0438 \u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u043E\u0432\u043E\u0435\n      \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u044B: SRPS, DIN, ISO\n      \u041E\u043F\u043E\u0440\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0420\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0435 \u043E\u043F\u043E\u0440\u044B.\n      \u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044B \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: 1240x460x800 \u043C\u043C\n      \u0423\u0433\u043E\u043B \u0443\u043A\u043B\u043E\u043D\u0430: \u043E\u0442 0 \u0434\u043E 45\u00BA\n      \u0412\u0435\u0441 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: 22 \u043A\u0433\n      \u041E\u043F\u043E\u0440\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F: \u0416\u0435\u0441\u0442\u044C / \u0441\u0432\u0430\u0440\u043D\u044B\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043C\u043E\u0434\u0443\u043B\u044C: \u041D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0430\u044F \u0441\u0442\u0430\u043B\u044C",
        text: "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u043F\u043E\u0434 \u0441\u0432\u043E\u0438\u043C \u0432\u0435\u0441\u043E\u043C \u0438\u043B\u0438 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0443\u0441\u0438\u043B\u0438\u0439 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430."
    },
    {
        name: 'Веялка D-01',
        code: 'vejalka_d-01',
        imgNum: 2,
        desc: 'Очищает от мелких, легких вкраплений и мусора',
        list: "\n      \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0412\u0435\u044F\u043B\u043A\u0430\n      \u0422\u0438\u043F \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: D-01\n      \u0426\u0435\u043B\u044C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0412\u044B\u0434\u0443\u0432\u0430\u0435\u0442 \u0441 \u043F\u043B\u043E\u0434\u043E\u0432 \u043D\u0435\u0436\u0435\u043B\u0430\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u043F\u0440\u0438\u043C\u0435\u0441\u044C.\n      \u0426\u0432\u0435\u0442 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u0435\u043E\u043A\u0440\u0430\u0448\u0435\u043D\u043D\u044B\u0435 \u043B\u0438\u0441\u0442 \u0438\u0437 \u043D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0435\u0439 \u0441\u0442\u0430\u043B\u0438 \u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u043E\u0432\u043E\u0435\n      \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u044B: SRPS, DIN, ISO\n      \u041E\u043F\u043E\u0440\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0420\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0435 \u043E\u043F\u043E\u0440\u044B.\n      \u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044B \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 (\u0414\u0445\u0428\u0445\u0412): 1570x700x1110 \u043C\u043C\n      \u041E\u043F\u043E\u0440\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F: \u0416\u0435\u0441\u0442\u044C, \u0441\u0432\u0430\u0440\u043D\u044B\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u0438.\n      \u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043C\u043E\u0434\u0443\u043B\u044C: \u041D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0430\u044F \u0441\u0442\u0430\u043B\u044C\n      \u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F: P=0.75 kW\n      \u041E\u0431\u043E\u0440\u043E\u0442\u044B \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F: 2800 \u043E/\u043C\u0438\u043D\n      \u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435: U= 380 V",
        text: "\u0412\u0435\u044F\u043B\u043A\u0438 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u044B \u0434\u043B\u044F \u043E\u0447\u0438\u0441\u0442\u043A\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430 \u043E\u0442 \u043C\u0435\u043B\u043A\u0438\u0445 \u0438 \u043B\u0435\u0433\u043A\u0438\u0445 \u0432\u043A\u0440\u0430\u043F\u043B\u0435\u043D\u0438\u0439 \u0438 \u043C\u0443\u0441\u043E\u0440\u0430.\n      \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043F\u0440\u0438 \u043E\u0447\u0438\u0441\u0442\u043A\u0435 \u0437\u0430\u043C\u043E\u0440\u043E\u0436\u0435\u043D\u043D\u044B\u0445 \u044F\u0433\u043E\u0434 \u0432\u0435\u044F\u043B\u043A\u0438 \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F \u0434\u043B\u044F \u043E\u0442\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u043B\u0438\u0441\u0442\u044C\u0435\u0432, \u0437\u0430\u0441\u043E\u0445\u0448\u0438\u0445 \u044F\u0433\u043E\u0434, \u043E\u0442\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0439 \u043F\u043B\u043E\u0434\u043E\u043D\u043E\u0436\u043A\u0438.\n      \u041F\u0440\u0438 \u043E\u0447\u0438\u0441\u0442\u043A\u0435 \u043E\u0440\u0435\u0445\u043E\u0432, \u0432\u0435\u044F\u043B\u043A\u0438 \u043E\u0442\u0434\u0435\u043B\u044F\u044E\u0442 \u0448\u0435\u043B\u0443\u0445\u0443 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043B\u0435\u0433\u043A\u0438\u0435 \u0434\u043E\u0431\u0430\u0432\u043A\u0438."
    },
    {
        name: 'Вибрационный калибратор VG-08',
        code: 'vibratsionnyi_kalibrator_vg-08',
        imgNum: 1,
        desc: 'Удаляет мусор, распределяет плоды на 3 фракции',
        list: "\n      \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0412\u0438\u0431\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043A\u0430\u043B\u0438\u0431\u0440\u0430\u0442\u043E\u0440\n      \u0422\u0438\u043F \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: VG-08\n      \u0426\u0435\u043B\u044C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u043C\u0443\u0441\u043E\u0440\u0430 \u0438 \u043D\u0435\u0436\u0435\u043B\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043F\u0440\u0438\u043C\u0435\u0441\u0435\u0439, \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u043F\u043B\u043E\u0434\u043E\u0432 \u043D\u0430 3 \u0444\u0440\u0430\u043A\u0446\u0438\u0438.\n      \u0426\u0432\u0435\u0442 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u0435\u043E\u043A\u0440\u0430\u0448\u0435\u043D\u043D\u044B\u0435 \u043B\u0438\u0441\u0442 \u0438\u0437 \u043D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0435\u0439 \u0441\u0442\u0430\u043B\u0438 \u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u043E\u0432\u043E\u0435\n      \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u044B: SRPS, DIN, ISO\n      \u041E\u043F\u043E\u0440\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0412\u043E\u0441\u0435\u043C\u044C \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0445 \u043E\u043F\u043E\u0440, \u0431\u0435\u0437 \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0438 \u043A \u0444\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442\u0443\n      \u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044B \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 (\u0414\u0445\u0428\u0445\u0412): 3365x1240x1960\u043C\u043C\n      \u041E\u043F\u043E\u0440\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F: \u0416\u0435\u0441\u0442\u044C / \u0421\u0432\u0430\u0440\u043D\u044B\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043C\u043E\u0434\u0443\u043B\u044C: \u041D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0430\u044F \u0441\u0442\u0430\u043B\u044C\n      \u041F\u0440\u0438\u0432\u043E\u0434\u043D\u043E\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E: \u0422\u0440\u0435\u0445\u0444\u0430\u0437\u043D\u044B\u0439 \u0432\u0438\u0431\u0440\u043E\u043C\u043E\u0442\u043E\u0440 VM-1. 80B-4a\n      \u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0432\u0438\u0431\u0440\u043E\u043C\u043E\u0442\u043E\u0440\u0430: nmax=1375 \u043E/\u043C\u0438\u043D\n      \u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435: U=220V",
        text: "\u0412\u0438\u0431\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043A\u0430\u043B\u0438\u0431\u0440\u0430\u0442\u043E\u0440 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0431\u044B\u0441\u0442\u0440\u043E \u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u0443\u0431\u0440\u0430\u0442\u044C \u043D\u0435\u043D\u0443\u0436\u043D\u0443\u044E \u043F\u0440\u0438\u043C\u0435\u0441\u044C,\n     \u0430 \u0442\u0430\u043A\u0436\u0435 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u043F\u043E\u0441\u0442\u0443\u043F\u0430\u044E\u0449\u0438\u0435 \u043F\u043B\u043E\u0434\u044B \u043D\u0430 3 \u0444\u0440\u0430\u043A\u0446\u0438\u0438 \u0434\u043B\u044F \u043F\u043E\u0434\u0430\u043B\u044C\u0448\u0435\u0439 \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438."
    },
    {
        name: 'Барботажная моечная машина BR-02',
        code: 'barbotazhnaja_moechnaja_mashyna_br-02',
        imgNum: 4,
        desc: 'Моет ягоды, фрукты и овощи',
        list: "\n      \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0411\u0430\u0440\u0431\u043E\u0442\u0430\u0436\u043D\u0430\u044F \u043C\u043E\u0435\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430\n      \u0422\u0438\u043F \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: BR-02\n      \u0426\u0435\u043B\u044C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041C\u043E\u0439\u043A\u0430 \u0444\u0440\u0443\u043A\u0442\u043E\u0432 \u0438 \u043E\u0432\u043E\u0449\u0435\u0439\n      \u0426\u0432\u0435\u0442 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u0435\u043E\u043A\u0440\u0430\u0448\u0435\u043D\u043D\u044B\u0435 \u043B\u0438\u0441\u0442 \u0438\u0437 \u043D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0435\u0439 \u0441\u0442\u0430\u043B\u0438 \u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u043E\u0432\u043E\u0435.\n      \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u044B: SRPS, DIN, ISO\n      \u041E\u043F\u043E\u0440\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u0430 \u0447\u0435\u0442\u044B\u0440\u0435\u0445 \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0445 \u043E\u043F\u043E\u0440\u0430\u0445, \u0431\u0435\u0437 \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0438 \u043A \u0444\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442\u0443\n      \u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044B \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 (\u0414\u0445\u0428\u0445\u0412): 3960x1060x2045\u00B130\u043C\u043C\n      \u0412\u044B\u0441\u043E\u0442\u0430 \u0432\u0430\u043D\u043D\u044B: Hu=1045\u00B130\u043C\u043C\n      \u0412\u044B\u0441\u043E\u0442\u0430 \u0432\u044B\u0433\u0440\u0443\u0437\u043A\u0438 \u0431\u0430\u0440\u0431\u043E\u0442\u0430\u0436\u043D\u043E\u0439 \u043C\u043E\u0435\u0447\u043D\u043E\u0439 \u043C\u0430\u0448\u0438\u043D\u044B: Hi=1495\u00B130\u043C\u043C\n      \u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u043B\u0438\u0441\u0442\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0438\u0440\u0443\u044E\u0442 \u0441 \u043F\u043B\u043E\u0434\u0430\u043C\u0438: \u041A\u0438\u0441\u043B\u043E\u0442\u043E\u0443\u043F\u043E\u0440\u043D\u044B\u0439 \u043B\u0438\u0441\u0442 \u0438\u0437 \u043D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0435\u0439 \u0441\u0442\u0430\u043B\u0438 WN 1.4301\n      \u0422\u0438\u043F \u043A\u043E\u043D\u0432\u0435\u0439\u0435\u0440\u0430: \u0421\u0435\u043A\u0446\u0438\u043E\u043D\u043D\u044B\u0439 M2533 \u042F\u0447\u0435\u0439\u043A\u0430 \u0441\u0435\u0442\u043A\u0438 1\u2033\n      \u0428\u0438\u0440\u0438\u043D\u0430 \u043A\u043E\u043D\u0432\u0435\u0439\u0435\u0440\u043D\u043E\u0439 \u043B\u0435\u043D\u0442\u044B: 600\u043C\u043C\n      \u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043A \u0432\u043E\u0434\u043E\u043F\u0440\u043E\u0432\u043E\u0434\u0443: G2\u02BA; pmax=5bar\n      \u041F\u0440\u0438\u0432\u043E\u0434 \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0442\u043E\u0440\u0430:\n      \u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F P=2,2 kW,\n      \u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0442\u043E\u0440\u0430: n = 2800 \u043E/\u043C\u0438\u043D\n      \u041F\u0440\u0438\u0432\u043E\u0434 \u044D\u043B\u0435\u0432\u0430\u0442\u043E\u0440\u0430:\n      \u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F P=0,37kW,\n      \u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0432\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u0432\u044B\u0445\u043E\u0434\u043D\u043E\u0439 \u0448\u0435\u0441\u0442\u0435\u0440\u043D\u0438: n = 28 \u043E/\u043C\u0438\u043D",
        text: "\u0411\u0430\u0440\u0431\u043E\u0442\u0430\u0436\u043D\u0430\u044F \u043C\u043E\u0435\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 \u044D\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E \u043C\u043E\u0435\u0442 \u0444\u0440\u0443\u043A\u0442\u044B, \u043E\u0432\u043E\u0449\u0438, \u044F\u0433\u043E\u0434\u044B (\u0432\u0438\u0448\u043D\u0438, \u0430\u0431\u0440\u0438\u043A\u043E\u0441\u044B, \u0441\u043B\u0438\u0432\u044B, \u0441\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u0430 \u0438 \u0442\u0434.)"
    },
    {
        name: 'Вальчатый калибратор CK-01',
        code: 'valchatyi_kalibrator_sk-01',
        imgNum: 2,
        desc: 'Автоматически калибрует ягоды по размерам на 3 фракции',
        list: "\n      \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0412\u0430\u043B\u044C\u0447\u0430\u0442\u044B\u0439 \u043A\u0430\u043B\u0438\u0431\u0440\u0430\u0442\u043E\u0440\n      \u0422\u0438\u043F \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: CK-01\n      \u0426\u0435\u043B\u044C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041A\u0430\u043B\u0438\u0431\u0440\u043E\u0432\u043A\u0430 \u043F\u043B\u043E\u0434\u043E\u0432 (\u0441\u043B\u0438\u0432\u044B, \u0432\u0438\u0448\u043D\u0438, \u0447\u0435\u0440\u0435\u0448\u043D\u0438, \u043A\u043B\u0443\u0431\u043D\u0438\u043A\u0438, \u0435\u0436\u0435\u0432\u0438\u043A\u0438, \u043C\u0430\u043B\u0438\u043D\u044B \u0438 \u0442\u0434.)\n      \u0426\u0432\u0435\u0442 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u0435\u043E\u043A\u0440\u0430\u0448\u0435\u043D\u043D\u044B\u0435 \u043B\u0438\u0441\u0442 \u0438\u0437 \u043D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0435\u0439 \u0441\u0442\u0430\u043B\u0438 \u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u043E\u0432\u043E\u0435.\n      \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u044B: SRPS, DIN, ISO\n      \u041E\u043F\u043E\u0440\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u0430 \u0447\u0435\u0442\u044B\u0440\u0435\u0445 \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0445 \u043E\u043F\u043E\u0440\u0430\u0445, \u0431\u0435\u0437 \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0438 \u043A \u0444\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442\u0443\n      \u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044B \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 (\u0414\u0445\u0428\u0445\u0412): 4350x2540x1195\uF0B155\u043C\u043C\n      \u0412\u0435\u0441 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: 1000 \u043A\u0433\n      \u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u043B\u0438\u0441\u0442\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0438\u0440\u0443\u044E\u0442 \u0441 \u043F\u043B\u043E\u0434\u0430\u043C\u0438: \u041A\u0438\u0441\u043B\u043E\u0442\u043E\u0443\u043F\u043E\u0440\u043D\u044B\u0439 \u043B\u0438\u0441\u0442 \u0438\u0437 \u043D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0435\u0439 \u0441\u0442\u0430\u043B\u0438 WN 1.4301\n      \u041D\u0435\u0441\u0443\u0449\u0430\u044F \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F: \u0416\u0435\u0441\u0442\u044C, \u0441\u0432\u0430\u0440\u043D\u044B\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0435\u043A\u0446\u0438\u0439: 3, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043C\u0435\u0436\u0434\u0443 \u0432\u0430\u043B\u044C\u0446\u0430\u043C\u0438 \u0432 \u0441\u0435\u043A\u0446\u0438\u044F\u0445\n      \u0414\u0438\u0430\u043C\u0435\u0442\u0440 \u043A\u0430\u043B\u0438\u0431\u0440\u043E\u0432\u043A\u0438: \u041E\u0442 6 \u0434\u043E 40 \u043C\u043C\n      \u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C: 2,5-3 \u0442/\u0447\n      \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u044B\u0433\u0440\u0443\u0437\u043D\u044B\u0445 \u043B\u0435\u043D\u0442: 3\n      \u041F\u0440\u0438\u0432\u043E\u0434 \u043A\u0430\u043B\u0438\u0431\u0440\u0430\u0442\u043E\u0440\u0430: \u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043C\u043E\u0442\u043E\u0440 P=1,5 kW\n      \u041F\u0440\u0438\u0432\u043E\u0434 \u043B\u0435\u043D\u0442\u043E\u0447\u043D\u044B\u0445 \u043A\u043E\u043D\u0432\u0435\u0439\u0435\u0440\u043E\u0432: \u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043C\u043E\u0442\u043E\u0440 P=0,25 kW x 3\n      \u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435: U= 380V",
        text: "\u041F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043A\u0430\u043B\u0438\u0431\u0440\u043E\u0432\u043A\u0438 \u044F\u0433\u043E\u0434\u043D\u043E\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u043F\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0430\u043C \u043D\u0430 3 \u0444\u0440\u0430\u043A\u0446\u0438\u0438.\n      \u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u044F\u0433\u043E\u0434  \u2013 6 \u043C\u043C, \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u043E 40 \u043C\u043C (\u043E\u0442\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439).\n      \u041E\u0442\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \u043F\u043E\u043F\u0430\u0434\u0430\u0435\u0442 \u0432 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u0443\u044E \u0442\u0430\u0440\u0443 \u0438\u043B\u0438 \u043D\u0430 \u043E\u0442\u0432\u043E\u0434\u044F\u0449\u0438\u0435 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0435\u0440\u044B.\n      \u041C\u043E\u0436\u0435\u043C \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043A\u0430\u043B\u0438\u0431\u0440\u0430\u0442\u043E\u0440 \u043B\u044E\u0431\u044B\u0445 \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u0432 \u043F\u043E \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044E \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430."
    },
    {
        name: 'Вибростол V-2',
        code: 'vibrostol_v-2',
        imgNum: 1,
        desc: 'Калибрует и выравниванивает поток на линиях замороженных ягод',
        list: "\n      \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0412\u0438\u0431\u0440\u043E\u0441\u0442\u043E\u043B\n      \u0422\u0438\u043F \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: V-2\n      \u0426\u0435\u043B\u044C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0444\u0440\u0443\u043A\u0442\u043E\u0432 \u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C 12 \u043C\u043C\n      \u0426\u0432\u0435\u0442 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u0435\u043E\u043A\u0440\u0430\u0448\u0435\u043D\u043D\u044B\u0435 \u043B\u0438\u0441\u0442 \u0438\u0437 \u043D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0435\u0439 \u0441\u0442\u0430\u043B\u0438 \u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u043E\u0432\u043E\u0435.\n      \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u044B: SRPS, DIN, ISO\n      \u041E\u043F\u043E\u0440\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u0430 \u0447\u0435\u0442\u044B\u0440\u0435\u0445 \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0445 \u043E\u043F\u043E\u0440\u0430\u0445, \u0431\u0435\u0437 \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0438 \u043A \u0444\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442\u0443\n      \u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044B \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 (\u0414\u0445\u0428\u0445\u0412): 1800x890x1200\u043C\u043C\n      \u0412\u0435\u0441 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: 175 \u043A\u0433\n      \u041E\u043F\u043E\u0440\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F: \u0416\u0435\u0441\u0442\u044C, \u0441\u0432\u0430\u0440\u043D\u044B\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043C\u043E\u0434\u0443\u043B\u044C: \u041D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0430\u044F \u0441\u0442\u0430\u043B\u044C.\n      \u041F\u0440\u0438\u0432\u043E\u0434\u043D\u043E\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E: \u0422\u0440\u0435\u0445\u0444\u0430\u0437\u043D\u044B\u0439 \u0432\u0438\u0431\u0440\u043E\u043C\u043E\u0442\u043E\u0440 VM-1. 80B-4a\n      \u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0432\u0438\u0431\u0440\u043E\u043C\u043E\u0442\u043E\u0440\u0430: nmax=1400\u043E/\u043C\u0438\u043D\n      \u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435: U=380V",
        text: "\n      \u0412\u0438\u0431\u0440\u043E\u0441\u0442\u043E\u043B\u044B \u0438\u0437\u0433\u043E\u0442\u0430\u0432\u043B\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u0438\u0437 \u043A\u0438\u0441\u043B\u043E\u0442\u043E\u0443\u043F\u043E\u0440\u043D\u043E\u0439 \u043D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0435\u0439 \u0441\u0442\u0430\u043B\u0438 \u0441 \u043F\u0438\u0449\u0435\u0432\u044B\u043C \u0434\u043E\u043F\u0443\u0441\u043A\u043E\u043C \u0438 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0432\u0430\u0436\u043D\u044B\u043C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u043C\n      \u0432 \u0441\u043E\u0441\u0442\u0430\u0432\u0435 \u043B\u0438\u043D\u0438\u0438 \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u044F\u0433\u043E\u0434\u043D\u043E\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438. \u041F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043A\u0430\u043B\u0438\u0431\u0440\u043E\u0432\u043A\u0438 \u0438 \u0432\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u044F \u043F\u043E\u0442\u043E\u043A\u0430\n      \u043D\u0430 \u043B\u0438\u043D\u0438\u044F\u0445 \u0437\u0430\u043C\u043E\u0440\u043E\u0436\u0435\u043D\u043D\u044B\u0445 \u044F\u0433\u043E\u0434. \u041E\u0442\u043B\u0438\u0447\u0430\u044E\u0442\u0441\u044F \u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0441\u0442\u044C\u044E, \u043F\u0440\u043E\u0441\u0442\u043E\u0442\u043E\u0439 \u0432 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u044B\u0430\u043D\u0438\u0438 \u0438 \u0431\u043E\u043B\u044C\u0448\u0438\u043C \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u043C \u0440\u0430\u0431\u043E\u0442\u044B."
    },
    {
        name: 'Вертикальный экстрактор VP-01',
        code: 'vertikalnyi_ekstraktor_vp-01',
        imgNum: 1,
        desc: 'Удаляет с косточек остатки ягод, без их повреждения',
        list: "\n      \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0412\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u044D\u043A\u0441\u0442\u0440\u0430\u043A\u0442\u043E\u0440\n      \u0422\u0438\u043F \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: VP-01\n      \u0426\u0435\u043B\u044C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u043E\u0441\u0442\u0430\u0442\u043A\u043E\u0432 \u0432\u0438\u0448\u043D\u0438, \u0441\u043B\u0438\u0432\u044B \u0438 \u0447\u0435\u0440\u0435\u0448\u043D\u0438 \u0441 \u043A\u043E\u0441\u0442\u043E\u0447\u043A\u0438.\n      \u0426\u0432\u0435\u0442 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u0435\u043E\u043A\u0440\u0430\u0448\u0435\u043D\u043D\u044B\u0435 \u043B\u0438\u0441\u0442 \u0438\u0437 \u043D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0435\u0439 \u0441\u0442\u0430\u043B\u0438 \u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u043E\u0432\u043E\u0435.\n      \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u044B: SRPS, DIN, ISO\n      \u041E\u043F\u043E\u0440\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u0430 \u0447\u0435\u0442\u044B\u0440\u0435\u0445 \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0445 \u043E\u043F\u043E\u0440\u0430\u0445, \u0431\u0435\u0437 \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0438 \u043A \u0444\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442\u0443\n      \u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044B \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 (\u0414\u0445\u0428\u0445\u0412): 1000x810x840\u00B130\u043C\u043C\n      \u041E\u043F\u043E\u0440\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F: \u0416\u0435\u0441\u0442\u044C, \u0441\u0432\u0430\u0440\u043D\u044B\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043C\u043E\u0434\u0443\u043B\u044C: \u041D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0430\u044F \u0441\u0442\u0430\u043B\u044C.\n      \u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435: 380V\n      \u041F\u0440\u0438\u0432\u043E\u0434\u043D\u043E\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E:\n      \u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043C\u043E\u0442\u043E\u0440\u0430: P=4kW\n      \u041E\u0431\u043E\u0440\u043E\u0442\u044B \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043C\u043E\u0442\u043E\u0440\u0430: n=1400 \u043E/\u043C\u0438\u043D",
        text: "\n      \u042D\u043A\u0441\u0442\u0440\u0430\u043A\u0442\u043E\u0440 \u0441\u043E\u0437\u0434\u0430\u043D \u0434\u043B\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0441 \u043A\u043E\u0441\u0442\u043E\u0447\u0435\u043A \u043E\u0441\u0442\u0430\u0442\u043A\u043E\u0432 \u044F\u0433\u043E\u0434. \u041C\u043E\u0436\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0434\u043B\u044F \u0432\u0438\u0448\u043D\u0438, \u0447\u0435\u0440\u0435\u0448\u043D\u0438, \u0441\u043B\u0438\u0432\u044B, \u043C\u0430\u043B\u0438\u043D\u044B\n      \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043A\u043E\u0441\u0442\u043E\u0447\u043A\u043E\u0432\u044B\u0445 \u044F\u0433\u043E\u0434. \u041E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043F\u043E\u043B\u043D\u0443\u044E \u043E\u0447\u0438\u0441\u0442\u043A\u0443 \u043A\u043E\u0441\u0442\u043E\u0447\u0435\u043A. \u041A\u043E\u0441\u0442\u043E\u0447\u043A\u0438 \u043D\u0435 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0430\u044E\u0442\u0441\u044F \u0438 \u043D\u0435 \u0440\u0430\u0437\u043B\u0430\u043C\u044B\u0432\u0430\u044E\u0442\u0441\u044F\n      \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u0440\u0430\u0431\u043E\u0442\u044B, \u043A\u0430\u043A \u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u0435, \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442\u044B \u043A\u043E\u0441\u0442\u043E\u0447\u0435\u043A \u043D\u0435 \u0441\u043C\u0435\u0448\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u0441 \u044F\u0433\u043E\u0434\u043D\u043E\u0439 \u043C\u0430\u0441\u0441\u043E\u0439."
    },
    {
        name: 'Машина для удаления черенков P-01',
        code: 'mashina_udalenija_cherenkov_p-01',
        imgNum: 3,
        desc: 'Удаляет черенки с ягод',
        list: "\n      \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0427\u0435\u0440\u0435\u043D\u043A\u043E\u0432\u0430\u0442\u0435\u043B\u044C\n      \u0422\u0438\u043F \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: P-01\n      \u0426\u0435\u043B\u044C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u043D\u043A\u043E\u0432 \u0441 \u0432\u0438\u0448\u043D\u0438, \u0441\u043B\u0438\u0432\u044B \u0438 \u0447\u0435\u0440\u0435\u0448\u043D\u0438.\n      \u0426\u0432\u0435\u0442 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u0435\u043E\u043A\u0440\u0430\u0448\u0435\u043D\u043D\u044B\u0435 \u043B\u0438\u0441\u0442 \u0438\u0437 \u043D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0435\u0439 \u0441\u0442\u0430\u043B\u0438 \u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u044B: SRPS, DIN, ISO\n      \u041E\u043F\u043E\u0440\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u0430 \u0447\u0435\u0442\u044B\u0440\u0435\u0445 \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0445 \u043E\u043F\u043E\u0440\u0430\u0445, \u0431\u0435\u0437 \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0438 \u043A \u0444\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442\u0443\n      \u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044B \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 (\u0414\u0445\u0428\u0445\u0412): 2470x1310x1460\u00B130\u043C\u043C\n      \u0412\u044B\u0441\u043E\u0442\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438: Hu=1227\u00B130\u043C\u043C\n      \u0412\u044B\u0441\u043E\u0442\u0430 \u0432\u044B\u0433\u0440\u0443\u0437\u043A\u0438: Hi=1070\u00B130\u043C\u043C\n      \u041E\u043F\u043E\u0440\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F: \u0416\u0435\u0441\u0442\u044C, \u0441\u0432\u0430\u0440\u043D\u044B\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043C\u043E\u0434\u0443\u043B\u044C: \u041D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0430\u044F \u0441\u0442\u0430\u043B\u044C.\n      \u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435: 380V\n      \u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043A \u0432\u043E\u0434\u043E\u043F\u0440\u043E\u0432\u043E\u0434\u0443: 3x\u00D820\u043C\u043C; pmax=5bar\n      \u041F\u0440\u0438\u0432\u043E\u0434\u043D\u043E\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E: \u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043C\u043E\u0442\u043E\u0440 P1=3kW, n1 = 700\u043E/\u043C\u0438\u043D;\n      \u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C \u0440\u0435\u0434\u0443\u043A\u0442\u043E\u0440\u0430: P2=0,55kW/NMRV50 i=7,5; \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u043A\u0430 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0447\u0430\u0441\u0442\u043E\u0442\u044B.",
        text: "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u043D\u043A\u043E\u0432 \u0441 \u0432\u0438\u0448\u043D\u0438, \u0441\u043B\u0438\u0432\u044B \u0438 \u0447\u0435\u0440\u0435\u0448\u043D\u0438."
    },
    {
        name: 'Машина для грубой очистки черники, смородины, шиповника B1-01',
        code: 'mashina_gruboi_ochistki_b1-01',
        imgNum: 3,
        desc: 'Выполняет грубую очистку ягод',
        list: "\n      \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041C\u0430\u0448\u0438\u043D\u0430 \u0434\u043B\u044F \u0433\u0440\u0443\u0431\u043E\u0439 \u043E\u0447\u0438\u0441\u0442\u043A\u0438 \u0447\u0435\u0440\u043D\u0438\u043A\u0438, \u0441\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u044B, \u0448\u0438\u043F\u043E\u0432\u043D\u0438\u043A\u0430\n      \u0422\u0438\u043F \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: B1-01\n      \u0426\u0435\u043B\u044C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0413\u0440\u0443\u0431\u0430\u044F \u043E\u0447\u0438\u0441\u0442\u043A\u0430 \u0447\u0435\u0440\u043D\u0438\u043A\u0438, \u0441\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u044B, \u0448\u0438\u043F\u043E\u0432\u043D\u0438\u043A\u0430\n      \u0426\u0432\u0435\u0442 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u0435\u043E\u043A\u0440\u0430\u0448\u0435\u043D\u043D\u044B\u0435 \u043B\u0438\u0441\u0442 \u0438\u0437 \u043D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0435\u0439 \u0441\u0442\u0430\u043B\u0438 \u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u043E\u0432\u043E\u0435.\n      \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u044B: SRPS, DIN, ISO\n      \u041E\u043F\u043E\u0440\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u0430 \u0447\u0435\u0442\u044B\u0440\u0435\u0445 \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0445 \u043E\u043F\u043E\u0440\u0430\u0445, \u0431\u0435\u0437 \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0438 \u043A \u0444\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442\u0443\n      \u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044B \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 (\u0414\u0445\u0428\u0445\u0412): 3650x700x1875\uF0B125 \u043C\u043C\n      \u0412\u0435\u0441 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: 315 \u043A\u0433\n      \u0423\u0440\u043E\u0432\u0435\u043D\u044C \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438: \u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439\n      \u041E\u043F\u043E\u0440\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F: \u0416\u0435\u0441\u0442\u044C, \u0441\u0432\u0430\u0440\u043D\u044B\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043C\u043E\u0434\u0443\u043B\u044C: \u041D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0430\u044F \u0441\u0442\u0430\u043B\u044C.\n      \u041F\u0440\u0438\u0432\u043E\u0434\u043D\u043E\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E:\n      \u0412\u0438\u043D\u0442\u043E\u0432\u043E\u0439 \u043A\u043E\u043D\u0432\u0435\u0439\u0435\u0440: \u043C\u0443\u0444\u0442\u0430 \u0440\u0435\u0434\u0443\u043A\u0442\u043E\u0440\u043D\u043E\u0433\u043E \u043C\u043E\u0442\u043E\u0440\u0430, P=1.5kW, n=2 800min-1, i=10;\n      \u0420\u0430\u0437\u0431\u0438\u0432\u043A\u0430 \u043C\u043E\u0440\u043E\u0436\u0435\u043D\u044B\u0445 \u043F\u043B\u043E\u0434\u043E\u0432: \u043C\u0443\u0444\u0442\u0430 \u0440\u0435\u0434\u0443\u043A\u0442\u043E\u0440\u043D\u043E\u0433\u043E \u043C\u043E\u0442\u043E\u0440\u0430, P=1.5kW, n=2 800min-1, i=10\n      \u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435: U=380V",
        text: "\u0413\u0440\u0443\u0431\u0430\u044F \u043E\u0447\u0438\u0441\u0442\u043A\u0430 \u0447\u0435\u0440\u043D\u0438\u043A\u0438, \u0441\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u044B, \u0448\u0438\u043F\u043E\u0432\u043D\u0438\u043A\u0430."
    },
    {
        name: 'Машина для тонкой очистки черники и смородины B2-01',
        code: 'mashina_tonkoi_ochistki_b2-01',
        imgNum: 3,
        desc: 'Выполняет тонкую очистку ягод',
        list: "\n      \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041C\u0430\u0448\u0438\u043D\u0430 \u0434\u043B\u044F \u0442\u043E\u043D\u043A\u043E\u0439 \u043E\u0447\u0438\u0441\u0442\u043A\u0438 \u0447\u0435\u0440\u043D\u0438\u043A\u0438 \u0438 \u0441\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u044B\n      \u0422\u0438\u043F \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: B2-01\n      \u0426\u0435\u043B\u044C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0422\u043E\u043D\u043A\u0430\u044F \u043E\u0447\u0438\u0441\u0442\u043A\u0430 \u0447\u0435\u0440\u043D\u0438\u043A\u0438 \u0438 \u0441\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u044B\n      \u0426\u0432\u0435\u0442 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u0435\u043E\u043A\u0440\u0430\u0448\u0435\u043D\u043D\u044B\u0435 \u043B\u0438\u0441\u0442\u044B \u0438\u0437 \u043D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0435\u0439 \u0441\u0442\u0430\u043B\u0438 \u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u0438 \u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u043E\u0432\u043E\u0435.\n      \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u044B: SRPS, DIN, ISO\n      \u041E\u043F\u043E\u0440\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u0430 \u0447\u0435\u0442\u044B\u0440\u0435\u0445 \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0445 \u043E\u043F\u043E\u0440\u0430\u0445, \u0431\u0435\u0437 \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0438 \u043A \u0444\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442\u0443\n      \u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044B \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 (\u0414\u0445\u0428\u0445\u0412): 3540x700x1835\u043C\u043C\n      \u0412\u0435\u0441 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: 310 \u043A\u0433\n      \u0423\u0440\u043E\u0432\u0435\u043D\u044C \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438: \u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439.\n      \u041E\u043F\u043E\u0440\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F: \u0416\u0435\u0441\u0442\u044C, \u0441\u0432\u0430\u0440\u043D\u044B\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043C\u043E\u0434\u0443\u043B\u044C: \u041D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0430\u044F \u0441\u0442\u0430\u043B\u044C.\n      \u041F\u0440\u0438\u0432\u043E\u0434\u043D\u043E\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E:\n      \u0412\u0438\u043D\u0442\u043E\u0432\u043E\u0439 \u043A\u043E\u043D\u0432\u0435\u0439\u0435\u0440.: P=1.5kW, n=280min-1,\n      \u0420\u0430\u0437\u0431\u0438\u0432\u043A\u0430 \u043C\u043E\u0440\u043E\u0436\u0435\u043D\u044B\u0445 \u043F\u043B\u043E\u0434\u043E\u0432: P=1.5kW, n=280min-1,\n      \u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435: U=380V",
        text: "\u0422\u043E\u043D\u043A\u0430\u044F \u043E\u0447\u0438\u0441\u0442\u043A\u0430 \u0447\u0435\u0440\u043D\u0438\u043A\u0438 \u0438 \u0441\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u044B."
    },
    {
        name: 'Инспекционный транспортер IT-01',
        code: 'inspekcionnyi_transporter_it-01',
        imgNum: 1,
        desc: 'Перемещает продукцию',
        list: "\n      \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0418\u043D\u0441\u043F\u0435\u043A\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0435\u0440\n      \u0422\u0438\u043F \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: IT-01\n      \u0426\u0435\u043B\u044C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0438 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u043F\u043B\u043E\u0434\u043E\u0432.\n      \u0426\u0432\u0435\u0442 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u0435\u043E\u043A\u0440\u0430\u0448\u0435\u043D\u043D\u044B\u0435 \u043B\u0438\u0441\u0442 \u0438\u0437 \u043D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0435\u0439 \u0441\u0442\u0430\u043B\u0438 \u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u043E\u0432\u043E\u0435\n      \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u044B: SRPS, DIN, ISO\n      \u041E\u043F\u043E\u0440\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0427\u0435\u0442\u044B\u0440\u0435 \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0445 \u043E\u043F\u043E\u0440\u044B.\n      \u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044B \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 (\u0414\u0445\u0428\u0445\u0412): 4800x1100x2000 \u043C\u043C\n      \u0412\u0435\u0441 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: 300 \u043A\u0433\n      \u041E\u043F\u043E\u0440\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F: \u0416\u0435\u0441\u0442\u044C, \u0441\u0432\u0430\u0440\u043D\u044B\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u0438.\n      \u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043C\u043E\u0434\u0443\u043B\u044C: \u041D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0430\u044F \u0441\u0442\u0430\u043B\u044C.\n      \u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u043B\u0438\u0441\u0442\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0438\u0440\u0443\u044E\u0442 \u0441 \u043F\u043B\u043E\u0434\u0430\u043C\u0438: \u041A\u0438\u0441\u043B\u043E\u0442\u043E\u0443\u043F\u043E\u0440\u043D\u044B\u0439 \u043B\u0438\u0441\u0442 \u0438\u0437 \u043D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0435\u0439 \u0441\u0442\u0430\u043B\u0438 \u010C.4580\n      \u041E\u0441\u0432\u0435\u0442\u043B\u0435\u043D\u0438\u0435: \u0422\u0440\u0438 \u043B\u0430\u043C\u043F\u044B \u0434\u043D\u0435\u0432\u043D\u043E\u0433\u043E \u0441\u0432\u0435\u0442\u0430 2x36W \u0438 \u043E\u0434\u043D\u0430 \u043B\u0430\u043C\u043F\u0430 \u0434\u043D\u0435\u0432\u043D\u043E\u0433\u043E \u0441\u0432\u0435\u0442\u0430 2x18W\n      \u0422\u0438\u043F \u043A\u043E\u043D\u0432\u0435\u0439\u0435\u0440\u0430: NAB 10\n      \u0428\u0438\u0440\u0438\u043D\u0430 \u043A\u043E\u043D\u0432\u0435\u0439\u0435\u0440\u0430: 800 \u043C\u043C\n      \u0420\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u043F\u043E\u043B\u043E\u0441\u044B: \u0427\u0430\u0441\u0442\u043E\u0442\u043D\u044B\u043C \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C.\n      \u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043A\u043E\u043D\u0432\u0435\u0439\u0435\u0440\u0430: V = 4,66 \u2013 14,14 \u043C/\u043C\u0438\u043D\n      \u0414\u0438\u0430\u043C\u0435\u0442\u0440 \u043F\u0440\u0438\u0432\u043E\u0434\u043D\u043E\u0433\u043E \u0438 \u043D\u0430\u0442\u044F\u0436\u043D\u043E\u0433\u043E \u0440\u043E\u043B\u0438\u043A\u0430: \u00D8150 \u043C\u043C\n      \u041F\u0440\u0438\u0432\u043E\u0434\u043D\u043E\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E: \u0427\u0435\u0440\u0432\u044F\u0447\u043D\u044B\u0435 \u0440\u0435\u0434\u0443\u043A\u0442\u043E\u0440\u0430.\n      \u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u0433\u043B\u0430\u0432\u043D\u043E\u0433\u043E \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F: P=0,55kW\n      \u0427\u0430\u0441\u0442\u043E\u0442\u0430 \u0432\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u0432\u044B\u0445\u043E\u0434\u043D\u043E\u0433\u043E \u0432\u0430\u043B\u0430 \u0440\u0435\u0434\u0443\u043A\u0442\u043E\u0440\u0430: n2=30 \u043E/\u043C\u0438\u043D\n      \u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435: U=380V",
        text: "\u0418\u043D\u0441\u043F\u0435\u043A\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0435\u0440 \u043E\u0441\u043D\u0430\u0449\u0435\u043D \u043E\u0441\u0432\u0435\u0442\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C\u0438 \u043F\u0440\u0438\u0431\u043E\u0440\u0430\u043C\u0438,\n      \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u044E\u0449\u0438\u043C\u0438 \u0445\u043E\u0440\u043E\u0448\u0443\u044E \u043E\u0441\u0432\u0435\u0449\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u043E\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0438\u043C\u0435\u044E\u0442\u0441\u044F \u043F\u0435\u0440\u0435\u0433\u043E\u0440\u043E\u0434\u043A\u0438 \u0434\u043B\u044F \u043E\u0442\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0438 \u0431\u0440\u0430\u043A\u0430."
    },
    {
        name: 'Инспекционный транспортер IT-03',
        code: 'inspekcionnyi_transporter_it-03',
        imgNum: 1,
        desc: 'Позволяет быстро и качественно сортировать продукцию',
        list: "\n      \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0418\u043D\u0441\u043F\u0435\u043A\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0435\u0440 IT-03\n      \u0426\u0435\u043B\u044C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0438 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u043F\u043B\u043E\u0434\u043E\u0432\n      \u0426\u0432\u0435\u0442 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u0435\u043E\u043A\u0440\u0430\u0448\u0435\u043D\u043D\u044B\u0435 \u043B\u0438\u0441\u0442\u044B \u0438\u0437 \u043D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0435\u0439 \u0441\u0442\u0430\u043B\u0438 \u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u043E\u0432\u043E\u0435\n      \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u044B: SRPS, DIN, ISO\n      \u041E\u043F\u043E\u0440\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0427\u0435\u0442\u044B\u0440\u0435 \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0445 \u043E\u043F\u043E\u0440\u044B.\n      \u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044B \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 (\u0414\u0445\u0428\u0445\u0412): 4210x1160x2040 \u043C\u043C\n      \u0412\u0435\u0441 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: 240 \u043A\u0433\n      \u041E\u043F\u043E\u0440\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F: \u0416\u0435\u0441\u0442\u044C, \u0441\u0432\u0430\u0440\u043D\u044B\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u0438.\n      \u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043C\u043E\u0434\u0443\u043B\u044C: \u041D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0430\u044F \u0441\u0442\u0430\u043B\u044C.\n      \u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u043B\u0438\u0441\u0442\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0438\u0440\u0443\u044E\u0442 \u0441 \u0441\u044B\u0440\u044C\u0435\u043C:  \u041A\u0438\u0441\u043B\u043E\u0442\u043E\u0443\u043F\u043E\u0440\u043D\u044B\u0439 \u043B\u0438\u0441\u0442 \u0438\u0437 \u043D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0435\u0439 \u0441\u0442\u0430\u043B\u0438 1.4301\n      \u041E\u0441\u0432\u0435\u0442\u043B\u0435\u043D\u0438\u0435: \u043B\u0430\u043C\u043F\u0430 \u0434\u043D\u0435\u0432\u043D\u043E\u0433\u043E \u0441\u0432\u0435\u0442\u0430 2x36W \u0438 \u043B\u0430\u043C\u043F\u0430 \u0434\u043D\u0435\u0432\u043D\u043E\u0433\u043E \u0441\u0432\u0435\u0442\u0430 2x18W.\n      \u0422\u0438\u043F \u043A\u043E\u043D\u0432\u0435\u0439\u0435\u0440\u0430: NAB 10\n      \u0428\u0438\u0440\u0438\u043D\u0430 \u043B\u0435\u043D\u0442\u044B: 800 \u043C\u043C\n      \u0420\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u043B\u0435\u043D\u0442\u044B: \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u0447\u0430\u0441\u0442\u043E\u0442\u044B\n      \u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043A\u043E\u043D\u0432\u0435\u0439\u0435\u0440\u0430: V = 5 \u2013 13.5 \u043C/\u043C\u0438\u043D\n      \u0414\u0438\u0430\u043C\u0435\u0442\u0440 \u043F\u0440\u0438\u0432\u043E\u0434\u043D\u043E\u0433\u043E \u0438 \u043D\u0430\u0442\u044F\u0436\u043D\u043E\u0433\u043E \u0440\u043E\u043B\u0438\u043A\u0430: \u00D8150 \u043C\u043C\n      \u041F\u0440\u0438\u0432\u043E\u0434\u043D\u043E\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E: \u0432\u0438\u043D\u0442\u043E\u0432\u043E\u0439 \u0440\u0435\u0434\u0443\u043A\u0442\u043E\u0440\n      \u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u0433\u043B\u0430\u0432\u043D\u043E\u0433\u043E \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F: P=0,55kW\n      \u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435: U=380V",
        text: "\u0418\u043D\u0441\u043F\u0435\u043A\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0435\u0440 \u0434\u043B\u044F \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0438 \u044F\u0433\u043E\u0434 (\u043C\u0430\u043B\u0438\u043D\u0430, \u0433\u043E\u043B\u0443\u0431\u0438\u043A\u0430, \u0435\u0436\u0435\u0432\u0438\u043A\u0430, \u0441\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u0430 \u0438 \u0442\u0434.)\n      \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0431\u044B\u0441\u0442\u0440\u043E, \u0430 \u0441\u0430\u043C\u043E\u0435 \u0433\u043B\u0430\u0432\u043D\u043E\u0435 \u2013 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u043E\u0442\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044E. \u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043E\u0447\u043D\u0430\u044F \u043B\u0435\u043D\u0442\u0430 \u2013\n      \u043F\u043E\u043B\u0435\u0443\u0440\u0438\u0442\u0430\u043D\u043E\u0432\u0430\u044F, \u043F\u0438\u0449\u0435\u0432\u0430\u044F, \u0435\u0435 \u0448\u0438\u0440\u0438\u043D\u0430 \u2013 800 \u043C\u043C. \u0422\u0430\u043A\u0436\u0435 \u0438\u043C\u0435\u044E\u0442\u0441\u044F \u043F\u0435\u0440\u0435\u0433\u043E\u0440\u043E\u0434\u043A\u0438 \u0434\u043B\u044F \u043E\u0442\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0438 \u0431\u0440\u0430\u043A\u0430."
    },
    {
        name: 'Ленточный транспортер TT-01',
        code: 'lentochnyi_transporter_tt-01',
        imgNum: 1,
        desc: 'Транспортирует продукт',
        list: "\n      \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041B\u0435\u043D\u0442\u043E\u0447\u043D\u044B\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0435\u0440\n      \u0422\u0438\u043F \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: TT-01\n      \u0426\u0435\u043B\u044C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043B\u043E\u0434\u043E\u0432 \u0438 \u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u043D\u0430 \u0442\u0440\u0438 \u0440\u0430\u0432\u043D\u044B\u0445 \u043F\u043E\u0442\u043E\u043A\u0430 \u0434\u043B\u044F \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0438.\n      \u0426\u0432\u0435\u0442 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u0435\u043E\u043A\u0440\u0430\u0448\u0435\u043D\u043D\u044B\u0435 \u043B\u0438\u0441\u0442 \u0438\u0437 \u043D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0435\u0439 \u0441\u0442\u0430\u043B\u0438 \u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u0438.\n      \u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u043E\u0432\u043E\u0435.\n      \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u044B: SRPS, DIN, ISO\n      \u041E\u043F\u043E\u0440\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0427\u0435\u0442\u044B\u0440\u0435 \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0445 \u043E\u043F\u043E\u0440\u044B.\n      \u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044B \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 (\u0414\u0445\u0428\u0445\u0412): 5360x1330x1245\uF0B130 \u043C\u043C\n      \u0412\u0435\u0441 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: 260\u043A\u0433\n      \u041E\u043F\u043E\u0440\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F: \u0416\u0435\u0441\u0442\u044C, \u0441\u0432\u0430\u0440\u043D\u044B\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043C\u043E\u0434\u0443\u043B\u044C: \u041D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0430\u044F \u0441\u0442\u0430\u043B\u044C.\n      \u0422\u0438\u043F \u043A\u043E\u043D\u0432\u0435\u0439\u0435\u0440\u0430: NAB 10\n      \u0428\u0438\u0440\u0438\u043D\u0430 \u043A\u043E\u043D\u0432\u0435\u0439\u0435\u0440\u0430: 800 \u043C\u043C\n      \u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043A\u043E\u043D\u0432\u0435\u0439\u0435\u0440\u0430: V = 11,73 \u043C/\u043C\u0438\u043D\n      \u0414\u0438\u0430\u043C\u0435\u0442\u0440 \u043F\u0440\u0438\u0432\u043E\u0434\u043D\u043E\u0433\u043E \u0438 \u043D\u0430\u0442\u044F\u0436\u043D\u043E\u0433\u043E \u0440\u043E\u043B\u0438\u043A\u0430: \u00D8150 \u043C\u043C\n      \u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u0433\u043B\u0430\u0432\u043D\u043E\u0433\u043E \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F: P=0,55Kw\n      \u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435: U=380V",
        text: "\u041E\u0441\u043D\u0430\u0449\u0435\u043D \u0442\u0440\u0435\u043C\u044F \u043F\u0435\u0440\u0435\u0433\u043E\u0440\u043E\u0434\u043A\u0430\u043C\u0438, \u0434\u043B\u044F \u0434\u0435\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430 \u043D\u0430 \u043F\u043E\u0442\u043E\u043A\u0438."
    },
    {
        name: 'Ленточный транспортер TT-33',
        code: 'lentochnyi_transporter_tt-33',
        imgNum: 2,
        desc: 'Транспортирует фрукты и овощи в приемный бункер',
        list: "\n      \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041B\u0435\u043D\u0442\u043E\u0447\u043D\u044B\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0435\u0440.\n      \u0422\u0438\u043F \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: TT-33\n      \u0426\u0435\u043B\u044C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0444\u0440\u0443\u043A\u0442\u043E\u0432 \u0438 \u043E\u0432\u043E\u0449\u0435\u0439.\n      \u0426\u0432\u0435\u0442 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u0435\u043E\u043A\u0440\u0430\u0448\u0435\u043D\u043D\u044B\u0435 \u043B\u0438\u0441\u0442\u044B \u0438\u0437 \u043D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0435\u0439 \u0441\u0442\u0430\u043B\u0438 \u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u043E\u0432\u043E\u0435\n      \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u044B: SRPS, DIN, ISO\n      \u041E\u043F\u043E\u0440\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0427\u0435\u0442\u044B\u0440\u0435 \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0445 \u043E\u043F\u043E\u0440\u044B\n      \u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044B \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 (\u0414\u0445\u0428\u0445\u0412): 1900x740x1580 \u043C\u043C\n      \u0423\u0433\u043E\u043B \u043D\u0430\u043A\u043B\u043E\u043D\u0430 \u043A\u043E\u043D\u0432\u0435\u0439\u0435\u0440\u0430: 45\u00BA\n      \u0412\u0435\u0441 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: 130 \u043A\u0433\n      \u041E\u043F\u043E\u0440\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F: \u0416\u0435\u0441\u0442\u044C, \u0441\u0432\u0430\u0440\u043D\u044B\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043C\u043E\u0434\u0443\u043B\u044C: \u041D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0430\u044F \u0441\u0442\u0430\u043B\u044C\n      T\u0438\u043F \u043A\u043E\u043D\u0432\u0435\u0439\u0435\u0440\u0430: NAB \u2013 10, \u0441 \u043B\u043E\u043F\u0430\u0441\u0442\u044F\u043C\u0438\n      \u0414\u0438\u0430\u043C\u0435\u0442\u0440 \u043F\u0440\u0438\u0432\u043E\u0434\u043D\u043E\u0433\u043E \u0438 \u043D\u0430\u0442\u044F\u0436\u043D\u043E\u0433\u043E \u0440\u043E\u043B\u0438\u043A\u0430: \u00D8150 \u043C\u043C\n      \u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F: P=0.37 kW\n      \u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435: U= 380 V",
        text: "\u041E\u0441\u043D\u0430\u0449\u0435\u043D \u043B\u0435\u043D\u0442\u043E\u0439 \u0441 \u0448\u0435\u0432\u0440\u043E\u043D\u0430\u043C\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u0440\u0438\u0435\u043C\u043D\u044B\u043C \u0431\u0443\u043D\u043A\u0435\u0440\u043E\u043C."
    },
    {
        name: 'Ленточный транспортер TT-50',
        code: 'lentochnyi_transporter_tt-50',
        imgNum: 4,
        desc: 'Доставляет плоды',
        list: "\n      \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041B\u0435\u043D\u0442\u043E\u0447\u043D\u044B\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0435\u0440\n      \u0422\u0438\u043F \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: TT-50\n      \u0426\u0435\u043B\u044C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0444\u0440\u0443\u043A\u0442\u043E\u0432 \u0438 \u043E\u0432\u043E\u0449\u0435\u0439\n      \u0426\u0432\u0435\u0442 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u0435\u043E\u043A\u0440\u0430\u0448\u0435\u043D\u043D\u044B\u0435 \u043B\u0438\u0441\u0442 \u0438\u0437 \u043D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0435\u0439 \u0441\u0442\u0430\u043B\u0438 \u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u043E\u0432\u043E\u0435\n      \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u044B: SRPS, DIN, ISO\n      \u041E\u043F\u043E\u0440\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0427\u0435\u0442\u044B\u0440\u0435 \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0445 \u043E\u043F\u043E\u0440\u044B.\n      \u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044B \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 (\u0414\u0445\u0428\u0445\u0412): 3110x1020x1330\u00B130 \u043C\u043C\n      \u0412\u044B\u0441\u043E\u0442\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438: Hu=1330\u00B130\u043C\u043C\n      \u0412\u044B\u0441\u043E\u0442\u0430 \u0432\u044B\u0433\u0440\u0443\u0437\u043A\u0438: Hi=1045\u00B130\u043C\u043C\n      \u041E\u043F\u043E\u0440\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F: \u0416\u0435\u0441\u0442\u044C, \u0441\u0432\u0430\u0440\u043D\u044B\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043C\u043E\u0434\u0443\u043B\u044C: \u041D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0430\u044F \u0441\u0442\u0430\u043B\u044C.\n      \u0422\u0438\u043F \u043A\u043E\u043D\u0432\u0435\u0439\u0435\u0440\u0430: \u041C\u043E\u0434\u0443\u043B\u044C\u043D\u0430\u044F \u043B\u0435\u043D\u0442\u0430 M2533\n      \u0414\u0438\u0430\u043C\u0435\u0442\u0440 \u0437\u0432\u0435\u0437\u0434\u043E\u0447\u043A\u0438 \u043F\u0440\u0438\u0432\u043E\u0434\u0430 \u0438 \u043D\u0430\u0442\u044F\u0436\u0435\u043D\u0438\u044F: \u00D8146.9\u043C\u043C\n      \u0428\u0438\u0440\u0438\u043D\u0430 \u043A\u043E\u043D\u0432\u0435\u0439\u0435\u0440\u043D\u043E\u0439 \u043B\u0435\u043D\u0442\u044B: 650\u043C\u043C\n      \u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F: P=0.37 kW\n      \u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435: U= 380 V",
        text: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0444\u0440\u0443\u043A\u0442\u043E\u0432 \u0438 \u043E\u0432\u043E\u0449\u0435\u0439"
    },
    {
        name: 'Ленточный транспортер TT-83',
        code: 'lentochnyi_transporter_tt-83',
        imgNum: 2,
        desc: 'Транспортирует продукцию',
        list: "\n      \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041B\u0435\u043D\u0442\u043E\u0447\u043D\u044B\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0435\u0440\n      \u0422\u0438\u043F \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: TT-83\n      \u0426\u0435\u043B\u044C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0444\u0440\u0443\u043A\u0442\u043E\u0432 \u0438 \u043E\u0432\u043E\u0449\u0435\u0439\n      \u0426\u0432\u0435\u0442 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u0435\u043E\u043A\u0440\u0430\u0448\u0435\u043D\u043D\u044B\u0435 \u043B\u0438\u0441\u0442 \u0438\u0437 \u043D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0435\u0439 \u0441\u0442\u0430\u043B\u0438 \u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u043E\u0432\u043E\u0435\n      \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u044B: SRPS, DIN, ISO\n      \u041E\u043F\u043E\u0440\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0427\u0435\u0442\u044B\u0440\u0435 \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0445 \u043E\u043F\u043E\u0440\u044B.\n      \u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044B \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 (\u0414\u0445\u0428\u0445\u0412): 2330x920x2650 \u043C\u043C\n      \u0412\u0435\u0441 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: 220\u043A\u0433\n      \u041E\u043F\u043E\u0440\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F: \u0416\u0435\u0441\u0442\u044C, \u0441\u0432\u0430\u0440\u043D\u044B\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043C\u043E\u0434\u0443\u043B\u044C: \u041D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0430\u044F \u0441\u0442\u0430\u043B\u044C.\n      \u0422\u0438\u043F \u043A\u043E\u043D\u0432\u0435\u0439\u0435\u0440\u0430: \u041C\u043E\u0434\u0443\u043B\u044C\u043D\u0430\u044F \u043B\u0435\u043D\u0442\u0430 M2533\n      \u0414\u0438\u0430\u043C\u0435\u0442\u0440 \u0437\u0432\u0435\u0437\u0434\u043E\u0447\u043A\u0438 \u043F\u0440\u0438\u0432\u043E\u0434\u0430 \u0438 \u043D\u0430\u0442\u044F\u0436\u0435\u043D\u0438\u044F: \u00D8146,9\u043C\u043C\n      \u0428\u0438\u0440\u0438\u043D\u0430 \u043A\u043E\u043D\u0432\u0435\u0439\u0435\u0440\u043D\u043E\u0439 \u043B\u0435\u043D\u0442\u044B: 650 \u043C\u043C\n      \u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F: P=0.55 kW\n      \u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435: U= 380 V",
        text: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0444\u0440\u0443\u043A\u0442\u043E\u0432 \u0438 \u043E\u0432\u043E\u0449\u0435\u0439"
    },
    {
        name: 'Запайщик пленки ПВХ',
        code: 'zapaischik_plenki_pvh',
        imgNum: 2,
        desc: 'Сваривает различные полотна полимерных материалов для изготовление герметичных пакетов',
        list: "\n      \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0417\u0430\u043F\u0430\u0439\u0449\u0438\u043A \u043F\u043B\u0435\u043D\u043A\u0438 \u041F\u0412\u0425\n      \u0422\u0438\u043F \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: PVC -01\n      \u0426\u0435\u043B\u044C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u0421\u0432\u0430\u0440\u043A\u0430 \u043F\u043B\u0435\u043D\u043A\u0438 \u041F\u0412\u0425\n      \u0426\u0432\u0435\u0442 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u0435\u043E\u043A\u0440\u0430\u0448\u0435\u043D\u043D\u044B\u0435 \u043B\u0438\u0441\u0442\u044B \u0438\u0437 \u043D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0435\u0439 \u0441\u0442\u0430\u043B\u0438 \u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u043E\u0432\u043E\u0435.\n      \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u044B: SRPS, DIN, ISO\n      \u041E\u043F\u043E\u0440\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: \u041D\u0430 \u0447\u0435\u0442\u044B\u0440\u0435\u0445 \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0445 \u043E\u043F\u043E\u0440\u0430\u0445, \u0431\u0435\u0437 \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0438 \u043A \u0444\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442\u0443\n      \u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044B \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 (\u0414\u0445\u0428\u0445\u0412): 500x650x1075 \u043C\u043C\n      \u0412\u0435\u0441 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430: 25 \u043A\u0433\n      \u0423\u0440\u043E\u0432\u0435\u043D\u044C \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438: \u041F\u043E\u043B\u0443\u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439\n      \u041E\u043F\u043E\u0440\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F: \u0416\u0435\u0441\u0442\u044C, \u0441\u0432\u0430\u0440\u043D\u044B\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\n      \u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043C\u043E\u0434\u0443\u043B\u044C: \u041D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0430\u044F \u0441\u0442\u0430\u043B\u044C.\n      \u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435: U=220V",
        text: "\u0417\u0430\u043F\u0430\u0439\u0449\u0438\u043A\u0438 (\u0441\u0432\u0430\u0440\u0438\u0432\u0430\u0442\u0435\u043B\u0438) \u043F\u043B\u0435\u043D\u043A\u0438 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u044B \u0434\u043B\u044F \u0441\u0432\u0430\u0440\u043A\u0438 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u043F\u043E\u043B\u043E\u0442\u0435\u043D \u043F\u043E\u043B\u0438\u043C\u0435\u0440\u043D\u044B\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0434\u0440\u0443\u0433 \u0441 \u0434\u0440\u0443\u0433\u043E\u043C.\n      \u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0437\u0430\u043F\u0430\u0439\u0449\u0438\u043A\u0430 \u043C\u043E\u0436\u043D\u043E \u0431\u044B\u0441\u0442\u0440\u043E \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u043F\u0430\u043A\u0435\u0442 \u0438\u0437 \u043F\u043B\u0435\u043D\u043A\u0438 \u0438 \u0433\u0435\u0440\u043C\u0435\u0442\u0438\u0447\u043D\u043E \u0437\u0430\u043F\u0435\u0447\u0430\u0442\u0430\u0442\u044C \u0435\u0433\u043E."
    },
    {
        name: 'Настил для установки линии',
        code: 'nastil_dlia_ustanovki_linii',
        imgNum: 1,
        desc: 'Повышает безопасность при работе на линии, предотвращает скольжение',
        list: 'Название устройства: Настил для установки линии',
        text: "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u041F\u0412\u0425(PVC), \u043F\u0435\u0440\u0444\u043E\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439. \u041F\u0440\u043E\u0442\u0438\u0432\u043E\u0441\u043A\u043E\u043B\u044C\u0437\u044F\u0449\u0435\u0435 \u043F\u043E\u043A\u0440\u044B\u0442\u0438\u0435.\n      \u041F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u043F\u0440\u0438 \u0440\u0430\u0431\u043E\u0442\u0435 \u043D\u0430 \u043B\u0438\u043D\u0438\u0438, \u0434\u043B\u044F \u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u0441\u043A\u043E\u043B\u044C\u0436\u0435\u043D\u0438\u044F \u0438 \u043F\u0430\u0434\u0435\u043D\u0438\u044F \u043B\u044E\u0434\u0435\u0439."
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (value, type) {
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
                throw new Error("Invalid safe type specified: " + type);
        }
    };
    SafePipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safe'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.component */ "./src/app/shared/header.component.ts");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./safe.pipe */ "./src/app/shared/safe.pipe.ts");





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
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
    return SharedModule;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


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
//# sourceMappingURL=main-es5.js.map