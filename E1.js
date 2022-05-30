/* 
    Creo que el problema de este codigo es que no analisa exaxtemente bien el total por usuario, por primero debemos analisar este y despues, 
    si quieremos devolver el total por todo - calculamos todos los usuarios y ya esta. Esta forma es mas buena y mas segura de hacer, 
    porque podemos parar muchisimas errores y tambien, si quieremos ver solo el total por un usuario - podemos mostrarlo en futuro sin cambios. 
*/

class RegistredUser{
    constructor(services=[]){
        this.services=services;
    }

    inti=()=>{
        return fetch(`URL for DB`).then(response=>response.json()).then(data=>{ });
    }
    
    let [user] = data;

    getTotal(){
        let total=0;

        for (const user of data){
            this.services.forEach(service, index =>{
                let multimediaContent = service.getMultimediaContent(this.user.id);
    
                if (typeof service == StreamingService){
                    total+=multimediaContent.streamingPrice;
                }
                else if(typeof service==DownloadService){
                    total+=multimediaContent.downloadPrice;
                }
    
                if (typeof multimediaContent==PermiumContent){
                    total+=multimediaContent.additionalFee
                }
            })
        }
        return total;
    }
}

