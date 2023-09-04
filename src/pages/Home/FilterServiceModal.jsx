import Modal from "../../components/Modal";

const FilterServiceModal = ({ isOpen, setIsOpen }) => {
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div>
                <div className="mt-3 ">
                    <h1 className="font-semibold my-3">Type of place</h1>
                    <ul className="flex inline-flex ">
                        <li className="border-2 p-4 rounded-l-xl hover:bg-slate-950 hover:text-gray-50">AnyType</li>
                        <li className="border-2 p-4   hover:bg-slate-950 hover:text-gray-50">Room</li>
                        <li className="border-2 p-4 rounded-r-xl hover:bg-slate-950 hover:text-gray-50">Entire home</li>
                    </ul>
                </div>
                <div className="mt-3 ">
                    <h1 className="font-semibold my-3">Price Range</h1>
                    <ul className="flex gap-8 inline-flex ">
                        <li className="border-2 p-4 rounded-md">
                            <label htmlFor="minimum"> Minimum</label>
                            <div>$   <input type="number" defaultValue={10} className="w-28" min={10} /></div>
                        </li>
                        <li className="border-2 p-4 rounded-md">
                            <label htmlFor="maximum">Maximum</label>
                            <div>$   <input type="number" defaultValue={1000} className="w-28" max={1000} /></div>
                        </li>
                    </ul>
                </div>
                <div className="mt-3 ">
                    <h1 className="font-semibold my-3">Beds and bathrooms</h1>
                    <div>
                        <h5 className="text-sm font-semibold">BedRooms</h5>
                        <ul className="flex gap-8 ">
                            <button className="btn btn-neutral">
                                any
                            </button>
                            <button className="border-2 px-2  hover:bg-gray-900 hover:text-gray-50">1</button>
                            <button className="border-2 px-2  hover:bg-gray-900 hover:text-gray-50">2</button>
                            <button className="border-2 px-2  hover:bg-gray-900 hover:text-gray-50">3</button>
                            <button className="border-2 px-2  hover:bg-gray-900 hover:text-gray-50">4</button>
                            <button className="border-2 px-2  hover:bg-gray-900 hover:text-gray-50">5</button>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-sm font-semibold">Beds</h5>
                        <ul className="flex gap-8 ">
                            <button className="btn btn-neutral">
                                any
                            </button>
                            <button className="border-2 px-2  hover:bg-gray-900 hover:text-gray-50">1</button>
                            <button className="border-2 px-2  hover:bg-gray-900 hover:text-gray-50">2</button>
                            <button className="border-2 px-2  hover:bg-gray-900 hover:text-gray-50">3</button>
                            <button className="border-2 px-2  hover:bg-gray-900 hover:text-gray-50">4</button>
                            <button className="border-2 px-2  hover:bg-gray-900 hover:text-gray-50">5</button>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-sm font-semibold">Bathrooms</h5>
                        <ul className="flex gap-8 ">
                            <button className="btn btn-neutral">
                                any
                            </button>
                            <button className="border-2 px-2  hover:bg-gray-900 hover:text-gray-50">1</button>
                            <button className="border-2 px-2  hover:bg-gray-900 hover:text-gray-50">2</button>
                            <button className="border-2 px-2  hover:bg-gray-900 hover:text-gray-50">3</button>
                            <button className="border-2 px-2  hover:bg-gray-900 hover:text-gray-50">4</button>
                            <button className="border-2 px-2  hover:bg-gray-900 hover:text-gray-50">5</button>
                        </ul>
                    </div>
                </div>
                <div className="mt-3 ">
                    <h1>Property Type</h1>
                    <div className="flex gap-6">
                        <div className="p-5 rounded-md shadow-md hover:border-2 hover:border-gray-800">
                           <h4>House</h4>
                        </div>
                        <div className="p-5 rounded-md shadow-md hover:border-2 hover:border-gray-800">
                           <h4>Apartment</h4>
                        </div>
                        <div className="p-5 rounded-md shadow-md hover:border-2 hover:border-gray-800">
                           <h4>Guesthouse</h4>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default FilterServiceModal;