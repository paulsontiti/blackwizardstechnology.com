
import dbConnect from '@/lib/types/db'
import { ApiReturnValue } from '@/lib/types/returnValues'
import { NextResponse,NextRequest} from 'next/server'
import StudentCourseDetailsdeModel from '@/lib/models/studentCourseDetails'
import {  StudentCourseDetailsEpisodeType, StudentCourseDetailsType } from '@/lib/types/studentsCourseDetails'
import { EpisodeUpdateParamProp } from '@/lib/types/episode'
import { StudentEpisodeAssignmentPostRequestBody } from '@/lib/classes/studentCourseDetails'


const returnValue:ApiReturnValue = {
  value:null,error:'',ok:false
}
 
 
export async function GET(request:NextRequest){
  try{
    await dbConnect()
    const {searchParams} = new URL(request.url)
   const userId = searchParams.get('fetchParam')
   //fetch profile
   const profile = await StudentCourseDetailsdeModel.findOne({userId})
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
  const body:StudentEpisodeAssignmentPostRequestBody = await request.json()

if(isBodyInValid(body)){
    returnValue.error = 'Invalid request. Please provide the required values'
   return new NextResponse(JSON.stringify(returnValue),{status:201})
 
}else{
   
    const {studentId,courseId,episodeNumber} = body
   //check if student course details exist
   const courseDetails = await StudentCourseDetailsdeModel.findOne({studentId})
   if(courseDetails){
    //get episode
   const episode = courseDetails.coursesTaken.find(
    (course:StudentCourseDetailsType)=>course.courseId.toString() === courseId)?.episodes.find(
        (ep:StudentCourseDetailsEpisodeType)=>ep.episodeNumber === episodeNumber)
       
    returnValue.value = episode.assignment
    returnValue.ok = true
    return new NextResponse(JSON.stringify(returnValue),{status:201})
   }else{
    returnValue.error = 'Invalid request.'
    return new NextResponse(JSON.stringify(returnValue),{status:201})
   }
      
}
 }catch(err:any){
    console.log(err)
  returnValue.error = err.message
  return new NextResponse(JSON.stringify(returnValue),{status:500})
 }
}

function isBodyInValid(body:StudentEpisodeAssignmentPostRequestBody){
return !body.courseId || !body.studentId || !body.episodeNumber
}