
import dbConnect from '@/lib/types/db'
import { ApiReturnValue } from '@/lib/types/returnValues'
import { NextResponse,NextRequest} from 'next/server'
import ProfileModel from '@/lib/models/profile'
import { CourseType } from '@/lib/types/course'
import CourseModel from '@/lib/models/course'


const returnValue:ApiReturnValue = {
  value:null,error:'',ok:false
}
 
 
export async function GET(request:NextRequest){
  try{
    await dbConnect()
    const {searchParams} = new URL(request.url)
   const userId = searchParams.get('fetchParam')
   //fetch all courses
   const courses = await CourseModel.find()
    returnValue.value = courses
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
    returnValue.error = 'Invalid course details. Please provide the required values'
   return new NextResponse(JSON.stringify(returnValue),{status:201})
 
}else{
    const {name,noOfSeasons,noOfEpisodes} = body
    const course = await CourseModel.create({
        name,noOfSeasons,noOfEpisodes
    })
    
     if(!course){
      returnValue.error = 'An Error ocured. Please try again'
      return new NextResponse(JSON.stringify(returnValue),{status:201})
     }else{
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

function isBodyValid(body:CourseType){
return !body.name || !body.noOfEpisodes || !body.noOfSeasons
}