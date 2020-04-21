const replace = jest
  .fn()
  .mockImplementation((url) => console.log("replace mock", url));
const push = jest
  .fn()
  .mockImplementation((url) => console.log("push mock", url));
const router = {
  pathname: "/search",
  asPath: "/search?term=coffee",
  query: {
    term: "coffee",
  },
  push,
  replace,
};
module.exports = {
  withRouter: (component) => {
    component.defaultProps = {
      ...component.defaultProps,
      router: router,
    };
    return component;
  },
  useRouter: () => {
    return router;
  },
  router: router,
  replace,
  push,
};
