// rrd imports
import { Link } from "react-router-dom";
// requests
import { getFormData } from "../requests";
import { useState } from "react";

// custom hooks
import { useAuth } from "../hooks/useAuth";

function Register() {
  const [imgFile, setImgFile] = useState();

  const { register, loading, loginWithGoogle } = useAuth();

  const handleChange = (e) => {
    setImgFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataValues = getFormData(e.target);

    const reader = new FileReader();
    reader.readAsDataURL(imgFile);

    reader.onloadend = async () => {
      const base64data = reader.result.split(",")[1];

      const formData = new FormData();

      formData.append("key", "7ff3bba58835b990ee08a5d2f0ff6e3e");
      formData.append("image", base64data);

      try {
        const res = await fetch("https://api.imgbb.com/1/upload", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();

        const photoURL = data.data.url;
        register({ ...formDataValues, photoURL });
        e.target.reset();
      } catch (err) {
        console.log(err.message);
      }
    };
  };

  return (
    <div className="flex flex-col items-center bg-blue-50 h-screen pt-10">
      <h2 className="text-2xl font-bold mb-3">Create Your Accaunt : </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 px-10 py-4 items-start bg-white shadow-xl rounded-2xl"
      >
        <label className="flex flex-col gap-2 w-full">
          <span>Name: </span>
          <input
            className="border px-3 py-1 bg-white rounded-sm"
            type="text"
            placeholder="*****"
            name="displayName"
            required
          />
        </label>
        <label className="flex flex-col gap-2 w-full">
          <span>Email: </span>
          <input
            className="border px-3 py-1 bg-white rounded-sm"
            type="email"
            name="email"
            placeholder="*****@gmail.com"
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
        <label className="flex flex-col gap-2 w-full">
          <span>Photo: </span>
          <input
            className="border px-3 py-1 bg-white rounded-sm"
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
        </label>
        <p className="text-[12px]">
          <Link className="text-blue-400 underline" to={"/login"}>
            If you have an account{" "}
          </Link>
        </p>
        <div className="flex gap-2 items-center ml-auto">
          {!loading && (
            <button className="cursor-pointer ml-auto transition-colors duration-300 border-amber-500 border-2 hover:bg-amber-500 hover:text-white bg-white px-5 py-1 rounded active:scale-75">
              Register
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
          {!loading && (
            <button
              type="button"
              onClick={loginWithGoogle}
              className="cursor-pointer ml-auto transition-colors duration-300 border-amber-500 border-2 hover:bg-amber-500 hover:text-white bg-white px-5 py-1 rounded active:scale-90"
            >
              Google
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Register;
