"use client";

import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/config/store";
import { setIsOpen, updateItems } from "../redux/slices/selectItemSlice";
import styles from "./styles/Home.module.css";
import DialogBox from "@/components/DialogBox";
import { itemsArray } from "@/data/data";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { items, isOpen } = useAppSelector((state) => state.selectItem);

  useEffect(() => {
    dispatch(
      updateItems(
        itemsArray.slice(0, 3).map((item: { name: string }) => item.name)
      )
    );
    dispatch(setIsOpen(false));
  }, [dispatch]);

  const handleChangeChoice = () => {
    dispatch(setIsOpen(true));
  };

  const handleRemoveItem = (item: string) => {
    const updatedItems = items.filter((currentItem) => currentItem !== item);
    dispatch(updateItems(updatedItems));
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className="text-4xl font-bold">Selected Items</h1>
        <p className="mt-4 text-lg">
          You currently have {items.length} selected items.
        </p>
      </header>

      <section className={styles.content}>
        <div className={styles.itemsList}>
          {items.length > 0 ? (
            items.map((item, index) => (
              <div key={index} className={styles.card}>
                <span>{item}</span>
                <hr />
                <button onClick={() => handleRemoveItem(item)}>X</button>
              </div>
            ))
          ) : (
            <p className={styles.noItems}>No items selected yet.</p>
          )}
        </div>
      </section>

      <footer className={styles.footer}>
        <button onClick={handleChangeChoice} className={styles.footerButton}>
          Change My Choice
        </button>
      </footer>

      {isOpen && <DialogBox />}
    </div>
  );
};

export default Home;
