import Gridl from "@/components/iwc";
import BigIcon from "@/components/bigicon";
import { motion } from "framer-motion";

import { Fragment } from "react";

import Posts from "@/components/posts";
import { postsQuery } from "@/sanity/lib/queries";
import Projects from "@/components/projects"

export default function Home() {
  return (
    <>
      <BigIcon />
      <div className="flex items-center flex-col m-5 gap-4">
        <div className="flex items-center flex-col m-3 gap-2">
          <span className="sm:text-2xl lg:text-4xl font-bold">My blog</span>
          <Posts queries={postsQuery} />
        </div>
        <div className="flex items-center flex-col m-3 gap-2">
          <span className="font-bold sm:text-xl md:text-4xl lg:text-6xl">My projects</span>
          <Gridl title="Teolang" description="A programming language written in Rust. It was designed mainly for kids and teachers for its simplicity." imagesrc="https://cdn.discordapp.com/attachments/1108288900327276666/1128697735227392081/Teolang_Logo.png" url="https://github.com/bencinn/teo" />
          <Gridl title="School Parking Project" description="(Contributed / Co-authored) The project that manages the parking spaces in schools written in Svelte + Supabase" imagesrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDIQIVEBgprClGHZpi_O4LGK_ArSq4XBwkzYaNn557&s" url="https://github.com/ItsPungpond98/School-Parking-Project" />
          <Gridl title="Node-Server" description="(My first project!) A template for Node.js server with Tailwind CSS support." imagesrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDIQIVEBgprClGHZpi_O4LGK_ArSq4XBwkzYaNn557&s" url="https://bencinn/Node-Server" />
        </div>
        <div className="flex items-center flex-col m-5 gap-5">
          <span className="font-bold text-4xl">Contact</span>
          <Projects />
        </div>
      </div>
    </>
  );
}
