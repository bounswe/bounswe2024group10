import axios from "axios";

export async function mockRequest() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/"
  );
  return response;
}