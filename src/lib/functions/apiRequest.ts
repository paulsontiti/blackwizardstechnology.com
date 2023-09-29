import axios from "axios";
import { ApiReturnValue } from "../types/returnValues";

export async function getFetchRequest(url: string, fetchParam: string){
 
    let returnValue: ApiReturnValue = {
        value: null,
        error: '',ok:false
      };
      try {
        const res = await axios({
          url: `${url}?fetchParam=${fetchParam}`,
          method: "GET",
        });
       
        const data = res.data;
        returnValue = data;
      } catch (error: any) {
        returnValue = error;
      }
      return returnValue;
}
export async function postFetchRequest(url: string, body: any) {
    let returnValue: ApiReturnValue = {
      value: null,
      error: '',ok:false
    };
    try {
      const res = await axios({
        url,
        method: "POST",
        data: body,
      });
      returnValue = res.data;
    } catch (error: any) {
      returnValue.error = error;
    }
    return returnValue;
  }

  export async function sendDataRequest(url: string, body: any) {
    
    let returnValue: ApiReturnValue = {
      value: null,
      error: '',ok:false
    };
    try {
      const res = await axios({
        url,
        method: "POST",
        data: body,
      });
      returnValue = res.data;
    } catch (error: any) {
      returnValue.error = error;
    }
    return returnValue;
  
}