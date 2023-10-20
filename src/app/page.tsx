"use client";

import dayjs, { Dayjs } from "dayjs";
import Image from "next/image";
import { useState } from "react";

var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

export default function Home() {
  const [today, setToday] = useState("11/10/2023");
  const [posts, setPosts] = useState([]);
  const arr: string[] = ["apple", "banana", "strawberry"];
  // function
  // async function getDate() {
  //   console.log("hello");
  //   const now = "12/10/2023";
  //   await setToday(now);
  //   // dayjs("12-25-1995", "MM-DD-YYYY")
  //   // console.log(today.format("MM/DD/YYYY"));
  //   // console.log(arr[0]);
  //   // console.log(today.format("MM/DD/YYYY"));
  // }
  // console.log(today);
  // const todaysDate = dayjs(today).format("MM/DD/YYYY");
  // types number boolean string [] any objects

  // for (let index = 0; index < arr.length; index++) {
  //   console.log(arr[index]);
  // }

  // arr.forEach((element) => {
  //   console.log(element);
  // });

  // while (arr) {
  //   console.log()
  // }

  async function getData() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const parsedData = await data.json();
    console.log(parsedData);
    setPosts(parsedData);

    // const response = await fetch("http://example.com/movies.json");
    // const movies = await response.json();
    // console.log(movies);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Fernando</h1>
      {/* <h2>{todaysDate}</h2> */}
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
      {/* <button
        onClick={() => getDate()}
        className="bg-orange-600 rounded-lg p-4 text-white hover:bg-orange-900"
      >
        Click me on the {todaysDate}
      </button> */}

      <a
        href="/example"
        className="bg-orange-600 rounded-lg p-4 text-white hover:bg-orange-900"
      >
        Test
      </a>
      <button onClick={() => getData()}>Get Data</button>
      {posts.map((item: any, index) => (
        <h3 key={index}>{item.title}</h3>
      ))}
    </main>
  );
}
