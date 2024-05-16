import { TweetCreateNestedManyWithoutHashtagsInput } from "./TweetCreateNestedManyWithoutHashtagsInput";

export type HashtagCreateInput = {
  name?: string | null;
  tweets?: TweetCreateNestedManyWithoutHashtagsInput;
};
