# Convert Resume to PDF

I've created a professional resume HTML file (`resume.html`). Here's how to convert it to PDF:

## Method 1: Using Browser (Easiest)

1. **Open the resume:**
   - Double-click `resume.html` or open it in any browser

2. **Print to PDF:**
   - Press `Ctrl + P` (Windows) or `Cmd + P` (Mac)
   - Select **"Save as PDF"** or **"Microsoft Print to PDF"** as the printer
   - Click **"Save"**
   - Choose location and name it `Marwane_Skaro_Resume.pdf`

3. **Settings:**
   - Make sure **"More settings"** is expanded
   - Set **Margins** to "None" or "Minimum"
   - Check **"Background graphics"** to include colors
   - Click **"Save"**

## Method 2: Using Online Tools

1. Go to: https://www.sejda.com/html-to-pdf
   OR
   https://html2pdf.com/

2. Upload `resume.html`
3. Click "Convert"
4. Download the PDF

## Method 3: Using Node.js (if installed)

```bash
npm install -g puppeteer
node convert-pdf.js
```

Or use html-pdf:
```bash
npm install -g html-pdf
html-pdf resume.html resume.pdf
```

## Method 4: Using Python (if installed)

```bash
pip install weasyprint
weasyprint resume.html Marwane_Skaro_Resume.pdf
```

---

The resume is already formatted for A4 paper size and will look professional when converted to PDF.

