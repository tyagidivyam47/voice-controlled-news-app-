import React from "react";

const Input = (props) => {

    const categoryChangeHandler = (e) =>{
      // console.log(e.target.value)
      // const cate = e.target.value;
      // console.log(typeof cate);
      props.onCategoryChange(e.target.value)
    }
  return (
    <div className="text-center mb-9 rounded-md space-x-3">
      <label for="category" className="text-lg text-indigo-900">Category:</label>

      <select name="category" id="category" value={props.currentCategory} onChange={categoryChangeHandler} className="rounded-sm py-1 px-20 font-thin font-sans">
        <option value="general" >General</option>
        <option value="health">Health</option>
        <option value="business">Business</option>
        <option value="sports">Sports</option>
      </select>
    </div>
  );
};

export default Input;
