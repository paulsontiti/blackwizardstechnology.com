import { getFetchRequest, postFetchRequest, sendDataRequest } from "../functions/apiRequest";
import { RequestAPIInterface } from "../interfaces/api";
import { StudentCommitedTime } from "../types/course";

export class Course {
 
  //fields/properties
  private _name: string = '';
  private _courseId: string = '';
  private _noOfSeasons: number = 0;
  private _noOfEpisodes: number = 0;
  private _noOfWeeks: number = 0;
  private _noOfVideosPerDay: StudentCommitedTime = 1;
  private static  _apiUrl = `${process.env.BWT_URL}api/course`

  //get methods
  get name(): string {
    return this._name;
  }
  get courseId(): string {
    return this._courseId;
  }
  get noOfSeasons(): number {
    return this._noOfSeasons;
  }
  get noOfEpisodes(): number {
    return this._noOfEpisodes;
  }
  get noOfVideosPerDay(): StudentCommitedTime {
    return this._noOfVideosPerDay;
  }
  private get noOfWeeks(): number {
    //console.log(this._noOfVideosPerDay)
    this._noOfWeeks = this._noOfEpisodes / (this._noOfVideosPerDay * 5);

    return this._noOfWeeks;
  }
  get noOfWeeksArrary(): number[] {
    const arr: number[] = [];
    for (let num = 1; num <= this.noOfWeeks; num++) {
      arr.push(num);
    }
    return arr;
  }
  //set methods
  set noOfEpisodes(noOfEpisodes:number){
    this._noOfEpisodes = noOfEpisodes
  }
  set noOfVideosPerDay(noOfVideosPerDay:StudentCommitedTime){
    this._noOfVideosPerDay = noOfVideosPerDay
  }
  set noOfSeasons(noOfSeasons:number){
    this._noOfSeasons = noOfSeasons
  }
  set name(name:string){
    this._name = name
  }
  set courseId(courseId:string){
    this._courseId = courseId
  }
   //fetch data method
static async getFetchData(fetchParam: string) {
    return await getFetchRequest(Course._apiUrl,fetchParam)
  }

  //fetch data method
  async postFetchData(url: string, body: any) {
    return await postFetchRequest(Course._apiUrl,body)
  }
  //fetch data method
  async sendData(url: string, body: any) {
    
   return await sendDataRequest(Course._apiUrl,body)
  }
}
