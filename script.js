know =
{
    "Hi": "Hello",
    "Who are you": "I am gazala",
    "How are you": "I am fine",
    "How old are you": "i am 22 years of old",
    "I need your help": "How may i help you ?",
    "Why this chatbot is": "To enable communication between machine and user",
    "In this website where is payment option": "you can click on top right three dots and find",
    "Your designation": "Software developer",

};

function talk() {
    var user = document.getElementById("userBox").value;
    document.getElementById("userBox").value = "";
    document.getElementById("chatLog").innerHTML += user + "<br>";

    if (user in know) {
        document.getElementById("chatLog").innerHTML += know[user] + "<br>";
    }
    else {
        document.getElementById("chatLog").innerHTML += "I don't understand....<br>";
    }
}