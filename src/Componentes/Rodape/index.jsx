import styles from './Rodape.module.css'

import { RiRegisteredLine } from "react-icons/ri";

const Rodape = () => {
  return (
    <footer className={styles.rodape}>
      <RiRegisteredLine/>
      Desenvolvido por Alura
    </footer>
  )
}

export default Rodape