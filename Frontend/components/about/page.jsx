import Image from "next/image";

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-8 md:px-16 py-12 md:py-20 text-base-content mt-20px">
      <div className="relative h-70 md:h-auto">
        <Image
          src="/about.jpeg"
          layout="fill"
          objectFit="cover"
          alt="About Us Image"
          className="filter grayscale"
        />
        <div className="absolute bottom-6 left-6 bg-base-100 rounded px-10 py-5">
          <h1 className="text-xl md:text-2xl font-bold">A network</h1>
          <h2 className="text-sm md:text-base">Created for all college students</h2>
        </div>
      </div>
      <div>
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Who Are We?</h1>
          <p className="text-base md:text-lg leading-relaxed">
            Welcome to our college student-led platform, your ultimate hub for promoting college events, hackathons, syllabus information, and fostering a sense of unity among students from different colleges. We are a passionate group of students committed to enhancing your college experience.
            <br /><br />
            Our mission is to provide a seamless resource where you can discover exciting upcoming events, participate in thrilling hackathons, access your syllabus effortlessly, and connect with a community that shares your academic journey. Additionally, we are dedicated to bridging the gap between institutions and creating a powerful union of young minds.
          </p>
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">What We Do?</h1>
          <p className="text-base md:text-lg leading-relaxed">
            On our platform, you can engage with fellow students, share ideas, collaborate on projects, and collectively shape an inspiring community that transcends college boundaries. Join us in building a stronger, interconnected student community and navigate the exciting world of college life together!
            <br /><br /> - Dynamic Websites
            <br /><br /> - Fast and Handy
            <br /><br /> - Mobile Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;


