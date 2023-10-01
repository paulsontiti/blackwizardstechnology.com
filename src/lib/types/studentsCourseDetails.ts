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
    assignment:StudentEpisodeAssignmentType
    score:number 

}
export type StudentEpisodeAssignmentType={
    answer:string,
    grade:number
} 