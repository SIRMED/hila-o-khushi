"use client"

import { ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"
import { ComboboxDemo } from "./ComboBox"

export default function () {

    const path = usePathname().split("/")[1]
    console.log(path)

    return (<>
        <span className="text-gray-400 switcher">&nbsp; &nbsp;/
        </span>
        <ComboboxDemo />
    </>)
}