let cotizaciones = document.getElementById("container-cotizaciones")

const pedirValores = async() => {
    try{
        const res_usd = await fetch("https://v6.exchangerate-api.com/v6/a713bfd46e59638c3a057e1c/latest/USD");
        const data_usd = await res_usd.json()
        const res_eur = await fetch("https://v6.exchangerate-api.com/v6/a713bfd46e59638c3a057e1c/latest/EUR");
        const data_eur = await res_eur.json()
        const res_brl = await fetch("https://v6.exchangerate-api.com/v6/a713bfd46e59638c3a057e1c/latest/BRL");
        const data_brl = await res_brl.json()

        const euroBlueComp = Math.round(data_eur.conversion_rates.ARS * 1.02 + data_eur.conversion_rates.ARS)
        const dolarBlueComp = Math.round(data_usd.conversion_rates.ARS * 1.08 + data_usd.conversion_rates.ARS)
        const realBlueComp = Math.round(data_brl.conversion_rates.ARS * 0.37 + data_brl.conversion_rates.ARS)

        const euroBlueVen = Math.round(data_eur.conversion_rates.ARS * 0.96 + data_eur.conversion_rates.ARS)
        const dolarBlueVen = Math.round(data_usd.conversion_rates.ARS * 1.02 + data_usd.conversion_rates.ARS)
        const realBlueVen = Math.round(data_brl.conversion_rates.ARS * 0.31 + data_brl.conversion_rates.ARS)

        const div = document.createElement("div")
        div.innerHTML = `
        <div class="cotizaciones">
            <div class="card-cotizacion">
            <h1>DOLAR</h1>
                <div class="info-cotizaciones">
                    <div class="info-compra">
                        <p>${dolarBlueComp}</p>
                        <h3>COMPRA</h3>
                    </div>
                    <div class="info-venta">
                        <p>${dolarBlueVen}</p>
                        <h3>VENTA</h3>
                    </div>
                </div>
            </div>
            <div class="card-cotizacion">
            <h1>EURO</h1>
                <div class="info-cotizaciones">
                    <div class="info-compra">
                        <p>${euroBlueComp}</p>
                        <h3>COMPRA</h3>
                    </div>
                    <div class="info-venta">
                        <p>${euroBlueVen}</p>
                        <h3>VENTA</h3>
                    </div>
                </div>
            </div>
            <div class="card-cotizacion">
            <h1>REAL</h1>
                <div class="info-cotizaciones">
                    <div class="info-compra">
                        <p>${realBlueComp}</p>
                        <h3>COMPRA</h3>
                    </div>
                    <div class="info-venta">
                        <p>${realBlueVen}</p>
                        <h3>VENTA</h3>
                    </div>
                </div>
            </div>
        </div>`

        cotizaciones.append(div)

    }catch(error){
        console.log(error);
    }
}

pedirValores()