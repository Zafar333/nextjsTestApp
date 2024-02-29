'use client'  
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const navigate=useRouter()
  useEffect(()=>{
    navigate.push("/mainLayout")
  },[

  ])
  // const navigate=useNavigate();

  return (
    <main className={styles.mainPage}>
 
    </main>
  );
}
