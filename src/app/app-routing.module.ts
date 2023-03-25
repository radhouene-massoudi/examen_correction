import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddepartementComponent } from './adddepartement/adddepartement.component';
import { ListdepComponent } from './listdep/listdep.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {
    path:'add',component:AdddepartementComponent
  },
  { path:'update/:id',component:UpdateComponent},
  { path:'login',component:LoginComponent},
  { path:'list',component:ListdepComponent},
  { path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
