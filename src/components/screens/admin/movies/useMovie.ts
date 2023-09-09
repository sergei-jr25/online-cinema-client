import { errorCatch } from "@/api/api.helper";
import { ITableItem } from "@/components/ui/admin-navigation/admin-table/AdminTable/admin-table.interface";
import { getAdminUrl } from "@/config/url.config";
import { useDebounce } from "@/hooks/useDebaunce";
import { userSerive } from "@/services/userService";
import { convertDate } from "@/utils/date/convertMongoDate";
import { toastrError } from "@/utils/toasrt-error";
import {toastr} from 'react-redux-toastr'

import {  ChangeEvent, useMemo, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { moviesService } from "@/services/moviesSerive";
import { getGenresList } from "@/utils/movies/getGenresListEach";
import { useRouter } from "next/router";

export function useUser() {
  
   // State and setters for debounced value
  const [searchTerm, setSearchTerm] = useState('');
  

  const debaunceSearch = useDebounce(searchTerm ,500)
  
  const queryData = useQuery(['movie-list', debaunceSearch],
    () => moviesService.getAll(debaunceSearch),
    {
      select: ({ data }) => 
        data.map((movie): ITableItem => ({
          _id: movie._id,
          editUrl: getAdminUrl(`movie/edit/${movie._id}`),
          items: [movie.title ,getGenresList(movie.genres), String(movie.rating)]
        })),
      onError: (error) => toastrError(error, 'Error list')
    }
  )

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const {push} = useRouter() 

  const {mutateAsync: createAsync } = useMutation('create movie', 
  () => moviesService.create(),
  {
    onError: (error) =>
      toastrError(error, 'Create movie'),
  
    onSuccess: ({data: _id}) => {
    toastr.success('Create movie', 'create was successful')
    push(getAdminUrl(`movie/edit/${_id}`))
  }} 
 )

  const {mutateAsync: deleteAsync } = useMutation('delete movie', 
  (movieId: string) => moviesService.deleteMovie((movieId)),
  {
    onError: (error) =>
      toastrError(error, 'Error list'),
  
    onSuccess: () => {
    toastr.success('Delete movie', 'delete was successful')
    queryData.refetch()
  }} 
 )

 return useMemo(() => ({
    deleteAsync,  ...queryData, handleSearch, searchTerm,createAsync
  }), [handleSearch, searchTerm, deleteAsync,createAsync])
}
 
