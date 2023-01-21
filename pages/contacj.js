 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBVLzGvOB6PR1WpxRpCQAOZWE5qtFYAdA8",
    authDomain: "zehra-printers.firebaseapp.com",
    databaseURL: "https://zehra-printers-default-rtdb.firebaseio.com",
    projectId: "zehra-printers",
    storageBucket: "zehra-printers.appspot.com",
    messagingSenderId: "430951193613",
    appId: "1:430951193613:web:ca531984fe18a9ae908944",
    measurementId: "G-DN1Z6VHEL7"
  };

  firebase.initializeApp(firebaseConfig);

  var contactFormDB = firebase.database().ref("contactForm");

  document.getElementById("contactForm").addEventListener("submit", submitFrom);

  function submitFrom(e){
    e.preventDefault();

    var name = getElementVal("inputFirstName");
    var emailId = getElementVal("inputEmail");
    var msgContent = getElementVal("inputMessage");

    saveMessages(name, emailId, msgContent);

    document.querySelector('.alert').style.display = "block";

    setTimeout(() => {
      document.querySelector('.alert').style.display = "none";

    }, 3000 );
  }

const saveMessages = (name, emailId, msgContent) => {
   var newContactFrom  = contactFormDB.push();

   newContactFrom.set({
    name : name, 
    emailId : emailId,
    message : msgContent,
   })
};

  const getElementVal = (id) =>{
    return document.getElementById(id).value;

  };