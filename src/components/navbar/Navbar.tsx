import "./navbar.css"
import * as React from "react"
import Link from "next/link"
import gilroy, { gilroyBlack, gilroyBold, gilroyHeavy, gilroyLight, gilroyMedium, gilroySemibold, gilroyThin } from "@/assets/fonts/FontsManager"
import { ArrowDown, ArrowDownNarrowWide, ArrowLeftRight, ChevronDown } from "lucide-react"
import URLText from "./URLText"

export default function Navbar() {
    return (<nav>
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
