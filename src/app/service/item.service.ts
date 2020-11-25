import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../inventory-list/inventory-list.component';
import {API_URL} from '../app.constant'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getAllItems(){
    return this.http.get<Item[]>(`${API_URL}/items`);
  }

  deleteItemById(id){
    return this.http.delete(`${API_URL}/items/${id}`);
  }

  getItem(id){
    return this.http.get<Item>(`${API_URL}/items/${id}`);
  }
  addItem(item){
    return this.http.post<Item>(`${API_URL}/items`,item);
  }

}
