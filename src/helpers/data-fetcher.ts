import * as rm from 'typed-rest-client/RestClient';
export async function fetchFromApi(api: string, route: string) {
  const rest = new rm.RestClient('coding-challeng', api);
  const response: rm.IRestResponse<any> = await rest.get(route);
  return response.result;
}
