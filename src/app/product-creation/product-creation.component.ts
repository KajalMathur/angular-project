import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { CurrencyUnit } from '../model/CurrencyUnit'
import { ProductService } from '../service/product/product.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentMode } from '../model/PaymentMode';
import { User } from '../model/User';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})
export class ProductCreationComponent implements OnInit {

  addProductForm: FormGroup;
  sellerDetails: User;
  COD: false;
  CREDIT: false;
  DEBIT: false;
  PAYTM: false;
  paymentModeArr: PaymentMode[] = [];
  selectedValue: String;
  unit: CurrencyUnit[] = [
    { value: 'INR', display: 'INR' },
    { value: 'CAD', display: 'CAD' },
    { value: 'USD', display: 'USD' }
  ];

  constructor(private productService: ProductService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.addProductForm = this.formBuilder.group({
      name: [null, Validators.required],
      image: [null, Validators.required],
      price: [null, Validators.required],
      unit: [null, Validators.required],
      description: [null, Validators.required],
      paymentmode: [null]
    });
  }

  public createProduct() {
    if (!this.addProductForm.valid)
      return;
    this.addPaymentMode();
    this.sellerDetails = new User(sessionStorage.getItem("userId"), sessionStorage.getItem("userName"));
    console.log("SellerDetails = " + this.sellerDetails);
    this.productService.createProduct(new Product(this.addProductForm.value.name, this.addProductForm.value.image,
      this.addProductForm.value.price, this.addProductForm.value.unit, this.addProductForm.value.description,
      this.addProductForm.value.status, this.paymentModeArr, this.sellerDetails))
      .then((data) => {
        console.log("Response from create Product = " + JSON.stringify(data));
        this.router.navigate(['/dashboard']);
      }, (error) => {
        console.log("Error = " + JSON.stringify(error));
      });
  }

  public addPaymentMode(): PaymentMode[] {
    if (this.COD)
      this.paymentModeArr.push(PaymentMode.COD);
    if (this.CREDIT)
      this.paymentModeArr.push(PaymentMode.CREDIT);
    if (this.DEBIT)
      this.paymentModeArr.push(PaymentMode.DEBIT);
    if (this.PAYTM)
      this.paymentModeArr.push(PaymentMode.PAYTM);
    return this.paymentModeArr;
  }
}
