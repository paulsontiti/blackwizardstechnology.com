
import dbConnect from '@/lib/types/db'
import { ApiReturnValue } from '@/lib/types/returnValues'
import { NextResponse,NextRequest} from 'next/server'
import ProfileModel from '@/lib/models/profile'
import { ProfileType } from '@/lib/types/forms'


const returnValue:ApiReturnValue = {
  value:null,error:'',ok:false
}
 
 
export async function GET(request:NextRequest){
  try{
    await dbConnect()
    const {searchParams} = new URL(request.url)
   const userId = searchParams.get('fetchParam')
   //fetch profile
   const profile = await ProfileModel.findOne({userId})
    returnValue.value = profile
    returnValue.ok = true
    return new NextResponse(JSON.stringify(returnValue),{status:201})
  }catch(err:any){
      returnValue.error = err.message
    return new NextResponse(JSON.stringify(returnValue),{status:201})
  }
  }

export async function POST(request:NextRequest
) {
  
 try{
  await dbConnect()
  //get user details from the request body
  const body = await request.json()

if(isBodyValid(body)){
    returnValue.error = 'Invalid profile details. Please provide the required values'
   return new NextResponse(JSON.stringify(returnValue),{status:201})
 
}else{
    const {firstName,lastName,phone,state,address,city,sponsorsDetails,dob,userId,bio} = body
    const profile = await ProfileModel.create({
        firstName,lastName,dob,phone,city,state,address,sponsorsDetails,userId,bio
    })
    
     if(!profile){
      returnValue.error = 'An Error ocured. Please try again'
      return new NextResponse(JSON.stringify(returnValue),{status:201})
     }else{
      
       returnValue.value = profile 
       returnValue.ok = true
        return new NextResponse(JSON.stringify(returnValue),{status:201})
     }
}
 }catch(err:any){
    console.log(err)
  returnValue.error = err.message
  return new NextResponse(JSON.stringify(returnValue),{status:500})
 }
}

function isBodyValid(body:ProfileType){
const {firstName,lastName,phone,state,address,city,sponsorsDetails,dob,userId} = body
return !userId || !firstName || !lastName || !phone  || phone.length !== 11 || !state || !city || !address || dob === null
|| !sponsorsDetails.email || !sponsorsDetails.firstName || !sponsorsDetails.lastName || !sponsorsDetails.phone
}