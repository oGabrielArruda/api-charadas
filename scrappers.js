const puppeteer = require('puppeteer');

async function scrape(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const totalPages = 133;
    const questsPerPage = 30;

    for(let i = 1; i <= totalPages; i++) {
        await page.goto(url + `/pagina${i}.html`);
    
        for(let j = 1; j <= questsPerPage; j++) 
        {
            const rawQuest = await page.$x(`//*[@id="main"]/article[${j}]/div/div/div[2]/div/div[1]`);
            const rawAnswer = await page.$x(`//*[@id="main"]/article[${j}]/div/div/div[2]/div/div[2]/span`);
        
            const questObject = await rawQuest[0].getProperty('textContent');
            const answerObject = await rawAnswer[0].getProperty('textContent');
            console.log(questObject._remoteObject.value);
            console.log(answerObject._remoteObject.value);     
        }
    }
    browser.close();
}
scrape('https://www.osvigaristas.com.br/charadas')