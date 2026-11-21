const open = document.querySelector(".buton")
const close = document.querySelector(".X1")
const meme = document.querySelector(".spi1")

open.addEventListener("click", function(){
    meme.classList.add("opa");
})
close.addEventListener("click", function(){
    meme.classList.remove("opa");
})
const open1 = document.querySelector(".pro")
const close2 = document.querySelector(".x2")
const meme3 = document.querySelector(".spi2")

open1.addEventListener("click", function(){
    meme3.classList.add("opa");
})
close2.addEventListener("click", function(){
    meme3.classList.remove("opa");
})
const open4 = document.querySelector(".buton1")
const close4 = document.querySelector(".X11")
const meme4 = document.querySelector(".spi11")

open4.addEventListener("click", function(){
    meme4.classList.add("opa");
})
close4.addEventListener("click", function(){
    meme4.classList.remove("opa");
})


const sID = document.getElementById("ID")
const siD = document.getElementById("iD")
const sId = document.getElementById("Id")

const sIDAA = document.getElementById("A")
const siDAA = document.getElementById("S")
const sIdAA = document.getElementById("D")


function SOMOY(H){
    H.scrollIntoView({
        behavior: "smooth", 
        block: "start"
    });
};
sID.addEventListener("click", function(){
    SOMOY(sIDAA);
})
siD.addEventListener("click", function(){
    SOMOY(siDAA);
})
sId.addEventListener("click", function(){
    SOMOY(sIdAA);
})

const sID1 = document.getElementById("ID1")
const siD1 = document.getElementById("iD1")
const sId1 = document.getElementById("Id1")


sID1.addEventListener("click", function(){
    
    SOMOY(sIDAA);
})
siD1.addEventListener("click", function(){
    SOMOY(siDAA);
})
sId1.addEventListener("click", function(){
    SOMOY(sIdAA);
})
const button = document.getElementById("id");
const button2 = document.getElementById("id2");
const button3 = document.getElementById("id3");
const button4 = document.getElementById("id4");
const button5 = document.getElementById("id5");
const butto = document.getElementById("di");

function summa (a,b){
    return a + b;
}
function summa2 (a,b){
    return a - b;
}
function summa3 (a,b){
    return a * b;
}
function summa4 (a,b){
    return a / b;
}
function summa5 (a,b){
    return a ** b;
}

    
    
const Delete = document.querySelector(".del")
if (Delete){
    Delete.addEventListener("click", function(){
        const input = document.getElementById("number");
        const input2 = document.getElementById("number2");
    
        input.value = null;
        input2.value = null;
    });

}



function vizov(){
    const input = document.getElementById("number");
    const input2 = document.getElementById("number2");
    const vevu = input.value.trim();
    const vevu2 = input2.value.trim();
    if (butto){
        butto.textContent = (summa(Number(vevu),Number(vevu2)) + "- ЭТО ПРАВИЛЬНЫЙ ОТВЕТ!");
    }
}
function vizov2(){
    const input = document.getElementById("number");
    const input2 = document.getElementById("number2");
    const vevu = input.value.trim();
    const vevu2 = input2.value.trim();
    if (butto){
        butto.textContent = (summa2(Number(vevu),Number(vevu2))+ "- ЭТО ПРАВИЛЬНЫЙ ОТВЕТ!");
    }
}
function vizov3(){
    const input = document.getElementById("number");
    const input2 = document.getElementById("number2");
    const vevu = input.value.trim();
    const vevu2 = input2.value.trim();
    if (butto){
        butto.textContent = (summa3(Number(vevu),Number(vevu2))+ "- ЭТО ПРАВИЛЬНЫЙ ОТВЕТ!");
    }
}
function vizov4(){
    const input = document.getElementById("number");
    const input2 = document.getElementById("number2");
    const vevu = input.value.trim();
    const vevu2 = input2.value.trim();
    if (butto){
        butto.textContent = (summa4(Number(vevu),Number(vevu2))+ "- ЭТО ПРАВИЛЬНЫЙ ОТВЕТ!");
    }
}
function vizov5(){
    const input = document.getElementById("number");
    const input2 = document.getElementById("number2");
    const vevu = input.value.trim();
    const vevu2 = input2.value.trim();
    if (butto){
        butto.textContent = (summa5(Number(vevu),Number(vevu2))+ "- ЭТО ПРАВИЛЬНЫЙ ОТВЕТ!");
    }
}

if (button){
    button.addEventListener("click", function(){
        vizov();
    }
);
}
if (button2){
    button2.addEventListener("click", function(){
        vizov2();
    }
);
}
if (button3){
    button3.addEventListener("click", function(){
        vizov3();
    }
);
}
if (button4){
    button4.addEventListener("click", function(){
        vizov4();
    }
);
}
if (button5){
    button5.addEventListener("click", function(){
        vizov5();
    }
);
}

const prin = document.querySelector(".prin")
function pri(){ 
    const name = document.querySelector(".input")
    const Sname = document.querySelector(".in1")
    const names = document.getElementById("name")
    const Snames = document.getElementById("Sname")
    const Svevu = Sname.value
    const nvevu = name.value

    names.textContent=(nvevu)
    Snames.textContent=(Svevu)
}
prin.addEventListener("click", function(){
    console.log(1)
    pri()
})























