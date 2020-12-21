import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class DataTransferService {
  public notify$ = new Subject<any>();
  public notifyObservable$ = this.notify$.asObservable();

  public notifyHeaderCheckbox(data: number) {
    this.notify$.next(data);
  }
}
