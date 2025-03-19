import css from '@/components/DashboardEvents/dashboardEvents.css';
import axios from 'axios';
import ActionBtns from './ActionBtns';
import {format} from 'date-fns';
import { revalidatePath } from 'next/cache'

export const Status = {
  PENDING: "PENDING",
  VERIFIED: "VERIFIED",
  CANCELLED: "CANCELLED",
}

const api_url = process.env.NEXT_PUBLIC_API_URL;

  const getInverification = async () => {
    try {
      const res = await axios({
        url: `${api_url}/v1/events/status`,
        method: 'POST',
        data: {
          status: Status.PENDING,
        },
      });
      return res.data.data;
    }catch (err) {  
      console.log(err);
    }
  };

  const Events= async () => {
    revalidatePath("/dashboard/events")

    const events = await getInverification();
  

  return (
    <div className='events_main'>
      <h2>Events in Verification</h2>
      {events &&
        events.map((event) => (
          <div className='eventContainer' key={event._id}>
            <div className='details'>
              <div className='evntName'>
                <p>{event.title}</p>
              </div>
              <div className='evntDate'>
                <p>{format(new Date(event.deadlineDate), "PPP")}</p>
              </div>
              <div className='evntDesc'>
                <span>{event.description}</span>
              </div>
            </div>
            <ActionBtns id={event._id} />
          </div>
        ))}
    </div>
  );
}

export default Events;
