import { ApiReturnValue } from "../types/returnValues";

export interface RequestAPIInterface{
      //fetch data method
   getFetchData(url: string, fetchParam: string):Promise<ApiReturnValue>

  //fetch data method
   postFetchData(url: string, body: any):Promise<ApiReturnValue>
  //fetch data method
   sendData(url: string, body: any):Promise<ApiReturnValue>
}