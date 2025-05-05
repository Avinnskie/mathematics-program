document.getElementById("aritmatikaForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Ambil input dari form
    const x1 = parseInt(document.getElementById("x1").value);
    const u1 = parseFloat(document.getElementById("u1").value);
    const x2 = parseInt(document.getElementById("x2").value);
    const u2 = parseFloat(document.getElementById("u2").value);
    const n = parseInt(document.getElementById("n").value);

    // Hitung b (beda) dan a (suku pertama)
    const b = (u2 - u1) / (x2 - x1);
    const a = u1 - (x1 - 1) * b;

    // Hitung Un dan Sn
    const un = a + (n - 1) * b;
    const sn = (n / 2) * (2 * a + (n - 1) * b);

    // Tampilkan hasil
    document.getElementById("resultA").innerText = `Suku pertama (a) = ${a}`;
    document.getElementById("resultB").innerText = `Beda (b) = ${b}`;
    document.getElementById("resultUn").innerText = `Suku ke-${n} (Un) = ${un}`;
    document.getElementById("resultSn").innerText = `Jumlah ${n} suku pertama (Sn) = ${sn}`;

    // Langkah-langkah penyelesaian
    const steps = `
      <p><strong>Langkah 1:</strong> Hitung beda (b)</p>
      <p>b = (U₂ - U₁) / (x₂ - x₁) = (${u2} - ${u1}) / (${x2} - ${x1}) = ${b}</p>

      <p><strong>Langkah 2:</strong> Hitung suku pertama (a)</p>
      <p>a = U₁ - (x₁ - 1) × b = ${u1} - (${x1} - 1) × ${b} = ${a}</p>

      <p><strong>Langkah 3:</strong> Hitung suku ke-${n} (Un)</p>
      <p>Un = a + (n - 1) × b = ${a} + (${n} - 1) × ${b} = ${un}</p>

      <p><strong>Langkah 4:</strong> Hitung jumlah ${n} suku pertama (Sn)</p>
      <p>Sn = n / 2 × (2a + (n - 1) × b) = ${n} / 2 × (2×${a} + (${n} - 1)×${b}) = ${sn}</p>
    `;

    document.getElementById("steps").innerHTML = steps;
    document.getElementById("output").classList.remove("hidden");
  });
