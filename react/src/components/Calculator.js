function Calculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState(null);

    const calculate = () => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        if (!isNaN(a) && !isNaN(b)) {
            setResult(a + b);
        }
    };

    return (
        <div>
            <h2>Calculator</h2>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder="Szám 1"
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder="Szám 2"
            />
            <button onClick={calculate}>Összead</button>
            {result !== null && <p>Eredmény: {result}</p>}
        </div>
    );
}
``` 

Ebben a komponensben két bemeneti mező van, melyek az első és második számot várják. A calculate függvény kiszámolja az összeget, ha mindkét érték szám, majd a result állapotot frissíti, amely megjeleníti az eredményt.// filepath: c:\Users\Dell Latitude E5470\webprogi\my-multi-page-website\react\App.js
function Calculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState(null);

    const calculate = () => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        if (!isNaN(a) && !isNaN(b)) {
            setResult(a + b);
        }
    };

    return (
        <div>
            <h2>Calculator</h2>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder="Szám 1"
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder="Szám 2"
            />
            <button onClick={calculate}>Összead</button>
            {result !== null && <p>Eredmény: {result}</p>}
        </div>
    );
}
``` 

