'use client'
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { getDriverList } from "./api";
  
function Home() {
  const [driverList, setDriverList] = useState([]);
  
  useEffect(() => { 
      getDriverList().then((data) => {
        const driverListt = data.data
        setDriverList(driverListt)
      })
    }, []);

    const DriverList = () => {
      return driverList.map((driver, i) => {
        return (
          <div className={styles.driverCard} key={i}>
            <img src={driver.headshot_url} alt="" />
            <h1>
              {driver.broadcast_name}
            </h1>
            <h2>
              {driver.team_name}
            </h2>
          </div>
        )
      })
    }
 
  return (
    <main>
      <h1 className={styles.h1}>F1 Driver List</h1>
      <div className={styles.driverContainer}>
        <DriverList />
      </div>
    </main>
  );
}

export default Home;