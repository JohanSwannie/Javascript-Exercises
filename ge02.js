const container = document.querySelector(".container");

let contacts = [];

const setLocalStorage = () => {
  localStorage.setItem("contacts", JSON.stringify(contacts));
};

// OR

// const setLocalStorage = () => {
//   let string1 = JSON.stringify(contacts);
//   localStorage.setItem("contacts", string1);
// };

const getLocalStorage = () => {
  contacts = JSON.parse(localStorage.getItem("contacts"));
};

// OR;

// const getLocalStorage = () => {
//   let retString = localStorage.getItem("contacts");
//   contacts = JSON.parse(retString);
// };

if (!localStorage.getItem("contacts")) {
  contacts = [
    {
      name: "James Mower",
      phone: "011 719 6495",
      email: "jmower@absa.co.za",
    },
    {
      name: "Tommie Theron",
      phone: "0866 398 2895",
      email: "ttheron@gmail.com",
    },
    {
      name: "Alex Kimi",
      phone: "0800 1111",
      email: "akimi@auckies.com",
    },
  ];
  setLocalStorage();
  getLocalStorage();
} else {
  getLocalStorage();
}

let first = confirm("Do you want to see the first contact?");

if (first) {
  const popper = document.createElement("p");
  popper.innerHTML = `${contacts[0].name} phone number is ${contacts[0].phone} and email is ${contacts[0].email}`;
  popper.setAttribute("id", "popper1");
  container.appendChild(popper);
  const hrTag = document.createElement("hr");
  container.appendChild(hrTag);
  const brTag = document.createElement("br");
  container.appendChild(brTag);
}

let last = confirm("Do you want to see the last contact?");

if (last) {
  const lI = contacts.length - 1;
  const popper = document.createElement("p");
  popper.innerHTML = `${contacts[lI].name} phone number is ${contacts[lI].phone} and email is ${contacts[lI].email}`;
  popper.setAttribute("id", "popper2");
  container.appendChild(popper);
  const hrTag = document.createElement("hr");
  container.appendChild(hrTag);
  const brTag = document.createElement("br");
  container.appendChild(brTag);
}

let newContact = confirm("Do you want to add a new contact?");

if (newContact) {
  let firstName = prompt("Enter a Name Please");
  let phoneNumber = prompt("Enter a Phone Number Please");
  let emailAddress = prompt("Enter an Email Address Please");
  if (firstName && phoneNumber && emailAddress) {
    let newContact = {
      name: firstName,
      phone: phoneNumber,
      email: emailAddress,
    };
    contacts.push(newContact);
    setLocalStorage();
    getLocalStorage();
  } else {
    alert("No Record added - Error with input");
  }
}

for (let item of contacts) {
  const pipper = document.createElement("p");
  pipper.innerHTML = `${item.name} phone number is ${item.phone} and email is ${item.email}`;
  container.appendChild(pipper);
}
