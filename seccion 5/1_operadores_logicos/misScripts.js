1	function calcular(){
2	    let elementoRespuesta1 = document.
3	    getElementById("respuesta1");
4	    let elementoRespuesta2 = document.
5	    getElementById("respuesta2");
6	    let elementoRespuesta3 = document.
7	    getElementById("respuesta3");
8	
9	    let elementoEdad = document.
10	    getElementById("textoEdad");
11	    let edad = elementoEdad.value;
12	
13	    let puedeBeber = edad >= 18;
14	    elementoRespuesta1.textContent = puedeBeber;
15	
16	    let puedeIngresar = edad >= 18 && edad <= 30;
17	    elementoRespuesta2.textContent = puedeIngresar;
18	
19	    let entradagratis = edad == 20 || edad == 25;
20	    elementoRespuesta3.textContent = entradagratis;
21	}
