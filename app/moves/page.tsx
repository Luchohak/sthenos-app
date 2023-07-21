import Link from "next/link";
import PocketBase from "pocketbase";
import CreateMove from "./[id]/CreateMove";

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

export default async function MovesPage() {
  const moves = await getMoves();
  return (
    <section>
      <h1 className="text-2xl">Moves</h1>
      <div className="grid grid-cols-4 gap-5">
        {moves.map((move) => (
          <Move key={move.id} move={move} />
        ))}
      </div>

      <CreateMove />
    </section>
  );
}

function Move({ move }: any) {
  const { id, name, description } = move || {};

  return (
    <Link
      href={`/moves/${id}`}
      className="rounded py-4 px-3 bg-slate-500 text-slate-200  hover:bg-slate-200 hover:text-slate-500"
    >
      <div>
        <h2 className="text-lg">{move.name}</h2>
        <p className="text-md">{move.description}</p>
      </div>
    </Link>
  );
}
