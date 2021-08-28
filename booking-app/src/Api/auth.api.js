import { API } from "./constants.api";

export const authAPI={
  login: (data)=> API.post(`${url}/login`,data),
  register: (data)=>API.post(`${url}/login`,data),
  
}