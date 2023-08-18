import { oneDark } from "$lib/ts/EditorTheme.js";

import { EditorView, basicSetup } from "codemirror";
import { keymap } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { indentWithTab } from "@codemirror/commands";

import { sass } from "@codemirror/lang-sass";

export default class SassEditor extends EditorView {
    constructor(props: any) {
        super({
            parent: props.parent,
            state : EditorState.create({
                doc: props.code ? props.code : '\n\n\n\n',
                extensions: [ basicSetup, keymap.of([indentWithTab]), oneDark, sass() ],
            })
        });
    }
    public getCode() {
        return this.state.doc.toString();
    }
}
