import axios from "axios";

export function getPosts() {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts", {
      params: { _sort: "title" },
    })
    .then((res) => res.data);
}

export function getPost(id) {
  return axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.data);
}
