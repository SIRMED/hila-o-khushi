export default async function(t?: number ) {
    if (process.env.NODE_ENV === "production") {
        return null
    }
    return await new Promise((resolve) => setTimeout(resolve, t || 5000));
}