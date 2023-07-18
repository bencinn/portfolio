"use client";

import Navbar from "@/components/navbar";
import Gridl from "@/components/iwc";
import BigIcon from "@/components/bigicon";
import {motion} from "framer-motion";

import {Fragment} from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 lg:p-10">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <Navbar />
      </div>
      <div className="flex items-center flex-col m-6 gap-36">
              <BigIcon />
              <div className="flex items-center flex-col m-3 gap-2">
                <span className="font-bold text-4xl">My projects</span>
                <Gridl title="Teolang" description="A programming language written in Rust" imagesrc="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" url="https://github.com/bencinn/teo"/>
                <Gridl title="School Parking Project" description="(Contributed) The project that manages the parking spaces in schools written in Svelte + Supabase" imagesrc="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" url="https://github.com/ItsPungpond98/School-Parking-Project"/>
                <Gridl title="Node-Server" description="(My first project!) A template for Node.js server" imagesrc="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" url="https://bencinn/Node-Server"/>
              </div>
              <div className="flex items-center flex-col m-5 gap-5">
                <span className="font-bold text-4xl">Contact</span>

<div className="grid grid-cols-4 grid-rows-3 gap-4 items-center">
  {[["Github", "Hansnnn (@Bencinn)", "https://github.com/bencinn"], ["E-Mail", "iloveheapsort@gmail.com", "mailto:iloveheapsort@gmail.com"]].map((object, _) =>
    <Fragment key={object[0]}>
      <div>{object[0]}</div>
          <motion.a className="p-3 bg-slate-300 bg-opacity-30 rounded-full flex items-center gap-6 h-15 col-span-3" href={object[2]} target="__blank" whileHover={{ scale: 1.05 }}>
      {object[1]}
    </motion.a>
    </Fragment>
  )}
    </div>

              </div>
      </div>

      <div className="mb-5 grid text-center lg:mb-0">Made by hansnnn</div>
    </main>
  )
}
