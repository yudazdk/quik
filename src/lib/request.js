import axios from "axios";
import mocks from "./mocks";


export default function fetchData() {
  const url = `https://dev2.bringbring.com/api/product/filter`;
  return axios.post(url).then((res) => res.data)
  .catch(() => mocks.CallJson)
}