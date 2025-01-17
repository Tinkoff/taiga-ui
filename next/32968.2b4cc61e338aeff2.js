(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[32968],{32968:e=>{e.exports="import {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiAsPortal, tuiInjectElement, TuiPortals} from '@taiga-ui/cdk';\nimport type {TuiRectAccessor} from '@taiga-ui/core';\nimport {tuiAsViewport, TuiDropdown, TuiDropdownService} from '@taiga-ui/core';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example2\",\n    selector: 'portal-host',\n    template: `\n        <ng-content></ng-content>\n        <ng-container #viewContainer></ng-container>\n    `,\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [tuiAsPortal(TuiDropdownService), tuiAsViewport(PortalHost)],\n})\nclass PortalHost extends TuiPortals implements TuiRectAccessor {\n    private readonly el = tuiInjectElement();\n\n    public readonly type = 'viewport';\n\n    public getClientRect(): DOMRect {\n        return this.el.getBoundingClientRect();\n    }\n}\n\n@Component({\n    standalone: true,\n    imports: [PortalHost, TuiDropdown],\n    templateUrl: './index.html',\n    styleUrls: ['../1/index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {}\n"}}]);