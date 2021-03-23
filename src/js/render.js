import "../styles.css";
import fetchCountries from "./fetchCountries.js";
import refs from "./refs/index.js";
import countriesListTempl from "../templates/countriesList.hbs";
import uniqueCountryTempl from "../templates/uniqueCountry.hbs";
import error from "./pnotify.js";
const { searchListRef, uniqueResultRef } = refs;

export default function render(querySearch) {
  fetchCountries(querySearch)
    .then(data => {
      if (data.length === 1) {
        const markup = uniqueCountryTempl(data);
        console.log(markup);
        return uniqueResultRef.insertAdjacentHTML("beforeend", markup);
      }
      if (data.length <= 10) {
        const markup = countriesListTempl(data);
        return (searchListRef.innerHTML = markup);
      }
      if (data.length) {
        return error();
      }
    })
    .catch(() => alert("Something wrong... Try again!"));
}
