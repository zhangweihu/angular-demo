import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
@Injectable()   // 当 TypeScript 看到@Injectable()装饰器时，就会记下本服务的元数据。 如果 Angular 需要往这个服务中注入其它依赖，就会使用这些元数据
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        console.log(HEROES)
        return Promise.resolve(HEROES);
    }
}
