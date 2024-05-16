import { HashtagWhereUniqueInput } from "../hashtag/HashtagWhereUniqueInput";
import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetCreateInput = {
  content?: string | null;
  hashtag?: HashtagWhereUniqueInput | null;
  likes?: LikeCreateNestedManyWithoutTweetsInput;
  user?: UserWhereUniqueInput | null;
};
