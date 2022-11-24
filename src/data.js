//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

// projects images
import Project1 from "./assets/img/projects/pj1.png";
import Project2 from "./assets/img/projects/pj2.png";
import Project3 from "./assets/img/projects/pj3.png";
import Project4 from "./assets/img/projects/pj4.png";
import Project5 from "./assets/img/projects/pj5.png";
import Project6 from "./assets/img/projects/pj6.png";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nextjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "services",
    href: "services",
  },
  // {
  //   name: "testimonials",
  //   href: "testimonials",
  // },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: "https://www.youtube.com/channel/UCbxCSmWgRx6GuUaboHaTVYQ",
  },
  {
    icon: <FiInstagram />,
    href: "https://www.instagram.com/fran.ferryawan/",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/FranFerry90",
  },
  {
    icon: <FiDribbble />,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "project Coffe Shop",
    category: "web development",
  },
  {
    id: "2",
    image: Project2,
    name: "project Rumah Idaman",
    category: "web development",
  },
  {
    id: "3",
    image: Project3,
    name: "project Shopping Cart",
    category: "UI/UX design",
  },
  {
    id: "4",
    image: Project4,
    name: "project Shopping Cart",
    category: "branding",
  },
  {
    id: "5",
    image: Project5,
    name: "project Coffe Shop",
    category: "web development",
  },
  {
    id: "6",
    image: Project6,
    name: "project with reactjs",
    category: "branding",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "UI/UX Design",
  },
  {
    name: "web development",
  },
  {
    name: "branding",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Web Design",
    description:
      "Web design is a general term used to cover how web content is displayed,",
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description:
      "responsible for Designing, designing, developing and modifying websites.",
  },
  {
    icon: <FiPenTool />,
    name: "Branding",
    description:
      "an attempt to provide a company with a particular design or symbol to advertise its products and services.",
  },
  {
    icon: <FiTag />,
    name: "SEO",
    description:
      "big decisions that can improve your site ranking and save time.",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at ferry908ardiasnyah@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "DKI Jakarta",
    description: "Jl.Srengseng RT.002/004 Jakarta-Barat",
  },
];
