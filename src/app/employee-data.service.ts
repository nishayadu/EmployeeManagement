import { Injectable } from '@angular/core';
import { ActivitylogService } from './activitylog.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor(private _activitylogservice:ActivitylogService) { }

  public employee:any[]=[];
  
/* To Get list of Employee in Employee List page */
    public GetEmployee(employee_id?:string):any[]
    {
        this.employee=[
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
        return this.employee;
    }
/* To add new Employee in Employee List */
    public AddEmp(obj:any):void{
     
        this.employee.push(obj);
        this.logactivity("New Employee  "+obj.ename+"  is Added with Id:"+obj.employee_id);
    
    }
/* To remove Employee from Employee List */
    public RemoveEmp(eid:number):void
    {
       
        var index:number=0;
         index = this.employee.findIndex(x => x.employee_id == eid);
        this.employee.splice(index,1);
        this.logactivity("Employee is Removed having Id:"+eid);
    }

    /* To edit employee details from Employee List */
    
    public EditEmp(eid:string,ename:string,department:string,designation:string,salary:number):void{
       
      var updateindex:number=0;
      updateindex = this.employee.findIndex(ar => ar.employee_id == eid);
      this.employee[updateindex].employee_id= eid;
      this.employee[updateindex].ename=ename;
      this.employee[updateindex].department=department;
      this.employee[updateindex].designation=designation;
      this.employee[updateindex].salary=salary;
      this.logactivity(ename+" 's Detail is Updated having Id:"+eid);
      
      //this.closeupdate.nativeElement.click();   
    }

    /* Function to get Activity Log from Activitylog service */
    public logactivity(message: string) 
    {
         this._activitylogservice.add(message);
    }

}
