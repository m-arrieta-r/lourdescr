import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/chayote-1.jpg';
import pic3 from '../assets/images/coffee-plantation.jpg';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h1>
          <a href="https://www.lourdes.cr/">Lourdes</a>, Costa Rica
        </h1>
        <p>
          A different light
        </p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <p>
          Lourdes is a small town located in a mountain in Naranjo, Costa Rica. <br/>It is surrounded by nature with extraordinary flora and fauna. Here you can breathe pure air and see resplendent coffee plantations, which produced one of the best coffees in the world.
        </p>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight" style={{display: 'none'}}>
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Culture
          </h2>
          <p>
            It is an amazing culture
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Nature
          </h2>
          <p>
            Chayote Protection Zone:  It is an amazing place, where you can be alone surrounded by nature
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Coffee Plantations
          </h2>
          <p>
            This town as Costa Rica had a great growth in 80s thanks to the coffee. Now there are many families that depends on the coffee production.
          </p>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
