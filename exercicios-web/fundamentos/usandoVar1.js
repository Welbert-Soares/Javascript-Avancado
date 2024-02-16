{
  {
    {
      {
        var sera = "Será???";
        console.log(sera); // var dentro de função é visível fora da função
      }
    }
  }
} // var dentro de blocos de código não é visível fora do bloco

console.log(sera); // var dentro de função é visível fora da função

function teste() {
  var local = 123;
  console.log(local);
}

teste();

