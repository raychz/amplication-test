import { Module } from "@nestjs/common";
import { JjhhjjhModuleBase } from "./base/jjhhjjh.module.base";
import { JjhhjjhService } from "./jjhhjjh.service";
import { JjhhjjhController } from "./jjhhjjh.controller";
import { JjhhjjhResolver } from "./jjhhjjh.resolver";

@Module({
  imports: [JjhhjjhModuleBase],
  controllers: [JjhhjjhController],
  providers: [JjhhjjhService, JjhhjjhResolver],
  exports: [JjhhjjhService],
})
export class JjhhjjhModule {}
