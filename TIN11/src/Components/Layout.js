import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ValidationForm from "./ValidationForm";
export default class Layout extends React.Component {
  render() {
    var myArr = [
      "Aziz Tashpulatov",
      "Ikrom Ashuraliev",
      "Mumin Salomov",
      "Orif Bobohonov",
      "Ibrohim Safarov",
      "Aziz Boynazarov",
      "Bilol Timurov",
      "Grisha Yusupov",
      "Hamza Temurov",
      "Zafar Sharipov",
      "Manuchehr Tursunov",
      "Bahrom Shamsiev",
      "Farhod Burkhanov",
      "Bakhrom Kholmatov"
    ];
    return (
      <div>
        <section>
          <Header header="13-C Group" />
        </section>
        <div>
          {myArr.map(arr => (
            <li>{arr}</li>
          ))}
        </div>
        <section>
          <ValidationForm />
        </section>
        <div>
          <Footer footer={this.props.footer} />
        </div>
      </div>
    );
  }
}
