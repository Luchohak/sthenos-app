"use client";
import PocketBase from "pocketbase";
import CreateMove from "./[id]/CreateMove";
import Modal from "../components/UI/Modal";
import { useState, useEffect } from "react";
import Button from "../components/UI/Button";
import MoveDetailPage from "./[moveDetail]";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

async function getMoves() {
  const db = new PocketBase("http://127.0.0.1:8090");
  const data = await db.collection("moves").getList();

  return data?.items as any[];
}

const MovesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movesList, setMovesList] = useState<any[]>([]);
  const [selectedMove, setSelectedMove] = useState<any>(null);

  useEffect(() => {
    const fetchMoves = async () => {
      try {
        const movesData = await getMoves();
        setMovesList(movesData);
      } catch (error) {
        // Handle any errors that might occur during the data fetching process
        console.error("Error fetching moves:", error);
      }
    };

    fetchMoves();
  }, []);

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  const handleMoveClick = (move: any) => {
    setSelectedMove(move);
    console.log("selected move: ", move.name);
  };

  const handleMoveClose = () => {
    setSelectedMove(null);
  };

  return (
    <section className="flex text-center flex-col">
      <h1 className="text-2xl my-5">MOVES</h1>
      <div className="grid grid-cols-4 gap-5">
        {movesList.map((move) => (
          <Move
            key={move.id}
            move={move}
            onClick={() => handleMoveClick(move)}
          />
        ))}
      </div>
      <Button
        className="text-2xl bg-slate-200 hover:bg-slate-800 w-14 h-14 my-5"
        label="+"
        onClick={openModalHandler}
      ></Button>
      <Modal onClose={closeModalHandler} isOpen={isModalOpen}>
        <CreateMove />
      </Modal>

      {selectedMove && (
        <Modal isOpen={true} onClose={handleMoveClose}>
          <h2 className="text-2xl text-slate-900 pt-8">
            <MoveDetailPage 
              id={selectedMove.id}
              name={selectedMove.name}
              description={selectedMove.description}
            />
          </h2>
        </Modal>
      )}
    </section>
  );
};

export default MovesPage;

export interface Move {
  id: string;
  name: string;
  description: string;
}

function Move({ move, onClick }: any) {
  const { name, description } = move || {};

  return (
    <div
      className="rounded py-4 px-3 cursor-pointer bg-slate-600 text-slate-200  hover:bg-slate-200 hover:text-slate-600"
      onClick={onClick}
    >
      <div>
        <h1 className="text-lg font-bold">{name}</h1>
        <p className="text-md">{description}</p>
      </div>
    </div>
  );
}
