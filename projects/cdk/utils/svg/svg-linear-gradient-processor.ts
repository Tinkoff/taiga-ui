import {TuiSafeHtml} from '@taiga-ui/cdk/interfaces';
import {tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';

function makeRandomSalt(): number {
    return Math.floor(Math.random() * Date.now());
}

function escapeRegExp(search: string): string {
    return search.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, `\\$&`);
}

function extractLinearGradientIdsFromSvg(svg: string): string[] {
    const ids = (svg.match(/url\(("?)('*)#(.*?)('*)\)/g) ?? []).map(url =>
        url.slice(4, url.length - 1).replace(/['"#]+/g, ``),
    );

    return Array.from(new Set(ids));
}

/**
 * TODO: remove in v4.0
 * @deprecated
 */
function setFallbackForGradientFill(svg: string, fallback: string): string {
    try {
        const tree = new DOMParser().parseFromString(svg, `text/html`);

        tree.body
            .querySelectorAll(`[fill^=url]`) // only gradient
            .forEach(element =>
                element.setAttribute(
                    `fill`,
                    `${element.getAttribute(`fill`)} ${fallback}`.trim(),
                ),
            );

        return tree.body.innerHTML.trim();
    } catch {
        return svg;
    }
}

/**
 * @description:
 * Any ‘linearGradient’ attributes which are defined on the referenced
 * element which are not defined on this element are inherited by this element.
 * If this element has no defined gradient stops, and the referenced element does
 * (possibly due to its own ‘xlink:href’ attribute), then this element inherits
 * the gradient stop from the referenced element. Inheritance can be indirect
 * to an arbitrary level; thus, if the referenced element inherits attribute
 * or gradient stops due to its own ‘xlink:href’ attribute, then the current
 * element can inherit those attributes or gradient stops.
 *
 * Documentation: https://www.w3.org/TR/SVG11/pservers.html
 *
 */
export function tuiSvgLinearGradientProcessor(
    svg: TuiSafeHtml,
    salt: number | string = makeRandomSalt(),
    /**
     * TODO: remove in v4.0
     * @deprecated
     */
    fallback: string = `rgba(0, 0, 0, 0.7)`,
): TuiSafeHtml {
    if (tuiIsString(svg)) {
        const uniqueIds = extractLinearGradientIdsFromSvg(svg);
        const rawSvg = uniqueIds.reduce((newSvg, previousId) => {
            const escapedId = escapeRegExp(previousId);
            const newId = `id_${salt}_${previousId}`;

            return newSvg
                .replace(new RegExp(`"${escapedId}"`, `g`), `"${newId}"`)
                .replace(new RegExp(`'${escapedId}'`, `g`), `'${newId}'`)
                .replace(new RegExp(`url\\('#${escapedId}'\\)`, `g`), `url('#${newId}')`)
                .replace(new RegExp(`url\\("#${escapedId}"\\)`, `g`), `url("#${newId}")`)
                .replace(new RegExp(`url\\(#${escapedId}\\)`, `g`), `url(#${newId})`);
        }, svg);

        return setFallbackForGradientFill(rawSvg, fallback);
    }

    return svg;
}
