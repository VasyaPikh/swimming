function send() {
  let x = document.getElementById("myText")
  document.getElementById("demo").innerHTML = x.value
  x.value = ""
}

function setData () {
  let now = new Date().toLocaleString();
  const click = document.getElementById('time-new');
  }