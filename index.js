function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  //pulls target class out of nested id
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  const rankedListElements = document.querySelectorAll(".ranked-list > li");

  for (let i = 0; i < rankedListElements.length; i++) {
    rankedListElements[i].innerHTML =
      parseInt(rankedListElements[i].innerHTML) + n;
  }
}

function deepestChild() {
  const depth = document.getElementById("grand-node").querySelectorAll("div")
    .length;
  //document.querySelectorAll('#grand-node div') returns all of the divs, set this to a const
  const grandChildren = document.querySelectorAll("#grand-node div");

  // use depth - 1 to grab the div at that index in the const made above
  return grandChildren[depth - 1];
}
