import axios from 'axios';

let base = 'http://192.168.0.135:3000/api';

let v = window.v;
console.log(v,window.v)
export const requestLogin = params => {
  console.log(v)
  return v.post(`${base}/login`, params).then(res => res.data);
};
