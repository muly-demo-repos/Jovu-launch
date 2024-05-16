import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TweetListRelationFilter } from "../tweet/TweetListRelationFilter";

export type HashtagWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  tweets?: TweetListRelationFilter;
};
