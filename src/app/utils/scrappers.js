const puppeteer = require('puppeteer');

const consts = require('../utils/consts');

async function scrape(url = consts.DEFAULT_URL_PTBR) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const { TOTAL_PAGES, QUESTS_PER_PAGE } = consts;

    let content = [];
    for(let i = 1; i <= TOTAL_PAGES; i++) {
        await page.goto(url + `/pagina${i}.html`);

        console.log(`pagina ${i}`);
    
        for(let j = 1; j <= QUESTS_PER_PAGE; j++) 
        {
            const rawQuest = await page.$x(`//*[@id="main"]/article[${j}]/div/div/div[2]/div/div[1]`);
            const rawAnswer = await page.$x(`//*[@id="main"]/article[${j}]/div/div/div[2]/div/div[2]/span`);
        
            const questObject = await rawQuest[0].getProperty('textContent');
            const answerObject = await rawAnswer[0].getProperty('textContent');

            content.push({ question: questObject._remoteObject.value, answer: answerObject._remoteObject.value, lang: 'ptbr' });
        }
    }
    browser.close();

    return content;
}

module.exports = scrape;