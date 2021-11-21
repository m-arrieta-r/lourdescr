import React from 'react';

import Layout from '../components/Layout';
import video from '../assets/videos/tour-video.mp4';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <div className="videoContainer">
        <video autoPlay loop playsInline muted src={video}></video>
        <div className="slogan">
          <h2>Learn coffee with <br/> my family</h2>
        </div>
        <div className="seeMore">
          <span>See More</span>
          <a href="/#" className="icon fas fa-angle-up">
            <span className="label"></span>
          </a>
        </div>
      </div>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Lorem ipsum dolor</h3>
          <p>
          </p>

          <p>
            Vestibulum ultrices risus velit, sit amet blandit massa auctor sit
            amet. Sed eu lectus sem. Phasellus in odio at ipsum porttitor mollis
            id vel diam. Praesent sit amet posuere risus, eu faucibus lectus.
            Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta quam.
            Proin nec dui cursus, posuere dui eget interdum. Fusce lectus magna,
            sagittis at facilisis vitae, pellentesque at etiam. Quisque posuere
            leo quis sem commodo, vel scelerisque nisi scelerisque. Suspendisse
            id quam vel tortor tincidunt suscipit. Nullam auctor orci eu dolor
            consectetur, interdum ullamcorper ante tincidunt. Mauris felis nec
            felis elementum varius.
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
