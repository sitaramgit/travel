import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor() { }

  public serverUrl = "http://173.255.216.217/travelcrm/angularportal/travel.php";
}
