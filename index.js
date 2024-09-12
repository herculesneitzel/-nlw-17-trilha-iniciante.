const {  select, input  } = require('@inquirer/prompts')

let meta = {
    value: "Tomar 3L de água por dia",
    checked: false,
}

let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input ({ message: "Digite a meta:" })

    if(meta.length == 0) {
        console.log("A meta não pode ser vazia.")
        return
    }

    metas.push(
        { value: meta, checked: false}
    )
}

const start = async /*linha a linha*/ () => {
    while(true){
        
        const option = await /* Espere*/  select ({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar Meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar Metas",
                    value: "listar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })

        switch(option){
            case "cadastrar":
                await cadastrarMeta()
                console.log(metas)
                break
            case "listar":
                console.log("vamos listar")
                break
            case "sair":
                console.log("saindo")
                return
        }
    }
}

start()