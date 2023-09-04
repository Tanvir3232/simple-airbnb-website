import Categories from "./Categories";
import filterIcon from '../../assets/images/filter.png'

import { useContext,  useState } from "react";
import ServiceCard from "./ServiceCard";

import FilterServiceModal from "./FilterServiceModal";
import { ServiceContext } from "../../App";
import { Helmet } from "react-helmet";

const Home = () => {
    const {services, setServices} = useContext(ServiceContext)
    
    const [category,setCategory]  = useState('');
    let [isOpen, setIsOpen] = useState(false);
   
    const handleCategoryFilter = category =>{
        setCategory(category)
        fetch(`https://airbnb-app-server.vercel.app/services?category=${category}`)
        .then(res => res.json())
        .then(data => setServices(data))
    }
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="flex items-center w-full">
                <div className="w-4/6">
                    <Categories handleCategoryFilter={handleCategoryFilter} category={category}></Categories>
                </div>
                <div className="flex gap-2 items-center w-2/6 justify-end">
                    <FilterServiceModal isOpen={isOpen} setIsOpen={setIsOpen}></FilterServiceModal>
                    <button onClick={()=>setIsOpen(true)} className="btn bg-white hover:bg-white"><span className="flex gap-1"><img src={filterIcon} alt="" /> Filters</span></button>
                    <div className="border-2 rounded-md flex gap-1 items-center p-2">
                        <p>Display total before taxes</p>
                        <input type="checkbox" className="toggle toggle-sm" checked />
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
                { services.length>0?<>{services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)}</> :"no service found"
                    
                }
            </div>
        </>
    );
};

export default Home;