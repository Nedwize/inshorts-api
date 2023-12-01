const cheerio = require('cheerio');
const fetch = require('node-fetch');

function get(options, callback) {
	var flag = 0;

	const URL = `https://inshorts.com/${options.lang}/read/${options.category}`;

	return fetch(URL).then(response => response.text()).then(body => {
		const news = [];
		const $ = cheerio.load(body);

		// console.log($('body > div > div  div[itemscope]').length);

		$('body > div > div  div[itemscope]').each((i, element) => {
			const $element = $(element);

			const $title = $element.find('span[itemprop=headline]');
			const title = $title.text();

			const $author = $element.find('div div span.author');
			const author = $author.text();

			const $time = $element.find('span[itemprop="datePublished"]');
			const time = $time.text();

			const $date = $element.find('span[clas="date"]');
			// const date = $date.children().last().text();
			const date = $date.text();

			const createdAt = `${time} ${date}`;

			const $content = $element.find('div[itemprop="articleBody"]');
			let content = $content.text();
			// content = content.substring(0, content.indexOf('\n'));

			const info = {
				title: title,
				author: author,
				content: content,
				postedAt: createdAt,
				sourceURL: URL
			}
			news.push(info);

			if ((i + 1) == options.numOfResults) {
				callback(news);
				flag = 1;
			}
		});
		if (!flag) {
			callback(news);
		}
		if (news.length < 1) {
			callback({
				errorText: 'No data was returned. Check options object.'
			});
		}
	}).catch(err => {
		callback(err);
	})
};

module.exports.get = get;
