import React from "react";

function CategoryFilter({ categories, changeCategories }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
        categories.map(el=>{
          return(
          <button onClick={()=>changeCategories(el)}>{el}</button>
          )
        })
      }
    </div>
  );
}

export default CategoryFilter;
