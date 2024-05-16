import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TweetListRelationFilter } from "../tweet/TweetListRelationFilter";

export type HashtagWhereInput = {
  id?: StringFilter;
  metadata?: StringNullableFilter;
  name?: StringNullableFilter;
  tweets?: TweetListRelationFilter;
};
