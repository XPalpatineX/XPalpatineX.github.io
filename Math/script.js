window.onload = function () {
	document.querySelector('.btnTran').onclick = function () {
		alert('При деление, вводить минимум 2 знака после запятой!');
		var op, gAnwer, bAnwer, common = 0, good = 0, bad = 0, errors = [];
		for (var a = 1; a <= 10 ; a++) {
			function mathRandom(max,min) {
				var length = max - min + 1 ;
				var resMarth = Math.floor(Math.random() * length) + min;
				return resMarth;
			}
			var x = mathRandom(15,3);
			var y = mathRandom(15,3);

			op = marthSum();
			function marthSum() {
				function mathNumber() {
					return (Math.floor(Math.random() * 3) + 1);
				}
				var OpArray = [' + ', ' - ', ' * ', ' / '];
				return OpArray[mathNumber()];
			}

			do {
				var userDataStr = prompt("Решите: " + x + op + y + " = ?");
				var userData = +userDataStr;
			}
			while(isNaN(userData) || userDataStr == '');		
			

			function mathFunction(a , b , op ) {
				if ( op == ' - ') {
					return a - b;
				}
				else if ( op == ' + ') {
					return a + b;
				}
				else if ( op == ' * ') {
					return a * b;
				}
				else {
					return a / b;
				}
			}
			var res = mathFunction(x, y, op);

			if ( res.toFixed(2) == userData.toFixed(2) ) {
				good++;
			} else {
				bad++;
				errors.push(x + op + y + ' = ' + res.toFixed(2) + ' , вы ответили = ' + userData );
			}
		}


		gAnwer = document.querySelector('.good').innerHTML = good;
		gAnwer.innerHTML = '';
		bAnwer =document.querySelector('.bad').innerHTML = bad;
		bAnwer.innerHTML = '';
		var divErrors = document.querySelector('.result');
		divErrors.innerHTML = '';

		for (var i = 0; i < errors.length; i++) {
			divErrors.innerHTML += ('<p>' + errors[i] + '</p>');
		}
	}
}

