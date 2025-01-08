 import {  clerkMiddleware  } from '@clerk/nextjs/server';

// export default  authMiddleware({
//   publicRoutes: ['/', '/sign-in', '/sign-up'], // Make '/' a public route
// });


export default clerkMiddleware()


export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", // Matches all routes except static files
    "/", 
    "/(api|trpc)(.*)"
  ],
};   



/*import { clerkMiddleware } from "@clerk/nextjs";

export default clerkMiddleware({
  publicRoutes: ['/', '/sign-in', '/sign-up'], // Specify public routes here
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", // Matches all routes except static files
    "/", 
    "/(api|trpc)(.*)"
  ],
};

*/



