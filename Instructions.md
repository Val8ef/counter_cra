# PROMPT:

Предложи детальный план обучения программированию на React для новичка, который имеет только базовое представление об HTML и JavaScript. Опыта программирования на React нет. В качестве первого проекта, на котором новичок будет обучаться, выбран проект Counter. В этом проекте предполагается создание простого web приложения, которое будет состоять из одной компоненты <Counter />. Компонента должна отрисовывать текущее значение счетчика и трех кнопок "+", "-" и "Reset" для управления состоянием библиотеки. В качестве проекта-стартера будет использоваться create-react-app. В качестве UI библиотеки будет использоваться React Bootstrap. Построй план от простого к сложному. Например, в начале обучения создать "Hello World" приложение с помощью create-react-app. Затем, подключить к приложению библиотеку React Bootstrap. Затем реализовать статическую версию компоненты Counter с использованием компонент React Bootsrap. Затем, добавить реакцию на нажатие кнопок "+", "-" и "Reset". Затем подключить state к компоненте Counter. Затем реализовать изменение состояния компоненты Counter при нажатии кнопок "+", "-" и "Reset".

# Ответ:

### План обучения программированию на React

#### 1. Установка необходимых инструментов:
   - **Node.js** – скачать и установить последнюю LTS-версию.
   - **Visual Studio Code** (или другой редактор кода).
   - **Git** – установите Git для работы с версиями кода.
   
#### 2. Основы HTML и CSS:
   Если у вас уже есть базовые знания HTML и CSS, переходите к следующему шагу. Если нет, потратьте немного времени на изучение основ разметки страниц и стилей.

#### 3. Создание простого "Hello World" приложения с помощью `create-react-app`:
   ```bash
   npx create-react-app my-first-react-app
   cd my-first-react-app
   npm start
   ```
   Это создаст простое React-приложение, которое вы сможете запустить локально через браузер.

#### 4. Знакомство с основными концепциями React:
   - **Компоненты**: изучите, что такое компоненты в React, их типы (функциональные и классовые), а также жизненный цикл компонентов.
   - **JSX**: разберитесь с синтаксисом JSX, как он используется внутри компонентов.
   - **Props**: передача данных между компонентами через свойства (`props`).
   - **State**: управление состоянием компонента с помощью `useState`.

#### 5. Подключение библиотеки React Bootstrap:
   Установим библиотеку через npm:
   ```bash
   npm install react-bootstrap bootstrap
   ```
   Добавьте импорт стилей в файл `src/index.js`:
   ```javascript
   import 'bootstrap/dist/css/bootstrap.min.css';
   ```

#### 6. Реализация статической версии компоненты `<Counter />`:
   Создайте новый файл `src/Counter.js`, где определите функциональный компонент:
   ```javascript
   import { Button, Card } from 'react-bootstrap';

   function Counter() {
       return (
           <Card>
               <Card.Body>
                   <h2>Counter</h2>
                   <p>Current value: 0</p>
                   <Button variant="primary">+</Button>{' '}
                   <Button variant="secondary">-</Button>{' '}
                   <Button variant="warning">Reset</Button>
               </Card.Body>
           </Card>
       );
   }

   export default Counter;
   ```
   Импортируйте эту компоненту в ваш основной файл `App.js`:
   ```javascript
   import Counter from './Counter';

   function App() {
     return (
       <div className="App">
         <Counter />
       </div>
     );
   }

   export default App;
   ```

#### 7. Добавление реакции на нажатия кнопок:
   Обновите компонент `<Counter />`, чтобы кнопки реагировали на клики:
   ```javascript
   function Counter() {
       const handleIncrement = () => console.log('Increment');
       const handleDecrement = () => console.log('Decrement');
       const handleReset = () => console.log('Reset');

       return (
           <Card>
               <Card.Body>
                   <h2>Counter</h2>
                   <p>Current value: 0</p>
                   <Button onClick={handleIncrement} variant="primary">+</Button>{' '}
                   <Button onClick={handleDecrement} variant="secondary">-</Button>{' '}
                   <Button onClick={handleReset} variant="warning">Reset</Button>
               </Card.Body>
           </Card>
       );
   }
   ```

#### 8. Подключение состояния к компоненте `<Counter />`:
   Используйте хук `useState` для хранения текущего значения счетчика:
   ```javascript
   import { useState } from 'react';

   function Counter() {
       const [count, setCount] = useState(0);

       const handleIncrement = () => setCount(count + 1);
       const handleDecrement = () => setCount(count - 1);
       const handleReset = () => setCount(0);

       return (
           <Card>
               <Card.Body>
                   <h2>Counter</h2>
                   <p>Current value: {count}</p>
                   <Button onClick={handleIncrement} variant="primary">+</Button>{' '}
                   <Button onClick={handleDecrement} variant="secondary">-</Button>{' '}
                   <Button onClick={handleReset} variant="warning">Reset</Button>
               </Card.Body>
           </Card>
       );
   }
   ```

#### 9. Реализация изменения состояния при нажатиях кнопок:
   Теперь ваше приложение должно корректно увеличивать, уменьшать и сбрасывать значение счетчика.

#### 10. Установка и настройка Cypress:
   Для тестирования установите Cypress:
   ```bash
   npm install cypress --save-dev
   npx cypress open
   ```
   Создайте первый тестовый файл `cypress/integration/counter.spec.js`:
   ```javascript
   describe('Counter', () => {
       beforeEach(() => {
           cy.visit('/');
       });

       it('should display initial counter value as 0', () => {
           cy.get('[data-cy=current-value]').contains('0');
       });

       it('should increment the counter when clicking on + button', () => {
           cy.get('[data-cy=increment-button]').click();
           cy.get('[data-cy=current-value]').contains('1');
       });

       it('should decrement the counter when clicking on - button', () => {
           cy.get('[data-cy=decrement-button]').click();
           cy.get('[data-cy=current-value]').contains('-1');
       });

       it('should reset the counter to 0 when clicking on Reset button', () => {
           cy.get('[data-cy=reset-button]').click();
           cy.get('[data-cy=current-value]').contains('0');
       });
   });
   ```
   Добавьте атрибуты `data-cy` в компонент `<Counter />` для упрощения поиска элементов в тестах:
   ```javascript
   <p data-cy="current-value">Current value: {count}</p>
   <Button data-cy="increment-button" onClick={handleIncrement} variant="primary">+</Button>{' '}
   <Button data-cy="decrement-button" onClick={handleDecrement} variant="secondary">-</Button>{' '}
   <Button data-cy="reset-button" onClick={handleReset} variant="warning">Reset</Button>
   ```

---

Этот план охватывает все ключевые шаги для освоения основ React и разработки простого приложения. После выполнения всех этих шагов вы будете готовы перейти к созданию более сложных проектов!