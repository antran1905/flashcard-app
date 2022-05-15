import Link from "next/link";
import React, { HTMLAttributes } from "react";
import { overrideTailwindClasses } from "tailwind-override";
interface ICard extends HTMLAttributes<HTMLDivElement> {
  title: string;
  path: string;
  desc: string;
}

export const Card = (props: ICard) => {
  const { path, title, className, desc } = props;
  return (
    <Link href={path} passHref>
      <a href={path} className="group">
        <div
          className={overrideTailwindClasses(
            `border-2 border-primary rounded-lg w-64 h-56 min-w-min cursor-pointe group-hover:border-secondary transition-all duration-200 ${className}`
          )}
        >
          <div className="text-xl h-12 border-b-2 border-primary group-hover:border-secondary transition-all duration-200 flex items-center px-6">
            {title} &rarr;
          </div>
          <div className="p-6 text-2xl">{desc}</div>
        </div>
      </a>
    </Link>
  );
};
