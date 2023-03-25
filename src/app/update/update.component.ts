import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartementService } from '../departement.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id:any;
  constructor(private d:DepartementService,private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.ac.snapshot.params['id'];
  }
  update(f:any){
this.d.updateDep(f,this.id).subscribe();
  }
}
