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
            <a href="#gavagai-body"><img src="/icons/pedestals/gavagai.png" /></a>
            <a href="#insikt-body"><img src="/icons/pedestals/insikt.png" /></a>
            <a href="#tekman-body"><img src="/icons/pedestals/tekman.png" /></a>
            <a href="#tenea-body"><img src="/icons/pedestals/tenea.png" /></a>
            <a href="#skiverse-body"><img src="/icons/pedestals/skiverse.png" /></a>
          </div>
        </div>
        <div className="web-projects__project">
          <div className="web-projects__project-banner">
            <SystemButton buttonText="2019 - 2023 | Gavagai's front-end"      onTrigger={openProjectWindow} />
            <SystemButton buttonText="2018 | Inviso's front-end"              onTrigger={openProjectWindow} />
            <SystemButton buttonText="2016 - 2017 | Skivere's front-end"      onTrigger={openProjectWindow} />
            <SystemButton buttonText="2016 | Lan Studio Web"                  onTrigger={openProjectWindow} />
            <SystemButton buttonText="2015 | *Uni* | Sitges Festival Web"     onTrigger={openProjectWindow} />
            <SystemButton buttonText="2014 | *Uni* | Marble Hornets Web"      onTrigger={openProjectWindow} />
            <SystemButton buttonText="2013 | *Uni* | Aperture Laboratories"   onTrigger={openProjectWindow} />
          </div>
          <div className="web-projects__project-body">
            <div className="professional">
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
                  My main task in Gavagai was to implement front-end functionality for every new feature added to the API.<br/><br/>This included the implementation various graphs (using d3.js), filter options for the dataset, visualization options, lists for parts of the datasets, navigation, etc.<br/><br/>
                  The harder task I had to do in Gavagai was being part of the team that would port the whole front-end application from knockout.js to Vue2. This included doing all the mockups from scratch, doing research work, getting feedback from clients and inner employees, and finally, implementing it. Eventually we would migrate to Vue 3.
                  <br/><br/>
                  At the end of my time in Gavagai, I had learned to develop a big project in the Vue framework, implement unit testing in Jest, learn how to organize a team using scrum and agile methodology, eficcient pull request usage for continuous implementation, some express.js, among other stuff.
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
                  My main job in Insikt was to develop front-end functionalities in Angular for one of their products.
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
                  My main task in Tekman was to design and implement their onboarding system for students. I made research work to best implement this system and then overlapped it on the platform.
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
                  My main tasks in Tenea were to develop html frameworks and implementations for their various clients
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
                  My main tasks in Skiverse was to develop their whole front-end. in twig, a PHP framework and vanilla html, js and css.
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
