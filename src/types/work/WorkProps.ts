import WorkENProps from "./WorkENProps";
import WorkZHProps from "./WorkZHProps";
import WorkCategory from "./WorkCategory";
import WorkLocationProps from "./WorkLocationProps";
import WorkTagProps from "./WorkTagProps";
import GroupProps from "../group/GroupProps";
import WorkPhotoProps from "./WorkPhotoProps";

export default interface WorkProps extends WorkPhotoProps {
  work_id: string;
  year: string;
  type: string;
  session: { start: string | null; end: string | null }[];
  file_url: string;
  created_at: string;
  updated_at: string;
  work_en: WorkENProps;
  work_zh: WorkZHProps;
  location: WorkLocationProps;
  tags: WorkTagProps[];
  category: WorkCategory;
  groups: GroupProps[];
}
