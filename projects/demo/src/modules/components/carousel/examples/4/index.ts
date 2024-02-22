import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-carousel-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiCarouselExample4 {
    protected open = false;

    protected index = 0;

    public get background(): string {
        switch (this.index) {
            case 0:
                return 'url(https://cdn.tvc.ru/pictures/mood/bw/194/22.jpg)';
            case 1:
                return 'url(https://ic.pics.livejournal.com/ruhtal/6943012/12468/12468_900.jpg)';
            default:
                return 'url(https://cdn.motor1.com/images/mgl/28bxz/s1/ford-carousel.jpg)';
        }
    }

    public onClick(): void {
        this.index = 0;
        this.open = true;
    }

    public navigate(delta: number): void {
        this.index = (this.index + delta) % 3;
    }
}
