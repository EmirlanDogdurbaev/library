import axios from "axios";
import React from "react";
import { useState } from "react";

export default function CommentForm() {
  const [text, setText] = useState("");
  const [grade, setGrade] = useState(1);
  const token = localStorage.getItem("access")
  const headers = {
    'Authorization': `Bearer ${token}` // Replace 'Bearer' with the appropriate authorization type
  };
  function submit() {
    axios.post("http://192.168.88.71:8000/api/v1/create/review/", {
      author: 7,
      books: 10,
      text,
      grade
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
      <label htmlFor="text">Text</label>
      <input
        type="text"
        id="text"
        name="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />

      <label htmlFor="grade">Grade</label>
      <input
        type="number"
        id="grade"
        name="grade"
        onChange={(e) => setGrade(e.target.value)}
        value={grade}
      />


      <button onClick={submit}>Send</button>
    </div>
  );
}
