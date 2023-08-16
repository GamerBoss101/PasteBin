// @ts-nocheck
import { oneDark } from "$lib/ts/EditorTheme.js";

import { EditorView, basicSetup } from "codemirror";
import { keymap } from "@codemirror/view";
import { EditorState, StateEffect } from "@codemirror/state";
import { indentWithTab } from "@codemirror/commands"

import { python } from "@codemirror/lang-python";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { php } from "@codemirror/lang-php";
import { cpp } from "@codemirror/lang-cpp";

import { xml } from "@codemirror/lang-xml";
import { markdown } from "@codemirror/lang-markdown";
import { json } from "@codemirror/lang-json";

export default class Editor extends EditorView {
    constructor(props) {
        super({
            parent: props.parent,
            state : EditorState.create({
                doc: '\n\n\n\n',
                extensions: [ basicSetup, keymap.of([indentWithTab]), oneDark],
            })
        });
        this.setLanguage(props.language);
    }
    public setLanguage(language) {
        switch (language) {
            case "2": {
                this.dispatch({
                    effects: StateEffect.appendConfig.of([
                        html(),
                    ])
                });
                break;
            }
            case "3": {
                this.dispatch({
                    effects: StateEffect.appendConfig.of([
                        css(),
                    ])
                });
                break;
            }
            case "4": {
                this.dispatch({
                    effects: StateEffect.appendConfig.of([
                        javascript(),
                    ])
                });
                break;
            }
            case "5": {
                this.dispatch({
                    effects: StateEffect.appendConfig.of([
                        php(),
                    ])
                });
                break;
            }
            case "6": {
                this.dispatch({
                    effects: StateEffect.appendConfig.of([
                        python(),
                    ])
                });
                break;
            }
            case "7": {
                this.dispatch({
                    effects: StateEffect.appendConfig.of([
                        cpp(),
                    ])
                });
                break;
            }
        }
    }
    public getCode() {
        return this.state.doc.toString();
    }
}