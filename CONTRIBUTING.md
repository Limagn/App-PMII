### 1) Faça um **Fork** deste Repositório

Acesse a página principal do repositório e clique no botão "Fork" no canto superior direito da página.

> [!NOTE]\
> Um "fork" no GitHub é uma cópia de um repositório que pode ser criada por qualquer usuário.  Para mais detalhes, reveja a aula ou acesse a documentação do GitHub: [Criar fork de um repositório](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo).

### 2) Clone localmente

Abra o seu Git Bash e digite o comando `git clone` seguido da URL do seu fork para clonar o seu repositório localmente. Por exemplo:

```bash
git clone https://github.com/SEU_USERNAME/Limagn.git
```

Pressione enter, e uma cópia do seu fork no GitHub será criada localmente.

### 3) Crie uma nova **branch**

Utilize o comando `git checkout -b` para criar e alternar para a nova branch e nomeie-a como `feat/nome-da-branch`

> Exemplo:\
> `git checkout -b feat/nome-da-branch`

### 4) Crie ou altere os arquivos.

#### 4.1) Exemplo: Desenvolva o seu Profile README

Crie um arquivo em Markdown (extensão `.md`) e nomeie com o mesmo nome do seu usuário no GitHub:

> Exemplo:\
> `Limagn.md`

### 5) Sincronize sua branch e Faça o Merge

Antes de adicionar suas alterações, sincronize sua branch local para garantir que você está trabalhando com a versão mais recente do repositório principal.

```bash
git checkout main
git pull origin main
git checkout feat/nome-da-branch
git merge main
```

Isso evita conflitos ao enviar suas alterações posteriormente.

### 6) Adicione suas alterações à "staging area"

Utilize o comando `git add SEU_USERNAME.md` para adicionar sua alteração (nesse caso o arquivo markdown criado) à "staging area" no Git.

### 7) Crie um Commit

Crie um commit e adicione a mensagem indicando a adição do seu perfil:

```bash
git commit -m "feat: add Limagn profile"
```

> [!IMPORTANT]\
> Verifique a [`Convenção de Commits`](https://github.com/Limagn/Limagn/blob/main/CONTRIBUTING.md#conven%C3%A7%C3%A3o-de-commits) para escrever a mensagem do seu commit de forma clara e padronizada.

### 8) Envie as Alterações para o seu Repositório Remoto

Envie as alterações realizadas no seu repositório local para a branch `feat/nome-da-branch` no seu repositório remoto com o comando:

```bash
git push origin feat/nome-da-branch
```

> [!WARNING]\
> Caso você tenha criado seu arquivo diretamente no repositório remoto no GitHub, esse processo não será necessário.

### 9) Crie um **Pull Request**.

> [!NOTE]\
> Caso não saiba como criar uma solicitação de pull, reveja acesse a documentação do GitHub: [Como criar uma solicitação de pull](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

Após criar o seu Pull Request, algum adm irá validar a sua submissão. Caso esteja tudo certo, será retornada uma mensagem indicando que seu PR foi aprovado. Do contrário, leia atentamente as orientações e verifique os arquivos modificados para saber se atende as instruções para contribuição.

## Convenção de Commits

| Tipo de Commit | Descrição                                                    | Exemplo                               |
| -------------- | ------------------------------------------------------------ | ------------------------------------- |
| `feat`         | Adiciona uma nova funcionalidade ao projeto.                 | `feat: add USENAME.md profile`        |
| `fix`          | Corrige um bug ou problema no projeto.                       | `fix: fixed issue fix#IssueNumber`    |
| `docs`         | Altera a documentação do projeto.                            | `docs: update README.md`              |
| `style`        | Realiza mudanças na aparência, sem alterar a funcionalidade. | `style: add EFFECTNAME to COMPONENT`  |
| `refactor`     | Realiza mudanças no código que não alteram a funcionalidade. | `refactor: refactor at CLASSNAME`     |
| `test`         | Adiciona ou modifica testes no projeto.                      | `test: add unit test for UserService` |

## Referências

- [ANGULAR. Contributing to Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md)
- [CONVENTIONAL COMMITS. Summary](https://www.conventionalcommits.org/en/v1.0.0/)
- [GITHUB. Configurar diretrizes para os contribuidores do repositório](https://docs.github.com/pt/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)
- [DIO - Dio Lab Open Source](https://github.com/digitalinnovationone/dio-lab-open-source/blob/main/CONTRIBUTING.md)

