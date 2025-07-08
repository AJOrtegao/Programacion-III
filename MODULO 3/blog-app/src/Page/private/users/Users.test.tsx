import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Users from './Users';

import axios from "axios";
jest.mock("axios");
jest.mock('./UserFormDialog');
const mockedAxios = axios as jest.Mocked<typeof axios>;


const mockUsers = [
    { id: '1', username: 'user1', email: 'user1@mail.com', password: '123' },
    { id: '2', username: 'user2', email: 'user2@mail.com', password: '456' },
];

describe('Users', () => {
    beforeEach(() => {
        mockedAxios.get.mockResolvedValue({ data: { data: { items: mockUsers } } });
    });

    it('muestra la lista de usuarios', async () => {
        render(<Users />);
        expect(screen.getByText('Usuarios')).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.getByText('user1')).toBeInTheDocument();
            expect(screen.getByText('user2')).toBeInTheDocument();
        });
    });

    it('filtra usuarios por nombre', async () => {
        render(<Users />);
        await waitFor(() => screen.getByText('user1'));
        fireEvent.change(screen.getByPlaceholderText('Buscar...'), { target: { value: 'user2' } });
        expect(screen.queryByText('user1')).not.toBeInTheDocument();
        expect(screen.getByText('user2')).toBeInTheDocument();
    });

    it('abre el diálogo para nuevo usuario', async () => {
        render(<Users />);
        fireEvent.click(screen.getByText('Nuevo usuario'));
        expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
});
