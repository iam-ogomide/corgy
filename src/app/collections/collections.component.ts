import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  

  getMenuData:any;

  constructor(private getData: GetDataService) {}

  ngOnInit(): void {
    AOS.init({
      // Offset from the original trigger point
});
    this.getMenuData = this.getData.productData;
    
  }
  filteredProducts = this.getData.productData;
  categories = Array.from(new Set(this.getData.productData.map(p => p.pdCategory)));
  filterByCategory(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const category = selectElement.value;
    if (category) {
      this.filteredProducts = this.getData.productData.filter(product => product.pdCategory === category);
    } else {
      this.filteredProducts = this.getData.productData; // Show all if no category selected
    }
  }

}
