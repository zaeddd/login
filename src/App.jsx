import Login from "./components/Login";
import image from "./assets/hike.jpg";

function App() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center font-mono bg-gradient-to-r from-orange-400 from-10% via-red-500 to-orange-400 to-100%">
        <div className="flex shadow-2xl">
          <div className="flex flex-col items-center justify-center text-center p-20 gap-7 bg-white rounded-2xl
          xl:rounded-l-2xl xl:rounded-r-none
          ">
            <h1 className="text-5xl font-bold">
              Welcome to <span className="text-orange-500">HikeTo</span>
            </h1>
            <div className="flex flex-col text-2xl text-left gap-1">
              <span>Username</span>
              <input
                type="text"
                className="rounded-md p-1 border-2 outline-none focus:border-orange-400 focus:bg-slate-50"
              />
            </div>
            <div className="flex flex-col text-2xl text-left gap-1">
              <span>Password</span>
              <input
                type="text"
                className="rounded-md p-1 border-2 outline-none focus:border-orange-400 focus:bg-slate-50"
              />

              <div className="flex gap-1 items-center">
                <input type="checkbox" />
                <span className="text-base">Remember Password</span>
              </div>
            </div>

            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-pink-400 hover:to-yellow-500 text-white font-bold py-4 px-10 text-2xl rounded-md">
              Login
            </button>

            <p className="text-lg text-gray-600 font-semibold">
              Don't have an account?{" "}
              <a href="#" className="text-orange-500 hover:underline">
                Sign up
              </a>
            </p>
          </div>

          <img
            src={image}
            alt="Hike"
            className="w-[500px] object-cover xl:rounded-tr-2xl xl:rounded-br-2xl xl:block hidden"
          />
        </div>
      </section>
    </>
  );
}

export default App;
