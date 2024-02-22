import {inject, Pipe, PipeTransform} from '@angular/core';
import {TuiDocExample, TuiDocPageComponent} from '@taiga-ui/addon-doc';

const toKebab: (str: string) => string = str =>
    str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? '-' : '') + $.toLowerCase());

@Pipe({name: 'tuiExample', standalone: true})
export class TuiExample implements PipeTransform {
    docPage = inject(TuiDocPageComponent);

    transform(
        index: number,
        formats:
            | string
            | 'html,less'
            | 'html,ts,less'
            | 'html,ts'
            | 'html' = 'ts,less,html',
    ): TuiDocExample {
        return Object.fromEntries(
            formats
                .split(',')
                .map(format => [
                    format.toUpperCase(),
                    import(
                        `../modules/${this.docPage.type}/${toKebab(this.docPage.header)}/examples/${index}/index.${format}?raw`
                    ),
                ]),
        );
    }
}
