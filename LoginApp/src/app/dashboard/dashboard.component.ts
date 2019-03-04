import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    
  quote = "Loading your personal quote"
  email = "Getting your email..."
  products: Product[];
  constructor(private user: UserService,private router: Router) {
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99)
      ];
   }

  ngOnInit() {
    this.user.getData().subscribe(data => {
      if(data.status){
      this.quote = data.quote
      this.email = data.email
      }else{
        this.router.navigate(['logout'])
      }
    })
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }

  updateQuote(event) {
    const value = event.target.parentNode.querySelector('#myQuote').value
    this.user.updateQuote(value).subscribe(data => {
      if(data.success) {
        alert("Your quote was updated")
      } else {
        alert("Some problem")
      }
    })
  }

}
