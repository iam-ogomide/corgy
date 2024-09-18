import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  getMenuData:any;

  constructor(private getData: GetDataService) {}

  ngOnInit(): void {
    this.getMenuData = this.getData.productData
  }

}
