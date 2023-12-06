document.addEventListener('DOMContentLoaded', () => {

    const dataContainer = 
        document.getElementById('data-container');

    //funcao para tratar os erros das solicitacoes
    const handleErrors = (response) =>{
        if (!response.ok){
            throw Error(response.statusText);
        }
        return response;
    };

    // funcao para buscar od dados da API
    const fetchData = async () => {
        try {
            //fazendo uma requisicao GET
            const response = 
                await fetch('http://localhost:3000/alunos');
            
            // tratando o erro na rewsposta
            handleErrors(response);

            // converter os dodos para JSON
            const alunos = await response.json();
        
            //exibindo os dados na pagina
            alunos.forEach(aluno => {
                const alunoElement = 
                    document.createElement('div');
                alunoElement.innerHTML=`<strong>${aluno.nome}</strong><p>${aluno.curso}</p>`
                dataContainer.appendChild(alunoElement);
            });

            
        } catch (error) {
            console.log('erro ao buscar os dados', error);
        }
    };

    // chamendo a funcao para carregar os dados na tela
    fetchData();
});