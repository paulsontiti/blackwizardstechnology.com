import { AccountError } from "../types/account";

export abstract class BlackError{

    protected _errors:AccountError[] =  [];
    protected _isError:boolean = false

    get errors(): AccountError[]{
        return this._errors;
      }
    abstract isError():boolean

     //set Errors
  set errors(error: AccountError) {
    this._errors.push(error);
  }
  clearError(){
    this._errors = []
  }
}