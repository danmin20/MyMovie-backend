import { prisma } from "../../../../generated/prisma-client";

const DELETE = "DELETE";
const EDIT = "EDIT";

export default {
  Mutation: {
    editMovie: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { id, sentiment, rate, action } = args;
      const { user } = request;
      const movie = await prisma.$exists.movie({ id, user: { id: user.id } });
      if (movie) {
        if (action === EDIT) {
          return prisma.updateMovie({
            data: { sentiment, rate },
            where: { id }
          });
        } else if (action === DELETE) {
          return prisma.deleteMovie({ id });
        }
      } else {
        throw Error("오류발생");
      }
    }
  }
};
