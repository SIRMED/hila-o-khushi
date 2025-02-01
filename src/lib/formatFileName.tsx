import { globalSubjectCodesDict } from "@/assets/SubjectsData"

export default function ({ fileName }: { fileName: string }) {
    if (!fileName) throw new Error("FileName is null")

    const parts = fileName.split("_")
    const subject = `${parts[0]} ${globalSubjectCodesDict[parts[0]]}`
    const sessionPart = parts[1].split("")
    const session = `${sessionPart[0] === "m" ? "F/M" : sessionPart[0] === "s" ? "M/J" : "O/N"}`
    const year = sessionPart[1] + sessionPart[2]

    return <>
        {subject} {session} 20{year} P{parts[2].split("")[0]}V{parts[2].split("")[1]} {parts[3] === "ms" ? "Marking scheme" : parts[3] === "qp" ? "Question paper" : "Insert"}
    </>
}