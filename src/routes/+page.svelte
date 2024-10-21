<script>
    export let form
</script>
<main class="container mx-auto px-4 py-8">

    <h1 class="text-3xl font-extrabold">Planificador de contenidos</h1>

    <div class="bg-white shadow-md rounded-lg p-6">
    
        <form method="POST" action="?/crear" class="space-y-4">
          <div>
            <label for="temas" class="block text-sm font-medium text-gray-700">Temas o categorías</label>
            <input
              type="text"
              id="temas"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
              name="temas"
            />
          </div>

          <div>
            <label for="publicaciones" class="block text-sm font-medium text-gray-700">Publicaciones por día</label>
            <input
              type="number"
              id="publicaciones"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
              name="publicaciones_dia"
            />
          </div>

            <button
            type="submit"
            class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
            Generar planificación de contenidos
            </button>

        </form>


        {#if form}

        <div class="flex flex-row gap-5 mt-5">

                {#each form.result1 as resultado}

                

                    <div class="card bg-base-100 w-96 shadow-xl">
                        <div class="card-body">
                          <h2 class="card-title">{resultado.day}</h2>
                          {#each resultado.topics as topico}
    
                            <p>{topico}</p>
    
                          {/each}
                          
                        </div>
                    </div>

                {/each}
        </div>



        {/if}

        




</main>
