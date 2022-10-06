import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { RiDeleteBin5Line } from "react-icons/ri";

const Product = () => {
  const getDataFromlocal = () => {
    const data = JSON.parse(localStorage.getItem("products"));
    if (data) {
      return data;
    } else {
      return [];
    }
  };

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [stock, setStock] = useState("");
  const [unitSold, setUnitSold] = useState("");
  const [books, setBooks] = useState(getDataFromlocal());
  const [showForm, setShowForm] = useState(false);
  const [checkbox, setCheckBox] = useState([]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(books));
  }, [books]);

  const handleAddBookSubmit = (e) => {
    e.preventDefault();
    // creating an obj
    let book = {
      name,
      description,
      expireDate,
      stock,
      unitSold,
    };
    setBooks([...books, book]);
    setName("");
    setDescription("");
    setExpireDate("");
    setStock("");
    setUnitSold("");
    setShowForm(!showForm);
  };

  const NewProductHandler = () => {
    setShowForm(!showForm);
  };

  const deleteBook = (index) => {
    const filterdBooks = books.filter((element, idx) => {
      return idx !== index;
    });
    setBooks(filterdBooks);
  };

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckBox([...checkbox, value]);
    } else {
      setCheckBox(checkbox.filter((item) => item !== value));
    }
  };

  const SelectedDelete = () => {
    const selectedCurrent = books.filter(
      (item) => !checkbox.includes(item.name)
    );
    setCheckBox([]);
    setBooks(selectedCurrent);
    console.log("selectedCurrent", selectedCurrent);
  };

  const formChangeHandler = () => {
    console.log("clicked");
    setShowForm(!showForm);
  };

  console.log("checkbox", checkbox);
  return (
    <>
      {showForm && (
        <div className={styles.line_color}>
          <h2 className={styles.heading}>Add new Product</h2>
          <div className={styles.form_wrapper}>
            <form onSubmit={handleAddBookSubmit}>
              <div className={styles.formInput}>
                <label>Enter Product name</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Enter Product name"
                />
                <br />
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  placeholder="please Provide description"
                />
                <br />
                <label>please enter Expire date</label>
                <input
                  type="date"
                  className="form-control"
                  required
                  onChange={(e) => setExpireDate(e.target.value)}
                  value={expireDate}
                  placeholder="please enter Expire date"
                />
                <br />
                <label>Availble stock</label>
                <input
                  type="number"
                  className="form-control"
                  required
                  onChange={(e) => setStock(e.target.value)}
                  value={stock}
                  placeholder="Availble stock"
                />
                <br />
                <label>Unit sold</label>
                <input
                  type="number"
                  className="form-control"
                  required
                  onChange={(e) => setUnitSold(e.target.value)}
                  value={unitSold}
                  placeholder="Unit Sold"
                />
                <br></br>
                <button type="submit" className={styles.btn_product}>
                  PRODUCT ADDED
                </button>
                <button
                  type="submit"
                  className={styles.cancle}
                  onClick={formChangeHandler}
                >
                  CANCEL
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {!showForm && (
        <div className={styles.line_color}>
          <h2 className={styles.heading}>Orders List</h2>
          <table className={styles.table_product}>
            <thead>
              <tr>
                <th></th>
                <th>PRODUCT NAME</th>
                <th>UNIT SOLD</th>
                <th>IN STOCK</th>
                <th>EXPIRE DATE</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {books.map((item, index) => {
                return (
                  <tr key={item.stock + index}>
                    <td className={styles.checkbox}>
                      <input
                        type="checkbox"
                        value={item.name}
                        onClick={handleChange}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.unitSold}</td>
                    <td>{item.stock}</td>
                    <td>{item.expireDate}</td>
                    <td>
                      <div
                        className={styles.delete_wrapper}
                        onClick={() => deleteBook(index)}
                      >
                        <RiDeleteBin5Line className={styles.delete} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button className={styles.btn_product} onClick={NewProductHandler}>
            ADD NEW PRODUCT
          </button>
          <button className={styles.btn_delete} onClick={SelectedDelete}>
            DELETE SELECTED PRODUCTS
          </button>
        </div>
      )}
    </>
  );
};

export default Product;
