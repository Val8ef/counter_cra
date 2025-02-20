import { Button, Card } from 'react-bootstrap';
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    const handleReset = () => setCount(0);

    return (
        <Card>
            <Card.Body>
                <h2>Счетчик</h2>
                <p>Текущее значение: {count}</p>
                <Button onClick={handleIncrement} variant="primary">+</Button>{' '}
                <Button onClick={handleDecrement} variant="secondary">-</Button>{' '}
                <Button onClick={handleReset} variant="warning">Сброс</Button>
            </Card.Body>
        </Card>
    );
}

export default Counter;