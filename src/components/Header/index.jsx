import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./styles.module.scss";

export const Header = ({ cartList, setIsOpen }) => {
   const [value, setValue] = useState("");

   return (
      <div className={styles.colorHeader}>
         <header className={styles.header}>
            <img src={Logo} alt="Logo Kenzie Burguer" />
            <div className={styles.container}>
               <button onClick={() => setIsOpen(true)} className={styles.cartButton}>
                  <MdShoppingCart size={25} />
                  <span className="caption">{cartList.length}</span>
               </button>
         
              
               <form className={styles.searchForm}>
                  <input
                     type="text"
                     value={value}
                     onChange={(e) => setValue(e.target.value)}
                  />
                  <button type="submit">
                     <MdSearch size={20} />
                  </button>
               </form>
            </div>
         </header>
      </div>
   );
};
