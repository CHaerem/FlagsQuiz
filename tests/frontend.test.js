const puppeteer = require('puppeteer');

describe('Frontend Visual Tests', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:8080'); // Adjust the URL to your local server
    });

    afterAll(async () => {
        await browser.close();
    });

    test('Game container is displayed', async () => {
        const gameContainer = await page.$('#game-container');
        expect(gameContainer).not.toBeNull();
    });

    test('Start menu is displayed initially', async () => {
        const startMenu = await page.$('#start-menu');
        expect(startMenu).not.toBeNull();
        const startMenuDisplay = await page.evaluate(() => {
            return window.getComputedStyle(document.getElementById('start-menu')).display;
        });
        expect(startMenuDisplay).toBe('flex');
    });

    test('Game over screen is hidden initially', async () => {
        const gameOverScreen = await page.$('#game-over');
        expect(gameOverScreen).not.toBeNull();
        const gameOverScreenDisplay = await page.evaluate(() => {
            return window.getComputedStyle(document.getElementById('game-over')).display;
        });
        expect(gameOverScreenDisplay).toBe('none');
    });

    test('Flag container is displayed', async () => {
        const flagContainer = await page.$('#flag-container');
        expect(flagContainer).not.toBeNull();
    });

    test('Options are displayed', async () => {
        const options = await page.$$('#options .option');
        expect(options.length).toBe(4);
    });
});
