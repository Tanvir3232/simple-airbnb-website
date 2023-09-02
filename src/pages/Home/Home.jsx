import Categories from "./Categories";
import filterIcon from '../../assets/images/filter.png'

import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Home = () => {
    const [services, setServices] = useState([]);
    const [category,setCategory]  = useState('');
    useEffect(() => {
        fetch(`http://localhost:5000/services?category=${category}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [category])
    const handleCategoryFilter = category =>{
        setCategory(category)
    }
    return (
        <>
            <div className="flex items-center w-full">
                <div className="w-4/6">
                    <Categories handleCategoryFilter={handleCategoryFilter} category={category}></Categories>
                </div>
                <div className="flex gap-2 items-center w-2/6 justify-end">
                    <button className="btn bg-white hover:bg-white"><span className="flex gap-1"><img src={filterIcon} alt="" /> Filters</span></button>
                    <div className="border-2 rounded-md flex gap-1 items-center p-2">
                        <p>Display total before taxes</p>
                        <input type="checkbox" className="toggle toggle-sm" checked />
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </>
    );
};

export default Home;