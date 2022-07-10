import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("Bella");
  const [isLoading, setIsLoading] = useState(false);
  const history = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const blog = { title, text, author };
    setIsLoading(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New blog is added");
      setIsLoading(false);
      history("/");
    });
  }

  return (
    <div className="create">
      <h2>Create a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        <label>Blog text:</label>
        <textarea
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Bella">Bella</option>
          <option value="Bill">Bill</option>
        </select>
        {!isLoading && <button>Add blog</button>}
        {isLoading && <button disabled>Adding blog...</button>}
        <p>{title}</p>
        <p>{text}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
