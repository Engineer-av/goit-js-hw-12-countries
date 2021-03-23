import "./styles.css";
import _debounce from "lodash.debounce";
import refs from "./js/refs/index.js";
import render from "./js/render.js";

const { inputRef, searchListRef, uniqueResultRef } = refs;

inputRef.addEventListener(
  "input",
  _debounce(event => {
    if (event.target.value) {
      searchListRef.innerHTML = "";
      uniqueResultRef.innerHTML = "";
      render(event.target.value);
    }
  }, 500)
);

// render("polan");
