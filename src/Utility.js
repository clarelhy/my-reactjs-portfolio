export function formUrlWithArgs(queryFields) {
  let result = "/?fields=" + JSON.stringify(queryFields);
  return result;
}
