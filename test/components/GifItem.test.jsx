import { fireEvent, render, screen } from '@testing-library/react';
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en GifItem', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';
    const id = '1';

    test('debe hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('debe mostrar la imágen con el URL y el ALT indicado', () => {
        render(<GifItem title={title} url={url} />);
        // screen.debug();
        // expect( screen.getByRole('img').src).toBe(url);
        // expect( screen.getByRole('img').alt).toBe(title);

        // Mejor forma de hacerlo:
        const { src, alt } = screen.getByRole('img');
        expect( src).toBe(url);
        expect( alt).toBe(title);

    });

    test('debe de mostrar el título en el componente', () => {
        render(<GifItem title={title} url={url} />);
        expect( screen.getAllByText( title )).toBeTruthy();
    });

});