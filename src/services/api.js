import { create } from 'apisauce';

export default create({
  baseURL: 'https://api.github.com',
  header: {
    Accept: 'application/vnd.github.v3+json',
    'User-Agent': 'TestRN',
  },
});
