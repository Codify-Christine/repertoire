// src/components/Sidebar.jsx
import {
  LayoutDashboard,
  Calendar,
  MessageCircle,
  HandHeart,
  Users,
  Bell,
  MessageSquareHeart,
  BookOpen,
  Settings,
  Compass,
  HelpingHand,
  LogOut,
  Sun,
  Moon,
  Menu,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { label: "Events", icon: Calendar, path: "/events" },
  { label: "Communications", icon: MessageCircle, path: "/communications" },
  { label: "Giving & Donations", icon: HandHeart, path: "/givinganddonations" },
  { label: "Ministries & Groups", icon: Users, path: "/ministriesandgroups" },
  { label: "Notifications", icon: Bell, path: "/notifications" },
  { label: "Feedback & Testimonies", icon: MessageSquareHeart, path: "/feedbackandtestimonies" },
  { label: "Resources & Media", icon: BookOpen, path: "/resourcesandmedia" },
  { label: "Settings", icon: Settings, path: "/settings" },
  { label: "Spiritual Journey", icon: Compass, path: "/spiritualjourney" },
  { label: "Volunteer & Services", icon: HelpingHand, path: "/volunteerandservices" },
];

const logoUrl = "https://cdn.prod.website-files.com/6613d4144659f303f98d6d28/66d9c2629601ee8b91c00b70_mark-white.svg";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-white bg-[#0B2A4A] p-2 rounded"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <Menu className="w-5 h-5" />
      </button>

      <aside
        className={`${
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } fixed top-0 left-0 h-screen bg-[0071BC]] text-white transition-all duration-300 z-40 flex flex-col justify-between shadow-lg ${
          isHovered ? "w-60" : "w-20"
        } md:transition-none md:flex ${
          darkMode ? "dark" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Top Logo and Theme Toggle */}
        <div className="p-4 flex flex-col items-center gap-4">
          <div className="flex items-left gap-2 w-full">
            <img
              src={logoUrl}
              alt="Logo"
              className={`w-8 h-8 ${isHovered ? "block" : "mx-auto"}`}
            />
            {isHovered && <span className="text-lg font-medium">Living Rock</span>}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="flex items-center gap-2 text-white hover:text-orange-300"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            {isHovered && <span className="text-sm">{darkMode ? "Light" : "Dark"} Mode</span>}
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col gap-2 p-2 flex-1">
          {navItems.map(({ label, icon: Icon, path }) => (
            <NavLink
              key={label}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded-md transition ${
                  isActive ? "bg-[F7941D] text-orange-300" : "hover:bg-[0071BC]"
                }`
              }
            >
              <Icon className="w-5 h-5" />
              {isHovered && <span className="text-sm font-medium">{label}</span>}
            </NavLink>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[ffffff] text-xs text-gray-300">
          {isHovered ? (
            <>
              <p>&copy; 2025 Living Rock Church.</p>
              <p>All rights reserved.</p>
              <button className="flex items-center gap-2 mt-3 text-white hover:text-orange-300">
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <LogOut className="w-5 h-5 hover:text-orange-300 mx-auto" />
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
