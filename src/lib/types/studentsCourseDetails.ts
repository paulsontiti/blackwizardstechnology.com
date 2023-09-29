export type StudentCourseDetailsT={
studentId:string
coursesTaken:StudentCourseDetailsType[]
}

export type StudentCourseDetailsType={
    courseId:string
episodes:StudentCourseDetailsEpisodeType[]
}

export type StudentCourseDetailsEpisodeType={
    attempts:number
    episodeNumber:number
    completed:boolean
    assignment:string 
    score:number 

}