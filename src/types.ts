export type Category = "commonQuestions" | "JSCore" | "functions" | "frontend" | "layout" | "react" | "tools" | "backend" | "categories" | "answer"

export type ListItems = { name: string; link: Category, answer?: string }[]

export type CurrentAnswer = { answer: string; question: string }

export interface IData {
    categories: ListItems;
    backend: ListItems;
    commonQuestions: ListItems;
    frontend: ListItems;
    functions: ListItems;
    JSCore: ListItems;
    layout: ListItems;
    react: ListItems;
    tools: ListItems;
}
