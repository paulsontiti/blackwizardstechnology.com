
import bcrypt from "bcrypt";
import User from "../models/user";
import { ApiReturnValue } from "../types/returnValues";
export const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  };
  
export async function ValidateUser(userName:string,password:string){
    const returnValue:ApiReturnValue = {
        value:null,error:'',ok:false
      }
    if (!userName || !password){
        returnValue.error = 'Invalid username/password'
        return returnValue
    }
    try{
        const user = await User.findOne({ userName });
  
        if (!user){
            returnValue.error = 'Invalid username/password'
            return returnValue
        }
    
          if (bcrypt.compareSync(password, user.password)){
            returnValue.error = ''
            returnValue.value = user
            returnValue.ok = true
            return returnValue
          } 
          returnValue.error = 'Invalid username/password'
          return returnValue
    }catch(err:any){
        returnValue.error = err.message
        return returnValue
    }
   
  }