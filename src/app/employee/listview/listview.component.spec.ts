import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListviewComponent } from './listview.component';

describe('ListviewComponent', () => {
  let component: ListviewComponent;
  let fixture: ComponentFixture<ListviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ListviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
