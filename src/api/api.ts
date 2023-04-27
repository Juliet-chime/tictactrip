import axios from 'axios';

export const apiRequest = (
  url: string,
  type: string,
  data: any,
  noStringify = false
) => {
  const baseUrl: string = (process.env.REACT_APP_BASE_URL as string);
  const API_URL = `${baseUrl}${url}`;
  let bodyData;
  let service: any;
  let config;

  bodyData = noStringify ? JSON.stringify(data) : data;

  config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'Application/json',
    },
  }

  if (type.toLowerCase() === 'get') {
    service = axios.get(API_URL, config);
    return service
      .then((res: any) => {
        return service;
      })
      .catch((err: any) => {
        if (err.request) {
          return service;
        }
        if (err.respond) {
          return service;
        }
        return service;
      });
  } else if (type.toLowerCase() === 'post') {
    service = axios.post(API_URL, bodyData, config);
    return service
      .then((res: any) => {
        return service;
      })
      .catch((err: any) => {
        if (err.request) {
          return service;
        }
        if (err.respond) {
          return service;
        }
        return service;
      });
  } else if (type.toLowerCase() === 'delete') {
    service = axios.delete(API_URL, config);
    return service
      .then((res: any) => {
        return service;
      })
      .catch((err: any) => {
        if (err.request) {
          return service;
        }
        if (err.respond) {
          return service;
        }
        return service;
      });
  } else if (type.toLowerCase() === 'put') {
    service = axios.put(API_URL, bodyData, config);
    return service
      .then((res: any) => {
        return service;
      })
      .catch((err: any) => {
        if (err.request) {
          return service;
        }
        if (err.respond) {
          return service;
        }
        return service;
      });
  }
};