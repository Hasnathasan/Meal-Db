import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Meals = () => {
    const meals = useLoaderData();
    const {idCategory} = meals.categories;
    console.log(meals);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                meals.categories.map(meal => <Meal key={idCategory} meal={meal}></Meal>)
            }
        </div>
    );
};

export default Meals;