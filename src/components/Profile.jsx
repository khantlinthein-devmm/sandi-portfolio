import { BsFacebook, BsInstagram, BsPinterest } from "react-icons/bs";
import { BiDownArrowCircle } from "react-icons/bi";
import { FaViber } from "react-icons/fa";
import ProfilePic from "../assets/hero_img.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Profile = () => {
  const [typeEffect] = useTypewriter({
    words: [" Programm Assistant", " Social Worker - INGO", " Class Assistant"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <section
      id="home"
      className="flex justify-around items-center  pb-[150px] pl-5  space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-slate-900  w-[100%] h-[100vh] "
    >
      <div className="lg:w1/3 ssm:w-fit">
        <div className="flex pl-[80px] items-center pt-20 space-x-3 ">
          <a href="">
            <BsFacebook size={20} color={"blue"} />
          </a>
          <a href="">
            <BsInstagram size={20} color={"brown"} />
          </a>
          <a href="">
            <BsPinterest size={20} color={"red"} />
          </a>
          <a href="">
            <FaViber size={20} color={"purple"} />
          </a>
        </div>
        <div>
          <span className="font-poppin text-xl">Hello, My name is</span>
          <span className="font-poppin font-bold text-indigo-800 text-2xl ">
            {" "}
            Su Sandi Soe
          </span>
        </div>
        <div>
          <span>
            <h1 className="text-3xl pb-6 ">
              I am a
              <span className="text-indigo-800 font-bold">{typeEffect}</span>
              <Cursor />
            </h1>
            <span className="font-poppin text-xl text-indigo-900 ">
              I started working on gender equality and women empowerment as a
              volunteer since 2018.
              <br /> After the She Lead program, I worked as a volunteer at
              MRWO,
              <br /> promoting women&apos;s participation in all areas of
              leadership, Child Rape and youth empowerment.
              <br /> And also Worked as HUG to share the environmental knowledge
              around the Magway Reagion.
              <br /> Then, after attending the Comprehensive sexuality education
              program (UNESCO),
              <br /> sexuality education was shared to LGBT communities and Sex
              workers.
              <hr />
            </span>
            <div className="space-x-5 pt-3">
              <a href="mailto:minkhantlinthein2@gmail.com">
                <button className="bg-yellow-300 p-3 text-black text-xl font-poppin border hover:border-yellow-500 hover:bg-white hover:text-black">
                  Hire Me
                </button>
              </a>

              <a href="/resume.pdf" download="resume.pdf">
                <button className="bg-indigo-400 p-3 text-white text-xl font-poppin border hover:border-indigo-600 hover:bg-white hover:text-black">
                  Get Resume
                </button>
              </a>
            </div>
          </span>
        </div>
      </div>
      <div className="w-[300px] h-60 ">
        <img
          src={ProfilePic}
          alt=""
          className="rounded-full border border-black shadow-2xl"
        />
      </div>
      <div className=" flex flex-row pl-1 rounded-full bg-indigo-400 hover:border-black hover:bg-black hover:transition duration-300 p-1 border shadow-xl text-white justify-center items-center ">
        <a href="#about">
          <button>
            <BiDownArrowCircle size={40} />
          </button>
        </a>
      </div>
    </section>
  );
};

export default Profile;
