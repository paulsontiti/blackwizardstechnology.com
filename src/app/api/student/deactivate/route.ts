
import dbConnect from '@/lib/types/db'
import { ApiReturnValue } from '@/lib/types/returnValues'
import { NextResponse,NextRequest} from 'next/server'
import User from '@/lib/models/user'


const returnValue:ApiReturnValue = {
  value:null,error:'',ok:false
}
 
 
// export async function GET(request:NextRequest){
//   try{
//     await dbConnect()
//     const {searchParams} = new URL(request.url)
//    const userId = searchParams.get('fetchParam')
//    //fetch profile
//    const profile = await StudentCourseDetailsdeModel.findOne({userId})
//     returnValue.value = profile
//     returnValue.ok = true
//     return new NextResponse(JSON.stringify(returnValue),{status:201})
//   }catch(err:any){
//       returnValue.error = err.message
//     return new NextResponse(JSON.stringify(returnValue),{status:201})
//   }
//   }

export async function POST(request:NextRequest
) {
  
 try{
  await dbConnect()
  //get user details from the request body
  const body:{_id:string} = await request.json()

if(!body._id){
    returnValue.error = 'Invalid request. Please provide the required values'
   return new NextResponse(JSON.stringify(returnValue),{status:201})
 
}else{
   
    const {_id} = body
   //update student
   const student = await User.findOneAndUpdate({_id},{active:false},{new:true})
   if(student){
   
    returnValue.value = student
    returnValue.ok = true
    return new NextResponse(JSON.stringify(returnValue),{status:201})
   }else{
    returnValue.error = 'Update was not successful'
    return new NextResponse(JSON.stringify(returnValue),{status:201})
   }
}
 }catch(err:any){
    console.log(err)
  returnValue.error = err.message
  return new NextResponse(JSON.stringify(returnValue),{status:500})
 }
}