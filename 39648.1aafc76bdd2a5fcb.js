(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[39648],{39648:e=>{e.exports='{{ clamped }} = clamp(value, min, max);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-textfield\n            *ngFor="let parameter of [\'value\', \'min\', \'max\']"\n            class="tui-space_top-2"\n        >\n            <label tuiLabel>{{ parameter }}</label>\n\n            <input\n                tuiInputNumber\n                [formControlName]="parameter"\n            />\n        </tui-textfield>\n    </div>\n</form>\n'}}]);