import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";

// register API call
export const registerAPI = async (user) => {
  return await commonAPI("post", `${serverURL}/register`, user, "");
};
// login API call
export const loginAPI = async (user) => {
  return await commonAPI("post", `${serverURL}/login`, user, "");
};

// add project API call
export const addProjectAPI = async (reqbody, reqHeader) => {
  return await commonAPI("post",`${serverURL}/project/add-project`,reqbody,reqHeader);
};
// get home project API call
export const getHomeProjectAPI = async()=>{
  return await commonAPI("get",`${serverURL}/projects/home-project`,"","")
}
// gert all
export const getAllProjectsAPI= async(searchKey,reqHeader)=>{
  return await commonAPI("get",`${serverURL}/projects/get-all-project?search=${searchKey}`,"",reqHeader)
}

// api call for myprojects get particular project
export const getAuserprojectAPI=async(reqheader)=>{
  return await commonAPI("get",`${serverURL}/project/get-auser-project`,"",reqheader)
}

