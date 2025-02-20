import { Button, Card } from 'react-bootstrap';

function Counter() {
    const handleIncrement = () => console.log('Increment');
    const handleDecrement = () => console.log('Decrement');
    const handleReset = () => console.log('Reset');

    return (
        <Card>
            <Card.Body>
                <h2>Счетчик</h2>
                <p>Текущее значение: 0</p>
                <Button onClick={handleIncrement} variant="primary">+</Button>{' '}
                <Button onClick={handleDecrement} variant="secondary">-</Button>{' '}
                <Button onClick={handleReset} variant="warning">Сброс</Button>
            </Card.Body>
        </Card>
    );
}

export default Counter;