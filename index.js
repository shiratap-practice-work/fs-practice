const fs = require('fs');
const superagent = require('superagent');

const fetch = async () => {
	return await superagent.get(`https://swapi.dev/api/people/1`);
};

fs.writeFile('./test.txt', JSON.stringify(fetch()), (e) => {
	if (e) console.log(e);
});
