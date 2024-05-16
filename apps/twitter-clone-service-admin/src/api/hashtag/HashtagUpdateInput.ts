import { TweetUpdateManyWithoutHashtagsInput } from "./TweetUpdateManyWithoutHashtagsInput";

export type HashtagUpdateInput = {
  metadata?: string | null;
  name?: string | null;
  tweets?: TweetUpdateManyWithoutHashtagsInput;
};
