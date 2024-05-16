import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HashtagWhereUniqueInput } from "../hashtag/HashtagWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetWhereInput = {
  content?: StringNullableFilter;
  hashtag?: HashtagWhereUniqueInput;
  id?: StringFilter;
  likes?: LikeListRelationFilter;
  user?: UserWhereUniqueInput;
};
