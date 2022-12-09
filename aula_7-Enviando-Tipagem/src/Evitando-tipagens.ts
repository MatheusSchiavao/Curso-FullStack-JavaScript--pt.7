 //utilização do ?
 function sendSpaceship(spaceship:{pilot: string, copilot?: string}) {
  // ... 
 }

 sendSpaceship( {pilot: 'Han Solo', copilot: 'Chewbaca'})

 sendSpaceship({pilot: 'Luke'})

 let input: unknown

 input = 'test'
 input = 20
 input = []

 let text: string

  // error, text apenas string 
  // text = input 
  // ok, input pode ser qualquer um
 input = text

 //Nunca utilizar o Any (ou deixar para último caso)
// let input: any

// input = 'test'
// input = 20
// input = []

// let text: string

// text = input 
// input = text

function verification(test) {
  if (test) {
    
  } else {
    let _check: never

    // Basicamente o 'never' impossibilita a variavel de recer qualquer coisa
    // _check = ''
    // _check = 3
    // _check = false

    // O teste recebe o _check, agoa o test vale como never também
    let test = _check

    // Mesmo erro de cima, agora o test não recebe mais nada
    // test = ''

    return _check
  }
}