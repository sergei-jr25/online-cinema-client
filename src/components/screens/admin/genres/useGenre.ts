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
import { genreService } from "@/services/genreService";
import { useRouter } from "next/router";

export function useUser() {
   // State and setters for debounced value
  const [searchTerm, setSearchTerm] = useState('');

  const debaunceSearch = useDebounce(searchTerm ,500)
  
  const queryData = useQuery(['genre-list', debaunceSearch],
    () => genreService.getAll(debaunceSearch),  
    {
      select: ({ data }) => 
        data.map((genre): ITableItem => ({
          _id: genre._id,
          editUrl: getAdminUrl(`genre/edit/${genre._id}`),
          items: [genre.name, genre.slug]
        })),
      onError: (error) => toastrError(error, 'Error list')
    },
    
  )

  console.log('queryDataGenres', queryData.data );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const {push} = useRouter() 

  const {mutateAsync: createAsync } = useMutation('create genre', 
  () => genreService.create(),
  {
    onError: (error) =>
      toastrError(error, 'Create genre'),
  
    onSuccess: ({data: _id}) => {
    toastr.success('Create genre', 'create was successful')
    push(getAdminUrl(`genre/edit/${_id}`))
      }
    },
  
 )

  const {mutateAsync: deleteAsync } = useMutation('delete genre', 
  (id: string) => genreService.deleteGenre(id),
  {
    onError: (error) =>
      toastrError(error, 'Error list'),
  
    onSuccess: () => {
    toastr.success('Delete genre', 'delete was successful')
    queryData.refetch()
  }} 
 )

 return useMemo(() => ({
    deleteAsync,  ...queryData, handleSearch, searchTerm,createAsync
  }), [handleSearch, searchTerm, deleteAsync, createAsync])
}
 
