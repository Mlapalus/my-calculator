const buttonsOfCalcular = document.querySelectorAll('p');
let compt = 0;

for (const button of buttonsOfCalcular)
{
  console.log(compt);
    button.addEventListener('click', (event) => 
  {
    if (compt == 0)
    {
      document.getElementById('result').innerHTML = button.innerHTML;
    }
    else 
    {
    let result = document.getElementById('result').innerHTML; 
    document.getElementById('result').innerHTML = result + button.innerHTML;
    }
    compt++
  })
}
