import { getFetchRequest, postFetchRequest, sendDataRequest } from "../functions/apiRequest"
import { RequestAPIInterface } from "../interfaces/api"
import { AccountError } from "../types/account"
import { Sponsor } from "../types/forms"
import { BlackError } from "./blackError"

export class Profile extends BlackError implements RequestAPIInterface{
constructor(){
    super()
}
    private _firstName:string = ''
    private _lastName:string = ''
    private _phone:string = ''
    private _city:string = ''
    private _state:string = ''
    private _address:string = ''
    private _bio:string|undefined= ''
    private _dob:Date | null = null
    private _sponsorsDetails:Sponsor | null = null
    private static  _apiUrl = `${process.env.BWT_URL}api/profile`

    //get methods
    get url():string{
      return Profile._apiUrl
    }
    get firstName():string{
        return this._firstName
    }
    get bio():string|undefined{
      return this._bio
  }
    get lastName():string{
        return this._lastName
    }
    get phone():string{
        return this._phone
    }
    get city():string{
        return this._city
    }
    get state():string{
        return this._state
    }
    get address():string{
        return this._address
    }
    get dob():Date | null{
        return this._dob
    }
    get sponsorsDetails():Sponsor | null{
        return this._sponsorsDetails
    }

    private isSponsorDetailsvalid = ()=>{
            switch(true){
                case !this._sponsorsDetails?.firstName:{
                    return false
                }
                case !this._sponsorsDetails?.lastName:{
                    return false
                }
                case !this._sponsorsDetails?.email:{
                    return false
                }
                case !this._sponsorsDetails?.phone:{
                    return false
                }
                default:{
                    return true
                }
            }

        }
    
    //set methods
    set firstName(firstName:string){
        if(!firstName){
            const error:AccountError = {fieldName:"firstName",errorMessage:"First Name cannot be empty"}
            this.errors =  error
          }else{    
            this._firstName = firstName
            this._errors = this._errors.filter((err)=>err.fieldName !== 'firstName')
          }
        
    }
    set bio(bio:string | undefined){
       
          this._bio = bio
      
  }
    set lastName(lastName:string){
        if(!lastName){
            const error:AccountError = {fieldName:"lastName",errorMessage:"Last Name cannot be empty"}
            this.errors =  error
          }else{    
            this._lastName = lastName
            this._errors = this._errors.filter((err)=>err.fieldName !== 'lastName')
          }
        
    }
    set phone(phone:string){
        if(!phone){
            const error:AccountError = {fieldName:"phone",errorMessage:"Phone cannot be empty"}
            this.errors =  error
          }else if(phone.length !== 11){
            const error:AccountError = {fieldName:"phone",errorMessage:"Phone must be 11 digits"}
            this.errors =  error
          }else{    
            this._phone = phone
            this._errors = this._errors.filter((err)=>err.fieldName !== 'phone')
          }
        
    }
    set city(city:string){
        if(!city){
            const error:AccountError = {fieldName:"city",errorMessage:"City cannot be empty"}
            this.errors =  error
          }else{
            this._city = city
            this._errors = this._errors.filter((err)=>err.fieldName !== 'city')
          }
        
    }
    set state(state:string){
        if(!state){
            const error:AccountError = {fieldName:"state",errorMessage:"State cannot be empty"}
            this.errors =  error
          }else{    
            this._state = state
            this._errors = this._errors.filter((err)=>err.fieldName !== 'state')
          }
        
    }
    set address(address:string){
        if(!address){
            const error:AccountError = {fieldName:"address",errorMessage:"Address cannot be empty"}
            this.errors =  error
          }else{    
            this._address = address
            this._errors = this._errors.filter((err)=>err.fieldName !== 'address')
          }
        
    }
    set dob(dob:Date | null){
        if(!dob){
            const error:AccountError = {fieldName:"dob",errorMessage:"Date Of birth cannot be empty"}
            this.errors =  error
          }else{    
            this._dob = dob
            this._errors = this._errors.filter((err)=>err.fieldName !== 'dob')
          }
        
    }
    set sponsorsDetails(sponsorsDetails:Sponsor){
           
            this._sponsorsDetails = sponsorsDetails
            this._errors = this._errors.filter((err)=>err.fieldName !== 'sponsorsDetails')
        
    }

    //abstract methods implementation
  isError(): boolean {
    if(!this._firstName){
       const error:AccountError = {fieldName:"firstName",errorMessage:"First name cannot be empty"}
       this.errors =  error
       return true
     }
     if(!this._lastName){
       const error:AccountError = {fieldName:"lastName",errorMessage:"Last Name cannot be empty"}
       this.errors =  error
       return true
     }
     if(!this._phone){
        const error:AccountError = {fieldName:"phone",errorMessage:"Phone cannot be empty"}
        this.errors =  error
        return true
      }
      if(!this._city){
        const error:AccountError = {fieldName:"city",errorMessage:"City cannot be empty"}
        this.errors =  error
        return true
      }
      if(!this._state){
        const error:AccountError = {fieldName:"state",errorMessage:"State cannot be empty"}
        this.errors =  error
        return true
      }
      
      if(!this._address){
        const error:AccountError = {fieldName:"address",errorMessage:"Address cannot be empty"}
        this.errors =  error
        return true
      }
      if(!this._dob){
        const error:AccountError = {fieldName:"dob",errorMessage:"date of birth cannot be empty"}
        this.errors =  error
        return true
      }
      if(!this._sponsorsDetails){
        const error:AccountError = {fieldName:"sponsorsDetails",errorMessage:"Sponsor's Deatils is required"}
        this.errors =  error
        return true
      }
      if(!this.isSponsorDetailsvalid()){
        const error:AccountError = {fieldName:"sponsorsDetails",errorMessage:"Sponsor's Deatils is required"}
        this.errors =  error
        return true
      }
      
     this._errors = []
     return false
   }

   //api methods
   async getFetchData(fetchParam: string) {
    
    return await getFetchRequest(Profile._apiUrl,fetchParam)
  }

  //fetch data method
  async postFetchData( body: any) {
    return await postFetchRequest(Profile._apiUrl,body)
  }
  //fetch data method
  async sendData(body: any) {
    
   return await sendDataRequest(Profile._apiUrl,body)
  }

}