import { baseUrl } from "../config";
import { request } from "../lib/request";

const fetchDataFromServer = async () => {
  return await baseUrl.get(request.requestapplication);
};

const updateServerData = async (payload: any) => {
  return await baseUrl.put(request.requestapplication, {
    params: {
      programId: "voluptas",
      version: 569.6792601740412,
    },
    data: payload,
  });
};

export { fetchDataFromServer, updateServerData };
