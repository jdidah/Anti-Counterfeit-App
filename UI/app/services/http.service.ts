import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, public modalService: NgbModal ) { }

  // Edit changes
  putEditedRecords(data: any, url: string) {
    console.log('URL :', url);
    return this.http.put<any>(url, data);
  }

  // Fetch records before edit
  fetchRecords(dataId: any, url: string) {
    return this.http.get(url + '/' + dataId);
  }

  fetchRecordByURL(url: string) {
    return this.http.get(url);
  }

  deleteRecord(url: string) {
    return this.http.delete(url);
  }


  // Create new record
  postNewRecord(data: any, url: string) {
    return this.http.post(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred
      console.error('An error occurred:', error.error.message);
    } else {
      Swal.fire({
        text: error.message,
        type: 'error',
        timer: 2000
      });
      this.modalService.dismissAll();
      console.error(
        'Backend returned: ', error);
    }
    // return an observable with a user-facing error message
    return throwError(error);
  }
}
