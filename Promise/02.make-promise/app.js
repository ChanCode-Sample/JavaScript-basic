// Promiseを返す関数を自作
const promiseFn = () => {
    return new Promise((resolve, reject) => {
        try {
            // throw new Error();
            resolve('成功');
        } catch {
            reject('失敗');
        }
    });
};

const fn = async () => {
    try {
        const message = await promiseFn();
        console.log(message); // 成功
    } catch (error) {
        console.log(error); // 失敗
    }
};
fn();


// ファイル読み込み（非同期処理をPromise化）
const readFile = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.addEventListener('load', (event) => { resolve(event.target.result) });
        fileReader.addEventListener('error', (event) => { reject('failed to read file') });
        fileReader.readAsDataURL(file);
    });
};

