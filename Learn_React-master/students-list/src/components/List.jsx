import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, img } = person;
        return (
          <>
            <div key={id} className="person bg-white w-2/6 mx-auto">
              <img src={img} alt={img} className="rounded-full w-32 h-32 p-8" />
              <div className="text-lg">
                <h4>{name}</h4>
                <p>{age}</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default List;
