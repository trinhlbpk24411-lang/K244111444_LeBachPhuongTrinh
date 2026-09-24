import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer'; // hoặc '../customer.service' tùy tên file service của bạn

@Component({
  selector: 'app-group-customers',
  templateUrl: './group-customers.html',
  styleUrls: ['./group-customers.css'],
  standalone: false // 
})
export class GroupCustomersComponent implements OnInit {
  public customerGroups: any[] = [];
  public errMessage: string = '';

  constructor(private _customerService: CustomerService) { }

  ngOnInit(): void {
    this._customerService.getCustomerGroups().subscribe({
      next: (data) => this.customerGroups = data,
      error: (err) => this.errMessage = err.message
    });
  }
}