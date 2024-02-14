import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: any = {};

  createUser(data: any) {
    this.user = data;
  }

  getUser() {
    return this.user;
  }
}
