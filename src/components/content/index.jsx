import React from "react";
import main from "../../assests/main.jpg";
import second from "../../assests/second.jpg";
import search from "../../assests/search.png";
import "./Content.css";

function Index() {
  return (
    <>
      <div class="relative">
        <img src={main} alt="main" className="f-img" />
        <div className="absolute img-text-design bottom-5">
          <span className="img-text-theme">
            We crush your competitors, goals, and sales records - without the
            B.S.
          </span>
          <button className="text-white font-bold py-2 px-4 common-btn">
            GET FREE CONSULTATION
          </button>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto px-6 lg:px-8">
          <div className="mx-auto mt-5 lg:max-w-7xl md:max-w-xl">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 md:grid-cols-2">
              <div className="relative flex items-center justify-center">
                <img src={second} alt="computer" className="left-img" />
              </div>
              <div className="flex items-center">
                <div>
                  <p className="text-style topic-theme">
                    Web & Mobile App Development
                  </p>
                  <p>
                    Your web and mobile Apps are pieces of the puzzle to grow
                    your business. We use frameworks that tailor content and
                    engagement methods to respond to different intents shown by
                    your potential customers who interact with your business
                    online.
                  </p>
                  <button className="text-white font-bold py-2 px-4 btn-style common-btn">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white mb-5">
        <div className="mx-auto px-6 lg:px-8">
          <div className="mx-auto mt-5 sm:mt-20 lg:mt-24 lg:max-w-7xl md:max-w-xl">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 md:grid-cols-2">
              <div className="relative flex items-center justify-center lg:order-2 md:order-2">
                <img src={search} alt="computer" className="left-img" />
              </div>

              <div className="flex items-center lg:order-1 md:order-1">
                <div>
                  <p className="text-style topic-theme">
                    Digital Strategy Consulting
                  </p>
                  <p>
                    Your digital strategy should complement the overall
                    marketing strategy of the company. In online marketing, each
                    component will never work in isolation and every business
                    needs a different mix. We provide a clear concept and
                    strategic overview to find the most efficient model for your
                    business.
                  </p>
                  <button className="text-white font-bold py-2 px-4 btn-style common-btn">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
