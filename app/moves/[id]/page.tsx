import PocketBase from "pocketbase";

async function getMove(moveId: string) {
  const db = new PocketBase("http://127.0.0.1:8090");
  const record = await db.collection("moves").getOne(moveId);
  return record;
}

export default async function MovePage({ params }: any) {
  const move = await getMove(params.id);
  return (
    <>
      <h1 className="text-2xl">Move - {move.name}</h1>
      <div>
        <p>{move.description}</p>
        <p>Id: {move.id}</p>
      </div>
    </>
  );
}
