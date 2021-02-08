import axios from "axios";
import dotenv from "dotenv";
import resolver from "./resolver";

dotenv.config();

export const getMovie = async () => {
  try {
    const {
      data: { results },
    } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIEDB_KEY}&language=en-US&page=1`
    );
    return results;
  } catch (error) {
    console.error;
  }
};
