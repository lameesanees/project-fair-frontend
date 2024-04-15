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
// export const addProjectAPI = async (reqbody, reqHeader) => {
//   return await commonAPI("post",`${serverURL}/project/add-project`,reqbody,reqHeader);
// };
