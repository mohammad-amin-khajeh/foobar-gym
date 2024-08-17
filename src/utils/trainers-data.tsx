import { FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";

type socialMedia = {
  icon: any;
  href: string;
};
type trainerData = {
  id: number;
  image: string;
  name: string;
  role: string;
  description: string;
  social: socialMedia[];
};
const trainers: trainerData[] = [
  {
    id: 0,
    image: "assets/img/trainers/david.jpg",
    name: "دیوید ویلیامز",
    role: "مربی بدن سازی",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    social: [
      { icon: FaInstagram, href: "https://www.instagram.com/" },
      { icon: FaTelegram, href: "https://web.telegram.org/k/" },
      { icon: FaYoutube, href: "https://www.youtube.com/" },
    ],
  },

  {
    id: 1,
    image: "assets/img/trainers/rosy.jpg",
    name: "رز رودریگز",
    role: "مربی کاردیو",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    social: [
      { icon: FaInstagram, href: "https://www.instagram.com/" },
      { icon: FaTelegram, href: "https://web.telegram.org/k/" },
      { icon: FaYoutube, href: "https://www.youtube.com/" },
    ],
  },

  {
    id: 2,
    image: "assets/img/trainers/matt.jpg",
    name: "مت گارسیا",
    role: "مربی کراس فیت",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    social: [
      { icon: FaInstagram, href: "https://www.instagram.com/" },
      { icon: FaTelegram, href: "https://web.telegram.org/k/" },
      { icon: FaYoutube, href: "https://www.youtube.com/" },
    ],
  },

  {
    id: 3,
    image: "assets/img/trainers/sofia.jpg",
    name: "سوفیا اسمیت",
    role: "مربی فیتنس",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    social: [
      { icon: FaInstagram, href: "https://www.instagram.com/" },
      { icon: FaTelegram, href: "https://web.telegram.org/k/" },
      { icon: FaYoutube, href: "https://www.youtube.com/" },
    ],
  },
];

export default trainers;
