import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ["user", "follow", "tweet", "like", "hashtag"],
    protoPath: [
      "src/user/user.proto",
      "src/follow/follow.proto",
      "src/tweet/tweet.proto",
      "src/like/like.proto",
      "src/hashtag/hashtag.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
