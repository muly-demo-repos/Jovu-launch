import { Tweet } from "../tweet/Tweet";

export type Hashtag = {
  createdAt: Date;
  id: string;
  name: string | null;
  tweets?: Array<Tweet>;
  updatedAt: Date;
};
