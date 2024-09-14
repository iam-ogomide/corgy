import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  getCategorisData: any;
  getApplianceProductData: any = [];
  getFashionProductData: any = [];

  constructor(private getData: GetDataService) {}

  ngOnInit(): void {
    this.getCategorisData = this.getData.categoriesData;

    this.getData.productData.filter((ele: any) => {
      if (ele.pdCategory == 'appliances') {
        this.getApplianceProductData.push(ele);
      }
      if (ele.pdCategory == 'fashion') {
        this.getFashionProductData.push(ele);
      }
    });
  }
}
