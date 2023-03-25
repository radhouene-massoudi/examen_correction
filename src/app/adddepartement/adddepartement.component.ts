import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartementService } from '../departement.service';

@Component({
  selector: 'app-adddepartement',
  templateUrl: './adddepartement.component.html',
  styleUrls: ['./adddepartement.component.css']
})
export class AdddepartementComponent implements OnInit {

  constructor(private s:DepartementService,private router:Router) { }

  ngOnInit(): void {
  }
addDep(d:any){
  this.s.addDep(d).subscribe(
    ()=>{
this.router.navigate(['list'])
}
  )
}
}
