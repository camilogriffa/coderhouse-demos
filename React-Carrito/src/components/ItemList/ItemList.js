import React from "react";
import Item from "../Item/Item";
const ItemList = ({productList}) => {
  return (
    <div style={{ display: "flex" }}>
      {productList.map((item) => {
        return <Item data={item} />;
      })}
    </div>
  );
};
export default ItemList;

// items.map((item, index) => <Item item={item} key={index} />);
