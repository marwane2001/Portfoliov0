// Simple Node.js script to convert HTML to PDF
// Requires: npm install puppeteer

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        
        // Read HTML file
        const htmlPath = path.join(__dirname, 'resume.html');
        const htmlContent = fs.readFileSync(htmlPath, 'utf8');
        
        // Set content
        await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
        
        // Generate PDF
        const pdfPath = path.join(__dirname, 'Marwane_Skaro_Resume.pdf');
        await page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '0',
                right: '0',
                bottom: '0',
                left: '0'
            }
        });
        
        await browser.close();
        console.log('✅ PDF created successfully: Marwane_Skaro_Resume.pdf');
    } catch (error) {
        console.error('❌ Error:', error);
    }
})();

