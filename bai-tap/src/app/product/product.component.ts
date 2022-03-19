import { Component, OnInit } from '@angular/core';
import { IProduct } from '../entities/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products: IProduct[] = [];
  newProduct = {
    id: 0,
    name: '',
    price: 0,
    desc: ''
  };
  product = {
    id: 0,
    name: '',
    price: 0,
    desc: ''
  }
  onSubmit(data: any) {
    if (this.product.id) {
      for (let index = 0; index < this.products.length; index++) {
        if (this.product.id === this.products[index].id) {
          if (!data.name) {
            data.name = this.product.name;
          };
          if (!data.price) {
            data.price = this.product.price;
          };
          if (!data.desc) {
            data.desc = this.product.desc;
          };
          this.products[index] = { ...data, id: this.product.id };
          this.product = {
            id: 0,
            name: '',
            price: 0,
            desc: ''
          };
        }
      }
    } else {
      const _id = Math.floor(Math.random() * 101) + 1;
      data.id = _id;
      data.price = Number(data.price);
      this.products.push(data);
      this.newProduct = {
        id: 0,
        name: '',
        price: 0,
        desc: ''
      }
    }

  };
  edit(data: any) {
    this.product = data;
  }
}
