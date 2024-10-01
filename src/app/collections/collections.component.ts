import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import * as AOS from 'aos';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  

  getMenuData:any;
  isSidebarVisible = false;
  selectedDropdownCategory: string = ''; // For dropdown filter
  selectedCheckboxCategories: string[] = []; // For checkbox filter
  
  allCategoriesSelected = true; 

  constructor(private getData: GetDataService) {}

  ngOnInit(): void {
    AOS.init({
      // Offset from the original trigger point
    });
    this.getMenuData = this.getData.productData;  
  }


  filteredProducts = this.getData.productData;
  categories = [...new Set(this.getData.productData.map(product => product.pdCategory))];
  


  // Handle dropdown change
   filterByCategory(event: Event) {
    const selectedCategory = (event.target as HTMLSelectElement).value;
    this.selectedDropdownCategory = selectedCategory;
    this.applyFilters();
  }

  // Handle "Select All" checkbox change
  onSelectAllCategories(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.selectedCheckboxCategories = [];
      this.filteredProducts = this.getData.productData; // Show all products
    } else {
      this.applyFilters(); // Apply any selected category filters
    }
    this.allCategoriesSelected = checkbox.checked;
  }

  // Handle individual category checkbox changes
  onCategoryCheckboxChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    const value = checkbox.value;

    if (checkbox.checked) {
      this.selectedCheckboxCategories.push(value);
    } else {
      this.selectedCheckboxCategories = this.selectedCheckboxCategories.filter(cat => cat !== value);
    }

    // If any category is selected, uncheck "All Categories"
    if (this.selectedCheckboxCategories.length > 0) {
      this.allCategoriesSelected = false;
    }

    this.applyFilters();
  }


  




  // Price filter
  minPrice = 0;
  maxPrice = 100000; // Max price based on your data
  priceSliderOptions: Options = {
    floor: 0,
    ceil: 100000, // Upper limit based on max product price
    step: 1000, // Step value for the slider
    translate: (value: number): string => `₹${value}`
  };

  // Handle price slider change
  onPriceChange() {
    this.applyFilters();
  }






  // Apply filters based on dropdown, checkboxes, and price range
  applyFilters() {
    let filtered = this.getData.productData;

    // Filter by dropdown category
    if (this.selectedDropdownCategory) {
      filtered = filtered.filter(product => product.pdCategory === this.selectedDropdownCategory);
    }

    // Further filter by selected checkboxes (if any)
    if (this.selectedCheckboxCategories.length > 0) {
      filtered = filtered.filter(product => this.selectedCheckboxCategories.includes(product.pdCategory));
    }

    

    // Filter by price range
    filtered = filtered.filter(product => product.pdPrice >= this.minPrice && product.pdPrice <= this.maxPrice);

    this.filteredProducts = filtered;
  }


  
  

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible; // Toggle sidebar visibility
  }

}
