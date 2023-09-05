let cotizaciones = document.getElementById("cotizaciones")

const pedirValores = async() => {
    try{
        const res_usd = await fetch("https://v6.exchangerate-api.com/v6/a713bfd46e59638c3a057e1c/latest/USD");
        const data_usd = await res_usd.json()
        const res_eur = await fetch("https://v6.exchangerate-api.com/v6/a713bfd46e59638c3a057e1c/latest/EUR");
        const data_eur = await res_eur.json()
        const res_brl = await fetch("https://v6.exchangerate-api.com/v6/a713bfd46e59638c3a057e1c/latest/BRL");
        const data_brl = await res_brl.json()

        const euroBlue = Math.round(data_eur.conversion_rates.ARS * 1.02 + data_eur.conversion_rates.ARS)
        const dolarBlue = Math.round(data_usd.conversion_rates.ARS * 1.08 + data_usd.conversion_rates.ARS)
        const realBlue = Math.round(data_brl.conversion_rates.ARS * 0.37 + data_brl.conversion_rates.ARS)

        const div = document.createElement("div")
        div.innerHTML = `<p>Dolar ${dolarBlue}</p>
        <p>Euro ${euroBlue}</p>
        <p>Real ${realBlue}</p>`

        cotizaciones.append(div)

    }catch(error){
        console.log(error);
    }
}

pedirValores()