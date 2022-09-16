function paste() {
  navigator.clipboard.readText().then((text) => {
    document.getElementById("url").value = text;
    ScrapeSyllabus(text);
  });
}

async function ScrapeSyllabus(url) {
  document.getElementById("result").innerHTML = await eel.CallScrapeSyllabus(
    url
  )();
  navigator.clipboard.writeText(document.getElementById("result").innerHTML);
  document.getElementById("message").style.visibility = "visible";
  setTimeout(() => {
    document.getElementById("url").value = "";
    document.getElementById("message").style.visibility = "hidden";
    document.getElementById("result").innerHTML = "";
  }, 5000);
}

async function QuitDriver() {
  await eel.CallQuitDriver()();
  window.open("", "_self").close();
}
