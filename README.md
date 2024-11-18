
# QR Code Generator

This project is a simple QR code generator that takes a user input (like a URL or text) and generates a QR code for it. The QR code is displayed as an image on the page, and users can quickly generate a new one by entering a different text or URL.

![image](https://github.com/user-attachments/assets/6a576226-656c-4e39-b6b5-c065b17d1b59)



## Features
- Allows users to input any text or URL.
- Generates a QR code dynamically using the `qrserver` API.
- Displays the generated QR code on the same page.
- Error handling for invalid inputs or failures in generating the QR code.

## Technologies Used
- **HTML**: Structure of the page.
- **CSS**: Styling the page and QR code generator.
- **JavaScript**: Fetching the QR code from the API and handling the UI updates.
- **QR Server API**: Used to generate the QR codes.

## Getting Started

### Prerequisites
- A modern web browser (e.g., Google Chrome, Firefox).
- An active internet connection (to fetch the QR code from the API).

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Oussama-A-Belaiche/qr-code-generator.git
   ```

2. Open the project folder.

3. Open the `index.html` file in a web browser.

### Usage

1. Type any text or URL into the input field.
2. Click the **"Generate QR code"** button.
3. The QR code will be generated and displayed below the input field.
4. If there is an error in generating the QR code, an error message will appear.

### Example
- If you input "https://www.example.com" into the input box, the page will generate a QR code linking to the specified URL.

## Code Explanation

- **HTML**: Contains the input field for user input and a button to trigger the QR code generation. The output image (`<img>`) is used to display the generated QR code.
  
- **JavaScript**:
  - The `generate()` function retrieves the user input and constructs the URL to fetch the QR code image from the `qrserver` API.
  - The image is displayed once the QR code is generated successfully, and any errors are handled gracefully.

## Example Code Snippet

```javascript
const generate = async () => {
    let imageQR = document.getElementById("imageQR");
    imageQR.src = "";  // Clear the image source

    try {
        let user_input = document.getElementById("userInput").value;
        let generator = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${user_input}`);

        if (generator.ok) {
            imageQR.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${user_input}`;
            imageQR.style.display = "block";
        } else {
            throw new Error(`Can't generate QR code for ${user_input}`);
        }
    } catch (error) {
        document.getElementsByClassName("alret")[0].appendChild(
            document.createElement("p").textContent = error
        );
    }
}
```

## Contributing

Feel free to fork the repository and make improvements or adjustments. If you encounter any bugs or have feature requests, please create an issue on the repository's GitHub page.

