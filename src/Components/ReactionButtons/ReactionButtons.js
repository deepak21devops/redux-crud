import React from "react";

const ReactionButtons = () => {
  const reactions = {
    like: "👍",
    share: "🖐️",
    subscribe: "😎",
  };

  const reactbtn = Object.entries(reactions).map(([name, emoji]) => {
    return (
      <button type="button" class="btn btn-dark mx-1">
        {emoji}
      </button>
    );
  });

  return <div>{reactbtn}</div>;
};

export default ReactionButtons;
