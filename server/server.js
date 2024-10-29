module.exports = {

    start: () => {
        console.log('Isso executou ANTES do projeto todo');
      },

      stop: () => {
        console.log('Isso executou DEPOIS do projeto todo');
    }
}
