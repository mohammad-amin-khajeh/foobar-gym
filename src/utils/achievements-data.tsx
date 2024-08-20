import { FaBriefcase, FaClock, FaTrophy } from "react-icons/fa";
import { ImUsers } from "react-icons/im";

type stat = {
  id: number;
  number: number;
  icon: any;
  title: string;
};
export const stats: stat[] = [
  {
    id: 0,
    number: 31,
    icon: FaBriefcase,
    title: "دوره ها",
  },

  {
    id: 1,
    number: 168,
    icon: FaClock,
    title: "ساعت های کاری در هفته",
  },

  {
    id: 2,
    number: 26,
    icon: FaTrophy,
    title: "مقام های کشوری",
  },
  {
    id: 3,
    number: 839,
    icon: ImUsers,
    title: "شاگرد های راضی",
  },
];
