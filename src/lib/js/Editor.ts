// @ts-nocheck
import { oneDark } from "$lib/js/EditorTheme.js";
import { EditorView, basicSetup } from "codemirror";
import { keymap } from "@codemirror/view";
import { indentWithTab } from "@codemirror/commands"

import { python } from "@codemirror/lang-python";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { xml } from "@codemirror/lang-xml";
import { markdown } from "@codemirror/lang-markdown";
import { json } from "@codemirror/lang-json";

export default class Editor extends EditorView {
    constructor(props) {
        super({
            doc: '\n\n\n\n\n\n\n\n\n',
            parent: props.parent,
            extensions: [ basicSetup, keymap.of([indentWithTab]), oneDark],
        });
    }
    setLanguage(language) {
        
    }
    getCode() {
        return this.state.doc.toString();
    }
}
