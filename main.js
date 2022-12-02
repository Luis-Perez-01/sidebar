new gridjs.Grid({
    columns: ['Nombre', 'Especie', 'Imagen'],
    server: {
        url: 'https://rickandmortyapi.com/api/character/?page=1',
        then: data => data.results.map(character => [character.name, character.species, character.url]),
        handle: (res) => {
            // no matching records found
            if (res.status === 404) return { data: [] };
            if (res.ok) return res.json();

            throw Error('oh no :(');
        },
    },
    pagination: {
        enabled: true,
        limit: 5,
        summary: false
    },
    search: {
        enabled: true
    },
    sort: {
        multiColumn: false
    },
}).render(document.getElementById("wrapper"));