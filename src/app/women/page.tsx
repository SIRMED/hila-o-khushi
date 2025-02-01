import { Metadata } from "next";
import HeaderImage from "@/assets/imgs/women/header.jpg"
import DivideImage from "@/assets/imgs/women/divide.png"
import Image from "next/image";
import "./page.css"
import { climateCrisis } from "@/assets/fonts/FontsManager";

export const metadata: Metadata = {
  title: "Women Empowerment",
  description: "Helping the uneducated & empowering women for a brighter Pakistan"
}

export default async function Home() {
  return (<div style={{ marginTop: -100 }}>
    <header>
      <Image src={HeaderImage} alt="Hila-o-Khushi helping women work" style={{ width: "70vw" }} />
      <div className="info">
        <h1 className={`${climateCrisis.className} text-9xl`}>
          Empower Her, Empower All: Building a World of Equality
        </h1> <br />
        <p className="paragraph">
          Hila-o-Khushi for Women Empowerment stands firmly with the United Nations Sustainable Development Goal 10 (Reduced Inequalities) to create a world where every woman has the opportunity to thrive. Through skill development, legal aid, and leadership programs, we’re dismantling systemic barriers and empowering women to take charge of their lives. When women rise, communities prosper. Together, let’s build a future where equality isn’t just a dream—it’s a reality.
        </p> <br />
        <button className="button">
          Read More
        </button>
      </div>
    </header>

    <br /><br /><br />

    <center>
      <h1 className="text-6xl" style={{ width: "75vw" }}>
        Financial stability in Pakistan has long been a male-dominated domain, largely due to deep-rooted societal mindsets. At Hila-o-Khushi, we are determined to challenge and change this narrative. By empowering women with skills, resources, and opportunities, we’re paving the way for a future where financial independence knows no gender.
      </h1>
    </center><br /><br /><br /><br /><br /><br />

    <div className="demographics">
      <div className="info">
        <h1 className={`${climateCrisis.className} text-7xl`}>Empowering Women for Financial Independence</h1> <br />
        <h1 className="text-4xl">
          Being born female shouldn’t deny you the right to earn. Money is a basic necessity, yet the power gap between men and women has never been wider. At Hila-o-Khushi, we’re breaking these barriers, empowering women to claim their financial independence and reshape the future.
        </h1> <br />
        <h1 className={`text-5xl ${climateCrisis.className}`}><span className="text-green-500">78%</span> of workers are men</h1>
        <h1 className={`text-5xl ${climateCrisis.className}`}><span className="text-red-500">22%</span> of workers are women</h1>
        <p className="text-gray-500">
          based on a study from 2022 by the Pakistan Bureau of Statistics
        </p>
      </div>
      <Image src={DivideImage} alt="Hila-o-Khushi helping women work" style={{ width: "40vw" }} />
    </div>

    <center>
      <h1 className={`${climateCrisis.className} text-8xl w-11/12`}>Since our starting we have helped <span className="text-green-500">403K women</span></h1>
      <br /><br /><br />
      <h1 className={`${climateCrisis.className} text-8xl w-11/12`}>& <span className="text-green-500">you can help</span> us in our mission for a <span className="text-green-500">better Pakistan</span></h1>
      <br /><br />

      <div className="card">
        <h1 className={`${climateCrisis.className} text-2xl`}>Donate</h1>
        <p>Our organization is a non-profit and runs entirely on donations provided by people like YOU</p> <br />
        <button className="button">Donate</button>
      </div>

      <div className="card">
        <h1 className={`${climateCrisis.className} text-2xl`}>Volunteer</h1>
        <p>Our organization is entirely run by people because of their own sheer will</p> <br />
        <button className="button">Join Us</button>
      </div>
      
    </center>

  </div>);
}