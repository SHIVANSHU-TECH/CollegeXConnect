import css from "@/components/DashboardInternships/dashboardInternships.css";
import ActionBtns from './ActionBtns';
import axios from "axios"
import { revalidatePath } from 'next/cache'


export const Status = {
  PENDING: "PENDING",
  VERIFIED: "VERIFIED",
  CANCELLED: "CANCELLED",
}
const  api_url = process.env.NEXT_PUBLIC_API_URL;
  const getInverification = async()=>{
      try{
      const res = await axios({
        url: `${api_url}/v1/jobs/status`,
        method: "POST",
        data:{
          status: Status.PENDING
        }
      })
        return res.data.data;
      } catch (err) {
        console.log(err);
      }
    }
    

const Internships = async() => {
  revalidatePath("/dashboard/internships")
 const jobs = await getInverification();



  return (    
    <div className='I_main'>
      <h2>Internships in Verification</h2>
      {jobs && jobs.map((internship) => (
        <div className='IContainer' key={internship._id}>
          <div className='details'>
            <div className='IName'>
              <p>{internship.title}</p>
            </div>
            <div className='IDate'>
              <p>{internship.companyName}</p>
            </div>
            <div className='IDesc'>
              <span>{internship.description}</span>
            </div>
          </div>
          <ActionBtns id={internship._id}/>
        </div>
      ))}
    </div>
  )
}

export default Internships