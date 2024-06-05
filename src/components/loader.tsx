import React from "react";

interface ILoader {
  title: string;
}

const Loader = ({ title }: ILoader) => {
  return <div>{title}</div>;
};

export default Loader;
