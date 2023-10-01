import { getFetchRequest, postFetchRequest, sendDataRequest } from "../functions/apiRequest"
import { RequestAPIInterface } from "../interfaces/api"
import { EpisodeUpdateParamProp } from "../types/episode"
import { StudentCourseDetailsType } from "../types/studentsCourseDetails"

export class StudentCourseDetails implements RequestAPIInterface{

    private _studentId:string = ''
    private _coursesTaken:StudentCourseDetailsType[] = []
    private static  _apiUrl = `${process.env.BWT_URL}api/student-course-details`
    private static  _updateEpisodeApiUrl = `${process.env.BWT_URL}api/student-course-details/update-episode`
    private static  _studentEpisodeAssignmentUrl = `${process.env.BWT_URL}api/student-course-details/episode-assignment`


    //get methods
    get studentId():string{
        return this._studentId
    }
    get coursesTaken():StudentCourseDetailsType[]{
        return this._coursesTaken
    }

    //set methods
    set studentId(studentId:string){
        this._studentId = studentId
    }
    set coursesTaken(coursesTaken:StudentCourseDetailsType[]){
        this._coursesTaken = coursesTaken
    }
     //api methods
   async getFetchData(fetchParam: string) {
    
    return await getFetchRequest(StudentCourseDetails._apiUrl,fetchParam)
  }

  //fetch data method
  async postFetchData( body: any) {
    return await postFetchRequest(StudentCourseDetails._apiUrl,body)
  }
  //fetch data method
  async sendData(body: any) {
    
   return await sendDataRequest(StudentCourseDetails._apiUrl,body)
  }
  static async upDateEpisode(body: EpisodeUpdateParamProp) {
    
    return await sendDataRequest(StudentCourseDetails._updateEpisodeApiUrl,body)
   }
   static async getCourseDetails(fetchParam:string) {
    
    return await getFetchRequest(StudentCourseDetails._apiUrl,fetchParam)
   }
   static async getStudentEpisodeAssignment(body:StudentEpisodeAssignmentPostRequestBody) {
    
    return await postFetchRequest(StudentCourseDetails._studentEpisodeAssignmentUrl,body)
   }
}
export type StudentEpisodeAssignmentPostRequestBody={studentId:string,courseId:string,episodeNumber:number}