import { Injectable } from '@angular/core';
import {Reception} from "../model/reception.model";
import {HttpClient} from "@angular/common/http";
import {Fournisseur} from "../model/fournisseur.model";
import {Observable} from "rxjs";
import {AppelAchat} from "../model/appel-achat";

@Injectable({
  providedIn: 'root'
})
export class ReceptionService {

  private _reception: Reception;
  private _receptions: Array<Reception>;

  private _appelAchat: AppelAchat;
  get appelAchat(): AppelAchat {
    return this._appelAchat;
  }

  set appelAchat(value: AppelAchat) {
    this._appelAchat = value;
  }

  private _url = "http://localhost:8080/gestionBudget/v1/reception/";
  constructor(private _http:HttpClient) { }

  public save(reception: Reception):Observable<number>{
    return this.http.post<number>(this.url,reception);
  }

  public findAll():Observable<Array<Reception>>{
    return this.http.get<Array<Reception>>(this.url);
  }

  public deleteByRef(ref: string): Observable<number> {
    return this.http.delete<number>(this.url+'ref/'+ref);
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get reception(): Reception {
    if(this._reception == null){
      this._reception = new Reception();
    }
    return this._reception;
  }

  set reception(value: Reception) {
    this._reception = value;
  }

  get receptions(): Array<Reception> {
    if(this._receptions == null ){
      this._receptions = new Array<Reception>();
    }
    return this._receptions;
  }

  set receptions(value: Array<Reception>) {
    this._receptions = value;
  }

  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }
}
