import { getImagePath } from "@/lib/utils";
import { Activity } from "@/types/activity";

const getActivityData = (): Activity[] => {
  const activities = [
    {
      id: 1,
      title: "Restylane Workshop by Dr. Rana Morsi",
      paragraph:
        "A focused Restylane training session led by Dr. Rana Morsi, covering advanced injection techniques and best practices.",
      image: getImagePath("/images/activities/workshops/restylane-dr-rana-morsi/10.jpg"),
      tags: ["Workshop"],
      publishDate: "28/10/2025",
      href: "/activities/workshops/restylane-dr-rana-morsi",
    },
    {
      id: 2,
      title: "Restylane Reveal",
      paragraph:
        "Where precision meets prestige, beauty becomes timeless. From science to elegance the Restylane Experience by Global Medical Company was more than an event it was a statement. A full evening of innovation, aesthetic mastery, and meaningful exchange with the region’s top physicians.Let the glow begin.",
      image: getImagePath("/images/activities/events/restylane-reveal/3.jpg"),
      tags: ["Event"],
      publishDate: "02/11/2025",
      href: "/activities/events/restylane-reveal",
    },
    
    {
      id: 3,
      title: "Restylane Masterclass – Dr. Ishaan Ramkisson",
      paragraph:
        "A series of four expert-led Restylane workshops delivered by Global Galderma Trainer Dr. Ishaan Ramkisson across multiple locations.",
      image: getImagePath("/images/activities/workshops/restylane-masterclass-dr-ishaan-ramkisson/15.jpg"),
      tags: ["Workshop"],
      publishDate: "02/11/2025",
      href: "/activities/workshops/restylane-masterclass-dr-ishaan-ramkisson",
    },
    {
      id: 4,
      title: "Restylane Workshops with Micheline Chalouhi",
      paragraph:
        "Four clinical Restylane workshops by Galderma Trainer Micheline Chalouhi, focusing on technique refinement and safe, natural results.",
      image: getImagePath("/images/activities/workshops/restylane-workshops-micheline-chalouhi/11.jpg"),
      tags: ["Workshop"],
      publishDate: "01/11/2025",
      href: "/activities/workshops/restylane-workshops-micheline-chalouhi",
    },
    {
      id: 5,
      title: "Bison Laser Training – Alice Soomin Han",
      paragraph:
        "A specialized machine-training session on the latest Bison laser technology, led by trainer Alice Soomin Han.",
      image: getImagePath("/images/activities/workshops/bison-laser-training-alice-soomin-han/5.jpg"),
      tags: ["Workshop"],
      publishDate: "11/11/2025",
      href: "/activities/workshops/bison-laser-training-alice-soomin-han",
    },
    {
      id: 6,
      title: "Motiva – Plastic Surgery Event",
      paragraph:
        "Global Medical showcased Motiva solutions through a dedicated booth at the Plastic Surgery event, bringing innovation and expertise together.",
      image: getImagePath("/images/activities/events/motiva-event-plastic-surgery-event/18.jpg"),
      tags: ["Event"],
      publishDate: "15/01/2026",
      href: "/activities/events/motiva-event-plastic-surgery-event",
    },
    {
      id: 7,
      title: "Restylane Filler Workshop by Dr. Reham Ismail",
      paragraph:
        "A focused Restylane filler workshop highlighting injection techniques and natural aesthetic outcomes.",
      image: getImagePath("/images/activities/workshops/restylane-filler-workshop-reham-ismail/22.jpg"),
      tags: ["Workshop"],
      publishDate: "23/09/2025",
      href: "/activities/workshops/restylane-filler-workshop-reham-ismail",
    },
    {
      id: 8,
      title: "Restylane Filler Workshop by Dr. Rana Morsi",
      paragraph:
        "An advanced Restylane filler training session emphasizing precision and safety.",
      image: getImagePath("/images/activities/workshops/restylane-filler-workshop-rana-morsi/12.jpg"),
      tags: ["Workshop"],
      publishDate: "08/12/2025",
      href: "/activities/workshops/restylane-filler-workshop-rana-morsi",
    },
    {
      id: 9,
      title: "Restylane Filler Workshop by Dr. Eslam Alshawadfy",
      paragraph:
        "A hands-on Restylane filler workshop focused on technique refinement and balanced results.",
      image: getImagePath("/images/activities/workshops/restylane-filler-workshop-eslam-alshawadfy-01/17.jpg"),
      tags: ["Workshop"],
      publishDate: "18/11/2025",
      href: "/activities/workshops/restylane-filler-workshop-eslam-alshawadfy-01",
    },
    {
      id: 10,
      title: "Restylane Filler Workshop by Dr. Eslam Alshawadfy",
      paragraph:
        "A specialized Restylane filler workshop covering essential clinical practices.",
      image: getImagePath("/images/activities/workshops/restylane-filler-workshop-eslam-alshawadfy-02/12.jpg"),
      tags: ["Workshop"],
      publishDate: "18/11/2025",
      href: "/activities/workshops/restylane-filler-workshop-eslam-alshawadfy-02",
    },
    {
      id: 11,
      title: "Restylane Filler Workshop by Dr. Eslam Alshawadfy",
      paragraph:
        "A professional Restylane filler training session focused on safe, effective treatments.",
      image: getImagePath("/images/activities/workshops/restylane-filler-workshop-eslam-alshawadfy-2-01/11.jpg"),
      tags: ["Workshop"],
      publishDate: "19/11/2025",
      href: "/activities/workshops/restylane-filler-workshop-eslam-alshawadfy-2-01",
    },
    {
      id: 12,
      title: "Restylane Filler Workshop by Dr. Eslam Alshawadfy",
      paragraph:
        "An expert-led Restylane filler workshop highlighting advanced injection techniques.",
      image: getImagePath("/images/activities/workshops/restylane-filler-workshop-eslam-alshawadfy-2-02/14.jpg"),
      tags: ["Workshop"],
      publishDate: "19/11/2025",
      href: "/activities/workshops/restylane-filler-workshop-eslam-alshawadfy-2-02",
    },
    {
      id: 13,
      title: "Restylane Filler Workshop by Dr. Mona Salem",
      paragraph:
        "A comprehensive Restylane filler workshop focused on safety and natural results.",
      image: getImagePath("/images/activities/workshops/restylane-filler-workshop-mona-salem/1.jpg"),
      tags: ["Workshop"],
      publishDate: "20/01/2026",
      href: "/activities/workshops/restylane-filler-workshop-mona-salem",
    },
    {
      id: 14,
      title: "SkinCode Event",
      paragraph:
        "A specialized event for the SkinCode brand, focused on advanced skincare solutions and dermatological innovations.",
      image: getImagePath("/images/activities/events/skincode-event/55.jpg"),
      tags: ["Event"],
      publishDate: "17/02/2022",
      href: "/activities/events/skincode-event",
    },
    {
      id: 15,
      title: "Prime Machine Event",
      paragraph:
        "An event dedicated to showcasing the Prime machine, highlighting its advanced technology and aesthetic treatment applications.",
      image: getImagePath("/images/activities/events/prime-machine-event/1.jpg"),
      tags: ["Event"],
      publishDate: "24/05/2024",
      href: "/activities/events/prime-machine-event",
    },
    {
      id: 16,
      title: "Prime Product Launch",
      paragraph:
        "A product launch event introducing Prime’s latest aesthetic solutions and innovative technologies.",
      image: getImagePath("/images/activities/events/prime-product-launch/7.jpg"),
      tags: ["Event"],
      publishDate: "23/01/2025",
      href: "/activities/events/prime-product-launch",
    },
    {
      id: 17,
      title: "WiQo Event",
      paragraph:
        "An introductory event for the WiQo brand, focusing on advanced skincare protocols and professional treatments.",
      image: getImagePath("/images/activities/events/wiqo-event/18.jpg"),
      tags: ["Event"],
      publishDate: "24/10/24",
      href: "/activities/events/wiqo-event",
    },
    {
      id: 18,
      title: "Restylane Filler Workshop by Dr. Ishaan Ramkisson",
      paragraph:
        "A professional Restylane filler training session focused on precision and facial balance.",
      image: getImagePath("/images/activities/workshops/restylane-filler-workshop-ishaan-ramkisson/4.jpg"),
      tags: ["Workshop"],
      publishDate: "02/11/2025",
      href: "/activities/workshops/restylane-filler-workshop-ishaan-ramkisson",
    },
    {
      id: 19,
      title: "Restylane Filler Workshop by Dr. Ishaan Ramkisson",
      paragraph:
        "A focused Restylane filler workshop highlighting safe injection techniques and natural results.",
      image: getImagePath("/images/activities/workshops/restylane-filler-workshop-ishaan-ramkisson-2/8.jpg"),
      tags: ["Workshop"],
      publishDate: "01/11/2025",
      href: "/activities/workshops/restylane-filler-workshop-ishaan-ramkisson-2",
    },
    {
      id: 20,
      title: "Restylane Filler Workshop by Dr. Micheline Chalouhi",
      paragraph:
        "A hands-on Restylane filler workshop emphasizing technique refinement and aesthetic harmony.",
      image: getImagePath("/images/activities/workshops/restylane-filler-workshop-micheline-chalouhi/9.jpg"),
      tags: ["Workshop"],
      publishDate: "18/11/2025",
      href: "/activities/workshops/restylane-filler-workshop-micheline-chalouhi",
    },
    {
      id: 21,
      title: "Restylane Filler Workshop — April 2026",
      paragraph:
        "A hands-on Restylane filler workshop covering advanced injection techniques, aesthetic harmony and patient assessment.",
      image: getImagePath("/images/activities/workshops/restylane-workshop-08-04-2026/1.jpg"),
      tags: ["Workshop"],
      publishDate: "08/04/2026",
      href: "/activities/workshops/restylane-workshop-08-04-2026",
    },
    {
      id: 22,
      title: "Restylane Masterclass — April 2026",
      paragraph:
        "An intensive Restylane masterclass focusing on precision filler placement, natural results and clinical excellence.",
      image: getImagePath("/images/activities/workshops/restylane-workshop-14-04-2026/3.jpg"),
      tags: ["Workshop"],
      publishDate: "14/04/2026",
      href: "/activities/workshops/restylane-workshop-14-04-2026",
    },
    
  ];

  // Sort by publish date (latest first)
  return activities.sort((a, b) => {
    // Parse DD/MM/YYYY format correctly
    const dateA = new Date(a.publishDate.split('/').reverse().join('-'));
    const dateB = new Date(b.publishDate.split('/').reverse().join('-'));
    return dateB.getTime() - dateA.getTime();
  });
};

export default getActivityData;
