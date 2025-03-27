"use client";

import React, { FC, useEffect, useState } from "react";
import { itemsArray } from "@/data/data";
import { useAppDispatch, useAppSelector } from "@/redux/config/store";
import { setIsOpen, updateItems } from "@/redux/slices/selectItemSlice";
import styles from "../app/styles/DialogBox.module.css";

const DialogBox: FC = () => {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filter, setFilter] = useState<string>("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [error, setError] = useState<string>(""); // Error message state

  const { items } = useAppSelector((state) => state.selectItem);

  useEffect(() => {
    setSelectedItems(items);
  }, [items]);

  const handleSaveSelection = () => {
    if (selectedItems.length === 0) {
      // Display error message if no item is selected
      setError("Please select at least one item.");
      return;
    }

    dispatch(updateItems(selectedItems));
    dispatch(setIsOpen(false));
    setError(""); // Clear error message if selection is valid
  };

  const handleCancel = () => {
    dispatch(setIsOpen(false));
    setError(""); // Clear error message on cancel
  };

  const handleCheckboxChange = (item: string) => {
    setSelectedItems(
      (prev) =>
        prev.includes(item)
          ? prev.filter((i) => i !== item) // Unselect item
          : [...prev, item] // Select item
    );
  };

  const filteredItems = itemsArray.filter((item, index) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      filter === "" ||
      (filter === "10" && index > 9) ||
      (filter === "100" && index > 99) ||
      (filter === "200" && index > 199);

    return matchesSearch && matchesFilter;
  });

  const isMaxSelected = selectedItems.length >= 3;

  return (
    <>
      {/* dialog box  */}
      <div className={styles.dialog}>
        {/* heading */}
        <div className={styles.dialogHeading}>
          <div>Select Items</div>
          <div>
            <button onClick={() => handleCancel()}>X</button>
          </div>
        </div>
        {/* filters */}
        <div className={styles.dialogUpper}>
          <div className={styles.filters}>
            <label>Search</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Search elements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className={styles.filters}>
            <label>Filter</label>
            <select
              className={styles.select}
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="">All</option>
              <option value="10">{">10"}</option>
              <option value="100">{">100"}</option>
              <option value="200">{">200"}</option>
            </select>
          </div>
        </div>

        {/*  error message  */}
        {error && <div className={styles.errorMessage}>{error}</div>}

        {/* elements list */}
        <div className={styles.itemsArray}>
          {filteredItems.length === 0 ? (
            <div className={styles.noData}>Search Data Not Available</div>
          ) : (
            filteredItems.map((item, index) => {
              const isItemSelected = selectedItems.includes(item.name);

              return (
                <div key={index} className={styles.item}>
                  <input
                    type="checkbox"
                    checked={isItemSelected}
                    onChange={() => {
                      if (!isMaxSelected || isItemSelected) {
                        handleCheckboxChange(item.name);
                      }
                    }}
                    className={
                      isMaxSelected && !isItemSelected
                        ? styles.disabledCheckbox
                        : ""
                    }
                    disabled={isMaxSelected && !isItemSelected}
                  />
                  <label>{item.name}</label>
                </div>
              );
            })
          )}
        </div>

        {/* buttons */}
        <div className={styles.btnDiv}>
          <button onClick={handleSaveSelection} className={styles.button}>
            Save
          </button>
          <button onClick={handleCancel} className={styles.cancelButton}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default DialogBox;
