import { Component, OnInit } from '@angular/core';
import { DepartementService } from './../departement.service';
import { departement } from './../model/departement';

@Component({
  selector: 'app-listdep',
  templateUrl: './listdep.component.html',
  styleUrls: ['./listdep.component.css']
})
export class ListdepComponent implements OnInit {
list!:departement[];
nbtot=0;
maxsalaire=0;
  constructor(private d:DepartementService ) { }

  ngOnInit(): void {
this.d.listDep().subscribe(
  (result)=>{
this.list=result;
  }
)
  }
  cal(){
    for(let i=0;i<this.list.length;i++){
      this.nbtot= this.list[i].nb_employer+this.nbtot;
    }
  
  }
}
