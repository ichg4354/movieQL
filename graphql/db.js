let db = [
  {
    id: 1,
    title: "Pirate",
    score: 21,
  },
  {
    id: 2,
    title: "of",
    score: 28,
  },
  {
    id: 3,
    title: "the",
    score: 15,
  },
  {
    id: 4,
    title: "Carribian",
    score: 12,
  },
  {
    id: 5,
    title: "what",
    score: 23,
  },
  {
    id: 6,
    title: "da fuq",
    score: 11,
  },
];

export const getMovies = () => db;

export const getById = (id) => {
  const Selected = db.filter((person) => person.id === id);
  return Selected[0];
};

export const removeById = (id) => {
  const Cleaned = db.filter((person) => person.id !== id);
  if (db.length > Cleaned.length) {
    db = Cleaned;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (title, score) => {
  const newMovie = {
    id: db.length + 1,
    title: title,
    score: score,
  };
  db.push(newMovie);
  return db;
};

export default db;
