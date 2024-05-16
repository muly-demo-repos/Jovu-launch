import { TweetCreateNestedManyWithoutHashtagsInput } from "./TweetCreateNestedManyWithoutHashtagsInput";

export type HashtagCreateInput = {
  metadata?: string | null;
  name?: string | null;
  tweets?: TweetCreateNestedManyWithoutHashtagsInput;
};
