import axios, { AxiosError, AxiosResponse } from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api/';

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    console.log('caught by interceptor');
    return Promise.reject(error.response);
  }
);

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: () => {},
  delete: () => {},
};

const Catalog = {
  list: () => requests.get('Product/products'),
  details: (id: number) => requests.get(`Product/product?id=${id}`),
};

const TestErrors = {
  get400Error: () => requests.get('Buggy/bad-request'),
  get401Error: () => requests.get('Buggy/unauthorised'),
  get404Error: () => requests.get('Buggy/not-found'),
  get500Error: () => requests.get('Buggy/server-error'),
  getValidError: () => requests.get('Buggy/validation-error'),
};

const agent = {
  Catalog,
  TestErrors,
};

export default agent;
