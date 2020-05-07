const cheerio = require('cheerio');
const fetch = require('node-fetch');



function get(category,lang, callback){

	const URL = `https://inshorts.com/${lang}/read/${category}`;

	return fetch(URL)
	.then(response => response.text())
	.then(body=>{
		// console.log(body);
		const news = [];
		const $ = cheerio.load(body);
		$('.news-card').each((i, element)=>{
			const $element = $(element);

			const $title = $element.find('div.news-card-title a.clickable span');
			const title = $title.text();

			const $author = $element.find('div.news-card-title div.news-card-author-time span.author');
			const author = $author.text();

			const $time = $element.find('div.news-card-title div.news-card-author-time span.time');
			const time = $time.text();

			const $date = $element.find('div.news-card-author-time');
			const date = $date.children().last().text();

			const createdAt = `${time} ${date}`;

			const $content = $element.find('div.news-card-content div');
			let content = $content.text();
				content = content.substring(0, content.indexOf('\n'));

			const info = {
				title: $title.text(),
				author: $author.text(),
				content: content,
				postedAt: createdAt
			}
			news.push(info);
		});

		callback(news);
	});
};

module.exports.get = get;
	