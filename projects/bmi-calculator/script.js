

function CalculateBMI (event){
    event.preventDefault()
    let name = document.getElementById('name').value
    let inputHeight = document.getElementById('inputHeight').value
    let inputWeight = document.getElementById('inputWeight').value

    let height = Number(inputHeight)
    let weight = Number(inputWeight)

    let ResultBMI = weight / (height * height)
    ResultBMI = ResultBMI.toFixed(2)


    if(!isNaN(ResultBMI)){
        document.getElementById('Result').classList.remove('text-red-500')
        document.getElementById('Result').classList.add('text-green-500')


        document.getElementById('IMC').innerHTML = ` ${name}, seu IMC é: ${ResultBMI}`
        document.getElementById('Result').style.display = 'block'
    } else {
        document.getElementById('IMC').innerHTML = `Erro! ${name}, digite os números usando '.' e não ','`
        document.getElementById('Result').classList.add('text-red-500')
        document.getElementById('Result').style.display = 'block'
    }

    

   

    
}



document.getElementById('Result').style.display = 'none'
document.getElementById('form').addEventListener('submit', CalculateBMI)
