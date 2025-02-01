export default function useTitle(title: string) {
    if (!title) {
        throw new Error("No title string was provided when updating document title")
    }

    document.title = title
}