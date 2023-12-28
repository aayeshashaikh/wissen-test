import React, { useMemo, useState } from 'react';
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  MRT_PaginationState,
} from 'material-react-table';
import { doGet } from '../../../utils/AxiosInstance';
import { Users } from '../../../utils/api.routes';
import { useQuery } from '@tanstack/react-query';

interface IUserProps {
  id: number;
  name: string;
  pantone_value: string;
  year: number;
  color: string
}

export const Dashboard: React.FC = () => {
  const [userList, setUserList] = useState<IUserProps[]>([]);
  // eslint-disable-next-line camelcase
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [totalRecords, setTotalRecords] = useState<number>(0);

  function useGetUser() {
    let url = Users.GET_USERS;
    url += `${url.includes('?') ? '&' : '?'}pageNumber=${pagination.pageIndex + 1}`;
    url += `${url.includes('?') ? '&' : '?'}pageSize=${pagination.pageSize}`;
    return useQuery<IUserProps[]>({
      queryKey: ['get-user', pagination],
      queryFn: async () => {
        const response = await doGet(url, {});
        console.log(response, 'res');
        if (response.data.data) {
          setTotalRecords(response.data.totalRecordCount);
          setUserList(response.data.data);
        }
        return response.data;
      },
    });
  }

  const { isSuccess } = useGetUser();


  // eslint-disable-next-line camelcase
  const columns = useMemo<MRT_ColumnDef<IUserProps>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
      },
      {
        accessorKey: 'name',
        header: 'Name',
        size: 140,
      },
      {
        accessorKey: 'pantone_value',
        header: 'Pantone Value',
        size: 140,
      },
      {
        accessorKey: 'year',
        header: 'Year',
        size: 140,
      },
      {
        accessorKey: 'color',
        header: 'Color',
        size: 140,
      },
      {
        accessorKey: 'id',
        header: 'ID',
        size: 140,
      },
    ],
    [],
  );

  return (
    <div className='relative overflow-x-auto shadow-register rounded-xl'>
      <MaterialReactTable
        columns={columns}
        data={isSuccess ? userList : []}
        enableColumnActions={false}
        enableColumnFilters={false}
        enableDensityToggle={false}
        enableFullScreenToggle={false}
        enableRowActions
        manualPagination
        enableStickyFooter
        rowCount={totalRecords}
        onPaginationChange={setPagination}
        state={{
          pagination,
        }}
        muiTableHeadProps={{
          sx: {
            '& tr > th ': {
              fontSize: '18px',
              color: '#87888A',
              fonFamily: 'Poppins',
              fontWeight: 600,
            },
            '& tr > th > div > div > span': {
              display: 'none',
            },
          },
        }}
        muiTableBodyCellProps={{
          sx: {
            fontFamily: 'Poppins',
            fontWeight: 500,
          },
        }}
      />
    </div>
  );
};
