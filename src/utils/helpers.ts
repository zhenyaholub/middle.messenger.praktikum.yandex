import { ROUTES } from "./routes";

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
