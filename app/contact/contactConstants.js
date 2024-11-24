import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

export const receiverEmail = "gaurangbhutani14@gmail.com";
export const receiverPhone = "+918445285720";
export const receiverAddress = "Moradabad Uttar Pradesh, India";

export const contactContent =
  "I’m passionate about crafting clean and efficient code to solve complex problems. " +
  "Let’s team up to build innovative solutions, share ideas, and turn concepts into reality with precision and creativity.";

export const workTogetherText = "Let's build together!!";

export const sendMessage = "Send Message";

export const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: receiverPhone,
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: receiverEmail,
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: receiverAddress,
  },
];

export const servicesOffered = [
  {
    key: "frontend",
    value: "FrontEnd Development",
  },
  {
    key: "backend",
    value: "Backend Development",
  },
  {
    key: "devops",
    value: "Devops",
  },
  {
    key: "fullstack",
    value: "Fullstack Development",
  },
];

export const placeholders = {
  message: "Type your message here.",
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email",
  phoneNumber: "Phone Number",
  service: "Select a service",
};
