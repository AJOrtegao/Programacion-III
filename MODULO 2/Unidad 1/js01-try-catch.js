try{
    const user = JSON.parse('{"name":Luis, "edad":25}');
    } catch {
        console.log("Hay un error convirtiendo a json");
    }
    console.log("final del sistema");



    try{
        console.log("intentando abrir archivo");
        // si lo borramos, no lanzara el  error
        throw new Error("archivo no encontrado");
        } catch (error){
            console.log("error: ",error.message);
        }
        //hasta aqui no se ejecuta el catch
        finally{
        console.log("termino el proceso de abrir el archivo");
        }