type clientes = {
    cliente: String,
    saldoTotal: Number,
    debitos: [Number, Number, Number]
}

const listaClientes: clientes[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040, 0] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300, 0] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [0, 0, 0] }
]

