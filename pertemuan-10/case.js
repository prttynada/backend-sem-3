// function persiapan() {
//     console.log("Persiapan...");
// }

// function rebusAir() {
//     console.log("rebus air...");
// }

// function masak() {
//     console.log("masak..");
//     console.log("selesai...");
// }

// function main() {
//     setTimeout(() => {
//         persiapan();

//         setTimeout(() => {
//             rebusAir();

//             setTimeout(() => {
//                 masak();
//             }, 5000);
//         }, 7000);
//     }, 3000);
// }

// main();


//promise
function persiapan() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve("Persiapan...");
        }, 3000);
    })
}

function rebusAir() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve("Rebus air...");
        }, 7000);
    })
}

function masak() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve("Masak. Selesai");
        }, 5000);
    })
}

async function main() {
   console.log(await persiapan());
   console.log(await rebusAir());
   console.log(await masak());
}

main();