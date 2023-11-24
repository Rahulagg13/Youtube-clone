import {
  
  UserSquare2,
  History,
  PlaySquare,
  Clock5,
  ThumbsUp,
  Settings,
  Flag,
  HelpCircle,
  Music2,
  Clapperboard,
  Radio,
  Podcast,
} from "lucide-react";
import { SiYoutubeshorts, SiYoutubegaming } from "react-icons/si";
import {
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdHome,
} from "react-icons/md";
import { RiFeedbackLine } from "react-icons/ri";
import { BsFire } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import { IoNewspaperOutline } from "react-icons/io5";
import { GoTrophy } from "react-icons/go";
import { SlBulb } from "react-icons/sl";
export const General: sideBarIconList[] = [
  {
    componentName: "Home",
    icon: MdHome,
  },
  {
    componentName: "Shorts",
    icon: SiYoutubeshorts,
  },
  {
    componentName: "Subscriptions",
    icon: MdOutlineSubscriptions,
  },
];
export const userFunction: sideBarIconList[] = [
  {
    componentName: "Your Channel",
    icon: UserSquare2,
    strokeWidth: 0.5,
  },

  {
    componentName: "History",
    icon: History,
  },
  {
    componentName: "Your videos",
    icon: PlaySquare,
  },
  {
    componentName: "Watch later",
    icon: Clock5,
  },
  {
    componentName: "Liked videos",
    icon: ThumbsUp,
  },
];

export const Subscription: sideBarIconList[] = [];

export const Explore: sideBarIconList[] = [
  {
    componentName: "Trending",
    icon: BsFire,
  },
  {
    componentName: "Shopping",
    icon: AiOutlineShopping,
  },
  {
    componentName: "Music",
    icon: Music2,
  },
  {
    componentName: "Movies",
    icon: Clapperboard,
  },
  {
    componentName: "Live",
    icon: Radio,
  },
  {
    componentName: "Gaming",
    icon: SiYoutubegaming,
  },
  {
    componentName: "News",
    icon: IoNewspaperOutline,
  },
  {
    componentName: "Sports",
    icon: GoTrophy,
  },
  {
    componentName: "Learning",
    icon: SlBulb,
  },
  {
    componentName: "Podcasts",
    icon: Podcast,
  },
];

export const GeneralSetting: sideBarIconList[] = [
  {
    componentName: "Settings",
    icon: Settings,
  },

  {
    componentName: "Report History",
    icon: Flag,
  },
  {
    componentName: "Help",
    icon: HelpCircle,
  },
  {
    componentName: " Send feedback",
    icon: RiFeedbackLine,
  },
];

export const GeneralFront: sideBarIconList[] = [
  {
    componentName: "Home",
    icon: MdHome,
  },
  {
    componentName: "Shorts",
    icon: SiYoutubeshorts,
  },
  {
    componentName: "Subscriptions",
    icon: MdOutlineSubscriptions,
  },
  {
    componentName: "You",
    icon: MdOutlineVideoLibrary,
  },
];

export const FeaturesList: Array<string> = [
  "About",
  "Press",
  "Copyright",
  "Contact us",
  "Creators",
  "Advertise",
  "Developers",
];

export const TermAndCondition: Array<string> = [
  "Terms",
  "Privacy",
  "Policy & Safety",
  "How YouTube works",
  "Test new features",
];
