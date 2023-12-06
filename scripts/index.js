var text = document.querySelector("h1").textContent;
var colorChangeEls = [];
for (var i = 0; i < text.length; i++) {
    var span = document.createElement("span");
    span.textContent = text[i];
    span.className = i % 2 === 0 ? "colorChange" : "";
    colorChangeEls.push(span);
}
document.querySelector("h1").textContent = "";
colorChangeEls.forEach(function(el) {
    document.querySelector("h1").appendChild(el);
});