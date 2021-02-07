import { getMovies } from "./db";
import { getById, removeById, addMovie } from "./db";

const resolver = {
  Query: {
    movies: () => getMovies(),
    movie: (_, arg) => getById(arg.id),
  },
  Mutation: {
    remove: (_, arg) => removeById(arg.id),
    add: (_, arg) => addMovie(arg.title, arg.score),
  },
};

export default resolver;
