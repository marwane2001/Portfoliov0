#!/usr/bin/env python3
"""
Convert HTML resume to PDF
"""

try:
    from weasyprint import HTML
    import sys
    import os

    # Get the HTML file path
    html_file = "Marwane_Skaro_Resume-en.html"
    output_file = "Marwane_Skaro_Resume-en.pdf"

    if not os.path.exists(html_file):
        print(f"Error: {html_file} not found!")
        sys.exit(1)

    print(f"Converting {html_file} to PDF...")
    
    # Convert HTML to PDF
    HTML(filename=html_file).write_pdf(
        output_file,
        presentational_hints=True,
        optimize_images=True
    )
    
    print(f"✅ PDF created successfully: {output_file}")
    print(f"📄 Location: {os.path.abspath(output_file)}")

except ImportError:
    print("weasyprint is not installed.")
    print("Installing weasyprint...")
    import subprocess
    import sys
    
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "weasyprint"])
        print("weasyprint installed successfully!")
        print("Please run this script again to convert to PDF.")
    except Exception as e:
        print(f"Error installing weasyprint: {e}")
        print("\nAlternative: Open the HTML file in a browser and use Print to PDF (Ctrl+P)")
        sys.exit(1)

except Exception as e:
    print(f"Error converting to PDF: {e}")
    print("\nAlternative method:")
    print("1. Open Marwane_Skaro_Resume-en.html in your browser")
    print("2. Press Ctrl+P")
    print("3. Select 'Save as PDF'")
    print("4. Enable 'Background graphics'")
    print("5. Set margins to 'None'")
    print("6. Click Save")
    sys.exit(1)

