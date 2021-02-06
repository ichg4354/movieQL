import db from "./db";

const resolver = {
  Query: {
    people: () => db,
    person: (_, arg) => getPersonById(arg.id),
  },
};

const getPersonById = (id) => {
  const selected = db.filter((person) => person.id === id);
  return selected[0];
};

export default resolver;
