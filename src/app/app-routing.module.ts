import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Router } from '@angular/router';
import { InputDataComponent } from './components/common/input-data/input-data.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'small-turning', component: InputDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router){

    this.router.events.subscribe((event) => {
     

    
    })

  }
  
 }
