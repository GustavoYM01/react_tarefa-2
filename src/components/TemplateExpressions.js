const TemplateExpressions = () => {
    const name = "Tester";
    const data = {
        age: 21,
        job: "programmer"
    }

    return (
        <div>
            <h1>Olá {name}</h1>
            <p>Você atua como: {data.job}</p>
            <p>JS: {'4+4='+(4+4)}</p>
        </div>
    )
}

export default TemplateExpressions;