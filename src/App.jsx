import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="Parentbox">
      <div className="Foto">
        <img src="haha.jpg" />
      </div>
      <div className="Deskripsi">
        <p className="Cate">honda</p>
        <h1 className="Title">CBR 1000RR</h1>
        <p className="Price">IDR 1.000.000.000.000.000.000</p>
        <p className="Info">
          Honda CBR1000RR, dikenal juga sebagai Fireblade, adalah sebuah sepeda
          motor sport yang memiliki mesin 4-silinder segaris berkapasitas 999 cc
          yang diproduksi oleh Honda sejak tahun 2004 sebagai generasi ketujuh
          dari seri Fireblade yang dimulai dari CBR900RR sejak tahun 1992
        </p>
        <b>COLOR BIKE</b>
        <div className="color">
          <button className="black"></button>
          <button className="white"></button>
          <button className="red"></button>
          <button className="blue"></button>
        </div>
        <button className="tombol">masukkan keranjang</button>
        <button className="tombol2">beli sekarang</button>
      </div>
    </div>
  );
}

export default App;
