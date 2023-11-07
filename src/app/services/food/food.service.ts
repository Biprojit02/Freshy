import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag:string):Foods[]{
    return tag == "All"?
    this.getAll(): this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Foods[]{
    return [
      {
        id:1,
        name: 'Apple',
        price: 80,
        favorite: true,
        origins: ['India'],
        star: 4.5,
        imageUrl: '/assets/g-1.jpg',
        tags: 'a',
      },
      {
        id:2,
        name: 'Guava',
        price: 60,
        favorite: false,
        origins: ['India'],
        star: 4.0,
        imageUrl: '/assets/g-2.jpg',
        tags: 'a',
      },
      {
        id:3,
        name: 'Mango',
        price: 65,
        favorite: false,
        origins: ['India'],
        star: 4.5,
        imageUrl: '/assets/g-3.jpg',
        tags: 'a',
      },
      {
        id:4,
        name: 'Orange',
        price: 80,
        favorite: true,
        origins: ['India'],
        star: 4.3,
        imageUrl: '/assets/g-4.jpg',
        tags: 'a',
      },
      {
        id:5,
        name: 'Watermelon',
        price: 70,
        favorite: false,
        origins: ['India'],
        star: 4.2,
        imageUrl: '/assets/g-5.jpg',
        tags: 'a',
      },
      {
        id:6,
        name: 'Mosambi',
        price: 60,
        favorite: false,
        origins: ['India'],
        star: 4.5,
        imageUrl: '/assets/g-6.jpg',
        tags: 'a',
      },
      {
        id:7,
        name: 'Kiwis',
        price: 200,
        favorite: false,
        origins: ['India'],
        star: 4.5,
        imageUrl: '/assets/g-7.jpg',
        tags: 'a',
      },
      {
        id:8,
        name: 'Dragon Fruit',
        price: 180,
        favorite: false,
        origins: ['India'],
        star: 4.8,
        imageUrl: '/assets/g-8.jpg',
        tags: 'a',
      }
    ]
  }
}
