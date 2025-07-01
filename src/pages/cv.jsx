import CyberSecurityNotes from '../assets/images/Cyber-Security-Notes.png'
import TryHackmeLabs from '../assets/images/Tryhackme-Cyber-Labs.png'
import GitHub from '../assets/images/GitHub.svg'
import LinkedIn from '../assets/images/LinkedIn.svg'

var debug = true;

export default function Home() {
  return <div className={debug ? "bg-blue-500" : ""}>
    {Header()}
    {spacey()}
    {spacey()}
    {Body()}
    {spacey()}
    {Footer()}
  </div>
}

function spacex() {
  return <div className={`w-[10px]${debug ? " bg-green-500" : ""}`}></div>;
}

function spacey() {
  return <div className={`h-[10px]${debug ? " bg-red-500" : ""}`}></div>;
}


function Header() {
  return <div className="flex justify-between">
    <div className="w-36/54">
      <h1>Thor Demeestere</h1>
      <h2>Developer & Cyber Security Researcher</h2>
      <span>°05/05/2003</span>
    </div>
    <div className="w-18/54 text-right">
      <p>+32 0489 71 44 63</p>
      <p>thor.demeestere@gmail.com</p>
      <p>Menen, Driver license B</p>
    </div>
  </div>
}

function Body() {
  return <div className="flex justify-between">
    <div className="w-36/54">
      {BodyLeft()}
    </div>
    {spacex()}
    {spacex()}
    <div className="w-16/54 ml-2/54">
      {BodyRight()}
    </div>
  </div>
}

function Footer() {
  return <div>

    <a href="https://github.com/ThorD125">GitHub</a>
    <div className="flex">
    <img src={GitHub} alt="github qr" className="w-8/54"/>
    {spacex()}
    <p className="w-44/54">
      Other projects are available on my GitHub, including:
      - Chrome extension to auto-play Shorts/Reels
      - Quiz training platform with randomized questions and answers
      - A Python-based Discord utility bot with various slash commands.
    </p>
    </div>
  </div>
}

function Experience(date, title, description) {
  return <div>
   <div className="flex">
    <div className="w-8/36">
    <p>
      {date}
    </p>
    </div>
    {spacex()}
    {spacex()}
    <div className="w-26/36">
      <h4>{title}</h4>
      <p className="w-full">{description}</p>
    </div>
  </div>
    {spacey()}
  </div>
}
function Education(date, title, subtitle, description) {

  return <div>
    <div className="flex">
      <div className="w-8/36">
      <p>
        {date}
      </p>
      </div>
      {spacex()}
      {spacex()}
      <div className="w-26/36">
        <h4>{title}</h4>
        <p className="w-full">{subtitle}</p>
        <p className="w-full">{description}</p>
      </div>
    </div>
    {spacey()}
  </div>

}

function project(img, title, description, link){
    return <div>
    <div className="flex">
      <div className="w-8/36">
        <img src={img} alt="projectimage" />
      </div>
      <div className="w-2/36"></div>
      <div className="w-26/36">
        <h4>{title}</h4>
        <p className="w-full">{description}</p>
        <p className="w-full"><a href={link}>{link}</a></p>
      </div>
    </div>
    {spacey()}
  </div>
}

function BodyLeft() {
  return <div>

    <h3>Experience</h3>
    {Experience("09/24-06/25", "Savaco", "Servicedesk & Support Engineer")}
    {Experience("07/23-03/24", "Jimber", "Software Developer Internship & Student Job Helped implement missing features in a private file cloud system with end-to-end encryption using private keys.Skills 03/21-08/22")}
    {Experience("03/21-08/22", "Tom Broucke", "Assisted a freelance WordPress web developer, learned modern web design principles and contributed to building and maintaining websites.")}
    {Experience("", "Various personal projects", "")}

    {spacey()}

    <h3>Education</h3>
    {Education("08/21-06/24", "Bachelor Cyber Security Professional", "Applied Computer Science", "Howest Bruges - University of Applied Sciences Technology")}

    {spacey()}

    <h3>Personal projects</h3>
    {project(CyberSecurityNotes, "Cyber Security Research Notes","", "https://github.com/ThorD125/research-notes")}
    {project(TryHackmeLabs, "TryHackMe Cyber Labs","Hands-on cybersecurity training through virtual labs and challenges.","https://tryhackme.com/p/ThorD125")}
  </div>
}

function BodyRight() {
  return <div>

    <h3>Languages</h3>
    <p>NL Dutch - Native</p>
    <p>EN English - Fluent</p>

    {spacey()}

    <h3>Skills</h3>
    <ul>
      <li>Docker</li>
      <li>Linux</li>
      <li>Wireshark</li>
      <li>Typescript</li>
      <li>Burpsuite</li>
      <li>Python</li>
      <li>Extensive IT knowledge</li>
      <li>Eager to learn</li>
    </ul>

    {spacey()}

    <h3>Certifications</h3>
    <ul>
      <li>FIRST CVSS v4.0</li>
      <li>LogicMonitor Associate</li>
      <li>M365: Fundamentals</li>
      <li>AZ-900</li>
      <li>SC-900</li>
      <li>FCA FortiGate Operator</li>
    </ul>

    {spacey()}

    <h3>Interests</h3>
    <ul>
      <li>Security</li>
      <li>Music</li>
      <li>Film</li>
      <li>Hardware</li>
      <li>Software</li>
      <li>Development</li>
    </ul>

    {spacey()}

    <h3>Socials</h3>
    <a href="https://www.linkedin.com/in/thor-demeestere/">LinkedIn</a>
    <img src={LinkedIn} alt="linkedin qr" className="w-8/16"/>
  </div>
}
