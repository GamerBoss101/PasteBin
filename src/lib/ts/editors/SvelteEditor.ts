import { oneDark } from "$lib/ts/EditorTheme";

import { EditorView, basicSetup } from "codemirror";
import { keymap } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { indentWithTab } from "@codemirror/commands";

import { svelte } from "@replit/codemirror-lang-svelte";

export default class SvelteEditor extends EditorView {
    constructor(props: any) {
        super({
            parent: props.parent,
            state : EditorState.create({
                doc: props.code ? props.code : '\n\n\n\n',
                extensions: [ basicSetup, keymap.of([indentWithTab]), oneDark, svelte() ],
            })
        });
    }
    public getCode() {
        return this.state.doc.toString();
    }
}
