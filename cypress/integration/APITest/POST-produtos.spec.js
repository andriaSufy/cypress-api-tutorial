describe('products API', () => {
    context('POST /produtos', () => {
        it('check produtos', () => {
            cy.request({
                method: 'POST',
                url: '/produtos',
                body: {
                    nome: "Logitech MX Vertical",
                    preco: 470,
                    descricao: "Mouse",
                    quantidade: 381
                }
            })
                .should((response) => {                    
                    expect(response.status).to.eq(201)
                    expect(response.body.message).eq("Cadastro realizado com sucesso")
                    expect(response.body._id).eq("jogfODIlXsqxNFS2")              
                    
                });
        });
    });
});