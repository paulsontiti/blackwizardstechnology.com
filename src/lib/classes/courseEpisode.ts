import { getFetchRequest, postFetchRequest } from "../functions/apiRequest"
import { QuickTest } from "../types/course"

export class CourseEpisode{
private _title:string = ''
private _courseTitle:string = ''
    private _episodeNumber:number = 0
    private _duration:number = 0
    private _videoSrc:string = ''
    private _downloadablePdf:string[] = []
private _questions:string[] = []
private _quickTest:QuickTest = {} as QuickTest
private _feedback:string = ''
private _assignment:string =''
private static  _apiUrl = `${process.env.BWT_URL}api/course-episode`
private static  _getEpisodeQuestionsApiUrl = `${process.env.BWT_URL}api/course-episode/episode-questions`
private static  _updateEpisodeQuestionsApiUrl = `${process.env.BWT_URL}api/course-episode/update-episode-questions`
private static  _updateEpisodeFeedbacksApiUrl = `${process.env.BWT_URL}api/course-episode/update-episode-feedbacks`
private static  _getEpisodeArrayPropByStudentApiUrl = `${process.env.BWT_URL}api/course-episode/episode-array-prop-by-student`

//get methods
get title():string{
    return this._title
}
get assignment():string{
    return this._assignment
}
get courseTitle():string{
    return this._courseTitle
}
get episodeNumber():number{
    return this._episodeNumber
}
get duration():number{
    return this._duration
}
get videoSrc():string{
    return this._videoSrc
}
get downloadablePdf():string[]{
    return this._downloadablePdf
}
get questions():string[]{
    return this._questions
}
get quickTest():QuickTest{
    return this._quickTest
}
get feedback():string{
    return this._feedback
}

//set methods
set title(title:string){
    this._title = title
}
set assignment(assignment:string){
    this._assignment = assignment
}
set courseTitle(coursetitle:string){
    this._courseTitle = coursetitle
}
set episodeNumber(episodeNumber:number){
    this._episodeNumber = episodeNumber
}
set duration(duration:number){
    this._duration = duration
}
set videoSrc(videoSrc:string){
    this._videoSrc = videoSrc
}
set downloadablePdf(downloadablePdf:string[]){
    this._downloadablePdf = downloadablePdf
}
set questions(questions:string[]){
    this._questions = questions
}
set quickTest(quickTest:QuickTest){
    this._quickTest = quickTest
}
set feedback(feedback:string){
    this._feedback = feedback
}
 //fetch data method
 static async getFetchData(fetchParam: string) {
    return await getFetchRequest(CourseEpisode._apiUrl,fetchParam)
  }
  static async getEpisodeQuestions(body:EpisodePostRequestType) {
    return await postFetchRequest(CourseEpisode._getEpisodeQuestionsApiUrl,body)
  }
  static async upDateEpisodeQuestions(body:UpdateEpisodePostRequestType) {
    return await postFetchRequest(CourseEpisode._updateEpisodeQuestionsApiUrl,body)
  }
  static async upDateEpisodeFeedbacks(body:UpdateEpisodePostRequestType) {
    return await postFetchRequest(CourseEpisode._updateEpisodeFeedbacksApiUrl,body)
  }
  static async getEpisodeArrayPropByStudent(body:GetEpisodePostRequestType) {
    return await postFetchRequest(CourseEpisode._getEpisodeArrayPropByStudentApiUrl,body)
  }
    
}
export type UpdateEpisodePostRequestType={studentId:string,courseId:string,episodeNumber:number,value:string}
export type GetEpisodePostRequestType={studentId:string,courseId:string,episodeNumber:number,prop:string}
export type EpisodePostRequestType={courseId:string,episodeNumber:number}