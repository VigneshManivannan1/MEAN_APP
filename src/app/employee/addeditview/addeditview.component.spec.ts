import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';

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
  it('function call f', () => {
    expect(component.f).toBeTruthy();
  });
  it('function call onsubmit', () => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });
  it('function call onsubmit  -add mode', () => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });
});
