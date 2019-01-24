const apiUrl = 'https://stjxo8vo34.execute-api.eu-west-1.amazonaws.com';
const envPrefix = '/prod';

interface Endpoints {
  [key: string]: string;
}

const ENDPOINTS: Endpoints = {
  'flightSearch': '/flight-search/1.2/'
};

export const getApiUrl = (endpoint: string, uuid: string) => {
  return apiUrl + envPrefix + ENDPOINTS[endpoint] + uuid;
};
