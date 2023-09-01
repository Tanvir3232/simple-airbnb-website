const AddCategory = () => {
    const handleAddCategory = (e) =>{
        e.preventDefault();
        const formData = e.target;
        const categoryName = formData.category.value;
        const icon = formData.icon.value;
        console.log(categoryName,icon)
    }
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