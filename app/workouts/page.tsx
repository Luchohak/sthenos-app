"use client";
import PocketBase from "pocketbase";
import { Move } from "../moves/page";

import { useState, useEffect } from "react";

async function getWorkouts() {
  const db = new PocketBase("http://127.0.0.1:8090");
  const data = await db.collection("workouts").getList();

  return data?.items as any[];
}

const WorkoutsPage = () => {
  const [workoutsList, setWorkoutsList] = useState<any[]>([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const workoutsData = await getWorkouts();
        setWorkoutsList(workoutsData);
      } catch (error) {
        console.log("Error fetching workouts: ", error);
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <section>
      <h1 className="text-2xl">Workouts</h1>
      <div className="grid grid-cols-4 gap-5">
        {workoutsList.map((workout: Workout) => (
          <Workout key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
};

export default WorkoutsPage;

interface Workout {
  id: string;
  name: string;
  description: string;
  workoutMoves: Move[];
}

function Workout({ workout, onClick }: any) {
  const { name, description, workoutMoves } = workout || {};
  console.log('workout moves: ', workoutMoves)

  return (
    <div
      className="rounded py-4 px-3 bg-slate-500 text-slate-200  hover:bg-slate-200 hover:text-slate-500"
      onClick={onClick}
    >
      <div>
        <h2 className="text-lg">{name}</h2>
        <p className="text-md">{description}</p>
        <ol>
          {workoutMoves.map((move: string) => (
            <li>{move}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
