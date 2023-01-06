function calculateTMB(event){
    event.preventDefault()
    let name = document.getElementById('name').value
    let gender = document.getElementById('gender').value
    let inputWeight = document.getElementById('weight').value
    let height = document.getElementById('height').value
    let age = document.getElementById('age').value
    
    let weight = Number(inputWeight)

    if(gender == 0){

        document.getElementById('TMB').innerHTML = `Erro! ${name} , escolha o sexo!`
        document.getElementById('divResult').classList.add('text-red-500')
        document.getElementById('divResult').style.display = 'block'
    }else if(isNaN(inputWeight)){

        document.getElementById('TMB').innerHTML = `Erro! ${name}, digite o seu peso utilizando '.'`
        document.getElementById('divResult').classList.add('text-red-500')
        document.getElementById('divResult').style.display = 'block'


    } else if (gender == 'male'){
        let ResultTMB = 66 + (13.7 * weight) + (5 * height) - (6.8 * age)
        
        ResultTMB = ResultTMB.toFixed(2)
        document.getElementById('divResult').classList.remove('text-red-500')
        document.getElementById('divResult').classList.add('text-green-500')
        document.getElementById('TMB').innerHTML = `${name}, sua TMB é ${ResultTMB} calorias!`
        document.getElementById("divResult").style.display = 'block'
    } else {
        let ResultTMB = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age)
        
        ResultTMB = ResultTMB.toFixed(2)

        document.getElementById('divResult').classList.add('text-green-500')
        document.getElementById('TMB').innerHTML = `${name}, sua TMB é ${ResultTMB} calorias!`
        document.getElementById("divResult").style.display = 'block'
    }
}


document.getElementById('divResult').style.display = 'none'
document.getElementById('form').addEventListener('submit', calculateTMB)