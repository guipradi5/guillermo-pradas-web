import Link from "next/link";

export default function Next() {
  const actualDate = new Date()
  const startDate = new Date("2016-06-01")
  let diffTime = (actualDate.getTime() - startDate.getTime()) / 1000
  diffTime /= (60 * 60 * 24);
  const experienceYears = parseFloat((diffTime/365.25).toFixed(1));
  const experienceYearsString = `${Math.floor(experienceYears)} ${Math.round(experienceYears) / experienceYears >= 1 ? 'and a half' : ''}`

  return (
      <div className="about-me">
        <div className="about-me__images">
          <img className="photo-3" src="/img/photo3.jpg" />
          <img className="photo-2" src="/img/photo2.png" />
          <img className="photo-1" src="/img/photo1.png" />
        </div>
        <div className="about-me__text">
          <h2>Hi!</h2>
          <p>
            My name is Guillermo. I'm a web developer and game designer based in Barcelona, Spain.
            <br /><br />
            I graduated in 2017 with a deegree in Multimedia Engineering in the "Universitat Politècnica de Catalunya" and I've been in the web development industry for the last {experienceYearsString} years.
            <br /><br />
            I have been working various front-end jobs, touching a wide array of technologies, from basic html projects to state of the art Node frameworks.<br />
            I mainly specialize in these and UX/UI development. My 3 main frameworks are <a href="https://vuejs.org/" target="_blank">Vue</a>, <a href="https://angular.io/" target="_blank">Angular</a> and <a href="https://angular.io/" target="_blank">NextJs/React</a> for which <Link href="/web">I've developed a good number of projects</Link>
            <br /><br /><br />
            Apart from web technologies I'm a fierce lover of art in most of its forms.
            <br /><br />
            One of my highest passions is learning and doing my own works of art. I've done music, digital art, stories and videogames. The last one being my main focus at the moment.
            <br /><br />
            I've been into game development since 2013, mostly learning its technical intricacies and trying bring some ideas to fruition. I've only done little unpolished things. But my plan is to start releasing full products starting in 2024.<br />
            My game engine of choice is <a href="https://godotengine.org/">Godot</a> with which I'm developing 3 games at the moment ("Gamu"/Horror, "Rosaly"/Visual Novel and "Ocean.OS"/Adventure).<br />
            Other engines I'm familiar with are <a href="https://unity.com/" target="_blank">Unity</a> and <a href="https://www.rpgmakerweb.com/" target="_blank">RPG Maker</a>
            <br /><br />
            I do some music production from time to time under the name <a href="https://soundcloud.com/thelimbodrums" target="_blank">"the.limbo.drums"</a> with my friend Landric. At the moment we're in the works of releasing our first EP.
            <br /><br />
            In art, I've done <a href="https://gillpradas.tumblr.com/" target="_blank">some illustrations</a>. But I haven't been active in the last number of years.
            <br /><br />
            And not much else to say about me! Just to name you my favorites:<br />
            Games: <a href="https://en.wikipedia.org/wiki/Yume_Nikki" target="_blank">Yume Nikki</a> & <a href="https://en.wikipedia.org/wiki/Kingdom_Hearts_II" target="_blank">Kingdom Hearts 2.</a><br />
            Albums: <a href="https://en.wikipedia.org/wiki/American_Idiot" target="_blank">American Idiot by Green Day</a> & <a href="https://en.wikipedia.org/wiki/Kid_A" target="_blank">Kid A by Radiohead</a>.<br />
            TV shows: <a href="https://en.wikipedia.org/wiki/Bob%27s_Burgers" target="_blank">Bob's Burgers</a> & <a href="https://en.wikipedia.org/wiki/Avatar:_The_Last_Airbender" target="_blank">Avatar: The Last Aribender.</a><br />
            Movies: <a href="https://en.wikipedia.org/wiki/Persepolis_(film)" target="_blank">Persepolis</a> & <a href="https://en.wikipedia.org/wiki/Everything_Everywhere_All_at_Once" target="_blank">Everything Everywhere All At Once</a>
            <br /><br />
            Hope you have a great day!<br />
            Thanks for visiting my website!
            <br /><br /><br />
          </p>
        </div>
      </div>
  )
}
