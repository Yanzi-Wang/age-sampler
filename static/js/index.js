document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("copy-bibtex");
  if (btn) {
    btn.addEventListener("click", function () {
      var text = document.getElementById("bibtex").innerText;
      navigator.clipboard.writeText(text).then(function () {
        var old = btn.textContent;
        btn.textContent = "Copied!";
        setTimeout(function () { btn.textContent = old; }, 1500);
      });
    });
  }
});
