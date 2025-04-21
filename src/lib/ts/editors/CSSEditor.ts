import { oneDark } from "$lib/ts/EditorTheme";

import { EditorView, basicSetup } from "codemirror";
import { keymap } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { indentWithTab } from "@codemirror/commands";

import { css } from "@codemirror/lang-css";

export default class CSSEditor extends EditorView {
    constructor(props: any) {
        super({
            parent: props.parent,
            state : EditorState.create({
                doc: props.code ? props.code : '\n\n\n\n',
                extensions: [ basicSetup, keymap.of([indentWithTab]), oneDark, css() ],
            })
        });
    }
    public getCode() {
        return this.state.doc.toString();
    }
}
