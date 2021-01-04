export function compareObjectsByKey(object1, object2, key) {
  // eslint-disable-next-line prettier/prettier
  return object1[key] > object2[key] ? 1 : (object1[key] < object2[key] ? -1 : 0);
}
