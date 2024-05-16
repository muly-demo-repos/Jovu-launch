import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HashtagService } from "./hashtag.service";
import { HashtagGrpcControllerBase } from "./base/hashtag.grpc.controller.base";

@swagger.ApiTags("hashtags")
@common.Controller("hashtags")
export class HashtagGrpcController extends HashtagGrpcControllerBase {
  constructor(protected readonly service: HashtagService) {
    super(service);
  }
}
