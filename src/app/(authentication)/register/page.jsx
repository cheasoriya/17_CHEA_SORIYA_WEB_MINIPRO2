import React from "react";
import RegisterComponent from "../_components/register";

export default function RegisterPage() {
  return (
    <main>
      <div className="space-y-6 w-1/3  mx-auto bg-white drop-shadow-light-steel-blue inset-ring-4 inset-ring-persian-green p-10 rounded-2xl shadow-2xl ">
        <h1 className="font-bold text-3xl text-center">
          Sign In to Plan<span className="text-watermelon-red">I</span>t{" "}
        </h1>
        
        <RegisterComponent />

        {/* copyright */}
        <p className="text-center text-light-steel-blue">
          &copy; Copyright | 2025 Monster
        </p>
      </div>
    </main>
  );
}
