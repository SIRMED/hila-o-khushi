import Spinner from "@/components/Spinner";

export default function LoadingPage({ text, ellipsis }: { text?: string, ellipsis?: boolean }) {
    return <div className="text-center py-10">
        <Spinner />
        <h1>Loading {text}{ellipsis ? "..." : ""} </h1>
    </div>
}