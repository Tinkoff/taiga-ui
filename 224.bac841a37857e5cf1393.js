(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{"1sdP":function(u,o,e){"use strict";e.r(o),o.default="```ts\nimport {NgModule} from '@angular/core';\nimport {FormsModule, ReactiveFormsModule} from '@angular/forms';\nimport {BrowserModule} from '@angular/platform-browser';\nimport {BrowserAnimationsModule} from '@angular/platform-browser/animations';\nimport {RouterModule} from '@angular/router';\n\nimport {\n  TUI_SANITIZER,\n  TuiActiveZoneModule,\n  TuiAutoFocusModule,\n  TuiElementModule,\n  TuiFilterPipeModule,\n  TuiLetModule,\n  TuiMapperPipeModule,\n  TuiMediaModule,\n} from '@taiga-ui/cdk';\nimport {\n  iconsPathFactory,\n  TUI_ICONS_PATH,\n  TuiButtonModule,\n  TuiCalendarModule,\n  TuiDataListModule,\n  TuiDialogModule,\n  TuiDropdownControllerModule,\n  TuiDropdownModule,\n  TuiErrorModule,\n  TuiExpandModule,\n  TuiFormatNumberPipeModule,\n  TuiFormatPhonePipeModule,\n  TuiGroupModule,\n  TuiHintControllerModule,\n  TuiHintModule,\n  TuiHostedDropdownModule,\n  TuiLabelModule,\n  TuiLinkModule,\n  TuiLoaderModule,\n  TuiManualHintModule,\n  TuiModeModule,\n  TuiNotificationModule,\n  TuiNotificationsModule,\n  TuiPointerHintModule,\n  TuiPrimitiveCheckboxModule,\n  TuiPrimitiveTextfieldModule,\n  TuiRootModule,\n  TuiScrollbarModule,\n  TuiSvgModule,\n  TuiTextfieldControllerModule,\n  TuiTooltipModule,\n} from '@taiga-ui/core';\nimport {\n  TuiAccordionModule,\n  TuiActionModule,\n  TuiAvatarModule,\n  TuiBadgedContentModule,\n  TuiBadgeModule,\n  TuiBreadcrumbsModule,\n  TuiCalendarMonthModule,\n  TuiCalendarRangeModule,\n  TuiCheckboxBlockModule,\n  TuiCheckboxLabeledModule,\n  TuiCheckboxModule,\n  TuiComboBoxModule,\n  TuiDataListWrapperModule,\n  TuiDropdownContextModule,\n  TuiDropdownSelectionModule,\n  TuiFieldErrorModule,\n  TuiFilterByInputPipeModule,\n  TuiFilterModule,\n  TuiHighlightModule,\n  TuiInputCopyModule,\n  TuiInputCountModule,\n  TuiInputDateModule,\n  TuiInputDateRangeModule,\n  TuiInputDateTimeModule,\n  TuiInputFileModule,\n  TuiInputInlineModule,\n  TuiInputModule,\n  TuiInputMonthModule,\n  TuiInputMonthRangeModule,\n  TuiInputNumberModule,\n  TuiInputPasswordModule,\n  TuiInputPhoneInternationalModule,\n  TuiInputPhoneModule,\n  TuiInputRangeModule,\n  TuiInputSliderModule,\n  TuiInputTagModule,\n  TuiInputTimeModule,\n  TuiIslandModule,\n  TuiLazyLoadingModule,\n  TuiLineClampModule,\n  TuiMarkerIconModule,\n  TuiMultiSelectModule,\n  TuiPaginationModule,\n  TuiPresentModule,\n  TuiProgressModule,\n  TuiProjectClassModule,\n  TuiRadioBlockModule,\n  TuiRadioLabeledModule,\n  TuiRadioListModule,\n  TuiRadioModule,\n  TuiSelectModule,\n  TuiSliderModule,\n  TuiStepperModule,\n  TuiTabsModule,\n  TuiTagModule,\n  TuiTextAreaModule,\n  TuiToggleModule,\n  TuiRatingModule,\n  TuiTreeModule,\n} from '@taiga-ui/kit';\nimport {\n  TuiAxesModule,\n  TuiBarModule,\n  TuiBarChartModule,\n  TuiLineChartModule,\n  TuiLineDaysChartModule,\n  TuiPieChartModule,\n  TuiRingChartModule,\n} from '@taiga-ui/addon-charts';\nimport {\n  TuiCardModule,\n  TuiInputCardModule,\n  TuiInputCVCModule,\n  TuiCurrencyPipeModule,\n  TuiInputExpireModule,\n  TuiMoneyModule,\n} from '@taiga-ui/addon-commerce';\nimport {\n  TuiColorPickerModule,\n  TuiInputColorModule,\n  TuiEditorModule,\n  TuiEditorSocketModule,\n} from '@taiga-ui/addon-editor';\nimport {\n  TuiElasticStickyModule,\n  TuiMobileCalendarModule,\n  TuiMobileDialogModule,\n  TuiPullToRefreshModule,\n  TuiRippleModule,\n  TuiSidebarModule,\n  TuiTouchableModule,\n} from '@taiga-ui/addon-mobile';\nimport {\n  TuiReorderModule,\n  TuiResizableColumnModule,\n  TuiTablePaginationModule,\n  TuiTableModule,\n} from '@taiga-ui/addon-table';\nimport {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';\nimport {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';\nimport {AppComponent} from './app.component';\n\n@NgModule({\n  imports: [\n    BrowserModule,\n    BrowserAnimationsModule,\n    FormsModule,\n    ReactiveFormsModule,\n    // Modules for main app.module that should be add once\n    TuiRootModule,\n    TuiDialogModule,\n    TuiNotificationsModule,\n    // Modules for your app modules where you use our components\n    TuiAccordionModule,\n    TuiActionModule,\n    TuiActiveZoneModule,\n    TuiAvatarModule,\n    TuiBadgeModule,\n    TuiBadgedContentModule,\n    TuiButtonModule,\n    TuiCalendarModule,\n    TuiCalendarRangeModule,\n    TuiCalendarMonthModule,\n    TuiCardModule,\n    TuiAxesModule,\n    TuiLineChartModule,\n    TuiLineDaysChartModule,\n    TuiPieChartModule,\n    TuiBarChartModule,\n    TuiRingChartModule,\n    TuiCheckboxModule,\n    TuiCheckboxBlockModule,\n    TuiCheckboxLabeledModule,\n    TuiPrimitiveCheckboxModule,\n    TuiColorPickerModule,\n    TuiDataListModule,\n    TuiDataListWrapperModule,\n    TuiDropdownContextModule,\n    TuiHostedDropdownModule,\n    TuiErrorModule,\n    TuiEditorModule,\n    TuiEditorSocketModule,\n    TuiExpandModule,\n    TuiFieldErrorModule,\n    TuiFilterModule,\n    TuiGroupModule,\n    TuiMarkerIconModule,\n    TuiInputInlineModule,\n    TuiInputModule,\n    TuiInputDateModule,\n    TuiInputCardModule,\n    TuiInputColorModule,\n    TuiInputCVCModule,\n    TuiInputExpireModule,\n    TuiInputCopyModule,\n    TuiInputCountModule,\n    TuiInputDateTimeModule,\n    TuiInputFileModule,\n    TuiInputMonthModule,\n    TuiInputMonthRangeModule,\n    TuiInputNumberModule,\n    TuiInputPasswordModule,\n    TuiInputPhoneModule,\n    TuiInputRangeModule,\n    TuiInputDateRangeModule,\n    TuiInputSliderModule,\n    TuiInputTagModule,\n    TuiInputTimeModule,\n    TuiInputPhoneInternationalModule,\n    TuiPrimitiveTextfieldModule,\n    TuiTextAreaModule,\n    TuiIslandModule,\n    TuiLabelModule,\n    TuiLineClampModule,\n    TuiLinkModule,\n    TuiLoaderModule,\n    TuiMoneyModule,\n    TuiNotificationModule,\n    TuiMobileDialogModule,\n    TuiMobileCalendarModule,\n    TuiPullToRefreshModule,\n    TuiRadioModule,\n    TuiRadioBlockModule,\n    TuiRadioLabeledModule,\n    TuiRadioListModule,\n    TuiComboBoxModule,\n    TuiMultiSelectModule,\n    TuiSelectModule,\n    TuiScrollbarModule,\n    TuiInputRangeModule,\n    TuiInputSliderModule,\n    TuiSliderModule,\n    TuiSvgModule,\n    TuiReorderModule,\n    TuiResizableColumnModule,\n    TuiTablePaginationModule,\n    TuiTagModule,\n    TuiToggleModule,\n    TuiTooltipModule,\n    TuiBreadcrumbsModule,\n    TuiPaginationModule,\n    TuiStepperModule,\n    TuiTabsModule,\n    TuiAutoFocusModule,\n    TuiDropdownModule,\n    TuiDropdownSelectionModule,\n    TuiElasticStickyModule,\n    TuiElementModule,\n    TuiHighlightModule,\n    TuiHintModule,\n    TuiLazyLoadingModule,\n    TuiManualHintModule,\n    TuiPointerHintModule,\n    TuiLetModule,\n    TuiMediaModule,\n    TuiModeModule,\n    TuiPresentModule,\n    TuiProgressModule,\n    TuiRippleModule,\n    TuiSidebarModule,\n    TuiDropdownControllerModule,\n    TuiTouchableModule,\n    TuiHintControllerModule,\n    TuiTextfieldControllerModule,\n    TuiMoneyModule,\n    PolymorpheusModule,\n    TuiFilterPipeModule,\n    TuiFormatNumberPipeModule,\n    TuiFormatPhonePipeModule,\n    TuiMapperPipeModule,\n    TuiTableModule,\n    TuiBarModule,\n    TuiCurrencyPipeModule,\n    TuiProjectClassModule,\n    TuiRatingModule,\n    TuiFilterByInputPipeModule,\n    TuiTreeModule,\n    RouterModule.forRoot([]),\n  ],\n  declarations: [AppComponent],\n  bootstrap: [AppComponent],\n  providers: [\n    // A workaround because StackBlitz does not support assets\n    {\n      provide: TUI_ICONS_PATH,\n      useValue: iconsPathFactory('https://taiga-ui.dev/assets/taiga-ui/icons'),\n    },\n    /**\n     * If you use unsafe icons or have kind of WYSISYG editor in your app\n     *\n     * Take a look at: https://github.com/tinkoff/ng-dompurify\n     *\n     * This library implements DOMPurify as Angular Sanitizer or Pipe.\n     * It delegates sanitizing to DOMPurify and supports the same configuration.\n     */\n    {\n      provide: TUI_SANITIZER,\n      useClass: NgDompurifySanitizer,\n    },\n  ],\n})\nexport class AppModule {}\n```\n"}}]);