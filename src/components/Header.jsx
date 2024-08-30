import Logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";

const Header = ({ toggleSidebar }) => (
  <header className="flex items-center justify-between p-4 bg-white border-b-2 border-dotted">
    <img src={Logo} alt="Logo" className="object-contain max-w-[200px]" />
    <FaBars
      className="block cursor-pointer md:hidden"
      onClick={toggleSidebar}
    />
  </header>
);

export default Header;
