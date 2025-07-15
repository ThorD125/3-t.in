import CyberSecurityNotes from '../assets/images/CyberResearchNotes.svg'
import TryHackmeLabs from '../assets/images/Tryhackme-Cyber-Labs.svg'
import GitHubIcon from '../assets/images/GitHub.jsx'
import { useEffect, useState } from "react";
import LinkedInIcon from '../assets/images/LinkedIn.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"

var debug = false;


export default function Home() {
  return <div className={debug ? "bg-blue-500" : ""}>
    {Header()}
    {spacey()}
    <div className='hidden md:block'>
    {spacey()}
    </div>
    {Body()}
    {spacey()}
    {Footer()}
  </div>
}

function spacex() {
  return <div className={`spacewidth${debug ? " bg-green-500" : ""}`}></div>;
}

function spacey() {
  return <div className={`spaceheight${debug ? " bg-red-500" : ""}`}></div>;
}

function darkButton() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("dark") === "true"; // stored as string
  });
  useEffect(() => {
    document.body.classList.toggle("dark-mode", dark);
    localStorage.setItem("dark", dark);
  }, [dark]);

  return <div>
    <button className="darkmode-btn" onClick={() => setDark(!dark)}>
      <FontAwesomeIcon icon={dark ? faSun : faMoon} id="btn-icon" />
    </button>
  </div>
}

function Header() {
  return <div className="md:flex justify-between">
    <div>
      <h1>Thor Demeestere</h1>
      <h2>Developer & Cyber Security Researcher</h2>
      <span>°05/05/2003</span>
    </div>
    <div className="md:text-right mt-auto">
      {darkButton()}
      <p>+32 0489 71 44 63</p>
      <p>thor.demeestere@gmail.com</p>
      <p>Menen, Driver license B</p>
    </div>
  </div>
}

function Body() {
  return <div className="md:flex w-full">
    <div className="lefbody">
      {BodyLeft()}
    </div>
    {spacex()}
    <div className='hidden md:block'>
      {spacex()}
      </div>
    <div className="rightbody">
      {BodyRight()}
    </div>
  </div>
}

function Footer() {
  return <div>
    <a href="https://github.com/ThorD125">GitHub</a>
    <div className="md:flex pt-2">
      <div className='footerleft'>
        <GitHubIcon className="qr-icon" />
      </div>
      {spacex()}
      <div className='hidden md:block'>
      {spacex()}
      </div>
      <div className='w-full m-auto'>
        <p>
          Other projects are available on my GitHub, including:
        </p>
        <ul className='list-disc'>
          <li>Chrome extension to auto-play Shorts/Reels</li>
          <li>Quiz training platform with randomized questions and answers</li>
          <li>A Python-based Discord utility bot with various slash commands.</li>
        </ul>
      </div>
    </div>
  </div>
}

function dividingPart(first, last) {
  return (
    <>
      <div className={`dividecontainer dividingwidth${debug ? " bg-green-500" : ""}`}>
        <div className={`divideline linewidth${first ? " firstdivideline" : ""}${last ? " lastdivideline" : ""}${debug ? " bg-blue-500" : ""}`}>
          <div className={`dividebol bolwidth${debug ? " bg-red-500" : ""}`}></div>
        </div>
      </div>
    </>
  );
}


function Experience(date, title, description, first=false, last=false) {
  return <div>
    <div className="flex">
      <div className="date">
        <p>
          {date}
        </p>
      </div>
      {dividingPart(first, last)}
      <div className="description">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
    {spacey()}
  </div>
}

function Education(date, title, description, subtitle, first=false, last=false) {
  return <div>
    <div className="flex">
      <div className="date">
        <p>
          {date}
        </p>
      </div>
      {dividingPart(first, last)}
      <div className="description">
        <h4>{title}</h4>
        <p>{subtitle}</p>
        <p>{description}</p>
      </div>
    </div>
    {spacey()}
  </div>
}

function project(img, title, description, link, first=false, last=false) {
  return <div>
    <div className="flex">
      <div className="date p-6">
        <img src={img} alt="projectimage" />
      </div>
      {dividingPart(first, last)}
      <div className="description">
        <h4>{title}</h4>
        <p>{description}</p>
        <p><a href={link}>{link}</a></p>
      </div>
    </div>
    {spacey()}
  </div>
}

function BodyLeft() {
  return <div className='w-full'>
    <h3>Experience</h3>
    {Experience("09/24-06/25", "Savaco", "Servicedesk & Support Engineer", true)}
    {Experience("07/23-03/24", "Jimber", "Software Developer Internship & Student Job Helped implement missing features in a private file cloud system with end-to-end encryption using private keys.Skills 03/21-08/22")}
    {Experience("03/21-08/22", "Tom Broucke", "Assisted a freelance WordPress web developer, learned modern web design principles and contributed to building and maintaining websites.", false, true)}

    {spacey()}

    <h3>Education</h3>
    {Education("08/21-06/24", "Bachelor Cyber Security Professional", "Howest Bruges - University of Applied Sciences Technology", "Applied Computer Science", true, true)}

    {spacey()}

    <h3>Personal projects</h3>
    {project(CyberSecurityNotes, "Cyber Security Research Notes", "", "https://github.com/ThorD125/research-notes", true)}
    {project(TryHackmeLabs, "TryHackMe Cyber Labs", "Hands-on cybersecurity training through virtual labs and challenges.", "https://tryhackme.com/p/ThorD125", false, true)}
    {spacey()}
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
    <div className="socialqr pt-2">
      <LinkedInIcon className="qr-icon" />
    </div>
  </div>
}
