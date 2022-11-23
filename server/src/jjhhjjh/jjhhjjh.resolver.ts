import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { JjhhjjhResolverBase } from "./base/jjhhjjh.resolver.base";
import { Jjhhjjh } from "./base/Jjhhjjh";
import { JjhhjjhService } from "./jjhhjjh.service";

@graphql.Resolver(() => Jjhhjjh)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class JjhhjjhResolver extends JjhhjjhResolverBase {
  constructor(
    protected readonly service: JjhhjjhService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
