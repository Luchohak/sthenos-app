interface MoveDetailProps {
  id: string;
  name: string;
  description: string;
}

const MoveDetailPage: React.FC<MoveDetailProps> = ({
  id,
  name,
  description,
}) => {
  return (
    <>
      <h2 className="text-2xl">Move - {name}</h2>
      <div>
        <p>{description}</p>
        <p>Id: {id}</p>
      </div>
    </>
  );
};

export default MoveDetailPage;
