// When the button is clicked, perform the operation
      document.getElementById('submit').onclick = function() {
        
        // Read the inputs
        var a = parseFloat(document.getElementById('ina').value);
        var b = parseFloat(document.getElementById('inb').value);

        
        // Read the selected operation
        var op;
        var radios = document.getElementsByName('op');
        for (var i = 0; i < radios.length; i++) {
          if (radios[i].checked) {
            op = radios[i].value;
            break;
          }
        }

        // Calculate the result based on the operation
        var result;

        switch (op) {
          case 'add':
            result = a + b;
            break;
          case 'sub':
            result = a - b;
            break;
          case 'mul':
            result = a * b;
            break;
          case 'div':
            if (b !== 0) {
              result = a / b;
            } else {
              result = 'Error: Division by zero';
            }
            break;
          default:
            result = 'Invalid operation';
        }

        // Display the result
        document.getElementById('result').textContent = result;
      };
