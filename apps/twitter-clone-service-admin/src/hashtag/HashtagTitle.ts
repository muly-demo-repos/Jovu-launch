import { Hashtag as THashtag } from "../api/hashtag/Hashtag";

export const HASHTAG_TITLE_FIELD = "name";

export const HashtagTitle = (record: THashtag): string => {
  return record.name?.toString() || String(record.id);
};
