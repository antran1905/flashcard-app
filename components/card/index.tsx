import React from "react";
interface ICard {
  title: string;
  path: string;
}

export const Card = (props: ICard) => {
  const { path, title } = props;
  return (
    <div className="border-2 rounded-lg border-white">
      <div className="text-lg h-12 border-b-2 border-white">{title} &rarr;</div>
    </div>
  );
};
