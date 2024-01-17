import updateUser from '../../config/user-update.json'
import { expect } from "chai"

describe('PUT call in cypress',() =>{

    //Using fixtures file "payload"
    it('PUT CALL using fixtures JSON file', ()=>{

        cy.fixture('payload-put-users').then((payload)=>{
            cy.request({
                method:'PUT',
                url:'https://gorest.co.in/public/v2/users/5967249',
                headers:{
                    Authorization: "Bearer 06c7ac383dd846ec15d6e8cc10c2a1da1924848199da24c601c805edfba8868e"              
                },
                body:payload

            }).then((res)=>{
                expect(res.status).to.be.equal(200)
                expect(res.body).has.property("name","Tilak Varma")
    
            })
        })
    })

    // Using config json file. 
    it('PUT call using config Json', () => {

        cy.request({
            method:'PUT',
            url:'https://gorest.co.in/public/v2/users/5967249',
            headers:{
                Authorization: "Bearer 06c7ac383dd846ec15d6e8cc10c2a1da1924848199da24c601c805edfba8868e"
            },
            body:updateUser
        }).then((res)=>{
            expect(res.status).to.be.equal(200)
            expect(res.body).has.property("name","Washington")

        })
    })
})