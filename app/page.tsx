"use client";

import {getTotalUsers,getTotalPageViews} from "@/services/madhousingAnalytics";
import {useEffect, useState} from "react";

export default function Home() {
  const [users, setUsers] = useState(0);
  const [pageViews, setPageViews] = useState(0);

  useEffect(() => {
    getTotalUsers().then((data) => {
      setUsers(data ? parseInt(data.toString()) : 0);
    });
    getTotalPageViews().then((data) => {
      setPageViews(data ? parseInt(data.toString()) : 0);
    });
  }, []);

  return (
    <div>
      <h1>Aayush Website</h1>
      <h2>MadHousing Analytics</h2>
      <p>Total Users: {users}</p>
      <p>Total Page Views: {pageViews}</p>
    </div>
  );
}
