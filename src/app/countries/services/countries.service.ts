import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private API_URL: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCountryByAlphacode(code: string): Observable<Country | null> {
    const url: string = `${this.API_URL}/alpha/${code}`;

    return this.http.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }

  searchCapital(term: string): Observable<Country[]> {
    const url: string = `${this.API_URL}/capital/${term}`;

    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  searchCountry(term: string): Observable<Country[]> {
    const url: string = `${this.API_URL}/name/${term}`;
    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }
  searchRegion(term: string): Observable<Country[]> {
    const url: string = `${this.API_URL}/region/${term}`;
    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }
}
