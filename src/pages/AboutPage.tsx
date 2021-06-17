import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <div>
      <h1>INFO PAGE</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed magnam, labore optio fugiat
        eum perspiciatis unde eos. Dicta ipsam, unde accusamus officia necessitatibus dolor ullam
        ipsa commodi quos incidunt quis neque repellat! Praesentium facilis architecto enim.
        Reiciendis, repellat expedita obcaecati nostrum quasi pariatur amet magni. Natus numquam
        fugiat vero consectetur?
      </p>
      <button className="btn" onClick={() => history.push("/")} >Back to ToDos</button>
    </div>
  );
};
