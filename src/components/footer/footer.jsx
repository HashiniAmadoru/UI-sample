import React from "react";
import logo from "../../assests/Logo.jpg";

function Footer() {
  return (
    <>
      <div className="main-background-color">
        <div className="mx-auto p-6">
          <div className="mx-auto">
            <div className="mt-2 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 md:grid-cols-4">
              <div className="lg:col-span-2 md:col-span-4">
                <img src={logo} alt="Logo" />
                <p className="text-white f-object">
                  Your goal is our target. Not anything in between. We use
                  online marketing platforms and tools to achieve single
                  objective - your business results.
                </p>
              </div>
              <div className="lg:col-span-1 md:col-span-2">
                <h6 className="text-white">Our Technologies</h6>
                <ul className="list-none ul-style">
                  <li className="text-white p-text-size">ReactJS</li>
                  <li className="text-white p-text-size">Gatsby</li>
                  <li className="text-white p-text-size">NextJS</li>
                  <li className="text-white p-text-size">NodeJS</li>
                  <li className="text-white p-text-size">GraphQL</li>
                  <li className="text-white p-text-size">Laravel</li>
                </ul>
              </div>
              <div className="lg:col-span-1 md:col-span-2">
                <h6 className="text-white">Our Services</h6>
                <ul className="list-none ul-style">
                  <li className="text-white p-text-size">
                    Social media Marketing
                  </li>
                  <li className="text-white p-text-size">
                    Web & Mobile App Development
                  </li>
                  <li className="text-white p-text-size">Data & Analytics</li>
                  <li className="text-white p-text-size">
                    Google Marketing solutions
                  </li>
                  <li className="text-white p-text-size">
                    Search Engine Optimization
                  </li>
                </ul>
              </div>
            </div>
            <hr className="hr-theme" />
            <p className="text-white privacy-policy-theme">
              Privacy Policy | Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
