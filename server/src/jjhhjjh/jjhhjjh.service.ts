import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { JjhhjjhServiceBase } from "./base/jjhhjjh.service.base";

@Injectable()
export class JjhhjjhService extends JjhhjjhServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
