function parseLink(markdown) {
		const startTitle = markdown.indexOf("[")+1;
		const endTitle = markdown.indexOf("]");
		const startLink = markdown.indexOf("(")+1;
		const endLink = markdown.indexOf(")");

  // return markdown;
		return `<a href="${markdown.slice(startLink, endLink)}">${markdown.slice(startTitle, endTitle)}</a>`
}

parseLink("[freeCodeCamp](https://freecodecamp.org/)")