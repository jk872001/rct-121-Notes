import { useState } from "react";
import styles from "./CandidateCard.module.css";

function CandidateCard({name,email,phone_no,status,Option,date_added}) {
   const [img,setTmg]=useState(true);
  return (
    
    <div data-testid="candidate-container" className={styles.container}>
      <div className={styles.name} ><span><input type="checkbox"  /></span>{name}</div>
      <div className={styles.email}>{email}</div>
      <div className={styles.phone_no}>{phone_no}</div>
      <div className={styles.status}>{status}</div>
      <div className={styles.Option}>{Option}</div>
      <div className={styles.date_added}>{date_added}</div>
      
      
      
      
    </div>
  );
}

export default CandidateCard;
