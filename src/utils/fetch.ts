import { baseUrl } from "../config";
import { request } from "../lib/request";

const fetchDataFromServer = async () => {
  return await baseUrl.get(request.requestapplication);
};

export { fetchDataFromServer };
