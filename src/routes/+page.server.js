
export const actions = {


    crear: async ({request})=> {



        const formData = await request.formData()
        const temas = formData.get('temas')
        const publicaciones_dia = formData.get('publicaciones_dia')

        const api_planificador_semanal = await fetch('https://xksj-cccl-hafb.n7d.xano.io/api:bR8I3aFC/plan_contenidos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({temas, publicaciones_dia})
        });

        

        /*const api_plan_openai = await fetch('https://xksj-cccl-hafb.n7d.xano.io/api:bR8I3aFC/plan_contenidos_openai', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ num_publicaciones:publicaciones_dia, categorias:temas})
        });*/


        if(api_planificador_semanal.ok){
            const response = await api_planificador_semanal.json()
            console.log(response)
            console.log(response.func1.json.estructura.planificacion)
            return response

        } else {

            console.log(api_planificador_semanal)

            redirect(303, '/')

        }


    }

        


    }
