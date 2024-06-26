/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Hashtag } from "./Hashtag";
import { HashtagCountArgs } from "./HashtagCountArgs";
import { HashtagFindManyArgs } from "./HashtagFindManyArgs";
import { HashtagFindUniqueArgs } from "./HashtagFindUniqueArgs";
import { CreateHashtagArgs } from "./CreateHashtagArgs";
import { UpdateHashtagArgs } from "./UpdateHashtagArgs";
import { DeleteHashtagArgs } from "./DeleteHashtagArgs";
import { TweetFindManyArgs } from "../../tweet/base/TweetFindManyArgs";
import { Tweet } from "../../tweet/base/Tweet";
import { HashtagService } from "../hashtag.service";
@graphql.Resolver(() => Hashtag)
export class HashtagResolverBase {
  constructor(protected readonly service: HashtagService) {}

  async _hashtagsMeta(
    @graphql.Args() args: HashtagCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Hashtag])
  async hashtags(
    @graphql.Args() args: HashtagFindManyArgs
  ): Promise<Hashtag[]> {
    return this.service.hashtags(args);
  }

  @graphql.Query(() => Hashtag, { nullable: true })
  async hashtag(
    @graphql.Args() args: HashtagFindUniqueArgs
  ): Promise<Hashtag | null> {
    const result = await this.service.hashtag(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Hashtag)
  async createHashtag(
    @graphql.Args() args: CreateHashtagArgs
  ): Promise<Hashtag> {
    return await this.service.createHashtag({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Hashtag)
  async updateHashtag(
    @graphql.Args() args: UpdateHashtagArgs
  ): Promise<Hashtag | null> {
    try {
      return await this.service.updateHashtag({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Hashtag)
  async deleteHashtag(
    @graphql.Args() args: DeleteHashtagArgs
  ): Promise<Hashtag | null> {
    try {
      return await this.service.deleteHashtag(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Tweet], { name: "tweets" })
  async findTweets(
    @graphql.Parent() parent: Hashtag,
    @graphql.Args() args: TweetFindManyArgs
  ): Promise<Tweet[]> {
    const results = await this.service.findTweets(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
