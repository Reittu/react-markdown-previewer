const initialMD = `
# Header
## Subheader
  
**Bold text**, _italic text_.
**_Bold and italic_**
~~Cross through~~.

Inline code, \`<div></div>\`.

Links... [links](https://www.freecodecamp.com), and
> Block Quotes

\`\`\`
// Code blocks...
function add(a,b) {
  return a + b;
}
\`\`\`

Tables:

First Header | Second Header | Third Header
------------ | ------------- | ------------- 
R1C1 | R1C2 | R1C3
R2C1 | R2C2 | R2C3

- Lists...
  * Indentation levels
     - Dash or asterisk

1. Numbered lists.
1. Second item
1. Third item...

![React Logo w/ Text](https://goo.gl/Umyytc)

`

export default initialMD;