import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { AddeditviewComponent } from './addeditview.component';

describe('AddeditviewComponent', () => {
  let component: AddeditviewComponent;
  let fixture: ComponentFixture<AddeditviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule ,RouterTestingModule , HttpClientTestingModule],
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
