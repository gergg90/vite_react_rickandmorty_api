function Character({char}) {
  return (
    <div className="text-center  p-5">
      <h3>{char.name}</h3>
      <img className="img-fluid rounded-pill" src={char.image} alt={char.name} />
      <p>{char.origin.name}</p>
    </div>
  );
}

export default Character;
