let urlString = window.location.search;
let urlParams = new URLSearchParams(urlString);
let paperVisited = Number(urlParams.get('paperVisited')) + 1; //(this one)


