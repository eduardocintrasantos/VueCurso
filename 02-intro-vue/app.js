const { createApp, ref } = Vue;

const app = createApp({
    /*template: `
        <h1>{{message}}</h1>
        <p>{{author}}</p>
    `,*/

    setup() {
        const message = ref('Message Vue')
        const author = ref('Autor')

        const changeName = () => {
            message.value = 'Outra mensagem Vue';
            author.value = 'Eduardo'
        }

        /*setTimeout(() => {
            message.value = 'Outra mensagem Vue';
            author.value = 'Eduardo'
            console.log('Executado');
        }, 1000);*/

        return {
            message,
            author,
            changeName
        }
    }
});

app.mount('#myApp')