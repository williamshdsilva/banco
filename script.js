class Banco {
    constructor(conta, saldo, tipo_conta, agencia) {
        this.conta = conta;
        this.saldo = saldo;
        this.tipo_conta = tipo_conta;
        this.agencia = agencia;
    }

    buscarSaldo() {
        return this.saldo;
    }

    deposito(valor) {
        this.saldo += valor;
    }

    saque(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente");
        }
    }

    numeroConta() {
        return this.conta;
    }
}

// Exemplo de uso
let conta1 = new Banco("12345-6", 1000.00, "Corrente", "7890");
console.log(conta1.buscarSaldo());  // 1000.00
conta1.deposito(500.00);
console.log(conta1.buscarSaldo());  // 1500.00
conta1.saque(200.00);
console.log(conta1.buscarSaldo());  // 1300.00
console.log(conta1.numeroConta());  // 12345-6