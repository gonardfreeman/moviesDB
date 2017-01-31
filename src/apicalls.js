import $ from "jquery";

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=e799089334404d9cdcbb3f3883b6f0c0",
  "method": "GET",
  "headers": {},
  "data": "{}"
}
export const movies = $.ajax(settings).done(function (response) {
  return response;
});
