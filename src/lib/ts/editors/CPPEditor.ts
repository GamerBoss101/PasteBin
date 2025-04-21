import { oneDark } from "$lib/ts/EditorTheme";

import { EditorView, basicSetup } from "codemirror";
import { keymap } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { indentWithTab } from "@codemirror/commands"

import { cpp } from "@codemirror/lang-cpp";

export default class CPPEditor extends EditorView {
    constructor(props: any) {
        super({
            parent: props.parent,
            state : EditorState.create({
                doc: props.code ? props.code : '\n\n\n\n',
                extensions: [ basicSetup, keymap.of([indentWithTab]), oneDark, cpp()],
            })
        });
    }
    public getCode() {
        return this.state.doc.toString();
    }
}
