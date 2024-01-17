import React from 'react';

const Meal = ({meal}) => {
    const {strCategoryDescription, strCategoryThumb, idCategory} = meal;
    return (
        <div className="bg-slate-200 p-5 text-left rounded-lg">
            <img className="mb-4 rounded-lg mx-auto" src={strCategoryThumb} alt="" />
            <h2>{strCategoryDescription}</h2>
        </div>
    );
};

export default Meal;