import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersComponent } from './orders.component';
import { AppMaterialModule } from '../../app-material/app-material.module';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersComponent], imports: [AppMaterialModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render two mat-toolbar', async(() => {
    const fixture = TestBed.createComponent(OrdersComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('mat-toolbar')).not.toBe(null);
    expect(compiled.querySelectorAll('mat-toolbar')).toBeGreaterThanOrEqual(2);
  }));

  it(`should have as title 'Orders'`, async(() => {
    const fixture = TestBed.createComponent(OrdersComponent);
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('h1').textContent).toContain('Orders');
  }));
});
