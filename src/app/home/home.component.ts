import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  getCategorisData: any;
  getCollectionData: any;
  getApplianceProductData: any = [];
  getFashionProductData: any = [];

  constructor(private getData: GetDataService) {}

  ngOnInit(): void {
    AOS.init({
          // Offset from the original trigger point
    });
    
    this.getCollectionData = this.getData.collectionData;

    this.getData.productData.filter((ele: any) => {
      if (ele.pdCategory == 'Celeste Wool') {
        this.getApplianceProductData.push(ele);
      }
      if (ele.pdCategory == 'Cashmere-Blend') {
        this.getFashionProductData.push(ele);
      }
    });
  }
}
