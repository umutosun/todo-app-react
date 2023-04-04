import React, { useState, useEffect } from "react";

function Footer({ contacts, setContacts, status, setStatus }) {
  const [activeSize, setActiveSize] = useState(0);

  const activeButton = () => {
    const array = contacts.filter((item) => item.complete);
    setContacts(array);
  };
  const onClickAvailable = (e) => {
    setStatus(e.target.name);
  };

  const CompletedList = (e) => {};
  useEffect(() => {
    setActiveSize(0);
    contacts.map((item) => {
      if (item.complete) {
        setActiveSize((n) => n + 1);
      }
    });
  }, [contacts]);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeSize}</strong> items left
      </span>
      {contacts.length > 0 && (
        <ul className="filters">
          <li>
            <a
              href="#/"
              name="All"
              className={status === "All" ? "selected" : ""}
              onClick={onClickAvailable}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#/"
              name="Active"
              className={status === "Active" ? "selected" : ""}
              onClick={onClickAvailable}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/"
              name="Completed"
              className={status === "Completed" ? "selected" : ""}
              onClick={onClickAvailable}
            >
              Completed
            </a>
          </li>
        </ul>
      )}

      <button className="clear-completed" onClick={activeButton}>
        Clear completed
      </button>
      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </footer>
  );
}
export default Footer;
