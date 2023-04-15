import { renderPage, setBodyStyles } from "./utils/helpers";

window.addEventListener("load", renderPage);
window.addEventListener("popstate", renderPage);
window.addEventListener("load", setBodyStyles);
window.addEventListener("popstate", setBodyStyles);
