import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import Meal from './Meal';

const Meals = () => {
    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
            .then(data => {
                setMeals(data?.meals)
            })
    }, [search])

    const addToCart = (meal) => {
        toast("Item add to cart")
        //object ot array convert
        if (meal) {
            const newMeal = [...cart, meal];
            setCart(newMeal)
        } else {
            setCart(meal)
        }
    }

    // delete from cart
    const handleDelete = (idMeal) => {
        const newCart = cart.filter(singleCart => singleCart.idMeal !== idMeal);
        setCart(newCart)
        Swal.fire({
            icon: 'error',
            title: 'Oops...Delete From Cart',
        })
    };



    return (
        
        <div className='meal-container'>
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    <div className='mb-[60px] text-center px-3'>
                        <h1 className="text-3xl font-bold py-5">
                            Search Food {meals.length}
                        </h1>
                        <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search Your Food" className="md:w-[350px] mb-3 w-full input input-bordered input-primary w-full p-6" />
                        <button type='submit' className="ml-3  w-[150px] btn btn-outline btn-secondary">Search</button>
                    </div>
                    <div className='meal-items flex flex-wrap gap-3 justify-between'>
                        {
                            meals.map(meal =>
                                <Meal key={meal.idMeal} meal={meal} addToCart={addToCart} />
                            )
                        }
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li className='text-2xl font-semibold'><a>Selected Food: {cart.length}</a></li>

                        {
                            cart.map(product =>
                                <div key={product.idMeal} className='flex mb-3 justify-between items-center bg-blue-100 p-3 rounded-md'>
                                    
                                    <h4 className='text-lg font-semibold'>{product.strMeal}</h4>
                                    <button onClick={() => handleDelete(product.idMeal)} className="btn btn-xs btn-outline btn-error">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </div>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Meals;