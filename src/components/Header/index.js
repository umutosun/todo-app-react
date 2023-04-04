import { useState } from "react";

function Header({ setContacts, contacts }) {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    setContacts((prev) => [
      ...prev,
      { complete: true, listElement: inputValue },
    ]);
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>

      <div className="main">
        <input className="toggle-all" type="checkbox" />
        <label
          htmlFor="toggle-all"
          onClick={() => {
            const allFalse = contacts.every((item) => !item.complete);
            const newContacts = contacts.map((item) => ({
              ...item,
              complete: allFalse,
            }));
            setContacts(newContacts);
          }}
        ></label>
      </div>
    </header>
  );
}

export default Header;
