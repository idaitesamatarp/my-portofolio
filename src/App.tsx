import { useState } from "react";
import "./App.css";
import { ThreeCircles } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

function App() {
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  setTimeout(() => {
    setLoading(false);
    navigate("/aboutme");
  }, 5200);

  return (
    <div className="bg-topography">
      <div className="flex flex-col w-screen h-screen justify-center items-center">
        <div className="relative mx-auto">
          {isLoading ? (
            <div>
              <ThreeCircles
                height="100"
                width="100"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass="justify-center m-8"
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor="#FE4A49"
                innerCircleColor="#FED766"
                middleCircleColor="#009FB7"
              />
              <div className="typewriter">
                <h3 className="bg-red-500 text-white text-xl">
                  "thankYou forVisiting mySite"
                </h3>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
