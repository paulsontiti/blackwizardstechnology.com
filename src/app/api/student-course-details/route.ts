
import dbConnect from '@/lib/types/db'
import { ApiReturnValue } from '@/lib/types/returnValues'
import { NextResponse,NextRequest} from 'next/server'
import CourseModel from '@/lib/models/course'
import StudentCourseDetailsdeModel from '@/lib/models/studentCourseDetails'


const returnValue:ApiReturnValue = {
  value:null,error:'',ok:false
}
 
 
export async function GET(request:NextRequest){
  try{
    await dbConnect()
    const {searchParams} = new URL(request.url)
   const studentId = searchParams.get('fetchParam')
   //fetch course details
   const courseDetails = await StudentCourseDetailsdeModel.findOne({studentId})
    returnValue.value = courseDetails
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
    returnValue.error = 'Invalid request. Please provide the required values'
   return new NextResponse(JSON.stringify(returnValue),{status:201})
 
}else{
    const {courseId,studentId,episode} = body
  

   //check if student course details exist
   const courseDetails = await StudentCourseDetailsdeModel.findOne({studentId})
   if(courseDetails){

    returnValue.value = courseDetails
    returnValue.ok = true
    return new NextResponse(JSON.stringify(returnValue),{status:201})
   }else{
    const coursesTaken = [
        {
            courseId:courseId,
            episodes:[
                episode
            ]
        }
    ]
    const details = await StudentCourseDetailsdeModel.create({
        studentId,coursesTaken
    })
    returnValue.value = details
    returnValue.ok = true
    return new NextResponse(JSON.stringify(returnValue),{status:201})
   }
      
    // const {firstName,lastName,phone,state,address,city,sponsorsDetails,dob,userId,bio} = body
    // const profile = await ProfileModel.create({
    //     firstName,lastName,dob,phone,city,state,address,sponsorsDetails,userId,bio
    // })
    
    //  if(!profile){
    //   returnValue.error = 'An Error ocured. Please try again'
    //   return new NextResponse(JSON.stringify(returnValue),{status:201})
    //  }else{
      
    //    returnValue.value = profile 
    //    returnValue.ok = true
    //     return new NextResponse(JSON.stringify(returnValue),{status:201})
    //  }
}
 }catch(err:any){
    console.log(err)
  returnValue.error = err.message
  return new NextResponse(JSON.stringify(returnValue),{status:500})
 }
}

function isBodyValid(body:{studentId:string, courseId:string, episode:{episodeNumber:number}}){
return !body.studentId || !body.courseId || !body.episode.episodeNumber 
}