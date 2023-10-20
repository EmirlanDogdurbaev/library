import axios from "axios";
import React from "react";
import { useState } from "react";

export default function BookForm() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState('');
  const [category, setCategory] = useState(1);
  const [quantity, setQuantity] = useState(0);
  const token = localStorage.getItem("access")
  const headers = {
    'Authorization': `Bearer ${token}` // Replace 'Bearer' with the appropriate authorization type
  };
  function submit() {
    axios.post("http://192.168.88.71:8000/api/v1/create/book/", {
      author,
      title,
      description,
      image,
      category,
      quantity,
    },
    {headers})
    .then((res)=>{
      console.log(res.data);
    });
  }

  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center"
    }}>
      <label>Author:
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </label>

      <br />

      <label>Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <br />

      <label>Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <br />

      <label>Image:
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </label>

      <br />

      <label>Category:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>

      <br />

      <label>Quantity:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
        />
      </label>


      <button onClick={submit}>Send</button>
    </div>
  );
}
