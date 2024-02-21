const btn = document.getElementById("btn");
const output = document.querySelector(".output");

let quote = [
    "Your joy, your misery, your love, your agony, your bliss, lie in your hands.",
"The sign of intelligence is that you are constantly wondering. Idiots are always dead sure about every damn thing they are doing in their life.",
"How deeply you touch another life is how rich your life is.",
"Life is a process, not a problem. The question is only, have you prepared yourself for the process or not?",
"If you resist change, you resist life.",
"What the world needs is not a nice person but a wise person.",
"If you do not know how to handle yourself, then you are handling life.",
"Your experience of life is not about what has happened to you, but how you perceive and respond to it.",
"The way you think, feel, and understand life if this is not in your hands, you are a slave.",
"It's time you understand that you are the most important person in your life. Your life is your making."
];
btn.addEventListener("click",()=>{
    console.log("clicked");
    let random = Math.floor(Math.random()*
    quote.length)
    output.textContent = quote[random];
})