import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from "./model/Book";

@Injectable({
  providedIn: "root"
})
export class ProductListService{

  private API_URL = "https://localhost:5001/api/bookstore";

  httpOptions = {
    Headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {

  }

  getBooks(){
    return this.httpClient.get<Book[]>(this.API_URL);
  }

}
