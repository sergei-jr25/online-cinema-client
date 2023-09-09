import { getAdminHomeUrl, getAdminUrl, getGenreUrl } from "@/config/url.config";
import { INavAdmin } from "./admin-navigation.interface";

export const adminNavData: INavAdmin[] = [
   {
      title: 'Users',
      link: getAdminUrl('users')
   },
   {
      title: 'Movies',
      link: getAdminUrl('movies')
   },
   {
      title: 'Staistics',
      link: getAdminHomeUrl()   
   },
   {
      title: 'Acters',
      link: getAdminUrl('acters')  
   },
   {
      title: 'Genres',
      link: getAdminUrl('genres')
   },
]