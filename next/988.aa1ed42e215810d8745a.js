(window.webpackJsonp=window.webpackJsonp||[]).push([[988],{i9Ux:function(n,a,t){"use strict";t.r(a),a.default='<div class="wrapper">\n    <button\n        tuiIconButton\n        type="button"\n        title="Choose a date"\n        appearance="secondary"\n        shape="rounded"\n        icon="tuiIconCalendarLarge"\n        (click)="onClick()"\n    ></button>\n    <span\n        class="date"\n        [class.date_empty]="empty"\n    >\n        {{date$ | async}}\n    </span>\n</div>\n'}}]);