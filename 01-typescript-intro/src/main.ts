import './style.css'
// import './topics/01-basic-types'
import './topics/02-object-interface'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hola Mundo</h1>
  </div>
`
console.log("Hola Mundo")
