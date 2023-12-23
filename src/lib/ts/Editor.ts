import Icon from '@iconify/svelte';

export default async(props: any) => {

    let Editor: any = null;

    let lang: string = props.language;
    let code: string = props.code;
    let parent: HTMLDivElement = props.parent;

    if(lang == "txt") Editor = await import("./editors/TxtEditor");
    if(lang == "img") Editor = await import("./editors/TxtEditor");
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
            new Icon({ target: binIcon,
                props: {
                    icon: "vscode-icons:file-type-js-official",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "html": {
            new Icon({ target: binIcon,
                props: {
                    icon: "vscode-icons:file-type-html",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "css": {
            new Icon({ target: binIcon,
                props: {
                    icon: "vscode-icons:file-type-css",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "py": {
            new Icon({ target: binIcon,
                props: {
                    icon: "vscode-icons:file-type-python",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "java": {
            new Icon({ target: binIcon,
                props: {
                    icon: "vscode-icons:file-type-java",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "cpp": {
            new Icon({ target: binIcon,
                props: {
                    icon: "vscode-icons:file-type-cpp2",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "php": {
            new Icon({ target: binIcon,
                props: {
                    icon: "vscode-icons:file-type-php",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "rust": {
            new Icon({ target: binIcon,
                props: {
                    icon: "vscode-icons:file-type-rust",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "sass": {
            new Icon({ target: binIcon,
                props: {
                    icon: "vscode-icons:file-type-sass",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "md": {
            new Icon({ target: binIcon,
                props: {
                    icon: "vscode-icons:file-type-markdown",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "graphql": {
            new Icon({ target: binIcon,
                props: {
                    icon: "vscode-icons:file-type-graphql",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "json": {
            new Icon({ target: binIcon,
                props: {
                    icon: "vscode-icons:file-type-json",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "xml": {
            new Icon({ target: binIcon,
                props: {
                    icon: "vscode-icons:file-type-xml",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "sql": {
            new Icon({ target: binIcon,
                props: {
                    icon: "vscode-icons:file-type-sql",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "vue": {
            new Icon({ target: binIcon,
                props: {
                    icon: "vscode-icons:file-type-vue",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "svelte": {
            new Icon({ target: binIcon,
                props: {
                    icon: "vscode-icons:file-type-svelte",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        case "ang": {
            new Icon({ target: binIcon,
                props: {
                    icon: "vscode-icons:file-type-angular",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
        default: {
            new Icon({ target: binIcon,
                props: {
                    icon: "vscode-icons:file-type-text",
                    width: "50px",
                    height: "50px"
                }
            });
            break;
        }
    }
}