export type CourseEpisodeType={
    title:string,
    courseId?:string,
    courseTitle:string,
    episodeNumber:number,
    duration:string,
quickTest:QuickTest
assignment:string
downloadablePdf:string
videoSrc?:string
}

export type Question={
    question:string,
    answer:string
}
export type QuickTest={
    duration:number,
    repeatableTimes:number,
    passMark:number,
    questions:AssignmentQuestion[]
}

export type AssignmentQuestion={
    question:string,
    answer:string,
    answerOptions:string[]
    mark:number

}
export type StudentCommitedTime= 0.5 | 1 | 2 | 4 | 8
export type CourseType={
    _id:string
    name:string,
    noOfSeasons:number,
    noOfEpisodes:number
}