import axios from "axios";

const request = axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
  headers: {
    Authorization: "joice-santos-alves"
  }
}
);
request.then((resposta) => {
  console.log(resposta.data.result)
})