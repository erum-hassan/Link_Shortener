const shortbtn = document.getElementById("short-btn");
const reloadbtn = document.getElementById("reload-btn");
const shortenedtextarea = document.getElementById("shortenedtext");
const shorturltext = document.getElementById("shorturl");

shortbtn.addEventListener("click", shortenedurl);
reloadbtn.addEventListener("click", reload);

function reload() {
	shorturltext.value = " ";
	shortenedtextarea.value = "";
}

async function shortenedurl() {
	var originalurl = document.getElementById("shorturl").value;

	try {
		const result = await fetch(
			`https://api.shrtco.de/v2/shorten?url=${originalurl}`
		);
		const data = await result.json();
		shortenedtextarea.value = data.result.short_link3;
	} catch (e) {
		shortenedtextarea.value = `Error : link cannot be shortened`;
	}
}
