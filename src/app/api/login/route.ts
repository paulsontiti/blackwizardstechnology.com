import User from '@/lib/models/user'
import dbConnect from '@/lib/types/db'
import { ApiReturnValue } from '@/lib/types/returnValues'
import { NextResponse,NextRequest} from 'next/server'
import { doesPasswordMatch, doesUserNameExist, isUserDetailsValid } from '../util-func'
 
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
  const {userName,password} = body
  //check if username exist
  const userNameExist = await doesUserNameExist(userName)
   if(userNameExist){
    //check if password match
    const {user,ok} = await doesPasswordMatch(userName,password)
    if(ok){
        returnValue.value = user
        returnValue.ok = true
        return new NextResponse(JSON.stringify(returnValue),{status:201})
    }else{
        returnValue.error = 'Invalid username/password'
      return new NextResponse(JSON.stringify(returnValue),{status:201})
    }

   }else{
    returnValue.error = 'Invalid username/password'
      return new NextResponse(JSON.stringify(returnValue),{status:201})
   }
}else{
  returnValue.error = 'Invalid username/password'
   return new NextResponse(JSON.stringify(returnValue),{status:201})
}
 }catch(err:any){
  returnValue.error = err.message
  return new NextResponse(JSON.stringify(returnValue),{status:201})
 }
}