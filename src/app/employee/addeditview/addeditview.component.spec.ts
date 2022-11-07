import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditviewComponent } from './addeditview.component';

describe('AddeditviewComponent', () => {
  let component: AddeditviewComponent;
  let fixture: ComponentFixture<AddeditviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddeditviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
