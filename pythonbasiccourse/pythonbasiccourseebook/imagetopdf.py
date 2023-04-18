'''
# make a one page PDF with the cover image
from PIL import Image

im = Image.open("pythonebookcover.png")

pdf_path = "img.pdf"
    
im.save(pdf_path, "PDF", resolution=300.0) # resolution ignored by dpi. DPI in inches (A4)

'''
# Once the PDF with the cover image is set, makes the whole PDF with the contents
from PyPDF2 import PdfReader, PdfWriter

output = PdfWriter()
pdfOne = PdfReader(open("img.pdf", "rb"))
pdfTwo = PdfReader(open("pythonbasiccourse.pdf", "rb"))

output.add_page(pdfOne.pages[0])
for page in pdfTwo.pages:
    output.add_page(page)

outputStream = open(r"output.pdf", "wb")
output.write(outputStream)
outputStream.close()
