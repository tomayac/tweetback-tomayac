let data = {
	username: "tomayac", // No leading @ here
	homeLabel: "Thomas Steiner",
	homeUrl: "https://blog.tomayac.com",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;