import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupCustomersComponent } from './group-customers'; // Sửa tên class và đường dẫn

describe('GroupCustomersComponent', () => {
  let component: GroupCustomersComponent;
  let fixture: ComponentFixture<GroupCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupCustomersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});