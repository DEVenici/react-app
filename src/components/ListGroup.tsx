// import { MouseEvent } from "react";

import { useState } from "react";

function ListGroup() {
  let items = [
    "New York",
    "Sain Fransisco",
    "Paris",
    "Tokyo",
    "London",
    "Ryad",
  ];
  // override items to empty --- let = var >> override --- const don't override
  // items = [];

  // if (items.length === 0)
  //   return (
  //     <div>
  //       <h1>List Group</h1> <p>No Items Found!</p>
  //     </div>
  //   );

  // const message = items.length === 0 ? <p>No Items</p> : null;

  // function getMessage() {
  //   return items.length === 0 ? <p>No Items</p> : null;
  // }

  // Arrow Function 2 ways
  // const getMessage = () => {
  //   items.length === 0 ? <p>No Items</p> : null;
  // };

  // const getMessage = () => (items.length === 0 ? <p>No Items</p> : null);

  const getMessage = () => items.length === 0 && <p>No Items Found</p>;

  // // Type annotation :)
  // const handelClick = (event:MouseEvent) => {console.log(event);}

  // const selectedIndex = -1;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List Group</h1>
      {/* this is replacement of if statment "ternary operator" */}
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
