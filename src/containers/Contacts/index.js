import { useState } from "react";
import Footer from "../../components/Footer";
import List from "../../components/List";
import Header from "../../components/Header";
const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [status, setStatus] = useState("All");
  console.log(contacts);
  return (
    <div>
      <Header setContacts={setContacts} contacts={contacts} />
      <List contacts={contacts} setContacts={setContacts} status={status} />
      <Footer
        contacts={contacts}
        setContacts={setContacts}
        status={status}
        setStatus={setStatus}
      />
    </div>
  );
};

export default Contacts;
