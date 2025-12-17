import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [CommonModule, RouterModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About implements OnInit {

  storeName = "SmartShop"; 
  description = "نحن نقدم أفضل التليفونات الذكية بأحدث الأسعار وأعلى جودة. اكتشف مجموعتنا المميزة الآن!";

  phones = [
    { 
      name: 'iPhone 15', 
      brand: 'Apple', 
      price: 1200, 
      rating: 4.8, 
      thumbnail: 'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
      description: 'أحدث آيفون مع كاميرا رائعة وأداء ممتاز.'
    },
    { 
      name: 'Galaxy S23', 
      brand: 'Samsung', 
      price: 1000, 
      rating: 4.6, 
      thumbnail: 'https://dummyjson.com/image/i/products/2/thumbnail.jpg',
      description: 'هاتف أندرويد راقي مع شاشة ممتازة.'
    },
    { 
      name: 'Pixel 8', 
      brand: 'Google', 
      price: 950, 
      rating: 4.5, 
      thumbnail: 'https://dummyjson.com/image/i/products/3/thumbnail.jpg',
      description: 'كاميرا ممتازة ونظام أندرويد نقي.'
    },
    { 
      name: 'OnePlus 12', 
      brand: 'OnePlus', 
      price: 850, 
      rating: 4.4, 
      thumbnail: 'https://dummyjson.com/image/i/products/4/thumbnail.jpg',
      description: 'أداء سريع وتجربة أندرويد سلسة.'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
