import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    editMe: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { name } = args;
      return prisma.updateUser({
        where: { id: user.id },
        data: { name }
      });
    }
  }
};
