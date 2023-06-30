import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MaterialsService {

  constructor(private http:HttpClient) { }
  getMaterial(){
    return this.http.get('http://localhost:3000/small-turning/materials');
  }
}
