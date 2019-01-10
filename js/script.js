var formSearch = document.querySelector(".search-form");
var btnSearch = document.getElementById("btn-search");


if (formSearch) {
formSearch.classList.add("js-form-close");
}

if (btnSearch) {
btnSearch.addEventListener("click", function(event) {
  formSearch.classList.toggle("js-form-close");
  formSearch.classList.toggle("js-form-show");
});
}
