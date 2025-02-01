import { Metadata } from "next";
import HeaderImage from "@/assets/imgs/education/header.png"
import Image from "next/image";
import "./page.css"
import { climateCrisis } from "@/assets/fonts/FontsManager";
import AnimateLetters from "@/components/AnimateLetters";

export const metadata: Metadata = {
  title: "Equal Education",
  description: "Helping the uneducated & empowering women for a brighter Pakistan"
}

export default async function Home() {
  return (<div style={{ marginTop: -100 }}>
    <header>
      <Image src={HeaderImage} alt="Hila-o-Khushi volunteers on a trip to school" style={{ width: "70vw" }} />
      <div className="info">
        <h1 className={`${climateCrisis.className} text-9xl`}>
          Education is a birth right
        </h1> <br />
        <AnimateLetters text='sddd' />
        <p className="paragraph">
          At Hila-o-Khushi for Education, we believe that education is not a privilege—it's a fundamental right. 
          Aligned with the United Nations Sustainable Development Goal 4 (Quality Education), we are committed to ensuring inclusive and equitable learning 
          opportunities for every child in Pakistan. From building schools in remote villages to providing digital literacy programs, we're breaking barriers and creating 
          a future where no child is left behind. Join us in our mission to transform lives through the power of education.
        </p> <br />
        <button className="button">
          Read More
        </button>
      </div>
    </header>
  </div>);
}