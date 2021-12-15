/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
 function showDownload(result) {
    console.log("Download selesai");
    console.log("Hasil Download: " + result);
  }
  
  /**
   * Fungsi untuk download file
   * @param {function} callback - Function callback show
   */
  function download() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const result = "windows-10.exe";
            resolve(result);
          }, 3000);
    })
  }
  
  async function main() {
      const hasil = await download();
      showDownload(hasil);
  }

  main();
  
  /**
   * TODO:
   * - Refactor callback ke Promise atau Async Await
   * - Refactor function ke ES6 Arrow Function
   * - Refactor string ke ES6 Template Literals
   */