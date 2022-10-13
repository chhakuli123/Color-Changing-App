const button = document.getElementById("button"); // selcting of button 

button.addEventListener("click", function changeColor() {


    let char = '0123456789abcdef'; // value to be used to generate random color hex code
    let color = "#";


    // iteration to generate random hex color code
    for (let i = 0; i < 6; i++) {
        color = color + char[Math.floor(Math.random() * 16)];// 


    }
    // Changing of background color with randomly generated color
    document.getElementById("canvas").style.backgroundColor = color;

});


// 1. we used  char = '0123456789abcdef'  why -:in hexa decimle we have 16 char. 0 to 9 and a to f all combinations are made up of from this values
// 2. we want loop to run for 6 because hexadecimle contains only six digit. 7th is hashtag"#"
// 3. whenever we will come in loop we want to generate randome number.
// 4. math.random() will create random number fom 0 to 1 if we multiply by 16 then it will create 0 to 17(hexadecimle) and we will get in a decimle value like "0.2562789821"
// 5. we do not want number after decimle.
// 6. Math.floor - any number after decimle will be neglect and it will give roun figure.
// 7. If we will get 12 then we want "c" to be print so we wrapped in array  "char[Math.floor(Math.random() * 17)]"
