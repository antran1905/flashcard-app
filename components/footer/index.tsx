import Image from "next/image";
import React from "react";
import avatar from "../../public/avatar.jpg";
export const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center items-center w-3/4 m-auto border-t mt-10">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="py-10 flex items-center"
        >
          Powered by
          <span className="ml-4">
            <Image className="object-cover rounded-full" src={avatar} alt="Vercel Logo" width={50} height={50} />
          </span>
        </a>
      </div>
    </footer>
  );
};
