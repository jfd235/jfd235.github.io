import React from "react";
import "../App.css";
import Typewriter from "typewriter-effect";
import logo1 from "../Logos-06.png";
import logo2 from "../Logos-08.png";
import logo3 from "../Logos-09.png";

import obama from "../obama.png";

const Home = () => {
  return (
    <div className="home">
      <div class="navbar background">
        <ul class="nav-list">
            <img className="logoimg" src={logo2} />
          <div className="title">
            <span>Mynute Skills</span>
          </div>
        </ul>
      </div>

      <div className="body">
        <section class="section slogan">
          <div class="box-main">
            <div className={"wiggle ls ease-in-out infinite"}>
              <Typewriter
                options={{
                  wrapperClassName: "type_writer",
                  cursorClassName: "cursor_class",
                  strings: [
                    "<strong style='font-size: 30pt'>Mynute Skills</strong>",
                    "<strong style='font-size: 30pt'>Casual Learning</strong>",
                    "<strong style='font-size: 30pt'>Adulting Skills at One Stop</strong>",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 100, // SET TO USE A 1 SECOND DELAY
                  deleteSpeed: 50,
                }}
              />
            </div>
          </div>
        </section>

        <section class="section">
          <div class="box-main">
            <div class="firstHalf">
              <h1 class="text-big">
                Welcome to <span className="mynuteskills">Mynute Skills</span>!
              </h1>
              <p class="text-small">
                Your one-stop shop for casual learning. Browse our selection of
                specially curated adulting skills videos!
              </p>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="box-main">
            <div class="secondHalf">
              <h1 class="text-big" id="program">
                Latest Updates
              </h1>
              <p class="text-small">
                Got a minute? Check out some of these quick videos!
                <br />
                <a href="https://www.youtube.com/watch?v=oDw9iwzdKFI">
                  Last Minute Taxes
                </a>
                <br />
                <a href="https://www.youtube.com/watch?v=GwNtDvKrCDA">
                  Quick Recipe
                </a>
                <br />
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  Super Cool Life Hack!
                </a>
              </p>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="box-main">
            <div class="secondHalf">
              <h1 class="text-big" id="program">
                Testimonials
                <p class="text-small">
                  Check out what some of our users had to say!
                </p>
              </h1>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="box-main">
            <div class="secondHalf">
              <p class="text-small">
                <i>
                  "Mynute Skills gave me the head start I needed to get a head
                  <br />
                  on essential life skills during my busy schedule. I wouldn't
                  be
                  <br />
                  where I am today without it!"
                </i>
                <br />
                <b>- Barack Obama, 44th President of the United States</b>
                <br />
              </p>
            </div>
            <div class="secondhalf img">
              <div>
                <img src={obama} />
              </div>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="box-main">
            <div class="secondHalf">
              <h1 class="text-big" id="program">
                Questions?
              </h1>
              <p class="text-small">
                We don't have an email or anything so your best bet is to yell
                really loud.
              </p>
            </div>
          </div>
        </section>
        <footer className="footer">
          <p className="text-footer">Copyright ©-All rights are reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
