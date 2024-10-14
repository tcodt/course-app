import {
  PiTicketDuotone,
  PiEnvelopeOpenDuotone,
  PiChatsDuotone,
  PiPlusCircleDuotone,
} from "react-icons/pi";
import UserDetails from "./UserDetails";
import { Link } from "react-router-dom";

export default function Tickets() {
  return (
    <div className="flex flex-col">
      <>
        <div className="flex gap-4 items-center">
          <UserDetails
            title={0}
            preTitle="همه تیکت ها"
            color="yellow"
            icon={<PiTicketDuotone />}
            ticket={true}
          />
          <UserDetails
            title={0}
            preTitle="تیکت های باز"
            color="blue"
            icon={<PiEnvelopeOpenDuotone />}
            ticket={true}
          />
          <UserDetails
            title={0}
            preTitle="بسته شده"
            color="pink"
            icon={<PiChatsDuotone />}
            ticket={true}
          />
        </div>
        <Link to="/dashboard/new_ticket" className="w-1/4">
          <UserDetails
            title="تیکت جدید"
            color="cursorButton"
            cursorButton={true}
            icon={<PiPlusCircleDuotone />}
          />
        </Link>
      </>

      <div>
        <div className="flex flex-col bg-slate-200 dark:bg-slate-600 p-4 rounded-lg gap-4">
          <div className="flex justify-between">
            <h5 className="text-lg text-gray-700 dark:text-zinc-100">
              تیکت ها
            </h5>
          </div>
          <hr className="border-white" />
          <div className="text-center">
            <p className="text-base text-gray-600 dark:text-zinc-400">
              تا به الان هیچ تیکتی ارسال نکرده‌اید.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
