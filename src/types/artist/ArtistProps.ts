import ArtistENProps from "./ArtistENProps";
import ArtistZHProps from "./ArtistZHProps";
import GroupProps from "../group/GroupProps";
import ArtistTagProps from "./ArtistTagProps";

export default interface ArtistProps {
  artist_id: string;
  avatar: string;
  artist_en: ArtistENProps;
  artist_zh: ArtistZHProps;
  groups: GroupProps[];
  tags: ArtistTagProps[];
  created_at: string;
  updated_at: string;
}
