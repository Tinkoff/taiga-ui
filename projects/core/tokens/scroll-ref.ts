import {DOCUMENT} from '@angular/common';
import {ElementRef, inject} from '@angular/core';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils/miscellaneous';

export const TUI_SCROLL_REF = tuiCreateTokenFromFactory(
    () => new ElementRef(inject(DOCUMENT).documentElement),
);
