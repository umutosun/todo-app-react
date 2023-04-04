import React from "react";

const List = ({ contacts, status, setContacts }) => {
  console.log(contacts);
  const handleChange = (i) => {
    const newContacts = [...contacts];
    newContacts[i].complete = !newContacts[i].complete;
    setContacts(newContacts);
  };
  return (
    <section className="main">
      <ul className="todo-list">
        {contacts.map((item, i) => {
          if (status === "All") {
            return (
              <li className={item.complete ? "" : "completed"} key={i}>
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    checked={!item.complete}
                    onChange={() => {
                      const allArray = [...contacts];
                      allArray[i].complete = !allArray[i].complete;
                      setContacts(allArray);
                    }}
                  />
                  <label>{item.listElement}</label>
                  <button
                    className="destroy"
                    onClick={() => {
                      setContacts(
                        contacts.filter((value, index) => index !== i)
                      );
                    }}
                  ></button>
                </div>
              </li>
            );
          } else if (status === "Active") {
            if (item.complete) {
              return (
                <li key={i}>
                  <div className="view">
                    <input
                      className="toggle"
                      type="checkbox"
                      checked={!item.complete}
                      onChange={() => {
                        const activeArray = [...contacts];
                        activeArray[i].complete = !activeArray[i].complete;
                        setContacts(activeArray);
                      }}
                    />
                    <label>{item.listElement}</label>
                    <button
                      className="destroy"
                      onClick={() => {
                        setContacts(
                          contacts.filter((value, index) => index !== i)
                        );
                      }}
                    ></button>
                  </div>
                </li>
              );
            }
          } else if (status === "Completed") {
            if (!item.complete) {
              return (
                <li key={i} className={item.complete ? "" : "completed"}>
                  <div className="view">
                    <input
                      className="toggle"
                      type="checkbox"
                      checked={!item.complete}
                      onChange={() => {
                        const completedArray = [...contacts];
                        completedArray[i].complete =
                          !completedArray[i].complete;
                        setContacts(completedArray);
                      }}
                    />
                    <label>{item.listElement}</label>
                    <button
                      className="destroy"
                      onClick={() => {
                        setContacts(
                          contacts.filter((value, index) => index !== i)
                        );
                      }}
                    ></button>
                  </div>
                </li>
              );
            }
          }
        })}
      </ul>
    </section>
  );
};

export default List;
