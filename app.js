let count = 0;

        function increment() {
            count++;
            console.log("Incremented count: ", count);  // Para depurar
            updateDisplay();
        }

        function decrement() {
            if (count > 0) {
                count--;
            } else {
                console.log("Count is already at 0, cannot decrement further.");  // Para depurar
            }
            updateDisplay();
        }

        function reset() {
            count = 0;
            console.log("Count reset to 0");  // Para depurar
            updateDisplay();
        }

        function updateDisplay() {
            document.getElementById('display').textContent = count;
            console.log("Display updated to: ", count);  // Para depurar
        }
