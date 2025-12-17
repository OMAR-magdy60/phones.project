import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  smartphonelist: any[] = [];
  loading = false;
  error: string | null = null;

  ngOnInit(): void {
    this.getSmartphones();
  }

  async getSmartphones() {
    this.loading = true;
    this.error = null;

    try {
      const response = await fetch(
        'https://dummyjson.com/products/category/smartphones'
      );
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      this.smartphonelist = data.products;
    } catch (err: any) {
      this.error = err.message || 'Unknown error';
    } finally {
      this.loading = false;
    }
  }
}
