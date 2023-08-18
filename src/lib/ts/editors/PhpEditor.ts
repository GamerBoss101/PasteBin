import { oneDark } from "$lib/ts/EditorTheme.js";

import { EditorView, basicSetup } from "codemirror";
import { keymap } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { indentWithTab } from "@codemirror/commands";

import { php } from "@codemirror/lang-php";

export default class PhpEditor extends EditorView {
    constructor(props: any) {
        super({
            parent: props.parent,
            state : EditorState.create({
                doc: props.code ? props.code : '\n\n\n\n',
                extensions: [ basicSetup, keymap.of([indentWithTab]), oneDark, php() ],
            })
        });
    }
    public getCode() {
        return this.state.doc.toString();
    }
}
