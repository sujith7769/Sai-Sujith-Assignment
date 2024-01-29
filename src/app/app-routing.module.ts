import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamplepageComponent } from './samplepage/samplepage.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'login',component:LoginComponent,pathMatch:'full'},
  { path:'home',component:SamplepageComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
