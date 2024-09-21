import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleSec(): void {
    alert("Form Submitted Successfully")
    AOS.init({
      // Offset from the original trigger point
});
  }


}
