{
    const welcome = () => {
        console.log("Hello to all developers");
    }
    welcome();
}

{
    const calculateResult = (input, currency) => {
        const eurRate = 4.71;
        const usdRate = 4.49;
        const gbpRate = 5.48;

        switch (currency) {
            case "EUR":
                return input / eurRate;
            case "USD":
                return input / usdRate;
            case "GBP":
                return input / gbpRate;
        }
    };
    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", (event) => {
            event.preventDefault();

            const inputElement = document.querySelector(".js-formMoney");
            const currencyElement = document.querySelector(".js-formCurrency");
            const resultElement = document.querySelector(".js-formResult");

            const input = +inputElement.value
            const currency = currencyElement.value;
            let result = calculateResult(input, currency);

            resultElement.innerText = result.toFixed(2)
            resultElement.innerText = `${inputElement.value} PLN = ${result.toFixed(2)} ${currency}`;
        });
        formElement.addEventListener("reset", () => {
            const resultElement = document.querySelector(".js-formResult");

            resultElement.innerText = "N/A";
        });
    };

    init();
};