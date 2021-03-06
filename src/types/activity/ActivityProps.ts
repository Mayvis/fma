import ActivityCategoryProps from "./ActivityCategoryProps";
import ActivitySpeakerProps from "./ActivitySpeakerProps";

export default interface ActivityProps {
  activity_id: string;
  live: boolean;
  live_stream_url: string | null;
  final_project_url: string | null;
  registration_url: string | null;
  title_en: string;
  title_zh: string;
  introduction_en: string;
  introduction_zh: string;
  location_zh: string;
  location_en: string;
  max_participant: number;
  start_date: string;
  end_date: string;
  created_at: string;
  updated_at: string;
  photo: string;
  category: ActivityCategoryProps;
  speakers: ActivitySpeakerProps[] | [];
}
