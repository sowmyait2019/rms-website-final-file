
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

interface ApiResponse {
  message: string;
  data: any; // Change this to the actual type of your data
}

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private apiUrl = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) {}

  bookOrder(eventData: any): Observable<ApiResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<ApiResponse>(`${this.apiUrl}/book-order`, eventData, { headers});
  }
}
