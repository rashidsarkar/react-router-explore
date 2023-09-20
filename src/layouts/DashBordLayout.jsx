import { Link, Outlet } from "react-router-dom";

function DashBordLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <nav className="bg-blue-800 w-64 p-4">
        <div className="text-white font-semibold text-xl mb-6">Dashboard</div>
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard"
              className="text-white hover:text-blue-200 transition duration-300"
            >
              Dashboard Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/profile"
              className="text-white hover:text-blue-200 transition duration-300"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/edit-profile"
              className="text-white hover:text-blue-200 transition duration-300"
            >
              Edit Profile
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/settings"
              className="text-white hover:text-blue-200 transition duration-300"
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>

      <main className="flex-1 p-4">
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default DashBordLayout;
