import { baseUrl } from "../config";
import { request } from "../lib/request";

export const fetchDataFromServer = async () => {
  return await baseUrl.get(request.requestapplication);
};
