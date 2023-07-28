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
      <div className="flex items-center flex-col m-5 gap-2">
        <div>
          <span>My blog</span>
          <Posts queries={postsQuery} />
        </div>
        <span className="font-bold text-4xl">My projects</span>
        <div className="flex items-center flex-col m-3 gap-2">
          <span className="font-bold text-4xl">My projects</span>
          <Gridl title="Teolang" description="A programming language written in Rust" imagesrc="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" url="https://github.com/bencinn/teo" />
          <Gridl title="School Parking Project" description="(Contributed) The project that manages the parking spaces in schools written in Svelte + Supabase" imagesrc="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" url="https://github.com/ItsPungpond98/School-Parking-Project" />
          <Gridl title="Node-Server" description="(My first project!) A template for Node.js server" imagesrc="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" url="https://bencinn/Node-Server" />
        </div>
        <div className="flex items-center flex-col m-5 gap-5">
          <span className="font-bold text-4xl">Contact</span>
          <Projects />
        </div>
      </div>
    </>
  );
}
