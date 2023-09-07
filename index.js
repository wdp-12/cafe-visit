//Start
  // nama = "Iklima"
   //usia = 21
   //uang = 400000

   //If nama is empty
     // Display "Anda tidak boleh masuk!"
   //Else
      //If usia < 17
         //If uang >= 50000
            //uang -= 50000
            //Display "Anda bisa pesan juice. Sisa uang anda: " + uang
         //Else
            //Display "Uang tidak cukup. Anda harus pulang."
         //End If
      //Else
         //If uang >= 300000
            //uang -= 300000
            //Display "Anda bisa pesan anggur. Sisa uang anda: " + uang
         //Else
            //Display "Uang tidak cukup. Anda harus pulang."
         //End If
      //End If
   //End If
//End


var nama = "Iklima"; 
var usia = 21; 
var uang = 400000; 


if (nama === "") {
  console.log("Anda tidak boleh masuk!");
  } else {

  if (usia < 17) {
    
    if (uang >= 50000) {
      uang -= 50000; 
      console.log("Anda bisa pesan juice. Sisa uang anda: " + uang);
    } else {
      console.log("Uang tidak cukup. Anda harus pulang.");
    }
  } else {
    if (uang >= 300000) {
      uang -= 300000; 
      console.log("Anda bisa pesan anggur. Sisa uang anda: " + uang);
    } else {
      console.log("Uang tidak cukup. Anda harus pulang.");
    }
  }
}

