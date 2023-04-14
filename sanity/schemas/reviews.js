export default {
    name: "review",
    type: "object",
    title: "Vurdering",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Navn"
        },
        {
            name: "rating",
            type: "number",
            title: "Vurdering"
        },
        {
            name: "comment",
            type: "text",
            title: "Kommentar"
        }
    ]
}