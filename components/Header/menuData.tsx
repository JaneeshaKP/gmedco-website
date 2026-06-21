import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Products",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "All Products",
        path: "/products",
        newTab: false,
      },
      {
        id: 22,
        title: "Machines",
        path: "/products?category=Machines",
        newTab: false,
      },
      {
        id: 23,
        title: "Aesthetic",
        path: "/products?category=Aesthetic",
        newTab: false,
      },
    ],
  },
  {
    id: 6,
    title: "Restylane",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Restylane Classyc",
        path: "/products/aesthetic/restylane-classyc",
        newTab: false,
      },
      {
        id: 62,
        title: "Restylane Defyne",
        path: "/products/aesthetic/restylane-defyne",
        newTab: false,
      },
      {
        id: 63,
        title: "Restylane Kysse",
        path: "/products/aesthetic/restylane-kysse",
        newTab: false,
      },
      {
        id: 64,
        title: "Restylane Lyft",
        path: "/products/aesthetic/restylane-lyft",
        newTab: false,
      },
      {
        id: 65,
        title: "Restylane Volyme",
        path: "/products/aesthetic/restylane-volyme",
        newTab: false,
      },
      {
        id: 66,
        title: "Restylane Skinbooster Vital",
        path: "/products/aesthetic/restylane-skinbooster-vital",
        newTab: false,
      },
      {
        id: 67,
        title: "Restylane Skinbooster Vital Light",
        path: "/products/aesthetic/restylane-skinbooster-vital-light",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Activities",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Workshops",
        path: "/activities/workshops",
        newTab: false,
      },
      {
        id: 32,
        title: "Events",
        path: "/activities/events",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
