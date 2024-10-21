
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


        if(api_planificador_semanal.ok){
            const response = await api_planificador_semanal.json()
            console.log(response)
            return response

        } else {

            console.log(api_planificador_semanal)

            redirect(303, '/')

        }


    }

        


    }
