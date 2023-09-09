import { IMenu } from "./menu.interface";

 const firstMenuData:IMenu  = {
   title: 'Menu',
   items: [{
      icon: "MdHome",
      link: '/',
      name: 'Home'
   },
      
   {
      icon: "MdExplore",
      link: '/genres',
       name: 'Discovery'
  },

   {
      icon: "MdRefresh",
      link: '/fresh',
      name: 'Fresh'
    },
  
      {
      icon: "MdLocalFireDepartment",
      link: '/trending',
       name: 'Trending'
      }
   ]
}

 const userMenu:IMenu = {
   title: 'General',
   items: []
}

export const menus:IMenu[] =[firstMenuData, userMenu]