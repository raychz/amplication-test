import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { JjhhjjhService } from "./jjhhjjh.service";
import { JjhhjjhControllerBase } from "./base/jjhhjjh.controller.base";

@swagger.ApiTags("jjhhjjhs")
@common.Controller("jjhhjjhs")
export class JjhhjjhController extends JjhhjjhControllerBase {
  constructor(
    protected readonly service: JjhhjjhService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
