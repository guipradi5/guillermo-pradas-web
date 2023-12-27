"use client"
import React from "react";
import "./globals.css"
import SystemButton from "../components/SystemButton/SystemButton";

export default function Games() {

  const games = [
    {
      name: "Undetected",
      img: "/img/projects/ZkG31A.png"
    },
    {
      name: "blank(null)",
      img: "/img/projects/bn-logo.png"
    },
    {
      name: "Purple Ashes",
      img: "/img/projects/pyFzub.png"
    }
  ]

function scrollToGame(index:Number) {
  if(document.getElementById(`game${index}`)){
    document.getElementById(`game${index}`)?.scrollIntoView()
  }
}

  return (
    <div className="game-projects">
      <div className="game-projects__banner">
        <img src="/img/banner-games.png" />
      </div>
      <div className="game-projects__body">
        
      <div className="game-projects__index">
          <h2>Released Games</h2>
          <div>
          {games.map((game, index) => (
            <SystemButton key={game.name} onTrigger={() => scrollToGame(index)} ><img src={game.img} /></SystemButton>
          ))}
          </div>
        </div>
        <div className="game-projects__projects">
          <h2>Game Development</h2>
          <a className="itch-link" href="https://synaptic-oddity.itch.io/undetected" target="_blank"><img src="/icons/itch.png" />Link to my itch.io</a>
          <p>
            I started game development in 2015 while in University. The first engine I learned to use was Unity. Only worked on the usual assignments like doing infinite little games and such.
            <br/><br/>
            Even before that I tampered a bit with RPG Maker, modding games I had already played.
          </p>

          <h3 id="game0"><b>Undetected</b></h3>
          <a className="itch-link" href="https://synaptic-oddity.itch.io/undetected" target="_blank"><img src="/icons/itch.png" />Link to itch.io</a>
          <p>
            <img className="game-projects__projects-img" src="/img/projects/zMFWb2.png" />
            Here comes "Undetected", a little stealth prototype that 4 of us made in 2016 as an assignment for Uni. It's a little comedy game that follows a team of 5 robbers. The latest mission from this group is to infiltrate and steal the golden cat statue, saved in abunker under a rich woman's mansion. You control 3 of the robbers, each one with a specific mechanic that neutralizes hazards in each of the 3 levels. Find the golden cat statue and return safe to your team without being detected.
          </p>


          <h3 id="game1"><b>blank(null) [____()]</b></h3>
          <a className="itch-link" href="https://citmalumnes.upc.es/~guillermopdl/blanknull/" target="_blank">Link to blank(null) [In process of being fixed]</a>
          <p>
            <img className="game-projects__projects-img"  src="/img/projects/bn-ss2.png" />
              <img className="game-projects__projects-img"  src="/img/projects/bn2.png" />
            Shortly after Undetected, we had to do our Final Deegree Project. A solo effort that would see us as students bringing a proposal of a project from start to finish. In my wish to merge my 2 passions, games and web development, I decided to create an adventure that could be played in browser, feature 3d environments and point and click adventure gameplay. I had the name ready, "____()", a "symbol" that could mean anything, just knew that I wanted to create something a bit experimental with that name. And I had the protagonist, one day I suddenly drew a girl in a winter hat and, I don't know why, I associatted her with the "____()" concept. 
            <br/><br/>
            From there, the rest of the story started to unfold as I wanted something that would leave the fourth wall open at all times. What resulted was a story of you, as a player, discovering this company's long lost website that lets you connect to an abandoned virtual world, here, you discover G, an amnesiac sentient program that is unable to leave the folder she's in. She asks you for help to go explore the rest of the company's network and discover who she is. 
            <span className="bn-imgs">
              <img className="game-projects__projects-img"  src="/img/projects/bn-ss1.png" />
              <img className="game-projects__projects-img"  src="/img/projects/bn-ss3.png" />
            </span>
            <br/><br/>
            In the game you go through a couple of 3d environments, rendered using three.js, solving puzzles to uncover more of the story. All of the game is made in basic HTML, JS, Jquery and CSS, really rough actually. In the end, you have to "fight" another entity in the machine, H. At the end, G disconnects as both of you fall from a whole created by H. And the game ends! I was planning on making more, but for the scope of the project I couldn't make more.<br/>
            The game had a 10/10 note from my Uni's jury and I was requested to pitch the game to a couple of publishers, but none of these publishers were game publishers, they were actually book publishers so that opportunity stayed there.
            <span className="bn-imgs">
              <img className="game-projects__projects-img"  src="/img/projects/bn3.png" />
              <img className="game-projects__projects-img"  src="/img/projects/bn1.png" />
            </span>
          </p>


          <h3>After Uni</h3>
          <p>
            From then on, I focused on the web development industry and didn't make games for a while, only started little projects here and there and learned a bit more of C# and Unity along the way with little projects that would amount to nothing.
            <br/><br/>
            Fast forward to 2021 and I enter into a little game jam called "1 jam", hosted by an arts discord server called believeInTheNet. Here, the assignment was to do WHATEVER as long as 1 person would do it. I started wanting to do a little RPG game but the scope was far beyond of what I could do in a week. So I restarted with 3 days in the clock left. What resulted was a little interactive story.
          </p>

          <h3 id="game2"><b>Purple Ashes</b></h3>
          <a className="itch-link" href="https://synaptic-oddity.itch.io/purple-ashes" target="_blank"><img src="/icons/itch.png" />Link to itch.io</a>
          <p>
            <img className="game-projects__projects-img" src="/img/projects/zBQuuU.png" />
            A teenager is welcomed by a place simply called "The Bay". They must navigate this realm and face memories to be able to see someone dear to them that got lost so many years ago. At least that's the premise. As I said, I made this game in the span of 3 days. It tells the story of this teenager that's ready to go into adulthood, for that, they must go through a ritual that requires YEARS of preparation, but in the last minute, they realize this preparation distanced themselves from their true self, but most important of all, it buried the memory of someone, a long lost friend of theirs. Just seconds before commiting to the ritual, a supernatural phenomenon happens, a parallel plane of reality called "The Bay" listens to their realization and offers them the opportunity to bring back this dear person, but only if they are willing to change and rediscover themselves.
            <br/> <br/>
            I don't even REMEMBER how this narrative about childhood vs adulthood and expectations for adult life came to life in the form of this game. I just remember jotting code and sentences into the project until it adopted the form it has right now. REALLY ROUGH. But really happy with the result, actually.
          </p>


          <h3>After the 1 jam and The Future</h3>
          <p>
            Since 2021 I immersed myself once more into work but I've been more connected to game dev thanks to the game jam. I decided to make a brand for all games I make, a name that could also be used for a studio. The name chosen was <b>Synaptic Oddity</b>.<br/>

            <span className="secret">Going forward, I finally continued with what I had left behind, blank(null). I decided to actually make a proper GAME instead of an online experience or something. But instead of doing or continuing blank(null) I decided to start something entirely new with the same premise (something akin to Demon Souls and Dark Souls), and spiritually reboot and continue the story that was left behind. </span>

            So I started my following project, <b>Ocean.OS</b>, a project that, in short, aims to create a client application that connects to a 90's abandoned MMORPG that has THEIR SERVERS STILL RUNNING. Documentation about this game was found and it allows me to recreate all systems and mechanics to be able to see what was in this virtual world.
            <br/><br/>
            I had been immersed into this project, programming the client in Unity... But that was until <a href="https://mobilegamer.biz/fuck-you-were-not-paying-inside-unitys-runtime-fee-fiasco/" target="_blank">Unity's fiasco</a>. Since then, I halted production on Ocean.OS for the time being (that server connection is not going anywhere for reasons that will be revealed later), and decided to start using <a href="https://godotengine.org/" target="">Godot Engine</a>. For that reason I decided focus on shorter games to learn the engine,, in specific 2 short games that could be done in the following couple of years with some of my close friends. When their production is almost done, I'll come back to port whatever I had for Ocean.OS to Godot and continue from there.<br/>
            Those 2 games are:
          </p>


          <h3><b>The Gamu</b></h3>
          <p>
            A short horror game that follows 4 kids in their vacations to their parent's little town in mediterranian Spain. While there, the kids hear of the legend of "The Gamu", a creature that no-one knows how it looks like and that lives in the sorrounding forests. The kids, decided to find the creature, immerse themselves into the woods at night while their parents are unaware, with the mission of finding and trapping The Gamu.
            <br/><br/>
            For this game, we're a team of 5 people, everyone doing a bit of everything, bringing ideas to the table, designing the characters, the setting, etc.
          </p>


          <h3><b>Rosaly</b></h3>
          <p>
            A short 2D visual novel with light combat elements. Rosaly tells the tale of the titular girl, Rosaly, who just moved into a new city with her mother and brother. Apart from the difficulties of trying to fit in and be part of the community, Rosaly has to deal with a strange phenomenon that has haunted her for all her life. In random moments, she will space out and be transported into a dark world full of creatures that want to harm her. She only can hide and wait for it to be over, moment in which, normally, she is in another place and time completely. And as if it wasn't enough, suddenly, people from her school start to get murdered, and the crime scenes try to frame Rosaly as the potential culprit. Coinciding with this, in her dark world trips, a new figure appears, only refering himself as "A shadow", and promises her that he's a friend that will help her fight the creatures for her. From here on, Rosaly and Shadow will have to clean Rosaly's name while trying to not get eaten by the dark world inhabitants.
            <br/><br/>
            For this game it's only us 2, me and my partner Yess. She handles art direction, characters, world and story while I handle programming and graphics.
          <br/>
          </p>

          <h3>"Futurer"</h3>
          <p>
            After these 2 games, it will be back to Ocean.OS, and after that, the dream would be to get a following decent enough to actually make a life out of making games and start doing games focused at being handled by publishers, as these 3 are passion projects of ours and, for the time being, at least, we don't want much help with them. From whatever we learn doing these, we would want to start doing game-dev in a more serious manner. What games will come from that? Only time will tell.
          </p>
        </div>
      </div>
    </div>
  )
}
