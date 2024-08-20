import { FaUsers } from "react-icons/fa";
import { FaDumbbell, FaNoteSticky } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";

type Feature = {
  id: number;
  icon: any;
  title: string;
  description: string;
};
export const features: Feature[] = [
  {
    id: 0,
    icon: FaUsers,
    title: "فضای دوستانه و صمیمی",
    description:
      "سوال پرسیدن عیب نیست که! مربی های ما همیشه آماده کمک کردن و راهنمایی هستن.",
  },
  {
    id: 1,
    icon: IoIosPricetags,
    title: "قیمت های منطقی و منصفانه",
    description: "ما طرفدار سلامت هستیم نه پول!",
  },
  {
    id: 2,
    icon: FaDumbbell,
    title: "تجهیزات روز دنیا",
    description:
      "همه دستگاه های ما از برند تکنوجیم هستن که درحال حاضر برند یک دنیاست و معیار سنجش برند های دیگست!",
  },
  {
    id: 3,
    icon: FaNoteSticky,
    title: "منتورینگ تخصصی",
    description:
      "مربی های ما پیشرفت شما رو با دقت دنبال میکنن، چون اونا هم ی روزی مثل شما بودن:)",
  },
];
