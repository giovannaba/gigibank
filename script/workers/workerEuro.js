addEventListener("message", event => {
    conectaAPI()
    setInterval(() => conectaAPI(),15000)
})

async function conectaAPI() {
    const conecta = await fetch("http://economia.awesomeapi.com.br/json/last/EUR-BRL");
    const conectaTraduzido = await conecta.json();
    postMessage(conectaTraduzido.EURBRL)
  }