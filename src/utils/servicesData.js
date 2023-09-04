
export  const ServicesData = async () =>{
    
    const servicesData = await fetch('https://airbnb-app-server.vercel.app/services');
    const services = await servicesData.json();
    return services;
}
export  const CategoriesData = async () =>{
    
    const categoriesData = await fetch('https://airbnb-app-server.vercel.app/categories');
    const categories = await categoriesData.json();
    return categories;
}