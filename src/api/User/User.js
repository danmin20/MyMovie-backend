import { prisma } from "../../../generated/prisma-client";

export default {
  User: {
    movies: ({ id }) => prisma.user({ id }).movies()
  }
};
