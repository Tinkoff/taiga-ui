import {Inject, Injectable} from '@angular/core';
import {
    TUI_NOTIFICATION_OPTIONS,
    TuiNotificationDefaultOptions,
} from '@taiga-ui/core/tokens';

import {AbstractTuiNotificationsGroupService} from './notifications-group.service';

@Injectable()
export class TuiNotificationsService extends AbstractTuiNotificationsGroupService {
    constructor(
        @Inject(TUI_NOTIFICATION_OPTIONS)
        protected readonly defaultOptions: TuiNotificationDefaultOptions,
    ) {
        super();
    }
}
