import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css'],
})
export class EmpComponent implements OnInit {
  public employees: any[] = [];

  constructor(private empService: EmpService) {}

  ngOnInit(): void {
    this.getAllEmps();
  }
  getAllEmps() {
    this.employees = this.empService.getAllEmployees();
  }
  getMaleEmps() {
    this.employees = this.empService.getMaleEmployees();
  }
  getFemaleEmps() {
    this.employees = this.empService.getFemaleEmployees();
  }
}
