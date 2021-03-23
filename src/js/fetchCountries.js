import error from "./pnotify.js";
import settings from "./settings/index.js";

const { BASE_URL } = settings;
export default function fetchCountries(searchQuery) {
  return fetch(`${BASE_URL}/${searchQuery}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(response.statusText);
    })
    .then(data => {
      return data;
    });
}
