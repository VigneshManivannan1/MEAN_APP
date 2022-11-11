import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { employeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: employeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(employeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
