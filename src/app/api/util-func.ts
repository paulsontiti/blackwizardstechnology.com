import User from "@/lib/models/user"

export function isUserDetailsValid(body:any):boolean{

    const {userName,password} = body
    return userName !== '' && password !== ''
    }
   export async function doesUserNameExist(userName:string){
        const user = await User.findOne({userName})
          return user ? true : false
          }
          export async function doesPasswordMatch(userName:string,password:string){
            const user = await User.findOne({userName})
            return {user,ok:user.password === password}
          }