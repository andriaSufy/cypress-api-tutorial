let fakeUser;

describe('Given the Users api', () => {
    beforeEach(() => {
      cy.task('freshUser').then((user) => {
        fakeUser = user;
        cy.log(JSON.stringify(fakeUser))
      });
    });

    context('POST /usuários', () => {
        it('check usuários', () => {
            cy.request({
                method: 'POST',
                url: '/usuarios',
                body: fakeUser
            })
                .should((response) => {                    
                    expect(response.status).to.eq(201)
                    expect(response.body.message).eq("Cadastro realizado com sucesso")
                    //expect(response.body._id).eq("jogfODIlXsqxNFS2")              
                    
                });
        });
    });
});    
