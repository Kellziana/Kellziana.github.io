import React from "react";

const Button = ({children}) => {
    return (
        <button type="button" className="text-black bg-gradient-to-t from-orange-300 to-yellow-200 font-medium rounded-lg text-sm px-4 py-2.5 hover:animate-pulse text-center">{children}</button>
    );
};

export default Button;