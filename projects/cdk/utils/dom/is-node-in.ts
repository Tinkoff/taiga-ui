/**
 * @deprecated: use {@link tuiIsNodeIn} instead
 * Checks if node is inside a specific selector
 *
 * @param node
 * @param selector
 * @return true if node is inside a particular selector
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function isNodeIn(node: Node, selector: string): boolean {
    return node.nodeType === Node.TEXT_NODE
        ? !!node.parentElement?.closest(selector)
        : node.nodeType === Node.ELEMENT_NODE && !!(node as Element).closest(selector);
}

export const tuiIsNodeIn = isNodeIn;
