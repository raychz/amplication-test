/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Jjhhjjh } from "@prisma/client";

export class JjhhjjhServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.JjhhjjhFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.JjhhjjhFindManyArgs>
  ): Promise<number> {
    return this.prisma.jjhhjjh.count(args);
  }

  async findMany<T extends Prisma.JjhhjjhFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.JjhhjjhFindManyArgs>
  ): Promise<Jjhhjjh[]> {
    return this.prisma.jjhhjjh.findMany(args);
  }
  async findOne<T extends Prisma.JjhhjjhFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.JjhhjjhFindUniqueArgs>
  ): Promise<Jjhhjjh | null> {
    return this.prisma.jjhhjjh.findUnique(args);
  }
  async create<T extends Prisma.JjhhjjhCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.JjhhjjhCreateArgs>
  ): Promise<Jjhhjjh> {
    return this.prisma.jjhhjjh.create<T>(args);
  }
  async update<T extends Prisma.JjhhjjhUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.JjhhjjhUpdateArgs>
  ): Promise<Jjhhjjh> {
    return this.prisma.jjhhjjh.update<T>(args);
  }
  async delete<T extends Prisma.JjhhjjhDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.JjhhjjhDeleteArgs>
  ): Promise<Jjhhjjh> {
    return this.prisma.jjhhjjh.delete(args);
  }
}
