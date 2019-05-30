// mudar produto para Lote -> criar model lote e bd lotes
// Bd criado de lotes, mas ta zoado... REFORMULAR

module.exports = (app, db) => {
    app.get('/', (req, res) => {
        console.log('Redrecionando para "/home"... ');
        res.redirect('/home');
    });
    
    // inicial, com todos os lotes
    app.get('/home', (req, res) =>{
        return db.Lote.findAll()
            .then(lotes => res.send(lotes))
            .catch((err) => {
                console.log('Ocorreu um erro ao buscar os lotes', JSON.stringify(err))
                res.status(400).send(err)
            });
    });
    
    //tela pesquisa de lotes
    app.get('/search/:lote', (req, res) => {
        const id = parseInt(req.params.lote)
        return db.Lote.findOne({where: {cod_lote: id}})
            .then((lote) => res.send(lote))
            .catch((err) => {
                console.log('Ocorreu um erro ao buscar o lote desejado', JSON.stringify(err))
                res.status(400).send(err)
            });
    });

    //apagar lote
    app.delete('/delete/:lote', (req, res) => {
        const id = parseInt(req.params.lote)
        return db.Lote.findOne({where: {cod_lote: id}})    
            .then((lote) => lote.destroy({ force: true }))
            .then(() => res.send({ id }))
            .catch((err) => {
                console.log('***Erro ao deletar lote', JSON.stringify(err))
                res.status(400).send(err)
            });
    });
    
    //criar novo lote
    app.post('/lot/create', (req, res) => {
        const {
            cod_lote,
            etapa,
            responsavel,
            maquina,
            data_inicio,
            data_fim,
            data_atualizacao,
            status,
            id_produto,
            trajeto,
            quantidade_produtos
        } = req.body
        return db.Lote.create({
            cod_lote,
            etapa,
            responsavel,
            maquina,
            data_inicio,
            data_fim,
            data_atualizacao,
            status,
            id_produto,
            trajeto,
            quantidade_produtos
        })
            .then((lote) => res.send(lote))
            .catch((err) => {
                console.log('***Ocorreu um erro ao criar um lote.', JSON.parse(JSON.stringify(contact)))
                return res.status(400).send(err)
            })
    });
    
    //atualizar lote
    app.put('/lot/update/:lote', (req, res) => {
        const id = parseInt(req.params.lote)
        return db.Lote.findOne({where: {cod_lote: id}})
            .then((lote) => {
                const {
                    cod_lote,
                    etapa,
                    responsavel,
                    maquina,
                    data_inicio,
                    data_fim,
                    data_atualizacao,
                    status,
                    id_produto,
                    trajeto,
                    quantidade_produtos
                } = req.body
                return lote.update({
                    cod_lote,
                    etapa,
                    responsavel,
                    maquina,
                    data_inicio,
                    data_fim,
                    data_atualizacao,
                    status,
                    id_produto,
                    trajeto,
                    quantidade_produtos
                })
                .then(() => res.send(lote))
                .catch((err) => {
                    console.log('***Erro ao atualizar lote.', JSON.stringify(err))
                    res.status(400).send(err)
                })
            })
    });
}