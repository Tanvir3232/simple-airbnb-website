import { FaHeart } from "react-icons/fa6";


const ServiceCard = ({service}) => {
    const {image,propertyTitle,address,availabilityCalendar,nightlyRate} = service;
    return (
        <div>
            <figure className="w-72 h-72 relative">
                 <img className="w-full rounded-xl h-full" src={image} alt="" />
                 <FaHeart className="absolute top-1 right-2 text-gray-100 hover:cursor-pointer hover:text-red-500"></FaHeart>
            </figure>
            <h4 className="font-semibold mt-3">{propertyTitle}</h4>
            <p> {address}</p>
            <p>{availabilityCalendar}</p>
            <p className=" mt-3"><span className="font-bold">$ {nightlyRate}</span> night</p>
        </div>
    );
};

export default ServiceCard;