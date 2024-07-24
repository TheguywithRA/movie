import { ChangeEvent, FormEvent, useState } from "react";

import { PostLogin } from "../service";
import { useNavigate } from "react-router-dom";

// import Navbar from "../../assets/component/navbar";


const Authentication = () => {
    const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(e);

    const payload = {
      username,
      password,
    };

    try {
        const response = await PostLogin(payload);

        if (response?. token) {
        localStorage.setItem("token", response?.token as string);
        navigate("/")
        }
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-950 flex flex-col h-screen">
      <div className="flex flex-row bg-cover bg-center item-center justify-center flex-grow" style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)' }}>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-gray-950 bg-opacity-90 p-6 rounded-lg gap-4"
        >
          <label className="font-semibold text-gray-300 text-lg">Login</label>
          <input
            type="text"
            placeholder="Username"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
            className="border border-gray-400 rounded-sm p-2 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            className="border border-gray-400 rounded-sm p-2 w-full"
          />
          <button
            type="submit"
            className="bg-red-600 text-white rounded-md py-1 px-5"
          >
            Submit 
          </button>
        </form>
      </div>
    </div>
  );
};

export default Authentication;
