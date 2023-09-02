
import Swal from 'sweetalert2';
const img_hosting_endpoint = 'https://api.imgbb.com/1/upload'; 
const AddCategory = () => {
  const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
  
  const handleAddCategory = async (e) => {
    e.preventDefault();
    const formInfo = e.target;
    const categoryName = formInfo.category.value;
    const icon = formInfo.icon.files[0]; 

    const formData = new FormData();
    formData.append('key', img_hosting_token); 
    formData.append('image', icon);

    try {
      const response = await fetch(img_hosting_endpoint, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const imgResponse = await response.json();
        if (imgResponse.data && imgResponse.data.url) {
          const imgURL = imgResponse.data.url;
          const newCategory = { category: categoryName,icon: imgURL };
          console.log(newCategory);
          fetch('http://localhost:5000/add-category', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCategory)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Successful!',
                        'Category added Successfully!',
                        'success'
                      );
                    formInfo.reset();
                }
            })
        } else {
          console.error('Image upload response is missing data or URL.');
        }
      } else {
        console.error('Image upload failed with status:', response.status);
      }
    } catch (error) {
      console.error('Error while uploading image:', error);
    }
  };

    return (
        <div className="md:w-1/2 mx-auto border-2 rounded-xl p-5">
            <h1 className="text-center text-3xl font-bold my-4">Add Category</h1>
            <form onSubmit={handleAddCategory}>
                <div className="flex gap-3 w-full items-center">
                    <label htmlFor="category" className="text-xl w-1/4 font-semibold">Category Name</label>
                    <input type="text" name="category" className="input input-bordered w-3/4 " />
                </div>
                <div className="flex gap-3 w-full my-3 items-center">
                    <label htmlFor="icon" className="text-xl w-1/4 font-semibold">Icon </label>
                    <input type="file" name="icon" className="file-input w-3/4" />
                </div>
                <button className="btn btn-primary w-full">ADD category</button>
            </form>
        </div>
    );
};

export default AddCategory;