const HOME = '/';
const ABOUT = '/about';
const ERROR = '/error';
const OPEN = '/open';
const SAVE = '/save';

export const ROUTES = {
    home: { path: HOME, to: () => HOME },
    open: { path: OPEN, to: () => OPEN },
    save: { path: SAVE, to: () => SAVE },
    about: { path: ABOUT, to: () => ABOUT },
    error: {
        path: ERROR,
        to: (title: string, message?: string) => `${ERROR}?title=${title}&message=${message}`,
    },
};

export type ROUTE_KEYS = keyof typeof ROUTES;
