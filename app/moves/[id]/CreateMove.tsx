"use client";

import { useState } from "react";
import PocketBase from "pocketbase";
import Button from "@/app/components/UI/Button";

export default function CreateMove() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const pb = new PocketBase("http://127.0.0.1:8090");

  const createMove = async () => {
    try {
      const record = await pb.collection("moves").create({ name, description });
      setName("");
      setDescription("");
      return record;
    } catch (error) {
      return { error: error };
    }
  };

  return (
    <div className="mt-12">
      <form onSubmit={createMove} >
        <div>
          <input
            id="name"
            className="rounded my-3 p-2 bg-slate-200 text-slate-700"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            id="description"
            className="rounded p-2 my-3 bg-slate-200 text-slate-700"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <Button className=" my-6 bg-slate-600 text-slate-50 hover:bg-green-700" type={"submit"} label={"new move"} />
      </form>
    </div>
  );
}
