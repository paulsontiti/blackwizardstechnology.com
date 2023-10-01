
import dbConnect from '@/lib/types/db'
import { ApiReturnValue } from '@/lib/types/returnValues'
import { NextResponse,NextRequest} from 'next/server'
import User from '@/lib/models/user'


const returnValue:ApiReturnValue = {
  value:null,error:'',ok:false
}
 
 
export async function GET(request:NextRequest){
  try{
    await dbConnect()
   const users = await User.find({},{userName:true,_id:false})
    returnValue.value = users
    returnValue.ok = true
    return new NextResponse(JSON.stringify(returnValue),{status:201})
  }catch(err:any){
      returnValue.error = err.message
    return new NextResponse(JSON.stringify(returnValue),{status:201})
  }
  }
