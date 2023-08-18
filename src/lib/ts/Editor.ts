
export default async(props: any) => {

    let Editor: any = null;

    let lang: string = props.language;
    let code: string = props.code;
    let parent: HTMLDivElement = props.parent;

    if(lang == "txt") Editor = await import("./editors/TxtEditor");
    else if(lang == "js") Editor = await import("./editors/JsEditor");
    else if(lang == "html") Editor = await import("./editors/HtmlEditor");
    else if(lang == "css") Editor = await import("./editors/CSSEditor");
    else if(lang == "py") Editor = await import("./editors/PyEditor");
    else if(lang == "java") Editor = await import("./editors/JavaEditor");
    else if(lang == "cpp") Editor = await import("./editors/CPPEditor");
    else if(lang = "php") Editor = await import("./editors/PhpEditor");
    else if(lang = "rust") Editor = await import("./editors/RustEditor");
    else if(lang = "sass") Editor = await import("./editors/SassEditor");
    else if(lang = "md") Editor = await import("./editors/MDEditor");
    else if(lang = "graphql") Editor = await import("./editors/GQLEditor");
    else if(lang = "json") Editor = await import("./editors/JsonEditor");
    else if(lang = "xml") Editor = await import("./editors/XmlEditor");
    else if(lang = "sql") Editor = await import("./editors/SQLEditor");
    else if(lang = "c") Editor = await import("./editors/CPPEditor");
    else if(lang = "vue") Editor = await import("./editors/VueEditor");
    else if(lang = "svelte") Editor = await import("./editors/SvelteEditor");
    else if(lang = "ang") Editor = await import("./editors/AngEditor");
    else Editor = await import("./editors/TxtEditor");

    return new Editor.default({ parent, code });
};
