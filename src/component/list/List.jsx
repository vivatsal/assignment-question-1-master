import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";
import timeStamps from "../../assets/timeStamps.json"

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({ rows, currency, searchText }) => {
  let index = 1;

  const hashMap = new Map();
  
  for (let i=0; i<timeStamps.results.length; i++) {
    hashMap.set(timeStamps.results[i]["&id"], timeStamps.results[i].timestamps.orderSubmitted)
  }

  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {currency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row) => {
          if (row["&id"].startsWith(searchText)) {
            return (
              <ListRow key={index++} data={row}>
                <ListRowCell>{row["&id"]}</ListRowCell>
                <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
                <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
                <ListRowCell>{hashMap.get(row["&id"])}</ListRowCell>
                <ListRowCell>{row.bestExecutionData.orderVolume[currency]}</ListRowCell>
            </ListRow>
            )
          }
          return null;
        })}
      </tbody>
    </table>
  );
};

export default List;
