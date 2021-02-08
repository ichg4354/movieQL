import { getMovie } from "./db";

const resolver = {
  Query: {
    movies: () => getMovie(),
  },
};

export default resolver;
