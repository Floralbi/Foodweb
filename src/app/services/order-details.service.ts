import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }
   
  //fooddetails

  foodDetails =[
    {
      id:1,
      foodName:"Panner Grilled Sandwich",
      foodDetails:"Pan-fried masala paneer.",
      foodPrice:200,
      foodImg:"../../assets/img/image 1.jpg"
    },
    {
      id:2,
      foodName:"Vaggie Supreme",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives,sweet corn.",
      foodPrice:379,
      foodImg:"../../assets/img/image 2.jpg"
    },
    {
      id:3,
      foodName:"Panner Burger",
      foodDetails:"paneer.",
      foodPrice:139,
      foodImg:"../../assets/img/image 3.jpg"
    },
    {
      id:4,
      foodName:"Indulgence Brownie",
      foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted.",
      foodPrice:169,
      foodImg:"../../assets/img/image 4.jpg"
    },
    {
      id:5,
      foodName:"Veg Masala Roll In Naan",
      foodDetails:"A homely mix of mashed potato and veggies.",
      foodPrice:300,
      foodImg:"../../assets/img/image 5.jpg"
    },
    {
      id:6,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Oreo Ice Cream.",
      foodPrice:489,
      foodImg:"../../assets/img/image 6.jpg"
    }
  ]
}
