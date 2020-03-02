import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    upload: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { sentiment, movieNm, img, rate } = args;
      const movie = await prisma.createMovie({
        sentiment,
        movieNm,
        img,
        rate,
        user: { connect: { id: user.id } }
      });
      return movie;
    }
  }
};
