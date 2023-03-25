import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdddepartementComponent } from './adddepartement/adddepartement.component';
import { ListdepComponent } from './listdep/listdep.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    AdddepartementComponent,
    ListdepComponent,
    NotfoundComponent,
    LoginComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
