import { TweetUpdateManyWithoutHashtagsInput } from "./TweetUpdateManyWithoutHashtagsInput";

export type HashtagUpdateInput = {
  name?: string | null;
  tweets?: TweetUpdateManyWithoutHashtagsInput;
};
