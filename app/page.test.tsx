import { test, expect } from '@playwright/test';

test.describe('Home', () => {
    test('renders the navigation bar', async ({ page }) => {
        await page.goto('localhost:3000/');
        const navElement = await page.getByRole('navigation');
        expect(navElement).toBeTruthy();
    });

    test('renders the main section with welcome text', async ({ page }) => {
        await page.goto('localhost:3000/');
        const welcomeText = await page.getByText(/Witaj w aplikacji/i);
        expect(welcomeText).toBeTruthy();
    });

    test('renders the test component', async ({ page }) => {
        await page.goto('localhost:3000/');
        const testComponentText = await page.getByText(/Testowy komponent/i);
        expect(testComponentText).toBeTruthy();
    });

    test('renders the footer with social media links', async ({ page }) => {
        await page.goto('localhost:3000/');
        const facebookLink = await page.getByText(/Facebook/i);
        const twitterLink = await page.getByText(/Twitter/i);
        const instagramLink = await page.getByText(/Instagram/i);
        expect(facebookLink).toBeTruthy();
        expect(twitterLink).toBeTruthy();
        expect(instagramLink).toBeTruthy();
    });
});