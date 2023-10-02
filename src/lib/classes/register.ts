
import { ReturnValue } from "@/lib/types/returnValues";
import { Account } from "./account";
import { AccountError } from "../types/account";
import { Option } from "../types/forms";

export class Register extends Account {
  constructor() {
    super();
  }

  private _confirmPassword: string = "";
  private _referralCode: string = "";
  private _referralOption: Option[] = [];

  //set Confirm Password
  set confirmPassword(confirmPassword: string) {
   
      this._confirmPassword = confirmPassword;
  }
  //check if Password and confirm password 
 
  doesPasswordsMatch(confirmPassword: string,password:string) {
    if(!confirmPassword || confirmPassword !== password){
      const error:AccountError = {fieldName:"confirmPassword",errorMessage:"Confirm Password cannot be empty and must match your Password"}
      this.errors =  error
    }else{
      this._errors = this._errors.filter((err)=>err.fieldName !== 'confirmPassword')
    }
  }
  //set refferral code
  set referralCode(referralCode: string) {
    this._referralCode = referralCode;
  }

  get confirmPassword(): string {
    return this._confirmPassword;
  }
  get referralCode(): string {
    return this._referralCode;
  }
  get referralOptions(): Option[] {
    const options: Option[] = [
      { label: "Facebook" },
      { label: "X(Twitter)" },
      { label: "Youtube" },
      { label: "Instagram" },
    ];
    let userNames
    (
      async()=>{
        const response = await Account.getUernames()
        if(response && response.ok && Array.isArray(response.value) && response.value.length){
          response.value.map((value:{userName:string})=>{
            options.push({label:value.userName})
          })
        }
      }
    )()
    return options;
  }
  
  //abstract methods implementation
  isError(): boolean {
   if(!this._userName){
      const error:AccountError = {fieldName:"userName",errorMessage:"Username cannot be empty"}
      this.errors =  error
      return true
    }
    if(!this._password){
      const error:AccountError = {fieldName:"password",errorMessage:"Password cannot be empty"}
      this.errors =  error
      return true
    }
    if(!this._confirmPassword || this._confirmPassword !== this._password){
      const error:AccountError = {fieldName:"confirmPassword",errorMessage:"Confirm Password cannot be empty and must match with Password"}
      this.errors =  error
      return true
    }
    if(this._confirmPassword !== this._password){
      const error:AccountError = {fieldName:"confirmPassword",errorMessage:"Confirm Password must match with Password"}
      this.errors =  error
      return true
    }
    this._errors = []
    return false
  }
}
