import { Tweet } from "../tweet/Tweet";

export type Hashtag = {
  createdAt: Date;
  id: string;
  metadata: string | null;
  name: string | null;
  tweets?: Array<Tweet>;
  updatedAt: Date;
};
