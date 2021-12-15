function download() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            const status = false;
    
            if(status) {
                resolve("Download berhasil");
            }
            else {
                reject("Download gagal");
            }
        }, 3000);
    });
}

download()
.then(function(result) {
    console.log(result);
})
.catch(function(err) {
    console.log(err);
})