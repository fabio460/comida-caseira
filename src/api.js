const link = 'https://api-comidas.vercel.app/';
const Api = {
    listar:async ()=>{
        const f =await fetch(link+'listar')
        const j =await f.json()
        return j;
    },


    inserirCarrinho: (nome,imagem,valor,quantidade)=>{
        const formadata = new FormData()
        formadata.append('nome',nome)
        formadata.append('imagem',imagem)
        formadata.append('valor',valor)
        formadata.append('quantidade',quantidade)
       fetch(link+'inserirCar',{
           method:"POST",
           body:formadata
       })
    },
    listarCarrinho : async ()=>{
      try {
        const f =await fetch(link+'listarCar')
        const j =await f.json()
        return j;
      } catch (error) {
          window.location.reload()
      }
    },
    deletarCarrinho : (id)=>{
      try {
        fetch(link+"deletarcar/"+id,{
            method:"DELETE"
        })
      } catch (error) {
          window.location.reload()
      }
    }
}
export default Api;