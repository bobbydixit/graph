import apiClient from './axios';
export const routes = {
  getUsage: `/data/adrequests`
};
export function getUsage(params) {
  return apiClient(routes.getUsage, 'get', params);
}
