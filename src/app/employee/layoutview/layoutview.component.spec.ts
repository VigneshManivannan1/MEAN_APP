import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutviewComponent } from './layoutview.component';

describe('LayoutviewComponent', () => {
  let component: LayoutviewComponent;
  let fixture: ComponentFixture<LayoutviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
