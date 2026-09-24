import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-service-product-image-event-detail',
  standalone: false,
  styleUrl: './service-product-image-event-detail.css',
  templateUrl: './service-product-image-event-detail.html',
})
export class ServiceProductImageEventDetail implements OnInit {
  selectedProduct: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private _fs: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this.selectedProduct = this._fs.getProductDetail(id);
      }
    });
  }

  goBack() {
    this.router.navigate(['service-product-image-event']);
  }
}