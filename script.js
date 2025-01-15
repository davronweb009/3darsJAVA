let first = "Sizda hozir random sonlar chiqishni boshlaydi";
alert(first)
let random = Math.random() *100;
let integerNumber = Math.ceil(random);
let kop = (`${integerNumber}` * 2)
let bol = (`${integerNumber}` / 2)
let qol = (`${bol}` % 3)

alert(`Random orqli chiqqan son:${integerNumber}`)
alert(`biz random sonni 2 ga ko'paytirib 2 ga bolamiz`)
alert(`Random orqali chiqqan son ${integerNumber} edi
biz uni 2 ga ko'paytirib ${kop} sonin chiqardik
va shu sonni 2 ga bolib ${bol}
shu sonni 3 ga bolgandagi qodiq ${qol}
`)
