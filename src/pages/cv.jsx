export default function Home() {
  return <div>
    {Header()}
    {spacey2()}
    {Body()}
    {spacey2()}
    {Footer()}
  </div>
}

function spacex(x = 2) {
  return <div className={`w-${x}/54`}></div>;
}
function spacey1() {
  return <div className={`h-[10px]`}></div>;
}
function spacey2() {
  return <div className={`h-[20px]`}></div>;
}


function Header() {
  return <div className="flex content-between">
    <div className="w-36/54">
      <h1>Thor Demeestere</h1>
      <h2>Developer & Cyber Security Researcher</h2>
      <p className="text-small">°05/05/2003</p>
    </div>
    <div className="w-18/54 text-right">
      <p>+32 0489 71 44 63</p>
      <p>thor.demeestere@gmail.com</p>
      <p>Menen, Driver license B</p>
    </div>
  </div>
}

function Body() {
  return <div className="flex">
    <div className="w-36/54">
      {BodyLeft()}
    </div>
    {spacex()}
    <div className="w-16/54 ml-2/54">
      {BodyRight()}
    </div>
  </div>
}

function Footer() {
  return <div>

    <a href="">GitHub</a>
    <div className="flex">
    <img src="" alt="github qr" className="w-8/54"/>
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
      {date}
    </div>
    <div className="w-2/36"></div>
    <div className="w-26/36">
      <h3>{title}</h3>
      <p className="w-full">{description}</p>
    </div>
  </div>
    {spacey2()}
  </div>
}
function Education(date, title, subtitle, description) {

  return <div>
    <div className="flex">
      <div className="w-8/36">
        {date}
      </div>
      <div className="w-2/36"></div>
      <div className="w-26/36">
        <h3>{title}</h3>
        <p className="w-full">{subtitle}</p>
        <p className="w-full">{description}</p>
      </div>
    </div>
    {spacey2()}
  </div>

}

function project(img, title, description, link){
    return <div>
    <div className="flex">
      <div className="w-8/36">
        <img src="{img}" alt="projectimage" />
      </div>
      <div className="w-2/36"></div>
      <div className="w-26/36">
        <h3>{title}</h3>
        <p className="w-full">{description}</p>
        <p className="w-full">{link}</p>
      </div>
    </div>
    {spacey2()}
  </div>
}

function BodyLeft() {
  return <div>

    <h2>Experience</h2>
    {Experience("09/24-03/25", "Savaco", "Servicedesk & Support Engineer")}
    {Experience("07/23-03/24", "Jimber", "Software Developer Internship & Student Job Helped implement missing features in a private file cloud system with end-to-end encryption using private keys.Skills 03/21-08/22")}
    {Experience("03/21-08/22", "Tom Broucke", "Assisted a freelance WordPress web developer, learned modern web design principles and contributed to building and maintaining websites.")}
    {Experience("", "Various personal projects", "")}

    <h2>Education</h2>
    {Education("08/21-06/24", "Bachelor Cyber Security Professional", "Applied Computer Science", "Howest Bruges - University of Applied Sciences Technology")}

    <h2>Personal projects</h2>
    {project("", "Cyber Security Research Notes","", "https://github.com/ThorD125/research-notes")}
    {project("", "TryHackMe Cyber Labs","Hands-on cybersecurity training through virtual labs and challenges.","https://tryhackme.com/p/ThorD125")}
  </div>
}

function BodyRight() {
  return <div>

    <h2>Languages</h2>
    NL Dutch - Native
    EN English - Fluent

    {spacey2()}

    <h2>Skills</h2>
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

    {spacey2()}

    <h2>Certifications</h2>
    <ul>
      <li>FIRST CVSS v4.0</li>
      <li>LogicMonitor Associate</li>
      <li>M365: Fundamentals</li>
      <li>AZ-900</li>
      <li>SC-900</li>
      <li>FCA FortiGate Operator</li>
    </ul>

    {spacey2()}

    <h2>Interests</h2>
    <ul>
      <li>Security</li>
      <li>Music</li>
      <li>Film</li>
      <li>Hardware</li>
      <li>Software</li>
      <li>Development</li>
    </ul>

    {spacey2()}

    <h2>Socials</h2>
    <a href="">LinkedIn</a>
    <img src="" alt="linkedin qr" className="w-8/16"/>
  </div>
}
