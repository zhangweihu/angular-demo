import { Component ,Input } from '@angular/core';
import { Hero } from './hero';
@Component ({   // 装饰器为组件提供了Angular元数据
    selector:'app-hero-detail',           //加app-是因为tslint报错
    templateUrl:'./hero-detail.component.html'
})
export class HeroDetailComponent {
    @Input() hero:Hero;
}
