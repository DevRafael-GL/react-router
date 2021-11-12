import React from "react";
import styles from "./Contato.module.css";
import foto from "../img/contato.jpg";
import { Head } from "./Head";

export const Contato = () => {
  return (
    <section className={styles.contato + " animeLeft"}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Contato</h1>
        <ul className={styles.dados}>
          <li>rafaelgonsalveslima21@gmail.com</li>
          <li>99999-9999</li>
          <li>Rua Logo Ali, 999</li>
        </ul>
      </div>
    </section>
  );
};
