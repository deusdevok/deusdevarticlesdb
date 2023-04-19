# This code example demonstrates how to convert a Markdoen file to a PDF document.
import aspose.words as aw

# Load an existing Markdown document
doc = aw.Document("pythonbasiccourse.md")

# Save the document as PDF
doc.save(f"testingnew.pdf")