import { useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { userInfo } = useSelector((state: any) => state.auth);
  if (!userInfo) {
    return (
      <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
        <div className="rounded-lg bg-white p-8 text-center shadow-xl">
          <h1 className="mb-4 text-4xl font-bold">Unauthorized </h1>
          <p className="text-gray-600">
            Oops! The page you are looking for could not be found.
          </p>
          <Link
            to="/signin"
            className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
          >
            Go back to Login
          </Link>
        </div>
      </div>
    );
  }

  return <Outlet />;
};
export default ProtectedRoute;
