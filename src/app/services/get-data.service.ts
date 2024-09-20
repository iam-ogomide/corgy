import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor() { }

  // subcategory data .

  subCategorisFilterData = [
    { id: 1, categories: 'appliances', subcategories: 'mobile' },
    { id: 2, categories: 'appliances', subcategories: 'smart tv' },
    { id: 3, categories: 'appliances', subcategories: 'air cooler' },
    { id: 4, categories: 'appliances', subcategories: 'refrigerator' },
    { id: 5, categories: 'fashion', subcategories: 'tshirt' },
    { id: 6, categories: 'fashion', subcategories: 'jeans' },
    { id: 7, categories: 'homeandfurniture', subcategories: 'sofa' },
    { id: 8, categories: 'homeandfurniture', subcategories: 'table' },
    { id: 9, categories: 'homeandfurniture', subcategories: 'cover' },
    { id: 10, categories: 'toys', subcategories: 'puzzle' },
    { id: 11, categories: 'toys', subcategories: 'cars' },
    { id: 12, categories: 'toys', subcategories: 'toys' }
  ];



  // category data 
  categoriesData = [
    {
      id: 1,
      name: 'Fashion',
      img: '../../assets/images/categoriesimg/fashion.webp',
      code: 'fashion',
    },
    {
      id: 2,
      name: 'Home & Furniture',
      img: '../../assets/images/categoriesimg/home.webp',
      code: 'homeandfurniture',
    },
    {
      id: 3,
      name: 'Appliance',
      img: '../../assets/images/categoriesimg/appliance.webp',
      code: 'appliances',
    },
    {
      id: 4,
      name: 'Toys',
      img: '../../assets/images/categoriesimg/toys.webp',
      code: 'toys',
    },
  ];

   // collection data 
   collectionData = [
    {
      id: 1,
      name: 'Celeste Wool',
      img: '../../assets/j1.jpg',
      code: 'fashion',
    },
    {
      id: 2,
      name: 'Cashmere-Blend',
      img: '../../assets/j3.jpg',
      code: 'homeandfurniture',
    },
    {
      id: 3,
      name: 'Alpaca',
      img: '../../assets/j5.jpg',
      code: 'appliances',
    },
    {
      id: 4,
      name: 'Silk-Blend Bouclé',
      img: '../../assets/t1.jpg',
      code: 'toys',
    },
  ];


  // product details 

  productData = [
    {
      pdId: 8565,
      pdName: "Checked Cashmere-Jacquard",
      pdDesc: "With the stunning features of the Samsung Galaxy F04 smartphone, discover what it means to have a flawless user experience",
      pdPrice: 11499,
      pdCategory: "appliances",
      pdSubCategory: "mobile",
      pdImg: "../../assets/t1.jpg"
    },
    {
      pdId: 8566,
      pdName: "Distressed Cotton-Canvas Chore",
      pdDesc: "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy.",
      pdPrice: 79900,
      pdCategory: "appliances",
      pdSubCategory: "mobile",
      pdImg: "../../assets/t2.jpg"
    },
    {
      pdId: 8567,
      pdName: "Appliquéd Distressed Panelled",
      pdDesc: "Bajaj PX 97 torque is a durable, compact and portable room cooler that can be placed in offices as well in bedrooms for effective cooling, it is constructed from corrosion-free, engineered thermoplastic material",
      pdPrice: 7450,
      pdCategory: "appliances",
      pdSubCategory: "air cooler",
      pdImg: "../../assets/t3.jpg"
    },

    {
      pdId: 8568,
      pdName: "Asymmetric Cashmere-Jacquard",
      pdDesc: "You can enjoy the brilliant colours and explore new worlds in 4K resolution on this Sony Google TV. The powerful X1 4K processor brings every colour to life so that you can enjoy your favourite content.",
      pdPrice: 74000,
      pdCategory: "appliances",
      pdSubCategory: "smart tv",
      pdImg: "../../assets/t4.jpg"
    },
    {
      pdId: 8569,
      pdName: "Appliquéd Ribbed Virgin Wool",
      pdDesc: "You can stock up on your weekly groceries and easily store them in the Samsung Refrigerator. Moreover, you can even store additional groceries and other food items in this refrigerator by converting the freezer into a fridge",
      pdPrice: 44990,
      pdCategory: "appliances",
      pdSubCategory: "refrigerator",
      pdImg: "../../assets/j1.jpg"
    },
    {
      pdId: 8570,
      pdName: "Appliquéd Merino Wool",
      pdDesc: "130 Music Dual Sim, Music Player, Wireless FM Radio and Dedicated Music Buttons",
      pdPrice: 2199,
      pdCategory: "appliances",
      pdSubCategory: "mobile",
      pdImg: "../../assets/j2.jpg"
    },
    {
      pdId: 8571,
      pdName: "Ribbed Linen and Wool-Blend",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 200,
      pdCategory: "fashion",
      pdSubCategory: "tshirt",
      pdImg: "../../assets/j3.jpg",
      
    },
    {
      pdId: 8572,
      pdName: "Dlomu Wool",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 500,
      pdCategory: "fashion",
      pdSubCategory: "tshirt",
      pdImg: "../../assets/n3.jpg",
      pdSize: ["S", "M", "L", "XL"]

    },
    {
      pdId: 8573,
      pdName: "Women Solid Round Neck Pure Cotton Purple T-Shirt",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 800,
      pdCategory: "fashion",
      pdSubCategory: "tshirt",
      pdImg: "../../assets/j7.jpg",

    },
    {
      pdId: 8574,
      pdName: "Men Regular Mid Rise Blue Jeans",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 550,
      pdCategory: "fashion",
      pdSubCategory: "jeans",
      pdImg: "../../assets/t5.jpg",
      pdSize: [30, 32, 34]
    },
    {
      pdId: 8575,
      pdName: "Women Flared Mid Rise Blue Jeans",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 1500,
      pdCategory: "fashion",
      pdSubCategory: "jeans",
      pdImg: "../../assets/t6.jpg",
      pdSize: [26, 28, 30, 32, 34]
    },
    {
      pdId: 8576,
      pdName: "Cortina Polyester ",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 1500,
      pdCategory: "homeandfurniture",
      pdSubCategory: "cover",
      pdImg: "../../assets/t7.jpg",
    },
    {
      pdId: 8577,
      pdName: "Cortina Cotton ",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 2500,
      pdCategory: "homeandfurniture",
      pdSubCategory: "cover",
      pdImg: "../../assets/n6.jpg",
    },
    {
      pdId: 8578,
      pdName: "Double Floral Flat ",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 2500,
      pdCategory: "homeandfurniture",
      pdSubCategory: "cover",
      pdImg: "../../assets/j6.jpg",
    },
    {
      pdId: 8579,
      pdName: "Seventh Heaven ",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 15000,
      pdCategory: "homeandfurniture",
      pdSubCategory: "sofa",
      pdImg: "../../assets/j7.jpg",
    },
    {
      pdId: 8580,
      pdName: "Allie Wood",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 10000,
      pdCategory: "homeandfurniture",
      pdSubCategory: "table",
      pdImg: "../../assets/z5.jpg",
    },
    {
      pdId: 8581,
      pdName: "spincart Mini Monster",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 300,
      pdCategory: "toys",
      pdSubCategory: "cars",
      pdImg: "../../assets/z4.jpg",
    },
    {
      pdId: 8582,
      pdName: "Oversized Double-Breasted Logo-Appliquéd Wool",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 25000,
      pdCategory: "toys",
      pdSubCategory: "cars",
      pdImg: "../../assets/z3.jpg",
    },
    {
      pdId: 8583,
      pdName: "DRKSHDW Cotton",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 700,
      pdCategory: "toys",
      pdSubCategory: "puzzle",
      pdImg: "../../assets/z1.jpg",
    },
    {
      pdId: 8584,
      pdName: "Double-Breasted Wool-Tweed",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 500,
      pdCategory: "toys",
      pdSubCategory: "toys",
      pdImg: "../../assets/z2.jpg",
    },
  ];
}
