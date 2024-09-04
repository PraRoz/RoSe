import React from "react";

function User({ user }: any) {
  console.log(user, "ssss users");
  return (
    <div>
      Users
      <div className="bg-[#e6f8ff] p-10 mt-2 flex flex-col gap-4">
        <h1>
          Name: <span>{user?.receiver_name}</span>
        </h1>
        <h1>
          Contact: <span>{user?.receiver_contact}</span>
        </h1>
        <h1>
          Order Location: <span>{user?.location}</span>
        </h1>
        <h1>
          Order Monument: <span>{user?.monument}</span>
        </h1>
      </div>
    </div>
  );
}

export default User;
