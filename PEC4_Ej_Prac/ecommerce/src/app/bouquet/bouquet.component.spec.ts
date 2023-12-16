import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouquetComponent } from './bouquet.component';

describe('BouquetComponent', () => {
  let component: BouquetComponent;
  let fixture: ComponentFixture<BouquetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BouquetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BouquetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
