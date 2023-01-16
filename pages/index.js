import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub,AiFillFacebook} from 'react-icons/ai'
import {FaHardHat} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {HiCode,HiDatabase, HiLibrary} from 'react-icons/hi'
import Image from "next/image";
import jay from '../public/jay/profile.jpg';
import jay1 from '../public/jay/JayPante1x1.jpg';
import image from'../public/jay/image.jpg';
import portals from'../public/jay/portals.png';
import todo from'../public/jay/todo.png';
import facebook from'../public/jay/facebook.png';
import {useState, useEffect, useRef} from 'react';

export default function Home() {

  


  const [darkMode, setDarkMode]= useState(true);
  const mystyle = {
    color: darkMode? "white":"black",
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jay Pante</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900"
        style={mystyle}
      >
        <section className=" min-h-screen">
          <nav className="py-10 mb-0 flex justify-between">
            <h1 className="text-4xl font-Dirgahayu text-teal-900 dark:text-gray-500">
              {" "}
              J<span className="text-teal-700 dark:text-gray-100">yp</span>nt
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://drive.google.com/file/d/1rURJCP83oQvef7miiNd0ED2xuMxGr2tf/view?usp=sharing"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Jay Pante
            </h2>
            <h3 className="text-2xl py-2">Software Developer</h3>
            <p
              style={mystyle}
              className="text-medium py-5 leading-8 text-gray-800 max-w-xl mx-auto"
            >
              Since its just the beginning of my journey, I only have few things
              to show. I wanted to work with talented people. I'm quite
              confident, naturally curious, and perpetually working on improving
              my skills one at a time.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-teal-900 dark:text-gray-100">
            <a href="https://wwww.facebook.com/jypnt">
              <AiFillFacebook className="cursor-pointer" />
            </a>
            <a href="https://github.com/jaypante">
              <AiFillGithub className="cursor-pointer" />
            </a>
            <a href="https://ph.linkedin.com/in/jay-pante-653693227?trk=people-guest_people_search-card">
              <AiFillLinkedin className="cursor-pointer" />
            </a>
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-72 h-72 mt-10 mx-auto overflow-hidden">
            <Image src={jay} alt="profile"  />
          </div>
        </section>
        <section>
          <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 ">
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 bg-gray-200 dark:bg-gray-800  ">
              <HiCode className="relative text-gray-700 w-20 h-20 mx-auto bg-teal-300 rounded-full" />

              <h3 className="text-lg font-medium pt-8 pb-2">
                Frontend Developer
              </h3>
              <p className="py-2">
                I like to code and build things, it gives me amusement when I
                see my ideas to reality. As a beginner, I enjoy following
                tutorials on youtube xD.
              </p>
              <h4 className="text-teal-700 pt-2 font-medium">
                Languages I used
              </h4>
              <p className="text-gray-800 dark:text-gray-300">React</p>
              <p className="text-gray-800 dark:text-gray-300">MUI</p>
              <p className="text-gray-800 dark:text-gray-300">Tailwind</p>
              <p className="text-gray-800 dark:text-gray-300">Javascript</p>
              <p className="text-gray-800 dark:text-gray-300">HTML</p>
              <p className="text-gray-800 dark:text-gray-300">CSS</p>
            </div>
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 bg-gray-200 dark:bg-gray-800">
              <HiDatabase className="relative text-gray-700 w-20 h-20 mx-auto bg-teal-300 rounded-full" />

              <h3 className="text-lg font-medium pt-8 pb-2">
                Backend Developer
              </h3>
              <p className="py-2">
                I like to challenge myself with different kinds of logic. I have
                limited idea in backend development, but trying to learn it
                slowly.
              </p>
              <h4 className="text-teal-700 pt-2 font-medium">
                Languages I used
              </h4>
              <p className="text-gray-800 dark:text-gray-300">PHP</p>
              <p className="text-gray-800 dark:text-gray-300">Java</p>
              <p className="text-gray-800 dark:text-gray-300">Python</p>
              <p className="text-gray-800 dark:text-gray-300">MySql</p>
            </div>
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 bg-gray-200 dark:bg-gray-800">
              <HiLibrary className="relative text-gray-700 w-20 h-20 mx-auto bg-teal-300 rounded-full" />

              <h3 className="text-lg font-medium pt-8 pb-2">Mentor</h3>
              <p className="py-2">
                The end goal! I want to share my experience to others by
                contributing to communities and help them grow.
              </p>
              <h4 className="text-teal-700 pt-2 font-medium">
                Under construction.
              </h4>
              <div className="text-4xl flex justify-center text-gray-500 p-10">
                {" "}
                <FaHardHat />
              </div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-3xl py-1 mt-10">My Recent Work</h3>
            <p
              style={mystyle}
              className="text-md py-2 leading-8 text-gray-800 max-w-xl mx-auto"
            >
              I developed this website using{" "}
              <span className="text-teal-500 font-medium">Next JS.</span> and{" "}
              <span className="text-teal-500 font-medium">Tailwind. </span>I
              also developed other projects, by following tutorials on youtube.
              Hopefully I can create my own website from scratch.
            </p>
            <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
              <div className=" text-center shadow-xl rounded-xl my-10 bg-gray-200 dark:bg-gray-800">
                <Image src={portals} className="shadow-lg" alt="portals" />

                <h3 className="text-lg font-medium p-5 ">Student Portal</h3>
              </div>
              <div className=" text-center shadow-xl  rounded-xl my-10 bg-gray-200 dark:bg-gray-800">
                <Image src={todo} className="shadow-lg" alt="todo" />

                <h3 className="text-lg font-medium p-5">To-do app</h3>
              </div>
              <div className=" text-center shadow-xl  rounded-xl my-10 bg-gray-200 dark:bg-gray-800">
                <Image src={facebook} className="shadow-lg" alt="facebook"/>

                <h3 className="text-lg font-medium p-5">Facebook Clone</h3>
              </div>
            </div>
          </div>
        </section>
        <footer className="text-center p-10 ">
          <h1 className="text-4xl font-Dirgahayu text-teal-900 dark:text-gray-500">
            {" "}
            J<span className="text-teal-700 dark:text-gray-100">yp</span>nt
          </h1>
        </footer>
      </main>
    </div>
  );
}
