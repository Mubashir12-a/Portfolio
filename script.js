
        function sendMessage() {
            var name = document.getElementById("name").value;
            var message = document.getElementById("message").value;
            var phoneNumber = "7889825292";

            if (name && message) {
                var formattedMessage = `Name: ${name}%0A%0AMessage: ${message}`;
                var whatsappURL = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;
                window.open(whatsappURL, '_blank');
            } else {
                alert("Please enter both your name and message.");
            }
        }