import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAfrica } from "@fortawesome/free-solid-svg-icons";


export default function Navbar() {
  return (
    <nav className="bg-[#F55A5A] h-14 text-white flex items-center justify-center gap-2">
      <FontAwesomeIcon icon={faEarthAfrica} className="text-2xl" />
      <h1 className=" font-medium">My Travel Journal</h1>
    </nav>
  );
}
