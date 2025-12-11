import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaClipboardList,
  FaFire,
  FaArrowRight,
} from "react-icons/fa";

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-10 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Stay Organized, Stay{" "}
          <span className="text-amber-500">Productive</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mt-4">
          Manage your daily tasks efficiently and never miss a deadline again.
          Simple, powerful, and designed for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Link
            to="/myToDos"
            className="text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            style={{ backgroundColor: "#f59e0b" }} // amber-500
          >
            Get Started <FaArrowRight className="text-sm" />
          </Link>
          <button className="border-2 border-amber-500 text-amber-500 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 md:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
          <div className="text-4xl text-amber-500 mb-4">
            <FaClipboardList />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Easy Task Management
          </h3>
          <p className="text-gray-700">
            Create, organize, and track your todos with an intuitive interface.
            Keep all your tasks in one place.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
          <div className="text-4xl text-amber-500 mb-4">
            <FaCheckCircle />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Mark Completed
          </h3>
          <p className="text-gray-700">
            Check off completed tasks and see your progress. Stay motivated with
            visual feedback on what you've accomplished.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
          <div className="text-4xl text-amber-500 mb-4">
            <FaFire />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Never Miss Deadlines
          </h3>
          <p className="text-gray-700">
            Set deadlines for your tasks and get organized. Stay on track and
            accomplish your goals on time.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Ready to Transform Your Productivity?
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-4">
          Join thousands of users who are managing their tasks more effectively
          with our todo list app.
        </p>
        <Link
          to="/myToDos"
          className="inline-block text-white font-semibold py-3 px-8 rounded-lg mt-6 transition-all duration-300 hover:shadow-lg"
          style={{ backgroundColor: "#f59e0b" }} // amber-500
        >
          Start Your Journey Now
        </Link>
      </section>
    </div>
  );
}

export default Home;
