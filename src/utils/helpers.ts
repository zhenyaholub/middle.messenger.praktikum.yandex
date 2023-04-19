import { ROUTES } from "./routes";
import { SERVER_ERROR } from "./urls";
import { EDIT_PROFILE } from "./urls";
import { EDIT_PASSWORD } from "./urls";
import { PROFILE } from "./urls";
import { NOT_FOUND } from "./urls";
import { SIGN_UP } from "./urls";
import { SIGN_IN } from "./urls";

export function renderPage() {
  const root = document.querySelector("#app");

  root!.innerHTML = "";

  const page = ROUTES[location.pathname as keyof typeof ROUTES];

  root!.appendChild(page.getContent()!);

  page.dispatchComponentDidMount();

  return root;
}

export function push(url: string) {
  history.pushState({}, "", url);

  window.dispatchEvent(new Event("popstate"));
}

export function setBodyStyles() {
  let body = document.body;
  body.className = "";

  switch (location.pathname) {
    case SIGN_IN:
      body.classList.add("flexCenter", "padding");
      break;
    case SIGN_UP:
      body.classList.add("flexCenter", "padding");
      break;
    case NOT_FOUND:
      body.classList.add("flexCenter", "padding");
      break;
    case SERVER_ERROR:
      body.classList.add("flexCenter", "padding");
      break;
    case PROFILE:
      body.classList.add("profileBody", "padding2");
      break;
    case PROFILE:
      body.classList.add("profileBody", "padding2");
      break;
    case EDIT_PROFILE:
      body.classList.add("profileBody", "padding2");
      break;
    case EDIT_PASSWORD:
      body.classList.add("profileBody", "padding2");
      break;
    case EDIT_PASSWORD:
      body.classList.add("profileBody", "padding2");
      break;
    default:
      break;
  }
}

export function queryStringify(data: object) {
  let query = "?";
  let entries = Object.entries(data);
  entries.forEach(([key, value], index, array) => {
    const isLast = index === array.length - 1;
    query += `${key}=${value}${!isLast ? "&" : ""}`;
  });
  return query;
}
