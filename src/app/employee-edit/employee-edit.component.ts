import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { EmployeeDataService } from '../employee-data.service';
import { ActivitylogService } from '../activitylog.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css'],
  
})
export class EmployeeEditComponent implements OnInit {
  
  public editemployee_id:string;
  public emp_array:any[]=[];
    constructor(
    private route: ActivatedRoute,
    private router: Router, private _empobj:EmployeeDataService, private _activitylog:ActivitylogService,private location:Location) {
     
    }

  ngOnInit() {
    
    this.route.paramMap.subscribe((params: ParamMap)=>{

      let id =params.get('id');
      this.editemployee_id=id;
      this.getemployeedetails(this.editemployee_id);
    })
  }

  /* Display Employee Records*/ 

  public employee:any[]=[

    {employee_id:'K001',ename:'Ryan',designation:'Software Engineer',department:'Products',salary:40000},
    {employee_id:'K002',ename:'Rahul',designation:'Sr.Software Engineer',department:'Professional Service',salary:50000},
    {employee_id:'K003',ename:'Anand',designation:'Software Engineer',department:'Sales',salary:45000},
    {employee_id:'K004',ename:'Harry',designation:'Sr.Software Engineer',department:'Support',salary:30000},
    {employee_id:'K005',ename:'Manisha',designation:'Pr.Software Engineer',department:'Sales',salary:70000},
    {employee_id:'K006',ename:'Neha',designation:'Software Engineer',department:'Professional',salary:80000},
    {employee_id:'K007',ename:'Ankita',designation:'Sr.Software Engineer',department:'Sales',salary:90000},
    {employee_id:'K008',ename:'Harsh',designation:'Software Engineer',department:'Support',salary:67000},
    {employee_id:'K009',ename:'Radhika',designation:'Software Engineer',department:'Professional',salary:87000},
    {employee_id:'K010',ename:'Jiya',designation:'Software Engineer',department:'Support',salary:77000}
  ];

  

  /* Employee Department Data  */

  public dept:any[]=[
    {id:1,name:'Products'},
    {id:2,name:'Professional Service'},
    {id:3,name:'Sales'},
    {id:4,name:'Support'},

  ];

  /*  To display Employee Detail to edit*/
  public getemployeedetails(editemployee_id)
  {
   
    var index:number=0;
    index = this.employee.findIndex(x => x.employee_id == editemployee_id);
    this.emp_array= this.employee[index];
     
  }

  /*To update Employee Detail */
  public updateemp_array:any[]=[];
  public employee_id:string='';
  public ename:string='';
  public designation:string='';
  public department:string='';
  public salary:number;
  

  public updateemp(i):void{

    this.employee_id=i;
    this.ename=this.ename;
    this.department=this.department;
    this.designation=this.designation;
    this.salary= this.salary;
    //this._empobj.EditEmp(this.employee_id);
    
    this.clearfields();
  }

  /* Clear the fields after each Operation */
  public clearfields():void{
    this.employee_id='';
    this.ename="";
    this.designation="";
    this.department="";
    this.salary=0;
  }
/* Function to go back to List Page */
  goBack(): void 
  {
    this.location.back();
  }
  
}

