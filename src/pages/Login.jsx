import { Link } from "react-router-dom";
import { getFormData } from "../requests";

import { useAuth } from "../hooks/useAuth";

function Login() {
  const { login, loading, error } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = getFormData(e.target);

    login(data);
  };

  return (
    <div className="flex flex-col items-center pt-16 bg-blue-50 h-screen">
      <h2 className="text-2xl font-bold mb-3">SignIn: </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-96 gap-5 p-10 bg-white items-start shadow-xl rounded-2xl"
      >
        <label className="flex flex-col gap-2 w-full">
          <span>Email: </span>
          <input
            className="border px-3 py-1 bg-white rounded-sm"
            type="email"
            placeholder="Akbar123@gmail.com"
            name="email"
            required
          />
        </label>
        <label className="flex flex-col gap-2 w-full">
          <span>Password: </span>
          <input
            className="border px-3 py-1 bg-white rounded-sm"
            type="password"
            placeholder="*******"
            name="password"
            required
            autoComplete="off"
          />
        </label>

        <p className="text-[12px]">
          <Link className="text-blue-400 underline" to={"/register"}>
            If you don't have an account{" "}
          </Link>
        </p>
        {!loading && (
          <button className="cursor-pointer ml-auto transition-colors duration-300 border-amber-500 border-2 hover:bg-amber-500 hover:text-white bg-white px-5 py-1 rounded active:scale-75">
            Login
          </button>
        )}
        {loading && (
          <button
            disabled
            className="cursor-pointer ml-auto transition-colors duration-300 border-amber-500 border-2 hover:bg-amber-500 hover:text-white bg-white px-5 py-1 rounded active:scale-75"
          >
            Loading...
          </button>
        )}
      </form>
    </div>
  );
}

export default Login;
