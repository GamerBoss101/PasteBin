import IconIfy__SvelteComponent_ from "$lib/components/layout/IconIfy.svelte";

export default async(props: any) => {

    let Editor: any = null;

    let lang: string = props.language;
    let code: string = props.code;
    let parent: HTMLDivElement = props.parent;

    if(lang == "txt") Editor = await import("./editors/TxtEditor");
    if(lang == "js") Editor = await import("./editors/JsEditor");
    if(lang == "html") Editor = await import("./editors/HtmlEditor");
    if(lang == "css") Editor = await import("./editors/CSSEditor");
    if(lang == "py") Editor = await import("./editors/PyEditor");
    if(lang == "java") Editor = await import("./editors/JavaEditor");
    if(lang == "cpp") Editor = await import("./editors/CPPEditor");
    if(lang == "php") Editor = await import("./editors/PhpEditor");
    if(lang == "rust") Editor = await import("./editors/RustEditor");
    if(lang == "sass") Editor = await import("./editors/SassEditor");
    if(lang == "md") Editor = await import("./editors/MDEditor");
    if(lang == "graphql") Editor = await import("./editors/GQLEditor");
    if(lang == "json") Editor = await import("./editors/JsonEditor");
    if(lang == "xml") Editor = await import("./editors/XmlEditor");
    if(lang == "sql") Editor = await import("./editors/SQLEditor");
    if(lang == "c") Editor = await import("./editors/CPPEditor");
    if(lang == "vue") Editor = await import("./editors/VueEditor");
    if(lang == "svelte") Editor = await import("./editors/SvelteEditor");
    if(lang == "ang") Editor = await import("./editors/AngEditor");
    if(Editor == null) Editor = await import("./editors/TxtEditor");

    return new Editor.default({ parent, code });
};


export function setIcon(props: any) {
    const binIcon: HTMLDivElement = props.parent;
    const language: string = props.lang;
    switch(language) {
        case "js": {
            new IconIfy__SvelteComponent_({ target: binIcon,
                props: {
                    collection: "vscode-icons",
                    name: "file-type-js-official",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "html": {
            new IconIfy__SvelteComponent_({ target: binIcon,
                props: {
                    collection: "vscode-icons",
                    name: "file-type-html",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "css": {
            new IconIfy__SvelteComponent_({ target: binIcon,
                props: {
                    collection: "vscode-icons",
                    name: "file-type-css",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "py": {
            new IconIfy__SvelteComponent_({ target: binIcon,
                props: {
                    collection: "vscode-icons",
                    name: "file-type-python",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "java": {
            new IconIfy__SvelteComponent_({ target: binIcon,
                props: {
                    collection: "vscode-icons",
                    name: "file-type-java",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "cpp": {
            new IconIfy__SvelteComponent_({ target: binIcon,
                props: {
                    collection: "vscode-icons",
                    name: "file-type-cpp",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "php": {
            new IconIfy__SvelteComponent_({ target: binIcon,
                props: {
                    collection: "vscode-icons",
                    name: "file-type-php",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "rust": {
            new IconIfy__SvelteComponent_({ target: binIcon,
                props: {
                    collection: "vscode-icons",
                    name: "file-type-rust",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "sass": {
            new IconIfy__SvelteComponent_({ target: binIcon,
                props: {
                    collection: "vscode-icons",
                    name: "file-type-sass",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "md": {
            new IconIfy__SvelteComponent_({ target: binIcon,
                props: {
                    collection: "vscode-icons",
                    name: "file-type-markdown",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "graphql": {
            new IconIfy__SvelteComponent_({ target: binIcon,
                props: {
                    collection: "vscode-icons",
                    name: "file-type-graphql",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "json": {
            new IconIfy__SvelteComponent_({ target: binIcon,
                props: {
                    collection: "vscode-icons",
                    name: "file-type-json",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "xml": {
            new IconIfy__SvelteComponent_({ target: binIcon,
                props: {
                    collection: "vscode-icons",
                    name: "file-type-xml",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "sql": {
            new IconIfy__SvelteComponent_({ target: binIcon,
                props: {
                    collection: "vscode-icons",
                    name: "file-type-sql",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "vue": {
            new IconIfy__SvelteComponent_({ target: binIcon,
                props: {
                    collection: "vscode-icons",
                    name: "file-type-vue",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "svelte": {
            new IconIfy__SvelteComponent_({ target: binIcon,
                props: {
                    collection: "vscode-icons",
                    name: "file-type-svelte",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "ang": {
            new IconIfy__SvelteComponent_({ target: binIcon,
                props: {
                    collection: "vscode-icons",
                    name: "file-type-angular",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        default: {
            new IconIfy__SvelteComponent_({ target: binIcon,
                props: {
                    collection: "vscode-icons",
                    name: "file-type-text",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
    }
}