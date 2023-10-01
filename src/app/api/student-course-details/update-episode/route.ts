
import dbConnect from '@/lib/types/db'
import { ApiReturnValue } from '@/lib/types/returnValues'
import { NextResponse,NextRequest} from 'next/server'
import StudentCourseDetailsdeModel from '@/lib/models/studentCourseDetails'
import {  StudentCourseDetailsEpisodeType, StudentCourseDetailsType } from '@/lib/types/studentsCourseDetails'
import { EpisodeUpdateParamProp } from '@/lib/types/episode'


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
  const body:EpisodeUpdateParamProp = await request.json()

if(isBodyInValid(body)){
    returnValue.error = 'Invalid request. Please provide the required values'
   return new NextResponse(JSON.stringify(returnValue),{status:201})
 
}else{
   
    const {updateParam,value,studentId,courseId,episodeNumber} = body
   //check if student course details exist
   const courseDetails = await StudentCourseDetailsdeModel.findOne({studentId})
   if(courseDetails){
    //get episode
   const episode = courseDetails.coursesTaken.find(
    (course:StudentCourseDetailsType)=>course.courseId.toString() === courseId)?.episodes.find(
        (ep:StudentCourseDetailsEpisodeType)=>ep.episodeNumber === episodeNumber)
        //update episode
        if(updateParam === 'assignment'){
          const assignment = {answer:value}
          episode[updateParam] = assignment
        }else{
          episode[updateParam] = value
        }
       
        //add episode to course

       courseDetails.coursesTaken.find((course:StudentCourseDetailsType)=>course.courseId.toString() === courseId)?.episodes.filter(
     (ep:StudentCourseDetailsEpisodeType)=>ep.episodeNumber !== episodeNumber).push(episode)

        const newCourseDetails = await courseDetails.save()
        //console.log(episode)
    returnValue.value = newCourseDetails
    returnValue.ok = true
    return new NextResponse(JSON.stringify(returnValue),{status:201})
   }else{
    returnValue.error = 'Invalid request.'
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

function isBodyInValid(body:EpisodeUpdateParamProp){
return !body.updateParam || !body.value || !body.studentId || !body.courseId || !body.episodeNumber
}