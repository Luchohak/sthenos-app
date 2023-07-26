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
      <h1 className="text-xl text-slate-700">New Move: </h1>
      <form onSubmit={createMove} >
        <div>
          <label htmlFor="name" />{" "}
          <input
            id="name"
            className="rounded my-2 p-2 bg-slate-200 text-slate-700"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description" />
          <input
            id="description"
            className="rounded p-2 bg-slate-200 text-slate-700"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <Button type={"submit"} label={"Create"} />
      </form>
    </div>
  );
}
