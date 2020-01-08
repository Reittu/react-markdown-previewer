import React, { useState } from 'react'
import marked from 'marked';
import CustomAppBar from './CustomAppBar';
import initialMD from '../helpers/initialMD';
const initialHtml = { __html: marked(initialMD) };

marked.setOptions({
    breaks: true
});

// For security reasons the html should be sanitized if client could upload anything to server via textarea.
// This app is purely client side so the sanitization isn't done.
// One good library for sanitization: https://github.com/validatorjs/validator.js

export default function MarkdownPreviewer() {
    const [markdown, setMarkdown] = useState(initialMD);
    const [html, setHtml] = useState(initialHtml);

    const handleChange = e => {
        setMarkdown(e.target.value);
        setHtml({ __html: marked(e.target.value) });
    }

    return (
        <div className="flex-column">
            <CustomAppBar id="content-header" data={{ markdown, html }}>Header</CustomAppBar>
            <div id="content-body">
                <div id="editor-wrapper">
                    <textarea id="editor" value={markdown} onChange={handleChange} ></textarea>
                </div>
                <div id="preview-wrapper">
                    <div id="preview" dangerouslySetInnerHTML={html} className="markdown-body"></div>
                </div>
            </div>
        </div>
    )
}
