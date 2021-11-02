import request from "../utils/request";

export function getActivitiesByMonth(params: { date: string }) {
  return request({
    url: "api/v1/activities/d",
    method: "GET",
    params,
  });
}
