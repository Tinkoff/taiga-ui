import {VERSION} from '@taiga-ui/core';

export interface TaigaVersionMeta {
    label: string;
    baseHref: string;
}

export const TAIGA_VERSIONS_META: ReadonlyArray<TaigaVersionMeta> = [
    {
        label: 'next',
        baseHref: 'next',
    },
    {
        label: `latest (v${VERSION})`,
        baseHref: '',
    },
];
