import * as graphql from "@nestjs/graphql";
import { HashtagResolverBase } from "./base/hashtag.resolver.base";
import { Hashtag } from "./base/Hashtag";
import { HashtagService } from "./hashtag.service";

@graphql.Resolver(() => Hashtag)
export class HashtagResolver extends HashtagResolverBase {
  constructor(protected readonly service: HashtagService) {
    super(service);
  }
}
