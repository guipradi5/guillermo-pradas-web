"use client"
import SystemButton from "../components/SystemButton/SystemButton";

export default function Next() {

  function openProjectWindow() {
    console.log("OPEN")
  }

  return (
    <div className="web-projects">
      <div className="web-projects__banner">
        <img src="/img/banner-web.png" />
      </div>
      <div className="web-projects__body">
        <div className="web-projects__index">
          <h2>Professional Story</h2>
          <div>
            <a href="#gavagai-body" title="Gavagai"><img src="/icons/pedestals/gavagai.png" /></a>
            <a href="#insikt-body" title="Insikt"><img src="/icons/pedestals/insikt.png" /></a>
            <a href="#tekman-body" title="Tekman"><img src="/icons/pedestals/tekman.png" /></a>
            <a href="#tenea-body" title="Tenea"><img src="/icons/pedestals/tenea.png" /></a>
            <a href="#skiverse-body" title="Skiverse"><img src="/icons/pedestals/skiverse.png" /></a>
          </div>
        </div>
        <div className="web-projects__project">
          <h3>Specific projects:</h3>
          <div className="web-projects__project-banner">
            <SystemButton buttonText="2019-2023 | Gavagai's front-end"    onTrigger={openProjectWindow} />
            <SystemButton buttonText="2018 | Inviso's front-end"          onTrigger={openProjectWindow} />
            <SystemButton buttonText="2016-2017 | Skiverse's front-end"   onTrigger={openProjectWindow} />
            <SystemButton buttonText="2016 | Lan Studio Web"              onTrigger={openProjectWindow} />
            <SystemButton buttonText="2015 | Uni | Sitges Festival Web"   onTrigger={openProjectWindow} />
            <SystemButton buttonText="2014 | Uni | Marble Hornets Web"    onTrigger={openProjectWindow} />
            <SystemButton buttonText="2013 | Uni | Aperture Laboratories" onTrigger={openProjectWindow} />
          </div>
          <div className="web-projects__project-body">
            <div className="professional">
              <section>
                <h3>My story with web development</h3>
                <p>
                  I started web development in 2025 while studying Multimedia Engineering at university. I already had the idea of being a programmer once I finished studying, but I didn't know I would like it so much. I organized the team for the first big web project we had to do. We ended up doing a <a href="" target="_blank">website for Portal's fictional company, Aperture Science</a>, still pretty proud of that.
                  <br/><br/>
                  In the following years I did a couple more projects, <a href="https://citmalumnes.upc.es/~guillermopdl/Marble_Hornets_Guillermo_Pradas/" target="_blank" >a mock website promoting my favorite webseries, Marble Hornets</a> and the website for what was then a creative studio I wanted to organize called <a href="https://citmalumnes.upc.es/~guillermopdl/lanStudio/" target="_blank" >Lan Studio</a>. The final big project for University was the adventure game demo <a href="https://citmalumnes.upc.es/~guillermopdl/blanknull/" target="_blank" >"blank(null)"</a>, an html based game using three.js, a WebGL library. From there I started working in tech companies as a front-end developer, designing and programming for all their webs, projects and products:
                </p>
              </section>
              <section id="gavagai-body">
                <div className="company-header">
                  <div>
                    <h1>Gavagai</h1>
                    <h3>2019 - 2023</h3>
                  </div>
                  <div className="company-header-logo">
                    <img src="/icons/gavagai.png" />
                  </div>
                </div>
                <p>
                  Gavagai is a service company that offers a number of solutions through their AI powered products.
                  <br/><br/>
                  My time in Gavagai was spent developing features for their flagship product, The Explorer. Clients can feed the explorer reviews from their products or services and the AI powered backend will assign sentiments to every sentence in the dataset.
                  <br/><br/>
                  My main task in Gavagai was to implement front-end functionality for every new feature added to the API.<br/><br/>This included the implementation various graphs (using <b>d3.js</b>), filter options for the dataset, visualization options, lists for parts of the datasets, navigation, etc.
                  <br/><br/>
                  The harder task I had to do in Gavagai was being part of the team that would port the whole front-end application from knockout.js to <b>Vue 2</b>. This included doing all the mockups from scratch in <b>Figma</b>, doing research work, getting feedback from clients and inner employees, and finally, implementing it. Eventually we would migrate to <b>Vue 3</b>.
                  <br/><br/>
                  At the end of my time in Gavagai, I had learned to develop a big project in the Vue framework, implement unit testing in <b>Jest</b>, learn how to organize a team using scrum and agile methodology, eficient pull request usage for continuous implementation, some express.js, among other stuff.
                  <br/><br/>
                </p>
              </section>
              <section id="insikt-body">
                <div className="company-header">
                  <div>
                    <h1>Insikt</h1>
                    <h3>2018 - 2019</h3>
                  </div>
                  <div className="company-header-logo">
                    <img src="/icons/insikt.png" />
                  </div>
                </div>
                <p>
                  Insikt is another &quot;AI powered&quot; company. Their main focus is to develop cloud based applications that monitor and detect possible terror threats around the world. Their main clients are security companies.
                  <br /><br/>
                  My main job in Insikt was to develop front-end functionalities in <b>Angular</b> for one of their products. This was my first time touching a big application in a <b>Node</b> framework. This allowed me to learn a lot of the general Node intricacies, framework architecture and most importantly, <b>typescript</b>.
                  <br /><br/>
                </p>
              </section>
              <section id="tekman-body">
                <div className="company-header">
                  <div>
                    <h1>Tekman</h1>
                    <h3>2018</h3>
                  </div>
                  <div className="company-header-logo">
                    <img src="/icons/tekman.jpg" />
                  </div>
                </div>
                <p>
                  Tekman is an educational company. Their main product is a secondary school method that comes with an online platform which contains their digital books and educational material. This product is thought-out to be sold to specific schools, then implemented into how teachers educate and students learn.
                  <br/><br/>
                  My main task in Tekman was to design and implement their onboarding system for students. I made research work to best implement this system and then overlapped it on the platform. I also touched some <b>Symfony</b> for developing internal tools.
                  <br/><br/>
                </p>
              </section>
              <section id="tenea-body">
                <div className="company-header">
                  <div>
                    <h1>Tenea</h1>
                    <h3>2017-2018</h3>
                  </div>
                  <div className="company-header-logo">
                    <img src="/icons/tenea.png" />
                  </div>
                </div>
                <p>
                  Tenea is a technological consulting company.
                  <br/><br/>
                  My main tasks in Tenea were to develop html frameworks and implementations for their various clients. I also worked on their Human Resources Suit, Tenea-Talent.
                  <br/><br/>
                  I mainly touched <b>vanilla HTML, javascript, Jquery, CSS and internal frameworks</b>.
                  <br/><br/>
                </p>
              </section>
              <section id="skiverse-body">
                <div className="company-header">
                  <div>
                    <h1>Skiverse</h1>
                    <h3>2016 - 2017</h3>
                  </div>
                  <div className="company-header-logo">
                    <img src="/icons/skiverse.jpg" />
                  </div>
                </div>
                <p>
                  Skiverse is a B2B platform aimed at selling skiing forfaits and hotel reservations.
                  <br/><br/>
                  My main tasks in Skiverse was to develop their whole front-end. in <b>twig, a PHP framework</b> and <b>vanilla html, js and css</b>.
                  <br/><br/>
                </p>
              </section>
            </div>
            <div className="all">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
