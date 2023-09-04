import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { ServiceContext } from "../App";

const SearchBar = () => {
    const [openSearchBox, setOpenSeachBox] = useState(false);
    const [numOfAdults, setNumOfAdults] = useState(0);
    const [numOfChildren, setNumOfChildren] = useState(0);
    const [numOfInfants, setNumOfInfants] = useState(0);
    const [numOfPets, setNumOfPets] = useState(0);
    const { setServices} = useContext(ServiceContext)
    
    const increment = (currentValue, setValue, maxNumberPersons = 5) => {
        if (currentValue < maxNumberPersons) {
            setValue(currentValue + 1);
        }
    }
    const decrement = (currentValue, setValue) => {
        if (currentValue > 0) {
            setValue(currentValue - 1);
        }
    }
    const handleSearch = e => {
        e.preventDefault();
        const formInfo = e.target;
        const searchText = formInfo.searchText.value;
       

        console.log(searchText)
        fetch(`https://airbnb-app-server.vercel.app/services?searchText=${searchText}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }
    return (
        <>
            {openSearchBox ||
                <div onClick={() => setOpenSeachBox(true)} className=' flex items-center gap-2 border-2 p-2 rounded-full'>
                    <ul className='flex gap-2 divide-x-2'>
                        <li className='pl-2 font-semibold'>Anywhere</li>
                        <li className='pl-2 font-semibold'>Any week</li>
                        <li className='pl-2 text-gray-300 font-semibold'>Add guests</li>
                    </ul>


                    <div className='pl-2 font-semibold'><FaSearch className='w-10 h-10 text-white rounded-full  bg-red-500 p-3'></FaSearch></div>
                </div>
            }
            {openSearchBox &&
                <div>
                    <ul className=" flex w-1/2 mx-auto items-center gap-2">
                        <li className='px-1 py-1 border-b-2 border-gray-700 font-semibold'>Stays</li>

                        <li className='px-1 py-1 font-semibold'>Experiences</li>
                        <li className='px-1 py-1 font-semibold'>Online Experiences</li>
                    </ul>
                    <div className=' flex items-center mt-5 gap-2 border-2 p-2 rounded-full'>
                        <form onSubmit={handleSearch} className='flex items-center gap-2 divide-x-2 '>
                            <div className="px-5 rounded-full " >
                                <label className='font-semibold' htmlFor="location">Where</label><br />
                                <input type="text" name="searchText" placeholder="Search destinations" className=" px-2 py-1 " />
                            </div>
                            <div className='pl-2 font-semibold'>
                                <label className='font-semibold' htmlFor="location">Check in</label><br />
                                <input type="date" name="fisrtDate" placeholder="Add dates" className=" px-2 py-1 " />
                            </div>
                            <div className='pl-2 font-semibold'>
                                <label className='font-semibold' htmlFor="location">Check out</label><br />
                                <input type="date" name="secondDate" placeholder="Add dates" className=" px-2 py-1 " />
                            </div>
                            <div className="dropdown dropdown-end">
                                <label className="flex px-4">
                                    <div  >
                                        Who <br />
                                        <span tabIndex={0} className="text-gray-300 ">Add guests</span>
                                    </div>
                                    <button type="submit" className='pl-2 font-semibold  text-white rounded-full  bg-red-500 p-3 flex gap-2 items-center'><FaSearch className='w-5 h-5'></FaSearch>Search</button>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 ml-auto divide-y-2  shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-96">
                                    <li className=" pt-2 flex flex-row justify-between">
                                        <div className="flex flex-col justify-start items-start">
                                            <label className="font-bold" htmlFor="adults">Adults</label>
                                            <p className="text-gray-400">Ages 13 or above</p>
                                        </div>
                                        <div>
                                            <button onClick={() => decrement(numOfAdults, setNumOfAdults)} className="btn btn-circle btn-error">-</button>
                                            <span className="mx-3">{numOfAdults}</span>
                                            <button onClick={() => increment(numOfAdults, setNumOfAdults, 16)} className="btn btn-circle btn-success">+</button>
                                        </div>
                                    </li>
                                    <li className=" pt-2 flex flex-row justify-between">
                                        <div className="flex flex-col justify-start items-start">
                                            <label className="font-bold" htmlFor="adults">Childrens</label>
                                            <p className="text-gray-400">Ages 0 - 12 or above</p>
                                        </div>
                                        <div>
                                            <button onClick={() => decrement(numOfChildren, setNumOfChildren)} className="btn btn-circle btn-error">-</button>
                                            <span className="mx-3">{numOfChildren}</span>
                                            <button onClick={() => increment(numOfChildren, setNumOfChildren, 8)} className="btn btn-circle btn-success">+</button>
                                        </div>
                                    </li>
                                    <li className=" pt-2 flex flex-row justify-between">
                                        <div className="flex flex-col justify-start items-start">
                                            <label className="font-bold" htmlFor="adults">Infants</label>
                                            <p className="text-gray-400">Under 2</p>
                                        </div>
                                        <div>
                                            <button onClick={() => decrement(numOfInfants, setNumOfInfants)} className="btn btn-circle btn-error">-</button>
                                            <span className="mx-3">{numOfInfants}</span>
                                            <button onClick={() => increment(numOfInfants, setNumOfInfants)} className="btn btn-circle btn-success">+</button>
                                        </div>
                                    </li>
                                    <li className=" pt-2 flex flex-row justify-between">
                                        <div className="flex flex-col justify-start items-start">
                                            <label className="font-bold" htmlFor="adults">Pets</label>
                                            <p className="underline text-gray-400">Bringing a service animal?</p>
                                        </div>
                                        <div>
                                            <button onClick={() => decrement(numOfPets, setNumOfPets)} className="btn btn-circle btn-error">-</button>
                                            <span className="mx-3">{numOfPets}</span>
                                            <button onClick={() => increment(numOfPets, setNumOfPets)} className="btn btn-circle btn-success">+</button>
                                        </div>
                                    </li>


                                </ul>
                            </div>

                        </form>



                    </div>
                </div>
            }
        </>
    );
};

export default SearchBar;