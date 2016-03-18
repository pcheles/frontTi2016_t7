function ListaTelefonicaController($scope) {

    $scope.novoContato = {nome: '', telefone: ''};
    $scope.contatoEdicao = {nome: '', telefone: ''};

    $scope.contatos = [
        {nome: 'Joaquim Almeida', telefone: '4491033400'},
        {nome: 'Carlos Salazar', telefone: '4491233400'}
    ];

    $scope.contatos = [];

    $scope.adicionaContato = function (formulario) {
              
        var temp = {nome:formulario.nome, telefone:formulario.telefone};
        $scope.contatos.push(temp);             
        toastr.success("Contato adicionado com sucesso.");
    };

    $scope.editaContato = function(index, contato){
    
        console.log(index);

        $scope.formulario.id = index;
        $scope.formulario.nome=contato.nome;
        $scope.formulario.telefone=contato.telefone;
        
        $scope.edit = true;
    };

    $scope.aplicaEdicao = function(contatoEditavel){
        
        console.log(contatoEditavel);
        $scope.contatos[contatoEditavel.id] = contatoEditavel;
        

        $scope.edit = false;
        toastr.success("Contato alterado com sucesso.");
    };

    $scope.deletaContato = function(index){
        $scope.contatos.splice(index, 1);
        toastr.success("Contato removido com sucesso.");
    };
}


