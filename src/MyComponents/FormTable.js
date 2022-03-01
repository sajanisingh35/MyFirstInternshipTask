import React from "react";

export const FormTable = ({ dataArray }) => {
  const deleteItem = (val) => {
    let index = dataArray.indexOf(val);
    dataArray.splice(index, 1);
  };
  const sortItem = () => {
    let arr = dataArray.sort((a, b) => (a.uname > b.uname ? 1 : -1));

    dataArray = arr;
  };

  
  return (
    <> <center><b><h1>Records</h1></b></center>
    <table class="table">
      <thead>
      <tr>
          <th onClick={() => sortItem()}>Sort</th>
        </tr>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {dataArray.map((val) => {
          return (
            <tr key={val.id}>
              <td>{val.id}</td>
              <td>{val.uname}</td>
              <td>{val.email}</td>
              <td>{val.phone}</td>
              <td><button type="update">Edit</button></td>
              


              <td><button onClick={() => deleteItem(val)}>Delete</button>
</td>
            </tr>
          );
        })}
      </tbody>
    </table></>
  );
};
