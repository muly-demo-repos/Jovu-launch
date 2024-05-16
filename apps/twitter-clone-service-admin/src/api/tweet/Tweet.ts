import { Hashtag } from "../hashtag/Hashtag";
import { Like } from "../like/Like";
import { User } from "../user/User";

export type Tweet = {
  content: string | null;
  createdAt: Date;
  hashtag?: Hashtag | null;
  id: string;
  likes?: Array<Like>;
  updatedAt: Date;
  user?: User | null;
};
