import { Button, Card } from 'react-bootstrap';

function Counter() {
    return (
        <Card>
            <Card.Body>
                <h2>Счетчик</h2>
                <p>Текущее значение: 0</p>
                <Button variant="primary">+</Button>{' '}
                <Button variant="secondary">-</Button>{' '}
                <Button variant="warning">Сброс</Button>
            </Card.Body>
        </Card>
    );
}

export default Counter;