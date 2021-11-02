import GroupENProps from "./GroupENProps";
import GroupZHProps from "./GroupZHProps";

export default interface GroupProps {
  group_id: string;
  photo: string;
  group_en: GroupENProps;
  group_zh: GroupZHProps;
  created_at: string;
  updated_at: string;
}
