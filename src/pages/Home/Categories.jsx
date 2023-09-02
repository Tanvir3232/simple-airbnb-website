import { useLoaderData } from "react-router-dom";

const Categories = ({handleCategoryFilter,category}) => {
    const categories = useLoaderData();
   
    return (
        <div className="flex my-5 items-center gap-6">
            {
                categories.map(item => 
                <div key={item._id} className="flex gap-2 hover:cursor-pointer flex-col items-center" onClick={()=>handleCategoryFilter(item.category)}>
                    <figure className="h-8 w-8"> <img className="w-full h-full" src={item.icon} alt="" /> </figure>
                    <h4 className={`text-sm font-medium ${item.category === category?'border-b-2 border-gray-700':''} text-gray-700`}>{item.category}</h4>
                </div>)
            }
        </div>
    );
};

export default Categories;