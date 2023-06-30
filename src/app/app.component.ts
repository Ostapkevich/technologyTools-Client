import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { MenuModule } from './modules/menu/menu.module';
import { MaterialsService } from './services/materials.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MaterialsService]
})
export class AppComponent implements AfterViewInit{
  menu: MenuModule=new MenuModule();
  constructor(private materialsSerice:MaterialsService){}
 

  ngAfterViewInit(): void {
    document.getElementById('appTemplete')?.addEventListener('click', this.menu);
    document.getElementById('top-menu')?.addEventListener('mouseover', this.menu);
    this.materialsSerice.getMaterial().subscribe({next:(data:any) =>{console.log('zagruzka');document.getElementById('h1')!.innerHTML=data}})
  }
 


}


















