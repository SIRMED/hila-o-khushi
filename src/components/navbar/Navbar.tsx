"use client"
import "./navbar.css"
import gilroy, { gilroyBlack, gilroyBold, gilroyHeavy, gilroyLight, gilroyMedium, gilroySemibold, gilroyThin } from "@/assets/fonts/FontsManager"
import URLText from "./URLText"
import { useEffect, useState } from "react"

export default function Navbar() {
    const [popOutNav, setPopOutNav] = useState(false)

    useEffect(() => {
        document.addEventListener("scroll", (e) => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 350) setPopOutNav(true)
            else setPopOutNav(false)
        })
    }, [])

    return (<nav className={popOutNav ? "pop-out" : ""}>
        <div className="left">
            <p>
                <span className={gilroyBlack.className}>Hila-o-Khushi</span>&nbsp;
                <URLText />
            </p>
        </div>
        <div className="right">
            <ul>
                <li>Volunteer</li>
                <li>Contact Us</li>
                <li>Home</li>
                <li className={`text-green-200 ${gilroyBold.className}`}>Donate</li>
            </ul>
        </div>
    </nav>)
}
