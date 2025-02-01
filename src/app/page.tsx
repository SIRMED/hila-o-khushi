import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Home | Hila-o-Khushi",
  description: "Helping the uneducated & empowering women for a brighter Pakistan"
}

export default async function Home() {
  redirect("/education")
}