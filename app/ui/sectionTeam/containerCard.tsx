interface CardTeamProps {
  title: string;
  children: React.ReactElement;
  takeTeam: (arg: string) => void
}

export default function ContainerCard(prop: CardTeamProps) {

  function handleClick() {
    prop.takeTeam(prop.title)
  }

  return (
    <div className="flex justify-center items-center flex-col gap-12">
      <h2 className="bg-linha-inferior text-3xl font-medium">{prop.title}</h2>
      <div onClick={handleClick}>
      {prop.children}
      </div>
    </div>
  );
}
