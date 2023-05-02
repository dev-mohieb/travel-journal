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
      <section className="flex max-w-[750px] flex-col p-4 text-xs font-normal text-[#2B283A] sm:p-8 sm:text-sm">
        <h2 className="mb-4 text-2xl font-bold sm:text-3xl">{title}</h2>
        <img
          className="mb-2 aspect-[2/1] w-full rounded-md bg-gray-300 object-cover object-bottom"
          src={imageUrl}
          alt={title}
        />
        <article>
          <article className="mb-3 flex items-center">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="mr-1 text-xs text-[#F55A5A]"
            />
            <p className="mr-3 uppercase tracking-widest">{location}</p>
            <a
              className="text-[#918E9B] underline"
              href={googleMapsUrl}
              target="_blank">
              View on Google Maps
            </a>
          </article>
          <p className="mb-1 font-bold">
            {startDate} - {endDate}
          </p>
          <p className="leading-[150%]">{description}</p>
        </article>
      </section>
      <hr className="w-[90%]" />
    </>
  );
}
