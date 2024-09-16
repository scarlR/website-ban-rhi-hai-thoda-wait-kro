

import React, { useEffect, useState } from 'react'
import eye from "./assets/eye.gif";
import send from "./assets/send.svg";
import wait from "./assets/wait.gif";

const App = () => {
  const [name, setName] = useState("");
  const [twitter, setTwitter] = useState("");
  const [flag, setFlag] = useState(true);
  const queryParams = new URLSearchParams(window.location.search);
  const sitename = queryParams.get("sitename");
  const twitterHandle = queryParams.get("twitterHandle");

  useEffect(() => {
    setFlag(!flag);
  }, [false])
  
  

  return (
    <div>
      {flag ? (
        <div className="flex flex-col justify-center items-center mt-6">
          <h1 className="text-4xl mt-2">{sitename}</h1>
          <img className="mt-2" src={wait} alt="wait" />
          <p className="text-md mt-2">Website ban rahi hai</p>
          <p className="text-md">Please be Patient</p>
          <p className="text-lg">
            If you'd like to help with this, please reach out to @
            <a
              href={`https://x.com/${twitterHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className=" no-underline"
            >
              {twitterHandle}
            </a>
          </p>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-2 items-center justify-center h-screen font-bold font-mono bg-black text-white">
          <img src={eye} alt="eye" className="w-48 h-48" />
          <div className="flex justify-center items-center gap-2 ">
            <label className="text-xl" htmlFor="username">
              Enter your name
            </label>
            <input
              type="text"
              id="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-red-300 mt-2 p-2 rounded-xl text-black"
            />
          </div>
          <div className="flex justify-center items-center gap-2 ">
            <label className="text-xl" htmlFor="t_name">
              twitter handle
            </label>
            <input
              type="text"
              id="t_name"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
              className="border-2 border-red-300 mt-2 p-2 rounded-xl ml-3 text-black"
            />
          </div>
          <button>
            <a
              href={`https://website-ban-rhi-hai-thoda-wait-kro.vercel.app/?sitename=${name}&twitterHandle=${twitter}`}
              onClick={() => setFlag(true)}
            >
              <img
                src={send}
                alt="send"
                className="w-12  h-12 mt-6 bg-white rounded-full "
              />
            </a>
          </button>
        </div>
      )}
    </div>
  );
}

export default App
