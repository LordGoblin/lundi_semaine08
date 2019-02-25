var compteur_footer = 0;
var compteur_nav = 0;

document.getElementsByClassName("btn-primary")[0].removeAttribute("href");

document.querySelector("footer").addEventListener("click", function(){
	compteur_footer++;
	console.log("click" + " " + compteur_footer)
});

document.querySelector(".navbar-toggler").addEventListener("click", function(){
	document.querySelector("#navbarHeader").classList.toggle("collapse")
});

document.getElementsByClassName("col-md-4")[0].getElementsByClassName("btn-group")[0].getElementsByClassName("btn-outline-secondary")[0].addEventListener("click", function(){
	document.getElementsByClassName("col-md-4")[0].getElementsByClassName("card-text")[0].style.color ="red";
});

document.getElementsByClassName("col-md-4")[1].getElementsByClassName("btn-group")[0].getElementsByClassName("btn-outline-secondary")[0].addEventListener("click", function(){
	
	if(document.getElementsByClassName("col-md-4")[1].getElementsByClassName("card-text")[0].style.color === "green") {
		document.getElementsByClassName("col-md-4")[1].getElementsByClassName("card-text")[0].style.color ="";
	} else {
		document.getElementsByClassName("col-md-4")[1].getElementsByClassName("card-text")[0].style.color ="green";
	}
});

document.querySelector("header").addEventListener("click", function(){
	compteur_nav++;
	if (compteur_nav >= 2 && document.querySelector("link").disabled === false) {
		console.log("coucou")
		console.log(document.querySelector("link"))
		document.querySelector("link").disabled = true;
	} else {
		document.querySelector("link").disabled = false;	
	}
});



for (let i = 0; i < document.getElementsByClassName("col-md-4").length; i++) {
	document.getElementsByClassName("col-md-4")[i].getElementsByClassName("btn-group")[0].getElementsByClassName("btn-success")[0].addEventListener("mouseover", function(){
		if(document.getElementsByClassName("card-img-top")[i].style.width === "20%") {
			document.getElementsByClassName("card-img-top")[i].style.width ="100%"
			document.getElementsByClassName("card-text")[i].classList.toggle("collapse")
			document.getElementsByClassName("col-md-4")[i].getElementsByClassName("text-muted")[0].classList.toggle("collapse")
			//document.getElementsByClassName("col-md-4")[i].style.height ="auto"
		} else {
			document.getElementsByClassName("card-img-top")[i].style.width ="20%"
			document.getElementsByClassName("card-text")[i].classList.toggle("collapse")
			document.getElementsByClassName("col-md-4")[i].getElementsByClassName("text-muted")[0].classList.toggle("collapse")
			//document.getElementsByClassName("col-md-4")[i].style.height ="auto"
		}
	});
}

document.getElementsByClassName("btn-secondary")[0].addEventListener("click", function(){
	a = document.getElementsByClassName("col-md-4")[0]
	b = document.getElementsByClassName("col-md-4")[5]
	document.getElementsByClassName("container")[3].getElementsByClassName("row")[0].insertBefore(a,b)
});

document.getElementsByClassName("btn-primary")[0].addEventListener("click", function(){
	a = document.getElementsByClassName("col-md-4")[0]
	b = document.getElementsByClassName("col-md-4")[5]
	document.getElementsByClassName("container")[3].getElementsByClassName("row")[0].insertBefore(b,a)
});

document.addEventListener('keypress', (event) => {
  let nomTouche = event.key;

  if(nomTouche === "a") {
  	console.log(nomTouche)
  	document.querySelector("body").classList.toggle("offset-ml-4")
  	document.querySelector("body").classList.toggle("col-4")

  } else if(nomTouche === "y") {
  	console.log(nomTouche)
  	document.querySelector("body").classList.toggle("offset-md-4")
  	document.querySelector("body").classList.toggle("col-4")

  } else if(nomTouche === "p") {
  	console.log(nomTouche)
  	document.querySelector("body").classList.toggle("offset-md-8")
  	document.querySelector("body").classList.toggle("col-4")

  } else if(nomTouche === "b") {
  	document.querySelector("body").classList.remove("col-4")
  	document.querySelector("body").classList.remove("offset-md-4")
  	document.querySelector("body").classList.remove("offset-md-8")
  }
});