// Promiseチェーン
fetch('URL')
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });

// async/await
const fn = async () => {
    try {
        const response = await fetch('URL');
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

