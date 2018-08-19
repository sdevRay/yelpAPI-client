export const environment = {
  production: true
};

export let baseURL = "";

switch (window.location.hostname) {
  case "rch-yelpapi-client.herokuapp.com":
    baseURL = "https://rch-yelpapi-client.herokuapp.com"
    break;

  default:
    baseURL = "http://localhost:3000"
}
