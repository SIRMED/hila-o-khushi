"use client"
import { usePathname } from "next/navigation"
import "./footer.css"

export default function () {
    const path = usePathname().split("/")[1]

    return <footer>
        <p>© Hila-o-Khushi / {path === "education" ? "For Education" : path === "women" ? "For Women Empowerment" : "404 - page does not exist"}</p>
        <p>{path === "education" ? "Bridging the gap between a genius and an illiterate" : path === "women" ? "Helping women stand on their feet" : "404 - page does not exist"}</p>
    </footer>
}