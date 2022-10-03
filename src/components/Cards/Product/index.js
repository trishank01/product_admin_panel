import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import FromInput from "../FormInput";


const Product = () => {
  //const items = JSON.parse(localStorage.getItem("productsPage"))["products"] || []

  const DataFromlocal = () => {
    const items = JSON.parse(localStorage.getItem("products"))
    if (items) {
      console.log("items",items);
      return items;
    } else {
      return [];
    }
  };

  const [showData , setShowData] = useState(DataFromlocal());
  const [showForm, setShowForm] = useState(false);


  const inputs = [
    {
      id: 1,
      name: "productname",
      errorMessage:
        "Usernam should be 3-16 charactres and should not include any special character",
      type: "text",
      placeholder: "Product Name",
      label: "Product Name",
      required: true,
    },
    {
      id: 2,
      name: "description",
      errorMessage: "description should be more that 20 charactres",
      type: "text",
      placeholder: "Description",
      label: "Description",
      required: true,
    },
    {
      id: 3,
      name: "unitsold",
      type: "text",
      placeholder: "Unit Sold",
      label: "Unit Sold",
      required: true,
    },
    {
      id: 4,
      name: "instock",
      type: "text",
      placeholder: "In Stock",
      label: "In Stock",
      required: true,
    },

    {
      id: 5,
      name: "expiredate",
      type: "date",
      placeholder: "Expire Date",
      label: "Expire Date",
      required: true,
    },
  ];

  
  
  const [initialValues, setInitialValues] = useState({
    productname: "",
    description: "",
    unitsold: "",
    instock: "",
    expiredate: "",
  });

  const getDataFromlocal = () => {
    const data = JSON.parse(localStorage.getItem("formValues"));
    if (data) {
      return data;
    } else {
      return [];
    }
  };
  const [formValues, setFormValues] = useState(getDataFromlocal());



  const submitForm = (e) => {
    e.preventDefault() 
    setFormValues((prevFormValues) => [...prevFormValues, initialValues]);
    setShowForm()
  };

   
  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(formValues));
  }, [formValues]);


  const productAddHandle = () => {
    setShowForm(!showForm);
  };


  const onChange = (e) => {
    setInitialValues({ ...initialValues, [e.target.name]: e.target.value });
  };

  const deleteBook = (stock) => {
    const filterdBooks = showData.filter((element, idx) => {
      return element.stock!== stock;
    });
    setShowData(filterdBooks);
    localStorage.setItem("products" , JSON.stringify(filterdBooks) ) 
   
    
  };

  console.log("showData",showData);



  return (
    <>
      {!showForm && (
        <div className={styles.line_color}>
          <h2 className={styles.heading}>Orders List</h2>
          <table className={styles.table_product}>
            <tr>
              <th></th>
              <th>PRODUCT NAME</th>
              <th>UNIT SOLD</th>
              <th>IN STOCK</th>
              <th>EXPIRE DATE</th>
              <th></th>
            </tr>
            {showData.map((item, index) => {
              return (
                <tr key={index + item.unitSold}>
                  <td className={styles.checkbox}>
                    <input type="checkbox" />
                  </td>
                  <td>{`Lorem Ipsum ${item.name}`}</td>
                  <td>{item.unitSold}</td>
                  <td>{item.stock}</td>
                  <td>{item.expireDate}</td>
                  <td>
                    <div className={styles.delete_wrapper} onClick={() => deleteBook(item.stock)}>
                      <RiDeleteBin5Line className={styles.delete} />
                    </div>
                  </td>
                </tr>
              );
            })}
              {formValues != null && formValues.map((item, index) => {
              return (
                <tr key={index}>
                  <td className={styles.checkbox}>
                    <input type="checkbox" />
                  </td>
                  <td>{item.productname}</td>
                  <td>{item.unitsold}</td>
                  <td>{item.instock}</td>
                  <td>{item.expiredate}</td>
                  <td>
                    <div className={styles.delete_wrapper} >
                      <RiDeleteBin5Line className={styles.delete} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </table>
          <button className={styles.btn_product} onClick={productAddHandle}>
            ADD NEW PRODUCT
          </button>
          <button className={styles.btn_delete}>
            DELETE SELECTED PRODUCTS
          </button>
        </div>
      )}
      {showForm && (
        <div className={styles.line_color}>
          <h2 className={styles.heading}>Add new Product</h2>
          <div className={styles.form_wrapper}>
            <form  onSubmit={submitForm}>
              {inputs.map((input) => (
                <FromInput
                  key={input.id}
                  {...input}
                  value={initialValues[input.name]}
                  onChange={onChange}
                />
              ))}
              <button type="submit" className={styles.btn_product} >
                PRODUCT ADDED
              </button>
              </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
