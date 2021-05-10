new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data(){
        return{
            search: '',
            columnas:[
                {text:'ID',value:'0',class:'indigo darken-2 white--text'},
                {text:'TITLE',value:'1',class:'indigo darken-2 white--text'},
                {text:'DETALLE',value:'3',class:'indigo darken-2 white--text'},
              ],
              articulos:[],
            }
     },
       created(){ 
           var url = 'http://jsonplaceholder.typicode.com/posts/' 
              axios.get(url).then(response =>{
                this.articulos = response.data;
                console.log(this.articulos);
              })
        }
  })




const getUsuarioAxios = async () => {
    try{

    const rePost  = await axios(`http://meestrada.mine.nu/SIGSEG/ajax/archivo.php?op=FormatosObserArchivo`)
    const datetab =rePost.data; 
    console.log(datetab);
    }catch(error){
    console.log(error);
    }  
}
getUsuarioAxios()
