import dbConnect from "@/lib/types/db";
import { ApiReturnValue } from "@/lib/types/returnValues";
import { NextResponse, NextRequest } from "next/server";
import ProfileModel from "@/lib/models/profile";
import { CourseEpisodeType } from "@/lib/types/course";
import CourseEpisodeModel from "@/lib/models/courseEpisode";
import { EpisodePostRequestType, GetEpisodePostRequestType } from "@/lib/classes/courseEpisode";

const returnValue: ApiReturnValue = {
  value: null,
  error: "",
  ok: false,
};

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const courseId = searchParams.get("fetchParam");
    //fetch episodes
    const episodes = await CourseEpisodeModel.find({ courseId });
    returnValue.value = episodes;
    returnValue.ok = true;
    return new NextResponse(JSON.stringify(returnValue), { status: 201 });
  } catch (err: any) {
    returnValue.error = err.message;
    return new NextResponse(JSON.stringify(returnValue), { status: 201 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    //get user details from the request body
    const body: GetEpisodePostRequestType = await request.json();

    if (isBodyValid(body)) {
      returnValue.error =
        "Invalid course episode details. Please provide the required values";
      return new NextResponse(JSON.stringify(returnValue), { status: 201 });
    } else {
      const { episodeNumber, courseId,studentId,prop } = body;
      const courseEpisode = await CourseEpisodeModel.findOne({
        courseId,
        episodeNumber,
      });
const questions:any[] = []     
 courseEpisode[prop].map((question:any)=>{
  if(question.studentId.toString() === studentId){
    questions.push(question)
  }
})
      returnValue.value = questions;
      returnValue.ok = true;
      return new NextResponse(JSON.stringify(returnValue), { status: 201 });
    }
  } catch (err: any) {
    console.log(err);
    returnValue.error = err.message;
    return new NextResponse(JSON.stringify(returnValue), { status: 500 });
  }
}

function isBodyValid(body: GetEpisodePostRequestType) {
  return !body.courseId || !body.episodeNumber || !body.prop || !body.studentId;
}
