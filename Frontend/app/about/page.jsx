import Image from "next/image";
import "./page.css";

const About = () => {
  return (
    // <div>hello</div>
    <div className=" bg-slate-900 relative pt-12  flex justify-center ">
      <div className="flex justify-center text-black pt-12  hidden md:block">
        <div className="relative w-full lg:max-w-4xl md:max-w-3xl">
          {/* Left Side Pages */}
          <div className="absolute left-0 top-0 w-1/3 h-full   bg-orange-50 shadow-lg transform rotate-y-6 -translate-x-4 z-10"></div>
          <div className="absolute left-0 top-0 w-1/3 h-full bg-orange-50 shadow-lg transform rotate-y-3 -translate-x-2 z-20"></div>

          {/* Right Side Pages */}
          <div className="absolute right-0 top-0 w-1/3 h-full bg-orange-50 shadow-lg transform -rotate-y-6 translate-x-4 z-10 "></div>
          <div className="absolute right-0 top-0 w-1/3 h-full bg-orange-50 shadow-lg transform -rotate-y-3 translate-x-2 z-20  "></div>

          {/* Main Content Pages */}
          <div className="relative flex h-screen justify-between bg-orange-50 shadow-2xl shadow-black z-30">
            {/* First Page */}
            <div
              className="w-1/2  p-8 shadow-2xl"
              // style={{ box-shadow: 40px 0 0 0.1 rgba(0, 0, 0, 0.9)}}
            >
              <p className="text-2xl font-bold">Who Are We?</p>
              <p>
                Welcome to our college student-led platform, your ultimate hub
                for promoting college events, hackathons, syllabus information,
                and fostering a sense of unity among students from different
                colleges. We are a passionate group of students committed to
                enhancing your college experience. Our mission is to provide a
                seamless resource where you can discover exciting upcoming
                events, participate in thrilling hackathons, access your
                syllabus effortlessly, and connect with a community that shares
                your academic journey. Additionally, we are dedicated to
                bridging the gap between institutions and creating a powerful
                union of young minds.
              </p>
            </div>
            <div className=" drop-shadow-2xl bg-black-900 w-1 "></div>
            {/* Second Page */}
            <div className="w-1/2 p-8 shadow-2xl relative ">
              <p className="text-2xl font-bold">What We Do?</p>
              <p>
                On our platform, you can engage with fellow students, share
                ideas, collaborate on projects, and collectively shape an
                inspiring community that transcends college boundaries. Join us
                in building a stronger, interconnected student community and
                navigate the exciting world of college life together!
              </p>
              <ul>
                <li>- Join Events</li>
                <li>- Get Resources</li>
                <li>- Apply for Opportunities</li>
              </ul>
              <div className="absolute bottom-28 right-5 h-20 w-60 ">
                <Image src="/blacklogo-removebg.png" layout="fill" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-black p-12 pb-0 relative  text-black   md:hidden overflow-hidden">
        <div className="absolute right-12 top-12 w-1/3 fixed h-full   bg-orange-50 shadow-lg transform -rotate-y-0 translate-x-4 z-10"></div>
        <div className="absolute right-12 top-12 w-1/3 fixed h-full  bg-orange-50 shadow-lg transform -rotate-y-0 translate-x-2 z-20"></div>

        <div className="relative p-10 pt-5 fixed bg-orange-50 overflow-scroll  text-sm shadow-2xl w-full shadow-black z-30">
          <p className="text-xl font-bold">What We Do?</p>
          <p>
            On our platform, you can engage with fellow students, share ideas,
            collaborate on projects, and collectively shape an inspiring
            community that transcends college boundaries. Join us in building a
            stronger, interconnected student community and navigate the exciting
            world of college life together!
          </p>
          <ul className="">
            <li>- Join Events</li>
            <li>- Get Resources</li>
            <li>- Apply for Opportunities</li>
          </ul>
          <div className=" pt-10  flex justify-end">
            <Image src="/blacklogo-removebg.png" width={200} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
