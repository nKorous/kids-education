import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  rand(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min)
  }
}
