import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/dashboard"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Dashboard
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/about"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/services"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Services
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Contact
        </Link>
      </Typography>
    </ul>
  );
};

export default NavList;
