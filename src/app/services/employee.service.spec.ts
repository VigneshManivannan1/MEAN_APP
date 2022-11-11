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
  it('function call getById', () => {
    expect(service.getById('')).toBeTruthy();
  });
  it('function call create', () => {
    expect(service.create([])).toBeTruthy();
  });
  it('function call update', () => {
    expect(service.update([])).toBeTruthy();
  });
  it('function call delete', () => {
    expect(service.delete('')).toBeTruthy();
  });
});
