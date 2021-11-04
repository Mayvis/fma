import GroupENProps from "./GroupENProps";
import GroupZHProps from "./GroupZHProps";
import ArtistProps from "../artist/ArtistProps";

export default interface GroupProps {
  group_id: string;
  photo: string;
  group_en: GroupENProps;
  group_zh: GroupZHProps;
  artists: ArtistProps[];
  created_at: string;
  updated_at: string;
}
