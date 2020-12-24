//when called using Object.entries the index 0 is the name of the language the index 1 contains  the repository object
export function compareRepositories(object1, object2, key) {
  const obj1 = object1[1][key];
  const obj2 = object2[1][key];
  return obj1 > obj2 ? 1 : obj1 < obj2 ? -1 : 0;
}
