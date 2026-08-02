import sys

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the marker where the old JS content starts
marker = '/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n       1. PANEL DATA'

idx = content.find(marker)
if idx == -1:
    # Try alternate: const PANELS
    idx = content.find('const PANELS =')
    if idx == -1:
        print("ERROR: Could not find insertion point")
        sys.exit(1)

# Find the line start before the marker
line_start = content.rfind('\n', 0, idx) + 1

# Get everything before the JS content (HTML + imports)
top_part = content[:line_start]

# Read the new JS content
with open('new_content.js', 'r', encoding='utf-8') as f:
    new_content = f.read()

# Write the final file
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(top_part)
    f.write(new_content)
    f.write('\n</script>\n</body>\n</html>\n')

print("Patch applied successfully")
