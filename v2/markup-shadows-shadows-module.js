(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["markup-shadows-shadows-module"],{

/***/ "./src/modules/markup/shadows/shadows.component.ts":
/*!*********************************************************!*\
  !*** ./src/modules/markup/shadows/shadows.component.ts ***!
  \*********************************************************/
/*! exports provided: ShadowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadowsComponent", function() { return ShadowsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");





var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6080636402906195970$$SRC_MODULES_MARKUP_SHADOWS_SHADOWS_COMPONENT_TS_1 = goog.getMsg("Shadows");
    I18N_0 = MSG_EXTERNAL_6080636402906195970$$SRC_MODULES_MARKUP_SHADOWS_SHADOWS_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟46fba2e0e76610d72c2a584aad073b08e6e159d9␟6080636402906195970:Shadows`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5057450223131222697$$SRC_MODULES_MARKUP_SHADOWS_SHADOWS_COMPONENT_TS__4 = goog.getMsg("Different kinds of shadows can be applied with mixin:");
    I18N_3 = MSG_EXTERNAL_5057450223131222697$$SRC_MODULES_MARKUP_SHADOWS_SHADOWS_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟7b962e5b3264e35cc81dc382afebed42cb516541␟5057450223131222697:Different kinds of shadows can be applied with mixin:`;
}
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1584871198682525738$$SRC_MODULES_MARKUP_SHADOWS_SHADOWS_COMPONENT_TS__6 = goog.getMsg("{$startTagDiv}{$startTagSpan} Basic shadow: {$startTagCode}.shadow(1){$closeTagCode} with {$startTagCode}.shadow(5){$closeTagCode} when hovered {$closeTagSpan}{$closeTagDiv}{$startTagDiv_1} Dropdown shadow: {$startTagCode}.shadow(2){$closeTagCode}{$closeTagDiv}{$startTagDiv_2} Modal shadow: {$startTagCode}.shadow(3){$closeTagCode}{$closeTagDiv}{$startTagDiv_3} Sidebar shadow: {$startTagCode}.shadow(4){$closeTagCode}{$closeTagDiv}{$startTagDiv_4} Navigation shadow: {$startTagCode}.shadow(6){$closeTagCode}{$closeTagDiv}{$startTagDiv_5} Mobile modal shadow: {$startTagCode}.shadow(7){$closeTagCode}{$closeTagDiv}", { "startTagDiv": "\uFFFD#4\uFFFD", "startTagSpan": "\uFFFD#5\uFFFD", "startTagCode": "[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD]", "closeTagCode": "[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD]", "closeTagSpan": "\uFFFD/#5\uFFFD", "closeTagDiv": "[\uFFFD/#4\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD]", "startTagDiv_1": "\uFFFD#8\uFFFD", "startTagDiv_2": "\uFFFD#10\uFFFD", "startTagDiv_3": "\uFFFD#12\uFFFD", "startTagDiv_4": "\uFFFD#14\uFFFD", "startTagDiv_5": "\uFFFD#16\uFFFD" });
    I18N_5 = MSG_EXTERNAL_1584871198682525738$$SRC_MODULES_MARKUP_SHADOWS_SHADOWS_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟ec25ca0c99f8b0a2501d2906b4e69622215d5042␟1584871198682525738:${"\uFFFD#4\uFFFD"}:START_TAG_DIV:${"\uFFFD#5\uFFFD"}:START_TAG_SPAN: Basic shadow: ${"[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD]"}:START_TAG_CODE:.shadow(1)${"[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_TAG_CODE: with ${"[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD]"}:START_TAG_CODE:.shadow(5)${"[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_TAG_CODE: when hovered ${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_SPAN:${"[\uFFFD/#4\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_TAG_DIV:${"\uFFFD#8\uFFFD"}:START_TAG_DIV_1: Dropdown shadow: ${"[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD]"}:START_TAG_CODE:.shadow(2)${"[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#4\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_TAG_DIV:${"\uFFFD#10\uFFFD"}:START_TAG_DIV_2: Modal shadow: ${"[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD]"}:START_TAG_CODE:.shadow(3)${"[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#4\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_TAG_DIV:${"\uFFFD#12\uFFFD"}:START_TAG_DIV_3: Sidebar shadow: ${"[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD]"}:START_TAG_CODE:.shadow(4)${"[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#4\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_TAG_DIV:${"\uFFFD#14\uFFFD"}:START_TAG_DIV_4: Navigation shadow: ${"[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD]"}:START_TAG_CODE:.shadow(6)${"[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#4\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_TAG_DIV:${"\uFFFD#16\uFFFD"}:START_TAG_DIV_5: Mobile modal shadow: ${"[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD]"}:START_TAG_CODE:.shadow(7)${"[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#4\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_TAG_DIV:`;
}
I18N_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_5);
function ShadowsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ShadowsComponent {
}
ShadowsComponent.ɵfac = function ShadowsComponent_Factory(t) { return new (t || ShadowsComponent)(); };
ShadowsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShadowsComponent, selectors: [["shadows"]], decls: 3, vars: 0, consts: [[6, "header"], ["pageTab", ""], [1, "example"], [1, "item", "item_default"], [1, "item", "item_dropdown"], [1, "item", "item_modal"], [1, "item", "item_sidebar"], [1, "item", "item_navigation"], [1, "item", "item_mobile"]], template: function ShadowsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShadowsComponent_ng_template_2_Template, 18, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"]], styles: [".example[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-wrap: wrap;\n  padding: 1.25rem;\n}\n.item[_ngcontent-%COMP%] {\n  transition-property: box-shadow;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 2.5rem;\n  margin-left: 2.5rem;\n  width: 17.5rem;\n  height: 5rem;\n  border-radius: var(--tui-radius-m);\n  color: var(--tui-text-03);\n  cursor: pointer;\n  text-align: center;\n}\n.item_default[_ngcontent-%COMP%] {\n  box-shadow: 0 0.25rem 1.5rem rgba(0, 0, 0, 0.12);\n}\n.item_default[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.75rem 2.25rem rgba(0, 0, 0, 0.2);\n}\n.item_dropdown[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.16);\n}\n.item_modal[_ngcontent-%COMP%] {\n  box-shadow: 0 1.125rem 1.875rem rgba(0, 0, 0, 0.48);\n}\n.item_sidebar[_ngcontent-%COMP%] {\n  box-shadow: 0.25rem 0 1.5rem rgba(0, 0, 0, 0.12);\n}\n.item_navigation[_ngcontent-%COMP%] {\n  box-shadow: 0 0.125rem 1rem rgba(0, 0, 0, 0.08);\n}\n.item_mobile[_ngcontent-%COMP%] {\n  box-shadow: 0 -1rem 1.75rem rgba(0, 0, 0, 0.24);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvbWFya3VwL3NoYWRvd3Mvc2hhZG93cy5zdHlsZS5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9tYXJrdXAvc2hhZG93cy9zaGFkb3dzLnN0eWxlLmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9jb3JlL3N0eWxlcy9taXhpbnMvbWl4aW5zLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQUNJLGFBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FES0o7QUNGQTtFQzROSSwrQkFBQTtFQUNBLCtDQUFBO0VBQ0EsdUNBQUE7RUQ1TkEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FETUo7QUNKSTtFQ3dISSxnREFBQTtBRmpIUjtBQ0pRO0VDeUlBLGdEQUFBO0FGbElSO0FDRkk7RUNxSEksNkNBQUE7QUZoSFI7QUNESTtFQ3NISSxtREFBQTtBRmxIUjtBQ0FJO0VDdUhJLGdEQUFBO0FGcEhSO0FDQ0k7RUM2SEksK0NBQUE7QUYzSFI7QUNFSTtFQzhISSwrQ0FBQTtBRjdIUiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL21hcmt1cC9zaGFkb3dzL3NoYWRvd3Muc3R5bGUubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLyogc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qXG5FdmVyeSBtYXgtd2lkdGggb2YgYnJlYWtwb2ludCBpcyBlcXVhbDpcbm5leHQgbWluLXdpZHRoIC0gNjAlIGZyb20gMXB4ICgxLzE2ICogMC42ID0gMC4wMzc1KVxuKi9cbi5leGFtcGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nOiAxLjI1cmVtO1xufVxuLml0ZW0ge1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS10dWktZHVyYXRpb24sIDMwMG1zKTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xuICBtYXJnaW4tbGVmdDogMi41cmVtO1xuICB3aWR0aDogMTcuNXJlbTtcbiAgaGVpZ2h0OiA1cmVtO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS10dWktcmFkaXVzLW0pO1xuICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDMpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pdGVtX2RlZmF1bHQge1xuICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4uaXRlbV9kZWZhdWx0OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwLjc1cmVtIDIuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLml0ZW1fZHJvcGRvd24ge1xuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNik7XG59XG4uaXRlbV9tb2RhbCB7XG4gIGJveC1zaGFkb3c6IDAgMS4xMjVyZW0gMS44NzVyZW0gcmdiYSgwLCAwLCAwLCAwLjQ4KTtcbn1cbi5pdGVtX3NpZGViYXIge1xuICBib3gtc2hhZG93OiAwLjI1cmVtIDAgMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4uaXRlbV9uYXZpZ2F0aW9uIHtcbiAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG59XG4uaXRlbV9tb2JpbGUge1xuICBib3gtc2hhZG93OiAwIC0xcmVtIDEuNzVyZW0gcmdiYSgwLCAwLCAwLCAwLjI0KTtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuLmV4YW1wbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcGFkZGluZzogMS4yNXJlbTtcbn1cblxuLml0ZW0ge1xuICAgIC50cmFuc2l0aW9uKGJveC1zaGFkb3cpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcbiAgICB3aWR0aDogMTcuNXJlbTtcbiAgICBoZWlnaHQ6IDVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tdHVpLXJhZGl1cy1tKTtcbiAgICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDMpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAmX2RlZmF1bHQge1xuICAgICAgICAuc2hhZG93KCk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAuc2hhZG93KDUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9kcm9wZG93biB7XG4gICAgICAgIC5zaGFkb3coMik7XG4gICAgfVxuXG4gICAgJl9tb2RhbCB7XG4gICAgICAgIC5zaGFkb3coMyk7XG4gICAgfVxuXG4gICAgJl9zaWRlYmFyIHtcbiAgICAgICAgLnNoYWRvdyg0KTtcbiAgICB9XG5cbiAgICAmX25hdmlnYXRpb24ge1xuICAgICAgICAuc2hhZG93KDYpO1xuICAgIH1cblxuICAgICZfbW9iaWxlIHtcbiAgICAgICAgLnNoYWRvdyg3KTtcbiAgICB9XG59XG4iLCIvLyBjZW50ZXJpbmcgd2l0aCB0cmFuc2xhdGVcbi5jZW50ZXItbGVmdCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xufVxuXG4uY2VudGVyLXRvcCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG59XG5cbi5jZW50ZXItYWxsKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi8vIGNsZWFyZml4XG4uY2xlYXJmaXgoKSB7XG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxufVxuXG4vLy5mdWxsc2l6ZVxuLmZ1bGxzaXplKEBwb3NpdGlvbjogYWJzb2x1dGUsIEBtb2RlOiBoZWlnaHQpIHtcbiAgICBwb3NpdGlvbjogQHBvc2l0aW9uO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuXG4gICAgJiB3aGVuIChAbW9kZSA9IGhlaWdodCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgICYgd2hlbiAoQG1vZGUgPSBpbnNldCkge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbn1cblxuLmNsZWFyYnRuKCkge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5hdXRvZmlsbChAbW9kZTpkZWZhdWx0KSB7XG4gICAgJjotd2Via2l0LWF1dG9maWxsLFxuICAgICY6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xuICAgICAgICBjYXJldC1jb2xvcjogdmFyKC0tdHVpLWJhc2UtMDkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgICAgICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkZWZhdWx0KSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwpIGluc2V0ICFpbXBvcnRhbnQ7IC8vIHRvIG92ZXJsYXkgbmF0aXZlIGJhY2tncm91bmRcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEtbmlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbC1uaWdodCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwtbmlnaHQpIGluc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jbGVhcmlucHV0KEBtb2RlOiBkZWZhdWx0KSB7XG4gICAgLmF1dG9maWxsKEBtb2RlKTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogY3VycmVudENvbG9yOyAvLyBmb3IgU2FmYXJpXG59XG5cbi52aXN1YWxseS1oaWRkZW4oKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDApO1xufVxuXG4vLyBjdXN0b21pemUgbmF0aXZlIHNjcm9sbFxuLmN1c3RvbWl6ZS1zY3JvbGwoKSB7XG4gICAgLy8gZXhjbHVkZSBub24tc3VwcG9ydGluZyBicm93c2Vyc1xuICAgIEBtZWRpYSBhbGwgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDApIGFuZCAobWluLXJlc29sdXRpb246IDAuMDAxZHBjbSkge1xuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2LjI1cmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgICAgIGJvcmRlcjogMi42NjdyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1jbGVhci1ob3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktY2xlYXItYWN0aXZlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHNoYWRvd1xuLnNoYWRvdyhAbW9kZTogMSkge1xuICAgIC8vIERlZmF1bHRcbiAgICAmIHdoZW4gKEBtb2RlID0gMSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLy8gRHJvcGRvd25cbiAgICAmIHdoZW4gKEBtb2RlID0gMikge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgfVxuXG4gICAgLy8gTW9kYWxcbiAgICAmIHdoZW4gKEBtb2RlID0gMykge1xuICAgICAgICBib3gtc2hhZG93OiAwIDEuMTI1cmVtIDEuODc1cmVtIHJnYmEoMCwgMCwgMCwgMC40OCk7XG4gICAgfVxuXG4gICAgLy8gU2lkZWJhclxuICAgICYgd2hlbiAoQG1vZGUgPSA0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAuMjVyZW0gMCAxLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG5cbiAgICAvLyBIb3ZlclxuICAgICYgd2hlbiAoQG1vZGUgPSA1KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC43NXJlbSAyLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG5cbiAgICAvLyBOYXZpZ2F0aW9uXG4gICAgJiB3aGVuIChAbW9kZSA9IDYpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgfVxuXG4gICAgLy8gTW9kYWwgbW9iaWxlXG4gICAgJiB3aGVuIChAbW9kZSA9IDcpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAtMXJlbSAxLjc1cmVtIHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgfVxufVxuXG4uaW5zZXQtYm9yZGVyKEBkaXJlY3Rpb246IGJvdHRvbSwgQG1vZGU6IG5vbmUpIHtcbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBib3R0b20pIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGxlZnQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyB0cmFuc2l0aW9uXG4udHJhbnNpdGlvbihAcGFyYW0sIEBzcGVlZDogdmFyKC0tdHVpLWR1cmF0aW9uLCAzMDBtcykpIHtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBAcGFyYW07XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogQHNwZWVkO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuLy8gZGFzaGVkIGJvcmRlclxuLmRhc2hlZC1ib3JkZXIoQGNvbG9yOiBjdXJyZW50Q29sb3IsIEBhbGlnbm1lbnQ6IGJvdHRvbSwgQHNwYWNlOiA0KSB7XG4gICAgQHNpemU6IHVuaXQoQHNwYWNlLCBweCk7XG4gICAgQHBlcmNlbnRhZ2U6ICgxMDAlIC8gQHNwYWNlICogMik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBAY29sb3IgMCUsIEBjb2xvciBAcGVyY2VudGFnZSwgdHJhbnNwYXJlbnQgQHBlcmNlbnRhZ2UpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgQGFsaWdubWVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IEBzaXplIDFweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi8vIHR5cGljYWwgb3BhY2l0eSBwcm9wZXJ0aWVzIGZvciBpY29uc1xuLm9wYWNpdHktaWNvbigpIHtcbiAgICBvcGFjaXR5OiAwLjg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbi5ob3ZlcmFibGUtd2l0aC1zaGFkb3coKSB7XG4gICAgLnNoYWRvdygpO1xuICAgIC50cmFuc2l0aW9uKGFsbCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIC5zaGFkb3coNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtQHNwYWNlKTtcbiAgICB9XG59XG5cbi8vIGdyYWRpZW50XG4uZ3JhZGllbnQoQHN0YXJ0LWNvbG9yLCBAZW5kLWNvbG9yLCBAYW5nbGU6IDQ1ZGVnKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KEBhbmdsZSwgQHN0YXJ0LWNvbG9yIDAlLCBAZW5kLWNvbG9yIDEwMCUpO1xufVxuXG4vLyB0eXBpY2FsIHByb3BlcnRpZXMgZm9yIHRleHQgb3ZlcmZsb3cgd2l0aCBlbGxpcHNpc1xuLnRleHQtb3ZlcmZsb3coQHR5cGU6IG5vd3JhcCkge1xuICAgIHdoaXRlLXNwYWNlOiBAdHlwZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi50ZXh0LW92ZXJmbG93LXdpdGgtZmFkZShAY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKSwgQHRyYW5zcGFyZW50Q29sb3I6IHRyYW5zcGFyZW50LCBAd2lkdGg6IDEuODc1cmVtKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IEB3aWR0aDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIEB0cmFuc3BhcmVudENvbG9yIDAlLCBAY29sb3IgODAlLCBAY29sb3IgMTAwJSk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbn1cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG5cbi5jcmVhdGVTdGFja2luZ0NvbnRleHQoKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi8vc3BhY2VzXG4udHVpLXNwYWNlKEBkaXJlY3Rpb24sIEBzaXplKSB7XG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYWxsKSB7XG4gICAgICAgIG1hcmdpbjogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGJvdHRvbSkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB2ZXJ0aWNhbCkge1xuICAgICAgICBtYXJnaW4tdG9wOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gbGVmdCkge1xuICAgICAgICBtYXJnaW4tbGVmdDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBob3Jpem9udGFsKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogQHNwYWNlICogQHNpemU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG59XG5cbi5jb250cmFzdC1iYWNrZ3JvdW5kKEBiYWNrZ3JvdW5kKSB7XG4gICAgYmFja2dyb3VuZDogQGJhY2tncm91bmQ7XG4gICAgY29sb3I6IGNvbnRyYXN0KEBiYWNrZ3JvdW5kLCAjMzMzLCAjZmZmKTtcbn1cblxuLmJsdXJyZWQtYmFja2dyb3VuZChAY29sb3I6ICNmZmYpIHtcbiAgICBiYWNrZ3JvdW5kOiBmYWRlKEBjb2xvciwgNzAlKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC40Mzc1cmVtKTtcbn1cblxuLnNjcm9sbGJhci1oaWRkZW4oKSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgLyogc3R5bGVsaW50LWVuYWJsZSovXG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbn1cblxuLy8gaGlkZSBhbiBlbGVtZW50IHZpc3VhbGx5IHdpdGhvdXQgaGlkaW5nIGl0IGZyb20gc2NyZWVuIHJlYWRlcnNcbi5zci1vbmx5KCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCg1MCUpO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShadowsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `shadows`,
                templateUrl: `./shadows.template.html`,
                styleUrls: [`./shadows.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/markup/shadows/shadows.module.ts":
/*!******************************************************!*\
  !*** ./src/modules/markup/shadows/shadows.module.ts ***!
  \******************************************************/
/*! exports provided: ShadowsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadowsModule", function() { return ShadowsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _shadows_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shadows.component */ "./src/modules/markup/shadows/shadows.component.ts");






class ShadowsModule {
}
ShadowsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShadowsModule });
ShadowsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShadowsModule_Factory(t) { return new (t || ShadowsModule)(); }, imports: [[_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["generateRoutes"])(_shadows_component__WEBPACK_IMPORTED_MODULE_3__["ShadowsComponent"]))]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShadowsModule, { declarations: [_shadows_component__WEBPACK_IMPORTED_MODULE_3__["ShadowsComponent"]], imports: [_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_shadows_component__WEBPACK_IMPORTED_MODULE_3__["ShadowsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShadowsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["generateRoutes"])(_shadows_component__WEBPACK_IMPORTED_MODULE_3__["ShadowsComponent"]))],
                declarations: [_shadows_component__WEBPACK_IMPORTED_MODULE_3__["ShadowsComponent"]],
                exports: [_shadows_component__WEBPACK_IMPORTED_MODULE_3__["ShadowsComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=markup-shadows-shadows-module.js.map