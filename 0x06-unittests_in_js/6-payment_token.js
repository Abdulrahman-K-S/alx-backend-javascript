const getPaymentTokenFromAPI = (success) => {
    const paymentPromise = new Promise((resolve, _), () => {
        if (success) {
            resolve({
                data: 'Successful response from the API'
            });
        }
    });
    return paymentPromise;
}

module.exports = getPaymentTokenFromAPI;
