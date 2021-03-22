import React, {  } from "react";

export function SaleItem({item}){
  return (
    <p>{item.salesNumber} times sales ({item.saleName})</p>
  )
}

export default function SaleSection({items}) {
  // console.log('SaleSection', items)
  return (
    <aside>
      <h2>Sales Section</h2>
      {items.map(item => <SaleItem item={item} key={item.id} />)}
    </aside>
  );
}

