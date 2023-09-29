import { ApiReturnValue } from "@/lib/types/returnValues";
import axios from "axios";
import { AccountError } from "../types/account";
import { BlackError } from "./blackError";
import { RequestAPIInterface } from "../interfaces/api";
import { getFetchRequest, postFetchRequest, sendDataRequest } from "../functions/apiRequest";

export abstract class  Account extends BlackError implements RequestAPIInterface {
  constructor(){
    super()
  }
  //fields
  protected _userName: string = "";
  protected _password: string = "";

  //get methods
  get userName(): string {
    return this._userName;
  }
  get password(): string {
    return this._password;
  }
 
  
  //set methods
  //set Username
  set userName(userName: string) {
  
      this._userName = userName;
  }
 
  //set Password
  set password(password: string) {
    if (!password) {
      const error:AccountError = {fieldName:"Password",errorMessage:"Password cannot be empty"}
      this.errors =  error
    } else {
      this._password = password;
      this._errors = this._errors.filter((err)=>err.fieldName !== 'Password')
    }
  }
validateUserName(userName:string){
  if(!userName){
    const error:AccountError = {fieldName:"userName",errorMessage:"Username cannot be empty"}
    this.errors =  error
  }else{    
    this._errors = this._errors.filter((err)=>err.fieldName !== 'userName')
  }
  
}
validatePassword(password:string){
  if(!password){
    const error:AccountError = {fieldName:"password",errorMessage:"Password cannot be empty"}
    this.errors =  error
  }else{
    this._errors = this._errors.filter((err)=>err.fieldName !== 'password')
  }
}

  //fetch data method
  async getFetchData(url: string, fetchParam: string) {
    return await getFetchRequest(url,fetchParam)
  }

  //fetch data method
  async postFetchData(url: string, body: any) {
    return await postFetchRequest(url,body)
  }
  //fetch data method
  async sendData(url: string, body: any) {
    
   return await sendDataRequest(url,body)
  }
}
