import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class TokenService {
    data=new BehaviorSubject<string>("Azqq");
    usertoken=this.data.asObservable();

    updateToken(newToken:string){
        this.data.next(newToken);
    }

    
}