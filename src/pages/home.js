import React from "react";

const Home = () => {
  return (
    <div>
      <nav class="navbar background">
        <ul class="nav-list">
          <div class="logo">
            <img src="logo512.png" />
          </div>
          <li>
              <a href="#browse">Browse</a>
            </li>
            <li>
              <a href="#create">Create</a>
            </li>
            <li>
              <a href="#login">Login</a>
            </li>
            <div class="logo">
              <img src={logo2} />
            </div>
        </ul>

        <div class="rightNav">
          <input type="text" name="search" id="search" />
          <button class="btn btn-sm">Search</button>
        </div>
      </nav>

      <section class="section">
        <div class="box-main">
          <div className={"wiggle ls ease-in-out infinite"}>
            <Typewriter
              options={{
                wrapperClassName: "type_writer",
                cursorClassName: "cursor_class",
                strings: [
                  "<strong style='font-size: 50pt'>Mynute Skills</strong>",
                  "<strong style='font-size: 50pt'>Casual Learning</strong>",
                  "<strong style='font-size: 50pt'>Better than Skillshare and Udemy</strong>",
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
            <h1 class="text-big">Welcome to Mynute Skills!</h1>
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
                on essential life skills during my busy schedule. I wouldn't be
                <br />
                where I am today without it!"
              </i>
              <br />
              <b>~Barack Obama, 44th President of the United States</b>
              <br />
            </p>
          </div>
          <div class="secondhalf img">
            <div>
              <img src="obama.png" />
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
  );
};

export default Home;
