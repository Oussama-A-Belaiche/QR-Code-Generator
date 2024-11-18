const generate = async () => { 
    let imageQR = document.getElementById ("imageQR")
    imageQR.src = ``



    try { 

        let user_input = document.getElementById("userInput").value
        let generator = await fetch (`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${user_input}`)
        console.log(generator)



        if (generator.ok) { 
            imageQR.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${user_input}`
            if (imageQR.style.display == "none" ) {  imageQR.style.display ="block" } 

        }
        else { 
            throw new Error (`Cant generate QR code for ${user_input}` )
        }

    }catch (error) { 

        document.getElementsByClassName ("alret")[0].appendChild (document.createElement("p").textContent = error)

    
    }



}