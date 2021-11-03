import request from "../utils/request";

export function getWorks(params: { limit: number; search: string }) {
  return request({
    url: "api/v1/works",
    method: "GET",
    params,
  });
}
