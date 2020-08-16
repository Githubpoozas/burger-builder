import axios from "axios"

const instance = axios.create({
  baseURL: "https://burger-builder-8a9d3.firebaseio.com/",
})

export default instance
