const formOrder = document.getElementById("formOrder");
if (formOrder) {
  formOrder.addEventListener("submit", function (e) {
    const nama = document.getElementById("nama").value;
    const wa = document.getElementById("wa").value;
    const produk = document.getElementById("produk").value;
    const metode = document.getElementById("metode").value;

    if (!nama || !wa || !produk || !metode) {
      alert("Semua data wajib diisi!");
      e.preventDefault();
    } else {
      alert(
        "Pesanan berhasil dikirim! Kami akan menghubungi Anda melalui WhatsApp.",
      );
    }
  });
}
