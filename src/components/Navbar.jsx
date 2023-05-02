import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAfrica } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className="flex h-14 items-center justify-center gap-2 bg-[#F55A5A] text-white">
      <FontAwesomeIcon icon={faEarthAfrica} className="text-2xl" />
      <h1 className=" font-medium">My Travel Journal</h1>
    </nav>
  );
}
