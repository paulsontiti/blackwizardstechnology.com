
import dbConnect from '@/lib/types/db'
import { ApiReturnValue } from '@/lib/types/returnValues'
import { NextResponse,NextRequest} from 'next/server'
import { CourseEpisodeType } from '@/lib/types/course'
import CourseEpisodeModel from '@/lib/models/courseEpisode'


const returnValue:ApiReturnValue = {
  value:null,error:'',ok:false
}
 
 
export async function GET(request:NextRequest){
  try{
    await dbConnect()
    const {searchParams} = new URL(request.url)
   const courseId = searchParams.get('fetchParam')
   //fetch episodes
   const episodes = await CourseEpisodeModel.find({courseId})
    returnValue.value = episodes
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
  const body:CourseEpisodeType = await request.json()
 
  
if(isBodyValid(body)){
    returnValue.error = 'Invalid course episode details. Please provide the required values'
    returnValue.ok = false
    returnValue.value= null
   return new NextResponse(JSON.stringify(returnValue),{status:201})
 
}else{
    const {title,courseTitle,duration,assignment,downloadablePdf,episodeNumber,quickTest,courseId} = body
    const courseEpisode = await CourseEpisodeModel.create({
        title,courseTitle,duration,assignment,downloadablePdf,episodeNumber,quickTest,courseId
    })
    
     if(!courseEpisode){
      returnValue.error = 'An Error ocured. Please try again'
      returnValue.ok = false
      returnValue.value= null
      return new NextResponse(JSON.stringify(returnValue),{status:201})
     }else{
       returnValue.ok = true
       returnValue.error = ''
       returnValue.value= null
        return new NextResponse(JSON.stringify(returnValue),{status:201})
     }
}
 }catch(err:any){
    console.log(err)
  returnValue.error = err.message
  return new NextResponse(JSON.stringify(returnValue),{status:500})
 }
}

function isBodyValid(body:CourseEpisodeType){
    
return !body.title || !body.courseTitle || !body.duration || !body.assignment
 || !body.downloadablePdf
}