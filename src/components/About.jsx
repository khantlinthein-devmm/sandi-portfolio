import AboutPic from "../assets/profile.jpg";

const About = () => {
  return (
    <section id='about' className="bg-indigo-500 w-[100%] h-[100vh] ">
      <div>
        <h1 className="justify-center items-center flex text-4xl font-poppin pt-[50px] pb-10">
          About Me
        </h1>
        <div className=" w-full h-full flex ">
          <span className=' '>
            <img
              src={AboutPic}
              alt="sophia"
              className=" w-[400px] h-[500px] shadow-2xl pl-3 "
            />
          </span>

          <p className=" text-2xl font-poppin pt-10 pl-10">
            I started working on gender equality and women empowerment as a
            volunteer since 2018.
            <br /> After the She Lead program, I worked as a volunteer at MRWO,
            <br /> promoting women&apos;s participation in all areas of
            leadership, Child Rape and youth empowerment.
            <br /> And also Worked as HUG to share the environmental knowledge
            around the Magway Reagion.
            <br /> Then, after attending the Comprehensive sexuality education
            program (UNESCO),
            <br /> sexuality education was shared to LGBT communities and Sex
            workers. ကျွန်မနာမည်ကတော့ စုစုပါ
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
