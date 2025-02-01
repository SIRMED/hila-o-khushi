import { Metadata } from "next";
import HeaderImage from "@/assets/imgs/education/header.png"
import HeatMap from "@/assets/imgs/education/heatmap.png"
import Image from "next/image";
import "./page.css"
import { climateCrisis } from "@/assets/fonts/FontsManager";

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
          Education is a birth right for all
        </h1> <br />
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

    <br /><br /><br />

    <center>
      <h1 className="text-6xl" style={{ width: "75vw" }}>
        Pakistan’s main problem is illiteracy. we stand to make this change, we belive educations is every man & woman’s birth right and we aim to provide it in areas where it is not accsessible
      </h1>
    </center><br /><br /><br /><br /><br /><br />

    <div className="px-40 heat-map">
      <Image src={HeatMap} alt="Hila-o-Khushi volunteers on a trip to school" style={{ width: "40vw" }} />
      <div className="info">
        <br />
        <h1 className={`${climateCrisis.className} text-7xl`}>The Literacy Gap Is Wide</h1>
        <p>
          In Pakistan, only 59% of the population is literate, with rural areas at 49% and women at just 46%. This gap limits opportunities and perpetuates poverty. At Hila-o-Khushi, we’re closing this divide by providing education to underserved communities, especially girls. Together, we can make <span className="text-green-500">literacy a reality for all.</span>
        </p> <br />
        <p className={climateCrisis.className}><span className={`text-red-500`}>85%</span> of Naran is Illiterate</p>
        <p className={climateCrisis.className}><span className={`text-red-500`}>80%</span> of Dera Murad Jamali is Illiterate</p>
        <p className={climateCrisis.className}><span className={`text-red-500`}>75%</span> of Waziristan is Illiterate</p>
        <p className={climateCrisis.className}><span className={`text-green-500`}>15%</span> of Lahore is Illiterate</p>
        <p className={climateCrisis.className}><span className={`text-green-500`}>10%</span> of Islamabad is Illiterate</p>
        <p className="text-gray-500" style={{fontSize: 18}}>Based on data from the Pakistan Bureau of Statistics</p>
      </div>
    </div><br /><br /><br /><br /><br /><br />

    <center>
      <h1 className={`${climateCrisis.className} text-8xl w-11/12`}>Since our starting we have educated <span className="text-green-500">2.3M students</span></h1>
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