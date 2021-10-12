import createRouter from "./router";

const router = createRouter();

router
  .addRoute({
    path: "#/",
    loadComponent: () =>
      import("./pages/HomePage").then(mod => mod.LitHomePageSelector),
  })
  .addRoute({
    path: "#/example-one",
    loadComponent: () =>
      import("./pages/One/ExampleOne").then(mod => mod.LitExampleOneSelector),
  })
  .addRoute({
    path: "#/example-two",
    loadComponent: () =>
      import("./pages/Two/ExampleTwo").then(mod => mod.LitExampleTwoSelector),
  })
  .addRoute({
    path: "#/example-three",
    loadComponent: () =>
      import("./pages/Three/ExampleThree").then(
        mod => mod.LitExampleThreeSelector
      ),
  })
  .setNotFound(() =>
    import("./pages/NotFoundPage").then(mod => mod.litNotFoundPageSelector)
  );

export const mount = (el: HTMLElement): void => {
  router.start(el);
};
