const form = document.getElementById("Inquiry");


document.getElementById("myImage").onclick = function() {
    window.open("https://www.facebook.com/carlanthony.talaboc/", "_blank"); 

  }

 form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const question = document.getElementById("question").value;

    document.getElementById("responseMessage").innerHTML = 
      "Thank you, <b>" + name + "</b>!<br>" +
      "We received your question: <i>\"" + question + "\"</i><br>" +
      "We'll reply to you at " + email + "</b> soon.";

    form.reset();
  });
  
  function showTime() {
  document.getElementById("time").innerText = new Date().toLocaleTimeString();
}

function randomNumber() {
  document.getElementById("number").innerText = 
    Math.floor(Math.random() * 100);
}

function goTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
window.onscroll = function() {
	  let btn = document.getElementById("goTopBtn");
	  if (document.documentElement.scrollTop > 200) {
		btn.style.display = "block";
	  } else {
		btn.style.display = "none";
	  }
};


