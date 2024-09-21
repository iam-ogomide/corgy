import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  activeIndex: number | null = null;

  accordionData = [
    { title: 'Introduction', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur architecto dolore impedit quam, quos maxime veniam. Quisquam exercitationem numquam nesciunt quod unde amet reiciendis repellat commodi esse. Ducimus, accusamus.' },
    { title: 'Choosing The Best Fits', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur architecto dolore impedit quam, quos maxime veniam. Quisquam exercitationem numquam nesciunt quod unde amet reiciendis repellat commodi esse. Ducimus, accusamus.' },
    { title: 'Fashion Tips', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur architecto dolore impedit quam, quos maxime veniam. Quisquam exercitationem numquam nesciunt quod unde amet reiciendis repellat commodi esse. Ducimus, accusamus.' },
    { title: 'More Styling Resources', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur architecto dolore impedit quam, quos maxime veniam. Quisquam exercitationem numquam nesciunt quod unde amet reiciendis repellat commodi esse. Ducimus, accusamus.' },
  ];

  toggleSection(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
