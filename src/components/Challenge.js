const Challenge = () => {
    const a = 30;
    const b = 12;

    const somar = () => {
        let resultado = a + b;
        console.log(resultado);
    }

  return (
    <div>
        <p>A: {a}</p>
        <p>B: {b}</p>
        <button onClick={somar}>Clique para somar</button>
    </div>
  );
};

export default Challenge;
