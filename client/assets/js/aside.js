const headings = [...document.getElementsByTagName("h2")];
const navigator = document.getElementById("navigation");

const listEl = document.createElement("li");
const anchorEl = document.createElement("a");

headings.forEach((heading) => {
  const list = listEl.cloneNode();
  const anchor = anchorEl.cloneNode();
  const headTitle = heading.innerText;
  heading.id = encodeURI(headTitle);
  anchor.innerText = headTitle;
  anchor.href = `#${heading.id}`;

  list.appendChild(anchor);
  navigator.appendChild(list);
});