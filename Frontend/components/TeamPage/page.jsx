import { FaHandshakeAngle } from "react-icons/fa6";

const TeamPage = () => {
    const  TeamMember = [
        {
            img :"/testimonial-t2.jpg" , 
            name : "Vikram Malhotra" , 
            role : "Chief Executive Officer (CEO)" ,
        } , 
        {
            img :"/testimonial-t3.jpg" , 
            name : "Karan Patel" , 
            role : "Chief Technology Officer (CTO)" ,
        } ,
         {
            img :"/testimonial-t1.jpg" , 
            name : "Ayesha Khan" , 
            role : "Instructional Designer" ,
        } , 
         {
            img :"/testimonial-t4.jpg" , 
            name : "Tushar Sharma" , 
            role : "Head of Content Development" ,
        } , 
        
    ]

    const TeamRoles = [
        "Technical Lead",
        "Community Manager",
        "Content Strategist",
        "ALL"

    ]

  return (
    <>
      <div className="text-white flex flex-col items-center p-5 gap-5 ">
         {/* Heading */}
       <div className="flex flex-col gap-3 mt-5 items-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl ">
            <mark className="p-1 text-white rounded "
            style={{
                background: ' linear-gradient(90deg, rgb(217, 79, 64) 3%, #edb04d 35%, rgba(39, 189, 187, 1) 100%)',
                boxShadow: '0px 0px 1px 1px #6c707594',
                filter: 'drop-shadow(4px 4px 5px black)',
              }}
            >MEET</mark>
             THE TEAM</h1>
        <div className="flex gap-2 flex-wrap">
            {
                 TeamRoles.map((team , idx)=>(
                    <button key={idx} className=" bg-[#D84315] hover:bg-[#924229]
                    font-semibold py-2 px-4 rounded">{team}</button>
                 ))
            }

        </div>
       </div>

       <div className="flex  justify-center gap-4 flex-wrap p-3">
       {
        TeamMember.map((team , index) => {
            return (
                <div
                key={index}
                className="flex flex-col bg-gray-500 bg-opacity-10 hover:bg-opacity-20 transition duration-300 ease-in-out gap-2 p-4 items-center rounded-md bg-transparent transform hover:scale-105"
                style={{
                  boxShadow: '0px 0px 1px 1px #6c707594',
                  filter: 'drop-shadow(4px 4px 5px black)',
                }}
              >
                <div className="flex">
                <img
                  src={team.img}
                  alt={team.name}
                  className="w-[200px] h-[200px] rounded-full object-cover"
                />
                <FaHandshakeAngle size={"40px"} className="flex relative bg-[#ffffd0] rounded-full p-1  text-[#F57F17] left-[-195px] top-[145px]"/>
                </div>
                <div>
                  <h2
                  className="text-xl font-bold text-[#3fc1b6d6] "
                  >{team.name}</h2>
                  <p
                  className="text-[#e1410f] text-sm font-medium"
                  >{team.role}</p>
                </div>
              </div>
              
       )
        })
       }

       </div>


      </div>
    </>
  )
}

export default TeamPage
