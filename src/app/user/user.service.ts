import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subscription} from "rxjs";
import {User} from "../types/user";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy{
  private user$$ = new BehaviorSubject< User | undefined>(undefined);
  public user$ = this.user$$.asObservable();

  user: User | undefined;


  get isLoggedIn(): boolean {
    return !!this.user;
  }

  subscription: Subscription;

  constructor(private http:HttpClient) {
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
    })
  }

  register (
    name: string,
    email: string,
    phone: string,
    password: string,
    rePassword: string) {
    return this.http
      .post<User>(`${environment.apiUrl}/auth/register`, {
        name,
        email,
        phone,
        password,
        rePassword
      })
  }





  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
