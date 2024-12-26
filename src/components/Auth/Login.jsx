import React, { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    console.log("Email is",email);
    console.log("Password is", password);
    setEmail("");
    setPassword("");
    
  };
  return (
    <div className="flex  h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-2xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className=" text-white outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className=" text-white mt-3 outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400"
            type="password"
            placeholder="Enter your Password"
          />
          <button className=" text-white mt-5 border-none outline-none  border-2 bg-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default App;
