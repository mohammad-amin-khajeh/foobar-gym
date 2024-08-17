import { FaCheck } from "react-icons/fa";
import { MdClose } from "react-icons/md";

type benefit = {
  icon: any;
  text: string;
};
type plan = {
  title: string;
  price: string;
  benefits: benefit[];
};
export const plans: plan[] = [
  {
    title: "استاندارد",
    price: "۵۰۰،۰۰۰",
    benefits: [
      {
        icon: FaCheck,
        text: "اخذ برنامه",
      },
      {
        icon: FaCheck,
        text: "دسترسی به همه ی وسایل باشگاه",
      },
      {
        icon: MdClose,
        text: "رژیم های غذایی",
      },
      {
        icon: MdClose,
        text: "دسترسی همه روزه",
      },
      {
        icon: MdClose,
        text: "منتورینگ تخصصی",
      },
      {
        icon: MdClose,
        text: "بیمه در صورت آسیب حین تمرین",
      },
    ],
  },

  {
    title: "حرفه ای",
    price: "۷۵۰،۰۰۰",
    benefits: [
      {
        icon: FaCheck,
        text: "اخذ برنامه",
      },
      {
        icon: FaCheck,
        text: "دسترسی به همه ی وسایل باشگاه",
      },
      {
        icon: FaCheck,
        text: "رژیم های غذایی",
      },
      {
        icon: FaCheck,
        text: "دسترسی همه روزه",
      },
      {
        icon: MdClose,
        text: "منتورینگ تخصصی",
      },
      {
        icon: MdClose,
        text: "بیمه در صورت آسیب حین تمرین",
      },
    ],
  },

  {
    title: "مخصوص",
    price: "۱،۰۰۰،۰۰۰",
    benefits: [
      {
        icon: FaCheck,
        text: "اخذ برنامه",
      },
      {
        icon: FaCheck,
        text: "دسترسی به همه ی وسایل باشگاه",
      },
      {
        icon: FaCheck,
        text: "رژیم های غذایی",
      },
      {
        icon: FaCheck,
        text: "دسترسی همه روزه",
      },
      {
        icon: FaCheck,
        text: "منتورینگ تخصصی",
      },
      {
        icon: FaCheck,
        text: "بیمه در صورت آسیب حین تمرین",
      },
    ],
  },
];
