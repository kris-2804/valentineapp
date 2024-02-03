"use client";
import "./App.css";
import { useState } from "react";
import arr from "./messages";
import emailjs from "emailjs-com";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 10 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = arr;

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen -mt-16">
        {yesPressed ? (
          <>
            <img
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
              alt="OKImage"
            />
            <div className="text-4xl font-bold my-4">Ok yay!!!</div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
              alt="DoneImage"
            />
            <h1 className="text-4xl my-4">Will you be my Valentine?</h1>
            <div>
              <button
                className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
                style={{ fontSize: yesButtonSize }}
                onClick={() => {
                  let userData = `
                name : ${window?.user?.profileObj?.name},
                mail : ${window?.user?.profileObj?.email},
                familyName :${window?.user?.profileObj?.familyName},
                givenName :${window?.user?.profileObj?.givenName},
                googleId :${window?.user?.profileObj?.googleId},
                image :${window?.user?.profileObj?.imageUrl}
                `;

                  let name = window.user.profileObj.name;
                  emailjs.send(
                    "service_934qv9i",
                    "template_chog0um",
                    {
                      from_name: name,
                      message:userData+"wants to date"  ,
                      to_name: "Kris",
                    },
                    "SRe_t8Uk4M5uawGYb"
                  );

                  setYesPressed(true);
                }}
              >
                Yes
              </button>
              <button
                onClick={handleNoClick}
                className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
