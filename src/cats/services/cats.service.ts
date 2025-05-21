/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable, Inject } from '@nestjs/common';

import { Cat } from '../interfaces/cats.interface';
import { ApplicationConfig } from '@nestjs/core';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];
  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
//injecting at the application using provider in
// @Injectable({providerIn : 'root'})
// export classs CatRootLevel{

// }
//injecting the component level
// @Component({
//   selector: 'app-cat',
//   templateUrl: './cat.component.html',
//   styleUrls: ['./cat.component.css'],
//   providers: [CatsService]
// })
// export class CatComponentLevelService {
//   constructor(private catsService: CatsService) {}
// }

//injecting at the application using ApplicationConfig
// export const appConfig: ApplicationConfig =
// {
//   providers: [
//     {provide : CatsService}
//   ]
// }


//injecting using property-basedd injection

@Injectable()
export class HttpService<T>
{
  @Inject('HTTP_OPTIONS')
  private readonly httpOptions: T;
}