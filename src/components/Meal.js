import React from 'react';
//import 
import "aos/dist/aos.css";

const Meal = ({ meal, addToCart }) => {

    // animation aos
    // useEffect(() => {
    //     Aos.init();
    //   }, []);

    const { strMeal, strMealThumb, strCategory, strArea, strInstructions } = meal;


    //item bookmark or wishlist
    const handleBookmark = (meal) => {
        console.log('click', meal)


        const prevBookmark = localStorage.getItem('Bookmark');
        const oldBookmark = JSON.parse(prevBookmark);
        if(oldBookmark){
            localStorage.setItem('Bookmark', JSON.stringify([...oldBookmark, meal]))
            console.log('ase ')
        }else{
            // local storage a meal er data stringify kore rakha holo
            localStorage.setItem('Bookmark', JSON.stringify([meal]))
            console.log('book nai')
        }
        
    };
    


    // data-aos="zoom-in"
    return (
        <div  className="md:w-[32%] lg:w-[24%] w-full mb-3 card bg-base-100 shadow-xl">
        {/* <ToastContainer /> */}
            <figure><img src={strMealThumb} alt="Shoes" /></figure>
            <div className="card-body p-4 pb-6">
                <h2 className="card-title">{strMeal}</h2>
                <h2 className="card-title">Category: {strCategory}</h2>
                <h2 className="card-title">Area: {strArea}</h2>
                <p>{strInstructions.slice(0, 100)}</p>
                <div className="card-actions justify-between py-2">

                    <button onClick={() => addToCart(meal)} className="btn btn-primary btn-sm">Buy Now</button>

                    <button onClick={() => {handleBookmark(meal)}} className="btn btn-primary btn-sm">Save</button>

                    <button className="btn btn-primary btn-sm">Detail</button>
                </div>
            </div>
        </div>
    );
};

export default Meal;