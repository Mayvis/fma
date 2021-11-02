import request from "../utils/request";

export function getActivitiesCategories() {
  return request({
    url: "api/v1/activities-categories",
    method: "GET",
  });
}
