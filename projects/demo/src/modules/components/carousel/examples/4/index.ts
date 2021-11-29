import {Component} from '@angular/core';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-carousel-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiCarouselExample4 {
    open = false;

    index = 0;

    get background(): string {
        switch (this.index) {
            case 0:
                return 'url(https://cdn.tvc.ru/pictures/mood/bw/194/22.jpg)';
            case 1:
                return 'url(https://r.penzainform.ru/d/storage/news/0124/00049016/320451-big.jpg)';
            default:
                return 'url(https://cdn.motor1.com/images/mgl/28bxz/s1/ford-carousel.jpg)';
        }
    }

    onClick() {
        this.index = 0;
        this.open = true;
    }

    navigate(delta: number) {
        this.index += delta;
    }
}
