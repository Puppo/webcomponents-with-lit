type ComponentSelector = string

type Route = {
    path: string;
    component: () => ComponentSelector;
} | {
    path: string;
    loadComponent: () => Promise<ComponentSelector>;
};

type Router = {
    addRoute: (route: Route) => Router;
    setNotFound: (notFound: () => Promise<ComponentSelector> | ComponentSelector) => Router;
    start: (el: HTMLElement) => Promise<void>;
}

export default function router(): Router {
    const routes: Route[] = [];
    let el: HTMLElement | null = null;
    let notFound: () => Promise<ComponentSelector> | ComponentSelector;

    const router: Router = {
        addRoute: (route: Route) => {
            routes.push(route);
            return router;
        },
        setNotFound: (notFoundRoute: () => Promise<ComponentSelector> | ComponentSelector) => {
            notFound = notFoundRoute;
            return router;

        },
        start: async (_el: HTMLElement): Promise<void> => {
            el = _el;
            window.addEventListener('hashchange', checkRoute)
            if (!window.location.hash) {
                window.location.hash = '#/'
            }
            await checkRoute()
        }
    }

    const checkRoute = async (): Promise<void> => {
        const currentRoute = routes.find(route => route.path === window.location.hash)
        let componentSelector: ComponentSelector;
        if(!currentRoute) {
            if (!notFound) return;
            componentSelector =  await notFound()
        } else {
            if ('component' in currentRoute) {
                componentSelector = currentRoute.component()
            } else {
                componentSelector = await currentRoute.loadComponent()
            }
        }
        const component = document.createElement(componentSelector)
        
        if(el) {
            el.innerHTML = '';
            el.appendChild(component)
        }
    }

    return router
}