import dbConnect from "@/lib/types/db";
import { ApiReturnValue } from "@/lib/types/returnValues";
import { NextResponse, NextRequest } from "next/server";
import ProfileModel from "@/lib/models/profile";
import { ProfileType } from "@/lib/types/forms";
import { join } from "path";
import { writeFile } from "fs";

const returnValue: ApiReturnValue = {
  value: null,
  error: "",
  ok: false,
};

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("fetchParam");
    //fetch profile
    const profile = await ProfileModel.findOne({ userId });
    returnValue.value = profile;
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
    const body = await request.formData();
    const file: File | null = body.get("file") as unknown as File;
    const userId = body.get("userId");
    const fileExt = file.name.split(".")[1];

    if (!file) {
      returnValue.error = "No file uploaded";
      return new NextResponse(JSON.stringify(returnValue), { status: 201 });
    } else {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      //write buffer to filesystem
      const path = join(
        process.cwd(),
        "/public/tmp/dp",
        `${userId}.${fileExt}`
      );
      writeFile(path, buffer, (err) => {
        if (err) {
          returnValue.error = err.message;
      return new NextResponse(JSON.stringify(returnValue), { status: 201 });
        } else {

        }
      });
      returnValue.value = `${userId}.${fileExt}`;
      returnValue.ok = true;
      return new NextResponse(JSON.stringify(returnValue), { status: 201 });
    }
  } catch (err: any) {
    console.log(err);
    returnValue.error = err.message;
    return new NextResponse(JSON.stringify(returnValue), { status: 500 });
  }
}
