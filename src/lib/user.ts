export type User ={
    _id:string,
    email:string,
    password:string,
    fullName:string,
  phone:string,
  dpFileName:string,userName:string,
  active:boolean,
  }
  export const userJSON = () => {
    if (typeof window !== "undefined") {
      // Perform localStorage action
      const userStr = localStorage.getItem("user");
      //console.log(userStr)
      if (userStr) {
        const user = JSON.parse(JSON.stringify(userStr));
        if (user !== "undefined") {
          //console.log(user )
          return JSON.parse(user) as User;
        }
      }
    }
    return {} as User;
  };