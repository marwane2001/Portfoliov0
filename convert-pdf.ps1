# PowerShell script to convert HTML to PDF using browser
# This script opens the HTML file and provides instructions

$htmlFile = "Marwane_Skaro_Resume-en.html"
$pdfFile = "Marwane_Skaro_Resume-en.pdf"

Write-Host "Opening resume in browser for PDF conversion..." -ForegroundColor Green
Write-Host ""
Write-Host "INSTRUCTIONS:" -ForegroundColor Yellow
Write-Host "1. Press Ctrl+P when the browser opens"
Write-Host "2. Select 'Save as PDF' or 'Microsoft Print to PDF'"
Write-Host "3. Enable 'Background graphics' (to show colors)"
Write-Host "4. Set Margins to 'None' or 'Minimum'"
Write-Host "5. Click 'Save'"
Write-Host "6. Save as: Marwane_Skaro_Resume-en.pdf in Downloads folder"
Write-Host ""
Write-Host "Opening file..." -ForegroundColor Cyan

Start-Process $htmlFile

Write-Host ""
Write-Host "File opened! Follow the instructions above to convert to PDF." -ForegroundColor Green

