import { useEffect, useState } from "react";

const Categories = () => {
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=> res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className="flex my-5 items-center gap-5">
            {
                categories.map(item => <div key={item._id} className="flex flex-col items-center">
                    <figure className="h-8 w-8"> <img className="w-full h-full" src={item.icon} alt="" /> </figure>
                    <h4 className="text-xl font-medium text-gray-600">{item.category}</h4>
                </div>)
            }
        </div>
    );
};

export default Categories;