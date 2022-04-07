import { Pipe, PipeTransform } from '@angular/core';
import {catchError, isObservable, map, Observable, of, startWith} from "rxjs";

interface HttpState<T> {
  loading: boolean,
  value?: T,
  error?: any
}

@Pipe({
  name: 'loading'
})
export class LoadingPipe implements PipeTransform {

  transform<T>(value: Observable<T>): Observable<HttpState<T>> {
    return value.pipe(
        map((value: T) => ({ loading: false, value })),
        startWith({ loading: true }),
        catchError(error => of({ loading: false, error }))
      );
  }

}
