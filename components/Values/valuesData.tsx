import { Value } from "@/types/value";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faStar, faLightbulb, faSmile, faChalkboardTeacher, faBullhorn, faUsers, faWrench } from '@fortawesome/free-solid-svg-icons';

const valuesData: Value[] = [
  {
    id: 1,
    icon: (
      <FontAwesomeIcon icon={faHandshake} className="text-4xl" />
    ),
    title: "COMMITMENT",
    paragraph:
      "We are committed to delivering excellence in every aspect of our service, ensuring reliability and trust.",
  },
  {
    id: 2,
    icon: (
      <FontAwesomeIcon icon={faStar} className="text-4xl" />
    ),
    title: "QUALITY",
    paragraph:
      "Our products meet the highest quality standards from world-class suppliers and the latest medical technologies.",
  },
  {
    id: 3,
    icon: (
      <FontAwesomeIcon icon={faLightbulb} className="text-4xl" />
    ),
    title: "INNOVATION",
    paragraph:
      "We continuously research and adopt the latest medical technologies to bring innovative solutions to our clients.",
  },
  {
    id: 4,
    icon: (
      <FontAwesomeIcon icon={faSmile} className="text-4xl" />
    ),
    title: "CUSTOMER SATISFACTION",
    paragraph:
      "Our clients come first. We ensure complete satisfaction through exceptional service and support.",
  },
  {
    id: 5,
    icon: (
      <FontAwesomeIcon icon={faChalkboardTeacher} className="text-4xl" />
    ),
    title: "TRAININGS",
    paragraph:
      "We provide comprehensive training programs to ensure proper usage and maximum benefit from our medical products.",
  },
  {
    id: 6,
    icon: (
      <FontAwesomeIcon icon={faBullhorn} className="text-4xl" />
    ),
    title: "MARKETING",
    paragraph:
      "Strategic marketing solutions to help promote and position your medical products effectively in the market.",
  },
  {
    id: 7,
    icon: (
      <FontAwesomeIcon icon={faUsers} className="text-4xl" />
    ),
    title: "SALES TEAM",
    paragraph:
      "Our dedicated sales team provides expert guidance and support to meet all your medical equipment needs.",
  },
  {
    id: 8,
    icon: (
      <FontAwesomeIcon icon={faWrench} className="text-4xl" />
    ),
    title: "MAINTENANCE",
    paragraph:
      "Professional maintenance services to ensure your medical equipment operates at peak performance and longevity.",
  },
];
export default valuesData;
