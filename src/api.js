const link = 'https://api-comidas.vercel.app/';
const Api = {
    listar:async ()=>{
        const f =await fetch(link+'listar')
        const j =await f.json()
        return j;
    },
    listarCarrinho : async ()=>{
        const f =await fetch(link+'listarCar')
        const j =await f.json()
        return j;
    },
    deletarCarrinho : (id)=>{
       fetch(link+"deletarcar/"+id,{
           method:"DELETE"
       })
    }
}
export default Api;