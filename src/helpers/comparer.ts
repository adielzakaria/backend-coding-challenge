//when called using Object.entries the index 0 is the name of the language the index 1 contains  the repository object
export function compareObjectsByKey(object1, object2, key) {
  return object1[key] > object2[key] ? 1 : object1[key] < object2[key] ? -1 : 0;
}
