import { Component } from '@angular/core';
import { CatalogService } from '../services/catalog-service';
@Component({
  selector: 'app-service-catalog-image-event',
  standalone: false,
  styleUrl: './service-catalog-image-event.css',
  templateUrl: './service-catalog-image-event.html',
})
export class ServiceCatalogImageEvent {
  categories: any[] = [];

  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.categories = this.catalogService.getCategories();
  }
}
