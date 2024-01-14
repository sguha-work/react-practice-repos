import { render, screen, cleanup } from '@testing-library/react';
import MyComponent1 from '../MyComponent1.component';

test('should render MyComponent1', ()=>{
    render(<MyComponent1></MyComponent1>);
    const MyComponent1_dom = screen.getByTestId('MyComponent1-test');
    expect(MyComponent1_dom).toBeInTheDocument();
    expect(MyComponent1_dom).toHaveTextContent('one');
});
test('test', () => {
    expect(true).toBe(true);
});