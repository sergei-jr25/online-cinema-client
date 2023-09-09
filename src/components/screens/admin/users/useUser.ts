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

export function useUser() {
   // State and setters for debounced value
  const [searchTerm, setSearchTerm] = useState('');

  const debaunceSearch = useDebounce(searchTerm ,500)
  
  const queryData = useQuery(['user-list', debaunceSearch],
    () => userSerive.getAll(debaunceSearch),
    {
      select: ({ data }) => 
        data.map((user): ITableItem => ({
          _id: user._id,
          editUrl: getAdminUrl(`user/edit/${user._id}`),
          items: [user.email, convertDate(user.createdAt)]
        })),
      onError: (error) => toastrError(error, 'Error list')
    }
  )

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const {mutateAsync: deleteAsync } = useMutation('delete user', 
  (userId: string) => userSerive.deleteUser(userId),
  {
    onError: (error) =>
      toastrError(error, 'Error list'),
  
    onSuccess: () => {
    toastr.success('Delete user', 'delete was successful')
    queryData.refetch()
  }} 
 )

 return useMemo(() => ({
    deleteAsync,  ...queryData, handleSearch, searchTerm
  }), [handleSearch, searchTerm, deleteAsync])
}
 
