import axios from "axios";

export default axios.create({
  baseURL:
   "https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-sicmr/endpoint/",
    // "http://localhost:5000/api/v1/restaurants/",
  headers: {
    "Content-type": "application/json",
  },
});
