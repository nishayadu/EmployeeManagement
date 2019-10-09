import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';
import { Injectable } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { Router } from '@angular/router';
import { ActivitylogService } from '../activitylog.service';
import { FormGroup , NgForm} from '@angular/forms';
import { ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  /* Variable Initialization */
  public emp_array: any[] = [];
  public employee_id: string = "";
  public ename: string = "";
  public designation: string = "";
  public department: string = "";
  public salary: number = 0;
  public showList = false;
  color: string;
  public getemployeedetail: any[] = [];
  public employee: any[];
  


  /* Constructor to Inject Service */
   
  constructor(private _empobj: EmployeeDataService, private orderPipe: OrderPipe, private router: Router, private _activitylog: ActivitylogService) {
    this.sortedCollection = orderPipe.transform(this.employee, 'ename');
    this.employee = [

      { employee_id: "K001", ename: 'Ryan', designation: 'Software Engineer', department: 'Products', salary: 40000 },
      { employee_id: "K002", ename: 'Rahul', designation: 'Sr.Software Engineer', department: 'Professional Service', salary: 50000 },
      { employee_id: "K003", ename: 'Anand', designation: 'Software Engineer', department: 'Sales', salary: 45000 },
      { employee_id: "K004", ename: 'Harry', designation: 'Sr.Software Engineer', department: 'Support', salary: 30000 },
      { employee_id: "K005", ename: 'Manisha', designation: 'Pr.Software Engineer', department: 'Sales', salary: 70000 },
      { employee_id: "K006", ename: 'Neha', designation: 'Software Engineer', department: 'Professional', salary: 80000 },
      { employee_id: "K007", ename: 'Ankita', designation: 'Sr.Software Engineer', department: 'Sales', salary: 90000 },
      { employee_id: "K008", ename: 'Harsh', designation: 'Software Engineer', department: 'Support', salary: 67000 },
      { employee_id: "K009", ename: 'Radhika', designation: 'Software Engineer', department: 'Professional', salary: 87000 },
      { employee_id: "K010", ename: 'Jiya', designation: 'Software Engineer', department: 'Support', salary: 77000 },
    ];
   
  }

  /* Employee Department Data  */

  public dept: any[] = [
    { id: 1, name: 'Products' },
    { id: 2, name: 'Professional Service' },
    { id: 3, name: 'Sales' },
    { id: 4, name: 'Support' },

  ];
  ngOnInit() {
  }


  /* Autogenerated Id for Employees */

  public randId: number;
  public randomstring: string;
  public randomIntFromInterval(min, max) {
    this.formadd.reset();
    this.randId = Math.floor(Math.random() * (max - min + 1) + min);
    this.randomstring = 'K' + this.randId;

  }


  /* Get Employee Records from Service */
  public getemp() {
    this.showList = true;
    this.emp_array = this._empobj.GetEmployee();
  }

  /* Add new Employee Record */
  @ViewChild('closeadd') closeadd: ElementRef;
  public addemp(): void {
    var emp_obj: any = [];
    emp_obj.employee_id = this.randomstring;
    emp_obj.ename = this.ename;
    emp_obj.designation = this.designation;
    emp_obj.department = this.department;
    emp_obj.salary = this.salary;
    this._empobj.AddEmp(emp_obj);
    this.closeadd.nativeElement.hide()
    this.clearfields();
  }

  /* Remove Employee Data from the List */
  public removeemp(employee_id: number): void {
    this._empobj.RemoveEmp(employee_id);

  }




  /* Sort Table on the Bases of Employee Name */
  sortedCollection: any[];
  order: string = 'ename';
  reverse: boolean = false;

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  /*Get Employee record to delete*/
  public getrecord(employee) {
    this.getemployeedetail = employee;
  }

  /* To select employee details from Editing */

  public selectItem(n: string): void {
    let index: number = 0;
    index = this.employee.findIndex(x => x.employee_id == n);
    let obj = this.employee[index];
    this.employee_id = obj.employee_id;
    this.ename = obj.ename;
    this.department = obj.department;
    this.designation = obj.designation;
    this.salary = obj.salary;
  }

  
/* To edit employee details from Employee List */
 @ViewChild('closeupdate') closeupdate: ElementRef;
 @ViewChild('formadd') formadd : NgForm;
  public updateitem()
  {  
    this._empobj.EditEmp(this.employee_id,this.ename,this.department,this.designation,this.salary);
    //this.formadd.reset();
  }

  /* Clear the fields after each Operation */
  public clearfields(): void {
    this.employee_id = "";
    this.ename = "";
    this.designation = "";
    this.department = "";
    this.salary = 0;
    
  }

 
  
}
