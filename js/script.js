{
    const calculateResult = (amount, inputCurrency, outputCurrency) => {
        const rateEur = 4.6804;
        const rateUSd = 4.4001;
        const rateEurUsd = 1.0637;

        switch (inputCurrency) {
            case "PLN":
                if (outputCurrency === "PLN")
                    return amount * 1;
                else if (outputCurrency === "EUR")
                    return amount / rateEur;
                else if (outputCurrency === "USD")
                    return amount / rateUSd;

            case "EUR":
                if (outputCurrency === "PLN")
                    return amount * rateEur;
                else if (outputCurrency === "EUR")
                    return amount / 1;
                else if (outputCurrency === "USD")
                    return amount * rateEurUsd;

            case "USD":
                if (outputCurrency === "PLN")
                    return amount * rateUSd;
                else if (outputCurrency === "EUR")
                    return amount / rateEurUsd;
                else if (outputCurrency === "USD")
                    return amount / 1;

            default:
                result = "Upewnij się, że prawidłowo wypełniłeś pierwsze pole";
        }

    };

    const updateResultText = (amount, result, inputCurrency, outputCurrency) => {
        const resultElement = document.querySelector(".js-result");

        resultElement.innerHTML = `${amount.toFixed(2)} ${inputCurrency} = <strong>${result.toFixed(2)} ${outputCurrency}</strong>`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const inputElement = document.querySelector(".js-input");
        const outputElement = document.querySelector(".js-output");

        const amount = +amountElement.value;
        const inputCurrency = inputElement.value;
        const outputCurrency = outputElement.value;
        const result = calculateResult(amount, inputCurrency, outputCurrency);

        updateResultText(amount, result, inputCurrency, outputCurrency);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    }

    init();
}