import { useState, useEffect } from "react";

const intialFormValues = { listElement: "" };
function Header() {
  const [form, setForm] = useState(intialFormValues);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    setForm(intialFormValues);
  }, []);
  console.log(intialFormValues);
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={form.listElement}
          onChange={onChangeInput}
        />
      </form>
    </header>
  );
}

export default Header;
