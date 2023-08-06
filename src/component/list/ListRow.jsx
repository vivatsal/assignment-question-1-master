import styles from "./ListRow.module.css";
import timeStamps from "../../assets/timeStamps.json"
import { useContext } from "react";
import orderContext from "../../pages/orderContext";

const ListCell = ({ children, data }) => {
  // console.log(data)

  const details = useContext(orderContext);

  const handleClick = (data) => {
    
    const data1 = {"buySellIndicator": data.executionDetails.buySellIndicator, 
    "orderStatus": data.executionDetails.orderStatus, 
    "orderType": data.executionDetails.orderType}

    details.setSelectedOrderDetails(data1);

    let data2 = {};

    for (let i=0; i<timeStamps.results.length; i++) {
      if (timeStamps.results[i]["&id"]===data["&id"]) {
        data2 = timeStamps.results[i].timestamps;
      }
    }

    details.setSelectedOrderTimeStamps(data2);

  }

  return <tr onClick={()=>{handleClick(data)}} className={styles.cell}>{children}</tr>;
};

export default ListCell;
