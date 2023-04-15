import { ROUTES } from "./routes";
import { SERVER_ERROR } from "./urls";
import { EDIT_PROFILE } from "./urls";
import { CHATS } from "./urls";
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
      body.classList.add("flex-center", "padding");
      break;
    case SIGN_UP:
      body.classList.add("flex-center", "padding");
      break;
    case NOT_FOUND:
      body.classList.add("flex-center", "padding");
      break;
    case SERVER_ERROR:
      body.classList.add("flex-center", "padding");
      break;
    case PROFILE:
      body.classList.add("profile_body", "padding2");
      break;
    case PROFILE:
      body.classList.add("profile_body", "padding2");
      break;
    case EDIT_PROFILE:
      body.classList.add("profile_body", "padding2");
      break;
    case EDIT_PASSWORD:
      body.classList.add("profile_body", "padding2");
      break;
    case EDIT_PASSWORD:
      body.classList.add("profile_body", "padding2");
      break;
    case CHATS:
      body.classList.add("flex", "overflow-x-hidden");
      break;
    default:
      break;
  }
}
