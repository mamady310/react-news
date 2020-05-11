import React from 'react';

const Food = ({ strMeal, strMealThumb, strYoutube }) => {
    return (
        <div className="food">
            <a href={strYoutube} targe='_blank' rel="noopener noreferrer"><img src={strMealThumb} alt={strMeal}/>
            </a>
            <h3>{strMeal}</h3>

        </div>
    )
}
export default Food;