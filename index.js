/*  Funcionamiento de la clase MathOp
    
    - Necesita definir una variable y declararla con valores (base, potencia):
    var element = new MathOp(base, pow)

    - Para obtener la potencia, a la variable declarada se le debe de llamar la variable local 'result':
    var element = new MathOp(2, 3);
    console.log(element.result) //Salida en la consola: 8

    - Posibles variantes de potencia:
        *Si la potencia es menor que 0:
            Debido a que un numero elevado a un numero negativo (a^-n) es igual a la inversa del mismo numero elevado a su positivo (1/a^n),
            se desarrolla primero la potencia positiva de la base (a^ (n * -1) ) y el resultado es dividido entre 1 (1 / a^ (n * -1) )
        *Si la potencia es igual a 0 y:
            ~La base es igual a 0: Retorna una variable nula referenciando a que es un valor indefinido (0^0 = indefinido)
            ~La base no es igual a 0: Retorna 1 ya que a^0 = 1
        *Si la potencia es mayor que 0: Se desarrolla la potencia normalmente

    Un ejemplo se encuentra en la linea 63 de dicho codigo
*/

const iniciar = function (){
    const enviar =document.getElementById('idenviar');
    cons
}
class MathOp{
    
    constructor (base, pow) {
        this.base = base;
        this.pow = parseInt(pow);   
    }

    get result (){
        return this.calcPow();
    }

    calcPow() {
        var result = 0;
        if (this.pow == 0){ //Si la potencia vale 0
            if (this.base == 0) return null; //Retorna Null ya que 0^0 es indeterminado
            else return 1; //Retorna 1 ya que cualquier numero elevado a 0 es 1
        }
        else if (this.pow < 0){ //Si la potencia es negativa
            var i = 1;
            result = this.base;
            while (i < (this.pow * -1)){
                i++;
                result = result * this.base;
            }
            result = 1 / result;
            return result;
        }
        else if (this.pow > 0){ //Si la potencia es positiva
            var i = 1;
            result = this.base;
            while (i < this.pow){
                i++;
                result = result * this.base;
            }
            return result;
        }
    }
}

 //Cambiar por elemento html (Potencia)

