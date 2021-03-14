
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Soap } from '../_models/prod';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

//fejléc a kérésekhez
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SoapService {

  constructor(private http: HttpClient) { }

//Lekérdezések API végpontról
  getAllSoap() {
    return this.http.get<any[]>(`${environment.apiUrl}/posts`, httpOptions);
  }
//Id alapjan
  getSoapById(SoapId: Number) {
    return this.http.get<any[]>(`${environment.apiUrl}/posts/${SoapId}`, httpOptions);
  }

//add soap
addSoap(soaps: Soap) {
    return this.http.post<Soap>(`${environment.apiUrl}/posts`, soaps, httpOptions).pipe(
      tap((soaps: Soap) => console.log(`inserted soap = ${JSON.stringify(soaps)}`)),
      catchError(error => error)
    );
  }
//update
  updateCar(soaps: Soap) {
    return this.http.put(`${environment.apiUrl}/posts/${soaps.id}`, soaps, httpOptions).pipe(
      tap(updateSoap => console.log(`updated soap = ${JSON.stringify(updateSoap)}`)),
      catchError(error => error)
    );
  }

    //Delete soap
    deleteSoap(SoapId: Number) {
      return this.http.delete<Soap>(`${environment.apiUrl}/posts/${SoapId}`, httpOptions).pipe(
        tap(_ => console.log(`Deleted soap with id = ${SoapId}`)),
        catchError(error => of(null))
      );
    }
}
