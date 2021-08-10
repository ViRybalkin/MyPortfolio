# Лендин-партфолио Веб-разработчика

> Перед установкой зависимостей и запуском проекта убедитесь, что у вас установлена [последняя версия Node.js & NPM](https://nodejs.org/en/download/current/), а так же
> [последняя версия Yarn](https://classic.yarnpkg.com/en/docs/install)

## Чтобы развернуть проект необходимо:

```sh
$ git clone https://github.com/ViRybalkin/MyPortfolio.git
$ cd MyPortfolio
$ yarn
```

## Скрипты package.json:

| Скрипт    | Назначение                                                                                   |
| --------- | -------------------------------------------------------------------------------------------- |
| dev       | Запустит webpack-dev-server с _горячей_ заменой модулей                                      |
| build     | Соберет проект для **production** (проект готов к загрузке на сервер)                        |
| reg       | Консольная утилита для регистрации. Использовать перед началом работы над **админ-панелью**. |
| storybook | Запустит сторибук для разработки компонентов                                                 |

#### Чтобы запустить скрипт:

```sh
$ npm run имя_скрипта
```

##### Либо:

```sh
$ yarn имя_скрипта
```

#### Посмотреть проект можно по [ссылке](https://virybalkin.github.io/MyPortfolio/dist/)
