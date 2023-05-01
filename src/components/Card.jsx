import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card(props) {
  const {
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
  } = props;

  return (
    <>
      <section className="flex items-center p-8 gap-8 min-h-[168px] max-w-[750px] text-[#2B283A] font-normal text-xs sm:text-sm">
        <img
          className="bg-gray-300 object-cover aspect-[2/3] rounded-md w-[144px] h-[216px]"
          src={imageUrl}
          alt={title}
        />
        <article>
          <article className="flex items-center mb-1">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-[#F55A5A] mr-1 text-xs"
            />
            <p className=" uppercase tracking-widest mr-3">{location}</p>
            <a
              className="text-[#918E9B] underline"
              href={googleMapsUrl}
              target="_blank">
              View on Google Maps
            </a>
          </article>
          <h2 className=" mb-5 font-bold text-2xl sm:text-3xl">{title}</h2>
          <p className=" font-bold mb-2">
            {startDate} - {endDate}
          </p>
          <p className=" leading-[150%]">{description}</p>
        </article>
      </section>
      <hr className=" w-[90%]" />
    </>
  );
}
