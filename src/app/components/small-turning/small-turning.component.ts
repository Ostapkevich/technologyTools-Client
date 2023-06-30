import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
 import { MaterialsService } from 'src/app/services/materials.service';
@Component({
  selector: 'app-small-turning',
  templateUrl: './small-turning.component.html',
  styleUrls: ['./small-turning.component.css'],
  providers:[MaterialsService]
})
export class SmallTurningComponent implements OnInit {
  constructor(private httpMaterial:MaterialsService){}
  ngOnInit(): void {
    console.log('111')
    this.httpMaterial.getMaterial().subscribe({next:(data:any) => console.log('fetch'+data)});
  }

}
