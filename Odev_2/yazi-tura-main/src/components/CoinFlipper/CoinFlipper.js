import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,

      // Sırasıyla; tur sayısını, tura ve yazı gelme sayılarını tutmak için değişkenler oluşturuldu.
      countRound: 0,
      countHeads: 0,
      countTails: 0
    };
  }
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true });
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);

    // "At" butonu her tıklandığında tur sayısı 1 artacak:
    this.setState({ countRound: this.state.countRound + 1 })

    // Buton her tıklandığında random olarak 0 veya 1 sayısının üretilip, elde edilen değerin tutulacağı değişken oluşturuldu:
    let randomNumber = Math.floor(Math.random() * 2);

    // 0 değeri tura, 1 değeri yazıyı temsil edecek şekilde, her atış sonucunda ilgili değişken değeri güncellenecek:
    if (randomNumber === 0) {
      this.setState({ side: "tura", countHeads: this.state.countHeads + 1 });
    } else {
      this.setState({ side: "yazi", countTails: this.state.countTails + 1 });
    }
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.countRound} </strong>
          atışta;
          <strong> {this.state.countHeads} </strong>adet tura,
          <strong> {this.state.countTails} </strong>
          adet yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
