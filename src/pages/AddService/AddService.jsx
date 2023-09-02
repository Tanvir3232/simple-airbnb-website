import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const AddService = () => {
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const [categories,setCategories] = useState([]);
    const { register, handleSubmit,reset} = useForm();
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=> res.json())
        .then(data=>setCategories(data))
    },[])
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {propertyTitle,category,propertyType,address,guests,bedrooms,bathrooms,nightlyRate,availabilityCalendar,beds} = data;
                const newService = { propertyTitle,category, propertyType, address,guests:parseInt(guests),bedrooms: parseInt(bedrooms),bathrooms:parseInt(bathrooms),nightlyRate:parseInt(nightlyRate),
                    availabilityCalendar, image:imgURL,beds:parseInt(beds)}
                fetch('http://localhost:5000/add-service', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newService)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire(
                                'Successful!',
                                'Service added Successfully!',
                                'success'
                              );
                            reset();
                        }
                    })
            }
        })
        
    };
    return (
        <div className="w-4/5 mx-auto border-2 p-5 rounded-md">
            <h1 className="text-center text-3xl font-bold my-5">Add Service</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-6">
                <div className="flex gap-5 my-2 items-center">
                    <label className="w-1/5" htmlFor="propertyTitle">Property Title</label>
                    <input type="text" className="input input-bordered  w-full"{...register("propertyTitle")} />
                </div>
                <div className="flex gap-5 my-2 items-center">
                    <label className="w-1/5" htmlFor="category">Category</label>
                    <select className="input input-bordered w-full"{...register("category")}>
                        {
                            categories.map(item=>  <option key={item._id} value={item.category}>
                               {item.category}</option>)
                        }
                      
                    </select>
                </div>
                <div className="flex gap-5 my-2 items-center">
                    <label className="w-1/5" htmlFor="propertyType">Property Type</label>
                    <select className="input input-bordered w-full"{...register("propertyType")}>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="guestHouse">Guesthouse</option>
                        {/* Add more property types as needed */}
                    </select>
                </div>
                <div className="flex gap-5 my-2 items-center">
                    <label className="w-1/5" htmlFor="address">Address</label>
                    <input type="text" className="input input-bordered w-full"{...register("address")} />
                </div>
                <div className="flex gap-5 my-2 items-center">
                    <label className="w-1/5" htmlFor="guests">Number of Guests</label>
                    <input type="number" className="input input-bordered w-full"{...register("guests")} />
                </div>
                <div className="flex gap-5 my-2 items-center">
                    <label className="w-1/5" htmlFor="bedrooms">Bedrooms</label>
                    <input type="number" className="input input-bordered w-full"{...register("bedrooms")} />
                </div>
                <div className="flex gap-5 my-2 items-center">
                    <label className="w-1/5" htmlFor="beds">Beds</label>
                    <input type="number" className="input input-bordered w-full"{...register("beds")} />
                </div>
                <div className="flex gap-5 my-2 items-center">
                    <label className="w-1/5" htmlFor="bathrooms">Bathrooms</label>
                    <input type="number" className="input input-bordered w-full"{...register("bathrooms")} />
                </div>
                <div className="flex gap-5 my-2 items-center">
                    <label className="w-1/5" htmlFor="nightlyRate">Nightly Rate</label>
                    <input type="number" className="input input-bordered w-full"{...register("nightlyRate")} />
                </div>
                <div className="flex gap-5 my-2 items-center">
                    <label className="w-1/5" htmlFor="availabilityCalendar">Availability Calendar</label>
                    <input type="text" className="input input-bordered w-full"{...register("availabilityCalendar")} />
                </div>
                <div className="flex gap-5 my-2 items-center">
                    <label className="w-1/5" htmlFor="image">Image</label>
                    <input type="file"{...register("image")} className="file-input w-full" />
                </div>
                <button className="col-span-2 btn btn-success btn-outline ">Add Service</button>
               
            </form>
        </div>
    );
};

export default AddService;
