import React, { useEffect, useState } from "react";
import { FcApproval } from "react-icons/fc";

const UseEffectApi = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h1 className="text-center mt-3">Lists of Github Users</h1>
      <div className="container-fluid mt-3">
        <div className="row text-center">
          {users.map((curElem) => {
            return (
              <div className="col-10 col-md-4 mt-5" key={curElem.id}>
                <div className="card p-2">
                  <div className="d-flex align-item-center">
                    <div className="image-fluid w-25 p-3">
                      <img src="{curElem.avature-url}" alt="" />
                    </div>
                    <div className="ms-3 p-3 w-75">
                      <h4 className="mb-0 mt-0 textLeft">
                        {curElem.name} <FcApproval />
                      </h4>
                      <span className="textLeft">{curElem.thumbnailUrl}</span>
                      <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div className="d-flex flex-column">
                          <span className="articles">Article</span>
                          <span className="number1">Number 1</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="followers">Followrs</span>
                          <span className="number2">Number 2</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="rating">Rating</span>
                          <span className="number3">Number 3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UseEffectApi;
