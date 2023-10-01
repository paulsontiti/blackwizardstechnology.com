export type UserType={
    _id:string,
    userName:string,
    active:boolean,
    referralCode:string,
    createdAt:Date,
    dpFileName:string
}
export type AttemptType= { episodeNumber: number; attempt: number; studentId: string }