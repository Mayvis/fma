import request from "../utils/request";

export function getGroups() {
  return request({
    url: `api/v1/groups`,
    method: "GET",
  });
}

export function getGroup(groupId: string) {
  return request({
    url: `api/v1/groups/${groupId}`,
    method: "GET",
  });
}
