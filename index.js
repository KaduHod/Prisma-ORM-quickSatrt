const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

let allClients = async () => { return await prisma.clientes.findMany() }

let insertClient = async ( clientAttributes ) => { return await prisma.clientes.create( clientAttributes ) } 

let updateClient = async ( clientOptions ) => { return await prisma.clientes.update( clientOptions )}

async function main(){
       
    const clientUpdateOptions = {
        where : { id: 2 },
        data  : { nome: 'Carlos Update', idade: 213 }
    }

    const newClientOptions = {
        data  : {
            nome  : 'oi',
            email : 'oi',
            idade : 1,
            associado: false,
            estado: 'parana',
            cidade: 'curitiba',
            telefone: '09217880234021'
        }
    }

    const update = await updateClient( clientUpdateOptions )

    const insert = await insertClient( newClientOptions ) 

    const all = await allClients()
    
}

main()
