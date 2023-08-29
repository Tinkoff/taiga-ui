import {tuiAssert} from '@taiga-ui/cdk/classes';

import {tuiIsHTMLElement} from './element-checks';

/**
 * Calculates offset for an element relative to it's parent several levels above
 *
 * @param host parent element
 * @param element
 * @return object with offsetTop and offsetLeft number properties
 */
export function tuiGetElementOffset(
    host: Element,
    element: HTMLElement,
): {offsetLeft: number; offsetTop: number} {
    ngDevMode && tuiAssert.assert(host.contains(element), `Host must contain element`);

    let {offsetLeft, offsetParent, offsetTop} = element;

    while (tuiIsHTMLElement(offsetParent) && offsetParent !== host) {
        offsetTop += offsetParent.offsetTop;
        offsetLeft += offsetParent.offsetLeft;
        offsetParent = offsetParent.offsetParent;
    }

    return {offsetLeft, offsetTop};
}
