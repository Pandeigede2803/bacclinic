import React from "react";
import Link from "next/link";

const SidebarArticle = () => {
  return (
    <div className=" font-primary text-base">
      {/* Sidebar */}
      <aside className="lg:col-span-1">
        <div className="sticky top-12">
          <div className=" bg-gradient-to-tl from-orange-100 to-orange-50  shadow-lg rounded-xl p-6 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                Learn more about Preline
              </h3>
              <p className="mt-3 text-lg text-gray-800">
                Join us for an upcoming webinar where we&apos;ll walk you
                through Preline and answer any questions you may have.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Recent Posts</h3>
              <ul className="mt-3 space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="flex-shrink-0 block w-14 h-14 rounded-lg overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1671726203638-83742a2721a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                      alt="Image Description"
                    />
                  </span>
                  <div>
                    <Link
                      className="block text-gray-800 font-medium hover:text-blue-600"
                      href="#"
                    >
                      How to design a mobile app from scratch
                    </Link>
                    <p className="mt-1 text-gray-800">January 15, 2023</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="flex-shrink-0 block w-14 h-14 rounded-lg overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1671726203454-488ab18f7eda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                      alt="Image Description"
                    />
                  </span>
                  <div>
                    <Link
                      className="block text-gray-800 font-medium hover:text-blue-600"
                      href="#"
                    >
                      The importance of user testing
                    </Link>
                    <p className="mt-1 text-gray-800">January 12, 2023</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="flex-shrink-0 block w-14 h-14 rounded-lg overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                      alt="Image Description"
                    />
                  </span>
                  <div>
                    <Link
                      className="block text-gray-800 font-medium hover:text-blue-600"
                      href="#"
                    >
                      Announcing a free plan for small teams
                    </Link>
                    <p className="mt-1 text-gray-800">January 10, 2023</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Categories</h3>
              <ul className="mt-3 space-y-3">
                <li>
                  <Link className="text-gray-800 hover:text-blue-600" href="#">
                    Company News
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-800 hover:text-blue-600" href="#">
                    Design
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-800 hover:text-blue-600" href="#">
                    Engineering
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-800 hover:text-blue-600" href="#">
                    Product Updates
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SidebarArticle;
