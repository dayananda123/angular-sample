import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  writeLog(logResult) {
    console.log(logResult);
  }
}
