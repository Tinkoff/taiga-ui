import {
    Inject,
    Optional,
    Pipe,
    PipeTransform,
    Sanitizer,
    SecurityContext,
} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {TuiRawLoaderContent} from '@taiga-ui/addon-doc/interfaces';
import {tuiRawLoad} from '@taiga-ui/addon-doc/utils';
import {TuiSafeHtml} from '@taiga-ui/cdk';
import {TUI_SANITIZER} from '@taiga-ui/core';
import {marked, Renderer} from 'marked';
import {map, Observable, of, switchMap} from 'rxjs';

@Pipe({
    standalone: true,
    name: 'tuiMarkdown',
})
export class TuiMarkdownPipe implements PipeTransform {
    constructor(
        @Optional()
        @Inject(TUI_SANITIZER)
        private readonly tuiSanitizer: Sanitizer | null,
        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
    ) {}

    transform(value: TuiRawLoaderContent): Observable<TuiSafeHtml> {
        return of(value).pipe(
            switchMap(tuiRawLoad),
            switchMap(async markdown =>
                marked
                    .use({
                        async: true,
                        pedantic: false,
                        gfm: true,
                    })
                    .parse(markdown, {
                        renderer: new (class ChangelogRender extends Renderer {
                            override heading(
                                text: string,
                                level: 1 | 2 | 3 | 4 | 5 | 6,
                            ): string {
                                const id = text
                                    .replace(/[^\w\s]/gi, '')
                                    .replace(/[\u0250-\uE007]/g, '')
                                    .replace(
                                        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
                                        '',
                                    )
                                    .trim()
                                    .toLowerCase()
                                    .split(' ')[0];

                                return `<h${level} id="${id}">${text}</h${level}>`;
                            }
                        })(),
                    }),
            ),
            map(parsed =>
                this.sanitizer.bypassSecurityTrustHtml(
                    (this.tuiSanitizer
                        ? this.tuiSanitizer.sanitize(SecurityContext.HTML, parsed)
                        : this.sanitizer.sanitize(SecurityContext.HTML, parsed)) || '',
                ),
            ),
        );
    }
}
