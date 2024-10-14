import {
  PiCreditCardDuotone,
  PiCurrencyCircleDollarDuotone,
  PiRocketDuotone,
  PiTicketDuotone,
} from "react-icons/pi";
import UserDetails from "./UserDetails";
import UserDetailsSummary from "./UserDetailsSummary";

export default function MyAccount() {
  return (
    <div>
      <div className="flex items-center gap-4">
        <UserDetails
          title={0}
          preTitle="مجموع پرداخت ها"
          color="yellow"
          icon={<PiCreditCardDuotone />}
          credite={true}
        />
        <UserDetails
          title={0}
          preTitle="دوره های من"
          color="green"
          icon={<PiRocketDuotone />}
          course={true}
        />
        <UserDetails
          title={0}
          preTitle="مجموع تیکت ها"
          color="blue"
          icon={<PiTicketDuotone />}
          ticket={true}
        />
        <UserDetails
          title={0}
          preTitle="موجودی حساب"
          color="pink"
          icon={<PiCurrencyCircleDollarDuotone />}
          credite={true}
        />
      </div>
      <UserDetailsSummary />
    </div>
  );
}
