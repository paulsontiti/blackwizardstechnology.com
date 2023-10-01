import User from '@/lib/models/user'
import dbConnect from '@/lib/types/db'
import { ApiReturnValue } from '@/lib/types/returnValues'
import { NextResponse,NextRequest} from 'next/server'
import { doesUserNameExist, isUserDetailsValid } from '../util-func'
import { hashPassword } from '@/lib/functions/hashPassword'
 
type ResponseData = {
  message: string
}
 
export async function POST(request:NextRequest
) {
  const returnValue:ApiReturnValue = {
    value:null,error:'',ok:false
  }
 try{
  await dbConnect()
  //get user details from the request body
  const body = await request.json()
 
if(isUserDetailsValid(body)){
  const {userName,password,referralCode} = body
  //check if username exist
  const userNameExist = await doesUserNameExist(userName)
   if(userNameExist){
    returnValue.error = 'Username already exist,please another username'
    return new NextResponse(JSON.stringify(returnValue),{status:201})
   }else{
    //hass password
    const hashedPassword = await hashPassword(password)
     //add to database
     const user = await User.create({userName,password:hashedPassword,referralCode})
     returnValue.value = user 
     returnValue.ok = true
      return new NextResponse(JSON.stringify(returnValue),{status:201})
   }
}else{
  returnValue.error = 'Invalid registration details. Please provide the required values'
   return new NextResponse(JSON.stringify(returnValue),{status:201})
}
 }catch(err:any){
  returnValue.error = err.message
  return new NextResponse(JSON.stringify(returnValue),{status:201})
 }
}

