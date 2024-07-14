export const navItems = [
  {
    id: 1,
    title: 'Home',
    route: '/',
  },
  {
    id: 2,
    title: 'About',
    route: '/about',
    isSecure: true, //This route is secure and requires authentication, only shown to authenticated users
  },
  {
    id: 3,
    title: 'Services',
    route: '/services',
    isSecure: true, //This route is secure and requires authentication, only shown to authenticated users
  },
  {
    id: 4,
    title: 'Contact',
    route: '/contact',
    isSecure: true, //This route is secure and requires authentication, only shown to authenticated users
  },
  {
    id: 5,
    title: 'Sign in',
    route: '/signin',
    isSecure: false,
  },
  {
    id: 6,
    title: 'Log out',
    route: '/logout',
    isSecure: true, //This route is secure and requires authentication, only shown to authenticated users
  }
]