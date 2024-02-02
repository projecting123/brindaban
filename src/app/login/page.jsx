"use client";
import { MdOutlineMail } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { useReducer } from "react";
const reducer = (state, action) => {
  return { ...state, [action.name]: action.value };
};
export default function page() {
  const [formData, dispatcher] = useReducer(reducer, {});
  const inputHandler = ({ target }) => {
    dispatcher({ name: target.name, value: target.value });
  };

  const submitHandler = () => {
    console.log(formData);
  };
  return (
    <>
      <div className="flex justify-center my-2">
        <form
          action=""
          className="flex flex-col gap-3 bg-yellow-200 p-3 rounded-lg items-center select-none"
        >
          <h1 className="font-bold opacity-70 text-3xl">Login Form</h1>
          <div className="flex">
            <div className="bg-gray-600 flex items-center px-2 rounded-l-full">
              <span className="">
                <MdOutlineMail color="white" />
              </span>
            </div>
            <input
              className="outline-none rounded-r-full px-2 py-1 border-2 w-[320px] border-gray-300 focus:ring-2 transition-all duration-200"
              type="email"
              name="email"
              placeholder="Your email"
              onChange={inputHandler}
            />
          </div>

          <div className="flex">
            <div className="bg-gray-600 flex items-center px-2 rounded-l-full">
              <span className="">
                <IoKeyOutline color="white" />
              </span>
            </div>
            <input
              className="outline-none rounded-r-full px-2 py-1 border-2 w-[320px] border-gray-300 focus:ring-2 transition-all duration-200"
              type="password"
              name="password"
              placeholder="Your password"
              onChange={inputHandler}
            />
          </div>
          <button
            onClick={submitHandler}
            type="button"
            className="font-semibold px-2 py-1 bg-yellow-700 hover:bg-yellow-800 text-white rounded transition-all shadow-xl active:shadow-none"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
